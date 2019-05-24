import { Deferred, Logger } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/gameb";

/**
 * 消息
 */
export class Message {
    public readonly mt: MsgType;
    public readonly data: string | proto.mahjong.GameMessage;

    public constructor(mt: MsgType, data?: string | proto.mahjong.GameMessage) {
        this.mt = mt;
        this.data = data;
    }
}

/**
 * 消息类型
 */
export enum MsgType {
    wsOpen = 1, wsClosed = 2, wsError = 3, wsData = 4, quit = 5, replay = 6
}

const mc = proto.mahjong.MessageCode;
const priorityMap: { [key: number]: number } = {
    [mc.OPDisbandRequest]: 1, [mc.OPDisbandNotify]: 1, [mc.OPDisbandAnswer]: 1
};

/**
 * 消息队列
 */
export class MsgQueue {
    private messages: Message[] = [];

    private priority: number = 0;

    private blockedMessages: Message[] = [];

    private waiting: Deferred<Message> = null;

    public async waitMsg(): Promise<Message> {
        if (this.waiting !== null) {
            throw new Error("MsgQueue.waitMsg failed:already wait");
        }

        if (this.messages.length > 0) {
            return this.messages.shift();
        }

        this.waiting = new Deferred<Message>();

        return this.waiting.promise;
    }

    public pushWebsocketOpenEvent(): void {
        const msg = new Message(MsgType.wsOpen);
        this.pushMessage(msg);
    }

    public pushWebsocketCloseEvent(): void {
        const msg = new Message(MsgType.wsClosed);
        this.pushMessage(msg);
    }

    public pushWebsocketErrorEvent(): void {
        const msg = new Message(MsgType.wsError);
        this.pushMessage(msg);
    }

    public pushWebsocketTextMessageEvent(text: string): void {
        const msg = new Message(MsgType.wsData, text);
        this.pushMessage(msg);
    }

    public pushWebsocketBinaryEvent(binary: Uint8Array): void {
        const gmsg = proto.mahjong.GameMessage.decode(binary);
        const msg = new Message(MsgType.wsData, gmsg);

        this.pushMessage(msg);
    }

    public pushQuit(): void {
        const msg = new Message(MsgType.quit);
        this.pushMessage(msg);
    }

    public blockNormal(): void {
        this.priority = 1;
        Logger.debug("MsgQueue.blockNormal");
        if (this.messages.length > 0) {
            Logger.debug("MsgQueue:blockNormal, current msg count:", this.messages.length);
            const unblockedMsgs: Message[] = [];
            this.messages.forEach((msg) => {
                let isBlocked = true;
                if (msg.mt === MsgType.wsData) {
                    const ops = (<proto.mahjong.GameMessage>msg.data).Ops;
                    const p = priorityMap[ops];
                    if (p !== undefined && p >= this.priority) {
                        isBlocked = false;
                    }
                }

                if (isBlocked) {
                    this.blockedMessages.push(msg);
                } else {
                    unblockedMsgs.push(msg);
                }
            });

            this.messages = unblockedMsgs;
            Logger.debug("MsgQueue:blockNormal, after migrate, msg count:", this.messages.length);
        }
    }

    public unblockNormal(): void {
        this.priority = 0;

        if (this.blockedMessages.length > 0) {
            this.blockedMessages.forEach((msg) => {
                this.messages.push(msg);
            });

            this.blockedMessages = [];
            this.wakeupCoroutine();
        }
    }

    protected pushMessage(msg: Message): void {
        let isBlocked = false;
        if (this.priority > 0) {
            isBlocked = true;

            if (msg.mt === MsgType.wsData) {
                const ops = (<proto.mahjong.GameMessage>msg.data).Ops;
                const p = priorityMap[ops];
                if (p !== undefined && p >= this.priority) {
                    isBlocked = false;
                }
            }
        }

        if (!isBlocked) {
            this.messages.push(msg);
            this.wakeupCoroutine();
        } else {
            this.blockedMessages.push(msg);
        }
    }

    protected wakeupCoroutine(): void {
        if (this.waiting != null) {
            const promiseDefferred = this.waiting;
            this.waiting = null;

            promiseDefferred.resolve(this.messages.shift());
        }
    }
}
