import { DataStore, Dialog, HTTP, LEnv, LobbyModuleInterface, Logger } from "../lcore/LCoreExports";
import { proto } from "../proto/protoLobby";
import { GameSubRecordView } from "./GameSubRecordView";

/**
 * 战绩界面
 */
export class GameRecordView extends cc.Component {
    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private replayRooms: proto.lobby.MsgReplayRoom[] = [];

    private recordList: fgui.GList;

    protected onLoad(): void {

        this.eventTarget = new cc.EventTarget();

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = lm.loader;
        loader.fguiAddPackage("lobby/fui_game_record/lobby_game_record");

        const view = fgui.UIPackage.createObject("lobby_game_record", "recordView").asCom;
        this.view = view;

        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;
        this.win.show();

        this.initView();
    }

    protected onDestroy(): void {

        this.eventTarget.emit("destroy");
        this.win.hide();
        this.win.dispose();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private initView(): void {
        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        this.recordList = this.view.getChild("list").asList;
        this.recordList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderListItem(index, item);
        };

        this.recordList.setVirtual();

        this.loadGameRecord();

        //this.recordList.numItems = 1;
    }

    private renderListItem(index: number, obj: fgui.GObject): void {

        const replayRoom = this.replayRooms[index];

        obj.offClick(this.goSubRecordView, this);
        obj.onClick(this.goSubRecordView, this);
        obj.data = index;

        let text = "未知麻将";
        const roomType = replayRoom.recordRoomType;
        switch (roomType) {
            case 1:
                text = "大丰麻将";
                break;
            case 3:
                text = "东台麻将";
                break;
            case 8:
                text = "关张";
                break;
            case 9:
                text = "7王523";
                break;
            case 11:
                text = "斗地主";
                break;

            default:
        }

        const gameName = obj.asCom.getChild("name");
        gameName.text = text;

        const roomNumber = obj.asCom.getChild("roomNumber");
        roomNumber.text = replayRoom.roomNumber;

        const date = obj.asCom.getChild("time");

        //TODO: format Time
        date.text = ` ${replayRoom.startTime * 60}`;

        const userID = DataStore.getString("userID", "");

        const resultText = obj.asCom.getChild("result");
        const ownerText = obj.asCom.getChild("owner");

        const ownerUserID = replayRoom.ownerUserID;

        let owner;

        replayRoom.players.forEach(playerInfo => {

            if (playerInfo.userID === ownerUserID) {

                if (playerInfo.nick !== "") {
                    owner = playerInfo.nick;
                } else {
                    owner = playerInfo.userID;
                }
                ownerText.text = owner;
            }

            if (playerInfo.userID === userID) {

                if (playerInfo.totalScore < 0) {
                    resultText.text = "Win";
                } else {
                    resultText.text = "Lose";
                }
            }
        });

    }

    private loadGameRecord(): void {
        const tk = DataStore.getString("token", "");
        const loadGameRecordUrl = `${LEnv.rootURL}${LEnv.lrproom}?&rt=1&tk=${tk}`;
        Logger.debug("loadGameRecord loadGameRecordUrl:", loadGameRecordUrl);
        // Dialog.showDialog("正在加载战绩......");

        HTTP.hGet(this.eventTarget, loadGameRecordUrl, (xhr: XMLHttpRequest, err: string) => {

            let errMsg;
            if (err !== null) {
                errMsg = `错误码:${err}`;
                Dialog.showDialog(errMsg);

            } else {
                errMsg = HTTP.hError(xhr);

                if (errMsg === null) {

                    const data = <Uint8Array>xhr.response;
                    const gameRecords = proto.lobby.MsgAccLoadReplayRoomsReply.decode(data);
                    this.updateList(gameRecords);
                }
            }

        });

    }

    private updateList(recordRsp: proto.lobby.MsgAccLoadReplayRoomsReply): void {

        recordRsp.replayRooms.forEach(element => {

            const record = proto.lobby.MsgReplayRoom.decode(element.replayRoomBytes);
            this.replayRooms.push(record);
        });

        this.recordList.numItems = this.replayRooms === undefined ? 0 : this.replayRooms.length;
    }

    private goSubRecordView(ev: fgui.Event): void {
        const index = <number>ev.initiator.data;
        const subView = this.addComponent(GameSubRecordView);
        const replayRoom = this.replayRooms[index];
        subView.updateData(replayRoom);
    }

}
