import { GameModuleInterface, Logger } from "../lobby/lcore/LCoreExports";
import { PlayerView } from "./PlayerView";
import { proto } from "./proto/protoGame";
import { MeldType, RoomInterface, TingPai } from "./RoomInterface";
import { TileImageMounter } from "./TileImageMounter";
const mjproto = proto.mahjong;

/**
 * 房间
 */
export class RoomView extends cc.Component {
    public playerViews: PlayerView[];
    public listensObj: fgui.GComponent;
    public meldOpsPanel: fgui.GComponent;
    public donateMoveObj: fgui.GLoader;
    public tilesInWall: fgui.GObject;
    public statusHandlers: Function[];

    private room: RoomInterface;
    private unityViewNode: fgui.GComponent;
    private readyButton: fgui.GButton;
    private roomInfoText: fgui.GObject;
    private roundMarkView: fgui.GComponent;
    private roundMarks: fgui.GObject[];
    private wind: fgui.GObject;
    private windTile: fgui.GComponent;
    private countDownText: fgui.GObject;
    private listensObjList: fgui.GList;
    private listensObjNum: fgui.GObject;
    private multiOpsObj: fgui.GList;
    private listensDataList: TingPai[];
    private multiOpsDataList: MeldType[];
    private arrowObj: fgui.GObject;
    public constructor(room: RoomInterface) {
        super();
        this.room = room;
        // 加载房间界面
        const lm = <GameModuleInterface>this.getComponent("GameModule");
        const loader = lm.resLoader;

        loader.fguiAddPackage("lobby/fui_lobby_mahjong/lobby_mahjong");
        loader.fguiAddPackage("fgui/dafeng");
        loader.fguiAddPackage("lobby/fui_lobby_mahjong/lobby_mahjong");

        const view = fgui.UIPackage.createObject("dafeng", "desk").asCom;
        fgui.GRoot.inst.addChild(view);
        this.unityViewNode = view;

        const playerViews: PlayerView[] = [];
        for (let i = 1; i <= 4; i++) {
            const playerView = new PlayerView(view, i, room);
            playerView.hideAll();
            playerViews[i] = playerView;
        }

        this.playerViews = playerViews;

        this.initButton();
        //房间状态事件初始化
        this.initRoomStatus();

        this.initOtherView();

        this.initTingData();
        this.initMeldsPanel();
    }
    /**
     * 操作ui
     */
    public showOrHideReadyButton(isShow: boolean): void {
        this.readyButton.visible = isShow;
    }

    //响应玩家点击左上角的退出按钮以及后退事件
    public onExitButtonClicked(): void {
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
        //清理定时器
        // this.unityViewNode.StopTimer("roomViewCountDown");

        // this.leftTime = 0;
        //起定时器
        //     this.unityViewNode.StartTimer(
        //         "roomViewCountDown",
        //         1,
        //         0,
        //         function () {
        //             this.leftTime = this.leftTime + 1
        //             this.countDownText.text = this.leftTime
        //             if this.leftTime >= 999 {
        //                 this.unityViewNode: StopTimer("roomViewCountDown");
        //             }
        //         },
        //         this.leftTime;
        // )
    }

    public stopDiscardCountdown(): void {
        //清理定时器
        // this.unityViewNode: StopTimer("roomViewCountDown");
        this.countDownText.text = "";
    }

