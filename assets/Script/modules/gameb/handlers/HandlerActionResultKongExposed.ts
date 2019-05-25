import { proto } from "../proto/protoGame";
import { RoomInterface } from "./RoomInterfaces";

/**
 * 响应服务器明杠通知
 */
export namespace HandlerActionResultKongExposed {
    export const onMsg = (actionResultMsg: proto.mahjong.MsgActionResultNotify, room: RoomInterface): void => {
        //
    };
}
