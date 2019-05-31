import { DataStore, Dialog, HTTP, LEnv, LobbyModuleInterface, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";

const { ccclass } = cc._decorator;
/**
 * 创建茶馆页面
 */
@ccclass
export class CreateClubView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    public getEventTarget(): cc.EventTarget {
        return this.eventTarget;
    }

    protected onLoad(): void {
        //
        this.eventTarget = new cc.EventTarget();

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = lm.loader;
        loader.fguiAddPackage("lobby/fui_club/lobby_club");

        const view = fgui.UIPackage.createObject("lobby_club", "createClubView").asCom;
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

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        const comfirmBtn = this.view.getChild("comfirmBtn");
        const needDiamond = this.view.getChild("needDiamond");

        comfirmBtn.onClick(() => {
            this.onComfirmBtnClick();
            // tslint:disable-next-line:align
        }, this);

        needDiamond.text = "9999";
    }

    private onComfirmBtnClick(): void {
        const inputField = this.view.getChild("inputField");
        const clubName = inputField.text;

        const errMsg = this.checkLegal(clubName);

        if (errMsg !== undefined) {
            Dialog.showDialog(errMsg, () => {
                //
            });

            return;
        }
        this.createClub(clubName);
    }

    private checkLegal(name: string): string {

        let msg: string;

        if (name === null) {
            msg = "输出名称为空";
        } else if (name.length < 3 || name.length > 7) {
            msg = `群名不合法，长于3个文字，并且小于七个文字,当前长度为${name.length}`;
        }

        return msg;
    }

    private createClub(clubName: string): void {
        Logger.debug("createClub clubName = ", clubName);
        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.createClub}?&tk=${tk}&&clname==${clubName}`;
        const msg: string = null;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //

            const data = <Uint8Array>xhr.response;

            const msgClubReply = proto.club.MsgClubReply.decode(data);

            let clubRsp: proto.club.MsgCreateClubReply;

            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCOperation) {
                clubRsp = proto.club.MsgCreateClubReply.decode(msgClubReply.content);
            }

            this.updateViewClubList(clubRsp.clubInfo);
        };

        this.clubRequest(loadEmailUrl, msg, cb);

    }

    private updateViewClubList(clubInfo: proto.club.IMsgClubInfo): void {
        //

        this.eventTarget.emit("addClub", clubInfo);
        this.destroy();
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
