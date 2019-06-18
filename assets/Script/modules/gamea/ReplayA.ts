import { Dialog, Logger, Message, MsgQueue, MsgType } from "../lobby/lcore/LCoreExports";
import { HandlerActionResultDiscardedA } from "./handlers/HandlerActionResultDiscardedA";
import { HandlerActionResultSkipA } from "./handlers/HandlerActionResultSkipA";
import { HandlerMsgHandOverA } from "./handlers/HandlerMsgHandOverA";
import { PlayerA } from "./PlayerA";
// import { HandlerMsgHandOver } from "./handlers/HandlerMsgHandOver";
import { proto } from "./proto/protoGameA";
import { RoomInterfaceA } from "./RoomInterfaceA";

type ActionHandler = (srAction: proto.pokerface.ISRAction, x?: any) => Promise<void>; // tslint:disable-line:no-any

/**
 * 回播
 */
export class ReplayA {
    public readonly msgHandRecord: proto.pokerface.SRMsgHandRecorder;
    private room: RoomInterfaceA;
    private speed: number;
    private actionStep: number;
    private modalLayerColor: cc.Color;
    private btnResume: fgui.GObject;
    private btnPause: fgui.GObject;
    private btnFast: fgui.GObject;
    private btnSlow: fgui.GObject;
    private btnBack: fgui.GObject;
    private win: fgui.Window;
    private mq: MsgQueue;
    private timerCb: Function;
    private actionHandlers: { [key: number]: ActionHandler } = {};
    // private latestDiscardedTile: number;

    public constructor(msgHandRecord: proto.pokerface.SRMsgHandRecorder) {
        this.msgHandRecord = msgHandRecord;
    }

    public async gogogo(room: RoomInterfaceA): Promise<void> {
        Logger.debug("gogogogo");

        this.room = room;
        const players = this.msgHandRecord.players;
        players.forEach((p) => {
            Logger.debug("p.userID:", p.userID);
            if (p.userID === this.room.getRoomHost().user.userID) {
                room.createMyPlayer(this.clonePlayer(p));
            } else {
                room.createPlayerByInfo(this.clonePlayer(p));
            }
        });

        // 挂载action处理handler，复用action result handlers
        this.armActionHandler();
        this.speed = 0.5; //  默认速度, 每2秒一次

        const mq = new MsgQueue({});
        this.mq = mq;

        this.actionStep = -1;

        this.startStepTimer();

        // 显示操作面板
        // 去除模式对话框背景色（40%透明），设置为100%透明
        this.modalLayerColor = fgui.GRoot.inst.modalLayer.color;
        const color = new cc.Color(0, 0, 0, 0);
        fgui.GRoot.inst.modalLayer.color = color;

        this.room.getRoomHost().loader.fguiAddPackage("lobby/fui_replay/lobby_replay");
        const view = fgui.UIPackage.createObject("lobby_replay", "operations").asCom;
        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;
        this.initControlView(view);
        this.win.show();

        let loop = true;
        while (loop) {
            const msg = await this.mq.waitMsg();
            if (msg.mt === MsgType.quit) {
                loop = false;
                break;
            }

            if (msg.mt === MsgType.replay) {
                await this.doReplayStep();
            }
        }

        this.win.hide();
        this.win.dispose();
        fgui.GRoot.inst.modalLayer.color = this.modalLayerColor;
    }

    //克隆牌组
    private cloneCards(cards: number[]): number[] {
        const cs: number[] = [];
        for (const c of cards) {
            cs.push(c);
        }

        return cs;
    }
    private clonePlayer(p: proto.pokerface.ISRMsgPlayerInfo): proto.pokerface.IMsgPlayerInfo {
        return {
            state: 0,
            userID: p.userID,
            chairID: p.chairID,
            nick: p.nick,
            gender: p.gender,
            headIconURI: p.headIconURI,
            avatarID: p.avatarID
        };
    }

    private startStepTimer(): void {
        const cb = () => {
            const mt = new Message(MsgType.replay);
            this.mq.pushMessage(mt);
        };

        this.room.getRoomHost().component.schedule(
            cb,
            this.speed,
            cc.macro.REPEAT_FOREVER);

        this.timerCb = cb;
    }

