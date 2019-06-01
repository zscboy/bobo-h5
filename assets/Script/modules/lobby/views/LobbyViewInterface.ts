import { proto } from "../proto/protoLobby";

/**
 * 大厅View的接口
 */
export interface LobbyViewInterface {
    on<T extends Function>(eventName: string, callback: T, target?: object): T ;
    off(eventName: string, callback: Function): void ;
    dispatchMessage(msg: proto.lobby.LobbyMessage): void;
}
