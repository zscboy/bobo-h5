
import { Dialog, Logger } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/protoGame";
import { RoomInterface } from "./RoomInterface";

/**
 * 设置界面
 */
export class DisbandView extends cc.Component {

    private view: fgui.GComponent;

    private eventTarget: cc.EventTarget;

    private room: RoomInterface;

    private myCountDown: fgui.GObject;
    private myCountDownTxt: fgui.GObject;

    private isDisbandDone: boolean;

    private isForMe: boolean;

    private leftTime: number;
    private refuseBtn: fgui.GButton;

    private agreeBtn: fgui.GButton;

    public saveRoomView(room: RoomInterface): void {
        this.room = room;
    }

    public updateView(msgDisbandNotify: proto.mahjong.MsgDisbandNotify): void {
        //
        Logger.debug("msgDisbandNotify = ", msgDisbandNotify);

        if (this.view !== null) {
            // this.room = room;
            if (this.view.visible === false) {
                this.view.visible = true;
                fgui.GRoot.inst.showPopup(this.view);
                this.view.setPosition(0, 0);
            }
        }

        //先更新所有文字信息，例如谁同意，谁拒绝之类
        this.updateTexts(msgDisbandNotify);

        // 更新按钮
        const disbandStateEnum = proto.mahjong.DisbandState;
        const isReject = msgDisbandNotify.disbandState === disbandStateEnum.DoneWithOtherReject;
        const isTimeout = msgDisbandNotify.disbandState === disbandStateEnum.DoneWithWaitReplyTimeout;
        const isNotResponse = msgDisbandNotify.disbandState === disbandStateEnum.DoneWithRoomServerNotResponse;

        const isDone = msgDisbandNotify.disbandState === disbandStateEnum.Done;
        const isWaiting = msgDisbandNotify.disbandState === disbandStateEnum.Waiting;

        if (isReject || isTimeout || isNotResponse) {

            this.myCountDown.visible = false;
            this.agreeBtn.visible = true;
            this.refuseBtn.visible = false;

            this.isDisbandDone = true;

            this.onAgreeBtnClicked();
        } else if (isDone === true) {
            this.isDisbandDone = true;
            this.onAgreeBtnClicked();
        } else if (isWaiting === true) {
            // 如果等待列表中有自己，则显示选择按钮，以便玩家做出选择
            if (msgDisbandNotify.countdown !== undefined) {

                this.unschedule(this.disbandCountDown);
                this.leftTime = msgDisbandNotify.countdown; //倒计时时间，秒为单位
                let found = false;
                const me = this.room.getMyPlayerInfo();

                msgDisbandNotify.waits.forEach(chairID => {
                    if (chairID === me.chairID) {
                        found = true;
                    }
                });

                if (found === false) {
                    if (msgDisbandNotify.waits.length > 0) {

                        this.myCountDownTxt.text = `${this.leftTime}`;
                        if (this.leftTime <= 0) {
                            this.unschedule(this.disbandCountDown);
                        }

                        this.myCountDown.visible = true;
                        //为他人倒计时
                        this.isForMe = false;
                        this.schedule(this.disbandCountDown, 1, cc.macro.REPEAT_FOREVER);

                    }

                    this.showButtons(false);

                    return;
                } else {
                    this.myCountDown.visible = false;
                    this.showButtons(true);
                }

                //为自己倒计时
                this.isForMe = true;
                this.schedule(this.disbandCountDown, 1, cc.macro.REPEAT_FOREVER);

            }
        }

    }

    protected onLoad(): void {

        this.eventTarget = new cc.EventTarget();

        const view = fgui.UIPackage.createObject("dafeng", "disband_room").asCom;
        this.view = view;
        this.view.visible = false;

        this.initView();
    }

    protected onDestroy(): void {
        this.eventTarget.emit("destroy");
        this.view.dispose();

    }

    private disbandCountDown(): void {

        this.leftTime = this.leftTime - 1;
        this.myCountDownTxt.text = `${this.leftTime}`;

        if (this.leftTime <= 0) {
            this.unschedule(this.disbandCountDown);
            if (this.isForMe !== undefined && this.isForMe === true) {
                this.onAgreeBtnClicked();
            }
        }
    }

    private onRefuseBtnClicked(): void {
        this.showButtons(false);
        this.room.sendDisbandAgree(false);

        this.unschedule(this.disbandCountDown);
    }

    private onAgreeBtnClicked(): void {
        this.unschedule(this.disbandCountDown);

        if (this.isDisbandDone === true) {
            this.destroy();
        } else {
            Logger.debug(" you choose to agree disband");
            this.showButtons(false);
            this.room.sendDisbandAgree(true);

        }
    }
    private showButtons(show: boolean): void {
        if (show) {
            this.refuseBtn.visible = show;
            this.agreeBtn.visible = show;
        } else {
            this.refuseBtn.touchable = false;
            this.agreeBtn.touchable = false;

            // this.agreeBtn.grayed = true;
        }
    }

