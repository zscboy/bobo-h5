import { LobbyModuleInterface, Logger } from "../lcore/LCoreExports";
import { proto } from "../proto/protoLobby";

/**
 * 战绩界面
 */
export class GameSubRecordView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;
    private replayRoom: proto.lobby.MsgReplayRoom;

    private recordList: fgui.GList;

    public updateData(replayRoom: proto.lobby.MsgReplayRoom): void {
        Logger.debug("onUpdate-----------------------------");

        this.replayRoom = replayRoom;
        const replayPlayerInfos = replayRoom.players;

        let name;
        let label;
        let userID;

        for (let i = 0; i < replayPlayerInfos.length; i++) {

            name = replayPlayerInfos[i].nick;
            userID = replayPlayerInfos[i].userID;
            label = this.view.getChild(`player${i + 1}`);

            if (name !== "") {
                label.text = name;
            } else {
                label.text = userID;
            }

        }

        this.updateList();

    }

    protected onLoad(): void {
        Logger.debug("onLoad----------------------------------");
        this.eventTarget = new cc.EventTarget();

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = lm.loader;
        loader.fguiAddPackage("lobby/fui_game_record/lobby_game_record");

        const view = fgui.UIPackage.createObject("lobby_game_record", "subRecordView").asCom;
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

    }

    private renderListItem(index: number, obj: fgui.GObject): void {

        const record = this.replayRoom.records[index];

        const roomNumber = obj.asCom.getChild("roundText");
        roomNumber.text = `${index}`;

        const date = obj.asCom.getChild("time");
        date.text = ``;

        let label;

        for (let i = 0; i < record.playerScores.length; i++) {

            label = obj.asCom.getChild(`score${i + 1}`);
            label.text = `${record.playerScores[i].score}`;
        }

        const playBtn = obj.asCom.getChild("playBtn");
        playBtn.offClick(this.enterReplayRoom, this);
        playBtn.onClick(this.enterReplayRoom, this);
    }

    private enterReplayRoom(ev: fgui.Event): void {
        // const index = <number>ev.initiator.data;
        // const record = this.replayRoom.records[index];
        const recordCfg = this.replayRoom;
        let modName;
        if (recordCfg.recordRoomType === 1) {
            //大丰麻将
            modName = "gamea";
        } else if (recordCfg.recordRoomType === 8) {
            //关张
            modName = "gameb";
        }

        Logger.debug("enterReplayRoom modName = ", modName);

    }

    private updateList(): void {
        this.recordList.numItems = this.replayRoom.records === undefined ? 0 : this.replayRoom.records.length;
    }

}
