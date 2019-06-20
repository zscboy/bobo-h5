
import { RoomHost } from "../lobby/interface/LInterfaceExports";
import { Logger, RoomInfo, SoundMgr, UserInfo } from "../lobby/lcore/LCoreExports";
import { Share } from "../lobby/shareUtil/ShareExports";
import { ChatData } from "../lobby/views/chat/ChatExports";
import { GameOverResultViewA } from "./GameOverResultViewA";
import { HandlerActionResultNotifyA } from "./handlers/HandlerActionResultNotifyA";
import { HandlerMsg2LobbyA } from "./handlers/HandlerMsg2LobbyA";
import { HandlerMsgActionAllowedA } from "./handlers/HandlerMsgActionAllowedA";
import { HandlerMsgDealA } from "./handlers/HandlerMsgDealA";
import { HandlerMsgDeletedA } from "./handlers/HandlerMsgDeletedA";
import { HandlerMsgDisbandNotifyA } from "./handlers/HandlerMsgDisbandNotifyA";
import { HandlerMsgDonateA } from "./handlers/HandlerMsgDonateA";
import { HandlerMsgGameOverA } from "./handlers/HandlerMsgGameOverA";
import { HandlerMsgHandOverA } from "./handlers/HandlerMsgHandOverA";
import { HandlerMsgKickoutA } from "./handlers/HandlerMsgKickoutA";
import { HandlerMsgReActionAllowedA } from "./handlers/HandlerMsgReActionAllowedA";
import { HandlerMsgRestoreA } from "./handlers/HandlerMsgRestoreA";
import { HandlerMsgRoomUpdateA } from "./handlers/HandlerMsgRoomUpdateA";
import { HandlerMsgShowTipsA } from "./handlers/HandlerMsgShowTipsA";
import { HandlerMsgUpdateLocationA } from "./handlers/HandlerMsgUpdateLocationA";
import { HandlerMsgUpdatePropCfgA } from "./handlers/HandlerMsgUpdatePropCfgA";
import { HandResultViewA } from "./HandResultViewA";
import { PlayerA } from "./PlayerA";
import { PlayerInterfaceA } from "./PlayerInterfaceA";
import { proto } from "./proto/protoGameA";
import { ReplayA } from "./ReplayA";
import { PlayerInfo, RoomInterfaceA } from "./RoomInterfaceA";
import { RoomViewA } from "./RoomViewA";

type msgHandler = (msgData: ByteBuffer, room: RoomInterfaceA) => Promise<void>;
/**
 * 定义一个接口 关联Game 到room
 */
const msgCodeEnum = proto.pokerface.MessageCode;
const msgHandlers: { [key: number]: msgHandler } = {
    [msgCodeEnum.OPActionAllowed]: HandlerMsgActionAllowedA.onMsg,
    [msgCodeEnum.OPReActionAllowed]: HandlerMsgReActionAllowedA.onMsg,
    [msgCodeEnum.OPActionResultNotify]: HandlerActionResultNotifyA.onMsg,
    [msgCodeEnum.OPDeal]: HandlerMsgDealA.onMsg,
    [msgCodeEnum.OPHandOver]: HandlerMsgHandOverA.onMsg,
    [msgCodeEnum.OPRoomUpdate]: HandlerMsgRoomUpdateA.onMsg,
    [msgCodeEnum.OPRestore]: HandlerMsgRestoreA.onMsg,
    [msgCodeEnum.OPRoomDeleted]: HandlerMsgDeletedA.onMsg,
    [msgCodeEnum.OPRoomShowTips]: HandlerMsgShowTipsA.onMsg,
    [msgCodeEnum.OPGameOver]: HandlerMsgGameOverA.onMsg,
    [msgCodeEnum.OPDisbandNotify]: HandlerMsgDisbandNotifyA.onMsg,
    [msgCodeEnum.OPKickout]: HandlerMsgKickoutA.onMsg,
    [msgCodeEnum.OPDonate]: HandlerMsgDonateA.onMsg,
    [msgCodeEnum.OPUpdateLocation]: HandlerMsgUpdateLocationA.onMsg,
    [msgCodeEnum.OP2Lobby]: HandlerMsg2LobbyA.onMsg,
    [msgCodeEnum.OPUpdatePropCfg]: HandlerMsgUpdatePropCfgA.onMsg
};

/**
 * 房间
 */