    private initView(): void {
        //
        Logger.debug(this.room);
        this.myCountDown = this.view.getChild("n9");
        this.myCountDownTxt = this.view.getChild("time");
        this.refuseBtn = this.view.getChild("unagreeBtn").asButton;
        this.agreeBtn = this.view.getChild("agreeBtn").asButton;

        this.refuseBtn.onClick(this.onRefuseBtnClicked, this);
        this.agreeBtn.onClick(this.onAgreeBtnClicked, this);
    }

    private updateTexts(msgDisbandNotify: proto.mahjong.MsgDisbandNotify): void {
        let nick = this.getPlayerNick(msgDisbandNotify.applicant);
        const nameText = this.view.getChild("name");
        nameText.text = nick;

        const playerList: fgui.GComponent[] = [];

        //先全部隐藏
        for (let i = 1; i < 5; i++) {
            const view = this.view.getChild(`player${i}`).asCom;
            playerList.push(view);
            const agreeImg = view.getChild(`agree`);
            const refuseImg = view.getChild(`unagree`);
            const waitImg = view.getChild(`wait`);
            view.visible = false;
            agreeImg.visible = false;
            refuseImg.visible = false;
            waitImg.visible = false;

        }

        // 显示谁解散房间
        if (this.room.getPlayerByChairID(msgDisbandNotify.applicant) !== undefined
            && this.room.getPlayerByChairID(msgDisbandNotify.applicant) !== null) {

            const view = playerList[msgDisbandNotify.applicant];
            nick = this.getPlayerNick(msgDisbandNotify.applicant);
            view.getChild(`name`).text = `玩家(${nick})`;
            view.getChild(`agree`).visible = true;
            view.visible = true;

        }
        //等待中的玩家列表
        if (msgDisbandNotify.waits !== undefined && msgDisbandNotify.waits !== null) {

            Logger.debug("llwant, msgDisbandNotify.waits length:", msgDisbandNotify.waits.length);

            msgDisbandNotify.waits.forEach(chairID => {
                if (this.room.getPlayerByChairID(chairID) !== undefined) {
                    Logger.debug("llwant, msgDisbandNotify.waits chairID:", chairID);
                    const view = playerList[chairID];
                    nick = this.getPlayerNick(chairID);
                    view.getChild(`name`).text = `玩家(${nick})`;
                    view.getChild(`wait`).visible = true;
                    view.visible = true;
                }
            });

        }

        //同意的玩家列表
        if (msgDisbandNotify.agrees !== undefined && msgDisbandNotify.agrees !== null) {

            Logger.debug("llwant, msgDisbandNotify.agrees length:", msgDisbandNotify.agrees.length);

            msgDisbandNotify.agrees.forEach(chairID => {
                if (this.room.getPlayerByChairID(chairID) !== undefined) {
                    Logger.debug("llwant, msgDisbandNotify.agrees chairID:", chairID);
                    const view = playerList[chairID];
                    nick = this.getPlayerNick(chairID);
                    view.getChild(`name`).text = `玩家(${nick})`;
                    view.getChild(`agree`).visible = true;
                    view.visible = true;
                }
            });

        }

        //拒绝的玩家列表
        if (msgDisbandNotify.rejects !== undefined && msgDisbandNotify.rejects !== null) {

            let isShowTip = true;

            Logger.debug("llwant, msgDisbandNotify.rejects length:", msgDisbandNotify.rejects.length);

            msgDisbandNotify.rejects.forEach(chairID => {
                if (this.room.getPlayerByChairID(chairID) !== undefined) {
                    Logger.debug("llwant, msgDisbandNotify.rejects chairID:", chairID);
                    const view = playerList[chairID];
                    nick = this.getPlayerNick(chairID);
                    view.getChild(`name`).text = `玩家(${nick})`;
                    view.getChild(`unagree`).visible = true;
                    view.visible = true;

                    if (isShowTip === true) {
                        const str = `玩家 ${nick} 不同意解散，解散不成功!`;
                        this.showDialog(str);
                        isShowTip = false;

                    }

                }
            });

        }

    }

    private showDialog(str: string): void {
        Dialog.showDialog(str, () => {

            // tslint:disable-next-line:align
        }, () => {
            //
        });
    }

    private getPlayerNick(chairID: number): string {
        const playerInfo = this.room.getPlayerInfoByChairID(chairID);
        let nick = playerInfo.nick;

        if (nick === undefined || nick === undefined || nick === "") {
            nick = playerInfo.userID;
        }

        return nick;
    }

}
