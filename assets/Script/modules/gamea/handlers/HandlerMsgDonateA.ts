import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应donate通知
 */
export namespace HandlerMsgDonateA {
    export const onMsg = async (msgData: ByteBuffer, room: RoomInterfaceA): Promise<void> => {
        const msgDonate = proto.pokerface.MsgDonate.decode(msgData);
        room.showDonate(msgDonate);
    };
}
