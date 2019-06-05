import { DataStore, Dialog, HTTP, LEnv, LobbyModuleInterface, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";
import { LobbyError } from "../LobbyError";
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

    protected onDestroy(): void {

        this.eventTarget.emit("destroy");
        this.win.hide();
        this.win.dispose();
    }

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

    private initView(): void {
        //

        this.content = this.view.getChild("content").asCom;
        this.clubPage = this.content.getChild("clubPage");
        this.noClubPage = this.content.getChild("noClubPage");

        const diamondText = this.view.getChild("diamondText");
        diamondText.text = DataStore.getString("diamond");

        this.initClickListener();

        //茶馆列表
        this.clubList = this.view.getChild("clubList").asList;
        this.clubList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderPhraseListItem(index, item);
        };
        this.clubList.setVirtual();

        this.loadClub();

    }

    private initClickListener(): void {
        //关闭按钮
        const closeBtn = this.view.getChild("backBtn");
        closeBtn.onClick(this.onCloseClick, this);

        // 申请记录按钮
        const recordBtn = this.view.getChild("applyRecordBtn");
        recordBtn.onClick(() => {
            this.addComponent(ApplyRecordView);
            // tslint:disable-next-line:align
        }, this);

        // 购买按钮
        const buyBtn = this.view.getChild("buyBtn");
        buyBtn.onClick(this.onBuyBtnClick, this);

        //复制ID按钮
        const copyIdBtn = this.view.getChild("copyIdBtn");
        copyIdBtn.onClick(this.onCopyIdBtnClick, this);

        //分享按钮
        const shareBtn = this.view.getChild("shareBtn");
        shareBtn.onClick(this.onShareBtnClick, this);

        // 任命管理按钮
        const appointManagerBtn = this.view.getChild("appointManagerBtn");
        appointManagerBtn.onClick(this.onAppointManagerBtnClick, this);

        // 成员管理
        const memberSettingBtn = this.view.getChild("memberSettingBtn");
        memberSettingBtn.onClick(this.onMemberSettingBtnClick, this);

        // 管理管理
        const managerBtn = this.view.getChild("managerBtn");
        managerBtn.onClick(this.onManagerBtnClick, this);

        // 非茶馆页面点击事件

        // 创建俱乐部按钮
        const createClubBtn = this.noClubPage.asCom.getChild("createClubBtn");
        createClubBtn.onClick(() => {
            const view = this.addComponent(CreateClubView);
            this.createClubViewEventTarget = view.getEventTarget();
            this.createClubViewEventTarget.on("addClub", this.addClub, this);
            // tslint:disable-next-line:align
        }, this);

        // 加入俱乐部按钮
        const joinClubBtn = this.noClubPage.asCom.getChild("joinClubBtn");
        joinClubBtn.onClick(() => {
            this.addComponent(JoinClubView);
            // tslint:disable-next-line:align
        }, this);

        // 复制公众号按钮
        const copyBtn = this.noClubPage.asCom.getChild("copyBtn");
        copyBtn.onClick(this.onCopyWXBtnClick, this);

        //茶馆页面点击事件

        // 全部按钮
        const allBtn = this.clubPage.asCom.getChild("allBtn");
        allBtn.onClick(this.onAllBtnClick, this);

        // 刷新数据按钮
        const refreshBtn = this.clubPage.asCom.getChild("refreshBtn");
        refreshBtn.onClick(this.onRefreshBtnClick, this);

        // 战绩按钮
        const gameRecordBtn = this.clubPage.asCom.getChild("gameRecordBtn");
        gameRecordBtn.onClick(this.onGameRecordBtnClick, this);

        // 一键组局按钮
        const quicklyCreateRoom = this.clubPage.asCom.getChild("quicklyCreateRoom");
        quicklyCreateRoom.onClick(this.onQuicklyCreateRoomClick, this);

        // 提示按钮
        const tipsBtn = this.clubPage.asCom.getChild("tipsBtn");
        tipsBtn.onClick(this.onTipsBtnClick, this);

        // 创建房间按钮
        const createRoomBtn = this.clubPage.asCom.getChild("createRoomBtn");
        createRoomBtn.onClick(this.onCreateRoomBtnClick, this);

    }

    private onCloseClick(): void {
        this.destroy();
    }

    private onCopyIdBtnClick(): void {
        //
    }

    private onShareBtnClick(): void {
        //
    }

    private onAppointManagerBtnClick(): void {
        //
    }

    private onBuyBtnClick(): void {
        //
    }

    private onAllBtnClick(): void {
        //
    }

    private onRefreshBtnClick(): void {
        //
    }

    private onGameRecordBtnClick(): void {
        //
    }

    private onQuicklyCreateRoomClick(): void {
        //
    }

    private onTipsBtnClick(): void {
        //
    }

    private onCreateRoomBtnClick(): void {
        //
    }

    private onCopyWXBtnClick(): void {
        //
    }

    private onManagerBtnClick(): void {
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
            this.view.getController("isClub").selectedIndex = 0;
        } else {
            this.content.getController("isClub").selectedIndex = 1;
            this.view.getController("isClub").selectedIndex = 1;
            this.updateSelectedClub(clubInfo);
        }

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

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //

            const data = <Uint8Array>xhr.response;
            this.updateClubList(data);

        };

        this.clubRequest(loadEmailUrl, cb);

    }

    private updateSelectedClub(selectedClub: proto.club.IMsgClubInfo): void {
        this.selectedClub = selectedClub;

        this.loadClubRooms(selectedClub.baseInfo.clubID);
    }

    private loadClubRooms(clubId: string): void {
        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.loadClubRooms}?&tk=${tk}&clubID=${clubId}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //
            const data = <Uint8Array>xhr.response;

            if (data !== null) {
                const msgLoadRoomListRsp = proto.lobby.MsgLoadRoomListRsp.decode(data);
                if (msgLoadRoomListRsp.result === proto.lobby.MsgError.ErrSuccess) {
                    //
                    this.updateClubRooms(msgLoadRoomListRsp.roomInfos);
                } else {
                    const error = LobbyError.getErrorString(msgLoadRoomListRsp.result);
                    Dialog.showDialog(error, () => {
                        // tslint:disable-next-line:align
                    }, () => {
                        //
                    });
                }
            }

            //this.reloadCLub(data);

        };

        this.clubRequest(loadEmailUrl, cb);
    }

    private updateClubRooms(roomInfos: proto.lobby.IRoomInfo[]): void {
        //
        Logger.debug("updateClubRooms roomInfos = ", roomInfos);

        if (roomInfos.length === 0) {
            this.clubPage.asCom.getController("hasRoom").selectedIndex = 0;
        } else {
            //

        }
    }

    private deleteClub(): void {
        //this.destroy();

        const tk = DataStore.getString("token", "");
        const loadEmailUrl = `${LEnv.rootURL}${LEnv.deleteClub}?&tk=${tk}&clubID=${this.selectedClub.baseInfo.clubID}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //

            const data = <Uint8Array>xhr.response;
            this.reloadCLub(data);

        };

        this.clubRequest(loadEmailUrl, cb);

    }

    private reloadCLub(data: Uint8Array): void {
        //

        this.updateClubList(data);
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
