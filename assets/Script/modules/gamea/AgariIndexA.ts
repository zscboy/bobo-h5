import { Logger } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/protoGameA";

const pokerface = proto.pokerface;

const indexMap: { [key: number]: number } = {
    [pokerface.CardID.R2H]: 0, //H 红桃
    [pokerface.CardID.R2D]: 1, //D 方块
    [pokerface.CardID.R2C]: 2, //C 梅花
    [pokerface.CardID.R2S]: 3, //S 黑桃
    [pokerface.CardID.R3H]: 4,
    [pokerface.CardID.R3D]: 5,
    [pokerface.CardID.R3C]: 6,
    [pokerface.CardID.R3S]: 7,
    [pokerface.CardID.R4H]: 8,
    [pokerface.CardID.R4D]: 9,
    [pokerface.CardID.R4C]: 10,
    [pokerface.CardID.R4S]: 11,
    [pokerface.CardID.R5H]: 12,
    [pokerface.CardID.R5D]: 13,
    [pokerface.CardID.R5C]: 14,
    [pokerface.CardID.R5S]: 15,
    [pokerface.CardID.R6H]: 16,
    [pokerface.CardID.R6D]: 17,
    [pokerface.CardID.R6C]: 18,
    [pokerface.CardID.R6S]: 19,
    [pokerface.CardID.R7H]: 20,
    [pokerface.CardID.R7D]: 21,
    [pokerface.CardID.R7C]: 22,
    [pokerface.CardID.R7S]: 23,
    [pokerface.CardID.R8H]: 24,
    [pokerface.CardID.R8D]: 25,
    [pokerface.CardID.R8C]: 26,
    [pokerface.CardID.R8S]: 27,
    [pokerface.CardID.R9H]: 28,
    [pokerface.CardID.R9D]: 29,
    [pokerface.CardID.R9C]: 30,
    [pokerface.CardID.R9S]: 31,
    [pokerface.CardID.R10H]: 32,
    [pokerface.CardID.R10D]: 33,
    [pokerface.CardID.R10C]: 34,
    [pokerface.CardID.R10S]: 35,
    [pokerface.CardID.JH]: 36,
    [pokerface.CardID.JD]: 37,
    [pokerface.CardID.JC]: 38,
    [pokerface.CardID.JS]: 39,
    [pokerface.CardID.QH]: 40,
    [pokerface.CardID.QD]: 41,
    [pokerface.CardID.QC]: 42,
    [pokerface.CardID.QS]: 43,
    [pokerface.CardID.KH]: 44,
    [pokerface.CardID.KD]: 45,
    [pokerface.CardID.KC]: 46,
    [pokerface.CardID.KS]: 47,
    [pokerface.CardID.AH]: 48,
    [pokerface.CardID.AD]: 49,
    [pokerface.CardID.AC]: 50,
    [pokerface.CardID.AS]: 51,
    [pokerface.CardID.JOB]: 52,
    [pokerface.CardID.JOR]: 53,
    [pokerface.CardID.CARDMAX]: 54
};

/**
 * 牌id 跟 图片名映射
 */
export namespace AgariIndexA {
    const slots: number[] = [];
    for (let i = 0; i < pokerface.CardID.CARDMAX; i++) {
        slots.push(0);
    }

    const agariTable: { [key: number]: number } = {
        [0x423A35C7]: 0xA0A01,
        [0x14D]: 0x30908,
        [0x8235]: 0x50F08,
        [0x4]: 0x402,
        [0x1]: 0x103,
        [0x2]: 0x204,
        [0x20]: 0x507,
        [0x10F447]: 0x70701,
        [0xDE]: 0x20405,
        [0xCFA]: 0x20A09,
        [0x21]: 0x20608,
        [0xD05]: 0x40C08,
        [0xA98AC7]: 0x80801,
        [0x69F6BC7]: 0x90901,
        [0x16]: 0x20605,
        [0x8AE]: 0x30605,
        [0x56CE]: 0x40805,
        [0x3640E]: 0x50A05,
        [0x21E88E]: 0x60C05,
        [0x153158E]: 0x70E05,
        [0x3]: 0x306,
        [0x2B67]: 0x50501,
        [0x1B207]: 0x60601,
        [0x2964619C7]: 0xB0B01,
        [0x19DEBD01C7]: 0xC0C01,
        [0x515A6]: 0x30F09
    };

