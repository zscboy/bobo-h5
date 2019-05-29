
import { RoomInfo } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/protoGame";

/**
 * 听牌详情类
 */
export class TingPai {
    public card: number;
    public fan: number;
    public num: number;
    public constructor(card: number, fan: number, num: number) {
        this.card = card;
        this.fan = fan;
        this.num = num;
    }
}
/**
 * 玩家信息类
 */
export class PlayerInfo {

    public readonly gender: number;
    public readonly headIconURI: string;
    public readonly ip: string;
    public readonly location: string;
    public readonly dfHands: number;
    public readonly diamond: number;
    public readonly charm: number;
    public readonly avatarID: string;
    public readonly state: number;
    public readonly userID: string;
    public readonly chairID: number;
}
/**
 * 落地牌组定义
 */
export class MeldType {
    public meldType: number;
    public tile1: number;
    public contributor?: number;
    public chowTile?: number;
    public actionMsg: proto.mahjong.MsgPlayerAction;
}
/**
 * room 接口
 */
export interface RoomInterfaces {
    readonly roomInfo: RoomInfo;
    isDestroy: boolean;
    quit: Function;
    isMe(o: object): boolean;
    isReplayMode(): boolean;
    sendActionMsg(msgAction: ByteBuffer): void;
    getBankerChairID(): number;
    showOrHideMeldsOpsPanel(chowMelds: MeldType[]): void;
    setArrowByParent(d: fgui.GComponent): void;
    getPlayerViewChairIDByChairID(chairID: number): number;

    showTingDataView(tingP: TingPai[]): void;
    hideTingDataView(): void;
    onReadyButtonClick(): void;
    resetForNewHand(): void;
    isListensObjVisible(): boolean;
}
