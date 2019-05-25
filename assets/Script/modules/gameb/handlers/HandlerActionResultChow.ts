import { proto } from "../proto/protoGame";
import { RoomInterface } from "./RoomInterfaces";

/**
 * 响应服务器吃牌通知
 */
export namespace HandlerActionResultChow {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterface): void => {
        //
    };
}
