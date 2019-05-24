import { Logger, RoomInfo, UserInfo } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/gameb";

/**
 * 房间
 */
export class Room {
    public readonly myUser: UserInfo;
    public readonly roomInfo: RoomInfo;

    public isDestroy: boolean = false;

    public constructor(myUser: UserInfo, roomInfo: RoomInfo) {
        this.myUser = myUser;
        this.roomInfo = roomInfo;
    }

    public dispatchWebsocketMsg(msg: proto.mahjong.GameMessage): void {
        Logger.debug("Room.dispatchWebsocketMsg, ops:", msg.Ops);
    }
}
