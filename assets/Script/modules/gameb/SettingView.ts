import { Dialog } from "../lobby/lcore/LCoreExports";
import { RoomInterface } from "./RoomInterface";

/**
 * 设置界面
 */
export class SettingView extends cc.Component {

    private view: fgui.GComponent;
    private eventTarget: cc.EventTarget;

    private room: RoomInterface;

    public showView(room: RoomInterface): void {
        this.room = room;
        if (this.view !== null) {
            // this.room = room;
            fgui.GRoot.inst.showPopup(this.view);
            this.view.setPosition(0, 0);

        }
    }

    protected onLoad(): void {

        this.eventTarget = new cc.EventTarget();

        const view = fgui.UIPackage.createObject("dafeng", "setting").asCom;
        this.view = view;

        this.initView();
    }

    protected onDestroy(): void {

        this.eventTarget.emit("destroy");
        this.view.dispose();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private initView(): void {

        const bg = this.view.getChild("bg");
        bg.onClick(this.onCloseClick, this);

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        const shutdownBtn = this.view.getChild("shutdownBtn");
        shutdownBtn.onClick(this.onCloseClick, this);

        const disbandBtn = this.view.getChild("disbandBtn");
        disbandBtn.onClick(this.onDisbandBtnClick, this);

        const blueColorBtn = this.view.getChild("blueColorBtn");
        blueColorBtn.onClick(this.onBlueColorBtnClick, this);

        const classColorBtn = this.view.getChild("classColorBtn");
        classColorBtn.onClick(this.onClassColorBtnClick, this);

        const arrowBtn = this.view.getChild("arrowBtn");
        arrowBtn.onClick(this.onArrowBtnClick, this);
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
