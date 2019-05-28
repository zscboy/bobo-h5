
import { Logger, RoomInfo, UserInfo } from "../lobby/lcore/LCoreExports";
import { HandlerActionResultNotify } from "./handlers/HandlerActionResultNotify";
import { HandlerMsg2Lobby } from "./handlers/HandlerMsg2Lobby";
import { HandlerMsgActionAllowed } from "./handlers/HandlerMsgActionAllowed";
import { HandlerMsgDeal } from "./handlers/HandlerMsgDeal";
import { HandlerMsgDeleted } from "./handlers/HandlerMsgDeleted";
import { HandlerMsgDisbandNotify } from "./handlers/HandlerMsgDisbandNotify";
import { HandlerMsgDonate } from "./handlers/HandlerMsgDonate";
import { HandlerMsgGameOver } from "./handlers/HandlerMsgGameOver";
import { HandlerMsgHandOver } from "./handlers/HandlerMsgHandOver";
import { HandlerMsgKickout } from "./handlers/HandlerMsgKickout";
import { HandlerMsgReActionAllowed } from "./handlers/HandlerMsgReActionAllowed";
import { HandlerMsgRestore } from "./handlers/HandlerMsgRestore";
import { HandlerMsgRoomUpdate } from "./handlers/HandlerMsgRoomUpdate";
import { HandlerMsgShowTips } from "./handlers/HandlerMsgShowTips";
import { HandlerMsgUpdateLocation } from "./handlers/HandlerMsgUpdateLocation";
import { HandlerMsgUpdatePropCfg } from "./handlers/HandlerMsgUpdatePropCfg";
import { Player } from "./Player";
import { proto } from "./proto/protoGame";
import { MeldType, PlayerInfo, RoomInterfaces, TingPai } from "./RoomInterfaces";
import { RoomView } from "./RoomView";
/**
 * 定义一个接口 关联Game 到room
 */
interface RoomHost {
    quit: Function;
}
const msgCodeEnum = proto.mahjong.MessageCode;
const msgHandlers: { [key: number]: (msgData: ByteBuffer, room: RoomInterfaces) => void } = {
    [msgCodeEnum.OPActionAllowed]: HandlerMsgActionAllowed.onMsg,
    [msgCodeEnum.OPReActionAllowed]: HandlerMsgReActionAllowed.onMsg,
    [msgCodeEnum.OPActionResultNotify]: HandlerActionResultNotify.onMsg,
    [msgCodeEnum.OPDeal]: HandlerMsgDeal.onMsg,
    [msgCodeEnum.OPHandOver]: HandlerMsgHandOver.onMsg,
    [msgCodeEnum.OPRoomUpdate]: HandlerMsgRoomUpdate.onMsg,
    [msgCodeEnum.OPRestore]: HandlerMsgRestore.onMsg,
    [msgCodeEnum.OPRoomDeleted]: HandlerMsgDeleted.onMsg,
    [msgCodeEnum.OPRoomShowTips]: HandlerMsgShowTips.onMsg,
    [msgCodeEnum.OPGameOver]: HandlerMsgGameOver.onMsg,
    [msgCodeEnum.OPDisbandNotify]: HandlerMsgDisbandNotify.onMsg,
    [msgCodeEnum.OPKickout]: HandlerMsgKickout.onMsg,
    [msgCodeEnum.OPDonate]: HandlerMsgDonate.onMsg,
    [msgCodeEnum.OPUpdateLocation]: HandlerMsgUpdateLocation.onMsg,
    [msgCodeEnum.OP2Lobby]: HandlerMsg2Lobby.onMsg,
    [msgCodeEnum.OPUpdatePropCfg]: HandlerMsgUpdatePropCfg.onMsg
};

/**
 * 房间
 */
export class Room {
    public readonly myUser: UserInfo;
    public readonly roomInfo: RoomInfo;
    public readonly host: RoomHost;
    public isDestroy: boolean = false;
    public bankerChairID: number = 0;
    public isContinuousBanker: boolean;
    public roomView: RoomView;
    public players: Player[] = [];
    public replay: boolean;
    public tilesInWall: number;
    public myPlayer: Player;
    public msgDisbandNotify: proto.mahjong.MsgDisbandNotify;
    private disbandLocked: boolean;
    public constructor(myUser: UserInfo, roomInfo: RoomInfo, host: RoomHost) {
        this.myUser = myUser;
        this.roomInfo = roomInfo;
        this.host = host;
    }

