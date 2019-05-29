import { proto } from "../proto/protoGame";
import { RoomInterface } from "../RoomInterfaces";

/**
 * 响应服务器暗杠通知
 */
export namespace HandlerActionResultKongConcealed {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterface): void => {
        //
    };
}