    // let slots: number[] = [];
    //克隆table
    // const stupidTableClone = (src: number[]): number[] => {
    //     const newX: number[] = [];
    //     for (const v of src) {
    //         newX.push(v);
    //     }

    //     return newX;
    // };
    //合并两个数组
    // const stupidTableAddRange = (first: number[], second: number[]): number[] => {
    //     let dst: number[] = [];
    //     if (first !== undefined && first !== null) {
    //         dst = first;
    //     }
    //     if (second !== undefined && second !== null) {
    //         for (const v of second) {
    //             dst.push(v);
    //         }
    //     }

    //     return dst;
    // };
    //重置slots
    // const resetSlots = (hai: number[]): void => {
    //     slots = [];
    //     for (let i = 1; i <= 14; i++) {
    //         slots[i] = 0;
    //     }
    //     for (const v of hai) {
    //         const idx = Math.floor(v / 4);
    //         const h = slots[idx + 1];
    //         slots[idx + 1] = h + 1;
    //     }
    // };
    //计算牌组的key
    // const calcKey = (hai: number[]): number => {
    //     resetSlots(hai);
    //     let key = 0;
    //     for (let i = 1; i <= 14; i++) {
    //         let s = slots[i];
    //         if (s > 0) {
    //             s = s << ((i - 1) * 3);
    //             key = key | s;
    //         }
    //     }

    //     return key;
    // };

    export const tileId2ArtId = (tileID: number): number => {
        const artId = indexMap[tileID];
        if (artId == null) {
            Logger.debug(`no art id for tile:${tileID}`);
            throw Error(`no art id for tile:${tileID}`);
        }

        return artId;
    };

    const calcKey = (hai: number[]): number => {
        const slotLength = slots.length;
        for (let i = 0; i < slotLength; i++) {
            slots[i] = 0;
        }

        const haiLength = hai.length;
        for (let i = 0; i < haiLength; i++) {
            const h = hai[i];
            slots[h / 4]++;
        }

        for (let i = 0; i < slotLength; i++) {
            if (slots[i] > 4) {
                throw Error(`card type great than 4,card:${i}`);
            }
        }

        // 排序，由小到大升序
        slots.sort((a, b) => a - b);

        let key = 0;
        for (let i = slotLength - 1; i >= 0; i--) {
            if (slots[i] === 0) {
                break;
            }

            key = key * 10 + (slots[i]);
        }

        for (let i = 0; i < slotLength; i++) {
            slots[i] = 0;
        }

        for (let i = 0; i < haiLength; i++) {
            const h = hai[i];
            slots[h / 4]++;
        }

        return key;
    };

    const agariFlushVerify = (ct: proto.prunfast.CardHandType, flushLength: number): boolean => {
        let flushElmentCount = 0;
        switch (ct) {
            case proto.prunfast.CardHandType.Flush:
                flushElmentCount = 1;
                break;
            case proto.prunfast.CardHandType.Pair2X:
                flushElmentCount = 2;
                break;
            case proto.prunfast.CardHandType.Triplet2X:
            case proto.prunfast.CardHandType.Triplet2X2Pair:
                flushElmentCount = 3;
                break;
            default:
        }

        if (flushElmentCount === 0) {
            // 不是顺子类型
            return true;
        }

        let flushBegin = 0;

        const slotLength = slots.length;
        // 跳过2
        for (let i = 1; i < slotLength; i++) {
            if (slots[i] === flushElmentCount) {
                flushBegin = i;
                break;
            }
        }

        let flushLengthVerify = 1;
        for (let i = flushBegin + 1; i < slotLength; i++) {
            if (slots[i] !== flushElmentCount) {
                break;
            }
            flushLengthVerify++;
        }

        return flushLengthVerify >= flushLength;
    };

