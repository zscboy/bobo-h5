import { CommonFunction, DataStore, HTTP, LEnv, Logger } from "../../../lcore/LCoreExports";
import { proto } from "../../../proto/protoLobby";

const { ccclass } = cc._decorator;

/**
 * 任命管理
 */
@ccclass
export class AppointManagerView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private clubInfo: proto.club.IMsgClubInfo;

    private managers: proto.club.IMsgClubMemberInfo[];

    // private members: proto.club.IMsgClubMemberInfo[];

    // private membersWithoutManager: proto.club.IMsgClubMemberInfo[];

    private managerList: fgui.GList;
    private memberList: fgui.GList;

    public show(clubInfo: proto.club.IMsgClubInfo): void {
        this.clubInfo = clubInfo;
        this.win.show();
        this.loadClubMgrs();
    }

    protected onLoad(): void {
        //
        this.eventTarget = new cc.EventTarget();

        const view = fgui.UIPackage.createObject("lobby_club", "appointManager").asCom;
        this.view = view;

        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;

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

        this.managerList = this.view.getChild("managerList").asList;
        this.memberList = this.view.getChild("memberList").asList;

        this.managerList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderManagerListItem(index, item);
        };

        this.memberList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderMemberListItem(index, item);
        };
        this.memberList.setVirtual();

    }

    private renderMemberListItem(index: number, item: fgui.GObject): void {
        //
    }

    private onRemoveBtnClick(ev: fgui.Event): void {
        const manager = <proto.club.IMsgClubMemberInfo>ev.initiator.data;
        Logger.debug("manager = ", manager);
        //
    }

    private loadClubMgrs(): void {
        //
        const tk = DataStore.getString("token", "");
        const loadRecordUrl = `${LEnv.rootURL}${LEnv.loadClubMgrs}?&tk=${tk}&clubID=${this.clubInfo.baseInfo.clubID}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //
            const data = <Uint8Array>xhr.response;
            const msgClubReply = proto.club.MsgClubReply.decode(data);
            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCOperation) {
                const reply = proto.club.MsgClubLoadMembersReply.decode(msgClubReply.content);

                const members = reply.members;
                this.updateManagerList(members);

            }
        };

        this.clubRequest(loadRecordUrl, cb);

    }

    private updateManagerList(members: proto.club.IMsgClubMemberInfo[]): void {
        this.managers = members;
        this.managerList.numItems = 2;
    }

    private renderManagerListItem(index: number, item: fgui.GObject): void {
        //

        const managers = this.managers;
        const manager = managers[index];

        const controller = item.asCom.getController("item");

        if (manager === null || manager === undefined) {
            controller.selectedIndex = 1;
        } else {
            controller.selectedIndex = 0;

            const nameText = item.asCom.getChild("name").asTextField;
            const idText = item.asCom.getChild("id").asTextField;

            nameText.text = manager.displayInfo.nick === "" ? `${manager.userID}` : manager.displayInfo.nick;
            idText.text = `ID : ${manager.userID}`;

            const loader = item.asCom.getChild("loader").asLoader;
            CommonFunction.setHead(loader, manager.displayInfo.headIconURL);

            const removeBtn = item.asCom.getChild("removeBtn").asButton;

            removeBtn.offClick(this.onRemoveBtnClick, this);
            removeBtn.onClick(this.onRemoveBtnClick, this);
            removeBtn.data = manager;

        }
    }

    /**
     * 网络请求
     * @param url 链接
     * @param msg 滚动圈弹的信息
     * @param cb 回调
     */
    private clubRequest(url: string, cb: Function): void {
        if (url === null) {
            return null;
        }

        Logger.debug("clubRequest url = ", url);

        HTTP.hGet(this.eventTarget, url, (xhr: XMLHttpRequest, err: string) => {

            cb(xhr, err);
        });
    }

}
