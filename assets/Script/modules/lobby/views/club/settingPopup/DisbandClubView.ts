interface SettingPopupInterface {

    disbandClub: Function;

}

/**
 * 解散该群
 */
export class DisbandClubView extends cc.Component {

    private view: fgui.GComponent = null;

    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private settingPopupView: SettingPopupInterface;

    public bind(settingPopupView: SettingPopupInterface): void {
        this.settingPopupView = settingPopupView;
    }

    protected onLoad(): void {
        //
        this.eventTarget = new cc.EventTarget();
        const view = fgui.UIPackage.createObject("lobby_club", "disbandClubCom").asCom;
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

        const confirmBtn = this.view.getChild("confirmBtn").asButton;
        confirmBtn.onClick(this.onConfirmBtnClick, this);

    }

    private onConfirmBtnClick(): void {
        //
        this.settingPopupView.disbandClub();
        this.destroy();
    }
}
