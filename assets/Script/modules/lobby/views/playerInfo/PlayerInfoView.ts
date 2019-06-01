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
export class PlayerInfoView extends cc.Component  {
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
    public showUserInfoView(loader: GResLoader, playerInfoString: string, pos: cc.Vec2, isOther: boolean): void {
        const playerInfo = <PlayerInfo>JSON.parse(playerInfoString);
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
        this.playerInfo =  playerInfo;
        this.isOther = isOther;
        this.updateView();
        fgui.GRoot.inst.showPopup(this.view);
        this.view.setPosition(pos.x, pos.y);

        this.lobbyView = <LobbyViewInterface> this.node.getParent().getComponent("LobbyView");
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
    }

    private updatePropList(): void {
        this.dataList = [];
        if (this.isOther) {
            const images: string[] = ["dj_bb", "dj_jd", "dj_qj", "dj_tuoxie", "dj_ganbei", "dj_hj", "dj_meigui", "dj_mmd"];
            const ids: number[] = [6, 3, 5, 4, 2, 7, 1, 8];
            for (let i = 0; i < 8; i++) {
                const data = {
                    image: images[i],
                    num: i - 1,
                    id : ids [i]
                };

                this.dataList.push(<PropData>data);
            }
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
        const data = this.dataList[index + 1];
        const obj = gObject.asCom;
        const icon = obj.getChild("icon").asLoader;
        const xinNum = obj.getChild("xinNum");
        const zuanNum = obj.getChild("zuanNum");
        obj.name = `${data.id}` ;
        xinNum.text = `${ data.num * 2}`;
        zuanNum.text = `${ data.num * 2}`;
        icon.url = `ui://lobby_player_info/${data.image}`;
    }

    private onPropListItemClick(clickItem: fgui.GObject): void {
        // this.room.sendDonate(onClickItem.data.name);
    }

}
// --[[
//     PlayerInfoView 玩家信息界面
// ]]
// local PlayerInfoView = {}
// local logger = require "lobby/lcore/logger"
// local fairy = require "lobby/lcore/fairygui"

// function PlayerInfoView.showUserInfoView(playerInfo, pos, isOther, room)
//     if PlayerInfoView.viewNode then
//         logger.debug("showUserInfoView -----------")
//     else
//         logger.debug("showUserInfoView viewNode is nil.")
//         _ENV.thisMod:AddUIPackage("lobby/fui_player_info/lobby_player_info")
//         local view = _ENV.thisMod:CreateUIObject("lobby_player_info", "player_info_view")

//         PlayerInfoView.viewNode = view
//         PlayerInfoView:initView()

//         _ENV.thisMod:RegisterCleanup(
//             function()
//                 view:Dispose()
//             end
//         )
//         _ENV.thisMod:SetMsgListener(
//             "lobby_chat",
//             function(str)
//                 logger.debug("SetMsgListener : ", str)
//                 PlayerInfoView:addMsg(str)
//             end
//         )
//     end
//     PlayerInfoView.room = room
//     PlayerInfoView.playerInfo = playerInfo
//     PlayerInfoView.isOther = isOther
//     PlayerInfoView:updateView()

//     fairy.GRoot.inst:ShowPopup(PlayerInfoView.viewNode)
//     PlayerInfoView.viewNode:SetXY(pos.x, pos.y)
// end

// function PlayerInfoView:updateView()
//     self.kickoutBtn.visible = self.isOther
//     self:updatePropList()
//     -- info
//     local sex = "y_nv"
//     if self.playerInfo.sex == 1 then
//         sex = "y_nan"
//     end
//     self.sexImage.url = "ui://lobby_player_info/" .. sex
//     self.nameText.text = self.playerInfo.nick
//     self.idText.text = "ID:" .. self.playerInfo.userID
//     self.ipText.text = "IP:" .. self.playerInfo.ip
//     self.addressText.text = "地址:" .. self.playerInfo.location
//     self.xinNumText.text = self.playerInfo.charm
//     self.zuanNumText.text = self.playerInfo.diamond
//     self.numberText.text = ""
// end

// function PlayerInfoView:initView()
//     -- info
//     self.nameText = this.view.getChild("name")
//     self.idText = this.view.getChild("id")
//     self.ipText = this.view.getChild("ip")
//     self.addressText = this.view.getChild("address")
//     self.numberText = this.view.getChild("number")
//     self.xinNumText = this.view.getChild("xinNum")
//     self.zuanNumText = this.view.getChild("zuanNum")
//     self.sexImage = this.view.getChild("sex")
//     -- button
//     self.kickoutBtn = this.view.getChild("kickoutBtn")
//     self.kickoutBtn.onClick:Set(
//         function()
//         end
//     )
//     -- list
//     self.propList = this.view.getChild("list").asList
//     self.propList.itemRenderer = function(index, obj)
//         self:renderPropListItem(index, obj)
//     end
//     self.propList.onClickItem:Add(
//         function(onClickItem)
//             self.room:sendDonate(onClickItem.data.name)
//         end
//     )
//     self.propList:SetVirtual()
// end

// function PlayerInfoView:updatePropList()
//     self.dataList = {}
//     if self.isOther then
//         local images = {"dj_bb", "dj_jd", "dj_qj", "dj_tuoxie", "dj_ganbei", "dj_hj", "dj_meigui", "dj_mmd"}
//         local ids = {6, 3, 5, 4, 2, 7, 1, 8}
//         for i = 1, 8 do
//             local data = {}
//             data.image = images[i]
//             data.num = i - 4
//             data.id = ids[i]
//             table.insert(self.dataList, data)
//         end
//     end
//     local num = #self.dataList
//     self.propList.numItems = num
//     self.propList:ResizeToFit(num)
// end

// function PlayerInfoView:renderPropListItem(index, obj)
//     local data = self.dataList[index + 1]
//     local icon = obj:GetChild("icon")
//     local xinNum = obj:GetChild("xinNum")
//     local zuanNum = obj:GetChild("zuanNum")
//     obj.name = data.id
//     xinNum.text = data.num * 2
//     zuanNum.text = data.num
//     icon.url = "ui://lobby_player_info/" .. data.image
// end

// return PlayerInfoView
