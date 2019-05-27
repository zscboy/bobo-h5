import { proto } from "../proto/protoLobby";
/**
 * view接口
 */
export interface ViewInterface  {
    /**
     * 进入游戏
     * @param roomInfo 房间信息
     */
    enterGame(roomInfo: proto.lobby.IRoomInfo): void;
}
