import { Logger } from "../../../lcore/LCoreExports";
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

    public show(isManager: boolean, clubView: ClubViewInterface): void {
        this.clubView = clubView;

        const settingPopupView = fgui.UIPackage.createObject("lobby_club", "settingPopup").asCom;
        this.view = settingPopupView;

        this.initView(isManager);
        fgui.GRoot.inst.showPopup(this.view);
        this.view.setPosition(949, 106);

    }

    private initView(isManager: boolean): void {
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
        view.bind(this);
    }

    private onDisbandClick(): void {
        //
        Logger.debug(`onDisbandClick------------`);
        const view = this.addComponent(DisbandClubView);
        view.bind(this);
    }

    private onQuickSettingClick(): void {
        //
        Logger.debug(`onQuickSettingClick------------`);
    }

    private onQuitClubClick(): void {
        //
        Logger.debug(`onQuitClubClick------------`);
        const view = this.addComponent(QuitClubView);
        view.bind(this);
    }

}
