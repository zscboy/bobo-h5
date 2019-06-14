import { Logger } from "../../lobby/lcore/LCoreExports";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器整个牌局结束通知
 */
export namespace HandlerMsgGameOverA {
    export const onMsg = async (msgData: ByteBuffer, room: RoomInterfaceA): Promise<void> => {
        Logger.debug("HandlerMsgGameOver");
        const msgGameOver = proto.pokerface.MsgGameOver.decode(msgData);

        // 显示游戏最后结果()
        room.loadGameOverResultView(msgGameOver);
    };
}
