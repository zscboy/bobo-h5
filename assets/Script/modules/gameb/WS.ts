import { WebsocketHub, WebsocketWrapper } from "../lobby/lcore/LCoreExports";
import { MsgQueue } from "./MsgQueue";
import { proto } from "./proto/gameb";

/**
 * 游戏内使用的websocket
 */
export class WS {
    public readonly mq: MsgQueue;
    public readonly ww: WebsocketWrapper;

    public constructor(url: string, mq: MsgQueue, hub: WebsocketHub) {
        this.mq = mq;

        const pingPacketProvider = (pingData: Uint8Array) => {
            const msg = {
                Ops: 1, // TODO: 这里需要填写数据ping的命令字
                Data: pingData
            };

            return proto.mahjong.GameMessage.encode(msg);
        };

        const options = {
            startPing: true,

            pingFrequency: 3,

            pingPacketProvider: pingPacketProvider
        };

        this.ww = new WebsocketWrapper(hub, url, options);
        this.ww.onEnd = () => {
            this.mq.pushWebsocketCloseEvent();
        };

        this.ww.onMessage = (ev: MessageEvent) => {
            this.mq.pushWebsocketBinaryEvent(<Uint8Array>ev.data);
        };

        this.ww.onOpen = () => {
            this.mq.pushWebsocketOpenEvent();
        };
    }
}
