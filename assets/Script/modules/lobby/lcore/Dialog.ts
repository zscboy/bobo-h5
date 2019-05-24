import { Logger } from "./Logger";

/**
 * 一些通用的对话框
 */
export class Dialog {
    public static inst: Dialog = new Dialog();

    public view: fgui.GComponent;
    public win: fgui.Window;

    public static showDialog = (msg: string, yesCb: Function = null, noCB: Function = null): void => {
        if (Dialog.inst.view === undefined) {
            Logger.debug("showDialog view is null, create new");
            fgui.UIPackage.addPackage("lobby/fui_dialog/lobby_dialog");

            const view = fgui.UIPackage.createObject("lobby_dialog", "dialog").asCom;
            const win = new fgui.Window();
            win.modal = true;
            win.contentPane = view;

            win.setPosition(1136 / 2, 640 / 2);
            Dialog.inst.view = view;
            Dialog.inst.win = win;
        }

        const label = Dialog.inst.view.getChild("text");
        label.text = msg;

        const yesBtn = Dialog.inst.view.getChild("ok_btn");
        yesBtn.offClick(undefined, undefined);

        if (yesCb !== null) {
            Logger.debug("showDialog, callBackOK valid");
            yesBtn.visible = true;
            yesBtn.onClick(
                () => {
                    Dialog.inst.win.hide();
                    yesCb();
                },
                undefined);
        } else {
            yesBtn.visible = false;
        }

        const noBtn = Dialog.inst.view.getChild("cancel_btn");
        noBtn.offClick(undefined, undefined);

        if (noCB !== null) {
            Logger.debug("showDialog, callBackOK valid");
            noBtn.visible = true;
            noBtn.onClick(
                () => {
                    Dialog.inst.win.hide();
                    noCB();
                },
                undefined);
        } else {
            noBtn.visible = false;
        }

        Dialog.inst.win.show();
    }

    public static async coShowDialog(msg: string, yes: boolean, no: boolean): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let myYesCB;
            let myNoCB;

            if (yes) {
                myYesCB = () => {
                    //
                    resolve(true);
                };
            }

            if (no) {
                myNoCB = () => {
                    //
                    resolve(false);
                };
            }

            Dialog.showDialog(msg, myYesCB, myNoCB);
        });
    }
}