    public dispatchWebsocketMsg(msg: proto.mahjong.GameMessage): void {
        Logger.debug("Room.dispatchWebsocketMsg, ops:", msg.Ops);
        const handler = msgHandlers[msg.Ops];
        if (handler !== undefined) {
            handler(msg.Data, this);
        } else {
            Logger.debug("room has no handler for msg, ops:", msg.Ops);
        }
    }

    public getPlayerByUserId(userID: string): Player {
        for (const player of this.players) {
            if (player.userID === userID) {
                return player;
            }
        }

        return null;
    }

    public getPlayerByChairID(chairID: number): Player {
        for (const player of this.players) {
            if (player.chairID === chairID) {
                return player;
            }
        }

        return null;
    }
    public getRoomView(): RoomView {
        return this.roomView;
    }
    ////////////////////////////////////
    //把tilesInWall显示到房间的剩余牌数中
    ////////////////////////////////////
    public updateTilesInWallUI(): void {
        this.roomView.tilesInWall.text = `剩牌 :${this.tilesInWall}`;
    }

    //////////////////////////////////////////////
    // 加载房间的view
    //////////////////////////////////////////////
    public loadRoomView(): void {
        const roomView = new RoomView();
        this.roomView = roomView;
    }

    //////////////////////////////////////////////
    // 创建玩家对象
    // 并绑定playerView
    //////////////////////////////////////////////
    public createPlayerByInfo(playerInfo: PlayerInfo): void {
        const player = new Player(playerInfo.userID, playerInfo.chairID, this);
        // player.state = playerInfo.state
        // player.nick = playerInfo.nick
        // if player.nick == null || player.nick == "" {
        //     player.nick = playerInfo.userID
        // }

        player.updateByPlayerInfo(playerInfo);

        const playerView = this.roomView.getPlayerViewByChairID(playerInfo.chairID, this.myPlayer.chairID);
        player.bindView(playerView);

        this.players[player.chairID] = player;
    }

    //////////////////////////////////////////////
    // 创建自身的玩家对象
    // 并绑定playerView
    //////////////////////////////////////////////
    public createMyPlayer(playerInfo: PlayerInfo): void {
        const player = new Player(playerInfo.userID, playerInfo.chairID, this);
        // player.state = playerInfo.state
        // player.nick = playerInfo.nick
        // if player.nick == null || player.nick == "" {
        //     player.nick = playerInfo.userID
        // }

        player.updateByPlayerInfo(playerInfo);

        const playerView = this.roomView.playerViews[1];
        player.bindView(playerView);

        this.players[player.chairID] = player;

        this.myPlayer = player;
    }

    public onReadyButtonClick(): void {
        // this.host.sendPlayerReadyMsg()
    }

    public playerCount(): number {
        return this.players.length;
    }

    //////////////////////////////////////////////
    // 根据玩家的chairID获得相应的playerViewChairID
    // 注意服务器的chairID是由0开始
    //////////////////////////////////////////////
    public getPlayerViewChairIDByChairID(chairID: number): number {
        const myChairId = this.myPlayer.chairID;
        //获得chairID相对于本玩家的偏移
        const c = (chairID - myChairId + 4) % 4;
        //加1是由于lua table索引从1开始

        return c + 1;
    }
    ////////////////////////////////////////
    //从房间的玩家列表中删除一个玩家
    //注意玩家视图的解除绑定需要外部处理
    ////////////////////////////////////////
    public removePlayer(player: Player): void {
        this.players[player.chairID] = null;
    }

    ////////////////////////////////////////
    //往服务器发送消息
    ////////////////////////////////////////
    public sendMsg(opCode: number, msg?: ByteBuffer): void {
        const host = this.host;
        if (host == null) {
            return;
        }

        // const ws = host.ws
        // if (ws == null) {
        //     return
        // }

        // const gm = new proto.mahjong.GameMessage();
        // gm.Ops = opCode;

        // if (msg != null) {
        //     gm.Data = msg
        // }
        // const buf = proto.mahjong.GameMessage.encode(gm);
        // host.sendBinary(buf)
    }

