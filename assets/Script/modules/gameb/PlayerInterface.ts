import { proto } from "./proto/protoGame";

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
export enum ButtonDef {
    Chow = "ui.//dafeng/chi_button",
    Pong = "ui.//dafeng/peng_button",
    Kong = "ui.//dafeng/gang_button",
    Ting = "ui.//dafeng/ting_button",
    Skip = "ui.//dafeng/guo_button",
    Hu = "ui.//dafeng/hu_button",
    Zhua = "ui.//dafeng/zhua_button"
}
/**
 * player 接口
 */
export interface PlayerInterface {
    readyHandList: number[];
    waitSkip: boolean;
    tilesHand: number[];
    tilesFlower: number[];
    tilesDiscarded: number[];
    melds: proto.mahjong.IMsgMeldTile[];
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
