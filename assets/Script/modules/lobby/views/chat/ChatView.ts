import { DataStore, Dialog, GResLoader, HTTP, LEnv, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../proto/protoLobby";
// tslint:disable-next-line:no-require-imports
import bytebuffer = require("../../protobufjs/bytebuffer");
import { LobbyViewInterface } from "../LobbyViewInterface";

const phraseMap: {[key: number]: string} = {
    [1]: "快点啊，都等到我花都谢了。。。",
    [2]: "真怕猪一样的队友。。。",
    [3]: "一走一停真有型，一秒一卡好潇洒。。。",
    [4]: "我炸你个桃花朵朵开。。。",
    [5]: "姑娘，你真是条汉子。。。",
    [6]: "风吹鸡蛋壳，牌去人安乐。。。",
    [7]: "搏一搏，单车变摩托。。。",
    [8]: "我就剩一张牌了。。。",
    [9]: "炸得好。。。",
    [10]: "你这牌打得也太好了吧。。。",
    [11]: "屌爆了啊",
    [12]: "我就剩两张牌了。。。"
};

interface MsgContent {
    msg: string;
    url: string;
    nickname: string;
    sex: string;
    index: number;
}
/**
 * 聊天界面
 */
export class ChatView extends cc.Component {
    private view: fgui.GComponent = null;
    private phraseBtn: fgui.GButton;
    private expressionBtn: fgui.GButton;
    private historyBtn: fgui.GButton;
    private phraseList: fgui.GList;
    private expressionList: fgui.GList;
    private historyList: fgui.GList;

    private chatText: fgui.GTextInput;
    private eventTarget: cc.EventTarget;

    private lobbyView: LobbyViewInterface;

    private onMessageFunc: Function;

    private userID: string;

    private msgList: {[key: number]: proto.lobby.MsgChat};

    public show(loader: GResLoader): void {
        if (this.view !== null) {
            fgui.GRoot.inst.showPopup(this.view);
            const size = cc.view.getVisibleSize();
            this.view.setPosition(size.width - 500, 0);

            return;
        }

        loader.fguiAddPackage("lobby/fui_chat/lobby_chat");

        const view = fgui.UIPackage.createObject("lobby_chat", "chat").asCom;
        this.view = view;

        this.initView();
        this.testLists();

        fgui.GRoot.inst.showPopup(this.view);

        const windowSize = cc.view.getVisibleSize();
        this.view.setPosition(windowSize.width - 500, 0);

        this.userID = DataStore.getString("userID", "");

        this.lobbyView = <LobbyViewInterface> this.node.getParent().getComponent("LobbyView");
        if (this.lobbyView !== null) {
          this.onMessageFunc = this.lobbyView.on(`${proto.lobby.MessageCode.OPChat}`, this.onMessage, this);
        }

    }

    protected onMessage(data: ByteBuffer): void {
        this.addMsg(data);
    }

    protected onLoad(): void {
        this.eventTarget = new cc.EventTarget();
    }

    protected onDestroy(): void {
        if (this.lobbyView !== null) {
            this.lobbyView.off(`${proto.lobby.MessageCode.OPChat}`, this.onMessageFunc);
        }

        this.view.dispose();

    }

    private initView(): void {
        Logger.debug("initView");

        this.phraseBtn = this.view.getChild("phraseBtn").asButton;
        this.expressionBtn = this.view.getChild("expressionBtn").asButton;
        this.historyBtn = this.view.getChild("historyBtn").asButton;
        this.phraseBtn.onClick(this.onPhraseBtnClick, this);
        this.expressionBtn.onClick(this.onExpressionBtnClick, this);
        this.historyBtn.onClick(this.onHistoryBtnClick, this);
        // -- list
        this.phraseList = this.view.getChild("phraseList").asList;
        this.phraseList.on(fgui.Event.CLICK_ITEM, this.onPhraseListItemClick, this);
        // this.phraseList.onClickItem(this.onPhraseListItemClick, this);
        this.phraseList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderPhraseListItem(index, item);
        };

        this.phraseList.setVirtual();

        this.expressionList = this.view.getChild("expressionList").asList;

        this.historyList = this.view.getChild("historyList").asList;
        this.historyList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderHistoryListItem(index, item);
        };

        this.historyList.itemProvider = (index: number) => {
            return this.getHistoryListItemResource(index);
        };

        this.historyList.setVirtual();

        this.chatText = this.view.getChild("chatText").asTextInput;
        const sendBtn = this.view.getChild("sendBtn");
        sendBtn.onClick(this.onSendBtnClick, this);
    }

    private onPhraseBtnClick(): void {
        this.changeList(0);
        this.phraseBtn.selected = true;
    }

    private onExpressionBtnClick(): void {
        this.changeList(1);
        this.expressionBtn.selected = true;
    }

    private onHistoryBtnClick(): void {
        this.changeList(2);
        this.historyBtn.selected = true;
    }

    private onSendBtnClick(): void {
        this.sendMsg(this.chatText.text);
        this.chatText.text = "";
    }

    private onPhraseListItemClick(clickItem: fgui.GObject): void {
        this.changeList(2);
        this.historyBtn.selected = true;

        const obj = clickItem.asCom;
        const msg = obj.getChild("n3").text;
        this.sendMsg(msg);

    }

    private getHistoryListItemResource(index: number): string {
            const msgChat = this.msgList[index + 1];
            Logger.debug("msgChat.from : ", msgChat.from);
            if (msgChat.from === this.userID) {
                return "ui://lobby_chat/chat_history_me_item";
            } else {
                return "ui://lobby_chat/chat_history_other_item";
            }
    }

    private changeList(myType: number): void {
        this.phraseBtn.selected = false;
        this.expressionBtn.selected = false;
        this.historyBtn.selected = false;

        this.phraseList.visible = false;
        this.expressionList.visible = false;
        this.historyList.visible = false;

        if (myType === 0) {
            this.phraseList.visible = true;
        } else if (myType === 1) {
            this.expressionList.visible = true;
        } else if (myType === 2) {
            this.historyList.visible = true;
        }
    }

    private sendMsg(msg: string): void {
        const tk = DataStore.getString("token", "");
        const nickName = DataStore.getString("nickName", "");
        const url = `${LEnv.rootURL}${LEnv.chat}?tk=${tk}`;
        const data = {
            msg: msg,
            url: "",
            nickname: nickName,
            sex: "",
            index: 0
        };

        const jsonString = JSON.stringify(data);

        Logger.debug("jsonString:", jsonString);
        // const enc = new TextEncoder();
        // const buf = enc.encode(jsonString);

        const chat = new proto.lobby.MsgChat();
        chat.from = this.userID;
        chat.scope = proto.lobby.ChatScopeType.InRoom;
        chat.dataType = proto.lobby.ChatDataType.Text;
        chat.data = bytebuffer.fromUTF8(jsonString);
        // chat.data = <ByteBuffer>buf;

        const body = proto.lobby.MsgChat.encode(chat).toArrayBuffer();

        HTTP.hPost(
            this.eventTarget,
            url,
            (xhr: XMLHttpRequest, err: string) => {
                let errMsg = null;
                if (err !== null) {
                    errMsg = `创建房间错误，错误码:${err}`;
                } else {
                    errMsg = HTTP.hError(xhr);
                    if (errMsg === null) {
                        Logger.debug("send msg ok");
                    }
                }

                if (errMsg !== null) {
                    Logger.debug("NewRoomView.createRoom failed:", errMsg);
                    // 显示错误对话框
                    Dialog.showDialog(errMsg);
                }
            },
            "arraybuffer",
            body);
    }

    private testLists(): void {
        this.updatePhraseList();
        this.updateExpressionList();
        this.updateHistoryList();
    }

    // 更新表情列表
    private updateExpressionList(): void {
        for (let i = 0; i < 16; i++) {
            const obj = fgui.UIPackage.createObject("lobby_chat", "chat_expression_item").asCom;
            this.expressionList.addChild(obj);
        }
    }

    // 更新短语列表
    private updatePhraseList(): void {
        this.phraseList.numItems = Object.keys(phraseMap).length;
    }

    // 更新历史列表
    private updateHistoryList(): void {
        // TODO: 这里需要初始化列表
        this.msgList = {};
    }

    private renderPhraseListItem(index: number, item: fgui.GObject): void {
        const obj = item.asCom;
        const msg = phraseMap[index + 1];
        const t = obj.getChild("n3");
        t.text = msg;
}

private renderHistoryListItem(index: number, item: fgui.GObject): void {
        const chatMsg = this.msgList[index + 1];
        const contentString = chatMsg.data.toUTF8();
        const msgContent = <MsgContent>JSON.parse(contentString);

        const obj = item.asCom;
        const t = obj.getChild("text");
        t.text = msgContent.msg;
}

    private addMsg(msg: ByteBuffer): void {
        const chatMsg = proto.lobby.MsgChat.decode(msg);

        const length = Object.keys(this.msgList).length  + 1;
        this.msgList[length] = chatMsg;
        this.historyList.numItems = length;
        this.historyList.scrollPane.scrollBottom();
    }
}
