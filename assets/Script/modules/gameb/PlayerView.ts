import { Logger } from "../lobby/lcore/LCoreExports";
import { ButtonDef, ClickCtrl, PlayerInterface } from "./PlayerInterface";
import { proto } from "./proto/protoGame";
import { RoomInterface, TingPai } from "./RoomInterface";
import { TileImageMounter } from "./TileImageMounter";

const mjproto = proto.mahjong;

/**
 * playerview对应玩家的视图，牌桌上有4个playerview
 */
class PosCtrl {
    public x: number;
    public y: number;
    public constructor(x: number, y: number) {
        this.y = y;
        this.x = x;
    }
}

/**
 * 保存头像节点
 */
class Head {
    public headView: fgui.GComponent;
    public pos: fgui.GObject;
    public readyIndicator: fgui.GObject;
    public ting: fgui.GObject;
    public roomOwnerFlag: fgui.GObject;
    public bankerFlag: fgui.GObject;
    public continuousBankerFlag: fgui.GObject;
    public huaNode: fgui.GObject;
    public huaNodeText: fgui.GObject;
    public onUpdateBankerFlag: (isBanker: boolean, isContinue: boolean) => void;
    public hideAll: Function;
}

// //面子牌组资源 前缀
const MELD_COMPONENT_PREFIX: string[] = [
    "mahjong_mine_meld_",
    "mahjong_right_meld_",
    "mahjong_dui_meld_",
    "mahjong_left_meld_"
];

//面子牌组资源 后缀
const MELD_COMPONENT_SUFFIX: { [key: string]: string } = {
    [mjproto.MeldType.enumMeldTypeTriplet2Kong]: "gang1",
    [mjproto.MeldType.enumMeldTypeExposedKong]: "gang1",
    [mjproto.MeldType.enumMeldTypeConcealedKong]: "gang2",
    [mjproto.MeldType.enumMeldTypeSequence]: "chipeng",
    [mjproto.MeldType.enumMeldTypeTriplet]: "chipeng"
};

/**
 * 玩家
 */
export class PlayerView {
    public handsClickCtrls: ClickCtrl[];
    public checkReadyHandBtn: fgui.GButton = null;
    public player: PlayerInterface;
    public room: RoomInterface;

    //打出的牌放大显示
    public discardTips: fgui.GComponent;
    public head: Head;

    public viewChairID: number;
    public onUpdateStatus: Function[];
    private discards: fgui.GComponent[];
    private lights: fgui.GComponent[];
    private hands: fgui.GComponent[];
    private flowers: fgui.GComponent[];
    private handsOriginPos: PosCtrl[];
    private viewUnityNode: fgui.GComponent;
    private myView: fgui.GComponent;
    private operationPanel: fgui.GComponent;
    private buttonList: fgui.GList;
    private operationButtonsRoot: fgui.GComponent;
    private buttonDataList: string[];

    private aniPos: fgui.GObject;
    // private userInfoPos: fgui.GObject
    private alreadyShowNonDiscardAbleTips: boolean;
    private discardTipsTile: fgui.GComponent;

    public constructor(viewUnityNode: fgui.GComponent, viewChairID: number, room: RoomInterface) {
        this.room = room;
        this.viewChairID = viewChairID;
        this.viewUnityNode = viewUnityNode;
        //这里需要把player的chairID转换为游戏视图中的chairID，这是因为，无论当前玩家本人
        //的chair ID是多少，他都是居于正中下方，左手是上家，右手是下家，正中上方是对家
        const view = viewUnityNode.getChild(`player${viewChairID}`).asCom;
        this.myView = view;
        if (viewChairID === 1) {
            this.operationPanel = viewUnityNode.getChild("operationPanel").asCom;

            this.initOperationButtons();
        }

        //头像相关
        this.initHeadView();
        //其他UI
        this.initOtherView(view);
        //玩家状态
        this.initPlayerStatus();

        //动画挂载点
        this.aniPos = view.getChild("aniPos");
    }

    //初始化
    //花牌列表
    public initFlowers(): void {
        const flowers: fgui.GComponent[] = [];
        const myFlowerTilesNode = this.myView.getChild("flowers").asCom;
        for (let i = 0; i < 12; i++) {
            const h = myFlowerTilesNode.getChild(`n${i + 1}`).asCom;
            flowers[i] = h;
        }
        this.flowers = flowers;
    }

    //明牌列表
    public initLights(): void {
        const lights: fgui.GComponent[] = [];
        const myLightTilesNode = this.myView.getChild("lights").asCom;
        for (let i = 0; i < 14; i++) {
            const h = myLightTilesNode.getChild(`n${i + 1}`).asCom;
            lights[i] = h;
        }
        this.lights = lights;
    }

