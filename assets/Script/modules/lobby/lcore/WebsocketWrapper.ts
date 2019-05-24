import { Logger } from "./Logger";

/**
 * websocket 封装
 */
export interface WebsocketHub {
    destroyListener: cc.EventTarget;
    comp: cc.Component;
}

export interface WebsocketOptions {
    startPing: boolean;

    pingFrequency: number;

    pingPacketProvider: Function;
}

/**
 * websocket 封装
 */
export class WebsocketWrapper {
    public onEnd: Function;
    public onMessage: Function;
    public onOpen: Function;

    /**
     * 真正的websocket
     */
    private ws: WebSocket;
    private rtts: number;
    private rttsCount: number;
    private pingPacketProvider: Function;

    public constructor(hub: WebsocketHub, url: string, options: WebsocketOptions = null) {
        const ws = new WebSocket(url);
        this.ws = ws;
        this.rtts = 0;
        this.rttsCount = 0;

        const cb = () => {
            ws.close();
        };

        const hasPing = options !== null && options.startPing && options.pingPacketProvider !== undefined;

        const destroyListener = hub.destroyListener;

        const cbPing = () => {
            this.ping();
        };

        const die = () => {
            destroyListener.off("destroy", cb);
            if (hasPing) {
                hub.comp.unschedule(cbPing);
                this.pingPacketProvider = null;
            }
        };

        destroyListener.once("destroy", cb);

        ws.onclose = (ev: CloseEvent) => {
            die();
            Logger.debug("ws close:", ev);

            this.onEnd(this);
        };

        ws.onerror = (ev: Event) => {
            die();
            Logger.debug("ws error:", ev);
        };

        ws.onmessage = (ev: MessageEvent) => {
            this.onMessage(ev, this);
        };

        ws.onopen = (ev: Event) => {
            Logger.debug("ws onopen:", ev);

            if (hasPing) {
                // 启动ping
                hub.comp.schedule(
                    cbPing,
                    options.pingFrequency,
                    cc.macro.REPEAT_FOREVER,
                    options.pingFrequency);

                this.pingPacketProvider = options.pingPacketProvider;
                Logger.debug("WebsocketWrapper has ping:", options.pingFrequency);
            }

            this.onOpen(this);
        };
    }

    public close(): void {
        if (this.ws != null) {
            this.ws.close();
        }
    }

    public send(b: Uint8Array | ArrayBuffer | string): void {
        if (this.ws != null && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(b);
        } else {
            Logger.debug("websocket send error: ws is null or not ready to send");
        }
    }

    /**
     * 获取时延，单位是毫秒
     */
    public get latency(): number {
        if (this.rttsCount < 1) {
            return 0;
        }

        return Math.ceil(this.rtts / this.rttsCount);
    }

    public onPong(pong: ArrayBuffer): void {
        // Logger.debug("got pong:", pong);

        // 数据是4字节的时间戳
        if (this.rttsCount > 9) {
            // 只保存最后10个，因此减去一个平均值，变成9个
            // 接着后面代码增加当前rtt后，再次变成10个
            this.rtts = this.rtts - this.latency;
        } else {
            this.rttsCount++;
        }

        const dv = new DataView(pong);
        const prev = dv.getFloat64(0, true);
        const n = Date.now();

        // 差值，单位是毫秒
        const rtt = n - prev;
        // Logger.debug("pong rtt:", rtt, ",prev:", prev, ", n:", n);
        this.rtts += rtt;
    }

    public onPing(ping: ArrayBuffer): void {
        // 原封不动发送回去
        this.send(ping);
    }

    /**
     * 发送当前时间戳到服务器，服务器再原封不动返回来
     */
    private ping(): void {
        // 4个字节的时间戳
        const n = Date.now();
        // Logger.debug("send ping, n:", n);
        const buffer = new ArrayBuffer(8);
        const dv = new DataView(buffer, 0, 8);
        dv.setFloat64(0, n, true);

        const packet = <ArrayBuffer>this.pingPacketProvider(new Uint8Array(buffer, 0, 8));
        // Logger.debug("ping, packet:", packet);
        this.send(packet);
    }
}
