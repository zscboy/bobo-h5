import { Logger } from "./Logger";

/**
 * 公共函数类
 */
export namespace CommonFunction {
    /**
     * 设置头像
     */
    export const setHead = (node: fgui.GLoader, url: string, gender: number = 0): void => {
        //"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er5prllVA37yiac4Vv8
        //ZAXwbg0Zicibn6ZjsgJ4ha0hmFBY8MUTRMnRTmSlvzPd8XJZzd0icuyGoiakj4A/132";
        let headImage = "girl_img";
        if (gender === 1) {
            headImage = "boy_img";
        }
        //头像
        let realUrl = url;
        Logger.debug("realUrl : ", realUrl);
        if (realUrl !== undefined && realUrl !== null && realUrl !== "" && realUrl.indexOf("http") > 0) {
            if (realUrl.indexOf(".jpg") < 0 && realUrl.indexOf(".png") < 0) {
                realUrl = `${realUrl}??aaa=aa.jpg`;
            }
            node.url = realUrl;
        } else {
            node.url = `ui://lobby_bg_package/${headImage}`;
        }
    };
}