    //打出的牌列表
    public initDiscards(): void {
        const discards: fgui.GComponent[] = [];
        const myDicardTilesNode = this.myView.getChild("discards").asCom;
        for (let i = 0; i < 20; i++) {
            const card = myDicardTilesNode.getChild(`n${i + 1}`).asCom;
            discards[i] = card;
        }
        this.discards = discards;
    }

    //手牌列表
    public initHands(): void {
        const hands: fgui.GComponent[] = [];
        const handsOriginPos: PosCtrl[] = [];
        const handsClickCtrls: ClickCtrl[] = [];
        const myHandTilesNode = this.myView.getChild("hands").asCom;
        //const resName = ""
        const isMe = this.viewChairID === 1;
        for (let i = 0; i < 14; i++) {
            const card = myHandTilesNode.getChild(`n${i + 1}`).asCom;

            card.name = i.toString(); //把手牌按钮对应的序号记忆，以便点击时可以识别
            card.visible = false;
            hands[i] = card;

            handsOriginPos[i] = new PosCtrl(card.x, card.y);
            const cc = new ClickCtrl();
            cc.clickCount = 0;
            cc.h = card;
            cc.t = card.getChild("ting");
            handsClickCtrls[i] = cc;

            if (isMe) {
                card.onClick(
                    () => {
                        this.onHandTileBtnClick(i);
                    },
                    this
                );
                // this.onDrag(card, i)
            }
        }

        this.hands = hands;
        this.handsOriginPos = handsOriginPos; //记忆原始的手牌位置，以便点击手牌时可以往上弹起以及恢复
        this.handsClickCtrls = handsClickCtrls; // 手牌点击时控制数据结构
    }

    public initCardLists(): void {
        //手牌列表
        this.initHands();
        //出牌列表
        this.initDiscards();
        //花牌列表
        this.initFlowers();
        //明牌列表
        this.initLights();
    }

    public itemProviderButtonList(index: number): string {
        return this.buttonDataList[index];
    }
    //操作按钮
    public initOperationButtons(): void {
        this.buttonList = this.operationPanel.getChild("buttonList").asList;
        this.buttonList.itemRenderer = <(index: number, item: fgui.GComponent) => void>this.renderButtonListItem.bind(this);
        this.buttonList.itemProvider = <(index: number) => string>this.itemProviderButtonList.bind(this);
        this.buttonList.on(fgui.Event.CLICK_ITEM, (onClickItem: fgui.GObject) => { this.onClickBtn(onClickItem.name); }, this);

        this.operationButtonsRoot = this.operationPanel;

        this.hideOperationButtons();

        //检查听详情 按钮
        this.checkReadyHandBtn = this.viewUnityNode.getChild("checkReadyHandBtn").asButton;
        this.checkReadyHandBtn.onClick(this.onCheckReadyHandBtnClick, this);
    }
    public renderButtonListItem(index: number, obj: fgui.GObject): void {
        const name = this.buttonDataList[index];
        obj.name = name;
        obj.visible = true;
    }

    public onClickBtn(name: string): void {
        const player = this.player;
        if (name === ButtonDef.Chow) {
            player.onChowBtnClick();
        } else if (name === ButtonDef.Kong) {
            player.onKongBtnClick();
        } else if (name === ButtonDef.Skip) {
            player.onSkipBtnClick();
        } else if (name === ButtonDef.Hu) {
            player.onWinBtnClick();
        } else if (name === ButtonDef.Pong) {
            player.onPongBtnClick();
        } else if (name === ButtonDef.Ting) {
            player.onReadyHandBtnClick();
        } else if (name === ButtonDef.Zhua) {
            player.onFinalDrawBtnClick();
        }
    }

    //显示操作按钮
    public showButton(map: string[]): void {
        this.buttonDataList = map;
        this.buttonList.numItems = map.length;
        this.buttonList.resizeToFit(map.length);
        this.operationButtonsRoot.visible = true;
    }

    //隐藏所有操作按钮
    public hideOperationButtons(): void {
        //先隐藏掉所有按钮
        this.showButton([]);
        //隐藏根节点
        this.operationButtonsRoot.visible = false;
    }

    public initOtherView(view: fgui.GComponent): void {

        // this.aniPos = view.getChild("aniPos")
        // this.userInfoPos = view.getChild("userInfoPos")

        //打出的牌放大显示
        this.discardTips = view.getChild("discardTip").asCom;
        this.discardTipsTile = this.discardTips.getChild("card").asCom;
    }

