import { GResLoader, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";
import { LobbyViewInterface } from "../LobbyViewInterface";

interface PropData {
    image: string;
    num: number;
    id: number;
}

interface PlayerInfo {
    userID: string;
    chairID: number;
    state: number;
    name?: string;
    nick?: string;
    gender?: number;
    headIconURI?: string;
    ip?: string;
    location?: string;
    dfHands?: number;
    diamond?: number;
    charm?: number;
    avatarID?: number;
    clubIDs?: string[];
    dan?: number;
}
/**
 * 战绩界面
 */
export class PlayerInfoView extends cc.Component {
    private view: fgui.GComponent = null;
    private playerInfo: PlayerInfo;
    private isOther: boolean;
    private lobbyView: LobbyViewInterface;

    // private room: fgui.GObject;
    private nameText: fgui.GTextField;
    private idText: fgui.GTextField;

    private onMessageFunc: Function;
    private ipText: fgui.GTextField;
    private xinNumText: fgui.GTextField;
    private zuanNumText: fgui.GTextField;
    private sexImage: fgui.GLoader;
    private kickoutBtn: fgui.GButton;
    private propList: fgui.GList;
    private addressText: fgui.GTextField;
    private numberText: fgui.GTextField;
    private dataList: PropData[];
    private dataListForOpponents: PropData[];

    public showUserInfoView(loader: GResLoader, playerInfo: PlayerInfo, pos: cc.Vec2, isOther: boolean): void {
        if (this.view !== null) {
            // this.room = room;
            this.playerInfo = playerInfo;
            this.isOther = isOther;
            this.updateView();
            fgui.GRoot.inst.showPopup(this.view);
            this.view.setPosition(pos.x, pos.y);

            return;
        }

        Logger.debug("showUserInfoView view is nil");

        loader.fguiAddPackage("lobby/fui_player_info/lobby_player_info");
        const view = fgui.UIPackage.createObject("lobby_player_info", "player_info_view").asCom;
        this.view = view;

        this.initView();

        // this.room = room;
        this.playerInfo = playerInfo;
        this.isOther = isOther;
        this.updateView();
        fgui.GRoot.inst.showPopup(this.view);
        this.view.setPosition(pos.x, pos.y);

        this.lobbyView = <LobbyViewInterface>this.node.getParent().getComponent("LobbyView");
        if (this.lobbyView !== null) {
            this.onMessageFunc = this.lobbyView.on(`${proto.lobby.MessageCode.OPChat}`, this.onMessage, this);
        }
    }

    protected onDestroy(): void {
        this.lobbyView.off(`${proto.lobby.MessageCode.OPChat}`, this.onMessageFunc);
        this.view.dispose();
    }

    private initView(): void {
        // info
        this.nameText = this.view.getChild("name").asTextField;
        this.idText = this.view.getChild("id").asTextField;
        this.ipText = this.view.getChild("ip").asTextField;
        this.addressText = this.view.getChild("address").asTextField;
        this.numberText = this.view.getChild("number").asTextField;
        this.xinNumText = this.view.getChild("xinNum").asTextField;
        this.zuanNumText = this.view.getChild("zuanNum").asTextField;
        this.sexImage = this.view.getChild("sex").asLoader;
        //  button
        this.kickoutBtn = this.view.getChild("kickoutBtn").asButton;
        this.kickoutBtn.onClick(this.onKickoutBtnClick, this);
        // list
        this.propList = this.view.getChild("list").asList;
        this.propList.itemRenderer = (index: number, obj: fgui.GObject) => {
            this.renderPropListItem(index, obj);
        };

        this.propList.on(fgui.Event.CLICK_ITEM, this.onPropListItemClick, this);
        // this.propList.onClickItem:Add(
        //     function(onClickItem)
        //         self.room:sendDonate(onClickItem.data.name)
        //     end
        // )

        this.propList.setVirtual();

        this.dataListForOpponents = [];
        const images: string[] = ["dj_bb", "dj_jd", "dj_qj", "dj_tuoxie", "dj_ganbei", "dj_hj", "dj_meigui", "dj_mmd"];
        const ids: number[] = [6, 3, 5, 4, 2, 7, 1, 8];
        for (let i = 0; i < 8; i++) {
            const data = {
                image: images[i],
                num: i,
                id: ids[i]
            };

            this.dataListForOpponents.push(<PropData>data);
        }
    }

    private updatePropList(): void {
        this.dataList = [];
        if (this.isOther) {
            this.dataList = this.dataListForOpponents;
        }

        const num = this.dataList.length;
        this.propList.numItems = num;
        this.propList.resizeToFit(num);
    }

    private updateView(): void {
        this.kickoutBtn.visible = this.isOther;
        this.updatePropList();
        //  info
        let sex = "y_nv";
        if (this.playerInfo.gender === 1) {
            sex = "y_nan";
        }

        this.sexImage.url = `ui://lobby_player_info/${sex}`;
        this.nameText.text = this.playerInfo.nick;
        this.idText.text = `ID:${this.playerInfo.userID}`;
        this.ipText.text = `IP:${this.playerInfo.ip}`;
        this.addressText.text = `地址:${this.playerInfo.location}`;
        this.xinNumText.text = `${this.playerInfo.charm}`;
        this.zuanNumText.text = `${this.playerInfo.diamond}`;
        this.numberText.text = "";
    }

    private addMsg(msg: ByteBuffer): void {
        Logger.debug("msg:", msg);
    }

    private onMessage(msg: ByteBuffer): void {
        this.addMsg(msg);
    }

    private onKickoutBtnClick(): void {
        Logger.debug("onKickoutBtnClick");
    }

    private renderPropListItem(index: number, gObject: fgui.GObject): void {
        const data = this.dataList[index];
        const obj = gObject.asCom;
        const icon = obj.getChild("icon").asLoader;
        const xinNum = obj.getChild("xinNum");
        const zuanNum = obj.getChild("zuanNum");
        obj.name = `${data.id}`;
        xinNum.text = `${data.num * 2}`;
        zuanNum.text = `${data.num * 2}`;
        icon.url = `ui://lobby_player_info/${data.image}`;
    }

    private onPropListItemClick(clickItem: fgui.GObject): void {
        // this.room.sendDonate(onClickItem.data.name);
    }

}
