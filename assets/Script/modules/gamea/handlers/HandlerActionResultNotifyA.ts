import { Logger } from "../../lobby/lcore/LCoreExports";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";
import { HandlerActionResultDiscardedA } from "./HandlerActionResultDiscardedA";
import { HandlerActionResultDrawA } from "./HandlerActionResultDrawA";

type ActionHandler = (actionResultMsg: proto.pokerface.MsgActionResultNotify, room: RoomInterfaceA) => Promise<void>;
const actionType = proto.prunfast.ActionType;
const actionHandlers: { [key: number]: ActionHandler } = {
    [actionType.enumActionType_DRAW]: HandlerActionResultDrawA.onMsg,
    [actionType.enumActionType_DISCARD]: HandlerActionResultDiscardedA.onMsg
};

/**
 * 响应服务器动作结果通知
 */
export namespace HandlerActionResultNotifyA {
    export const onMsg = async (msgData: ByteBuffer, room: RoomInterfaceA): Promise<void> => {
        const actionResultMsg = proto.pokerface.MsgActionResultNotify.decode(msgData);
        const action = actionResultMsg.action;
        const handler = actionHandlers[action];

        if (handler !== undefined) {
            await handler(actionResultMsg, room);
        } else {
            Logger.debug("HandlerActionResultNotify failed, no action handler for:", action);
        }
    };
}