    //头像周边内容节点
    public initHeadView(): void {

        const head = new Head();

        head.headView = this.myView.getChild("head").asCom;
        head.headView.visible = false;
        head.pos = head.headView.getChild("pos");
        //ready状态指示
        head.readyIndicator = this.myView.getChild("ready");
        head.readyIndicator.visible = false;
        //听牌标志
        head.ting = this.myView.getChild("ting");
        head.ting.visible = false;
        //房间拥有者标志
        head.roomOwnerFlag = this.myView.getChild("owner");
        head.roomOwnerFlag.visible = false;

        //庄家标志
        head.bankerFlag = this.myView.getChild("zhuang");
        head.bankerFlag.visible = false;
        head.continuousBankerFlag = this.myView.getChild("lianzhuang");
        head.continuousBankerFlag.visible = false;

        head.huaNode = this.myView.getChild("hua");
        head.huaNode.visible = false;
        head.huaNodeText = this.myView.getChild("huaText");
        head.huaNodeText.visible = false;

        //更新庄家UI
        const updateBanker = (isBanker: boolean, isContinue: boolean): void => {
            if (isBanker) {
                if (isContinue) {
                    head.bankerFlag.visible = false;
                    head.continuousBankerFlag.visible = true;
                } else {
                    head.bankerFlag.visible = true;
                    head.continuousBankerFlag.visible = false;
                }
            } else {
                head.bankerFlag.visible = false;
                head.continuousBankerFlag.visible = false;
            }
        };
        head.onUpdateBankerFlag = updateBanker;

        head.hideAll = (): void => {
            head.headView.visible = false;
            head.readyIndicator.visible = false;
            head.ting.visible = false;
            head.roomOwnerFlag.visible = false;
            head.bankerFlag.visible = false;
            head.continuousBankerFlag.visible = false;
            head.huaNode.visible = false;
            head.huaNodeText.visible = false;
        };

        this.head = head;
    }

    //玩家状态
    public initPlayerStatus(): void {
        //起始
        const onStart = (): void => {
            this.head.readyIndicator.visible = false;
            if (this.viewChairID === 1) {
                this.checkReadyHandBtn.visible = false;
            }
        };

        //准备
        const onReady = (): void => {
            this.head.readyIndicator.visible = true;
            this.showOwner();
        };

        //离线
        const onLeave = (): void => {
            this.head.readyIndicator.visible = false;
        };

        //正在玩
        const onPlaying = (): void => {
            this.head.readyIndicator.visible = false;
            this.showOwner();
        };

        const status = [];
        status[mjproto.PlayerState.PSNone] = onStart;
        status[mjproto.PlayerState.PSReady] = onReady;
        status[mjproto.PlayerState.PSOffline] = onLeave;
        status[mjproto.PlayerState.PSPlaying] = onPlaying;
        this.onUpdateStatus = status;
    }

    //界面操作
    //设置金币数显示（目前是累计分数）
    public setGold(): void {

        // if checkint(gold) < 0 {
        //this.head.goldText1. Show()
        //this.head.goldText. Hide()
        //this.head.goldText1.text = tostring(gold)
        // else
        //this.head.goldText1. Hide()
        //this.head.goldText. Show()
        //this.head.goldText.text = tostring(gold)
        //}
    }

    //设置头像特殊效果是否显示（当前出牌者则显示）
    public setHeadEffectBox(isShow: boolean): void {
        // const x = this.head.pos.x
        // const y = this.head.pos.y
        // const ani = animation.play("animations/Effects_UI_touxiang.prefab", this.head.headView, x, y, true);
        // ani.setVisible(isShow)
        if (isShow) {
            this.room.getRoomHost().animationMgr.play(`lobby/prefabs/mahjong/Effect_UI_touxiang`, this.head.pos.node);
        }
        this.head.pos.visible = isShow;
    }

    //从根节点上隐藏所有
    public hideAll(): void {
        this.head.hideAll();
        this.hideHands();
        this.hideFlowers();
        this.hideMelds();
        this.hideLights();
        this.hideDiscarded();
    }

    //新的一手牌开始，做一些清理后再开始
    public resetForNewHand(): void {
        this.hideHands();
        this.hideFlowers();
        this.hideMelds();
        this.hideLights();
        this.clearDiscardable();
        this.hideDiscarded();

        this.head.ting.visible = false;
        this.setHeadEffectBox(false);

        if (this.viewChairID === 1) {
            this.hideOperationButtons();
        }
    }

