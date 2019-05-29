import { proto } from "../proto/protoGame";
import { RoomInterface } from "../RoomInterfaces";

/**
 * 响应服务器加杠通知
 */
export namespace HandlerActionResultTriplet2Kong {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterface): void => {
        //
    };
}