    //设置当前房间所等待的操作玩家
    public setWaitingPlayer(playerView: PlayerView): void {
        this.startDiscardCountdown();
        this.clearWaitingPlayer();
        const viewChairID = playerView.viewChairID;
        this.roundMarks[viewChairID].visible = true;

        playerView.setHeadEffectBox(true);
    }
    //清除当前房间的等待玩家标志
    public clearWaitingPlayer(): void {
        for (const mask of this.roundMarks) {
            mask.visible = false;
        }
        for (const playerView of this.playerViews) {
            playerView.setHeadEffectBox(false);
        }
    }
    public showRoomNumber(): void {
        const room = this.room;
        const num = ""; // string.format(tostring(self.room.handStartted) or "0", "/", tostring((self.room.handNum)))
        const str = `房号:${room.roomInfo.roomNumber} 局数:${num}`;
        this.roomInfoText.text = str;

    }
    public showOrHideMeldsOpsPanel(meld: MeldType[]): void {
        const size = meld.length;
        this.multiOpsDataList = meld;
        this.multiOpsObj.numItems = size;
        this.multiOpsObj.resizeToFit(size);
        this.meldOpsPanel.visible = size > 0;
    }
    //显示出牌提示箭头
    public setArrowByParent(btn: fgui.GComponent): void {
        if (btn == null) {
            //隐藏出牌提示箭头
            if (this.arrowObj !== null) {
                this.arrowObj.visible = false;
            }

            return;
        }
        const pos = btn.getChild("pos");
        const x = pos.x;
        const y = pos.y;
        Logger.debug("ss", x, y);
        // this.arrowObj = animation.play("animations/Effects_UI_jiantou.prefab", btn, x, y, true);
        // this.arrowObj.wrapper.scale = pos.scale;
        // this.arrowObj.setVisible(true);
    }
    public setJiaJiaZhuang(): void {
        Logger.debug("家家庄");
    }
    public showTingDataView(list: TingPai[]): void {
        if (list.length <= 0) {
            this.listensObj.visible = false;

            return;
        }
        const len = list.length;
        this.listensDataList = list;
        let width = 290;
        let height = 110;
        if (len <= 2) {
            width = 150;
        } else if (len > 4) {
            height = 230;
        }
        this.listensObjList.setSize(width, height);
        let nCount = 0;
        for (const d of list) {
            nCount = nCount + d.num;
        }
        this.listensObjNum.text = `${nCount}张`;
        this.listensObjList.numItems = len;
        this.listensObj.visible = true;
    }
    public hideTingDataView(): void {
        this.listensObj.visible = false;
    }