    //隐藏打出去的牌列表
    public hideDiscarded(): void {
        if (this.discards != null) {
            for (const d of this.discards) {
                d.visible = false;
            }
        }
    }

    //隐藏摊开牌列表
    public hideLights(): void {
        if (this.lights != null) {
            for (const h of this.lights) {
                h.visible = false;
            }
        }
    }

    //隐藏手牌列表
    public hideHands(): void {
        if (this.hands != null) {
            for (const h of this.hands) {
                h.visible = false;
            }
        }
    }

    //隐藏面子牌组
    public hideMelds(): void {
        const mymeldTilesNode = this.myView.getChild("melds").asCom;
        for (let i = 0; i < 4; i++) {
            const mm = mymeldTilesNode.getChild(`myMeld${i}`);
            if (mm != null) {
                mymeldTilesNode.removeChild(mm, true);
            }
        }
    }

    //隐藏花牌列表
    public hideFlowers(): void {
        if (this.flowers != null) {
            for (const f of this.flowers) {
                f.visible = false;
            }
        }
        this.head.huaNode.visible = false;
        this.head.huaNodeText.visible = false;
    }

    //显示花牌，注意花牌需要是平放的
    public showFlowers(): void {
        const tilesFlower = this.player.tilesFlower;
        const flowers = this.flowers;

        //花牌个数
        const tileCount = tilesFlower.length;
        //花牌挂载点个数
        const dCount = flowers.length;

        this.head.huaNode.visible = true;
        this.head.huaNodeText.visible = true;
        this.head.huaNodeText.text = tileCount.toString();

        //从那张牌开始挂载，由于tileCount可能大于dCount
        //因此，需要选择tilesDiscarded末尾的dCount个牌显示即可
        let begin = tileCount - dCount;
        if (begin < 0) {
            begin = 0;
        }

        //i计数器对应tilesFlower列表
        for (let i = begin; i < tileCount; i++) {
            const d = flowers[i % dCount];
            const tileID = tilesFlower[i];
            TileImageMounter.mountTileImage(d, tileID);
            d.visible = true;
        }
    }

    //显示打出去的牌，明牌显示
    public showDiscarded(newDiscard: boolean, waitDiscardReAction: boolean): void {
        //先隐藏所有的打出牌节点
        const discards = this.discards;
        for (const d of discards) {
            d.visible = false;
        }
        const tilesDiscard = this.player.tilesDiscarded;
        //已经打出去的牌个数
        const tileCount = tilesDiscard.length;
        //打出牌的挂载点个数
        const dCount = discards.length;
        //从那张牌开始挂载，由于tileCount可能大于dCount
        //因此，需要选择tilesDiscarded末尾的dCount个牌显示即可
        let begin = tileCount - dCount;
        if (begin < 0) {
            begin = 0;
        }

        //i计数器对应tilesDiscarded列表
        for (let i = begin; i < tileCount; i++) {
            const d = discards[i % dCount];
            const tileID = tilesDiscard[i];
            TileImageMounter.mountTileImage(d, tileID);
            d.visible = true;
        }

        //如果是新打出的牌，给加一个箭头
        if (newDiscard) {
            const d = discards[tileCount % dCount];
            this.room.setArrowByParent(d);

            //放大打出去的牌
            this.enlargeDiscarded(tilesDiscard[tileCount - 1], waitDiscardReAction);
        }
    }

    //把打出的牌放大显示
    public enlargeDiscarded(discardTileId: number, waitDiscardReAction: boolean): void {
        const discardTips = this.discardTips;
        const discardTipsTile = this.discardTipsTile;
        TileImageMounter.mountTileImage(discardTipsTile, discardTileId);
        discardTips.visible = true;
        if (waitDiscardReAction) {
            this.player.waitDiscardReAction = true;
        } else {
            this.room.getRoomHost().component.scheduleOnce(
                () => {
                    discardTips.visible = false;
                },
                1);
            // this.myView.DelayRun(
            //     1,
            //     function () {
            //         discardTips.visible = false
            //     }
            // )
        }
    }

    //显示对手玩家的手牌，对手玩家的手牌是暗牌显示
    public showHandsForOpponents(tileCountInHand: number): void {
        let t = tileCountInHand;
        const melds = this.player.melds;

        const meldCount = melds.length;
        if ((meldCount * 3 + t) > 13) {
            this.hands[13].visible = true;
            t = t - 1;
        }

        //melds面子牌组
        this.showMelds();

        for (let i = 0; i < t; i++) {
            this.hands[i].visible = true;
        }
    }

