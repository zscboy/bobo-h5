import { Dialog } from "./Dialog";
import { Logger } from "./Logger";

/**
 * 封装HTTP和websocket
 */
export namespace HTTP {
    const xhrRequest = (
        destroyListener: cc.EventTarget, method: string, url: string, onFinished: Function,
        responseType: XMLHttpRequestResponseType = "arraybuffer", body: string | ArrayBuffer = null) => {
        // 使用XMLHttpRequest
        const xhr = new XMLHttpRequest();
        if (url.indexOf("https") === 0) {
            // 如果是https则使用证书
            xhr.withCredentials = true;
        }

        const cb = () => {
            xhr.abort();
        };

        const onEnd = (error: Error): void => {
            destroyListener.off("destroy", cb);
            onFinished(xhr, error);

            Dialog.hideWaiting();
        };

        // 如果组件已经销毁则终止网络请求
        destroyListener.once("destory", cb);

        xhr.onabort = () => {
            Logger.trace("xhr onabort");
            destroyListener.off("destroy", cb);
            Logger.debug("xhr abort for url:", url);
        };

        xhr.onloadend = () => {
            Logger.trace("xhr onloaded");
            onEnd(null);
        };

        xhr.onerror = () => {
            Logger.trace("xhr onerror");
            onEnd(Error("xhr onerror"));
        };

        xhr.ontimeout = () => {
            Logger.trace("xhr ontimeout");
            onEnd(Error("xhr ontimeout"));
        };

        // 设置服务器响应类型
        xhr.responseType = responseType;
        xhr.open(method, url, true);
        if (body != null) {
            if (typeof body === "string") {
                xhr.setRequestHeader("Content-Type", "application/json");
            } else {
                xhr.setRequestHeader("Content-Type", "application/octet-stream");
            }

            xhr.send(body);
        } else {
            xhr.send();
        }

        // 显示等待滚动圈
        Dialog.showWaiting();

        return xhr;
    };

    /**
     * HTTP GET
     * @param destroyListener 订阅组件销毁事件，组件销毁时需要发出"destroy"事件，然后http请求终止
     * @param url URL
     * @param onFinished 请求完成时回调
     * @param responseType 服务器响应内容格式
     */
    export const hGet = (
        destroyListener: cc.EventTarget, url: string, onFinished: Function,
        responseType: XMLHttpRequestResponseType = "arraybuffer") => {

        return xhrRequest(destroyListener, "GET", url, onFinished, responseType);
    };

    /**
     * HTTP POST
     * @param destroyListener 订阅组件销毁事件，组件销毁时需要发出"destroy"事件，然后http请求终止
     * @param url URL
     * @param onFinished 请求完成时回调
     * @param responseType 服务器响应内容格式
     * @param body 发送到服务器的内容
     */
    export const hPost = (
        destroyListener: cc.EventTarget, url: string, onFinished: Function,
        responseType: XMLHttpRequestResponseType = "arraybuffer", body: string | ArrayBuffer) => {
        return xhrRequest(destroyListener, "POST", url, onFinished, responseType, body);
    };

    export const hError = (xhr: XMLHttpRequest): string => {
        if (xhr.status === 200) {
            return null;
        }

        return `HTTP请求失败, status:${xhr.status}`;
    };
}
