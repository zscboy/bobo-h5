import { proto } from "../proto/protoGame";
import { RoomInterfaces } from "../RoomInterfaces";

/**
 * 响应服务器打牌通知
 */
export namespace HandlerActionResultDiscarded {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterfaces): void => {
        //
    };
}
