import { Logger, RoomInfo, UserInfo } from "../lobby/lcore/LCoreExports";
import { HandlerActionResultNotify } from "./handlers/HandlerActionResultNotify";
import { HandlerMsg2Lobby } from "./handlers/HandlerMsg2Lobby";
import { HandlerMsgActionAllowed } from "./handlers/HandlerMsgActionAllowed";
import { HandlerMsgDeal } from "./handlers/HandlerMsgDeal";
import { HandlerMsgDeleted } from "./handlers/HandlerMsgDeleted";
import { HandlerMsgDisbandNotify } from "./handlers/HandlerMsgDisbandNotify";
import { HandlerMsgDonate } from "./handlers/HandlerMsgDonate";
import { HandlerMsgGameOver } from "./handlers/HandlerMsgGameOver";
import { HandlerMsgHandOver } from "./handlers/HandlerMsgHandOver";
import { HandlerMsgKickout } from "./handlers/HandlerMsgKickout";
import { HandlerMsgReActionAllowed } from "./handlers/HandlerMsgReActionAllowed";
import { HandlerMsgRestore } from "./handlers/HandlerMsgRestore";
import { HandlerMsgRoomUpdate } from "./handlers/HandlerMsgRoomUpdate";
import { HandlerMsgShowTips } from "./handlers/HandlerMsgShowTips";
import { HandlerMsgUpdateLocation } from "./handlers/HandlerMsgUpdateLocation";
import { HandlerMsgUpdatePropCfg } from "./handlers/HandlerMsgUpdatePropCfg";
import { RoomInterface } from "./handlers/RoomInterfaces";
import { proto } from "./proto/gameb";

/**
 * 定义一个接口，关联Game.ts到Room
 */
interface RoomHost {
    quit: Function;
}

const msgCodeEnum = proto.mahjong.MessageCode;
const msgHandlers: { [key: number]: (msgData: ByteBuffer, room: RoomInterface) => void } = {
    [msgCodeEnum.OPActionAllowed]: HandlerMsgActionAllowed.onMsg,
    [msgCodeEnum.OPReActionAllowed]: HandlerMsgReActionAllowed.onMsg,
    [msgCodeEnum.OPActionResultNotify]: HandlerActionResultNotify.onMsg,
    [msgCodeEnum.OPDeal]: HandlerMsgDeal.onMsg,
    [msgCodeEnum.OPHandOver]: HandlerMsgHandOver.onMsg,
    [msgCodeEnum.OPRoomUpdate]: HandlerMsgRoomUpdate.onMsg,
    [msgCodeEnum.OPRestore]: HandlerMsgRestore.onMsg,
    [msgCodeEnum.OPRoomDeleted]: HandlerMsgDeleted.onMsg,
    [msgCodeEnum.OPRoomShowTips]: HandlerMsgShowTips.onMsg,
    [msgCodeEnum.OPGameOver]: HandlerMsgGameOver.onMsg,
    [msgCodeEnum.OPDisbandNotify]: HandlerMsgDisbandNotify.onMsg,
    [msgCodeEnum.OPKickout]: HandlerMsgKickout.onMsg,
    [msgCodeEnum.OPDonate]: HandlerMsgDonate.onMsg,
    [msgCodeEnum.OPUpdateLocation]: HandlerMsgUpdateLocation.onMsg,
    [msgCodeEnum.OP2Lobby]: HandlerMsg2Lobby.onMsg,
    [msgCodeEnum.OPUpdatePropCfg]: HandlerMsgUpdatePropCfg.onMsg
};

/**
 * 房间
 */
export class Room {
    public readonly myUser: UserInfo;
    public readonly roomInfo: RoomInfo;
    public readonly host: RoomHost;
    public isDestroy: boolean = false;

    public constructor(myUser: UserInfo, roomInfo: RoomInfo, host: RoomHost) {
        this.myUser = myUser;
        this.roomInfo = roomInfo;
        this.host = host;
    }

    public dispatchWebsocketMsg(msg: proto.mahjong.GameMessage): void {
        Logger.debug("Room.dispatchWebsocketMsg, ops:", msg.Ops);
        const handler = msgHandlers[msg.Ops];
        if (handler !== undefined) {
            handler(msg.Data, this);
        } else {
            Logger.debug("room has no handler for msg, ops:", msg.Ops);
        }
    }

    public quit(): void {
        this.host.quit();
    }
}
