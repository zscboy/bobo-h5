import { DataStore, Dialog, HTTP, LEnv, Logger } from "../lcore/LCoreExports";
import { proto } from "../proto/protoLobby";
import { RunFastRuleView } from "./RunFastRuleView";

const { ccclass } = cc._decorator;

interface LobbyViewInterface {
    enterGame: Function;
}

/**
 * LoginView 登录界面
 */
@ccclass
export class NewRoomView extends cc.Component {
    private view: fgui.GComponent;
    private win: fgui.Window;

    private eventTarget: cc.EventTarget;

    private runFastRuleView: RunFastRuleView;
    private  lobbyViewInterface: LobbyViewInterface;

    public getView(): fgui.GComponent {
        return this.view;
    }

    public setViewInterface(lobbyViewInterface: LobbyViewInterface): void {
        this.lobbyViewInterface = lobbyViewInterface;
    }
    public createRoom(ruleJson: string): void {
        Logger.debug("NewRoomView.createRoom, ruleJson:", ruleJson);
        const tk = DataStore.getString("token", "");
        const createRoomURL = `${LEnv.rootURL}${LEnv.createRoom}?&tk=${tk}`;

        Logger.trace("createRoom, createRoomURL:", createRoomURL);
        const createRoomReq = new proto.lobby.MsgCreateRoomReq();
        createRoomReq.config = ruleJson;

        const body = proto.lobby.MsgCreateRoomReq.encode(createRoomReq).toArrayBuffer();

        HTTP.hPost(
            this.eventTarget,
            createRoomURL,
            (xhr: XMLHttpRequest, err: string) => {
                let errMsg = null;
                if (err !== null) {
                    errMsg = `创建房间错误，错误码:${err}`;
                } else {
                    errMsg = HTTP.hError(xhr);
                    if (errMsg === null) {
                        const data = <Uint8Array>xhr.response;
                        // proto 解码登录结果
                        const msgCreateRoomRsp = proto.lobby.MsgCreateRoomRsp.decode(data);
                        if (msgCreateRoomRsp.result === proto.lobby.MsgError.ErrSuccess) {
                            this.enterGame(msgCreateRoomRsp.roomInfo);
                        } else if (msgCreateRoomRsp.result === proto.lobby.MsgError.ErrUserInOtherRoom) {
                            this.reEnterGame(msgCreateRoomRsp.roomInfo);
                        } else {
                            // TODO: show error msg
                            Logger.error("Create room error:, code:", msgCreateRoomRsp.result);
                            Dialog.showDialog(`创建房间失败，错误码:${msgCreateRoomRsp.result}`);

                        }
                    }
                }

                if (errMsg !== null) {
                    Logger.debug("NewRoomView.createRoom failed:", errMsg);
                    // 显示错误对话框
                    Dialog.showDialog(errMsg, () => {
                        //
                    });
                }
            },
            "arraybuffer",
            body);
    }

    protected onLoad(): void {
        // 加载大厅界面
        this.eventTarget = new cc.EventTarget();

        fgui.UIPackage.addPackage("lobby/fui_create_room/lobby_create_room");
        const view = fgui.UIPackage.createObject("lobby_create_room", "createRoom").asCom;
        this.view = view;

        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;

        this.initView();

        this.win.show();
    }

    protected onDestroy(): void {
        this.runFastRuleView.destroy();

        this.eventTarget.emit("destroy");

        this.win.hide();
        this.win.dispose();
    }

    private initView(): void {
        Logger.error("initView");

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        this.runFastRuleView = new RunFastRuleView();
        this.runFastRuleView.bindView(this);
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private enterGame(roomInfo: proto.lobby.IRoomInfo): void {
        Logger.debug("enterGame");

        this.win.hide();
        this.win.dispose();

        this.lobbyViewInterface.enterGame(roomInfo);
    }

    private reEnterGame(roomInfo: proto.lobby.IRoomInfo): void {
        this.enterGame(roomInfo);
    }

}
