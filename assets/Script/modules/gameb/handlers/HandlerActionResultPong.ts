import { proto } from "../proto/protoGame";
import { RoomInterfaces } from "../RoomInterfaces";

/**
 * 响应服务器碰牌通知
 */
export namespace HandlerActionResultPong {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterfaces): void => {
        //
    };
}