    //显示面子牌组
    public showMelds(): void {
        const ms = this.player.melds;
        const length = ms.length;
        const rm = MELD_COMPONENT_PREFIX[this.viewChairID - 1];
        //摆放牌
        const mymeldTilesNode = this.myView.getChild("melds").asCom;
        for (let i = 0; i < length; i++) {
            const mv = mymeldTilesNode.getChild(`meld${i + 1}`);
            const mm = mymeldTilesNode.getChild(`myMeld${i}`);
            if (mm != null) {
                mymeldTilesNode.removeChild(mm, true);
            }
            //根据面子牌挂载牌的图片
            const meldData = ms[i];
            const resName = rm + MELD_COMPONENT_SUFFIX[meldData.meldType];
            const meldView = fgui.UIPackage.createObject("lobby_mahjong", resName).asCom;
            meldView.setPosition(mv.x, mv.y);
            meldView.name = `myMeld${i}`;
            mymeldTilesNode.addChild(meldView);
            this.mountMeldImage(meldView, meldData);
        }
    }

    //显示面子牌组，暗杠需要特殊处理，如果是自己的暗杠，
    //则明牌显示前3张，第4张暗牌显示（以便和明杠区分）
    //如果是别人的暗杠，则全部暗牌显示
    public mountMeldImage(meldView: fgui.GComponent, msgMeld: proto.mahjong.IMsgMeldTile): void {
        const viewChairID = this.room.getPlayerViewChairIDByChairID(msgMeld.contributor);

        const t1 = meldView.getChild("n1").asCom;
        const t2 = meldView.getChild("n2").asCom;
        const t3 = meldView.getChild("n3").asCom;
        const meldType = msgMeld.meldType;
        const mtProto = mjproto.MeldType;
        if (meldType === mtProto.enumMeldTypeSequence) {
            let chowTile = t1;
            if (msgMeld.tile1 === msgMeld.chowTile) {
                chowTile = t1;
            } else if ((msgMeld.tile1 + 1) === msgMeld.chowTile) {
                chowTile = t2;
            } else if ((msgMeld.tile1 + 2) === msgMeld.chowTile) {
                chowTile = t3;
            }
            TileImageMounter.mountMeldEnableImage(t1, msgMeld.tile1, this.viewChairID);
            TileImageMounter.mountMeldEnableImage(t2, msgMeld.tile1 + 1, this.viewChairID);
            TileImageMounter.mountMeldEnableImage(t3, msgMeld.tile1 + 2, this.viewChairID);
            this.setMeldTileDirection(true, chowTile, viewChairID, this.viewChairID);
        } else if (meldType === mtProto.enumMeldTypeTriplet) {
            TileImageMounter.mountMeldEnableImage(t1, msgMeld.tile1, this.viewChairID);
            TileImageMounter.mountMeldEnableImage(t2, msgMeld.tile1, this.viewChairID);
            TileImageMounter.mountMeldEnableImage(t3, msgMeld.tile1, this.viewChairID);
            this.setMeldTileDirection(false, t2, viewChairID, this.viewChairID);
        } else if (meldType === mtProto.enumMeldTypeExposedKong || meldType === mtProto.enumMeldTypeTriplet2Kong) {
            const t4 = meldView.getChild("n4").asCom;
            TileImageMounter.mountMeldEnableImage(t1, msgMeld.tile1, this.viewChairID);
            TileImageMounter.mountMeldEnableImage(t2, msgMeld.tile1, this.viewChairID);
            TileImageMounter.mountMeldEnableImage(t3, msgMeld.tile1, this.viewChairID);
            TileImageMounter.mountMeldEnableImage(t4, msgMeld.tile1, this.viewChairID);
            this.setMeldTileDirection(false, t4, viewChairID, this.viewChairID);
        }
    }

    //设置面子牌的方向
    public setMeldTileDirection(ischi: boolean, tileObj: fgui.GComponent, dir: number, viewChairID: number): void {
        if (dir > 0 && viewChairID > 0) {
            const image = tileObj.getChild("ts").asLoader;
            if (image != null) {
                if (ischi) {
                    image.url = "ui.//dafeng/ts_chi";
                } else {
                    const x = dir - viewChairID;
                    if (x === 1 || x === -3) {
                        image.url = "ui.//dafeng/ts_xia";
                    } else if (x === 2 || x === -2) {
                        image.url = "ui.//dafeng/ts_dui";
                    } else if (x === 3 || x === -1) {
                        image.url = "ui.//dafeng/ts_shang";
                    }
                }
                image.visible = true;
            }
        }
    }

