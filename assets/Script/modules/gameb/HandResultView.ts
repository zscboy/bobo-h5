import { Player } from "./Player";
import { proto } from "./proto/protoGame";
import { RoomInterface } from "./RoomInterface";
import { TileImageMounter } from "./TileImageMounter";

const greatWinType = proto.dfmahjong.GreatWinType;
const miniWinType = proto.dfmahjong.MiniWinType;
const mjproto = proto.mahjong;

//面子牌组资源 后缀
const MELD_COMPONENT_SUFFIX: { [key: string]: string } = {
    [mjproto.MeldType.enumMeldTypeTriplet2Kong]: "gang1",
    [mjproto.MeldType.enumMeldTypeExposedKong]: "gang1",
    [mjproto.MeldType.enumMeldTypeConcealedKong]: "gang2",
    [mjproto.MeldType.enumMeldTypeSequence]: "chipeng",
    [mjproto.MeldType.enumMeldTypeTriplet]: "chipeng"
};

/**
 * palyer ui
 */
class ViewGroup {
    public group: fgui.GComponent;
    public imageIcon: fgui.GObject;
    public imageRoom: fgui.GObject;
    public cards: fgui.GComponent[];
    public melds: fgui.GComponent;
    public textName: fgui.GObject;
    public textId: fgui.GObject;
    public zhuang: fgui.GObject;
    public lianzhuang: fgui.GObject;
    public textCountT: fgui.GObject;
    public textCountLoseT: fgui.GObject;
    public textPlayerScore: fgui.GObject;
    public hu: fgui.GObject;
    public aniPos: fgui.GObject;
}
/**
 * 显示一手牌结束后的得分结果
 */
export class HandResultView extends cc.Component {
    private room: RoomInterface;
    private unityViewNode: fgui.GComponent = null;
    private win: fgui.Window;
    private msgHandOver: proto.mahjong.IMsgHandOver;
    private players: Player[];
    private textRoomNumber: fgui.GObject;
    // private textTime: fgui.GObject;
    private aniPos: fgui.GObject;
    private contentGroup: ViewGroup[];