    private initControlView(view: fgui.GComponent): void {
        this.btnResume = view.getChild("resume");
        this.btnPause = view.getChild("pause");
        this.btnFast = view.getChild("fast");
        this.btnSlow = view.getChild("slow");
        this.btnBack = view.getChild("back");

        this.btnResume.visible = false;
        this.btnBack.onClick(
            this.onBackClick,
            this);

        this.btnPause.onClick(
            this.onPauseClick,
            this
        );

        this.btnResume.onClick(
            this.onResumeClick,
            this
        );

        this.btnFast.onClick(
            this.onFastClick,
            this
        );

        this.btnSlow.onClick(
            this.onSlowClick,
            this
        );
    }

    private onBackClick(): void {
        const msg = new Message(MsgType.quit);
        this.mq.pushMessage(msg);
    }

    private onPauseClick(): void {
        this.btnPause.visible = false;
        this.btnResume.visible = true;
        this.room.getRoomHost().component.unschedule(this.timerCb);
    }

    private onResumeClick(): void {
        this.btnPause.visible = true;
        this.btnResume.visible = false;
        this.startStepTimer();

        const msg = new Message(MsgType.replay);
        this.mq.pushMessage(msg);
    }

    private onFastClick(): void {
        if (this.speed < 0.2) {
            Logger.debug("fastest speed already");
            Dialog.prompt("已经是最快速度");

            return;
        }

        this.room.getRoomHost().component.unschedule(this.timerCb);
        this.speed = this.speed / 2;
        this.startStepTimer();
    }

    private onSlowClick(): void {
        if (this.speed > 3) {
            Logger.debug("slowest speed already");
            Dialog.prompt("已经是最慢速度");

            return;
        }

        this.room.getRoomHost().component.unschedule(this.timerCb);
        this.speed = this.speed * 2;
        this.startStepTimer();
    }

    private armActionHandler(): void {
        const handers: { [key: number]: ActionHandler } = {};
        const actionType = proto.prunfast.ActionType;

        handers[actionType.enumActionType_SKIP] = <ActionHandler>this.skipActionHandler.bind(this);
        handers[actionType.enumActionType_DISCARD] = <ActionHandler>this.discardedActionHandler.bind(this);

        this.actionHandlers = handers;
    }

    private async doReplayStep(): Promise<void> {
        const room = this.room;
        if (this.actionStep === -1) {
            Logger.debug("Replay:doReplayStep, deal");
            // 重置房间
            room.resetForNewHand();
            // 发牌
            this.deal();
        } else {
            const actionlist = this.msgHandRecord.actions;
            if (this.actionStep >= actionlist.length) {
                // 已经播放完成了
                this.room.getRoomHost().component.unschedule(this.timerCb);

                // 结算页面
                await this.handOver();
                this.win.bringToFront();
            } else {
                const a = actionlist[this.actionStep];
                if ((a.flags & proto.pokerface.SRFlags.SRUserReplyOnly) === 0) {
                    await this.doAction(a, actionlist);
                }
            }
        }

        this.actionStep = this.actionStep + 1;
    }

    private async doAction(srAction: proto.pokerface.ISRAction, actionlist: proto.pokerface.ISRAction[]): Promise<void> {
        const room = this.room;
        const i = this.actionStep;
        const player = <PlayerA>room.getPlayerByChairID(srAction.chairID);
        room.setWaitingPlayer(player.chairID);

        const h = this.actionHandlers[srAction.action];
        if (h === undefined) {
            Logger.debug("Replay, no action handler:", srAction.action);

            return;
        }

        if (srAction.action === proto.prunfast.ActionType.enumActionType_DISCARD) {
            const waitDiscardReAction = i < actionlist.length;
            await h(srAction, waitDiscardReAction);
        } else {
            await h(srAction);
        }
    }

