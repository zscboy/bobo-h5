import { Game as GameB } from "../../gameb/GamebExports";
import { DataStore, GameModuleLaunchArgs, Logger } from "../lcore/LCoreExports";

const { ccclass } = cc._decorator;

interface GameModule {
    name: string;
    launch: Function;
}

/**
 * 大厅视图
 */
@ccclass
export class LobbyView extends cc.Component {
    private view: fgui.GComponent;
    private diamondText: fgui.GObject;

    // 用于挂载子游戏模块的节点，在离开子游戏模块并回到大厅后销毁
    private gameNode: cc.Node;

    public returnFromGame(): void {
        this.gameNode.destroyAllChildren();
        this.gameNode.destroy();

        this.gameNode = undefined;
        const num = fgui.GRoot.inst.numChildren;
        if (num > 0) {
            throw new Error(`returnFromGame failed, ui count should be 0, now:${num}`);
        }
        fgui.GRoot.inst.addChild(this.view);
    }

    protected onLoad(): void {
        // 加载大厅界面
        fgui.UIPackage.addPackage("lobby/fui/lobby_main");
        const view = fgui.UIPackage.createObject("lobby_main", "Main").asCom;
        fgui.GRoot.inst.addChild(view);
        this.view = view;

        this.initView();
    }

    private initView(): void {
        const friendBtn = this.view.getChild("n1");
        friendBtn.onClick(this.onFriendClick, this);

        const createBtn = this.view.getChild("n4");
        createBtn.onClick(this.onCreateClick, this);

        const coinBtn = this.view.getChild("n5");
        coinBtn.onClick(this.onCoinClick, this);

        //--const listView = this.view.getChild("n29")
        const dfTestBtn = this.view.getChild("n8");
        dfTestBtn.onClick(this.openRecordView, this);

        const emailBtn = this.view.getChild("n9");
        emailBtn.onClick(this.openEmailView, this);

        const joinRoomBtn = this.view.getChild("n12");
        joinRoomBtn.onClick(this.onJoinRoom, this);

        const createRoom = this.view.getChild("createRoom");
        createRoom.onClick(this.onCreateRoom, this);

        const userInfo = this.view.getChild("userInfo").asCom;
        this.initInfoView(userInfo);
        userInfo.onClick(this.openUserInfoView, this);
    }

    private onFriendClick(): void {
        const myUser = { userID: "6" };
        const roomInfo = { roomID: "monkey-room" };

        const params: GameModuleLaunchArgs = {
            jsonString: "",
            lm: this,
            userInfo: myUser,
            roomInfo: roomInfo,
            uuid: "uuid"
        };

        this.switchToGame(params, "gameb");
    }

    private onCreateClick(): void {
        // TODO:
    }

    private onCoinClick(): void {
        // TODO:
    }

    private openRecordView(): void {
        // TODO:
    }

    private openEmailView(): void {
        // TODO:
    }

    private onJoinRoom(): void {
        // TODO:
    }

    private onCreateRoom(): void {
        // TODO:
    }

    private openUserInfoView(): void {
        // TODO:
    }

    private initInfoView(userInfo: fgui.GComponent): void {
        const nameLab = userInfo.getChild("name");
        const idLab = userInfo.getChild("id");

        if (DataStore.hasKey("nickName")) {
            const name = DataStore.getString("nickName");

            if (name.length < 1) {
                nameLab.text = "默认用户名字";
            }
            nameLab.text = name;
        }

        idLab.text = `ID: ${DataStore.getString("userID")}`;
        const diamondNode = this.view.getChild("diamondNode").asCom;
        const diamondText = diamondNode.getChild("diamond");
        this.diamondText = diamondText;
        this.diamondText.text = DataStore.getString("diamond");

        const addDiamond = diamondNode.getChild("addDiamond");
        addDiamond.onClick(this.goShop, this);

        this.registerDiamondChange();
    }

    private goShop(): void {
        // TODO:
    }

    private registerDiamondChange(): void {
        // TODO:
    }

    private switchToGame(params: GameModuleLaunchArgs, moduleName: string): void {
        // 任何时刻只有一个子游戏
        if (this.gameNode !== undefined) {
            Logger.error("switch to game failed, there is a game running:", this.gameNode.name);
        }

        // 隐藏大厅窗口
        fgui.GRoot.inst.removeChild(this.view);

        const childrenCount = fgui.GRoot.inst.numChildren;
        if (childrenCount > 0) {
            Logger.fatal("switch to game failed, GRoot numChildren not zero:", childrenCount);

            return;
        }

        // 加载子游戏的所有资源，显示加载进度
        cc.loader.loadResDir(
            moduleName,
            (completedCount, totalCount, _) => {
                console.log(`gamea load progress:${completedCount}/${totalCount}`);
            },
            (error) => {
                console.log(`gamea load, error:${error}`);
                if (error == null) {
                    switch (moduleName) {
                        case "gameb":
                            // 新建节点，然后挂载游戏组件
                            const gameNode = new cc.Node(moduleName);
                            this.node.addChild(gameNode);
                            this.gameNode = gameNode;
                            const gm = <GameModule>(this.gameNode.addComponent(GameB)); // tslint:disable-line:no-any
                            // 启动游戏流程
                            gm.launch(params);
                            break;
                        // case "gamea":
                        //     this.addComponent(GameA);
                        //     break;
                        default:
                    }
                }
            }
        );
    }
}
