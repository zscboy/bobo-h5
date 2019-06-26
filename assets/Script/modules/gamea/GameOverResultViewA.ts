import { Share } from "../lobby/shareUtil/ShareExports";
import { PlayerA } from "./PlayerA";
import { proto } from "./proto/protoGameA";
import { RoomInterfaceA } from "./RoomInterfaceA";

/**
 * palyer ui
 */
class ViewGroup {
    public group: fgui.GComponent;
    public imageIcon: fgui.GObject;
    public imageRoom: fgui.GObject;
    public textName: fgui.GObject;
    public textId: fgui.GObject;
    public textCountT: fgui.GObject;
    public textCountLoseT: fgui.GObject;
    public textWin: fgui.GObject;
    public aniPos: fgui.GObject;
}
/**
 * 显示一手牌结束后的得分结果
 */
export class GameOverResultViewA extends cc.Component {
    private eventTarget: cc.EventTarget;
    private room: RoomInterfaceA;
    private unityViewNode: fgui.GComponent = null;
    private win: fgui.Window;
    private msgGameOver: proto.pokerface.IMsgGameOver;
    private textRoomNumber: fgui.GObject;
    private maxScore: number = 0;
    private maxScoreIndexs: ViewGroup[];
    private contentGroup: ViewGroup[];
    private aniPos: fgui.GObject;

    public showView(room: RoomInterfaceA, msgGameOver: proto.pokerface.IMsgGameOver): void {
        this.eventTarget = new cc.EventTarget();
        // -- 提高消息队列的优先级为1
        if (!room.isReplayMode()) {
            room.getRoomHost().blockNormal();
        }
        const loader = room.getRoomHost().loader;
        loader.fguiAddPackage("gamea/runfast");
        const viewObj = fgui.UIPackage.createObject("runfast", "game_over").asCom;
        viewObj.x = cc.winSize.width / 2 - (cc.winSize.height * 1136 / 640 / 2);
        this.unityViewNode = viewObj;
        const win = new fgui.Window();
        win.contentPane = viewObj;
        this.win = win;

        //初始化View
        this.initAllView();
        this.room = room;
        //结算数据
        this.msgGameOver = msgGameOver;

        const backHallBtn = this.unityViewNode.getChild("backHallBtn");
        backHallBtn.onClick(this.onCloseButtonClick, this);
        const shanreBtn = this.unityViewNode.getChild("shanreBtn");
        shanreBtn.visible = cc.sys.platform === cc.sys.WECHAT_GAME;
        shanreBtn.onClick(this.onShareButtonClick, this);

        //更新数据
        this.updateAllData();
        this.win.show();
    }

