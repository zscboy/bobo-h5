
import { Logger } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/protoGame";
import { RoomInterface } from "./RoomInterface";

/**
 * 设置界面
 */
export class DisbandView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;

    private eventTarget: cc.EventTarget;

    private room: RoomInterface;

    public saveRoomView(room: RoomInterface): void {
        this.room = room;
    }

    public updateView(msgDisbandNotify: proto.mahjong.MsgDisbandNotify): void {
        //
        Logger.debug("msgDisbandNotify = ", msgDisbandNotify);
    }

    protected onLoad(): void {

        this.eventTarget = new cc.EventTarget();

        const view = fgui.UIPackage.createObject("dafeng", "disband_room").asCom;
        this.view = view;

        Logger.debug(this.view);

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

    private initView(): void {
        //
        Logger.debug(this.room);
    }

}
