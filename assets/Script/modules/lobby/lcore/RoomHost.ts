import { AnimationMgr } from "./AnimationMgr";
import { GResLoader, UserInfo } from "./LDataType";

/**
 * room对外接口
 */
export interface RoomHost {
    timeElapsed: number;
    animationMgr: AnimationMgr;
    quit: Function;
    unblockNormal: Function;
    blockNormal: Function;
    user: UserInfo;
    component: cc.Component;
    loader: GResLoader;
    sendBinary(buf: ByteBuffer): void;
    getLobbyModuleLoader(): GResLoader;
}