    public showView(room: RoomInterface, msgHandOver: proto.mahjong.IMsgHandOver): void {
        this.room = room;
        // 提高消息队列的优先级为1
        if (!room.isReplayMode()) {
            room.getRoomHost().blockNormal();
        }
        const loader = room.getRoomHost().loader;
        loader.fguiAddPackage("gameb/dafeng");
        const viewObj = fgui.UIPackage.createObject("dafeng", "hand_result").asCom;
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
        const players: Player[] = [];
        let i = 0;
        Object.keys(players2).forEach((key: string) => {
            const p = players2[key];
            players[i] = <Player>p;
            i = i + 1;
        });
        players.sort((x: Player, y: Player) => {
            return y.playerView.viewChairID - x.playerView.viewChairID;
        });
        this.players = players;

        const againBtn = this.unityViewNode.getChild("againBtn");
        againBtn.onClick(this.onAgainButtonClick, this);
        const shanreBtn = this.unityViewNode.getChild("shanreBtn");
        // shanreBtn.onClick(this.onShareButtonClick, this);

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
        if (this.msgHandOver.endType !== proto.mahjong.HandOverType.enumHandOverType_None) {
            const myPlayer = <Player>this.room.getMyPlayer();
            if (myPlayer.playerScore.score > 0) {
                en = "Effect_jiemian_shengli";
            } else {
                en = "Effect_jiemian_shengli";
            }
        } else {
            en = "Effect_jiemian_huangzhuang";
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

        let roomNumber = this.room.roomNumber;
        if (roomNumber == null) {
            roomNumber = "";
        }
        this.textRoomNumber.text = `房号:${roomNumber}`;
    }

    //更新玩家基本信息
    private updatePlayerInfoData(player: Player, c: ViewGroup): void {
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
        c.zhuang.visible = this.room.bankerChairID === player.chairID;
        //头像
    }
    //更新牌数据
    private updatePlayerTileData(player: Player, c: ViewGroup): void {
        const meldDatas = player.melds; //落地牌组
        const tilesHand = player.tilesHand; //玩家手上的牌（暗牌）排好序的
        const lastTile = player.lastTile; //玩家最后一张牌
        //吃碰杠牌
        const rm = "mahjong_mine_meld_";
        for (let i = 1; i <= 4; i++) {
            const mm = c.melds.getChild(`myMeld${i}`);
            if (mm !== undefined && mm !== null) {
                c.melds.removeChild(mm, true);
            }
        }
        //摆放牌
        for (let i = 0; i < meldDatas.length; i++) {
            const meldData = meldDatas[i];
            const mv = c.melds.getChild(`meld${i + 1}`);
            const resName = `${rm}${MELD_COMPONENT_SUFFIX[meldData.meldType]}`;
            const meldView = fgui.UIPackage.createObject("lobby_mahjong", resName).asCom;
            meldView.setPosition(mv.x, mv.y);
            meldView.name = `myMeld${i}`;
            c.melds.addChild(meldView);
            player.playerView.mountMeldImage(meldView, meldData);
        }
        //手牌
        let n = -1;
        let last = false;
        const meldCount = meldDatas.length;
        const tileCountInHand = tilesHand.length;
        const isHu = (meldCount * 3 + tileCountInHand) > 13;
        for (const oCardObj of c.cards) {
            oCardObj.visible = false;
        }
        for (let i = 0; i < tileCountInHand; i++) {
            const tiles = tilesHand[i];
            //因为玩家有可能有两张一样的牌，所以要加一个变量来判断是否已处理
            if (lastTile === tiles && !last && isHu) {
                last = true;
                TileImageMounter.mountTileImage(c.cards[13], tiles);
                c.cards[13].visible = true;
                c.hu.visible = true;
            } else {
                n = n + 1;
                const oCardObj = c.cards[n];
                TileImageMounter.mountTileImage(oCardObj, tiles);
                oCardObj.visible = true;
            }
        }
    }
    //更新详细数据
    private updatePlayerScoreData(player: Player, c: ViewGroup): void {
        const hot = proto.mahjong.HandOverType;
        const playerScores = player.playerScore; //这是在 handleMsgHandOver里面保存进去的
        let textScore = "";
        if (playerScores.specialScore !== null && playerScores.specialScore > 0) {
            textScore = `墩子分 +${playerScores.specialScore} `;
        }
        if (playerScores.fakeWinScore !== null && playerScores.fakeWinScore !== 0) {
            textScore = `${textScore}包牌  `;
        }

        if (playerScores.isContinuousBanker) {
            textScore = `${textScore}连庄×${playerScores.continuousBankerMultiple / 10}  `;
        }

        if (playerScores.winType !== hot.enumHandOverType_None && playerScores.winType !== hot.enumHandOverType_Chucker) {
            const greatWin = playerScores.greatWin;
            if (greatWin !== null && greatWin.greatWinType !== greatWinType.enumGreatWinType_None) {
                //大胡计分
                if (greatWin.trimGreatWinPoints !== null && greatWin.trimGreatWinPoints > 0) {
                    textScore = `${textScore}辣子数 +${greatWin.trimGreatWinPoints / 10}  `;
                }
                if (greatWin.baseWinScore !== null && greatWin.baseWinScore > 0) {
                    textScore = `${textScore}基本分${greatWin.baseWinScore}  `;
                }
                const s = this.processGreatWin(greatWin);
                textScore = `${textScore}${s}  `;
            } else {
                //既然不是大胡，必然是小胡  小胡计分
                const miniWin = playerScores.miniWin;
                let tt = "小胡";
                if (miniWin.miniWinType !== miniWinType.enumMiniWinType_None) {
                    tt = this.processMiniWin(miniWin);
                    if (miniWin.miniMultiple !== null && miniWin.miniMultiple > 0) {
                        textScore = `${textScore}倍数${miniWin.miniMultiple / 10}  `;
                    }
                }
                textScore = `${textScore}${tt}`;
            }
            //这里需要作判断，只有roomType为 大丰的时候  才能显示家家庄
            if (this.room.markup !== undefined && this.room.markup > 0) {
                textScore = `${textScore}家家庄x2  `;
            }
        }
        // if (playerScores.fakeList !== null && playerScores.fakeList.length > 0) {
        //     textScore = `${textScore}报听  `;
        // }
        c.textPlayerScore.text = textScore;
    }
    //更新显示数据
    private updateAllData(): void {
        this.updateRoomData();
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            const c = this.contentGroup[i];
            c.group.visible = true;
            //玩家基本信息
            this.updatePlayerInfoData(player, c);
            let myScore = 0;
            if (this.msgHandOver.endType !== proto.mahjong.HandOverType.enumHandOverType_None) {
                const playerScores = player.playerScore; //这是在 handleMsgHandOver里面保存进去的
                myScore = playerScores.score;

                //分数详情
                this.updatePlayerScoreData(player, c);
            }
            this.updatePlayerTileData(player, c);
            //分数
            if (myScore > 0) {
                c.textCountT.text = `+${myScore}`;
                c.textCountT.visible = true;
                c.textCountLoseT.visible = false;
            } else {
                c.textCountLoseT.text = myScore.toString();
                c.textCountLoseT.visible = true;
                c.textCountT.visible = false;
            }
        }
    }
    //处理大胡数据
    private processGreatWin(greatWin: proto.mahjong.IMsgPlayerScoreGreatWin): string {
        let textScore = "";
        const gt = greatWin.greatWinType;
        if (gt === undefined || gt === null) {
            return textScore;
        }
        if ((gt & greatWinType.enumGreatWinType_ChowPongKong) !== 0) {
            textScore = `${textScore}独钓 `;
        }
        if ((gt & greatWinType.enumGreatWinType_FinalDraw) !== 0) {
            textScore = `${textScore}海底捞月 `;
        }
        if ((gt & greatWinType.enumGreatWinType_PongKong) !== 0) {
            textScore = `${textScore}碰碰胡 `;
        }
        if ((gt & greatWinType.enumGreatWinType_PureSame) !== 0) {
            textScore = `${textScore}清一色 `;
        }
        if ((gt & greatWinType.enumGreatWinType_MixedSame) !== 0) {
            textScore = `${textScore}混一色 `;
        }
        if ((gt & greatWinType.enumGreatWinType_ClearFront) !== 0) {
            textScore = `${textScore}大门清 `;
        }
        if ((gt & greatWinType.enumGreatWinType_SevenPair) !== 0) {
            textScore = `${textScore}七对 `;
        }
        if ((gt & greatWinType.enumGreatWinType_GreatSevenPair) !== 0) {
            textScore = `${textScore}豪华大七对 `;
        }
        if ((gt & greatWinType.enumGreatWinType_Heaven) !== 0) {
            textScore = `${textScore}天胡 `;
        }
        if ((gt & greatWinType.enumGreatWinType_AfterConcealedKong) !== 0) {
            textScore = `${textScore}暗杠胡 `;
        }
        if ((gt & greatWinType.enumGreatWinType_AfterExposedKong) !== 0) {
            textScore = `${textScore}明杠胡 `;
        }
        if ((gt & greatWinType.enumGreatWinType_Richi) !== 0) {
            textScore = `${textScore}起手报听胡牌 `;
        }
        if ((gt & greatWinType.enumGreatWinType_PureSameWithFlowerNoMeld) !== 0) {
            textScore = `${textScore}清一色 `; //清一色，带花但是没有落地
        }
        if ((gt & greatWinType.enumGreatWinType_PureSameWithMeld) !== 0) {
            textScore = `${textScore}清一色 `; //清一色，有落地
        }
        if ((gt & greatWinType.enumGreatWinType_MixSameWithFlowerNoMeld) !== 0) {
            textScore = `${textScore}混一色 `; //混一色，带花但是没有落地
        }
        if ((gt & greatWinType.enumGreatWinType_MixSameWithMeld) !== 0) {
            textScore = `${textScore}混一色 `; //混一色，有落地
        }
        if ((gt & greatWinType.enumGreatWinType_PongKongWithFlowerNoMeld) !== 0) {
            textScore = `${textScore}碰碰胡 `; //碰碰胡，有花没有落地
        }
        // if ((gt & greatWinType.enumGreatWinType_RobKong) !== 0) {
        //     textScore = `${textScore}明杠冲 `; //碰碰胡，有花没有落地
        // }
        // if ((gt & greatWinType.enumGreatWinType_OpponentsRichi) !== 0) {
        //     textScore = `${textScore}报听 `; //碰碰胡，有花没有落地
        // }

        return textScore;
    }
    //处理小胡数据
    private processMiniWin(miniWin: proto.mahjong.IMsgPlayerScoreMiniWin): string {
        let textScore = "";
        const gt = miniWin.miniWinType;
        if (gt === undefined || gt === null) {
            return textScore;
        }
        if ((gt & miniWinType.enumMiniWinType_Continuous_Banker) !== 0) {
            textScore = `${textScore}连庄 `;
        }
        if ((gt & miniWinType.enumMiniWinType_NoFlowers) !== 0) {
            textScore = `${textScore}无花10花 `;
        }
        if ((gt & miniWinType.enumMiniWinType_Kong2Discard) !== 0) {
            textScore = `${textScore}杠冲 `;
        }
        if ((gt & miniWinType.enumMiniWinType_Kong2SelfDraw) !== 0) {
            textScore = `${textScore}杠开 `;
        }
        if ((gt & miniWinType.enumMiniWinType_SecondFrontClear) !== 0) {
            textScore = `${textScore}小门清 `;
        }

        return textScore;
    }
    private initHands(view: fgui.GComponent): fgui.GComponent[] {
        const hands: fgui.GComponent[] = [];
        const myHandTilesNode = view.getChild("hands").asCom;
        for (let i = 0; i < 14; i++) {
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
        for (let i = 0; i < 4; i++) {
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
            //牌组
            contentGroupData.melds = group.getChild("melds").asCom;
            //名字
            contentGroupData.textName = group.getChild("name");
            contentGroupData.textId = group.getChild("id");
            //庄家
            contentGroupData.zhuang = group.getChild("zhuang");
            contentGroupData.zhuang.visible = false;
            contentGroupData.lianzhuang = group.getChild("lianzhuang");
            contentGroupData.lianzhuang.visible = false;
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
            contentGroupData.textPlayerScore = group.getChild("score");
            //胡
            contentGroupData.hu = group.getChild("hu");
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
        this.destroy();
        this.win.hide();
        this.win.dispose();
        if (this.msgHandOver.continueAble) {
            this.room.onReadyButtonClick();
        }
    }

}
