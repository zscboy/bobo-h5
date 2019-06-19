import { PlayerA } from "../PlayerA";
import { proto } from "../proto/protoGameA";
import { RoomInterfaceA } from "../RoomInterfaceA";

/**
 * 响应服务器更新房间
 */
export namespace HandlerMsgRoomUpdateA {
    const saveScore = (room: RoomInterfaceA, msgRoomUpdate: proto.pokerface.MsgRoomInfo): void => {
        const scoreRecords = msgRoomUpdate.scoreRecords;
        room.scoreRecords = scoreRecords;
        if (scoreRecords !== null && scoreRecords.length > 0) {
            const totalScores: number[] = [0, 0, 0, 0];
            for (const scoreRecord of scoreRecords) {
                const playerRecords = scoreRecord.playerRecords;
                for (let j = 0; j < 3; j++) {
                    const playerRecord = playerRecords[j];
                    if (playerRecord !== undefined && playerRecord !== null) {
                        const scoreNumber = playerRecord.score;
                        const userID = playerRecord.userID;
                        const player = <PlayerA>room.getPlayerByUserID(userID);
                        totalScores[j] = totalScores[j] + scoreNumber;
                        player.totalScores = totalScores[j];
                    }
                }
            }
        }
    };

    export const onMsg = async (msgData: ByteBuffer, room: RoomInterfaceA): Promise<void> => {
        const msgRoomUpdate = proto.pokerface.MsgRoomInfo.decode(msgData);
        const msgPlayers = msgRoomUpdate.players;
        // 房间状态
        room.state = msgRoomUpdate.state;

        room.ownerID = msgRoomUpdate.ownerID;
        // room.roomNumber = msgRoomUpdate.roomNumber;
        if (msgRoomUpdate.handStartted !== undefined && msgRoomUpdate.handStartted >= 0) {
            room.handStartted = msgRoomUpdate.handStartted;
        }
        //有人退出为 -1 有人进来为 1 没有变动为 0
        let updatePlayer = 0;
        //显示房间号
        room.showRoomNumber();
        // 首先看是否有player需要被删除
        const userID2Player: { [key: string]: proto.pokerface.IMsgPlayerInfo } = {};
        const player2Remove: PlayerA[] = [];
        for (const msgPlayer of msgPlayers) {
            userID2Player[msgPlayer.userID] = msgPlayer;
        }
        //记录需要被删除的玩家
        const players = room.getPlayers();
        Object.keys(players).forEach((key: string) => {
            const player = <PlayerA>players[key];
            if (userID2Player[player.userID] === undefined || userID2Player[player.userID].chairID !== player.chairID) {
                player2Remove.push(player);
            }
        });
        //删除已经离开的玩家，并隐藏其视图
        for (const player of player2Remove) {
            room.removePlayer(player.userID);
            player.unbindView();
            //有人出去
            updatePlayer = -1;
        }
        //如果自己还没有创建，创建自己
        for (const msgPlayer of msgPlayers) {
            if (room.isMe(msgPlayer.userID)) {
                const player = <PlayerA>room.getPlayerByChairID(msgPlayer.chairID);
                if (player === null) {
                    room.createMyPlayer(msgPlayer);
                } else if (player.chairID !== msgPlayer.chairID) {
                    room.removePlayer(player.userID);
                    player.unbindView();
                    room.createMyPlayer(msgPlayer);
                }
                break;
            }
        }
        const me = <PlayerA>room.getMyPlayer();
        const myOldState = me.state;
        //更新，或者创建其他player
        for (const msgPlayer of msgPlayers) {
            const player = <PlayerA>room.getPlayerByChairID(msgPlayer.chairID);
            if (player === null) {
                room.createPlayerByInfo(msgPlayer);
                //有人进来或者更新，更新GPS
                if (updatePlayer === 0) {
                    updatePlayer = 1;
                }
            } else {
                player.updateByPlayerInfo(msgPlayer);
            }
        }
        const roomStateEnum = proto.pokerface.RoomState;
        const playerStateEnum = proto.pokerface.PlayerState;
        //如果房间是等待状态，那么检查自己的状态是否已经是ready状态
        if (msgRoomUpdate.state === roomStateEnum.SRoomWaiting) {
            if (me.state !== playerStateEnum.PSReady) {
                // 显示准备按钮，以便玩家可以点击
                room.showOrHideReadyButton(true);
            } else if (myOldState !== playerStateEnum.PSReady) {
                // 并隐藏to ready按钮
                room.showOrHideReadyButton(false);
            }
        }

        //更新房间界面
        room.onUpdateStatus(msgRoomUpdate.state);

        saveScore(room, msgRoomUpdate);
        //更新用户状态到视图
        const ps = room.getPlayers();
        Object.keys(ps).forEach((key: string) => {
            const p = <PlayerA>ps[key];
            const onUpdate = p.playerView.onUpdateStatus[p.state];
            onUpdate(room.state);
            //显示分数
            // player.playerView:setCurScore()
            //显示房主
            p.playerView.showOwner();
        });
    };
}
