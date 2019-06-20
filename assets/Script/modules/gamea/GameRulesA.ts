import { Enum } from "../lobby/lcore/LCoreExports";

/**
 *  游戏差异类
 */
export namespace GameRulesA {
    //获取游戏名字
    export const gameName = (gameType: number): string => {
        return Enum.GAME_NAME[gameType];
    };
}