    //转换为MsgCardHand，如果转换失败，返回nil
    export const agariConvertMsgCardHand = (hai: number[]): proto.pokerface.MsgCardHand => {
        const key = calcKey(hai);
        if (agariTable[key] === undefined) {
            return null;
        }

        const agari = agariTable[key];
        const ct = <proto.prunfast.CardHandType>(agari & 0xFF);

        const msgCardhand = new pokerface.MsgCardHand();
        msgCardhand.cardHandType = <number>ct;

        // 排序，让大的牌在前面
        hai.sort((a, b) => b - a);

        // 如果是顺子类型则需要检查
        const flushLength = ((agari >> 16) & 0xFF);
        if (flushLength > 0) {
            if (!agariFlushVerify(ct, flushLength)) {
                return null;
            }
        }

        let cardsNew: number[] = [];
        const haiLength = hai.length;
        switch (ct) {
            case proto.prunfast.CardHandType.TripletPair:
            case proto.prunfast.CardHandType.Triplet2X2Pair:
                // 确保3张在前面，对子在后面
                for (let i = 0; i < haiLength; i++) {
                    const h = hai[i];
                    if (slots[h / 4] === 3) {
                        cardsNew.push(h);
                    }
                }
                for (let i = 0; i < haiLength; i++) {
                    const h = hai[i];
                    if (slots[h / 4] !== 3) {
                        cardsNew.push(h);
                    }
                }
                break;
            default:
                cardsNew = cardsNew.concat(hai);
        }

        msgCardhand.cards = cardsNew;

        if (ct === proto.prunfast.CardHandType.Triplet) {
            if (Math.floor(msgCardhand.cards[0] / 4) === Math.floor(proto.pokerface.CardID.R3H / 4)) {
                // 如果是3个3，而且不包含红桃3，则把牌组改为炸弹，而不是三张
                let foundR3H = false;
                for (const c of msgCardhand.cards) {
                    if (Number(c) === proto.pokerface.CardID.R3H) {
                        foundR3H = true;
                        break;
                    }
                }

                if (!foundR3H) {
                    msgCardhand.cardHandType = proto.prunfast.CardHandType.Bomb;
                }
            } else if (Math.floor(msgCardhand.cards[0] / 4) === Math.floor(proto.pokerface.CardID.AH / 4)) {
                // 3张A也是炸弹
                msgCardhand.cardHandType = proto.prunfast.CardHandType.Bomb;
            }
        }

        return msgCardhand;
    };

    //判断当前的手牌是否大于上一手牌
    export const agariGreatThan = (prevCardHand: proto.pokerface.IMsgCardHand, current: proto.pokerface.IMsgCardHand): boolean => {
        // 如果当前的是炸弹
        if (current.cardHandType === proto.prunfast.CardHandType.Bomb) {
            // 上一手不是炸弹
            if (prevCardHand.cardHandType !== proto.prunfast.CardHandType.Bomb) {
                return true;
            }

            // 上一手也是炸弹，则比较炸弹牌的大小，大丰关张不存在多于4个牌的炸弹
            return current.cards[0] / 4 > prevCardHand.cards[0] / 4;
        }

        // 如果上一手牌是炸弹
        if (prevCardHand.cardHandType === proto.prunfast.CardHandType.Bomb) {
            return false;
        }

        // 必须类型匹配
        if (prevCardHand.cardHandType !== current.cardHandType) {
            return false;
        }

        // 张数匹配
        if (prevCardHand.cards.length !== current.cards.length) {
            return false;
        }

        // 单张时，2是最大的
        if (prevCardHand.cardHandType === proto.prunfast.CardHandType.Single) {
            if (prevCardHand.cards[0] / 4 === 0) {
                return false;

            }

            if (current.cards[0] / 4 === 0) {
                return true;
            }
        }

        // 现在只比较最大牌的大小
        return current.cards[0] / 4 > prevCardHand.cards[0] / 4;
    };
}
