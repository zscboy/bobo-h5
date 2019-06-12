import { DataStore, Dialog, GameModuleLaunchArgs, HTTP, LEnv, LobbyModuleInterface, Logger } from "../lcore/LCoreExports";
import { proto } from "../proto/protoLobby";
import { DFRuleView, ZJMJRuleView } from "../ruleviews/RuleViewsExports";
import { LobbyError } from "./LobbyError";

const { ccclass } = cc._decorator;

interface RuleView {
    destroy: Function;
    updatePriceCfg: Function;
    show: Function;
    hide: Function;

    getRules: Function;
}

/**
 * LoginView 登录界面
 */
@ccclass
export class NewRoomView extends cc.Component {
    private view: fgui.GComponent;
    private win: fgui.Window;

    private eventTarget: cc.EventTarget;

    private ruleViews: { [key: string]: RuleView } = {};
    private priceCfgs: { [key: string]: object };

    private clubId: string = null;

    public getView(): fgui.GComponent {
        return this.view;
    }

    public getEventTarget(): cc.EventTarget {
        return this.eventTarget;
    }

    public saveClubId(clubId: string): void {
        this.clubId = clubId;
    }

    public updatePrice(price: number): void {
        //
        Logger.debug("updatePrice = ", price);
        const consumeText = this.view.getChild("consumeText");
        consumeText.text = `${price}`;

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
        Object.keys(this.ruleViews).forEach((k) => {
            const rv = this.ruleViews[k];
            rv.destroy();
        });

        this.eventTarget.emit("destroy");

        this.win.hide();
        this.win.dispose();
    }

    private initView(): void {

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);
        const backBtn = this.view.getChild("back");
        if (backBtn !== null) {
            backBtn.onClick(this.onCloseClick, this);
        }

        const list = this.view.getChild("gamelist").asList;
        list.on(fgui.Event.CLICK_ITEM, this.onListItemClicked, this);

        const createRoomBtn = this.view.getChild("createRoomButton");
        if (createRoomBtn !== null) {
            createRoomBtn.onClick(this.onCreateRoomBtnClick, this);
        }

        this.selectItem("btnZJMJ");

        this.loadRoomPrice();
    }

    private onListItemClicked(item: fgui.GObject, evt: fgui.Event): void {
        const name = item.packageItem.name;
        this.selectItem(name);
    }

    private onCreateRoomBtnClick(): void {
        const list = this.view.getChild("gamelist").asList;
        const index = list.selectedIndex;
        const item = list.getChildAt(index);
        const name = item.packageItem.name;
        const ruleView = this.ruleViews[name];

        if (ruleView !== undefined) {
            const rules: string = <string>ruleView.getRules();
            this.createRoom(rules);
        }
    }

    private createRoom(ruleJson: string): void {
        Logger.debug("NewRoomView.createRoom, ruleJson:", ruleJson);
        const tk = DataStore.getString("token", "");
        let createRoomURL: string = "";

        if (this.clubId !== null && this.clubId !== "") {
            createRoomURL = `${LEnv.rootURL}${LEnv.createClubRoom}?&tk=${tk}&clubID=${this.clubId}`;
        } else {
            createRoomURL = `${LEnv.rootURL}${LEnv.createRoom}?&tk=${tk}`;
        }

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

                        Logger.debug("msgCreateRoomRsp:", msgCreateRoomRsp);
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

    private selectItem(name: string): void {
        let ruleView = this.ruleViews[name];
        Object.keys(this.ruleViews).forEach((k) => {
            const rv = this.ruleViews[k];
            rv.hide();
        });

        if (ruleView === undefined) {
            switch (name) {
                case "btnZJMJ":
                    const rv1 = new ZJMJRuleView();
                    rv1.bindView(this);
                    ruleView = rv1;
                    break;
                case "btnDFMJ":
                    const rv2 = new DFRuleView();
                    rv2.bindView(this);
                    ruleView = rv2;
                    break;
                case "btnGZ":
                    break;
                case "btnDDZ":
                    break;
                default:
            }

            if (ruleView === undefined) {
                return;
            }

            this.ruleViews[name] = ruleView;
            if (this.priceCfgs !== undefined) {
                ruleView.updatePriceCfg(this.priceCfgs);
            }
        }

        ruleView.show();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private enterGame(roomInfo: proto.lobby.IRoomInfo): void {
        Logger.debug("enterGame");

        this.win.hide();
        // this.win.dispose();
        this.destroy();

        // 发消息給俱乐部页面，让俱乐部界面隐藏
        this.eventTarget.emit("enterGame");

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
            uuid: roomInfo.gameServerID,
            record: null
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
                        const dataString = <string>String.fromCharCode.apply(null, new Uint8Array(<ArrayBuffer>xhr.response));
                        const priceCfgs = <{ [key: string]: object }>JSON.parse(dataString);
                        this.priceCfgs = priceCfgs;

                        Object.keys(this.ruleViews).forEach((k) => {
                            const rv = this.ruleViews[k];
                            rv.updatePriceCfg(priceCfgs);
                        });
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