export class RoomA {
    public readonly myUser: UserInfo;
    public readonly roomInfo: RoomInfo;
    public readonly host: RoomHost;
    public scoreRecords: proto.pokerface.IMsgRoomHandScoreRecord[];
    public state: number;
    public ownerID: string;
    public handStartted: number = 0;
    public windFlowerID: number;
    public isDestroy: boolean = false;
    public bankerChairID: number = 0;
    public markup: number;
    public isContinuousBanker: boolean;
    public roomView: RoomViewA;
    public players: { [key: string]: PlayerA } = {};
    public replay: ReplayA;
    // public tilesInWall: number;
    public myPlayer: PlayerA;
    public msgDisbandNotify: proto.pokerface.MsgDisbandNotify;
    public handNum: number;
    public readonly roomType: number;
    private soundNum: number;
    public constructor(myUser: UserInfo, roomInfo: RoomInfo, host: RoomHost, rePlay?: ReplayA) {
        this.myUser = myUser;
        this.host = host;
        this.replay = rePlay;
        this.roomInfo = roomInfo;

        const roomConfigJSON = <{ [key: string]: boolean | number | string }>JSON.parse(roomInfo.config);
        // Logger.debug("roomConfigJSON ---------------------------------------------", roomConfigJSON);
        this.roomType = <number>roomConfigJSON[`roomType`];
        this.handNum = <number>roomConfigJSON[`handNum`];
    }

    public getRoomHost(): RoomHost {
        return this.host;
    }

    public async dispatchWebsocketMsg(msg: proto.pokerface.GameMessage): Promise<void> {
        Logger.debug("Room.dispatchWebsocketMsg, ops:", msg.Ops);
        const handler = msgHandlers[msg.Ops];
        if (handler !== undefined) {
            await handler(msg.Data, this);
        } else {
            Logger.debug("room has no handler for msg, ops:", msg.Ops);
        }
    }

    public getPlayerByChairID(chairID: number): PlayerA {
        let player = null;
        Object.keys(this.players).forEach((key: string) => {
            const p = this.players[key];
            if (p.chairID === chairID) {
                player = p;
            }
        });

        return player;
    }

    public getPlayerInfoByChairID(chairID: number): PlayerInfo {
        let player = null;
        Object.keys(this.players).forEach((key: string) => {
            const p = this.players[key];
            if (p.chairID === chairID) {
                player = p;
            }
        });

        return player;
    }

    public getRoomView(): RoomViewA {
        return this.roomView;
    }
    //把tilesInWall显示到房间的剩余牌数中
    // public updateTilesInWallUI(): void {
    //     this.roomView.tilesInWall.text = `剩牌 :${this.tilesInWall}`;
    // }

    // 加载房间的view
    public loadRoomView(view: fgui.GComponent): void {
        const roomView = new RoomViewA(this, view);
        this.roomView = roomView;

        this.playBgSound();
    }

    // 创建玩家对象    // 并绑定playerView
    public createPlayerByInfo(playerInfo: proto.pokerface.IMsgPlayerInfo): void {
        const player = new PlayerA(playerInfo.userID, playerInfo.chairID, this);
        player.updateByPlayerInfo(playerInfo);

        const playerView = this.roomView.getPlayerViewByChairID(playerInfo.chairID, this.myPlayer.chairID);
        player.bindView(playerView);

        this.players[player.userID] = player;
    }

    // 创建自身的玩家对象    // 并绑定playerView
    public createMyPlayer(playerInfo: proto.pokerface.IMsgPlayerInfo): void {
        const player = new PlayerA(playerInfo.userID, playerInfo.chairID, this);

        player.updateByPlayerInfo(playerInfo);

        const playerView = this.roomView.playerViews[1];
        player.bindView(playerView);

        this.players[player.userID] = player;

        this.myPlayer = player;
    }

    public onReadyButtonClick(): void {
        const gm = new proto.pokerface.GameMessage();
        gm.Ops = proto.pokerface.MessageCode.OPPlayerReady;
        const buf = proto.pokerface.GameMessage.encode(gm);
        this.host.sendBinary(buf);
    }

    // 根据玩家的chairID获得相应的playerViewChairID    // 注意服务器的chairID是由0开始
    public getPlayerViewChairIDByChairID(chairID: number): number {
        const myChairId = this.myPlayer.chairID;
        //获得chairID相对于本玩家的偏移
        const c = (chairID - myChairId + 3) % 3;
        //加1是由于lua table索引从1开始

        return c + 1;
    }
    //从房间的玩家列表中删除一个玩家
    //注意玩家视图的解除绑定需要外部处理
    public removePlayer(userID: string): void {
        delete this.players[userID];
    }

