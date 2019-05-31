import { DataStore, Dialog, HTTP, LEnv, LobbyModuleInterface, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";

const { ccclass } = cc._decorator;
/**
 * 申请记录页面
 */
@ccclass
export class ApplyRecordView extends cc.Component {

    private static instance: ApplyRecordView;
    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private recordList: fgui.GList;

    private records: proto.club.MsgClubLoadEventsReply[] = [];

    public getEventTarget(): cc.EventTarget {
        return this.eventTarget;
    }

    protected onLoad(): void {
        //
        this.eventTarget = new cc.EventTarget();

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = lm.loader;
        loader.fguiAddPackage("lobby/fui_club/lobby_club");

        const view = fgui.UIPackage.createObject("lobby_club", "applyRecord").asCom;
        this.view = view;

        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;
        this.win.show();

        ApplyRecordView.instance = this;

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

        //邮件列表
        this.recordList = this.view.getChild("recordList").asList;
        this.recordList.itemRenderer = this.renderPhraseListItem;
        this.recordList.setVirtual();

        //拉取邮件
        this.loadRecord();
    }

    private renderPhraseListItem(index: number, obj: fgui.GObject): void {

        const record = ApplyRecordView.instance.records[index];
        Logger.debug(record);

    }

    private loadRecord(): void {
        //

        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.loadClubEvents}?&tk=${tk}`;
        const msg: string = "正在拉取记录...";

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //

        };

        this.clubRequest(loadEmailUrl, msg, cb);

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
