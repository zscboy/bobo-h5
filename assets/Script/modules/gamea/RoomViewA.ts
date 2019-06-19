import { Dialog, Logger } from "../lobby/lcore/LCoreExports";
import { ChatView } from "../lobby/views/chat/ChatExports";
import { DisBandPlayerInfo, DisbandView } from "../lobby/views/disbandRoom/DisbandViewExports";
import { RoomSettingView } from "../lobby/views/roomSetting/RoomSettingViewExports";
import { GameRulesA } from "./GameRulesA";
import { PlayerA } from "./PlayerA";
import { PlayerViewA } from "./PlayerViewA";
import { proto } from "./proto/protoGameA";
import { RoomInterfaceA } from "./RoomInterfaceA";
import { RoomRuleViewA } from "./RoomRuleViewA";

/**
 * 房间
 */
export class RoomViewA {
    public playerViews: PlayerViewA[];
    public donateMoveObj: fgui.GLoader;
    // public tilesInWall: fgui.GObject;
    public statusHandlers: Function[];

    private room: RoomInterfaceA;
    private unityViewNode: fgui.GComponent;
    private readyButton: fgui.GButton;
    private roomInfoText: fgui.GObject;
    private component: cc.Component;

    public constructor(room: RoomInterfaceA, view: fgui.GComponent) {
        this.room = room;
        this.unityViewNode = view;
        this.component = room.getRoomHost().component;

        const playerViews: PlayerViewA[] = [];
        for (let i = 1; i <= 3; i++) {
            const playerView = new PlayerViewA(view, i, room);
            playerView.hideAll();
            playerViews[i] = playerView;
        }

        this.playerViews = playerViews;

        this.initButton();
        //房间状态事件初始化
        this.initRoomStatus();

        this.initOtherView();
    }
    /**
     * 操作ui
     */
    public showOrHideReadyButton(isShow: boolean): void {
        this.readyButton.visible = isShow;
    }

    //响应玩家点击左上角的退出按钮以及后退事件
    public onExitButtonClicked(): void {

        if (this.room !== null && this.room.handStartted > 0) {

            Dialog.prompt("牌局已经开始，请申请解散房间");

            return;
        }

        Dialog.showDialog(`确实要退出房间吗？`, () => {

            this.room.onExitButtonClicked();
            // tslint:disable-next-line:align
        }, () => {
            //
        });
        // if (roomView.room != null && roomView.room.handStartted > 0) {
        //      prompt.showPrompt("牌局已经开始，请申请解散房间");

        //     return;
        // }

        // const room = roomView.room;
        // const msg = "确实要退出房间吗？";
        // dialog: showDialog(
        //     msg,
        //     function () {
        //         room.host: triggerLeaveRoom();
        //     },
        //     function () {
        //         //nothing to do
        //     }
        // )
    }

    // 播放牌局开始动画
    public gameStartAnimation(): void {
        const screenWidth = 1136;
        const screenHeight = 640;
        const x = screenWidth / 2;
        const y = screenHeight / 2;
        Logger.debug("xxxx ", x, y);
        // animation.coplay("animations/Effects_jiemian_duijukaishi.prefab", this.unityViewNode, x, y);
    }

    public startDiscardCountdown(): void {
        // if (this.leftTimerCB === undefined) {
        //     this.leftTimerCB = <Function>this.countDownCallBack.bind(this);
        // }

        // //清理定时器
        // this.component.unschedule(this.leftTimerCB);
        // this.leftTime = 1;
        // //起定时器
        // this.component.schedule(
        //     this.leftTimerCB,
        //     1,
        //     cc.macro.REPEAT_FOREVER,
        //     1);
    }

    public countDownCallBack(): void {
        // this.leftTime += 1;
        // this.countDownText.text = `${this.leftTime}`;
        // if (this.leftTime >= 999) {
        //     this.component.unschedule(this.leftTimerCB);
        // }
    }

    public stopDiscardCountdown(): void {
        //清理定时器
        // this.component.unschedule(this.leftTimerCB);
        // this.countDownText.text = "";
    }

    //设置当前房间所等待的操作玩家
    public setWaitingPlayer(playerView: PlayerViewA): void {
        this.startDiscardCountdown();
        this.clearWaitingPlayer();

        playerView.setHeadEffectBox(true);
    }
    //清除当前房间的等待玩家标志
    public clearWaitingPlayer(): void {
        for (let i = 1; i <= 3; i++) {
            this.playerViews[i].setHeadEffectBox(false);
        }
    }
    public showRoomNumber(): void {
        const room = this.room;
        const num = `${this.room.handStartted}/${this.room.handNum}`;
        const s = `     `;
        const str = `${GameRulesA.gameName(this.room.roomType)}${s}房号:${room.roomInfo.roomNumber}${s}局数:${num}`;
        this.roomInfoText.text = str;

    }

    // 根据玩家的chairID获得相应的playerView
    // 注意服务器的chairID是由0开始
    public getPlayerViewByChairID(chairID: number, myChairId: number): PlayerViewA {
        const playerViews = this.playerViews;

        //获得chairID相对于本玩家的偏移
        const c = (chairID - myChairId + 3) % 3;
        //加1是由于lua table索引从1开始

        return playerViews[c + 1];
    }