    //设置当前房间所使用的风圈
    public setRoundMask(): void {
        this.wind.visible = true;
        this.windTile.visible = true;
        TileImageMounter.mountTileImage(this.windTile, this.room.windFlowerID);
    }
    //////////////////////////////////////////////
    // 根据玩家的chairID获得相应的playerView
    // 注意服务器的chairID是由0开始
    //////////////////////////////////////////////
    public getPlayerViewByChairID(chairID: number, myChairId: number): PlayerView {
        const playerViews = this.playerViews;

        //获得chairID相对于本玩家的偏移
        const c = (chairID - myChairId + 4) % 4;
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
    //解散房间按钮点击事件
    private onDissolveClick(): void {
        // const msg = "确实要申请解散房间吗？";
        // dialog.showDialog(
        //     msg,
        //     function () {
        //         this.room.onDissolveClicked();
        //     },
        //     function () {
        //         //do nothing
        //     }
        // )
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

        const settingBtn = this.unityViewNode.getChild("settingBtn");

        const infoBtn = this.unityViewNode.getChild("guizeBtn");
        infoBtn.visible = true;

        this.readyButton = this.unityViewNode.getChild("ready").asButton;
        this.readyButton.visible = false;
        this.readyButton.onClick(this.room.onReadyButtonClick, this);

        settingBtn.onClick(this.onDissolveClick, this);
    }

    private initOtherView(): void {
        // 房间号
        this.roomInfoText = this.unityViewNode.getChild("roomInfo");
        // 风圈和当前操作玩家指示箭头roundMarkArrow
        const roundMarks: fgui.GObject[] = [];
        this.roundMarkView = this.unityViewNode.getChild("roundMask").asCom;
        for (let i = 1; i <= 4; i++) {
            const roundMark = this.roundMarkView.getChild(`n${i}`);
            roundMarks[i] = roundMark;
        }
        this.roundMarks = roundMarks;
        this.wind = this.unityViewNode.getChild("n3");
        this.windTile = this.unityViewNode.getChild("fengquan").asCom;
        this.wind.visible = false;
        this.windTile.visible = false;

        //倒计时
        this.countDownText = this.roundMarkView.getChild("num");
        //道具
        this.donateMoveObj = this.unityViewNode.getChild("donate").asLoader;
        //剩牌
        this.tilesInWall = this.unityViewNode.getChild("tilesInWall");
    }

    //初始化房间状态事件
    private initRoomStatus(): void {
        // 房间正在等待玩家准备
        const onWait = (): void => {
            this.wind.visible = false;
            this.windTile.visible = false;
            this.tilesInWall.visible = false;

            this.roundMarkView.visible = false;
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
            this.tilesInWall.visible = true;
            this.wind.visible = false; //发牌的时候，或者掉线恢复的时候会设置风圈因此此处不需要visible
            this.windTile.visible = false;

            this.roundMarkView.visible = true;
            this.clearWaitingPlayer();
            this.showRoomNumber();
        };

        //房间已经被删除，客户端永远看不到这个状态
        const onDelete = (): void => {
            Logger.debug("房间已经被删除，客户端永远看不到这个状态");
        };

        const status = [];
        status[proto.mahjong.RoomState.SRoomIdle] = onIdle;
        status[proto.mahjong.RoomState.SRoomWaiting] = onWait;
        status[proto.mahjong.RoomState.SRoomPlaying] = onPlay;
        status[proto.mahjong.RoomState.SRoomDeleted] = onDelete;
        this.statusHandlers = status;
    }

    //初始化显示听牌详情界面
    private initTingData(): void {
        this.listensObj = this.unityViewNode.getChild("listensPanel").asCom;
        this.listensObjList = this.listensObj.getChild("list").asList;
        this.listensObjNum = this.listensObj.getChild("num");
        // tslint:disable-next-line: no-unsafe-any
        this.listensObjList.itemRenderer = this.renderListensListItem.bind(this);
        // this.listensObj.onClick: Set(
        //     function () {
        //         this.listensObj.visible = false
        //     }
        // )
        this.listensObjList.setVirtual();
    }

    private renderListensListItem(index: number, obj: fgui.GComponent): void {
        const tingPai = this.listensDataList[index + 1];
        const t = obj.getChild("n1").asCom;
        const num = obj.getChild("num");
        num.text = `${tingPai.num}张`;
        TileImageMounter.mountTileImage(t, tingPai.card);
    }

    //面子牌选择面板
    private initMeldsPanel(): void {
        // const meldMap = {}
        this.meldOpsPanel = this.unityViewNode.getChild("meldOpsPanel").asCom;
        this.multiOpsObj = this.meldOpsPanel.getChild("list").asList;
        // tslint:disable-next-line: no-unsafe-any
        this.multiOpsObj.itemRenderer = this.renderMultiOpsListItem.bind(this);
        // this.multiOpsObj.onClickItem: Add(
        //     function (onClickItem) {
        //         this: onMeldOpsClick(onClickItem.data.name)
        //     }
        // )
    }

    private renderMultiOpsListItem(index: number, obj: fgui.GComponent): void {
        const meld = this.multiOpsDataList[index + 1];
        obj.name = index.toString();
        let add = 0;
        let num = 4;
        if (meld.meldType === mjproto.MeldType.enumMeldTypeSequence) {
            //吃的时候exp是3，所以第4个牌可以隐藏起来
            obj.getChild("n4").visible = false;
            add = 1;
            num = 3;
        }
        let a = 0;
        for (let i = 1; i <= num; i++) {
            const oCurCard = obj.getChild(`n${i}`).asCom;
            TileImageMounter.mountTileImage(oCurCard, meld.tile1 + a);
            oCurCard.visible = true;
            a += add;
        }

        obj.visible = true;
    }

    // private onMeldOpsClick(index: number): void {
    //     const data = this.multiOpsDataList[index + 1];
    //     const actionMsg = new proto.mahjong.MsgPlayerAction();
    //     actionMsg.qaIndex = data.actionMsg.qaIndex;
    //     actionMsg.action = data.actionMsg.action;
    //     actionMsg.tile = data.actionMsg.tile;
    //     actionMsg.meldType = data.meldType;
    //     actionMsg.meldTile1 = data.tile1;
    //     if (data.meldType === mjproto.MeldType.enumMeldTypeConcealedKong) {
    //         actionMsg.tile = data.tile1;
    //         actionMsg.action = mjproto.ActionType.enumActionType_KONG_Concealed;
    //     } else if (data.meldType === mjproto.MeldType.enumMeldTypeTriplet2Kong) {
    //         actionMsg.tile = data.tile1;
    //         actionMsg.action = mjproto.ActionType.enumActionType_KONG_Triplet2;
    //     }

    //     const actionMsgBuf = proto.mahjong.MsgPlayerAction.encode(actionMsg);
    //     this.room.sendActionMsg(actionMsgBuf);
    //     this.playerViews[1].hideOperationButtons();
    //     this.meldOpsPanel.visible = false;
    // }
}