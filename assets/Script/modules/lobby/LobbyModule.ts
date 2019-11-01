/**
 * lobby 模块入口
 */
const { ccclass } = cc._decorator;
import { GameModuleA } from "../gamea/GamebExportsA";
import { GameModule } from "../gameb/GamebExports";
import { GResLoaderImpl } from "./GResLoaderImpl";
import { Dialog } from "./lcore/Dialog";
import { DataStore, HTTP, KeyConstants, LEnv } from "./lcore/LCoreExports";
import { GameModuleInterface, GameModuleLaunchArgs, LobbyModuleInterface } from "./lcore/LDataType";
import { Logger } from "./lcore/Logger";
import { proto } from "./proto/protoLobby";
import { LobbyError } from "./views/LobbyError";
import { LoginView } from "./views/LoginView";

enum AuthRespErrCode {
    // ErrOk = 0,
    // ErrComm = -1
    ERR_OK = 0,
    ERR_COMM = -1,
    ERR_USER_CANCEL = -2,
    ERR_SENT_FAILED = -3,
    ERR_AUTH_DENIED = -4,
    ERR_UNSUPPORT = -5,
    ERR_BAN = -6
}

class AuthResp {
    public errCode: number;
    public errStr: string;
    public transaction: string;
    public openId: string;
    public code: string;
}

/**
 * hello
 */
@ccclass
export class LobbyModule extends cc.Component implements LobbyModuleInterface {
    public loader: GResLoaderImpl;

    public eventTarget: cc.EventTarget;
    // 用于挂载子游戏模块的节点，在离开子游戏模块并回到大厅后销毁
    private gameNode: cc.Node;
    private gameLoader: GResLoaderImpl;
    private view: fgui.GObject;

    private loginView: LoginView;

    private readonly adaptivePhones: string[] = ["iPhone X", "iPhone XS", "iPhone XR", "iPhone XS Max"];

    public cleanupGRoot(): void {
        const children = fgui.GRoot.inst._children;
        const wins: fgui.Window[] = [];
        children.forEach((c) => {
            if (c instanceof fgui.Window) {
                wins.push(c);
            }
        });

        wins.forEach((w) => {
            w.hide();
            w.dispose();
        });

        fgui.GRoot.inst.removeChildren(0, -1, true);
    }

    public returnFromGame(): void {
        this.cleanupGRoot();

        this.gameNode.destroyAllChildren();
        this.gameNode.destroy();

        delete this.gameNode;
        const num = fgui.GRoot.inst.numChildren;
        if (num > 0) {
            throw new Error(`returnFromGame failed, ui count should be 0, now:${num}`);
        }
        fgui.GRoot.inst.addChild(this.view);

        this.eventTarget.emit(`checkRoomInfo`);
        this.eventTarget.emit(`onGameSubRecordShow`);
        this.eventTarget.emit(`onClubViewShow`);
    }

    public requetJoinRoom(roomNumber: string): void {
        const tk = DataStore.getString(KeyConstants.TOKEN, "");
        const joinRoomURL = `${LEnv.rootURL}${LEnv.requestRoomInfo}?&tk=${tk}&roomNumber=${roomNumber}`;

        Logger.trace("joinRoomURL, joinRoomURL:", joinRoomURL);

        HTTP.hGet(this.eventTarget, joinRoomURL, (xhr: XMLHttpRequest, err: string) => {
            let errMsg = null;
            if (err !== null) {
                errMsg = `加入房间错误，错误码:${err}`;
            } else {
                errMsg = HTTP.hError(xhr);
                if (errMsg === null) {
                    const data = <Uint8Array>xhr.response;
                    // proto 解码登录结果
                    const requestRoomInfoRsp = proto.lobby.MsgRequestRoomInfoRsp.decode(data);
                    if (requestRoomInfoRsp.result === proto.lobby.MsgError.ErrSuccess) {
                        this.enterGame(requestRoomInfoRsp.roomInfo);
                    } else {
                        const errorString = LobbyError.getErrorString(requestRoomInfoRsp.result);
                        Dialog.showDialog(errorString);
                    }
                }
            }

            if (errMsg !== null) {
                Logger.debug("quickly login failed:", errMsg);
                // 显示错误对话框
                Dialog.showDialog(errMsg, () => {
                    //
                });
            }
        });
    }
    public enterGame(roomInfo: proto.lobby.IRoomInfo): void {

        Dialog.hidePrompt();

        // 发消息給俱乐部页面，让俱乐部界面隐藏
        this.eventTarget.emit("enterGameEvent");

        const myUserID = DataStore.getString(KeyConstants.USER_ID, "");
        const myUser = { userID: myUserID };
        const myRoomInfo = {
            roomID: roomInfo.roomID,
            roomNumber: roomInfo.roomNumber,
            config: roomInfo.config,
            gameServerID: roomInfo.gameServerID
        };

        const roomConfig = roomInfo.config;
        const roomConfigJSON = <{ [key: string]: boolean | number | string }>JSON.parse(roomConfig);
        const modName = <string>roomConfigJSON[`modName`];

        const params: GameModuleLaunchArgs = {
            jsonString: "",
            userInfo: myUser,
            roomInfo: myRoomInfo,
            record: null
        };

        this.switchToGame(params, modName);

    }

