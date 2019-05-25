/**
 * 一些接口，防止循环引用
 */
export interface RoomInterface {
    isDestroy: boolean;
    quit: Function;
}