    //////////////////////////////////////
    //重置房间，以便开始新一手游戏
    //////////////////////////////////////
    public resetForNewHand(): void {
        for (const p of this.players) {
            p.resetForNewHand();
        }
        //隐藏箭头
    }

    //背景声音
    //参数：backMusicVolume
    public resumeBackMusicVolume(): void {
        //if this:DelayRunCanceled() {
        // if backMusicVolume {
        //     soundMgr:SetBackMusicVolume(backMusicVolume)
        // else
        //     soundMgr:SetBackMusicVolume(soundModule.backMusicVolume)
        // }
        //}
    }

    //////////////////////////////////////-
    //处理玩家申请解散请求
    //////////////////////////////////////-
    public onDissolveClicked(): void {
        if (this.disbandLocked && this.msgDisbandNotify != null) {
            //上次发送的，或者现在已经有了解散请求正在处理
            // if this.msgDisbandNotify == null {
            //     //如果上次发的包还没收到回复，则特殊处理 (2017-10-24 mufan)
            //     //点击解散房间，出现（放开那少年） 挂
            //     return
            // }
            this.updateDisbandVoteView(this.msgDisbandNotify);
        } else {
            this.sendMsg(proto.mahjong.MessageCode.OPDisbandRequest);
            this.disbandLocked = true;
        }
    }

    //////////////////////////////////////-
    //更新解散处理界面
    //////////////////////////////////////-
    public updateDisbandVoteView(msgDisbandNotify: proto.mahjong.MsgDisbandNotify): void {
        this.msgDisbandNotify = msgDisbandNotify;

        // if (this.disbandVoteView) {
        //     this.disbandVoteView: updateView(msgDisbandNotify)
        // } else {
        //     const viewObj = _ENV.thisMod: CreateUIObject("dafeng", "disband_room")
        //     const disbandVoteView = require("scripts/disbandVoteView")
        //     this.disbandVoteView = disbandVoteView.new(this, viewObj)
        //     this.disbandVoteView: updateView(msgDisbandNotify)
        // }
    }

