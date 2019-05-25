import { proto } from "../proto/protoGame";
import { RoomInterface } from "./RoomInterfaces";

/**
 * 响应服务器听牌通知
 */
export namespace HandlerActionResultReadyHand {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterface): void => {
        //
    };
}
