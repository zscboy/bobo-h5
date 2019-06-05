import { Logger } from "../../lcore/LCoreExports";
import { SDKInterface } from "../SDKInterface";

/**
 * 微信sdk
 */
export class WeiXinSDK extends SDKInterface {
    public init(): boolean {
        return true;
    }

    public login(cb: Function): void {
        wx.login({
            success: res => {
                const code = res.code;
                if (code !== '' && code !== null && code !== undefined) {
                    const wxCode = 'wechatLCode';
                    this.mDataMap[wxCode] = res.code;
                    Logger.debug('wechatLCode is', code);
                    const xxCb: getUserInfoOpts = {
                        withCredentials: true,

                        // tslint:disable-next-line:no-any
                        success: (userRes: any) => {
                            Logger.debug('wx useRes', userRes);
                            const wxUserInfoStr = 'wxUserInfo';
                            this.mDataMap[wxUserInfoStr] = userRes;
                            cb(true);
                        },

                        // tslint:disable-next-line:no-any
                        fail: (err: any) => {
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
    }
}