    public mountConcealedKongTileImage(t: fgui.GComponent, tileID: number): void {
        //const player = this.player
        //tileID === mjproto.mjproto.enumTid_MAX表示该牌需要暗牌显示
        if (tileID === mjproto.TileID.enumTid_MAX) {
            // TileImageMounter.mountMeldDisableImage(t, tileID, this.viewChairID)
        } else {
            TileImageMounter.mountMeldEnableImage(t, tileID, this.viewChairID);
        }
    }

    public hideFlowerOnHandTail(): void {
        this.hands[13].visible = false;
    }

    public showFlowerOnHandTail(flower: number): void {
        this.hands[13].visible = true;
        //const player = this.player
        if (this.viewChairID === 1) {
            TileImageMounter.mountTileImage(this.hands[13], flower);
        }
    }

    //为本人显示手牌，也即是1号playerView(prefab中的1号)//@param wholeMove 是否整体移动
    public showHandsForMe(wholeMove: boolean): void {
        const melds = this.player.melds;
        const tileshand = this.player.tilesHand;
        const tileCountInHand = tileshand.length;
        const handsClickCtrls = this.handsClickCtrls;
        //删除tileID
        //tileID主要是用于点击手牌时，知道该手牌对应那张牌ID
        for (const handsClickCtrl of handsClickCtrls) {
            handsClickCtrl.tileID = null;
        }

        //恢复所有牌的位置，由于点击手牌时会把手牌向上移动
        this.restoreHandPositionAndClickCount(-1);

        let begin = 0;
        let endd = tileCountInHand;

        const meldCount = melds.length;
        if ((meldCount * 3 + tileCountInHand) > 13) {
            this.hands[13].visible = true;
            if (wholeMove) {
                TileImageMounter.mountTileImage(this.hands[13], tileshand[0]);
                handsClickCtrls[13].tileID = tileshand[0];
                begin = 1;
            } else {
                TileImageMounter.mountTileImage(this.hands[13], tileshand[tileCountInHand - 1]);
                handsClickCtrls[13].tileID = tileshand[tileCountInHand - 1];
                endd = tileCountInHand - 1;
            }
        }

        //melds面子牌组
        this.showMelds();

        let j = 0;
        for (let i = begin; i < endd; i++) {
            const h = this.hands[j];
            TileImageMounter.mountTileImage(h, tileshand[i]);
            h.visible = true;
            handsClickCtrls[j].tileID = tileshand[i];
            if (this.player.isRichi) {
                //如果是听牌状态下，则不再把牌弄回白色（让手牌一直是灰色的）
                //判断 handsClickCtrls[j].isDiscardable 是否为 true, 是的话 则不能 setGray
                this.setGray(h);
                handsClickCtrls[j].isGray = true;
            }
            j = j + 1;
        }
    }

    //把手牌摊开，包括对手的暗杠牌，用于一手牌结束时
    public hand2Exposed(wholeMove: boolean): void {
        //不需要手牌显示了，全部摊开
        this.hideLights();

        //先显示所有melds面子牌组
        const melds = this.player.melds;
        const tileshand = this.player.tilesHand;
        this.showMelds();
        const tileCountInHand = tileshand.length;

        let begin = 0;
        let endd = tileCountInHand;

        const meldCount = melds.length;
        if ((meldCount * 3 + tileCountInHand) > 13) {
            const light = this.lights[13];
            if (wholeMove) {
                TileImageMounter.mountTileImage(light, tileshand[tileCountInHand - 1]);
                light.visible = true;
                endd = tileCountInHand - 1;
            } else {
                TileImageMounter.mountTileImage(light, tileshand[0]);
                light.visible = true;
                begin = 1;
            }
        }

        let j = 0;
        for (let i = begin; i < endd; i++) {
            const light = this.lights[j];
            TileImageMounter.mountTileImage(light, tileshand[i]);
            light.visible = true;
            j = j + 1;
        }
    }

    //清除掉由于服务器发下来allowed actions而导致显示出来的view//例如吃椪杠操作面板等等
    public clearAllowedActionsView(discardAble: boolean): void {
        if (!discardAble) {
            //print("llwant, clear discardable.."..debug.traceback())
            this.clearDiscardable();
            //把听牌标志隐藏
            this.hideTing();
        }

        this.hideOperationButtons();
        //隐藏听牌详情界面
        this.room.hideTingDataView();
    }

