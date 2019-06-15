import { Logger } from "../../lobby/lcore/LCoreExports";
import { PlayerA } from "../PlayerA";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器通知一手牌结束
 */
export namespace HandlerMsgHandOverA {
    export const onHandOver = async (msgHandOver: proto.pokerface.IMsgHandOver, room: RoomInterfaceA) => {
        if (msgHandOver.endType !== proto.prunfast.HandOverType.enumHandOverType_None) {
            // const mjproto = proto.prunfast.HandOverType;
            for (const score of msgHandOver.scores.playerScores) {
                const player = <PlayerA>room.getPlayerByChairID(score.targetChairID);

                // if (score.winType === mjproto.enumHandOverType_Win_SelfDrawn) {
                //     await player.playZiMoAnimation();
                // } else if (score.winType === mjproto.enumHandOverType_Chucker) {
                //     await player.playDianPaoAnimation();
                // } else if (score.winType === mjproto.enumHandOverType_Win_Chuck) {
                //     await player.playChiChongAnimation();
                // }

                player.playerScore = score;
            }
        }

        // 显示手牌输赢结果
        room.loadHandResultView(msgHandOver);
    };

    export const onMsg = async (msgData: ByteBuffer, roomInterface: RoomInterfaceA): Promise<void> => {
        Logger.debug('llwant hand over msg');
        const room = roomInterface;

        // TODO: 关闭倒计时
        room.roomView.stopDiscardCountdown();
        // room.hideDiscardedTips();

        const msgHandOver = proto.pokerface.MsgHandOver.decode(msgData);

        const playerTileLists = msgHandOver.playerCardLists;
        playerTileLists.forEach((v) => {
            const playerTileList = v;
            const chairID = v.chairID;
            const player = <PlayerA>room.getPlayerByChairID(chairID);

            // 填充手牌列表,自身手牌列表重置
            // 其他玩家之前并没有手牌列表，因此需要新建一个
            player.tilesHand = [];
            player.addHandTiles(playerTileList.cardsOnHand);
        });

        // TODO:重置操作面板，重置等待玩家等等
        room.roomView.clearWaitingPlayer();
        // 隐藏操作按钮
        const myPlayer = <PlayerA>room.getMyPlayer();
        myPlayer.playerView.hideOperationButtons();

        // 所有人的手牌，都排一下序
        // 重新显示各个玩家的手牌，全部明牌显示
        const players = room.getPlayers();
        Object.keys(players).forEach((key) => {
            const p = <PlayerA>players[key];
            p.lastTile = p.tilesHand[p.tilesHand.length - 1]; // 保存最后一张牌，可能是胡牌。。。用于最后结算显示
            p.sortHands();
            // 摊开手牌
            p.hand2Exposed();
        });

        await onHandOver(msgHandOver, room);
    };
}
