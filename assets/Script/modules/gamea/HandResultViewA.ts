import { Logger } from "../lobby/lcore/LCoreExports";
import { Share } from "../lobby/shareUtil/ShareExports";
import { PlayerA } from "./PlayerA";
import { proto } from "./proto/protoGameA";
import { RoomInterfaceA } from "./RoomInterfaceA";
import { TileImageMounterA } from "./TileImageMounterA";

/**
 * palyer ui
 */
class ViewGroup {
    public group: fgui.GComponent;
    public imageIcon: fgui.GObject;
    public imageRoom: fgui.GObject;
    public cards: fgui.GComponent[];
    public textName: fgui.GObject;
    public textId: fgui.GObject;
    public textCountT: fgui.GObject;
    public textCountLoseT: fgui.GObject;
    public textPlayerScore: fgui.GObject;
    public aniPos: fgui.GObject;
}
/**
 * 显示一手牌结束后的得分结果
 */
export class HandResultViewA extends cc.Component {
    private eventTarget: cc.EventTarget;
    private room: RoomInterfaceA;
    private unityViewNode: fgui.GComponent = null;
    private win: fgui.Window;
    private msgHandOver: proto.pokerface.IMsgHandOver;
    private players: PlayerA[];
    private textRoomNumber: fgui.GObject;
    // private textTime: fgui.GObject;
    private aniPos: fgui.GObject;
    private contentGroup: ViewGroup[];

    public showView(room: RoomInterfaceA, msgHandOver: proto.pokerface.IMsgHandOver): void {
        this.eventTarget = new cc.EventTarget();
        this.room = room;
        // 提高消息队列的优先级为1
        if (!room.isReplayMode()) {
            room.getRoomHost().blockNormal();
        }
        const loader = room.getRoomHost().loader;
        loader.fguiAddPackage("gamea/runfast");
        const viewObj = fgui.UIPackage.createObject("runfast", "hand_result").asCom;
        this.unityViewNode = viewObj;
        const win = new fgui.Window();
        win.contentPane = viewObj;
        this.win = win;
        //初始化View
        this.initAllView();
        //结算数据
        this.msgHandOver = msgHandOver;

        // fairy.GRoot.inst:AddChild(viewObj)

        //排序players
        const players2 = room.getPlayers();
        const players: PlayerA[] = [];
        let i = 0;
        Object.keys(players2).forEach((key: string) => {
            const p = players2[key];
            players[i] = <PlayerA>p;
            i = i + 1;
        });
        players.sort((x: PlayerA, y: PlayerA) => {
            return y.playerView.viewChairID - x.playerView.viewChairID;
        });
        this.players = players;

        const againBtn = this.unityViewNode.getChild("againBtn");
        againBtn.onClick(this.onAgainButtonClick, this);
        // const infoBtn = this.unityViewNode.getChild("guizeBtn");
        // infoBtn.onClick(this.onRoomRuleBtnClick, this);
        const shanreBtn = this.unityViewNode.getChild("shanreBtn");
        shanreBtn.visible = cc.sys.platform === cc.sys.WECHAT_GAME;
        shanreBtn.onClick(this.onShareButtonClick, this);

        if (room.isReplayMode()) {
            againBtn.visible = false;
            shanreBtn.visible = false;
        }

        //更新数据
        this.updateAllData();

        this.win.show();
    }

