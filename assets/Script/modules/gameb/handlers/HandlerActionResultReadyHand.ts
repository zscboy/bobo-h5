import { proto } from "../proto/protoGame";
import { RoomInterfaces } from "../RoomInterfaces";

/**
 * 响应服务器听牌通知
 */
export namespace HandlerActionResultReadyHand {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterfaces): void => {
        //
    };
}