    //更新房间相关数据
    private updateRoomData(): void {
        //牌局结算文字动效
        // const x = this.aniPos.x
        // const y = this.aniPos.y
        // animation.play("animations/Effects_jiemian_paijvzongjiesuan.prefab", this.unityViewNode, x, y, true)
        this.room.getRoomHost().animationMgr.play(`lobby/prefabs/mahjong/Effect_zi_jiesuan`, this.aniPos.node);
        //日期时间
        // const date = os.date("%Y-%m-%d %H:%M:%S")
        // this.textTime.text = date
        //房间信息
        const roomNumber = this.room.roomInfo.roomNumber;
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
        //头像
    }
    //设置大赢家标志
    private setDYJEffect(c: ViewGroup): void {
        //大赢家动效
        if (c !== null) {
            // this.room.getRoomHost().animationMgr.play(`lobby/prefabs/mahjong/Effect_zi_dayingjia`, c.aniPos.node);
        }
    }
    //更新玩家分数信息
    private updatePlayerScoreData(playerStat: proto.pokerface.IMsgGameOverPlayerStat, c: ViewGroup): void {
        const score = playerStat.score;
        const winSelfDrawnCounter = playerStat.winSelfDrawnCounter; //赢牌局数
        c.textWin.text = `胜利局数: ${winSelfDrawnCounter} 局`;
        if (score > this.maxScore) {
            this.maxScoreIndexs = [];
            this.maxScoreIndexs.push(c);
            this.maxScore = score;
        } else if (score === this.maxScore) {
            this.maxScoreIndexs.push(c);
        }

        if (score >= 0) {
            let add = "+";
            if (score === 0) {
                add = "";
            }
            c.textCountT.text = `${add}${score}`;
            c.textCountT.visible = true;
            c.textCountLoseT.visible = false;
        } else {
            c.textCountLoseT.text = score.toString();
            c.textCountLoseT.visible = true;
            c.textCountT.visible = false;
        }
    }
    //更新显示数据
    private updateAllData(): void {
        //整个房间数据
        this.updateRoomData();
        const room = this.room;

        //暂时保存上一个大赢家数据
        this.maxScore = 0;
        this.maxScoreIndexs = [];
        if (this.msgGameOver !== null) {
            const playerStats = this.msgGameOver.playerStats;
            if (playerStats !== undefined) {
                playerStats.sort((x: proto.pokerface.IMsgGameOverPlayerStat, y: proto.pokerface.IMsgGameOverPlayerStat) => {
                    const a = room.getPlayerViewChairIDByChairID(x.chairID);
                    const b = room.getPlayerViewChairIDByChairID(y.chairID);

                    return b - a;
                });
            }
            for (let i = 0; i < playerStats.length; i++) {
                const playerStat = playerStats[i];
                if (playerStat !== undefined && playerStat !== null) {
                    const c = this.contentGroup[i];
                    c.group.visible = true;
                    const player = <PlayerA>this.room.getPlayerByChairID(playerStat.chairID);
                    //玩家基本信息
                    this.updatePlayerInfoData(player, c);
                    //玩家分数信息
                    this.updatePlayerScoreData(playerStat, c);
                }
                if (this.maxScore > 0 && this.maxScoreIndexs !== undefined) {
                    for (const maxScoreIndex of this.maxScoreIndexs) {
                        this.setDYJEffect(maxScoreIndex);
                    }
                }
            }
        }
    }
    //初始化界面
    private initAllView(): void {
        //日期时间
        // this.textTime = self.unityViewNode:GetChild("date")
        //房间信息
        this.textRoomNumber = this.unityViewNode.getChild("roomNumber");
        //特效位置节点
        this.aniPos = this.unityViewNode.getChild("aniPos");
        const contentGroup: ViewGroup[] = [];
        for (let i = 0; i < 3; i++) {
            const contentGroupData = new ViewGroup();
            const group = this.unityViewNode.getChild(`player${i + 1}`).asCom;
            contentGroupData.group = group;

            contentGroupData.imageIcon = group.getChild("head");
            //房主标志
            contentGroupData.imageRoom = group.getChild("roomOwner");
            contentGroupData.imageRoom.visible = false;
            //大赢家动画位置
            contentGroupData.aniPos = group.getChild("aniPos");
            //名字
            contentGroupData.textName = group.getChild("name");
            contentGroupData.textId = group.getChild("id");
            //赢牌次数
            contentGroupData.textWin = group.getChild("number");

            //分数（赢）
            contentGroupData.textCountT = group.getChild("text_win");
            contentGroupData.textCountT.text = "0";
            contentGroupData.textCountT.visible = false;
            //分数（输）
            contentGroupData.textCountLoseT = group.getChild("text_lose");
            contentGroupData.textCountLoseT.text = "0";
            contentGroupData.textCountLoseT.visible = false;
            //总得分
            contentGroup[i] = contentGroupData;

            group.visible = false;
        }
        this.contentGroup = contentGroup;
    }
    //玩家点击返回按钮
    private onCloseButtonClick(): void {
        // -- 降低消息队列的优先级为0
        if (!this.room.isReplayMode()) {
            this.room.getRoomHost().unblockNormal();
        }
        this.eventTarget.emit("destroy");
        this.unityViewNode = null;
        this.destroy();
        this.win.hide();
        this.win.dispose();

        this.room.quit();
    }

    private onShareButtonClick(): void {
        Share.shareGame(this.eventTarget, Share.ShareSrcType.GameShare, Share.ShareMediaType.Image, Share.ShareDestType.Friend);
    }
}