    //往服务器发送消息
    public sendMsg(opCode: number, msg?: ByteBuffer): void {
        const host = this.host;
        if (host == null) {
            return;
        }
        const gm = new proto.pokerface.GameMessage();
        gm.Ops = opCode;

        if (msg != null) {
            gm.Data = msg;
        }
        const buf = proto.pokerface.GameMessage.encode(gm);
        host.sendBinary(buf);
    }

    //重置房间，以便开始新一手游戏
    public resetForNewHand(): void {
        Object.keys(this.players).forEach((key: string) => {
            const v = this.players[key];
            v.resetForNewHand();
        });
        //隐藏箭头
    }

    //背景声音
    public resumeBackMusicVolume(): void {
        //if this:DelayRunCanceled() {
        // if backMusicVolume {
        //     soundMgr:SetBackMusicVolume(backMusicVolume)
        // else
        //     soundMgr:SetBackMusicVolume(soundModule.backMusicVolume)
        // }
        //}
    }

    public onExitButtonClicked(): void {
        //this.sendMsg(proto.mahjong.MessageCode.OPDisbandRequest);
    }

    //处理玩家申请解散请求
    public onDissolveClicked(): void {
        this.sendMsg(proto.pokerface.MessageCode.OPDisbandRequest);
    }

    //更新解散处理界面
    public updateDisbandVoteView(msgDisbandNotify: proto.pokerface.MsgDisbandNotify): void {
        this.msgDisbandNotify = msgDisbandNotify;

        this.roomView.updateDisbandVoteView(msgDisbandNotify);
    }

    //发送解散回复给服务器
    public sendDisbandAgree(agree: boolean): void {
        const msgDisbandAnswer = new proto.pokerface.MsgDisbandAnswer();
        msgDisbandAnswer.agree = agree;
        const buf = proto.pokerface.MsgDisbandAnswer.encode(msgDisbandAnswer);
        this.sendMsg(proto.pokerface.MessageCode.OPDisbandAnswer, buf);
    }

    public getRoomConfig(): void {
        // if (this.config != null) {
        //     return this.config
        // }

        // const roomInfo = this.roomInfo
        // if roomInfo != null && roomInfo.config != null && roomInfo.config != "" {
        //     const config = rapidjson.decode(roomInfo.config)
        //     this.config = config
        // }
        // return this.config
    }

    public loadHandResultView(msgHandOver: proto.pokerface.IMsgHandOver): void {
        const view = this.host.component.addComponent(HandResultViewA);
        view.showView(this, msgHandOver);
    }

    public loadGameOverResultView(msgGameOver: proto.pokerface.IMsgGameOver): void {
        const view = this.host.component.addComponent(GameOverResultViewA);
        view.showView(this, msgGameOver);
    }

    public sendDonate(donateId: number, toChairID: number): void {
        // 1：鲜花    2：啤酒    3：鸡蛋    4：拖鞋
        // 8：献吻    7：红酒    6：大便    5：拳头
        const chairID = this.myPlayer.chairID;

        const msgDonate = new proto.pokerface.MsgDonate();
        msgDonate.fromChairID = chairID;
        msgDonate.toChairID = toChairID;
        msgDonate.itemID = donateId;

        const actionMsgBuf = proto.pokerface.MsgDonate.encode(msgDonate);
        this.sendMsg(proto.pokerface.MessageCode.OPDonate, actionMsgBuf);
    }

