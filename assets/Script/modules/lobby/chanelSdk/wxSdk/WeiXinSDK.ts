import { Logger } from "../../lcore/LCoreExports";

/**
 * 微信sdk
 */
export namespace WeiXinSDK {

    // tslint:disable-next-line:no-any
    const mDataMap: { [key: string]: any } = {};

    export const login = (cb: Function): void => {
        wx.login({
            success: res => {
                const code = res.code;
                if (code !== '' && code !== null && code !== undefined) {
                    const wxCode: string = 'wechatLCode';
                    mDataMap[wxCode] = res.code;
                    const xxCb: getUserInfoOpts = {
                        withCredentials: true,

                        // tslint:disable-next-line:no-any
                        success: (userRes: any) => {
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

    // tslint:disable-next-line:no-any
    export const getWxDataMap = (): { [key: string]: any } => {
        return mDataMap;
    };
}
