
import { RoomInfo } from "../lobby/lcore/LCoreExports";
import { PlayerInterface } from "./PlayerInterface";
import { proto } from "./proto/protoGame";

/**
 * Room host
 */
export interface RoomHost {
    room: RoomInterface;
    quit: Function;
    sendBinary(buf: ByteBuffer): void;
}

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
    public readonly avatarID: number;
    public readonly state: number;
    public readonly userID: string;
    public readonly nick: string;
    public readonly chairID: number;

    public constructor(playerIfo: proto.mahjong.IMsgPlayerInfo) {
        this.gender = playerIfo.gender;
        this.headIconURI = playerIfo.headIconURI;
        this.ip = playerIfo.ip;
        this.location = playerIfo.location;
        this.dfHands = playerIfo.dfHands;
        this.diamond = playerIfo.diamond;
        this.charm = playerIfo.charm;
        this.avatarID = playerIfo.avatarID;
        this.state = playerIfo.state;
        this.userID = playerIfo.userID;
        this.chairID = playerIfo.chairID;
        this.nick = playerIfo.nick;
    }
}

/**
 * room 接口
 */
export interface RoomInterface {
    readonly roomInfo: RoomInfo;
    scoreRecords: proto.mahjong.IMsgRoomHandScoreRecord[];
    state: number;
    ownerID: string;
    roomNumber: string;
    handStartted: number;
    disbandLocked: boolean;
    markup: number;
    bankerChairID: number;
    isContinuousBanker: boolean;
    tilesInWall: number;
    windFlowerID: number;
    isDestroy: boolean;
    quit: Function;
    isMe(userID: string): boolean;
    isReplayMode(): boolean;
    sendActionMsg(msgAction: ByteBuffer): void;
    getBankerChairID(): number;
    showOrHideMeldsOpsPanel(chowMelds: proto.mahjong.IMsgMeldTile[], actionMsg: proto.mahjong.MsgPlayerAction): void;
    setArrowByParent(d: fgui.GComponent): void;
    getPlayerViewChairIDByChairID(chairID: number): number;

    showTingDataView(tingP: TingPai[]): void;
    hideTingDataView(): void;
    onReadyButtonClick(): void;
    resetForNewHand(): void;
    isListensObjVisible(): boolean;

    getPlayerInterfaceByChairID(chairID: number): PlayerInterface;
    getPlayerInterfaceByUserID(userID: string): PlayerInterface;
    hideDiscardedTips(): void;
    cleanUI(): void;
    updateTilesInWallUI(): void;
    setWaitingPlayer(chairID: number): void;
    getMyPlayer(): PlayerInterface;
    getPlayers(): { [key: string]: PlayerInterface };

    setJiaJiaZhuang(): void;
    setRoundMask(): void;
    setBankerFlag(): void;
    updateDisbandVoteView(msgDisbandNotify: proto.mahjong.MsgDisbandNotify): void;
    showDonate(msgDonate: proto.mahjong.MsgDonate): void;
    showRoomNumber(): void;
    removePlayer(chairID: number): void;
    createMyPlayer(playerInfo: proto.mahjong.IMsgPlayerInfo): void;
    createPlayerByInfo(playerInfo: proto.mahjong.IMsgPlayerInfo): void;
    showOrHideReadyButton(isShow: boolean): void;
    onUpdateStatus(state: number): void;
}
