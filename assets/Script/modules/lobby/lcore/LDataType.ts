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
    public roomNumber: string;
}

export interface GResLoader {
    fguiAddPackage(packageName: string): void;
    loadResDir(dir: string, onCompleted: (error: Error) => void): void;

}

/**
 * 大厅模块
 */
export interface LobbyModuleInterface {
    loader: GResLoader;
    returnFromGame(): void;
    switchToGame(args: GameModuleLaunchArgs, moduleName: string): void;
}

/**
 * 游戏启动参数
 */
export interface GameModuleLaunchArgs {
    userInfo: UserInfo;
    roomInfo: RoomInfo;
    uuid: string;
    jsonString: string;
    loader?: GResLoader;
    lm?: LobbyModuleInterface;
}

/**
 * 游戏模块
 */
export interface GameModuleInterface extends cc.Component {
    resLoader: GResLoader;
    launch(args: GameModuleLaunchArgs): void;
}
