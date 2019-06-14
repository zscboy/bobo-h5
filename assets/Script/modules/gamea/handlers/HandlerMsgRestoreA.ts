import { PlayerA } from "../PlayerA";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器牌局回复
 */
export namespace HandlerMsgRestoreA {
    export const onMsg = async (msgData: ByteBuffer, room: RoomInterfaceA): Promise<void> => {
        //掉线恢复时，是通过MsgRestore下发的
        const msgRestore = proto.pokerface.MsgRestore.decode(msgData);

        // msgRestore:ParseFromString(msgData)

        //首先清空所有玩家的牌列表
        const players = room.getPlayers();
        Object.keys(players).forEach((key: string) => {
            const ps = <PlayerA>players[key];
            ps.resetForNewHand();
        });

        //一手牌数据
        const msgDeal = msgRestore.msgDeal;
        room.bankerChairID = msgDeal.bankerChairID;
        // room.isContinuousBanker = msgDeal.isContinuousBanker;
        room.windFlowerID = msgDeal.windFlowerID;
        // room.tilesInWall = msgDeal.tilesInWall;
        //大丰 1：就表示家家庄    // 盐城 >0 表示加价局计数
        room.markup = msgDeal.markup;
        // print("llwant,handlerMsgRestore //////////////-" .. tostring(msgDeal.markup))
        //print("llwant,msgDeal.markup : " .. msgDeal.markup)
        // print("llwant , handlerMsgRestore.room.markup : " .. tostring(room.markup))

        // room.updateTilesInWallUI();
        //TODO:根据风圈修改
        // room.setRoundMask();
        //TODO:修改家家庄标志
        // room.roomView:setJiaJiaZhuang()
        //TODO:修改庄家标志
        // room.setBankerFlag();
        //清理吃牌界面
        // room.cleanUI();
        //保存每一个玩家的牌列表
        const playerTileLists = msgDeal.playerCardLists;
        for (const v of playerTileLists) {
            const playerTileList = v;
            const chairID = v.chairID;
            const player = <PlayerA>room.getPlayerByChairID(chairID);
            //填充手牌列表，仅自己有手牌列表，对手只有手牌张数
            if (player.isMe()) {
                player.addHandTiles(playerTileList.cardsOnHand);
            } else {
                player.tileCountInHand = playerTileList.cardCountOnHand;
            }
            //填充打出去的牌列表
            if (playerTileList.discardedHands !== undefined) {
                const l = playerTileList.discardedHands.length;
                if (l > 0) {
                    const discardTiles = playerTileList.discardedHands[l - 1];
                    if (discardTiles !== undefined) {
                        const discardTileIds = discardTiles.cards;
                        if (discardTileIds !== undefined && discardTileIds.length > 0) {
                            player.addDiscardedTiles(discardTileIds);
                        }
                        player.discarded2UI();
                    }
                }
            }
            if (player.chairID === room.bankerChairID) {
                room.setWaitingPlayer(player.chairID);
            }
        }

        //自己手牌排一下序
        const mySelf = <PlayerA>room.getMyPlayer();
        mySelf.sortHands();

        //显示各个玩家的手牌（对手只显示暗牌）和花牌和打出去的牌
        Object.keys(players).forEach((key: string) => {
            const p = <PlayerA>players[key];
            p.hand2UI(true);

            if (p.chairID === msgRestore.prevActionChairID) {
                room.setWaitingPlayer(p.chairID);
            }
        });
    };
}
