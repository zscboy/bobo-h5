import { WeiXinSDK } from "../chanelSdk/wxSdk/WeiXinSDkExports";
import {
    DataStore,
    Dialog, GameModuleLaunchArgs, LEnv, LobbyModuleInterface, Logger
} from "../lcore/LCoreExports";
import { LMsgCenter } from "../LMsgCenter";
import { proto } from "../proto/protoLobby";
import { ClubView } from "./club/ClubView";
import { EmailView } from "./EmailView";
import { GameRecordView } from "./GameRecordView";
import { JoinRoom } from "./JoinRoom";
import { NewRoomView } from "./NewRoomView";
import { UserInfoView } from "./UserInfoView";
const { ccclass } = cc._decorator;

/**
 * 大厅视图
 */
@ccclass
export class LobbyView extends cc.Component {
    private view: fgui.GComponent;
    private diamondText: fgui.GObject;
    private lm: LobbyModuleInterface;

    private msgCenter: LMsgCenter;

    private onMessageFunc: Function;

    public onMessage(data: ByteBuffer): void {
        Logger.debug("LobbyView.onMessage");
        const diamondBody = proto.lobby.MsgUpdateUserDiamond.decode(data);
        const diamond = diamondBody.diamond;
        this.updateDiamond(diamond);
    }

    protected async onLoad(): Promise<void> {
        // 加载大厅界面
        WeiXinSDK.wxOnShow();

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        this.lm = lm;
        const loader = lm.loader;

        loader.fguiAddPackage("lobby/fui/lobby_main");

        // 加载共用背景包
        loader.fguiAddPackage("lobby/fui_bg/lobby_bg_package");

        const view = fgui.UIPackage.createObject("lobby_main", "Main").asCom;
        fgui.GRoot.inst.addChild(view);
        this.view = view;

        this.initView();

        await this.startWebSocket();
    }

    protected onDestroy(): void {
        this.lm.eventTarget.off(`${proto.lobby.MessageCode.OPUpdateDiamond}`, this.onMessageFunc);
        this.msgCenter.destory();
    }

    private updateDiamond(diamond: Long): void {
        this.diamondText.text = `${diamond}`;
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

        this.onMessageFunc = this.lm.eventTarget.on(`${proto.lobby.MessageCode.OPUpdateDiamond}`, this.onMessage, this);
    }

    private async startWebSocket(): Promise<void> {
        const tk = DataStore.getString("token", "");
        const webSocketURL = `${LEnv.lobbyWebsocket}?&tk=${tk}`;

        this.msgCenter = new LMsgCenter(webSocketURL, this, this.lm);
        await this.msgCenter.start();
    }
    private onFriendClick(): void {
        this.addComponent(ClubView);
    }

    private onCreateClick(): void {
        // TODO:
        const myUser = { userID: "6" };
        const roomConfigObj = {
            roomType: 21
        };

        const roomInfo = { roomID: "monkey-room", roomNumber: "monkey-room", roomConfig: JSON.stringify(roomConfigObj) };

        const params: GameModuleLaunchArgs = {
            jsonString: "",
            userInfo: myUser,
            roomInfo: roomInfo,
            uuid: "uuid",
            record: null
        };

        this.lm.switchToGame(params, "gameb");
    }

    private onCoinClick(): void {
        // TODO:
        Dialog.showWaiting();

        this.scheduleOnce(
            () => {
                Dialog.hideWaiting();
            },
            5);
    }

    private openRecordView(): void {
        // TODO:
        this.addComponent(GameRecordView);
    }

    private openEmailView(): void {
        this.addComponent(EmailView);
    }

    private onJoinRoom(): void {
        this.addComponent(JoinRoom);
    }

    private onCreateRoom(): void {
        this.addComponent(NewRoomView);
    }

    private openUserInfoView(): void {
        // TODO:
        this.addComponent(UserInfoView);
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
}
