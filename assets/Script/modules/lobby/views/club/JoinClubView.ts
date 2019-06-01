import { DataStore, Dialog, HTTP, LEnv, LobbyModuleInterface, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";

const { ccclass } = cc._decorator;
/**
 * 创建茶馆页面
 */
@ccclass
export class JoinClubView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private clubNumber: string;

    private numbers: fgui.GObject[] = [];

    private hintText: fgui.GObject;

    public getEventTarget(): cc.EventTarget {
        return this.eventTarget;
    }

    protected onLoad(): void {
        //
        this.eventTarget = new cc.EventTarget();

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = lm.loader;
        loader.fguiAddPackage("lobby/fui_club/lobby_club");

        const view = fgui.UIPackage.createObject("lobby_club", "joinClub").asCom;
        this.view = view;

        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;
        this.win.show();

        this.initView();
    }

    protected onDestroy(): void {

        this.eventTarget.emit("destroy");
        this.win.hide();
        this.win.dispose();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private initView(): void {
        //
        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        const resetBtn = this.view.getChild("buttonCS");
        resetBtn.onClick(this.onResetBtnClick, this);

        const backBtn = this.view.getChild("buttonSC");
        backBtn.onClick(this.onBackBtnClick, this);

        for (let i = 0; i < 10; i++) {
            const button = this.view.getChild(`button${i}`);
            button.onClick(() => {
                this.onInputButton(i);
                // tslint:disable-next-line:align
            }, this);

        }

        for (let i = 1; i < 6; i++) {
            const num = this.view.getChild(`number${i}`);
            this.numbers.push(num);

        }

        this.hintText = this.view.getChild("hintText");

    }

    private onResetBtnClick(): void {
        //

        this.numbers.forEach(element => {
            element.text = "";
        });

        this.clubNumber = "";
        this.hintText.visible = true;
    }

    private onBackBtnClick(): void {
        //

        if (this.clubNumber === undefined) {
            return;
        }

        const len = this.clubNumber.length - 1;

        if (len >= 0 && len < 6) {
            this.numbers[len].text = "";
        } else {
            return;
        }

        this.clubNumber = this.clubNumber.substring(0, len);

        if (this.clubNumber === "") {
            this.hintText.visible = true;
        } else {
            this.hintText.visible = false;
        }

    }

    private onInputButton(inputNumber: number): void {
        //

        let numberLength = 0;

        if (this.clubNumber !== undefined) {
            numberLength = this.clubNumber.length;
        }

        if (numberLength < 5) {
            const strIndex = numberLength;
            const num = this.numbers[strIndex];

            if (num !== undefined) {
                num.text = ` ${inputNumber}`;
            } else {
                Logger.error(`"JoinRoomView:onInputButton, index ${strIndex} out of range"`);
            }

            if (this.clubNumber !== undefined) {
                this.clubNumber = `${this.clubNumber}${inputNumber}`;
            } else {
                this.clubNumber = `${inputNumber}`;
            }

            if (this.clubNumber === "") {
                this.hintText.visible = true;
            } else {
                this.hintText.visible = false;
            }

        }

        this.joinRoomCheck(this.clubNumber);

    }

    private joinRoomCheck(clubNumber: string): void {
        //
        if (clubNumber.length === 5) {
            this.requestJoinClub(clubNumber);
        }

    }

    private requestJoinClub(clubNumber: string): void {
        //

        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.joinClub}?&tk=${tk}&clubNumber=${clubNumber}`;
        const msg: string = "申请加入茶馆......";

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //
            const data = <Uint8Array>xhr.response;

            const msgClubReply = proto.club.MsgClubReply.decode(data);
            Logger.debug("msgClubReply = ", msgClubReply);

            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCNone) {
                Dialog.showDialog("已经发送申请，请等待结果", () => {

                    this.destroy();
                    // tslint:disable-next-line:align
                }, () => {
                    //
                });
            } else if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCError) {
                const msgCubOperGenericReply = proto.club.MsgCubOperGenericReply.decode(msgClubReply.content);
                this.showErrMsg(msgCubOperGenericReply.errorCode);
            }
        };

        this.clubRequest(loadEmailUrl, msg, cb);

    }

    private showErrMsg(errCode: number): void {
        const club = proto.club;
        const errMsgMap: { [key: string]: string } = {
            [club.ClubOperError.CERR_OK]: "没有错误",
            [club.ClubOperError.CERR_Exceed_Max_Club_Count_Limit]: "超过最大限制",
            [club.ClubOperError.CERR_No_Valid_Club_Number]: "无法申请到有效的俱乐部编号",
            [club.ClubOperError.CERR_Database_IO]: "编码解码错误",
            [club.ClubOperError.CERR_Encode_Decode]: "无效输入参数",
            [club.ClubOperError.CERR_Invalid_Input_Parameter]: "无效输入参数",

            [club.ClubOperError.CERR_Only_Creator_Can_KickOut]: "只有创建者才可以踢人",
            [club.ClubOperError.CERR_You_Already_In_Club]: "你已经在此俱乐部",
            [club.ClubOperError.CERR_You_Are_In_Club_Block_List]: "你已经在此俱乐部黑名单，不能申请加入",
            [club.ClubOperError.CERR_You_Already_Applicate]: "你已经申请过，请耐心等候部长批准",
            [club.ClubOperError.CERR_Invitee_Already_In_Club]: "你已经在此俱乐部",

            [club.ClubOperError.CERR_Invitee_Are_In_Club_Block_List]: "你已经在此俱乐部黑名单，不能申请加入",
            [club.ClubOperError.CERR_Invitee_Already_Applicate]: "你已经申请过，请耐心等候部长批准",
            [club.ClubOperError.CERR_Club_Not_Exist]: "俱乐部不存在",
            [club.ClubOperError.CERR_Only_Creator_Can_Invite]: "只有部长可以邀请别人",
            [club.ClubOperError.CERR_Only_Creator_Can_Approve]: "只有部长可以批准",

            [club.ClubOperError.CERR_No_Applicant]: "没有对应的申请者",
            [club.ClubOperError.CERR_Applicant_Already_In_Club]: "申请者已经是俱乐部成员",
            [club.ClubOperError.CERR_Applicant_In_Club_Block_List]: "申请者在俱乐部的黑名单中",
            [club.ClubOperError.CERR_Token_Invalid]: "token无效",
            [club.ClubOperError.CERR_Club_Name_Too_Long]: "俱乐部名字太长",

            [club.ClubOperError.CERR_Club_Name_Exist]: "同名的俱乐部已经存在",
            [club.ClubOperError.CERR_Club_Only_Owner_Can_Disband]: "只有部长可以解散俱乐部",
            [club.ClubOperError.CERR_Owner_Can_not_quit]: "部长不能退出自己的俱乐部，只能解散",
            [club.ClubOperError.CERR_User_Not_In_Club]: "玩家不在俱乐部中",
            [club.ClubOperError.CERR_Club_Only_Owner_Can_Set]: "只有部长可以设置俱乐部",

            [club.ClubOperError.CERR_Club_Forbit_Join]: "俱乐部禁止加入",
            [club.ClubOperError.CERR_Input_Text_Too_Long]: "输入文字过长",
            [club.ClubOperError.CERR_Club_Has_Room_In_PlayingState]: "俱乐部还有正在游戏中的房间，不能解散"
        };

        let errMsg = errMsgMap[errCode];
        if (errMsg === undefined) {
            errMsg = `未知错误 ,错误码 = ${errCode}`;
        }

        Dialog.showDialog(errMsg, () => {

            // tslint:disable-next-line:align
        }, () => {
            //
        });
    }

    /**
     * 网络请求
     * @param url 链接
     * @param msg 滚动圈弹的信息
     * @param cb 回调
     */
    private clubRequest(url: string, msg: string, cb: Function): void {
        if (url === null) {
            return null;
        }

        if (msg !== null) {
            Dialog.showDialog(msg);
        }

        Logger.debug("emailRequest url = ", url);

        HTTP.hGet(this.eventTarget, url, (xhr: XMLHttpRequest, err: string) => {
            Dialog.hideDialog();
            cb(xhr, err);
        });
    }

}
