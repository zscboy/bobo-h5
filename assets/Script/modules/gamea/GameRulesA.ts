
import { Logger } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/protoGameA";

const ROOM_TYPE = {
    DaFeng: 1,
    ZhanJiang: 21,
    GuangZhang: 8
};

//大丰小胡
const DF_MINI_WIN_TYPE: { [key: number]: string } = {
};

//湛江大胡
const ZJ_GREAT_WIN_TYPE: { [key: number]: string } = {
};

//大丰大胡
const DF_GREAT_WIN_TYPE: { [key: number]: string } = {
};

//游戏小胡类型
const GAME_MINI_WIN_TYPE: { [key: number]: { [key: number]: string } } = {
    [ROOM_TYPE.DaFeng]: DF_MINI_WIN_TYPE
};
//游戏大胡类型
const GAME_GREAT_WIN_TYPE: { [key: number]: { [key: number]: string } } = {
    [ROOM_TYPE.DaFeng]: DF_GREAT_WIN_TYPE,
    [ROOM_TYPE.ZhanJiang]: ZJ_GREAT_WIN_TYPE
};

//specialScore 得分类型
const SPECIAL_SCORE: { [key: number]: string } = {
    [ROOM_TYPE.DaFeng]: "墩子分+",
    [ROOM_TYPE.ZhanJiang]: "中马数"
};
//isContinuousBanker 得分类型
const IS_CONTINUOUS_BANKER: { [key: number]: string } = {
    [ROOM_TYPE.DaFeng]: "连庄x"
};
//fakeWinScore 得分类型
const FAKE_WIN_SCORE: { [key: number]: string } = {
    [ROOM_TYPE.DaFeng]: "包牌",
    [ROOM_TYPE.ZhanJiang]: "杠分"
};
//fakeList 得分类型
const FAKE_LIST: { [key: number]: string } = {
    [ROOM_TYPE.DaFeng]: "报听"
};
//fakeList 是否显示出来
const FAKE_LIST_BOOLEAN: { [key: number]: boolean } = {
    [ROOM_TYPE.ZhanJiang]: true
};
//大胡附加得分 trimGreatWinPoints
const TRIM_GREAT_WIN_POINTS: { [key: number]: string } = {
    [ROOM_TYPE.DaFeng]: "辣子数 +"
};
//大胡附加得分 baseWinScore
const BASE_WIN_SCORE: { [key: number]: string } = {
    [ROOM_TYPE.DaFeng]: "基本分"
};

//游戏名字
const GAME_NAME: { [key: number]: string } = {
    [ROOM_TYPE.DaFeng]: "大丰麻将",
    [ROOM_TYPE.ZhanJiang]: "湛江麻将",
    [ROOM_TYPE.GuangZhang]: "大丰关张"
};
/**
 *  游戏差异类
 */
export namespace GameRulesA {
    //是否要把FakeList 显示出来 （湛江麻将的马牌就需要显示）
    export const haveFakeListOfTitles = (gameType: number): boolean => {
        const boo = FAKE_LIST_BOOLEAN[gameType];
        if (boo !== undefined) {
            return boo;
        }

        return false;
    };
    //获取fakeList字符串
    export const getFakeListStrs = (gameType: number, playerScores: proto.pokerface.IMsgPlayerScore): string => {
        if (playerScores.fakeList !== undefined && playerScores.fakeList.length > 0) {
            const str = FAKE_LIST[gameType];
            if (str !== undefined) {
                return str;
            }
        }

        return "";
    };
    //获取大胡类型字符串
    export const getGreatWinStrs = (gameType: number, greatWin: proto.pokerface.IMsgPlayerScoreGreatWin): string => {
        if (greatWin === undefined || greatWin === null) {
            return "";
        }
        let textScore = "";
        const gt = greatWin.greatWinType;
        if (gt === undefined || gt === null) {
            return textScore;
        }
        const wType = GAME_GREAT_WIN_TYPE[gameType];
        for (let i = 1; i <= 262144; i *= 2) {
            if ((gt & i) !== 0) {
                const str = wType[i];
                if (str !== undefined) {
                    textScore = `${textScore}${str} `;
                } else {
                    Logger.error("not find wType : ", i);
                }
            }
        }

        return textScore;
    };

    //获取小胡类型字符串
    export const getMiniWinStrs = (gameType: number, miniWin: proto.pokerface.IMsgPlayerScoreMiniWin): string => {
        if (miniWin === undefined || miniWin === null) {
            return "";
        }
        const gt = miniWin.miniWinType;
        if (gt === undefined || gt === null || gt === 0) {
            return "小胡";
        }
        let textScore = "";
        const wType = GAME_MINI_WIN_TYPE[gameType];
        for (let i = 1; i <= 32; i *= 2) {
            if ((gt & i) !== 0) {
                const str = wType[i];
                if (str !== undefined) {
                    textScore = `${textScore}${str} `;
                } else {
                    Logger.error("not find wType : ", i);
                }
            }
        }
        //大丰
        if (miniWin.miniMultiple !== null && miniWin.miniMultiple > 0) {
            textScore = `${textScore}倍数${miniWin.miniMultiple / 10}  `;
        }

        return textScore;
    };

    //获取得分类型String
    export const getScoreStrs = (gameType: number, playerScores: proto.pokerface.IMsgPlayerScore): string => {
        let textScore = "";
        if (playerScores.specialScore !== undefined && playerScores.specialScore > 0) {
            const str = SPECIAL_SCORE[gameType];
            if (str !== undefined) {
                textScore = `${str}${playerScores.specialScore} `;
            }
        }
        if (playerScores.fakeWinScore !== undefined && playerScores.fakeWinScore !== 0) {
            const str = FAKE_WIN_SCORE[gameType];
            if (str !== undefined) {
                textScore = `${textScore}${str}${playerScores.fakeWinScore}  `;
            }
        }
        if (playerScores.isContinuousBanker !== undefined && playerScores.isContinuousBanker) {
            //TODO 这里还需要整理一下
            const str = IS_CONTINUOUS_BANKER[gameType];
            if (str !== undefined) {
                textScore = `${textScore}${str}${playerScores.continuousBankerMultiple / 10}  `;
            }
        }

        return textScore;
    };
    //获取大胡附加得分类型String
    export const getGreatWinScoreStrs = (gameType: number, greatWin: proto.pokerface.IMsgPlayerScoreGreatWin): string => {
        let textScore = "";
        if (greatWin.trimGreatWinPoints !== undefined && greatWin.trimGreatWinPoints > 0) {
            const str = TRIM_GREAT_WIN_POINTS[gameType];
            if (str !== undefined) {
                textScore = `${str}${greatWin.trimGreatWinPoints / 10}  `;
            }
        }
        if (greatWin.baseWinScore !== undefined && greatWin.baseWinScore > 0) {
            const str = BASE_WIN_SCORE[gameType];
            if (str !== undefined) {
                textScore = `${textScore}${str}${greatWin.baseWinScore}  `;
            }
        }

        return textScore;
    };
    //是否有花牌
    export const haveFlower = (gameType: number): boolean => {
        return gameType === ROOM_TYPE.DaFeng;
    };
    //是否有家家庄
    export const haveJiaJiaZhuang = (gameType: number): boolean => {
        return gameType === ROOM_TYPE.DaFeng;
    };
    //是否有风圈
    export const haveRoundMask = (gameType: number): boolean => {
        return gameType === ROOM_TYPE.DaFeng;
    };

    //获取游戏名字
    export const gameName = (gameType: number): string => {
        return GAME_NAME[gameType];
    };
}
