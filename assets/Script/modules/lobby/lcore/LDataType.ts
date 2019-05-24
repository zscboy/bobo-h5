/**
 * 一些公用数据类型
 */

/**
 * 当前用户信息
 */
export class UserInfo {
    public userID: string;
}

/**
 * 房间信息
 */
export class RoomInfo {
    public roomID: string;
}

/**
 * 大厅模块
 */
export interface LobbyModule {
    returnFromGame(): void;
}

/**
 * 游戏启动参数
 */
export interface GameModuleLaunchArgs {
    lm: LobbyModule;
    userInfo: UserInfo;
    roomInfo: RoomInfo;
    uuid: string;
    jsonString: string;
}

/**
 * 游戏模块
 */
export interface GameModule extends cc.Component {
    launch(args: GameModuleLaunchArgs): void;
}
