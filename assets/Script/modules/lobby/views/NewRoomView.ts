import { DataStore, Dialog, GameModuleLaunchArgs, HTTP, LEnv, LobbyModuleInterface, Logger } from "../lcore/LCoreExports";
import { proto } from "../proto/protoLobby";
import { DFRuleView } from "./DFRuleView";
import { LobbyError } from "./LobbyError";
import { RunFastRuleView } from "./RunFastRuleView";

const { ccclass } = cc._decorator;

/**
 * LoginView 登录界面
 */
@ccclass
export class NewRoomView extends cc.Component {
    private view: fgui.GComponent;
    private win: fgui.Window;

    private eventTarget: cc.EventTarget;

    private runFastRuleView: RunFastRuleView;

    private dfRuleView: DFRuleView;

    public getView(): fgui.GComponent {
        return this.view;
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
                            Logger.error("Create room error:, code:", msgCreateRoomRsp.result);

                            const errorString = LobbyError.getErrorString(msgCreateRoomRsp.result);
                            Dialog.showDialog(errorString);

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
        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = lm.loader;
        loader.fguiAddPackage("lobby/fui_create_room/lobby_create_room");
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
        this.dfRuleView.destroy();

        this.eventTarget.emit("destroy");

        this.win.hide();
        this.win.dispose();
    }

    private initView(): void {

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        this.runFastRuleView = new RunFastRuleView();
        this.runFastRuleView.bindView(this);

        this.dfRuleView = new DFRuleView();
        this.dfRuleView.bindView(this);

        this.loadRoomPrice();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private enterGame(roomInfo: proto.lobby.IRoomInfo): void {
        Logger.debug("enterGame");

        this.win.hide();
        // this.win.dispose();
        this.destroy();

        const myUserID = DataStore.getString("userID", "");
        const myUser = { userID: myUserID };
        const myRoomInfo = { roomID: roomInfo.roomID, roomNumber: roomInfo.roomNumber, roomConfig: roomInfo.config };
        const roomConfig = roomInfo.config;
        const roomConfigJSON = <{ [key: string]: boolean | number | string }>JSON.parse(roomConfig);
        const modName = <string>roomConfigJSON[`modName`];

        const params: GameModuleLaunchArgs = {
            jsonString: "",
            userInfo: myUser,
            roomInfo: myRoomInfo,
            uuid: "uuid"
        };

        const lobbyModuleInterface = <LobbyModuleInterface>this.getComponent("LobbyModule");
        lobbyModuleInterface.switchToGame(params, modName);
    }

    private reEnterGame(roomInfo: proto.lobby.IRoomInfo): void {
        this.enterGame(roomInfo);
    }

    private loadRoomPrice(): void {
        const tk = DataStore.getString("token", "");
        const loadRoomPriceCfgsURL = `${LEnv.rootURL}${LEnv.loadRoomPriceCfgs}?&tk=${tk}`;
        HTTP.hGet(
            this.eventTarget,
            loadRoomPriceCfgsURL,
            (xhr: XMLHttpRequest, err: string) => {
                let errMsg = null;
                if (err !== null) {
                    errMsg = `拉取价格配置错误，错误码:${err}`;
                } else {
                    errMsg = HTTP.hError(xhr);
                    if (errMsg === null) {
                        const data = <Uint8Array>xhr.response;
                        const dataString = new TextDecoder("utf-8").decode(data);
                        const priceCfgs = <{ [key: string]: object }>JSON.parse(dataString);
                        this.dfRuleView.updatePriceCfg(priceCfgs);
                        Logger.debug("price:", dataString);
                    }
                }

                if (errMsg !== null) {
                    Logger.debug("NewRoomView.createRoom failed:", errMsg);
                    // 显示错误对话框
                    Dialog.showDialog(errMsg, () => {
                        //
                    });
                }
            });
    }
}