    //更新房间相关数据
    private updateRoomData(): void {
        let en: string;
        const myPlayer = <PlayerA>this.room.getMyPlayer();
        if (myPlayer.playerScore.score > 0) {
            en = "Effect_jiemian_shengli";
        } else {
            en = "Effect_jiemian_shibai";
        }
        this.room.getRoomHost().animationMgr.play(`lobby/prefabs/mahjong/${en}`, this.aniPos.node);

        // let date: string;
        // if (this.room.isReplayMode()) {

        // } else {
        //     const startTime = this.room.re.msgHandRecord.endTime;
        //     date = os.date("%Y-%m-%d %H:%M", startTime * 60)
        // }
        // this.textTime.text = date;

        //房间信息
        if (this.room.roomInfo === null) {
            return;
        }

        let roomNumber = this.room.roomInfo.roomNumber;
        if (roomNumber == null) {
            roomNumber = "";
        }
        this.textRoomNumber.text = `房号:${roomNumber}`;
    }
    //更新玩家基本信息
    private updatePlayerInfoData(player: PlayerA, c: ViewGroup): void {
        //名字
        let name = player.playerInfo.nick;
        const userID = player.userID;
        if (name == null || name === "") {
            name = userID;
        }
        c.textName.text = name;
        c.textId.text = `ID:${userID}`;
        //房主
        c.imageRoom.visible = player.isMe();
        //庄家
        // c.zhuang.visible = this.room.bankerChairID === player.chairID;
        //头像
    }
    //更新牌数据
    private updatePlayerTileData(player: PlayerA, c: ViewGroup): void {
        const cardsOnHand = player.tilesHand; //玩家手上的牌（暗牌）排好序的

        //手牌
        const cardCountOnHand = cardsOnHand.length;
        if (cardCountOnHand > 0) {
            for (let i = 0; i < cardCountOnHand; i++) {
                const tiles = cardsOnHand[i];
                const oCardObj = c.cards[i];
                TileImageMounterA.mountTileImage(oCardObj, tiles);
                oCardObj.visible = true;
            }
            c.textPlayerScore.text = `剩余手牌:${cardCountOnHand}`;
            c.textPlayerScore.visible = true;
        } else {
            c.textPlayerScore.visible = false;
            for (const oCardObj of c.cards) {
                oCardObj.visible = false;
            }
        }
    }
    //更新详细数据
    private updateAllData(): void {
        let num = 0;
        //整个房间数据
        this.updateRoomData();
        for (const pa of this.players) {
            const vg = this.contentGroup[num];
            vg.group.visible = true;
            //玩家基本信息
            this.updatePlayerInfoData(pa, vg);
            const playerScores = pa.playerScore; //这是在 handleMsgHandOver里面保存进去的
            const myScore = playerScores.score;
            //牌
            this.updatePlayerTileData(pa, vg);
            //分数
            if (myScore > 0) {
                vg.textCountT.text = `+${myScore}`;
                vg.textCountT.visible = true;
                vg.textCountLoseT.visible = false;
                this.showWin(vg);
            } else {
                vg.textCountLoseT.text = `${myScore}`;
                vg.textCountLoseT.visible = true;
                vg.textCountT.visible = false;
            }
            num = num + 1;
        }

    }
    // 显示赢标志
    private showWin(c: ViewGroup): void {
        Logger.debug("显示赢标志");
    }
    private initHands(view: fgui.GComponent): fgui.GComponent[] {
        const hands: fgui.GComponent[] = [];
        const myHandTilesNode = view.getChild("hands").asCom;
        for (let i = 0; i < 16; i++) {
            const cname = `n${i + 1}`;
            const card = myHandTilesNode.getChild(cname).asCom;
            card.visible = false;
            hands[i] = card;
        }

        return hands;
    }
    private initAllView(): void {
        //日期时间
        // this.textTime = this.unityViewNode.getChild("date");
        //房间信息
        this.textRoomNumber = this.unityViewNode.getChild("roomNumber");
        //特效位置节点
        this.aniPos = this.unityViewNode.getChild("aniPos");
        const contentGroup: ViewGroup[] = [];
        for (let i = 0; i < 3; i++) {
            const contentGroupData = new ViewGroup();
            const group = this.unityViewNode.getChild(`player${i + 1}`).asCom;
            contentGroupData.group = group;
            //头像
            contentGroupData.imageIcon = group.getChild("head");
            // contentGroupData.headView = group:SubGet("ImageIcon/Image", "Image")
            //房主标志
            contentGroupData.imageRoom = group.getChild("roomOwner");
            contentGroupData.imageRoom.visible = false;
            //手牌
            contentGroupData.cards = this.initHands(group);
            //名字
            contentGroupData.textName = group.getChild("name");
            contentGroupData.textId = group.getChild("id");
            //分数为正的时候显示
            contentGroupData.textCountT = group.getChild("text_win");
            contentGroupData.textCountT.text = "0";
            contentGroupData.textCountT.visible = false;
            //分数为负的时候显示
            contentGroupData.textCountLoseT = group.getChild("text_lose");
            contentGroupData.textCountLoseT.text = "0";
            contentGroupData.textCountLoseT.visible = false;
            //赢标志的位置
            // contentGroupData.winImagePos = group:Find("WinImagePos")
            //剩余牌数
            contentGroupData.textPlayerScore = group.getChild("remainderHands");
            //获胜节点位置
            contentGroupData.aniPos = group.getChild("aniPos");

            //保存userID
            // contentGroupData.userID = "";

            //logError("initAllView var : "..var)
            contentGroup[i] = contentGroupData;

            group.visible = false;
        }
        this.contentGroup = contentGroup;
    }

    private onShareButtonClick(): void {
        Share.shareGame(this.eventTarget, Share.ShareSrcType.GameShare, Share.ShareMediaType.Image, Share.ShareDestType.Friend);
    }
    // private onRoomRuleBtnClick(): void {
    //     let roomRuleView = this.getComponent(RoomRuleViewA);

    //     if (roomRuleView === undefined || roomRuleView == null) {
    //         roomRuleView = this.addComponent(RoomRuleViewA);
    //     }
    //     roomRuleView.updateView(this.room.roomInfo.roomConfig);
    // }
    // 玩家点击“继续”按钮，注意如果牌局结束，此按钮是“大结算”
    private onAgainButtonClick(): void {
        // 降低消息队列的优先级为0
        const room = this.room;
        if (!room.isReplayMode()) {
            this.room.getRoomHost().unblockNormal();
        }
        // if (this.ani) {
        //     this.ani.setVisible(false);
        // }
        this.eventTarget.emit("destroy");
        this.destroy();
        this.win.hide();
        this.win.dispose();
        if (this.msgHandOver.continueAble) {
            this.room.onReadyButtonClick();
        }
    }

}
