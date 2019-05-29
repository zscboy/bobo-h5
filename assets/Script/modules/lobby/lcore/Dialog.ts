import { GResLoader } from "./LDataType";
import { Logger } from "./Logger";

/**
 * 一些通用的对话框
 */
export class Dialog {
    public static inst: Dialog;

    public loader: GResLoader;

    public view: fgui.GComponent;
    public win: fgui.Window;

    public packageLoaded: boolean = false;

    private constructor(loader: GResLoader) {
        this.loader = loader;
    }

    public static initDialogs(loader: GResLoader): void {
        if (this.inst !== undefined) {
            throw Error("dialogs has been initialized");
        }

        this.inst = new Dialog(loader);
    }

    public static prompt = (msg: string): void => {
        if (!Dialog.inst.packageLoaded) {
            Dialog.inst.loader.fguiAddPackage("lobby/fui_dialog/lobby_dialog");
            Dialog.inst.packageLoaded = true;
        }

        const p = fgui.UIPackage.createObject("lobby_dialog", "prompt").asCom;
        const label = p.getChild("text");
        label.text = msg;
        p.setPosition(1136 / 2, 640 / 2);
        const trans = p.getTransition("t1");
        trans.play(() => {
            p.dispose();
        });

        fgui.GRoot.inst.addChild(p);
    }

    public static showDialog = (msg: string, yesCb: Function = null, noCB: Function = null): void => {
        if (Dialog.inst.view === undefined) {
            Logger.debug("showDialog view is null, create new");
            if (!Dialog.inst.packageLoaded) {
                Dialog.inst.loader.fguiAddPackage("lobby/fui_dialog/lobby_dialog");
                Dialog.inst.packageLoaded = true;
            }

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

        let yesCb2 = yesCb;
        if (yesCb === null && noCB === null) {
            yesCb2 = () => {
                //
            };
        }

        if (yesCb2 !== null) {
            Logger.debug("showDialog, callBackOK valid");
            yesBtn.visible = true;
            yesBtn.onClick(
                () => {
                    Dialog.inst.win.hide();
                    yesCb2();
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

    public static hideDialog(): void {
        if (Dialog.inst.view === undefined) {
            return;
        }

        Dialog.inst.win.hide();
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