    //处理玩家点击手牌按钮
    public onHandTileBtnClick(index: number): void {
        const handsClickCtrls = this.handsClickCtrls;

        const player = this.player;
        if (player === null) {
            Logger.debug("player === null");

            return;
        }

        const clickCtrl = handsClickCtrls[index];

        if (!clickCtrl.isDiscardable) {
            //不可以出牌
            //"本轮不能出与该牌组合的牌，请选择其他牌"
            if (clickCtrl.isGray) {
                if (!this.alreadyShowNonDiscardAbleTips) {
                    // prompt.showPrompt("本轮不能出与该牌组合的牌，请选择其他牌")
                    this.alreadyShowNonDiscardAbleTips = true;
                }
            }

            return;
        }

        if (clickCtrl.readyHandList != null && clickCtrl.readyHandList.length > 0) {
            //如果此牌可以听
            const tingP: TingPai[] = [];
            for (let i = 0; i < clickCtrl.readyHandList.length; i += 2) {
                tingP.push(new TingPai(clickCtrl.readyHandList[i], 1, clickCtrl.readyHandList[i + 1]));
            }
            this.room.showTingDataView(tingP);
        } else {
            this.room.hideTingDataView();
        }

        //播放选牌音效
        //dfCompatibleAPI. soundPlay("effect/effect_xuanpai")

        clickCtrl.clickCount = clickCtrl.clickCount + 1;
        if (clickCtrl.clickCount === 1) {
            this.restoreHandPositionAndClickCount(index);
            this.moveHandUp(index);
        }

        if (clickCtrl.clickCount === 2) {
            //判断可否出牌
            if (player.waitSkip) {
                this.restoreHandPositionAndClickCount(-1);
                this.room.hideTingDataView();
            } else {
                player.onPlayerDiscardTile(clickCtrl.tileID);
                this.clearAllowedActionsView(false);
            }
            //player. onPlayerDiscardTile(clickCtrl.tileID)
        }
    }

    //处理玩家点击左下角的“听”按钮
    public onCheckReadyHandBtnClick(): void {
        const player = this.player;
        const readyHandList = player.readyHandList;
        if (!this.room.isListensObjVisible() && readyHandList != null && readyHandList.length > 0) {
            //const tingData = {}
            const tingP: TingPai[] = [];
            for (let i = 0; i < readyHandList.length; i += 2) {
                tingP.push(new TingPai(readyHandList[i], 1, readyHandList[i + 1]));
            }
            this.room.showTingDataView(tingP);
        } else {
            this.room.hideTingDataView();
        }
    }

    //拖动出牌事件
    public onDrag(dragGo: fgui.GObject, index: number): void {
        // const startPos = { x: dragGo.x, y: dragGo.y };
        // let enable = false;
        // let clickCtrl: ClickCtrl = new ClickCtrl()
        //const siblingIndex
        // dragGo.draggable = true
        // const x1 = dragGo.x - dragGo.width * 0.5
        // const x2 = dragGo.x + dragGo.width * 0.5
        // const y1 = dragGo.y - dragGo.height * 0.5
        // const y2 = dragGo.y + dragGo.height * 0.5
        // const rect = [x1, x2, y1, y2]
        //可否拖动
        // function dragable() {
        //     //print("llwant, drag able")
        //     const player = this.player
        //     if (player === null) {
        //         return false
        //     }
        //     const handsClickCtrls = this.handsClickCtrls
        //     clickCtrl = handsClickCtrls[index]
        //     return clickCtrl.isDiscardable && !player.waitSkip
        // }
        //检测拖动范围时候合法
        // function pointIsInRect(x: number, y: number) {
        //     if (rect === null) {
        //         return false
        //     }
        //     if (x > rect[0] && x < rect[1] && y > rect[2] && y < rect[3]) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }
        //附加拖动效果
        // function attachEffect(obj: fgui.GObject) {
        //     this.dragEffect. SetParent(obj)
        //     this.dragEffect.localPosition = Vector3(0, 0, 0)
        //     this.dragEffect.visible = true
        // }
        //去掉拖动效果
        // function detachEffect() {
        //     this.dragEffect.visible = false
        // }
        // dragGo.onDragStart.Set(
        //     function () {
        //         enable = dragable()
        //         //关闭拖动特效
        //         detachEffect()
        //         if (!enable) {
        //             return
        //         }
        //         this.restoreHandPositionAndClickCount(index)
        //         attachEffect(dragGo)
        //     }
        // )
        // dragGo.onDragMove.Set(
        //     function () {
        //         if (!enable) {
        //             dragGo.x = startPos.x
        //             dragGo.y = startPos.y
        //             return
        //         }
        //         //obj.position = pos
        //     }
        // )
        // dragGo.onDragEnd.Set(
        //     function () {
        //         if (!enable) {
        //             return
        //         }
        //         //拖牌结束立即不显示
        //         dragGo.visible = false
        //         detachEffect()
        //         if (pointIsInRect(dragGo.x, dragGo.y)) {
        //             dragGo.visible = true
        //             dragGo.x = startPos.x
        //             dragGo.y = startPos.y
        //         } else {
        //             //重置打出的牌位置（TODO：需要测试当网络不好的情况下onPlayerDiscardTile发送数据失败，界面刷新情况）
        //             dragGo.visible = false
        //             dragGo.x = startPos.x
        //             dragGo.y = startPos.y
        //             //判断可否出牌
        //             if (!this.player.waitSkip) {
        //                 this.player.onPlayerDiscardTile(clickCtrl.tileID)
        //                 this.clearAllowedActionsView()
        //             }
        //         }
        //     }
        // )
    }

