import { RoomInterface } from "../RoomInterfaces";

/**
 * 响应服务器更新解散事件，例如有人拒绝，有人同意等
 */
export namespace HandlerMsgDisbandNotify {
    export const onMsg = (msgData: ByteBuffer, room: RoomInterface): void => {
        // TODO:
    };
}
