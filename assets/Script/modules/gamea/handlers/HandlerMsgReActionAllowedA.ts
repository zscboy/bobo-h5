import { Logger } from "../../lobby/lcore/LCoreExports";
import { PlayerA } from "../PlayerA";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器请求客户端动作
 */
export namespace HandlerMsgReActionAllowedA {
    const processMyAllowedActions =
        (msg: proto.pokerface.MsgAllowPlayerReAction, p: PlayerA): void => {
            const actions = msg.allowedActions;
            p.allowedReActionMsg = msg;
            p.allowedActionMsg = null;

            p.playerView.skipBtn.visible = false;
            p.playerView.discardBtn.visible = false;
            p.playerView.tipBtn.visible = false;
            const at = proto.prunfast.ActionType;
            if ((actions & at.enumActionType_SKIP) !== 0) {//如果可以过
                Logger.debug("llwant, can skip");
                p.playerView.skipBtn.visible = true;
            }
            if ((actions & at.enumActionType_DISCARD) !== 0) { //出牌
                Logger.debug("llwant, can discard");
                p.playerView.discardBtn.visible = true;
            }
        };
    export const onMsg = async (msgData: ByteBuffer, room: RoomInterfaceA): Promise<void> => {
        const allowedReActionMsg = proto.pokerface.MsgAllowPlayerReAction.decode(msgData);

        const targetChairID = allowedReActionMsg.actionChairID;
        const player = <PlayerA>room.getPlayerByChairID(targetChairID);

        //隐藏打出的牌
        player.hideDiscarded();

        //清除提示table
        player.tipCards = null;
        player.tipCardsIndex = 0;
        if (player.isMe()) {
            Logger.debug("llwant, my allowed action");
            processMyAllowedActions(allowedReActionMsg, player);
        } else {
            //TODO: 如果是别人，则更新它的头像等待圈，以及提醒定时器
            Logger.debug("llwant, opponents allowed action");
        }

        if (allowedReActionMsg.timeoutInSeconds > 255) {
            // player.discardR2H = true; //保存必出红桃2的标志 (打出之后为false)
            //自动打
            // player:autoDiscard()
        }
        //设置等待箭头
        room.setWaitingPlayer(player.chairID);
    };
}