    private deal(): void {
        const room = this.room;
        // 房间状态改为playing
        room.state = proto.pokerface.RoomState.SRoomPlaying;
        room.onUpdateStatus(room.state);

        const deals = this.msgHandRecord.deals;
        // 保存一些房间属性
        room.bankerChairID = this.msgHandRecord.bankerChairID;
        room.windFlowerID = this.msgHandRecord.windFlowerID;

        // 所有玩家状态改为playing
        const players = room.getPlayers();
        Object.keys(players).forEach((key) => {
            const p = <PlayerA>players[key];
            p.state = proto.pokerface.PlayerState.PSPlaying;
            const onUpdate = p.playerView.onUpdateStatus[p.state];
            onUpdate(room.state);
        });

        let drawCount = 0;
        // 保存每一个玩家的牌列表
        deals.forEach((v) => {
            const chairID = v.chairID;
            const player = <PlayerA>room.getPlayerByChairID(chairID);
            drawCount = drawCount + v.cardsHand.length;
            player.tilesHand = [];
            // 填充手牌列表，所有人的手牌列表
            player.addHandTiles(v.cardsHand);
        });

        // 显示各个玩家的手牌（对手只显示暗牌）和花牌
        Object.keys(players).forEach((key) => {
            const p = <PlayerA>players[key];
            p.sortHands();
            p.hand2UI(false);
        });

        // room.tilesInWall = 144 - drawCount;
        // room.updateTilesInWallUI();
        // 播放发牌动画，并使用coroutine等待动画完成
        //room.roomView.dealAnimation(mySelf, player1, player2);

        // 等待庄家出牌
        const bankerPlayer = <PlayerA>room.getPlayerByChairID(room.bankerChairID);
        room.setWaitingPlayer(bankerPlayer.chairID);
    }

    private async handOver(): Promise<void> {
        // const room = <Room>this.host.room;
        const handScoreBytes = this.msgHandRecord.handScore;
        const msgHandOver: { continueAble?: boolean; endType?: number; scores?: proto.pokerface.MsgHandScore } = {};
        msgHandOver.continueAble = false;

        if (handScoreBytes === undefined || handScoreBytes === null) {
            msgHandOver.endType = proto.prunfast.HandOverType.enumHandOverType_None;
        } else {
            const handScore = proto.pokerface.MsgHandScore.decode(handScoreBytes);
            let endType;
            handScore.playerScores.forEach((s) => {
                if (s.winType !== proto.prunfast.HandOverType.enumHandOverType_None) {
                    endType = s.winType;
                }
            });

            msgHandOver.endType = endType;
            msgHandOver.scores = handScore;
        }

        // room.msgHandOver = msgHandOver;
        // const players = room.players;
        // // players.forEach((p) => {
        // //     const len = p.tilesHand.length;
        // //     p.lastTile = p.tilesHand[len - 1]; // 保存最后一张牌，可能是胡牌。。。用于最后结算显示
        // // });

        await HandlerMsgHandOverA.onHandOver(<proto.pokerface.IMsgHandOver>msgHandOver, this.room);
    }

    private async skipActionHandler(srAction: proto.pokerface.ISRAction): Promise<void> {
        const actionResultMsg = {
            targetChairID: srAction.chairID
        };
        await HandlerActionResultSkipA.onMsg(<proto.pokerface.MsgActionResultNotify>actionResultMsg, this.room);
    }
    private async discardedActionHandler(srAction: proto.pokerface.ISRAction, waitDiscardReAction: boolean): Promise<void> {
        Logger.debug("llwant, dfreplay, discarded");
        const tiles = this.cloneCards(srAction.cards);
        const cardHandType = tiles.shift(); //tiles[0];  删除并返回第一个元素
        const ah = new proto.pokerface.MsgCardHand();
        ah.cards = tiles;
        ah.cardHandType = cardHandType;
        const actionResultMsg = new proto.pokerface.MsgActionResultNotify();

        actionResultMsg.targetChairID = srAction.chairID;
        actionResultMsg.actionHand = ah;

        await HandlerActionResultDiscardedA.onMsg(actionResultMsg, this.room);
    }

    // private async winChuckActionHandler(srAction: proto.pokerface.ISRAction): Promise<void> {
    //     Logger.debug("llwant, dfreplay, win chuck ");
    //     const room = this.room;
    //     const player = <PlayerA>room.getPlayerByChairID(srAction.chairID);
    //     player.addHandTile(srAction.cards[0]);
    // }

    // private async winSelfDrawActionHandler(srAction?: proto.pokerface.ISRAction): Promise<void> {
    //     Logger.debug("llwant, dfreplay, win self draw ");
    // }
}
