
import { Dialog, GResLoader } from "../../lcore/LCoreExports";

export interface RoomInterface {
    switchBg(agree: number): void;
    onDissolveClicked(): void;

    onExitButtonClicked(): void;
}
/**
 * 设置界面
 */
export class RoomSettingView extends cc.Component {

    private view: fgui.GComponent;
    private eventTarget: cc.EventTarget;

    private room: RoomInterface;

    public showView(room: RoomInterface, loader: GResLoader, isOwner: boolean): void {
        this.room = room;
        if (this.view === null || this.view === undefined) {
            // this.room = room;
            loader.fguiAddPackage("lobby/fui_room_other_view/room_other_view");
            this.view = fgui.UIPackage.createObject("room_other_view", "setting").asCom;
            this.initView(isOwner);
        }
        fgui.GRoot.inst.showPopup(this.view);
        const x = cc.winSize.width / 2 - (cc.winSize.height * 1136 / 640 / 2);
        this.view.setPosition(x, 0);
        // this.view.setPosition(0, 0);
    }

    protected onLoad(): void {
        this.eventTarget = new cc.EventTarget();
    }

    protected onDestroy(): void {

        this.eventTarget.emit("destroy");
        this.view.dispose();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private initView(isOwner: boolean): void {

        const bg = this.view.getChild("bg");
        bg.onClick(this.onCloseClick, this);

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        const shutdownBtn = this.view.getChild("shutdownBtn");
        shutdownBtn.onClick(this.onCloseClick, this);

        const exitBtn = this.view.getChild("exitBtn");
        exitBtn.onClick(this.onExitBtnClick, this);

        this.view.getController("isOwner").selectedIndex = isOwner ? 0 : 1;

        const disbandBtn = this.view.getChild("disbandBtn");
        disbandBtn.onClick(this.onDisbandBtnClick, this);

        const blueColorBtn = this.view.getChild("blueColorBtn");
        blueColorBtn.onClick(this.onBlueColorBtnClick, this);

        const classColorBtn = this.view.getChild("classColorBtn");
        classColorBtn.onClick(this.onClassColorBtnClick, this);

        const arrowBtn = this.view.getChild("arrowBtn");
        arrowBtn.onClick(this.onArrowBtnClick, this);
    }

    private onExitBtnClick(): void {
        //
        this.room.onExitButtonClicked();
    }

    private onClassColorBtnClick(): void {
        //
        this.room.switchBg(0);
    }

    private onBlueColorBtnClick(): void {
        //
        this.room.switchBg(1);
    }

    private onDisbandBtnClick(): void {
        //
        Dialog.showDialog("是否解散房间？", () => {

            this.sendDisbandMsg();
            // tslint:disable-next-line:align
        }, () => {
            //
        });
    }

    private onArrowBtnClick(): void {
        //
    }

    private sendDisbandMsg(): void {
        //
        this.room.onDissolveClicked();
    }

}
