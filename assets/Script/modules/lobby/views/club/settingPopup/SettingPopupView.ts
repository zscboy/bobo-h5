import { DataStore, Logger } from "../../../lcore/LCoreExports";
import { proto } from "../../../proto/protoLobby";
import { DisbandClubView } from "./DisbandClubView";
import { ModifyClubName } from "./ModifyClubName";
import { QuitClubView } from "./QuitClubView";

interface ClubViewInterface {

    disbandClub: Function;

    modifyClubName: Function;

    quitClub: Function;
}

/**
 * 管理界面
 */
export class SettingPopupView extends cc.Component {

    private view: fgui.GComponent = null;

    private clubView: ClubViewInterface;

    private clubInfo: proto.club.IMsgClubInfo;

    // 、private clubInfo: proto.club.IMsgClubInfo;

    public disbandClub(): void {
        this.clubView.disbandClub();
    }

    public modifyClubName(): void {
        this.clubView.modifyClubName();
    }

    public quitClub(): void {
        this.clubView.quitClub();
    }

    public show(clubView: ClubViewInterface, clubInfo: proto.club.IMsgClubInfo): void {
        this.clubView = clubView;
        this.clubInfo = clubInfo;
        const settingPopupView = fgui.UIPackage.createObject("lobby_club", "settingPopup").asCom;
        this.view = settingPopupView;

        this.initView();
        fgui.GRoot.inst.showPopup(this.view);
        this.view.setPosition(949, 106);

    }

    private initView(): void {
        //

        const bg = this.view.getChild("bg").asImage;

        const managerCom = this.view.getChild("managerCom").asCom;
        const modifyNameItem = managerCom.getChild("modify").asButton;
        const disbandItem = managerCom.getChild("disband").asButton;
        const quickSettingItem = managerCom.getChild("quickSetting").asButton;
        const quitClub = this.view.getChild("quitClubBtn").asButton;

        modifyNameItem.onClick(this.onModifyClubNameClick, this);
        disbandItem.onClick(this.onDisbandClick, this);
        quickSettingItem.onClick(this.onQuickSettingClick, this);
        quitClub.onClick(this.onQuitClubClick, this);

        const userId = DataStore.getString("userID", "");
        const clubOwnerId = this.clubInfo.creatorUserID;
        const isManager = userId === clubOwnerId ? true : false;

        if (isManager === false) {
            //
            managerCom.visible = false;
            bg.height = 91;
            quitClub.setPosition(8, 19);
            this.view.setSize(172, 94);
        }

    }

    private onModifyClubNameClick(): void {
        //
        Logger.debug(`onModifyClubNameClick------------`);
        const view = this.addComponent(ModifyClubName);
        view.bind(this, this.clubInfo.baseInfo.clubName);
    }

    private onDisbandClick(): void {
        //
        Logger.debug(`onDisbandClick------------`);
        const view = this.addComponent(DisbandClubView);
        view.bind(this, this.clubInfo.baseInfo.clubName);
    }

    private onQuickSettingClick(): void {
        //
        Logger.debug(`onQuickSettingClick------------`);
    }

    private onQuitClubClick(): void {
        //
        Logger.debug(`onQuitClubClick------------`);
        const view = this.addComponent(QuitClubView);
        view.bind(this, this.clubInfo.baseInfo.clubName);
    }

}
