import { PlayerA } from "../PlayerA";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器点过通知
 */
export namespace HandlerActionResultSkipA {
    export const onMsg = async (actionResultMsg: proto.pokerface.MsgActionResultNotify, room: RoomInterfaceA): Promise<void> => {
        const targetChairID = actionResultMsg.targetChairID;
        const player = <PlayerA>room.getPlayerByChairID(targetChairID);

        //隐藏打出的牌 TODO
        player.hideDiscarded();
        player.playSkipAnimation();
    };
}
