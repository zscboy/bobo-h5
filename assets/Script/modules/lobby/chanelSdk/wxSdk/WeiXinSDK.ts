import { Logger } from "../../lcore/LCoreExports";

/**
 * 微信sdk
 */
export namespace WeiXinSDK {

    const mDataMap: { [key: string]: string | object } = {};
    let shareSuccessCallBack: Function = null;
    let shareFailCallBack: Function = null;
    let pullShareTime: number = 0;

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

    export const shareWeChat = (
        successCb: Function = null,
        failCb: Function = null,
        shareTitle: string = null,
        shareMedia: string = null): void => {

        shareSuccessCallBack = successCb;
        shareFailCallBack = failCb;

        Logger.debug('shareInfo', shareTitle, shareMedia);

        if (shareTitle === null || shareMedia == null) {
            if (shareFailCallBack !== null) {
                shareFailCallBack();
            }

            return;
        }

        wx.shareAppMessage({
            title: `${shareTitle}`,
            imageUrl: `${shareMedia}`
        });

        pullShareTime = Date.now();
    };

    /**
     * 记录从微信分享界面回到游戏时间，判断分享是否成功
     */
    const gameReShowCallBack = () => {
        Logger.debug('come back from share');
        if (pullShareTime !== 0) {
            const timeDValue = (Date.now() - pullShareTime) / 1000;
            pullShareTime = 0;

            if (timeDValue > 2) {
                if (shareSuccessCallBack !== null) {
                    shareSuccessCallBack();
                }
            } else {
                if (shareFailCallBack !== null) {
                    shareFailCallBack();
                }
            }
            shareSuccessCallBack = null;
            shareFailCallBack = null;
        }
    };

    export const wxOnShow = () => {
        wx.onShow((res: showRes) => {
            gameReShowCallBack();
        });
    };

    export const getWxDataMap = (): { [key: string]: string | object } => {
        return mDataMap;
    };
}
