import { Logger } from "../../lcore/LCoreExports";

/**
 * 微信sdk
 */
export namespace WeiXinSDK {

    const mDataMap: { [key: string]: string | object } = {};

    export const login = (cb: Function): void => {
        wx.login({
            success: res => {
                const code = res.code;
                if (code !== '' && code !== null && code !== undefined) {
                    const wxCode: string = 'wechatLCode';
                    mDataMap[wxCode] = res.code;
                    const xxCb: getUserInfoOpts = {
                        withCredentials: true,

                        success: (userRes: getUserInfoRes) => {
                            const wxUserInfoStr: string = 'wxUserInfo';
                            mDataMap[wxUserInfoStr] = userRes;
                            cb(true);
                        },

                        fail: (err: Error) => {
                            Logger.error("wx getUserInfo err:", err);
                            cb(false);
                        }
                    };

                    wx.getUserInfo(xxCb);
                } else {
                    cb(false);
                }
            },
            fail: res => {
                Logger.error("wx login error", res);
                cb(false);
            }
        });
    };

    export const getWxDataMap = (): { [key: string]: string | object } => {
        return mDataMap;
    };
}
