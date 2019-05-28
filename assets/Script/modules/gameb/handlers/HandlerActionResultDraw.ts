import { proto } from "../proto/protoGame";
import { RoomInterfaces } from "../RoomInterfaces";

/**
 * 响应服务器吃牌通知
 */
export namespace HandlerActionResultDraw {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterfaces): void => {
        //
    };
}
