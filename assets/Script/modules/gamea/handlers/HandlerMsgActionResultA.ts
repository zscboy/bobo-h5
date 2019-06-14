import { Logger } from "../../lobby/lcore/LCoreExports";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";
import { HandlerActionResultDiscardedA } from "./HandlerActionResultDiscardedA";
import { HandlerActionResultSkipA } from "./HandlerActionResultSkipA";
const actionType = proto.prunfast.ActionType;
type ActionHandler = (actionResultMsg: proto.pokerface.MsgActionResultNotify, room: RoomInterfaceA) => Promise<void>;
const actionHandlers: { [key: number]: ActionHandler } = {
    [actionType.enumActionType_SKIP]: HandlerActionResultSkipA.onMsg,
    [actionType.enumActionType_DISCARD]: HandlerActionResultDiscardedA.onMsg
};
/**
 * 响应服务器点过通知
 */
export namespace HandlerMsgActionResultA {
    export const onMsg = async (actionResultMsg: proto.pokerface.MsgActionResultNotify, room: RoomInterfaceA): Promise<void> => {
        const action = actionResultMsg.action;
        const handler = actionHandlers[action];

        if (handler !== undefined) {
            await handler(actionResultMsg, room);
        } else {
            Logger.debug("HandlerActionResultNotify failed, no action handler for:", action);
        }
    };
}
