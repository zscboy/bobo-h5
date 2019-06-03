import { DataStore, Dialog, HTTP, LEnv, LobbyModuleInterface, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";
import { ApplyRecordView } from "./ApplyRecordView";
import { CreateClubView } from "./CreateClubView";
import { JoinClubView } from "./JoinClubView";
import { MemberManagerView } from "./MemberManagerView";

const { ccclass } = cc._decorator;

/**
 * 牌友群
 */
@ccclass
export class ClubView extends cc.Component {

    // 茶馆主界面节点
    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private createClubViewEventTarget: cc.EventTarget;
    private content: fgui.GComponent;
    // 茶馆页面
    private clubPage: fgui.GObject;
    // 非茶馆页面
    private noClubPage: fgui.GObject;

    // 茶馆列表节点
    private clubList: fgui.GList;
    // 茶馆列表
    private clubs: proto.club.IMsgClubInfo[] = [];
    // 选择的茶馆
    private selectedClub: proto.club.IMsgClubInfo;

    protected onLoad(): void {
        //
        this.eventTarget = new cc.EventTarget();

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = lm.loader;
        loader.fguiAddPackage("lobby/fui_club/lobby_club");

        const view = fgui.UIPackage.createObject("lobby_club", "clubView").asCom;
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

    private deleteClub(): void {
        //this.destroy();

        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.deleteClub}?&tk=${tk}&clubID=${this.selectedClub.baseInfo.clubID}`;
        const msg: string = null;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //

            const data = <Uint8Array>xhr.response;
            this.reloadCLub(data);

        };

        this.clubRequest(loadEmailUrl, msg, cb);

    }

    private reloadCLub(data: Uint8Array): void {
        //

        this.updateClubList(data);
    }

    private onSettingBtnClick(): void {
        //

        Dialog.showDialog("是否删除此牌友群", () => {

            this.deleteClub();
            // tslint:disable-next-line:align
        }, () => {
            //
        });
    }

    private onMemberSettingBtnClick(): void {
        //

        const view = this.addComponent(MemberManagerView);
        view.setClubInfo(this.selectedClub);
    }

    private updateClubList(data: Uint8Array): void {
        //
        let clubRsp = null;
        if (data !== null) {
            const msgClubReply = proto.club.MsgClubReply.decode(data);
            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCOperation) {
                clubRsp = proto.club.MsgClubLoadMyClubsReply.decode(msgClubReply.content);
            }
        }

        this.updateList(clubRsp);

    }

    private updateList(clubRsp: proto.club.MsgClubLoadMyClubsReply): void {
        //
        this.clubs = clubRsp.clubs;
        this.clubList.numItems = this.clubs.length + 1;
        this.clubList.selectedIndex = 0;

        const clubInfo = this.clubs[0];
        this.setContent(clubInfo);
    }

    private setContent(clubInfo: proto.club.IMsgClubInfo): void {

        if (clubInfo === undefined || clubInfo === null) {
            this.content.getController("isClub").selectedIndex = 0;
        } else {
            this.content.getController("isClub").selectedIndex = 1;
            this.updateSelectedClub(clubInfo);
        }

    }

    private initView(): void {
        //
        const closeBtn = this.view.getChild("backBtn");
        closeBtn.onClick(this.onCloseClick, this);

        this.content = this.view.getChild("content").asCom;

        const recordBtn = this.view.getChild("applyRecordBtn");

        recordBtn.onClick(() => {
            this.addComponent(ApplyRecordView);
            // tslint:disable-next-line:align
        }, this);

        this.clubPage = this.content.getChild("clubPage");
        this.noClubPage = this.content.getChild("noClubPage");

        const settingBtn = this.clubPage.asCom.getChild("settingBtn");
        settingBtn.onClick(this.onSettingBtnClick, this);

        const memberSettingBtn = this.clubPage.asCom.getChild("memberSettingBtn");
        memberSettingBtn.onClick(this.onMemberSettingBtnClick, this);

        Logger.debug(this.clubPage);
        Logger.debug(this.noClubPage);

        const createClubBtn = this.noClubPage.asCom.getChild("createClubBtn");

        createClubBtn.onClick(() => {
            const view = this.addComponent(CreateClubView);
            this.createClubViewEventTarget = view.getEventTarget();
            this.createClubViewEventTarget.on("addClub", this.addClub, this);
            // tslint:disable-next-line:align
        }, this);

        const joinClubBtn = this.noClubPage.asCom.getChild("joinClubBtn");

        joinClubBtn.onClick(() => {
            this.addComponent(JoinClubView);
            // tslint:disable-next-line:align
        }, this);

        //邮件列表
        this.clubList = this.view.getChild("clubList").asList;
        this.clubList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderPhraseListItem(index, item);
        };
        this.clubList.setVirtual();

        this.loadClub();

    }

    private addClub(clubInfo: proto.club.IMsgClubInfo): void {
        this.clubs.unshift(clubInfo);
        this.clubList.numItems = this.clubs.length + 1;
        this.clubList.selectedIndex = 0;
        this.setContent(clubInfo);
    }

    private loadClub(): void {
        //

        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.loadMyClubs}?&tk=${tk}`;
        const msg: string = "正在拉取茶馆...";

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //

            const data = <Uint8Array>xhr.response;
            this.updateClubList(data);

        };

        this.clubRequest(loadEmailUrl, msg, cb);

    }

    private renderPhraseListItem(index: number, obj: fgui.GObject): void {
        //
        let clubInfo: proto.club.IMsgClubInfo;

        if (this.clubs !== undefined) {
            clubInfo = this.clubs[index];
        }

        const isClubCtrl = obj.asCom.getController("isClub");
        const buttonCtrl = obj.asCom.getController("button");

        if (clubInfo === undefined || clubInfo === null) {
            isClubCtrl.selectedIndex = 0;
        } else {
            isClubCtrl.selectedIndex = 1;

            const clubName = obj.asCom.getChild("clubName");
            const clubId = obj.asCom.getChild("clubId");
            clubName.text = clubInfo.baseInfo.clubName;
            clubId.text = `ID: ${clubInfo.baseInfo.clubNumber}`;
        }

        const spaceBtn = obj.asCom.getChild("spaceBtn");
        //spaceBtn.offClick(undefined, undefined);
        spaceBtn.onClick(() => {
            if (buttonCtrl.selectedIndex === 0) {
                this.setContent(clubInfo);
            }
            // tslint:disable-next-line:align
        }, this);

    }

    private updateSelectedClub(selectedClub: proto.club.IMsgClubInfo): void {
        this.selectedClub = selectedClub;
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