    public switchToGame(params: GameModuleLaunchArgs, moduleName: string): void {
        // 任何时刻只有一个子游戏
        if (this.gameNode !== undefined) {
            Logger.error("switch to game failed, there is a game running:", this.gameNode.name);

            return;
        }

        Dialog.showProgress();

        // 资源加载
        if (this.gameLoader !== undefined && this.gameLoader.name !== moduleName) {
            // 卸载旧的模块
            this.gameLoader.unload();
            delete this.gameLoader;
        }

        if (this.gameLoader === undefined) {
            // 需要新建一个新的资源加载器
            this.gameLoader = new GResLoaderImpl(moduleName);
        }

        params.loader = this.gameLoader;
        params.lm = this;

        // 加载子游戏的所有资源，显示加载进度
        this.gameLoader.loadResDir(
            moduleName,
            (error) => {
                Logger.debug(`gamea load, error:${error}`);

                Dialog.hideProgress();

                // 隐藏大厅窗口
                this.view = fgui.GRoot.inst.getChildAt(0);
                fgui.GRoot.inst.removeChild(this.view);

                const childrenCount = fgui.GRoot.inst.numChildren;
                if (childrenCount > 0) {
                    Logger.fatal("switch to game failed, GRoot numChildren not zero:", childrenCount);

                    return;
                }

                if (error == null) {
                    switch (moduleName) {
                        case "gamea":
                            // 新建节点，然后挂载游戏组件
                            const gameNodea = new cc.Node(moduleName);
                            this.node.addChild(gameNodea);
                            this.gameNode = gameNodea;
                            const gmca = this.gameNode.addComponent(GameModuleA);
                            const gma = <GameModuleInterface>gmca;
                            // 启动游戏流程
                            gma.launch(params);
                            break;
                        case "gameb":
                            // 新建节点，然后挂载游戏组件
                            const gameNode = new cc.Node(moduleName);
                            this.node.addChild(gameNode);
                            this.gameNode = gameNode;
                            const gmc = this.gameNode.addComponent(GameModule);
                            const gm = <GameModuleInterface>gmc;
                            // 启动游戏流程
                            gm.launch(params);
                            break;
                        default:
                    }
                }
            },
            (progress) => {
                Dialog.updateProgress(progress);
            }
        );
    }

    protected onLoad(): void {

        // 默认值
        DataStore.setItem(KeyConstants.ADAPTIVE_PHONE_KEY, "0");
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getSystemInfo({
                success: (res) => {
                    Logger.debug("wx.getSystemInfo res = ", res);
                    const model = res.model;
                    if (this.adaptivePhones.indexOf(model) !== -1) {
                        DataStore.setItem(KeyConstants.ADAPTIVE_PHONE_KEY, "1");
                    }
                }
            });
        }

        // 注册java回调
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) {
            cc.NativeJsFun = (resp: string) => {
                this.onJavaCallback(resp);
            };
        }

    }

    protected start(): void {
        this.loader = new GResLoaderImpl("lobby");
        this.eventTarget = new cc.EventTarget();

        Dialog.initDialogs(this.loader);

        //优先加载login资源，用于显示loading
        this.loader.loadResDir("launch", (error) => {
            Logger.debug(`launch load, error:${error}`);
            if (error == null) {
                this.loginView = this.addComponent(LoginView);
                this.loadLobbyRes();
            }
        });

    }

    // 加载大厅的所有资源，显示加载进度
    private loadLobbyRes(): void {
        this.loader.loadResDir(
            "lobby",
            (error) => {
                Logger.debug(`lobby load, error:${error}`);
                if (error == null) {
                    this.onResLoadedCompleted();
                }
            },
            (progress) => {
                this.loginView.updateProgressBar(progress);
            });
    }

    private onResLoadedCompleted(): void {
        // 增加一些房间内用到的大厅package，注意数量不能太多，会影响加载速度
        this.loader.fguiAddPackage("lobby/fui_create_room/lobby_create_room");

        this.loginView.updateCompleted();
    }

    private getAuthRespErrString(code: number): string {
        switch (code) {
            case AuthRespErrCode.ERR_COMM:
                return "ERR_COMM";
            case AuthRespErrCode.ERR_USER_CANCEL:
                return "用户取消";
            case AuthRespErrCode.ERR_SENT_FAILED:
                return "发送请求失败";
            case AuthRespErrCode.ERR_AUTH_DENIED:
                return "用户拒绝";
            case AuthRespErrCode.ERR_UNSUPPORT:
                return "不支持错误";
            case AuthRespErrCode.ERR_BAN:
                return "ERR_BAN";
            default:
                return "Unkonw error";
        }
    }
    private onJavaCallback(json: string): void {
        Logger.debug("llwant, LobbyModule.onJavaCallback:", json);
        if (json === "") {
            return;
        }

        const authResp = <AuthResp>JSON.parse(json);
        if (authResp === null) {
            Logger.debug("llwant, LobbyModule.onJavaCallback, authResp === null");

            return;
        }

        if (authResp.errCode !== AuthRespErrCode.ERR_OK) {
            Dialog.showDialog(this.getAuthRespErrString(authResp.errCode));

            return;
        }

        if (authResp.code) {
            // 请求服务器登录
            this.eventTarget.emit("onRequestCode", authResp.code);
        }
    }
}
