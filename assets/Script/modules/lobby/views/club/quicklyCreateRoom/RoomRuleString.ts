import { Logger } from "../../../lcore/LCoreExports";

/**
 * 获取房间规则
 */
export namespace RoomRuleString {

    const rulesKeys = [
        "doubleScoreWhenContinuousBanker",
        "doubleScoreWhenZuoYuanZi",
        "doubleScoreWhenSelfDrawn",

        "noWind",
        "afterKongChuckerPayForAll",
        "afterKongX2",

        "finalDrawX2",
        "sevenPairX2",
        "greatSevenPairX4",

        "allWindX2",
        "pureSameX2",
        "pongpongX2",

        "heavenX5",
        "thirteenOrphanX10"
    ];

    const baseRuleKeys = [
        "roomType",
        "handNum",
        "payType",
        "playerNumAcquired",
        "fengDingType",
        "dunziPointType",
        "trimType",
        "HorseNumberType",
        "baseScoreType"
    ];

    const rules: { [key: string]: string } = {
        ["doubleScoreWhenContinuousBanker"]: "连庄加分",
        ["doubleScoreWhenZuoYuanZi"]: "坐园子",
        ["doubleScoreWhenSelfDrawn"]: "自摸加分",

        ["noWind"]: "去风牌", // 去风牌
        ["afterKongChuckerPayForAll"]: "放杠杠爆包三家", // 放杠杠爆后全包
        ["afterKongX2"]: "杠爆2倍", // 杠爆双倍

        ["finalDrawX2"]: "海底捞月2倍", // 海底捞双倍
        ["sevenPairX2"]: "七对子2倍", // 小七对双倍
        ["greatSevenPairX4"]: "豪华七对子4倍", // 大七对4倍

        ["allWindX2"]: "全风子2倍", // 全风牌双倍
        ["pureSameX2"]: "清一色2倍", // 清一色双倍
        ["pongpongX2"]: "碰碰胡2倍", // 碰碰胡双倍

        ["heavenX5"]: "天胡5倍", // 天胡5倍
        ["thirteenOrphanX10"]: "13幺10倍" // 十三幺10倍
    };

    const baseRulesName: { [key: string]: string } = {
        ["roomType"]: "游戏  : ",
        ["handNum"]: "局数  : ",
        ["payType"]: "支付方式  : ",
        ["playerNumAcquired"]: "人数  : ",
        ["fengDingType"]: "封顶  : ",
        ["dunziPointType"]: "墩子  : ",
        ["trimType"]: "封顶  : ",
        ["HorseNumberType"]: "选马  : ",
        ["baseScoreType"]: "底分  : "

    };

    const baseRules: { [roomType: number]: { [key: string]: { [opting: number]: string } } } = {

        [1]: {
            ["roomType"]: {
                [1]: "大丰麻将",
                [8]: "关张",
                [21]: "湛江麻将"
            },
            ["handNum"]: {
                [4]: "4局",
                [8]: "8局",
                [16]: "16局",
                [32]: "36局"
            },
            ["payType"]: {
                [0]: "房主支付",
                [1]: "AA支付"
            },
            ["playerNumAcquired"]: {
                [2]: "2人",
                [3]: "3人",
                [4]: "4人"
            },
            ["fengDingType"]: {
                [0]: "20/40",
                [1]: "30/60",
                [2]: "50/100/150",
                [3]: "200/200/300"
            },
            ["dunziPointType"]: {
                [0]: "1分2分",
                [1]: "10分/20分/30分"
            }
        },
        [8]: {
            ["roomType"]: {
                [1]: "大丰麻将",
                [8]: "关张",
                [21]: "湛江麻将"
            },
            ["playerNumAcquired"]: {
                [2]: "2人",
                [3]: "3人",
                [4]: "4人"
            },
            ["payType"]: {
                [0]: "房主支付",
                [1]: "AA支付"
            },
            ["handNum"]: {
                [4]: "4局",
                [8]: "8局",
                [16]: "16局",
                [32]: "36局"
            }
        },
        [21]: {
            ["roomType"]: {
                [1]: "大丰麻将",
                [8]: "关张",
                [21]: "湛江麻将"
            },
            ["handNum"]: {
                [4]: "4局",
                [8]: "8局",
                [16]: "16局",
                [32]: "36局"
            },
            ["payType"]: {
                [0]: "房主支付",
                [1]: "AA支付"
            },
            ["playerNumAcquired"]: {
                [2]: "2人",
                [3]: "3人",
                [4]: "4人"
            },
            ["trimType"]: {
                [0]: "不封顶",
                [1]: "8倍",
                [2]: "16倍"
            },
            ["HorseNumberType"]: {
                [0]: "4马",
                [1]: "6马",
                [2]: "8马",
                [3]: "12马"
            },
            ["baseScoreType"]: {
                [0]: "1分",
                [1]: "2分",
                [2]: "5分",
                [3]: "10分"
            }
        }

    };

    const getBaseRules = (roomType: number, key: string, value: number): string => {
        //
        return baseRules[roomType][key][value];

    };

    const getRule = (key: string, value: boolean): string => {
        //
        let str = ``;

        if (value === true) {
            str = rules[key];
        }

        return str;
    };

    /**
     * 获取玩法规则
     */
    export const getRoomRuleStr = (roomConfig: string): string => {
        let str = ``;
        const config = <{ [key: string]: boolean | number }>JSON.parse(roomConfig);

        try {
            //
            const roomType = <number>config[`roomType`];

            for (const key of baseRuleKeys) {
                const value = <number>config[key];

                const baseRuleName = baseRulesName[key];

                if (value !== undefined && value !== null && baseRuleName !== undefined) {
                    str = `${str}${baseRuleName}${getBaseRules(roomType, key, value)}\r\n`;
                }

            }
            str = `${str}玩法:`;
            for (const key of rulesKeys) {
                const value = <boolean>config[key];

                if (value !== undefined && value !== null) {
                    str = `${str}  ${getRule(key, value)}`;
                }

            }

        } catch (error) {
            Logger.error(error);
        } finally {
            //
        }

        return str;
    };

}
