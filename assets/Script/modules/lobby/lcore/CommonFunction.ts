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
        let headImage = `ui://lobby_bg_package/girl_img`;
        if (gender === 1) {
            headImage = `ui://lobby_bg_package/boy_img`;
        }
        //头像
        if (url !== undefined && url !== null && url !== "" && url.indexOf("http") >= 0) {
            if (url.indexOf(".jpg") < 0 && url.indexOf(".png") < 0) {
                headImage = `${url}??aaa=aa.jpg`;
            }
        }
        node.url = headImage;
    };

    /**
     * 根据大小，拉长比例
     * @param node 节点
     */
    export const setBgFullScreenScale = (node: fgui.GObject): void => {
        // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
        const scaleForShowAll = Math.min(
            cc.view.getCanvasSize().width / node.width,
            cc.view.getCanvasSize().height / node.height
        );
        const realWidth = node.width * scaleForShowAll;
        const realHeight = node.height * scaleForShowAll;

        // 2. 基于第一步的数据，再做缩放适配
        node.scaleX = Math.max(
            cc.view.getCanvasSize().width / realWidth,
            cc.view.getCanvasSize().height / realHeight
        );

        node.scaleY = Math.max(
            cc.view.getCanvasSize().width / realWidth,
            cc.view.getCanvasSize().height / realHeight
        );
    };

    /**
     * 根据大小 拉长高宽
     * @param node 节点
     */
    export const setBgFullScreen = (node: fgui.GObject): void => {

        // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
        const srcScaleForShowAll = Math.min(
            cc.view.getCanvasSize().width / node.width,
            cc.view.getCanvasSize().height / node.height
        );
        const realWidth = node.width * srcScaleForShowAll;
        const realHeight = node.height * srcScaleForShowAll;

        // 2. 基于第一步的数据，再做节点宽高重置
        node.width = node.width *
            (cc.view.getCanvasSize().width / realWidth);
        node.height = node.height *
            (cc.view.getCanvasSize().height / realHeight);

    };
}
