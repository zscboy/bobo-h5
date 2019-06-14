/**
 * 手牌辅助类
 */
export class ClickCtrl {
    public tileID: number;
    public h: fgui.GComponent;
    public clickCount: number;
    public isGray: boolean;
}
export enum ButtonDef {
    Chow = "Effect_zi_ts_chi",
    Pong = "Effect_zi_ts_peng",
    Kong = "Effect_zi_ts_gang",
    Ting = "Effect_zi_ts_ting",
    Skip = "Effect_zi_ts_guo",
    Hu = "Effect_zi_ts_hu",
    Zhua = "Effect_zi_ts_zhua"
}
/**
 * player 接口
 */
export interface PlayerInterfaceA {
    tilesHand: number[];
    tilesDiscarded: number[];
    waitDiscardReAction: boolean;
    onSkipBtnClick(): void;
    onPlayerInfoClick(): void;
    onDiscardBtnClick(): void;
    onTipBtnClick(): void;
    isMe(): boolean;
    onPlayerDiscardCards(tileID: number[]): void;
    // getPlayInfo(): PlayerInfo;
}
