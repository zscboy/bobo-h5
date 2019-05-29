
/**
 * 手牌辅助类
 */
export class ClickCtrl {
    public isDiscardable: boolean;
    public tileID: number;
    public h: fgui.GComponent;
    public clickCount: number;
    public t: fgui.GObject;
    public isGray: boolean;
    public readyHandList: number[];
}
/**
 * player 接口
 */
export interface PlayerInterface {
    readyHandList: number[];
    waitSkip: boolean;
    isRichi: boolean;
    waitDiscardReAction: boolean;
    onChowBtnClick: Function;
    onKongBtnClick: Function;
    onSkipBtnClick: Function;
    onWinBtnClick: Function;
    onPongBtnClick: Function;
    onReadyHandBtnClick: Function;
    onFinalDrawBtnClick: Function;
    onPlayerInfoClick: Function;
    isMe(): boolean;
    onPlayerDiscardTile(tileID: number): void;
}
