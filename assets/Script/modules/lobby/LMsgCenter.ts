import { LobbyModuleInterface, Logger, MsgQueue, MsgType, WS } from "./lcore/LCoreExports";
import { proto } from "./proto/protoLobby";

/**
 * LMsgCenter 大厅消息中心
 */

export class LMsgCenter {
    public eventTarget: cc.EventTarget;

    private ws: WS;
    private mq: MsgQueue;
    private retry: boolean = false;
    private connectErrorCount: number = 0;

    private url: string;

    private lobbyModule: LobbyModuleInterface;

    private component: cc.Component;

    public constructor(url: string, component: cc.Component, lobbyModule: LobbyModuleInterface) {
        this.url = url;
        this.component = component;
        this.lobbyModule = lobbyModule;

        this.eventTarget = new cc.EventTarget();
    }

    public async start(): Promise<void> {
        Logger.debug("LMsgCenter.start");

        let loop = true;
        while (loop) {
            await this.connectServer();

            Logger.debug("MsgCenter, retry:", this.retry);

            this.connectErrorCount++;

            if (this.ws !== null) {
                const ws = this.ws;
                this.ws = null;
                ws.ww.close();
            }

            if (!this.retry) {
                loop = false;
            } else {
                Logger.trace(`Wait 3 seconds to retry, connectErrorCount:${this.connectErrorCount}`);

                this.waitSecond();
            }
        }
    }

    public destory(): void {
        this.eventTarget.emit("destroy");
    }

    private async connectServer(): Promise<void> {
        const mc = proto.lobby.MessageCode;
        // host 结构
        const host = {
            comp: this.component,
            destroyListener: this.eventTarget,
            startPing: true,
            pingFrequency: 3, // 3秒
            pingPacketProvider: (pingData: ByteBuffer) => {
                const msg = {
                    Ops: mc.OPPing,
                    Data: pingData
                };

                return proto.lobby.LobbyMessage.encode(msg).toArrayBuffer();
            }
        };
        // ping pong 结构
        const pp = {
            pingCmd: mc.OPPing,
            pongCmd: mc.OPPong,
            decode: proto.lobby.LobbyMessage.decode,
            encode: proto.lobby.LobbyMessage.encode
        };

        const priorityMap: { [key: number]: number }  = {};
        const mq = new MsgQueue(priorityMap);
        const ws = new WS(this.url, mq, host, pp);
        this.mq = mq;
        this.ws = ws;

        const rt = await this.waitConnect();
        if (rt !== 0) {
            this.retry = true;

            return;
        }

        Logger.trace("LMsgCenter connect success");

        await this.pumpMsg();
    }

    private waitSecond(): void {
        Logger.debug("waitSecond");
    }

    private async waitConnect(): Promise<number> {
        const msg = await this.mq.waitMsg();

        Logger.debug("Game.waitConnect, mq.waitMsg return:", msg);

        if (msg.mt === MsgType.wsOpen) {
            return 0;
        }

        return -1;
    }

    private async pumpMsg(): Promise<void> {
        let loop = true;
        while (loop) {
            const mq = this.mq;
            const msg = await mq.waitMsg();
            if (msg.mt === MsgType.quit) {
                break;
            }

            if (msg.mt === MsgType.wsData) {
                this.dispatchWeboscketMessage(<proto.lobby.LobbyMessage>msg.data);
            } else if (msg.mt === MsgType.wsClosed || msg.mt === MsgType.wsError) {
                this.retry = true;
                loop = false;
            }
        }
    }

    private dispatchWeboscketMessage(msg: proto.lobby.LobbyMessage): void {
        Logger.trace("msgCenter.dispatchWeboscketMessage Ops:", msg.Ops);
        const op = msg.Ops;
        const msgCode = proto.lobby.MessageCode;
        if (op === msgCode.OPConnectReply) {
            const connectReply = proto.lobby.MsgWebsocketConnectReply.decode(msg.Data);
            Logger.debug("MsgCenter websocket connect result:", connectReply.result);

            return;

        }
        //  else if (op === msgCode.OPChat) {
        //     Logger.debug("dispatchWeboscketMessage, chat msg");
        // }
        if (this.lobbyModule !== null) {
            this.lobbyModule.eventTarget.emit(`${op}`, msg.Data);
        }
    }

}
