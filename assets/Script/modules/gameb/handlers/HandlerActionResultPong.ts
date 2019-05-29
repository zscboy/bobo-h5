import { proto } from "../proto/protoGame";
import { RoomInterface } from "../RoomInterfaces";

/**
 * 响应服务器碰牌通知
 */
export namespace HandlerActionResultPong {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterface): void => {
        //
    };
}