    // 显示道具动画
    public showDonate(msgDonate: proto.pokerface.MsgDonate): void {
        // Logger.debug("显示道具动画 msgDonate : ", msgDonate);
        if (msgDonate != null) {
            const itemID = msgDonate.itemID;
            const oCurOpObj = this.roomView.donateMoveObj;
            // this.roomView.donateMoveObj.node.clone .cloneNode();
            const fromPlayer = this.getPlayerByChairID(msgDonate.fromChairID);
            const toPlayer = this.getPlayerByChairID(msgDonate.toChairID);
            if (fromPlayer == null || toPlayer == null) {
                Logger.debug("llwant, fromPlayer || toPlayer is null...");

                return;
            }
            const fromPos = fromPlayer.playerView.head.headView.node.position;
            const toPos = toPlayer.playerView.head.headView.node.position;
            let sprite = "";
            let effobjSUB = "";
            let sound = "";
            const handTypeMap = [
                () => {
                    sprite = "dj_meigui";
                    effobjSUB = "Effect_baojv_hua";
                    sound = "daoju_hua";
                },
                () => {
                    sprite = "dj_ganbei";
                    effobjSUB = "Effect_daojv_jiubei";
                    sound = "daoju_pijiu";
                },
                () => {
                    sprite = "dj_jd";
                    effobjSUB = "Effect_daojv_jidan";
                    sound = "daoju_jidan";
                },
                () => {
                    sprite = "dj_tuoxie";
                    effobjSUB = "Effect_daojv_tuoxie";
                    sound = "daoju_tuoxie";
                },
                () => {
                    sprite = "dj_qj";
                    effobjSUB = "Effect_daojv_quanji";
                    sound = "daoju_quanji";
                },
                () => {
                    sprite = "dj_bb";
                    effobjSUB = "Effect_daojv_shiren";
                    sound = "daoju_shiren";
                },
                () => {
                    sprite = "dj_hj";
                    effobjSUB = "Effect_daojv_hongjiu";
                    sound = "daoju_hongjiu";
                },
                () => {
                    sprite = "dj_mmd";
                    effobjSUB = "Effect_daojv_zui";
                    sound = "daoju_zui";
                }
            ];

            const fn = handTypeMap[itemID - 1];
            fn();
            if (sprite == null || effobjSUB == null) {
                Logger.debug("llwant, sprite || effobjSUB is null...");

                return;
            }
            oCurOpObj.node.position = fromPos;
            oCurOpObj.url = `ui://lobby_player_info/${sprite}`;
            oCurOpObj.visible = true;
            //飞动画
            const moveAnimation = cc.moveTo(1, toPos);
            oCurOpObj.node.runAction(moveAnimation);
            const callBack = () => {
                //飞完之后 关闭oCurOpObj
                oCurOpObj.visible = false;
                //播放特效
                toPlayer.playerView.playerDonateEffect(effobjSUB);
                //播放声音
                if (sound !== "") {
                    SoundMgr.playEffectAudio(`daoju/${sound}`);
                }
            };
            this.getRoomHost().component.scheduleOnce(callBack, 1);
        }
    }
    public isMe(userID: string): boolean {
        return this.myUser.userID === userID;
    }
    public isReplayMode(): boolean {
        return this.replay !== undefined;
    }

    public getBankerChairID(): number {
        return this.bankerChairID;
    }
    //往服务器发送action消息
    public sendActionMsg(msgAction: ByteBuffer): void {
        this.sendMsg(proto.pokerface.MessageCode.OPAction, msgAction);
    }
    public quit(): void {
        this.stopBgSound();
        this.host.quit();
    }
    public getPlayerByUserID(userID: string): PlayerInterfaceA {

        return this.players[userID];
    }
    public getPlayerByCharID(charID: string): PlayerA {

        return this.players[charID];
    }

    public getMyPlayer(): PlayerInterfaceA {
        return this.myPlayer;
    }

    public getMyPlayerInfo(): PlayerInfo {
        return this.myPlayer.playerInfo;
    }

    //设置当前房间所等待的操作玩家
    public setWaitingPlayer(chairID: number): void {
        const player = this.getPlayerByChairID(chairID);
        this.roomView.setWaitingPlayer(player.playerView);
    }
    public getPlayers(): { [key: string]: PlayerInterfaceA } {
        return this.players;
    }
    public showRoomNumber(): void {
        this.roomView.showRoomNumber();
    }
    public onUpdateStatus(state: number): void {
        this.roomView.onUpdateStatus(state);
    }
    public switchBg(index: number): void {
        //
        this.roomView.switchBg(index);
    }
    public showMsg(chatData: ChatData): void {
        this.players[chatData.fromUserID].onChatMsg(chatData);
    }
    public showOrHideReadyButton(isShow: boolean): void {
        this.roomView.showOrHideReadyButton(isShow);
    }

    public onInviteButtonClick(): void {
        Share.shareGame(
            this.host.eventTarget,
            Share.ShareSrcType.GameShare,
            Share.ShareMediaType.Image,
            Share.ShareDestType.Friend,
            `roomNumber=${this.roomInfo.roomNumber}`);
    }
    /**
     * 挂起若干秒
     * @param seconds 秒数
     */
    public async coWaitSeconds(seconds: number): Promise<void> {
        return new Promise<void>((resovle) => {
            this.host.component.scheduleOnce(
                () => {
                    resovle();
                },
                seconds);
        });
    }

    //播放背景音乐
    private playBgSound(): void {
        SoundMgr.playEffectAudio("gamea/game_matchBg", true, <(num: number) => void>this.bgSound.bind(this));
    }
    private bgSound(num: number): void {
        this.soundNum = num;
    }
    private stopBgSound(): void {
        SoundMgr.stopEffect(this.soundNum);
    }
}
