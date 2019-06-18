
import { RoomHost } from "../lobby/interface/LInterfaceExports";
import { RoomInfo } from "../lobby/lcore/LCoreExports";
import { ChatData } from "../lobby/views/chat/ChatExports";
import { PlayerInterfaceA } from "./PlayerInterfaceA";
import { proto } from "./proto/protoGameA";

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

    public constructor(playerIfo: proto.pokerface.IMsgPlayerInfo) {
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

export interface RoomViewInterface {
    stopDiscardCountdown(): void;
    clearWaitingPlayer(): void;
}

/**
 * room 接口
 */
export interface RoomInterfaceA {
    readonly roomType: number;
    readonly roomInfo: RoomInfo;
    readonly roomView: RoomViewInterface;
    readonly handNum: number;
    scoreRecords: proto.pokerface.IMsgRoomHandScoreRecord[];
    state: number;
    ownerID: string;
    handStartted: number;
    markup: number;
    bankerChairID: number;
    // tilesInWall: number;
    windFlowerID: number;
    isDestroy: boolean;
    quit: Function;

    // 获取RoomHost
    getRoomHost(): RoomHost;
    isMe(userID: string): boolean;
    isReplayMode(): boolean;
    sendActionMsg(msgAction: ByteBuffer): void;
    getPlayerViewChairIDByChairID(chairID: number): number;
    resetForNewHand(): void;
    getPlayerByChairID(chairID: number): PlayerInterfaceA;
    getPlayerByUserID(userID: string): PlayerInterfaceA;
    // updateTilesInWallUI(): void;
    setWaitingPlayer(chairID: number): void;
    getMyPlayer(): PlayerInterfaceA;
    getPlayers(): { [key: string]: PlayerInterfaceA };
    updateDisbandVoteView(msgDisbandNotify: proto.pokerface.MsgDisbandNotify): void;
    showDonate(msgDonate: proto.pokerface.MsgDonate): void;
    showRoomNumber(): void;
    removePlayer(chairID: number): void;
    createMyPlayer(playerInfo: proto.pokerface.IMsgPlayerInfo): void;
    createPlayerByInfo(playerInfo: proto.pokerface.IMsgPlayerInfo): void;
    onUpdateStatus(state: number): void;

    loadHandResultView(msgHandOver: proto.pokerface.IMsgHandOver): void;
    loadGameOverResultView(msgGameOver: proto.pokerface.IMsgGameOver): void;

    switchBg(index: number): void;

    onDissolveClicked(): void;

    coWaitSeconds(seconds: number): Promise<void>;

    sendDisbandAgree(agree: boolean): void;

    getPlayerInfoByChairID(chairID: number): PlayerInfo;

    getMyPlayerInfo(): PlayerInfo;
    sendDonate(donateId: number, toChairID: number): void;
    showMsg(chatData: ChatData): void;
    onReadyButtonClick(): void;
    showOrHideReadyButton(isShow: boolean): void;
}