    //根据房间的状态做一些开关变量切换
    public onUpdateStatus(state: number): void {
        const handler = this.statusHandlers[state];
        if (handler !== null) {
            handler(this);
        }
    }

    public switchBg(index: number): void {
        //
        // const bgController = this.unityViewNode.getController("bgController");
        // bgController.selectedIndex = index;
    }

    public updateDisbandVoteView(msgDisbandNotify: proto.pokerface.MsgDisbandNotify): void {
        let disbandView = this.component.getComponent(DisbandView);

        const myPlayerInfo = this.room.getMyPlayerInfo();
        const myInfo = new DisBandPlayerInfo(myPlayerInfo.userID, myPlayerInfo.chairID, myPlayerInfo.nick);
        const players = this.room.getPlayers();

        const playersInfo: DisBandPlayerInfo[] = [];
        Object.keys(players).forEach((key: string) => {
            const p = <PlayerA>players[key];
            const playInfo = new DisBandPlayerInfo(p.userID, p.chairID, p.playerInfo.nick);
            playersInfo.push(playInfo);

        });

        const load = this.room.getRoomHost().getLobbyModuleLoader();

        if (disbandView === undefined || disbandView == null) {
            disbandView = this.component.addComponent(DisbandView);
        }

        disbandView.saveRoomView(this.room, msgDisbandNotify, load, myInfo, playersInfo);
    }

    private onRoomRuleBtnClick(): void {
        let roomRuleView = this.component.getComponent(RoomRuleViewA);

        if (roomRuleView === undefined || roomRuleView == null) {
            roomRuleView = this.component.addComponent(RoomRuleViewA);
        }
        roomRuleView.updateView(this.room.roomInfo.config);
    }

    private onSettingBtnClick(): void {
        // Logger.debug("onSettingBtnClick---------------");
        const settingView = this.component.addComponent(RoomSettingView);

        const isOwner = this.room.ownerID === this.room.getMyPlayerInfo().userID;
        settingView.showView(this.room, this.room.getRoomHost().getLobbyModuleLoader(), isOwner);
    }

    /**
     * 聊天按钮点击事件
     */
    private onChatBtnClick(): void {
        const load = this.room.getRoomHost().getLobbyModuleLoader();
        if (load === null) {
            Logger.debug("load === null");
        }

        let chatView = this.component.getComponent(ChatView);
        if (chatView === null) {
            chatView = this.component.addComponent(ChatView);
        }

        const callBack: Function = <Function>this.room.showMsg.bind(this.room);
        chatView.show(load, callBack);
    }
    /**
     * 初始化
     */
    private initButton(): void {
        // const chatBtn = view.getChild("chatBtn")
        // chatBtn.onClick:Set(
        //     function()
        //         chatView.showChatView()
        //     }
        // )

        const chatBtn = this.unityViewNode.getChild("chat").asButton;
        chatBtn.onClick(this.onChatBtnClick, this);

        const settingBtn = this.unityViewNode.getChild("setting").asButton;
        settingBtn.onClick(this.onSettingBtnClick, this);

        const infoBtn = this.unityViewNode.getChild("info").asButton;
        //infoBtn.visible = true;
        infoBtn.onClick(this.onRoomRuleBtnClick, this);

        this.readyButton = this.unityViewNode.getChild("ready").asButton;
        this.readyButton.visible = false;
        this.readyButton.onClick(this.room.onReadyButtonClick, this.room);

        // 调整微信版本的按钮位置
        // if (CC_WECHATGAME) {
        //     Logger.debug("init wechat game button position");
        //     settingBtn.setPosition(settingBtn.x, settingBtn.y + 60);
        //     infoBtn.setPosition(infoBtn.x, infoBtn.y + 60);
        // }

    }

    private initOtherView(): void {
        // 房间号
        this.roomInfoText = this.unityViewNode.getChild("top_room_info");
        //道具
        this.donateMoveObj = this.unityViewNode.getChild("donate").asLoader;
        //剩牌
        // this.tilesInWall = this.unityViewNode.getChild("tilesInWall");
    }

    //初始化房间状态事件
    private initRoomStatus(): void {
        // 房间正在等待玩家准备
        const onWait = (): void => {
            // this.tilesInWall.visible = false;
            this.stopDiscardCountdown();
            //等待状态重置上手牌遗留
            this.room.resetForNewHand();
        };

        //房间空闲，客户端永远看不到这个状态
        const onIdle = (): void => {
            Logger.debug("房间空闲，客户端永远看不到这个状态");
        };

        // 游戏开始了
        const onPlay = (): void => {
            // roomView.invitButton.visible = false
            // roomView.returnHallBtn.visible = false
            // this.tilesInWall.visible = true;
            // this.clearWaitingPlayer();
            this.showRoomNumber();
        };

        //房间已经被删除，客户端永远看不到这个状态
        const onDelete = (): void => {
            Logger.debug("房间已经被删除，客户端永远看不到这个状态");
        };

        const status = [];
        status[proto.pokerface.RoomState.SRoomIdle] = onIdle;
        status[proto.pokerface.RoomState.SRoomWaiting] = onWait;
        status[proto.pokerface.RoomState.SRoomPlaying] = onPlay;
        status[proto.pokerface.RoomState.SRoomDeleted] = onDelete;
        this.statusHandlers = status;
    }
}
