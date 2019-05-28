import { DataStore, GameModuleLaunchArgs, LEnv, LobbyModuleInterface } from "../lcore/LCoreExports";
import { LMsgCenter } from "../LMsgCenter";
import { proto } from "../proto/protoLobby";
import { EmailView } from "./EmailView";
import { NewRoomView } from "./NewRoomView";
const { ccclass } = cc._decorator;

interface MsgHandler {
    onMessage: Function;
}

/**
 * 大厅视图
 */
@ccclass
export class LobbyView extends cc.Component {
    private view: fgui.GComponent;
    private diamondText: fgui.GObject;
    private lm: LobbyModuleInterface;

    private msgCenter: LMsgCenter;

    private msgHandlers: {[key: number]: MsgHandler} = {};

    public dispatchMessage(msg: proto.lobby.LobbyMessage): void {
        const ops = msg.Ops;
        const handler = this.msgHandlers[ops];
        if (handler !== undefined) {
            handler.onMessage(msg.Data);
        }
    }

    protected async onLoad(): Promise<void> {
        // 加载大厅界面
        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        this.lm = lm;
        const loader = lm.loader;

        loader.fguiAddPackage("lobby/fui/lobby_main");
        const view = fgui.UIPackage.createObject("lobby_main", "Main").asCom;
        fgui.GRoot.inst.addChild(view);
        this.view = view;

        this.initView();

        await this.startWebSocket();
    }

    protected onDestroy(): void {
        this.msgCenter.destory();
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

    private async startWebSocket(): Promise<void> {
        const tk = DataStore.getString("token", "");
        const webSocketURL = `${LEnv.lobbyWebsocket}?&tk=${tk}`;

        this.msgCenter = new LMsgCenter(webSocketURL, this, this);
        await this.msgCenter.start();
    }
    private onFriendClick(): void {
        const myUser = { userID: "6" };
        const roomInfo = { roomID: "monkey-room" };

        const params: GameModuleLaunchArgs = {
            jsonString: "",
            userInfo: myUser,
            roomInfo: roomInfo,
            uuid: "uuid"
        };

        this.lm.switchToGame(params, "gameb");
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
        const emailView = this.addComponent(EmailView);
        this.registerHandler(emailView, proto.lobby.MessageCode.OPMail);
    }

    private onJoinRoom(): void {
        // TODO:
    }

    private onCreateRoom(): void {
        this.addComponent(NewRoomView);
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

    private registerHandler(msgHandler: MsgHandler, msgCode: number): void {
        const handler = this.msgHandlers[msgCode];
        if (handler === null) {
            this.msgHandlers[msgCode] = msgHandler;
        }
    }

}
