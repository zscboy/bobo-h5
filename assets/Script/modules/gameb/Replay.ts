import { Logger } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/protoGame";
import { RoomHost } from "./RoomInterfaces";

/**
 * 回播
 */
export class Replay {
    public readonly host: RoomHost;
    public readonly msgHandRecord: proto.mahjong.SRMsgHandRecorder;

    public constructor(host: RoomHost, msgHandRecord: proto.mahjong.SRMsgHandRecorder) {
        this.host = host;
        this.msgHandRecord = msgHandRecord;
    }

    public gogogo(): void {
        Logger.debug("gogogogo");
        //
        // const room = this.host.room;
        // const players = this.msgHandRecord.players;
        // players.forEach((p) => {
        //     Logger.debug("p.userID:", p.userID);
        //     if (p.userID === this.host.user.userID) {
        //         room.createMyPlayer(p);
        //     }
        // });
    }
}
