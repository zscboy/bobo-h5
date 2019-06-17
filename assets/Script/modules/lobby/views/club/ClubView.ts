import { DataStore, Dialog, HTTP, LEnv, LobbyModuleInterface, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";
import { LobbyError } from "../LobbyError";
import { NewRoomView } from "../NewRoomView";
import { ApplyRecordView } from "./ApplyRecordView";
import { AppointManagerView } from "./AppointManager/AppointManagerView";
import { ClubRequestError } from "./ClubRequestError";
import { CreateClubView } from "./CreateClubView";
import { FilterGameView } from "./FilterGameView";
import { JoinClubView } from "./JoinClubView";
import { MemberManagerView } from "./memberManager/MemberManagerView";
import { SettingPopupView } from "./settingPopup/SettingPopupView";

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
    //内容节点，包括 茶馆页面 和 非茶馆页面
    private content: fgui.GComponent;
    // 茶馆页面
    private clubPage: fgui.GComponent;

    // 非茶馆页面
    private noClubPage: fgui.GComponent;

    // 茶馆列表节点
    private clubList: fgui.GList;

    // 茶馆列表
    private clubs: proto.club.IMsgClubInfo[] = [];

    // 选择的茶馆
    private selectedClub: proto.club.IMsgClubInfo;

    // 茶馆房间列表
    private roomList: fgui.GList;

    // 一个茶馆所有的房间
    private allRoomInfos: proto.lobby.IRoomInfo[] = [];
    // 根据 room type 筛选出来的房间
    private filterRoomInfos: proto.lobby.IRoomInfo[] = [];
    // 筛选的 room type
    private selectRoomType: number = 0;
    // 大厅模块
    private lobbyModule: LobbyModuleInterface;

    public saveClubInfo(clubInfo: proto.club.IMsgClubInfo): void {

        const index = this.clubs.indexOf(this.selectedClub);

        this.clubs[index] = clubInfo;
        this.selectedClub = clubInfo;
    }

    /**
     * 选择筛选的房间类型
     * @param selectRoomType RoomType
     */
    public selectGame(selectRoomType: number): void {

        this.selectRoomType = selectRoomType;
        this.setFilterBtnName();
        this.updateClubRoomsList();
    }
    /**
     * 解散茶馆
     */
    public disbandClub(): void {

        const tk = DataStore.getString("token", "");
        const url = `${LEnv.rootURL}${LEnv.deleteClub}?&tk=${tk}&clubID=${this.selectedClub.baseInfo.clubID}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            const data = <Uint8Array>xhr.response;
            this.reloadCLub(data);
        };

        this.clubRequest(url, cb);
    }
    /**
     * 修改茶馆名
     */
    public modifyClubName(name: string): void {
        //
        const tk = DataStore.getString("token", "");
        const url = `${LEnv.rootURL}${LEnv.renameClub}?&tk=${tk}&clubID=${this.selectedClub.baseInfo.clubID}&clname=${name}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {

            const data = <Uint8Array>xhr.response;
            const msgClubReply = proto.club.MsgClubReply.decode(data);

            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCError) {
                const msgCubOperGenericReply = proto.club.MsgCubOperGenericReply.decode(msgClubReply.content);
                if (msgCubOperGenericReply.errorCode === proto.club.ClubOperError.CERR_OK) {
                    this.loadClub();
                } else {
                    ClubRequestError.showErrMsg(msgCubOperGenericReply.errorCode);
                }
            }
        };

        this.clubRequest(url, cb);
    }
    /**
     * 退出茶馆
     */
    public quitClub(): void {
        const tk = DataStore.getString("token", "");
        const url = `${LEnv.rootURL}${LEnv.quitClub}?&tk=${tk}&clubID=${this.selectedClub.baseInfo.clubID}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            const data = <Uint8Array>xhr.response;
            this.reloadCLub(data);
        };

        this.clubRequest(url, cb);
    }

    /**
     * 新建茶馆
     * @param clubInfo 新建的茶馆
     */
    public addClub(clubInfo: proto.club.IMsgClubInfo): void {
        this.clubs.unshift(clubInfo);
        this.clubList.numItems = this.clubs.length + 1;
        this.clubList.selectedIndex = 0;
        this.setContent(clubInfo);
    }

    protected onDestroy(): void {

        if (this.lobbyModule !== null) {
            this.lobbyModule.eventTarget.off("onClubViewShow", this.onClubViewShow);
            this.lobbyModule.eventTarget.off("enterGameEvent", this.hide);
        }

        this.eventTarget.emit("destroy");
        this.win.hide();
        this.win.dispose();
    }

    protected onLoad(): void {
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

        this.content = this.view.getChild("content").asCom;
        this.clubPage = this.content.getChild("clubPage").asCom;
        this.noClubPage = this.content.getChild("noClubPage").asCom;

        const diamondText = this.view.getChild("diamondText");
        diamondText.text = DataStore.getString("diamond");

        this.initClickListener();

        //茶馆列表
        this.clubList = this.view.getChild("clubList").asList;
        this.clubList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderPhraseListItem(index, item);
        };
        this.clubList.setVirtual();

        // 茶馆房间列表
        this.roomList = this.clubPage.getChild("roomList").asList;
        this.roomList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderClubRoomListItem(index, item);
        };
        this.roomList.setVirtual();

        this.lobbyModule = <LobbyModuleInterface>this.getComponent("LobbyModule");
        if (this.lobbyModule !== null) {
            this.lobbyModule.eventTarget.on(`onClubViewShow`, this.onClubViewShow, this);
            this.lobbyModule.eventTarget.on(`enterGameEvent`, this.hide, this);
        }

        this.loadClub();

    }
    /**
     * 从游戏内回来，显示茶馆页面
     */
    private onClubViewShow(): void {
        if (this.win !== null) {
            this.win.show();
            this.loadClubRooms(this.selectedClub.baseInfo.clubID);
        }
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

        // 管理
        const managerBtn = this.view.getChild("managerBtn");
        managerBtn.onClick(this.onManagerBtnClick, this);

        // 非茶馆页面点击事件

        // 创建俱乐部按钮
        const createClubBtn = this.noClubPage.asCom.getChild("createClubBtn");
        createClubBtn.onClick(() => {
            const view = this.addComponent(CreateClubView);
            view.bind(this);
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

        // 返回房间按钮
        const return2GameBtn = this.clubPage.asCom.getChild("return2GameBtn");
        return2GameBtn.onClick(this.onReturn2GameBtnClick, this);

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

        const appointManagerView = this.addComponent(AppointManagerView);
        appointManagerView.show(this.selectedClub);

    }

    private onBuyBtnClick(): void {
        //
    }

    private onAllBtnClick(): void {
        //
        const filterGameView = this.addComponent(FilterGameView);
        filterGameView.show(this, this.selectRoomType);
    }

    private onRefreshBtnClick(): void {
        //
        this.loadClubRooms(this.selectedClub.baseInfo.clubID);
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
        const view = this.addComponent(NewRoomView);
        view.saveClubId(this.selectedClub.baseInfo.clubID);

    }

    private onReturn2GameBtnClick(): void {
        //
        const jsonStr = DataStore.getString("RoomInfoData");
        if (jsonStr !== "") {
            try {
                const config = <{ [key: string]: string }>JSON.parse(jsonStr);

                this.win.hide();

                const myRoomInfo = {
                    roomID: config.roomID,
                    roomNumber: config.roomNumber,
                    config: config.config,
                    gameServerID: config.gameServerID
                };

                const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
                lm.enterGame(myRoomInfo);
            } catch (e) {
                Logger.error("parse config error:", e);
                // 如果解析不了，则清理数据
                DataStore.setItem("RoomInfoData", "");
            }
        }

    }

    private hide(): void {
        this.win.hide();
    }

    private onCopyWXBtnClick(): void {
        //
    }

    private onManagerBtnClick(): void {

        const popupView = this.addComponent(SettingPopupView);
        popupView.show(this, this.selectedClub);
    }

    private onMemberSettingBtnClick(): void {

        const view = this.addComponent(MemberManagerView);
        view.setClubInfo(this, this.selectedClub);
    }

    private onJoinRoomBtnClick(ev: fgui.Event): void {
        const index = <number>ev.initiator.data;
        const roomInfo = this.filterRoomInfos[index];

        this.win.hide();

        const myRoomInfo = {
            roomID: roomInfo.roomID,
            roomNumber: roomInfo.roomNumber,
            config: roomInfo.config,
            gameServerID: roomInfo.gameServerID
        };

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        lm.enterGame(myRoomInfo);
    }

    private setOperationBtnVisible(isManager: boolean): void {
        // 任命管理按钮
        const isManagerController = this.view.getController("isManager");

        if (isManager === false) {
            isManagerController.selectedIndex = 0;
        } else {
            isManagerController.selectedIndex = 1;
        }
    }
    /**
     *  刷新参观房间
     * @param index 索引
     * @param obj UI节点
     */
    private renderClubRoomListItem(index: number, obj: fgui.GObject): void {

        let roomInfo: proto.lobby.IRoomInfo;

        if (this.filterRoomInfos !== undefined) {
            roomInfo = this.filterRoomInfos[index];
        }

        const nameText = obj.asCom.getChild("name");
        const stateText = obj.asCom.getChild("status").asTextField;
        const inviteBtn = obj.asCom.getChild("inviteBtn").asButton;
        const joinBtn = obj.asCom.getChild("JoinBtn").asButton;

        //inviteBtn.onClick(this.onRefreshBtnClick, this);

        joinBtn.offClick(undefined, undefined);
        joinBtn.onClick(this.onJoinRoomBtnClick, this);
        joinBtn.data = index;

        nameText.text = this.getGameName(roomInfo.config);

        const state = roomInfo.state;

        //  0表示房间空闲，1表示房间正在等待玩家进入,2 表示游戏正在进行中
        if (state === 0 || state === 1) {
            stateText.text = "等待中...";
            stateText.color = new cc.Color().fromHEX("#4b8a0e");
        } else if (state === 2) {
            stateText.text = "已开局";
            stateText.color = new cc.Color().fromHEX("#b3522e");

            inviteBtn._touchDisabled = true;
            inviteBtn.getController("gray").selectedIndex = 1;

            joinBtn._touchDisabled = true;
            joinBtn.getController("gray").selectedIndex = 1;

        }

        const playerNumAcquired = this.getPlayerNumAcquired(roomInfo.config);

        if (playerNumAcquired === roomInfo.users.length) {
            inviteBtn._touchDisabled = true;
            inviteBtn.getController("gray").selectedIndex = 1;

            joinBtn._touchDisabled = true;
            joinBtn.getController("gray").selectedIndex = 1;
        }

        const jsonStr = DataStore.getString("RoomInfoData");
        if (jsonStr !== "") {
            try {
                const config = <{ [key: string]: string }>JSON.parse(jsonStr);

                if (roomInfo.roomID === config.roomID) {
                    // joinBtn._touchDisabled = true;
                    // joinBtn.getController("gray").selectedIndex = 1;
                } else {
                    joinBtn._touchDisabled = true;
                    joinBtn.getController("gray").selectedIndex = 1;
                }

            } catch (e) {
                Logger.error("parse config error:", e);
                // 如果解析不了，则清理数据
                DataStore.setItem("RoomInfoData", "");
            }
        }

        this.setIcon(roomInfo, obj);
    }

    private setIcon(roomInfo: proto.lobby.IRoomInfo, obj: fgui.GObject): void {

        const playerNumAcquired = this.getPlayerNumAcquired(roomInfo.config);

        for (let i = 1; i < 7; i++) {
            obj.asCom.getChild(`iconFrame${i}`).visible = false;
            obj.asCom.getChild(`loader${i}`).visible = false;
            obj.asCom.getChild(`notPlayer${i}`).visible = false;
        }

        for (let i = 1; i < playerNumAcquired + 1; i++) {
            obj.asCom.getChild(`notPlayer${i}`).visible = true;
        }

        let iconFrame;
        let loader;
        let notPlayer;

        for (let i = 0; i < roomInfo.users.length; i++) {
            //const player = roomInfo.users[i];
            iconFrame = obj.asCom.getChild(`iconFrame${i + 1}`);
            iconFrame.visible = true;

            notPlayer = obj.asCom.getChild(`notPlayer${i + 1}`);
            notPlayer.visible = false;

            loader = obj.asCom.getChild(`loader${i + 1}`).asLoader;
            loader.visible = true;

            // test URL
            // tslint:disable-next-line:max-line-length
            loader.url = `https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er5prllVA37yiac4Vv8ZAXwbg0Zicibn6ZjsgJ4ha0hmFBY8MUTRMnRTmSlvzPd8XJZzd0icuyGoiakj4A/132`;
        }
    }

    private getPlayerNumAcquired(roomConfigStr: string): number {
        const roomConfigJSON = <{ [key: string]: boolean | number }>JSON.parse(roomConfigStr);

        return <number>roomConfigJSON[`playerNumAcquired`];

    }

    /**
     * 获取游戏名称
     * @param roomConfigStr  配置字符串
     */
    private getGameName(roomConfigStr: string): string {
        const roomConfigJSON = <{ [key: string]: boolean | number }>JSON.parse(roomConfigStr);
        const roomType = <number>roomConfigJSON[`roomType`];
        let gameName = "";
        switch (roomType) {
            case 21:
                gameName = "湛江麻将";
                break;
            case 1:
                gameName = "大丰麻将";
                break;

            default:

        }

        return gameName;
    }

    /**
     * 刷新茶馆列表
     * @param index 索引
     * @param obj UI节点
     */
    private renderPhraseListItem(index: number, obj: fgui.GObject): void {
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
        spaceBtn.offClick(undefined, undefined);
        spaceBtn.onClick(() => {
            if (buttonCtrl.selectedIndex === 0) {
                this.setContent(clubInfo);
            }
            // tslint:disable-next-line:align
        }, this);

    }

    /**
     * 筛选
     */
    private filterGame(): void {
        //
        this.filterRoomInfos = [];
        this.allRoomInfos.forEach(roomInfo => {
            const config = <{ [key: string]: boolean | number }>JSON.parse(roomInfo.config);

            const roomType = <number>config[`roomType`];

            if (roomType === this.selectRoomType || this.selectRoomType === 0) {
                this.filterRoomInfos.push(roomInfo);
            }
        });
    }

    private updateClubList(clubRsp: proto.club.MsgClubLoadMyClubsReply): void {
        this.updateList(clubRsp);

    }

    private updateList(clubRsp: proto.club.MsgClubLoadMyClubsReply): void {
        if (clubRsp !== null) {
            this.clubs = clubRsp.clubs;
        }
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

    private updateSelectedClub(selectedClub: proto.club.IMsgClubInfo): void {
        this.selectedClub = selectedClub;

        this.updateUIByClubManager();

        this.loadClubRooms(selectedClub.baseInfo.clubID);
    }

    private updateUIByClubManager(): void {

        const userId = DataStore.getString("userID", "");
        const clubOwnerId = this.selectedClub.creatorUserID;
        const managers = this.selectedClub.managers;
        let isManager = false;
        managers.forEach(managerId => {
            if (managerId === userId) {
                isManager = true;
            }
        });

        const isOwner = userId === clubOwnerId ? true : false;

        if (isManager || isOwner) {
            isManager = true;
        }

        this.setOperationBtnVisible(isManager);
    }

    private loadClub(): void {
        const tk = DataStore.getString("token", "");
        const url = `${LEnv.rootURL}${LEnv.loadMyClubs}?&tk=${tk}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {

            const data = <Uint8Array>xhr.response;
            let clubRsp: proto.club.MsgClubLoadMyClubsReply = null;
            if (data !== null) {
                const msgClubReply = proto.club.MsgClubReply.decode(data);
                if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCOperation) {
                    clubRsp = proto.club.MsgClubLoadMyClubsReply.decode(msgClubReply.content);
                }
            }
            this.updateClubList(clubRsp);

        };

        this.clubRequest(url, cb);

    }

    private loadClubRooms(clubId: string): void {
        const tk = DataStore.getString("token", "");
        const url = `${LEnv.rootURL}${LEnv.loadClubRooms}?&tk=${tk}&clubID=${clubId}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            const data = <Uint8Array>xhr.response;

            if (data !== null) {
                const msgLoadRoomListRsp = proto.lobby.MsgLoadRoomListRsp.decode(data);
                if (msgLoadRoomListRsp.result === proto.lobby.MsgError.ErrSuccess) {

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
        };

        this.clubRequest(url, cb);
    }

    private updateClubRooms(roomInfos: proto.lobby.IRoomInfo[]): void {

        this.allRoomInfos = [];

        const roomInfoData = DataStore.getString("RoomInfoData");

        if (roomInfoData !== undefined && roomInfoData !== null && roomInfoData !== "") {
            this.clubPage.asCom.getController("isInRoom").selectedIndex = 1;
        } else {
            this.clubPage.asCom.getController("isInRoom").selectedIndex = 0;
        }

        if (roomInfos.length === 0) {
            this.clubPage.asCom.getController("hasRoom").selectedIndex = 0;
        } else {
            this.clubPage.asCom.getController("hasRoom").selectedIndex = 1;
            //
            this.allRoomInfos = roomInfos;
            this.updateClubRoomsList();
        }

    }
    private setFilterBtnName(): void {
        const btn = this.clubPage.asCom.getChild("allBtn").asButton;
        const nameLab = btn.getChild("selectedGameName").asTextField;

        switch (this.selectRoomType) {
            case 0:
                nameLab.text = "全部";
                break;
            case 1:
                nameLab.text = "大丰麻将";
                break;
            case 21:
                nameLab.text = "湛江麻将";
                break;

            default:
                nameLab.text = "未知游戏";
        }
    }

    private updateClubRoomsList(): void {
        this.filterGame();
        this.roomList.numItems = this.filterRoomInfos.length;
    }

    private reloadCLub(data: Uint8Array): void {
        let clubRsp: proto.club.MsgClubLoadMyClubsReply = null;
        if (data !== null) {
            const msgClubReply = proto.club.MsgClubReply.decode(data);
            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCOperation) {
                clubRsp = proto.club.MsgClubLoadMyClubsReply.decode(msgClubReply.content);
                this.updateClubList(clubRsp);
            } else if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCError) {
                const msgCubOperGenericReply = proto.club.MsgCubOperGenericReply.decode(msgClubReply.content);
                ClubRequestError.showErrMsg(msgCubOperGenericReply.errorCode);
            }

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
