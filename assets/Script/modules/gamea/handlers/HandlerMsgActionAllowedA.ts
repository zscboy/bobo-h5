import { Logger } from "../../lobby/lcore/LCoreExports";
import { PlayerA } from "../PlayerA";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器请求客户端动作
 */
export namespace HandlerMsgActionAllowedA {
    const processMyAllowedActions =
        (msg: proto.pokerface.MsgAllowPlayerAction, p: PlayerA): void => {
            const actions = msg.allowedActions;
            p.allowedActionMsg = msg;
            p.allowedReActionMsg = null;

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
        const allowedActionMsg = proto.pokerface.MsgAllowPlayerAction.decode(msgData);
        // allowedActionMsg:ParseFromString(msg)

        const targetChairID = allowedActionMsg.actionChairID;
        const player = <PlayerA>room.getPlayerByChairID(targetChairID);

        //隐藏打出的牌
        player.hideDiscarded();
        if (allowedActionMsg.timeoutInSeconds > 255) {
            // player.haveR3H = true;//保存有过红桃3的标志(打出之后为false)
        }
        if (player.isMe()) {
            Logger.debug("llwant, my allowed action");
            processMyAllowedActions(allowedActionMsg, player);
        } else {
            //TODO: 如果是别人，则更新它的头像等待圈，以及提醒定时器
            Logger.debug("llwant, opponents allowed action");
        }

        //设置等待箭头
        room.setWaitingPlayer(player.chairID);
    };
}
