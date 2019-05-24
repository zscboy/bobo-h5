import { Logger, WebsocketHub, WebsocketWrapper } from "../lobby/lcore/LCoreExports";
import { Message, MsgQueue, MsgType } from "./MsgQueue";
import { proto } from "./proto/gameb";

/**
 * 游戏内使用的websocket
 */
export class WS {
    public readonly mq: MsgQueue;
    public readonly ww: WebsocketWrapper;

    public readonly comp: cc.Component;

    private events: Message[] = [];
    private rolling: boolean = false;

    public constructor(url: string, mq: MsgQueue, hub: WebsocketHub) {
        this.mq = mq;
        this.comp = hub.comp;

        const pingPacketProvider = (pingData: ByteBuffer) => {
            const msg = {
                Ops: proto.mahjong.MessageCode.OPPing,
                Data: pingData
            };

            return proto.mahjong.GameMessage.encode(msg).toArrayBuffer();
        };

        const options = {
            startPing: true,

            pingFrequency: 3,

            pingPacketProvider: pingPacketProvider
        };

        this.ww = new WebsocketWrapper(hub, url, options);
        this.ww.onEnd = () => {
            this.events.push(new Message(MsgType.wsClosed));
            this.roll();
        };

        this.ww.onMessage = (ev: MessageEvent) => {
            const blob = <Blob>ev.data;
            this.events.push(new Message(MsgType.wsData, blob));

            this.roll();
        };

        this.ww.onOpen = () => {
            this.events.push(new Message(MsgType.wsOpen));
            this.roll();
        };
    }

    /**
     * 由于需要异步转换为array buffer，因此需要阻塞其他事件，确保有序
     * 例如，收到服务器的最后一个数据包，然后立即收到关闭事件，由于数据包需要异步转换
     * 当转换还未完成时就去处理关闭事件，这是不对的，应该先处理最后一个数据包（例如显示信息框），
     * 然后再处理关闭事件
     */
    private roll(): void {
        if (this.rolling) {
            return;
        }

        if (this.events.length < 1) {
            return;
        }

        const nextRoll = () => {
            this.rolling = false;
            this.roll();
        };

        this.rolling = true;
        const mx = this.events.shift();
        if (mx.mt === MsgType.wsData) {
            const blob = mx.data;
            // 由于需要异步转换为array buffer，因此需要阻塞其他事件，确保有序
            const fileReader = new FileReader();
            fileReader.onload = () => {
                try {
                    const arrayBuffer = <ArrayBuffer>fileReader.result;
                    const gmsg = proto.mahjong.GameMessage.decode(new Uint8Array(arrayBuffer));
                    if (gmsg.Ops === proto.mahjong.MessageCode.OPPing) {
                        // ping
                        const msgEcho = {
                            Ops: proto.mahjong.MessageCode.OPPong,
                            Data: gmsg.Data
                        };
                        const bufEcho = proto.mahjong.GameMessage.encode(msgEcho).toArrayBuffer();
                        this.ww.onPing(bufEcho);
                    } else if (gmsg.Ops === proto.mahjong.MessageCode.OPPong) {
                        // pong
                        this.ww.onPong(gmsg.Data.toArrayBuffer());
                    } else {
                        this.mq.pushWebsocketBinaryEvent(gmsg);
                    }
                } catch (e) {
                    Logger.error(e);
                }

                this.comp.scheduleOnce(nextRoll);
            };

            fileReader.readAsArrayBuffer(<Blob>blob);
        } else {
            this.mq.pushWebsocketEvent(mx);
            this.comp.scheduleOnce(nextRoll);
        }
    }
}