    //////////////////////////////////////-
    //发送解散回复给服务器
    //////////////////////////////////////-
    public sendDisbandAgree(agree: boolean): void {
        const msgDisbandAnswer = new proto.mahjong.MsgDisbandAnswer();
        msgDisbandAnswer.agree = agree;
        const buf = proto.mahjong.MsgDisbandAnswer.encode(msgDisbandAnswer);
        this.sendMsg(proto.mahjong.MessageCode.OPDisbandAnswer, buf);
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

    //关闭吃牌，杠牌，听牌详情
    public cleanUI(): void {
        // this.roomView.MultiChiOpsObj.visible = false
        // this.roomView.MultiGangOpsObj.visible = false
        this.roomView.listensObj.visible = false;
        this.roomView.meldOpsPanel.visible = false;
    }

    //////////////////////////////////////////////////////////-
    //设置庄家标志
    //////////////////////////////////////////////////////////-
    public setBankerFlag(): void {
        for (const v of this.players) {
            v.playerView.head.onUpdateBankerFlag(v.chairID === this.bankerChairID, this.isContinuousBanker);
        }
    }

    public loadHandResultView(): void {
        // HandResultView.new(this)
    }

    public loadGameOverResultView(): void {
        // GameOverResultView.new(this)
    }

    public hideDiscardedTips(): void {
        for (const p of this.players) {
            p.hideDiscardedTips();
        }
    }

    public sendDonate(donateId: number, toChairID: number): void {
        // 1：鲜花    2：啤酒    3：鸡蛋    4：拖鞋
        // 8：献吻    7：红酒    6：大便    5：拳头
        const chairID = this.myPlayer.chairID;

        const msgDonate = new proto.mahjong.MsgDonate();
        msgDonate.fromChairID = chairID;
        msgDonate.toChairID = toChairID;
        msgDonate.itemID = donateId;

        const actionMsgBuf = proto.mahjong.MsgDonate.encode(msgDonate);
        this.sendMsg(proto.mahjong.MessageCode.OPDonate, actionMsgBuf);
    }

    //////////////////////////////////////////////
    // 显示道具动画
    //////////////////////////////////////////////
    public showDonate(msgDonate: proto.mahjong.MsgDonate): void {
        // logger.debug("显示道具动画 msgDonate : ", msgDonate)
        // if (msgDonate != null) {
        //     const itemID = msgDonate.itemID
        //     const oCurOpObj = this.roomView.donateMoveObj

        //     const fromPlayer = this.getPlayerByChairID(msgDonate.fromChairID)
        //     const toPlayer = this.getPlayerByChairID(msgDonate.toChairID)
        //     if (fromPlayer == null || toPlayer == null) {
        //         Logger.debug("llwant, fromPlayer || toPlayer is null...")
        //         return
        //     }
        //     const fromX = fromPlayer.playerView.head.headView.x
        //     const fromY = fromPlayer.playerView.head.headView.y
        //     const toX = toPlayer.playerView.head.headView.x
        //     const toY = toPlayer.playerView.head.headView.y
        //     // logger.debug("目标位置 toX : ", toX, " ; toY : ", toY)
        //     oCurOpObj.setPosition(fromX, fromY)
        //     oCurOpObj.visible = true
        //     let sprite = null
        //     let effobjSUB = null
        //     // const sound = null
        //     const handTypeMap = {
        //         [1]: function () {
        //             sprite = "dj_meigui"
        //             effobjSUB = "Effects_daojv_hua"
        //         },
        //         [2]: function () {
        //             sprite = "dj_ganbei"
        //             effobjSUB = "Effects_daojv_jiubei"
        //         },
        //         [3]: function () {
        //             sprite = "dj_jd"
        //             effobjSUB = "Effects_daojv_jidan"
        //         },
        //         [4]: function () {
        //             sprite = "dj_tuoxie"
        //             effobjSUB = "Effects_daojv_tuoxie"
        //         },
        //         [5]: function () {
        //             sprite = "dj_qj"
        //             effobjSUB = "Effects_daojv_quanji"
        //         },
        //         [6]: function () {
        //             sprite = "dj_bb"
        //             effobjSUB = "Effects_daojv_shiren"
        //         },
        //         [7]: function () {
        //             sprite = "dj_hj"
        //             effobjSUB = "Effects_daojv_hongjiu"
        //         },
        //         [8]: function () {
        //             sprite = "dj_mmd"
        //             effobjSUB = "Effects_daojv_zui"
        //         }
        //     }

        //     const fn = handTypeMap[itemID]
        //     fn()
        //     if (sprite == null || effobjSUB == null) {
        //         Logger.debug("llwant, sprite || effobjSUB is null...")
        //         return
        //     }
        //     oCurOpObj.url = "ui://lobby_player_info/"..sprite
        //     //飞动画
        //     oCurOpObj.TweenMove({ x = toX, y = toY }, 1)
        //     this.roomView.unityViewNode: DelayRun(
        //         1,
        //         function () {
        //             //飞完之后的回调
        //             //飞完之后 关闭oCurOpObj
        //             oCurOpObj.visible = false
        //             //播放特效
        //             toPlayer.playerView.playerDonateEffect(effobjSUB)
        //             //播放声音
        //             // if sound != null {
        //             // dfCompatibleAPI:soundPlay("daoju/" .. sound)
        //             // }
        //         }
        //     )
        // }
    }
    //roomview 接口
    public setArrowByParent(d: fgui.GComponent): void {
        this.roomView.setArrowByParent(d);
    }
    public showOrHideMeldsOpsPanel(chowMelds: MeldType[]): void {
        this.roomView.showOrHideMeldsOpsPanel(chowMelds);
    }
    public isMe(player: Player): boolean {
        return this.myUser.userID === player.userID;
    }
    public isReplayMode(): boolean {
        return this.replay;
    }

    public getBankerChairID(): number {
        return this.bankerChairID;
    }
    //往服务器发送action消息
    public sendActionMsg(msgAction: ByteBuffer): void {
        this.sendMsg(proto.mahjong.MessageCode.OPAction, msgAction);
    }
    public quit(): void {
        this.host.quit();
    }
    public hideTingDataView(): void {
        this.roomView.hideTingDataView();
    }
    public showTingDataView(tingP: TingPai[]): void {
        this.roomView.showTingDataView(tingP);
    }
    public isListensObjVisible(): boolean {
        return this.roomView.listensObj.visible;
    }
}
