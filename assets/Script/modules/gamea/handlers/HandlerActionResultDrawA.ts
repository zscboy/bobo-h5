import { PlayerA } from "../PlayerA";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器抽牌通知
 */
export namespace HandlerActionResultDrawA {
    export const onMsg = async (actionResultMsg: proto.pokerface.MsgActionResultNotify, room: RoomInterfaceA): Promise<void> => {
        const targetChairID = actionResultMsg.targetChairID;
        const player = <PlayerA>room.getPlayerByChairID(targetChairID);
        const drawTile = actionResultMsg.actionHand.cards[0];

        //增加新抽到的牌到手牌列表
        //显示的时候要摆在新抽牌位置
        //enumTid_MAX+1是一个特殊标志，表明服务器已经没牌可抽
        if (drawTile !== (proto.pokerface.CardID.CARDMAX + 1)) {
            player.addHandTile(drawTile);
            player.sortHands(); // 新抽牌，必然有14张牌，因此最后一张牌不参与排序
            player.hand2UI(false);
        }
    };
}
