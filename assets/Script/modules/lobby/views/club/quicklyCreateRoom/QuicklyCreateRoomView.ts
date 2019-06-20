import { Logger, NewRoomViewPath } from "../../../lcore/LCoreExports";
import { proto } from "../../../proto/protoLobby";
import { NewRoomView } from "../../NewRoomView";

const { ccclass } = cc._decorator;

/**
 * 一键组局
 */
@ccclass
export class QuicklyCreateRoomView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private clubInfo: proto.club.IMsgClubInfo;

    public show(clubInfo: proto.club.IMsgClubInfo): void {
        this.clubInfo = clubInfo;
        this.win.show();
    }

    public saveConfig(ruleJson: string): void {
        //
        Logger.debug("saveConfig ruleJson = ", ruleJson);
    }

    protected onLoad(): void {
        //
        this.eventTarget = new cc.EventTarget();

        const view = fgui.UIPackage.createObject("lobby_club", "quicklyCreateRoom").asCom;
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

        const editBtn = this.view.getChild("editBtn");
        editBtn.onClick(this.onEditBtnClick, this);

        //const gameConfig = this.view.getChild("text3");

        const controller = this.view.getController("hasConfig");
        controller.selectedIndex = 1;

    }

    private onEditBtnClick(): void {
        const newRoomView = this.addComponent(NewRoomView);
        newRoomView.showView(NewRoomViewPath.Form_Club_Setting, this.clubInfo, this);

    }

}
