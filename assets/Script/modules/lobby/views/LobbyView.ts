import { WeiXinSDK } from "../chanelSdk/wxSdk/WeiXinSDkExports";
import {
    CommonFunction,
    DataStore, KeyConstants, LEnv, LobbyModuleInterface, Logger, NewRoomViewPath
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
    private wxShowCallBackFunction: (res: showRes) => void;

    public onMessage(data: ByteBuffer): void {
        Logger.debug("LobbyView.onMessage");
        const diamondBody = proto.lobby.MsgUpdateUserDiamond.decode(data);
        const diamond = diamondBody.diamond;
        this.updateDiamond(diamond);
    }

    protected start(): void {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //TODO : 目前只有微信 先用这个判断 后面要提取出来判断各种平台
            const query = WeiXinSDK.getLaunchOption();
            const rKey = "roomNumber";
            const roomNumber = query[rKey];
            // 点别人的邀请链接 第一次进游戏 走这里
            if (roomNumber !== undefined && roomNumber !== null) {
                this.lm.requetJoinRoom(roomNumber);
            }

            this.wxShowCallBackFunction = <(res: showRes) => void>this.wxShowCallBack.bind(this);
            // 点别人的邀请链接 原来就在游戏内 走这里
            wx.onShow(this.wxShowCallBackFunction);
        }
    }

    protected async onLoad(): Promise<void> {
        // 加载大厅界面
        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        this.lm = lm;
        const loader = lm.loader;

        // 加载共用背景包
        loader.fguiAddPackage("lobby/fui_bg/lobby_bg_package");

        loader.fguiAddPackage("lobby/fui/lobby_main");

        const view = fgui.UIPackage.createObject("lobby_main", "Main").asCom;
        fgui.GRoot.inst.addChild(view);

        let x = CommonFunction.setBaseViewInCenter(view);
        this.view = view;

        const newIPhone = DataStore.getString(KeyConstants.ADAPTIVE_PHONE_KEY);
        if (newIPhone === "1") {
            // i phone x 的黑边为 CommonFunction.IOS_ADAPTER_WIDTH
            x = x - CommonFunction.IOS_ADAPTER_WIDTH;
        }
        const bg = this.view.getChild('bg');
        bg.setPosition(-x, 0);
        CommonFunction.setBgFullScreen(bg);

        // const gRootNode = fgui.GRoot.inst.node;
        // const viewNode = view.node;
        // const bgNode = bg.node;
        // Logger.debug(`onload  cc.winSize.width = ${cc.winSize.width}`);
        // Logger.debug(`onload  fgui.GRoot.inst.node.position = ${gRootNode.position},
        // width = ${ gRootNode.width} height = ${gRootNode.height} `);
        // Logger.debug(`onload  view.node.pos.position = ${viewNode.position},
        // width = ${ viewNode.width} height = ${viewNode.height} `);
        // Logger.debug(`onload  bg.node.position = ${bgNode.position}, width = ${bgNode.width} height = ${bgNode.height} `);

        this.initView();

        await this.startWebSocket();
    }

    protected onDestroy(): void {
        this.lm.eventTarget.off(`${proto.lobby.MessageCode.OPUpdateDiamond} `, this.onMessageFunc);
        this.lm.eventTarget.off(`${proto.lobby.MessageCode.OPMail} `, this.updateEmailRedPoint);
        this.lm.eventTarget.off("checkRoomInfo", this.checkRoomInfo);

        this.msgCenter.destory();

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.offShow(this.wxShowCallBack);
        }
    }

    private updateEmailRedPoint(): void {
        //
        const emailBtn = this.view.getChild("emailBtn").asCom;
        const redPoint = emailBtn.getChild("redPoint");
        redPoint.visible = true;
    }

    private updateDiamond(diamond: Long): void {
        this.diamondText.text = `${diamond} `;
    }

    private wxShowCallBack(res: showRes): void {
        const rKey = "roomNumber";
        const roomNumber = res.query[rKey];
        if (roomNumber !== undefined && roomNumber !== null) {
            // Logger.debug("wxShowCallBack : ", this);
            this.lm.requetJoinRoom(roomNumber);
        }
    }
    private initView(): void {
        const clubBtn = this.view.getChild("clubBtn");
        clubBtn.onClick(this.onFriendClick, this);

        const btnZJ = this.view.getChild("btnZJ");
        btnZJ.onClick(this.openRecordView, this);

        const emailBtn = this.view.getChild("emailBtn");
        emailBtn.onClick(this.openEmailView, this);

        const joinRoomBtn = this.view.getChild("joinRoomBtn");
        joinRoomBtn.onClick(this.onJoinRoom, this);

        const createRoom = this.view.getChild("createRoom");
        createRoom.onClick(this.onCreateRoom, this);

        const settingBtn = this.view.getChild("settingBtn");
        settingBtn.onClick(this.onSettingBtnClick, this);

        const returnGameBtn = this.view.getChild("returnGameBtn");
        returnGameBtn.onClick(this.onReturnGameBtnClick, this);

        const activeBtn = this.view.getChild("activeBtn");
        activeBtn.onClick(this.onActiveBtnClick, this);

        const hezuoBtn = this.view.getChild("hezuoBtn");
        hezuoBtn.onClick(this.onHZBtnClick, this);

        const shareBtn = this.view.getChild("shareBtn");
        shareBtn.onClick(this.onShareBtnClick, this);

        const icon = this.view.getChild("loader");
        icon.onClick(this.openUserInfoView, this);

        this.initInfoView();

        // const bg = this.view.getChild('bg');
        // bg.setSize(cc.winSize.width, cc.winSize.width * 640 / 1136);
        // const y = -(cc.winSize.width * 640 / 1136 - cc.winSize.height) / 2;
        // const x = (cc.winSize.height * 1136 / 640 / 2) - cc.winSize.width / 2;
        // bg.setPosition(x, y);

        this.onMessageFunc = this.lm.eventTarget.on(`${proto.lobby.MessageCode.OPUpdateDiamond} `, this.onMessage, this);

        this.lm.eventTarget.on(`${proto.lobby.MessageCode.OPMail} `, this.updateEmailRedPoint, this);

        this.lm.eventTarget.on(`checkRoomInfo`, this.checkRoomInfo, this);

        this.checkRoomInfo();

    }

    private async startWebSocket(): Promise<void> {
        const tk = DataStore.getString(KeyConstants.TOKEN, "");
        const webSocketURL = `${LEnv.lobbyWebsocket}?& tk=${tk} `;

        this.msgCenter = new LMsgCenter(webSocketURL, this, this.lm);
        await this.msgCenter.start();
    }
    private onFriendClick(): void {
        this.addComponent(ClubView);

    }

    private onSettingBtnClick(): void {
        //
    }

    private onActiveBtnClick(): void {
        //
    }

    private onHZBtnClick(): void {
        //
    }

    private onShareBtnClick(): void {
        //
    }

    // private onCreateClick(): void {
    //     // TODO:
    //     const myUser = { userID: "6" };
    //     const roomConfigObj = {
    //         roomType: 21
    //     };

    //     const roomInfo = {
    //         roomID: "monkey-room",
    //         roomNumber: "monkey-room",
    //         config: JSON.stringify(roomConfigObj),
    //         gameServerID: "uuid"
    //     };

    //     const params: GameModuleLaunchArgs = {
    //         jsonString: "",
    //         userInfo: myUser,
    //         roomInfo: roomInfo,
    //         record: null
    //     };

    //     //this.enterGame(roomInfo);

    //     this.lm.switchToGame(params, "gameb");
    // }

    // private onCoinClick(): void {
    //     // TODO:
    //     Dialog.showWaiting();

    //     this.scheduleOnce(
    //         () => {
    //             Dialog.hideWaiting();
    //         },
    //         5);
    // }

    private openRecordView(): void {
        // TODO:
        this.addComponent(GameRecordView);
    }

    private openEmailView(): void {
        const emailBtn = this.view.getChild("emailBtn").asCom;
        const redPoint = emailBtn.getChild("redPoint");
        redPoint.visible = false;
        this.addComponent(EmailView);
    }

    private onJoinRoom(): void {
        this.addComponent(JoinRoom);

    }

    private onCreateRoom(): void {
        const newRoomView = this.addComponent(NewRoomView);
        newRoomView.showView(NewRoomViewPath.Normal);
    }

    private onReturnGameBtnClick(): void {
        const jsonStr = DataStore.getString(KeyConstants.ROOM_INFO_DATA);
        Logger.debug("jsonStr:", jsonStr);
        if (jsonStr !== "") {
            try {
                const config = <{ [key: string]: string }>JSON.parse(jsonStr);
                const myRoomInfo = {
                    roomID: config.roomID,
                    roomNumber: config.roomNumber,
                    config: config.config,
                    gameServerID: config.gameServerID
                };

                this.lm.enterGame(myRoomInfo);
            } catch (e) {
                Logger.error("parse config error:", e);
                // 如果解析不了，则清理数据
                DataStore.setItem(KeyConstants.ROOM_INFO_DATA, "");
            }
        }
    }

    private openUserInfoView(): void {
        // TODO:
        this.addComponent(UserInfoView);
    }

    private initInfoView(): void {
        const nameLab = this.view.getChild("name");

        if (DataStore.hasKey(KeyConstants.NICK_NAME)) {
            const name = DataStore.getString(KeyConstants.NICK_NAME);

            if (name.length < 1) {
                nameLab.text = "默认用户名字";
            } else {
                nameLab.text = DataStore.getString(KeyConstants.USER_ID);
            }

        }

        const gender = +DataStore.getString(KeyConstants.SEX);
        const iconLoader = this.view.getChild("loader").asLoader;
        const headImgUrl = DataStore.getString(KeyConstants.HEAL_IMG_URL);
        CommonFunction.setHead(iconLoader, headImgUrl, +gender);

        const diamondText = this.view.getChild("diamond");
        this.diamondText = diamondText;
        this.diamondText.text = DataStore.getString(KeyConstants.DIAMOND);

        const addDiamond = this.view.getChild("addDiamond");
        addDiamond.onClick(this.goShop, this);
    }

    private goShop(): void {
        // TODO:
    }

    private checkRoomInfo(): void {
        //
        const jsonStr = DataStore.getString(KeyConstants.ROOM_INFO_DATA);
        Logger.debug("checkRoomInfo jsonStr:", jsonStr);
        if (jsonStr !== "") {
            this.view.getController("inRoom").selectedIndex = 1;
        } else {
            this.view.getController("inRoom").selectedIndex = 0;
        }
    }
}