    //还原所有手牌到它初始化时候的位置，并把clickCount重置为0
    public restoreHandPositionAndClickCount(index: number): void {
        for (let i = 0; i < 14; i++) {
            if (i !== index) {
                const clickCtrl = this.handsClickCtrls[i];
                const originPos = this.handsOriginPos[i];
                const h = clickCtrl.h;
                h.y = originPos.y;
                clickCtrl.clickCount = 0;
            }
        }
    }

    //隐藏听牌标志
    public hideTing(): void {
        for (let i = 0; i < 14; i++) {
            const clickCtrl = this.handsClickCtrls[i];
            if (clickCtrl != null && clickCtrl.t != null) {
                clickCtrl.t.visible = false;
            }
        }
    }

    //把手牌往上移动30的单位距离
    public moveHandUp(index: number): void {
        const originPos = this.handsOriginPos[index];
        const h = this.handsClickCtrls[index].h;
        h.y = originPos.y - 30;
    }

    //让所有的手牌都不可以点击
    public clearDiscardable(): void {
        if (this.player.isRichi) {
            //如果是听牌状态下，则不再把牌弄回白色（让手牌一直是灰色的）
            return;
        }
        for (const clickCtrl of this.handsClickCtrls) {
            clickCtrl.isDiscardable = null;
            if (clickCtrl.isGray) {
                clickCtrl.isGray = false;
                this.clearGray(clickCtrl.h);
            }
        }
    }

    //显示玩家头像
    public showHeadImg(): void {
        this.head.headView.visible = true;
        this.head.headView.onClick(this.player.onPlayerInfoClick, this);
    }

    //显示桌主
    public showOwner(): void {
        const player = this.player;
        this.head.roomOwnerFlag.visible = player.isMe();
    }

    //特效播放
    //播放补花效果，并等待结束
    public async playDrawFlowerAnimation(): Promise<void> {
        await this.playerOperationEffect("Effect_zi_buhua");
        await this.room.coWaitSeconds(0.5);
    }

    public async playerOperationEffect(effectName: string, isWait?: boolean): Promise<void> {
        if (isWait) {
            await this.room.getRoomHost().animationMgr.coPlay(`lobby/prefabs/mahjong/${effectName}`, this.aniPos.node);
        } else {
            this.room.getRoomHost().animationMgr.play(`lobby/prefabs/mahjong/${effectName}`, this.aniPos.node);
        }
    }

    //特效道具播放
    public playerDonateEffect(effectName: string): void {
        // const pos = this.head.headView
        // animation.play("animations/" + effectName + ".prefab", this.myView, pos.x, pos.y)
    }
    //起手听特效播放
    public playReadyHandEffect(): void {
        //this. playerOperationEffect(dfConfig.EFF_DEFINE.SUB_ZI_TING)
    }

    //设置灰度
    public setGray(obj: fgui.GObject): void {
        // if btn != null {
        //const hImg = btn. Find("hua")
        //const imageA = btn. GetComponent("Image")
        //const imageB = hImg. GetComponent("Image")
        //imageA.color = Color(120 / 255, 122 / 255, 122 / 255, 1)
        //imageB.color = Color(120 / 255, 122 / 255, 122 / 255, 1)
        //}
    }

    //恢复灰度
    public clearGray(obj: fgui.GObject): void {
        // if btn != null {
        //const hImg = btn. Find("hua")
        //const imageA = btn. GetComponent("Image")
        //const imageB = hImg. GetComponent("Image")
        //imageA.color = Color(1, 1, 1, 1)
        //imageB.color = Color(1, 1, 1, 1)
        //}
    }

}
