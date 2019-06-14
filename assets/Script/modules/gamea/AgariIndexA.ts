import { Logger } from "../lobby/lcore/LCoreExports";
import { proto } from "./proto/protoGameA";
const pokerface = proto.pokerface;
const pokerfacerf = proto.prunfast;
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
    //转换为MsgCardHand，如果转换失败，返回nil
    // export const agariConvertMsgCardHand = (hai: number[]): number => {
    //     const key = calcKey(hai);
    //     const agari = agariTable[key];

    //     return artId;
    // };
    //判断当前的手牌是否大于上一手牌
    export const agariGreatThan = (prevCardHand: proto.pokerface.IMsgCardHand, current: proto.pokerface.IMsgCardHand): boolean => {
        //如果当前的是炸弹
        if (current.cardHandType === pokerfacerf.CardHandType.Bomb) {
            if (prevCardHand.cardHandType !== pokerfacerf.CardHandType.Bomb) {
                return true;
            }

            // 上一手也是炸弹，则比较炸弹牌的大小，大丰关张不存在多于4个牌的炸弹
            return Math.floor(current.cards[1] / 4) > Math.floor(prevCardHand.cards[1] / 4);
        }
        //如果上一手牌是炸弹
        if (prevCardHand.cardHandType === pokerfacerf.CardHandType.Bomb) {
            return false;
        }
        //必须类型匹配
        if (prevCardHand.cardHandType !== current.cardHandType) {
            return false;
        }
        //张数匹配
        if (prevCardHand.cards.length !== current.cards.length) {
            return false;
        }
        //单张时，2是最大的
        if (prevCardHand.cardHandType === pokerfacerf.CardHandType.Single) {
            if (Math.floor(prevCardHand.cards[1] / 4) === 0) {
                return false;
            }
            if (Math.floor(current.cards[1] / 4) === 0) {
                return true;
            }
        }

        //现在只比较最大牌的大小
        return Math.floor(current.cards[1] / 4) > Math.floor(prevCardHand.cards[1] / 4);
    };
}
