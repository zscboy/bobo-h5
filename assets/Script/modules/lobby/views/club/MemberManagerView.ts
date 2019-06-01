import { DataStore, Dialog, HTTP, LEnv, LobbyModuleInterface, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";

const { ccclass } = cc._decorator;
/**
 * 成员管理页面
 */
@ccclass
export class MemberManagerView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private clubInfo: proto.club.IMsgClubInfo;

    private memberListPage: fgui.GComponent;
    private memberApplyPage: fgui.GComponent;
    private memberDeletePage: fgui.GComponent;

    private recordList: fgui.GList;

    private records: proto.club.MsgClubLoadEventsReply[] = [];

    public getEventTarget(): cc.EventTarget {
        return this.eventTarget;
    }
    public setClubInfo(clubInfo: proto.club.IMsgClubInfo): void {
        this.clubInfo = clubInfo;

        //拉取成员
        this.loadMember();

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

        const memberListBtn = this.view.getChild("memberListBtn");
        memberListBtn.onClick(this.onMemberListBtnClick, this);

        const applyListBtn = this.view.getChild("applyListBtn");
        applyListBtn.onClick(this.onApplyListBtnClick, this);

        const deleteMemberBtn = this.view.getChild("deleteMemberBtn");
        deleteMemberBtn.onClick(this.onDeleteMemberBtnClick, this);

        this.memberListPage = this.view.getChild("memberList").asCom;
        this.memberApplyPage = this.view.getChild("memberApply").asCom;
        this.memberDeletePage = this.view.getChild("memberDelete").asCom;

        Logger.debug(this.memberListPage);
        Logger.debug(this.memberApplyPage);
        Logger.debug(this.memberDeletePage);
        this.recordList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderPhraseListItem(index, item);
        };
        this.recordList.setVirtual();

    }

    private onMemberListBtnClick(): void {
        //
    }

    private onApplyListBtnClick(): void {
        //
        this.loadRecord();
    }

    private onDeleteMemberBtnClick(): void {
        //
    }

    private renderPhraseListItem(index: number, obj: fgui.GObject): void {

        const record = this.records[index];
        Logger.debug(record);

    }

    private loadMember(): void {
        //

        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.loadClubMembers}?&tk=${tk}&clubID=${this.clubInfo.baseInfo.clubID}`;
        const msg: string = "正在拉取记录...";

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //

            this.updateApplyList();
        };

        this.clubRequest(loadEmailUrl, msg, cb);

    }

    private loadRecord(): void {
        //

        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.loadClubEvents}?&tk=${tk}&clubID=${this.clubInfo.baseInfo.clubID}&cursor=${0}`;
        const msg: string = "正在拉取记录...";

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //

            this.updateApplyList();
        };

        this.clubRequest(loadEmailUrl, msg, cb);

    }

    private updateApplyList(): void {
        //
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
