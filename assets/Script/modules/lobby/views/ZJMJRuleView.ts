import { DataStore, Logger } from "../lcore/LCoreExports";

// import { proto } from "../proto/protoLobby";

const { ccclass } = cc._decorator;

interface NewRoomViewInterface {
    createRoom: Function;
    getView(): fgui.GComponent;
}

/**
 * ZJMJRuleView 湛江麻将规则页面
 */
@ccclass
export class ZJMJRuleView {
    private view: fgui.GComponent;
    private newRoomView: NewRoomViewInterface;

    private toggleRoundCounts: fgui.GButton[] = [];

    private togglePays: fgui.GButton[] = [];

    private togglePlayerNums: fgui.GButton[] = [];

    private toggleDifenTypes: fgui.GButton[] = [];

    private toggleXuanMaTypes: fgui.GButton[] = [];

    private toggleFengDingTypes: fgui.GButton[] = [];

    private toggleQFP: fgui.GButton;
    private toggleBSJ: fgui.GButton;
    private toggleG2B: fgui.GButton;

    private toggleLY2B: fgui.GButton;
    private toggleDZ2B: fgui.GButton;
    private toggleDZ4B: fgui.GButton;

    private toggleFZ2B: fgui.GButton;
    private toggleQYS2B: fgui.GButton;
    private togglePPH2B: fgui.GButton;

    private toggleTH5B: fgui.GButton;
    private toggle13Y10B: fgui.GButton;
    private toggleBMRKJ: fgui.GButton;

    private toggleJZHD: fgui.GButton;
    private toggleJTIP: fgui.GButton;

    private consumeText: fgui.GObject;
    private priceCfg: object = null;
    private recordKey: string = "ZJMJRule";

    private readonly rules: { [key: string]: string | number | boolean } = {
        ["roomType"]: 21, // 房间类型
        ["handNum"]: 8, // 局数
        ["payType"]: 0, // 支付类型
        ["playerNumAcquired"]: 4, // 人数
        ["payNum"]: 24, // 支付金额
        ["baseScoreType"]: 0, // 底分
        ["HorseNumberType"]: 0, // 选马

        ["trimType"]: 0, // 封顶类型

        ["noWind"]: true, // 没有风牌
        ["afterKongChuckerPayForAll"]: true, // 放杠杠爆后全包
        ["afterKongX2"]: true, // 杠爆 双倍

        ["finalDrawX2"]: true, // 海底捞双倍
        ["sevenPairX2"]: true, // 小七对双倍
        ["greatSevenPairX4"]: true, // 大七对4倍

        ["allWindX2"]: true, // 全风牌双倍
        ["pureSameX2"]: true, // 清一色双倍
        ["pongpongX2"]: true, // 碰碰胡双倍

        ["heavenX5"]: true, // 天胡5倍
        ["thirteenOrphanX10"]: true, // 十三幺10倍
        ["bmrkj"]: true, // 不满人开局

        ["jzhd"]: true, // 禁止互动
        ["jyip"]: true, // 禁止同IP

        //--游戏模块
        ["modName"]: "gameb"
    };

    public destroy(): void {
        this.saveRule();
    }

    public bindView(newRoomView: NewRoomViewInterface): void {
        const myNewRoomView = newRoomView.getView();

        this.view = myNewRoomView.getChild("zjmjRoom").asCom;
        this.newRoomView = newRoomView;

        this.initAllView();

        const createRoomBtn = this.view.getChild("createRoomButton");
        createRoomBtn.onClick(this.onCreateRoomBtnClick, this);
    }

    public updatePriceCfg(priceCfgs: { [key: string]: object }): void {
        if (priceCfgs !== null) {
            const roomType = this.rules[`roomType`];
            this.priceCfg = priceCfgs[`${roomType}`];
            Logger.debug(`zjmjRuleVIew.updateComsumer roomType:${roomType}, priceCfg:${JSON.stringify(this.priceCfg)}`);
        }

        this.updateComsumer();
    }

    private initRount(): void {
        // 局数
        this.toggleRoundCounts[0] = this.view.getChild("round8Button").asButton;
        this.toggleRoundCounts[1] = this.view.getChild("round16Button").asButton;

        this.toggleRoundCounts[0].getChild("title").text = "8局";
        this.toggleRoundCounts[1].getChild("title").text = "16局";

        this.toggleRoundCounts[0].onClick(this.updateComsumer, this);
        this.toggleRoundCounts[1].onClick(this.updateComsumer, this);
    }

    private initPay(): void {
        // 支付
        this.togglePays[0] = this.view.getChild("ownerPayButton").asButton;
        this.togglePays[1] = this.view.getChild("aapPayButton").asButton;

        this.togglePays[0].getChild("title").text = "房主支付";
        this.togglePays[1].getChild("title").text = "AA支付";

        this.togglePays[0].onClick(this.updateComsumer, this);
        this.togglePays[1].onClick(this.updateComsumer, this);
    }

    private initPlayerNums(): void {

        // 人数
        this.togglePlayerNums[0] = this.view.getChild("2Player").asButton;
        this.togglePlayerNums[1] = this.view.getChild("3Player").asButton;
        this.togglePlayerNums[2] = this.view.getChild("4Player").asButton;

        this.togglePlayerNums[0].getChild("title").text = "2人";
        this.togglePlayerNums[1].getChild("title").text = "3人";
        this.togglePlayerNums[2].getChild("title").text = "4人";

        this.togglePlayerNums[0].onClick(this.updateComsumer, this);
        this.togglePlayerNums[1].onClick(this.updateComsumer, this);
        this.togglePlayerNums[2].onClick(this.updateComsumer, this);
    }

    private initDifen(): void {

        // 底分
        this.toggleDifenTypes[0] = this.view.getChild("difen1").asButton;
        this.toggleDifenTypes[1] = this.view.getChild("difen2").asButton;
        this.toggleDifenTypes[2] = this.view.getChild("difen3").asButton;
        this.toggleDifenTypes[3] = this.view.getChild("difen4").asButton;

        this.toggleDifenTypes[0].getChild("title").text = "1分";
        this.toggleDifenTypes[1].getChild("title").text = "2分";
        this.toggleDifenTypes[2].getChild("title").text = "5分";
        this.toggleDifenTypes[3].getChild("title").text = "10分";
    }

    private initXuanMa(): void {
        // 选马
        this.toggleXuanMaTypes[0] = this.view.getChild("xuanma1").asButton;
        this.toggleXuanMaTypes[1] = this.view.getChild("xuanma2").asButton;
        this.toggleXuanMaTypes[2] = this.view.getChild("xuanma3").asButton;
        this.toggleXuanMaTypes[3] = this.view.getChild("xuanma4").asButton;

        this.toggleXuanMaTypes[0].getChild("title").text = "4马";
        this.toggleXuanMaTypes[1].getChild("title").text = "6马";
        this.toggleXuanMaTypes[2].getChild("title").text = "8马";
        this.toggleXuanMaTypes[3].getChild("title").text = "12马";
    }

    private initOtherRule(): void {
        this.toggleQFP = this.view.getChild("qufengpai").asButton;
        this.toggleBSJ = this.view.getChild("gangbao3jia").asButton;
        this.toggleG2B = this.view.getChild("gangl2bei").asButton;

        this.toggleLY2B = this.view.getChild("laoyueliangbei").asButton;
        this.toggleDZ2B = this.view.getChild("qiduizi2bei").asButton;
        this.toggleDZ4B = this.view.getChild("qiduizi4bei").asButton;

        this.toggleFZ2B = this.view.getChild("fengiz2bei").asButton;
        this.toggleQYS2B = this.view.getChild("qingyise2bei").asButton;
        this.togglePPH2B = this.view.getChild("pengpenghu2bei").asButton;

        this.toggleTH5B = this.view.getChild("tianhu5bei").asButton;
        this.toggle13Y10B = this.view.getChild("13yao10bei").asButton;
        this.toggleBMRKJ = this.view.getChild("bumanrenkaiju").asButton;

        this.toggleJZHD = this.view.getChild("jinyonghudong").asButton;
        this.toggleJTIP = this.view.getChild("jintongIP").asButton;

        // 设置文字
        this.toggleQFP.getChild("title").text = "去风牌";
        this.toggleBSJ.getChild("title").text = "放杠杠爆包三家";
        this.toggleG2B.getChild("title").text = "杠爆2倍";

        this.toggleLY2B.getChild("title").text = "海底捞月2倍";
        this.toggleDZ2B.getChild("title").text = "七对子2倍";
        this.toggleDZ4B.getChild("title").text = "豪华七对子4倍";

        this.toggleFZ2B.getChild("title").text = "全风子2倍";
        this.toggleQYS2B.getChild("title").text = "清一色2倍";
        this.togglePPH2B.getChild("title").text = "碰碰胡2倍";

        this.toggleTH5B.getChild("title").text = "天胡5倍";
        this.toggle13Y10B.getChild("title").text = "13幺10倍";
        this.toggleBMRKJ.getChild("title").text = "不满人开局";

        this.toggleJZHD.getChild("title").text = "禁用互动功能";
        this.toggleJTIP.getChild("title").text = "禁同IP";
    }

    private initFengding(): void {

        this.toggleFengDingTypes[0] = this.view.getChild("fengding1").asButton;
        this.toggleFengDingTypes[1] = this.view.getChild("fengding2").asButton;

        this.toggleFengDingTypes[0].getChild("title").text = "8倍";
        this.toggleFengDingTypes[1].getChild("title").text = "16倍";
    }

    private initAllView(): void {
        const consume = this.view.getChild("consumeCom").asCom;
        this.consumeText = consume.getChild("consumeText");
        this.consumeText.text = '0';

        this.initRount();
        this.initPay();
        this.initPlayerNums();
        this.initDifen();
        this.initXuanMa();
        this.initOtherRule();
        this.initFengding();

        if (DataStore.hasKey(this.recordKey)) {
            const jsonStr = DataStore.getString(this.recordKey, "");
            Logger.debug("jsnoStr:", jsonStr);
            if (jsonStr !== "") {
                try {
                    const config = <{ [key: string]: boolean | number }>JSON.parse(jsonStr);
                    this.toggleRoundCounts[<number>config[1]].selected = true;
                    this.togglePays[<number>config[2]].selected = true;
                    this.togglePlayerNums[<number>config[3]].selected = true;
                    this.toggleDifenTypes[<number>config[4]].selected = true;
                    this.toggleXuanMaTypes[<number>config[5]].selected = true;

                    this.toggleQFP.selected = <boolean>config[6];
                    this.toggleBSJ.selected = <boolean>config[7];
                    this.toggleG2B.selected = <boolean>config[8];

                    this.toggleLY2B.selected = <boolean>config[9];
                    this.toggleDZ2B.selected = <boolean>config[10];
                    this.toggleDZ4B.selected = <boolean>config[11];

                    this.toggleFZ2B.selected = <boolean>config[12];
                    this.toggleQYS2B.selected = <boolean>config[13];
                    this.togglePPH2B.selected = <boolean>config[14];

                    this.toggleTH5B.selected = <boolean>config[15];
                    this.toggle13Y10B.selected = <boolean>config[16];
                    this.toggleBMRKJ.selected = <boolean>config[17];

                    this.toggleJZHD.selected = <boolean>config[18];
                    this.toggleJTIP.selected = <boolean>config[19];

                    this.toggleFengDingTypes[<number>config[20]].selected = true;

                } catch (e) {
                    Logger.error("parse config error:", e);
                    // 如果解析不了，则清理数据
                    DataStore.setItem(this.recordKey, "");
                }
            }
        }
    }

    private getConfigTable(): { [key: string]: { [key: number]: number } } {
        return {
            ["playerNumAcquired"]: {
                [0]: 2,
                [1]: 3,
                [2]: 4
            },
            ["payNum"]: {
                [0]: 24,
                [1]: 36,
                [2]: 66
            },
            ["trimType"]: {
                [0]: 1,
                [1]: 2

            },
            ["HorseNumberType"]: {
                [0]: 0,
                [1]: 1,
                [2]: 2,
                [3]: 3
            },
            ["payType"]: {
                [0]: 0,
                [1]: 1
            },
            ["handNum"]: {
                [0]: 8,
                [1]: 16
            },
            ["baseScoreType"]: {
                [0]: 0,
                [1]: 1,
                [2]: 2,
                [3]: 3
            },
            ["neededDiamond"]: {
                [0]: 32,
                [1]: 48,
                [2]: 88
            },
            ["neededDiamond4ThreePlayers"]: {
                [0]: 24,
                [1]: 36,
                [2]: 66
            },
            ["neededDiamond4TwoPlayers"]: {
                [0]: 16,
                [1]: 24,
                [2]: 44
            }
        };
    }
    private getRules(): string {
        const configTable = this.getConfigTable();
        const rules = this.rules;

        const roundIndex = this.getToggleIndex(this.toggleRoundCounts);
        rules[`handNum`] = configTable[`handNum`][roundIndex];

        const payIndex = this.getToggleIndex(this.togglePays);
        rules[`payType`] = configTable[`payType`][payIndex];

        const playerNumIndex = this.getToggleIndex(this.togglePlayerNums);
        rules[`playerNumAcquired`] = configTable[`playerNumAcquired`][playerNumIndex];

        const difenIndex = this.getToggleIndex(this.toggleDifenTypes);
        rules[`baseScoreType`] = configTable[`baseScoreType`][difenIndex];

        const xuanMaIndex = this.getToggleIndex(this.toggleXuanMaTypes);
        rules[`HorseNumberType`] = configTable[`HorseNumberType`][xuanMaIndex];

        const fengdingIndex = this.getToggleIndex(this.toggleFengDingTypes);
        rules[`trimType`] = configTable[`trimType`][fengdingIndex];

        rules[`noWind`] = this.toggleQFP.selected;
        rules[`afterKongChuckerPayForAll`] = this.toggleBSJ.selected;
        rules[`afterKongX2`] = this.toggleG2B.selected;

        rules[`finalDrawX2`] = this.toggleLY2B.selected;
        rules[`sevenPairX2`] = this.toggleDZ2B.selected;
        rules[`greatSevenPairX4`] = this.toggleDZ4B.selected;

        rules[`allWindX2`] = this.toggleFZ2B.selected;
        rules[`pureSameX2`] = this.toggleQYS2B.selected;
        rules[`pongpongX2`] = this.togglePPH2B.selected;

        rules[`heavenX5`] = this.toggleTH5B.selected;
        rules[`thirteenOrphanX10`] = this.toggle13Y10B.selected;
        rules[`bmrkj`] = this.toggleBMRKJ.selected;

        rules[`jzhd`] = this.toggleJZHD.selected;
        rules[`jyip`] = this.toggleJTIP.selected;

        return JSON.stringify(rules);
    }

    private getCost(payType: number, playerNum: number, handNum: number): number {
        // Logger.debug("payType:"..payType..", playerNum:"..playerNum..", handNum"..handNum)
        let key = `ownerPay:${playerNum}:${handNum}`;
        if (payType === 1) {
            key = `aaPay:${playerNum}:${handNum}`;
        }

        if (this.priceCfg === undefined) {
            Logger.debug("this.priceCfg === undefine");

            return 0;
        }

        Logger.debug(`key: ${key}`);

        const priceCfg = <{ [key: string]: object }>this.priceCfg;
        const activityPriceCfg = <{ [key: string]: object }>priceCfg.activityPriceCfg;
        if (activityPriceCfg !== null) {
            const discountCfg = <{ [key: string]: number }>activityPriceCfg.discountCfg;

            return discountCfg[key];
        }

        const originalPriceCfg = <{ [key: string]: number }>priceCfg.originalPriceCfg;
        if (originalPriceCfg !== null) {
            return originalPriceCfg[key];
        }

        return 0;
    }

    private onCreateRoomBtnClick(): void {
        this.newRoomView.createRoom(this.getRules());
    }

    private getToggleIndex(toggles: fgui.GButton[]): number {
        const len = toggles.length;
        for (let i = 0; i < len; i++) {
            const toggle = toggles[i];
            if (toggle.selected) {
                return i;
            }
        }

        return 0;
    }

    private updateComsumer(): void {
        const configTable = this.getConfigTable();

        const payIndex = this.getToggleIndex(this.togglePays);
        const payType = configTable[`payType`][payIndex];

        const roundIndex = this.getToggleIndex(this.toggleRoundCounts);
        const handNum = configTable[`handNum`][roundIndex];

        const playerNumIndex = this.getToggleIndex(this.togglePlayerNums);
        const playerNumAcquired = configTable[`playerNumAcquired`][playerNumIndex];

        const cost = this.getCost(payType, playerNumAcquired, handNum);
        this.consumeText.text = `${cost}`;

    }

    private saveRule(): void {
        Logger.debug("zjmjRuleVIew.saveRule()");
        const key: { [key: number]: boolean | number } = {};
        // 局数
        key[1] = this.getToggleIndex(this.toggleRoundCounts);
        // 支付
        key[2] = this.getToggleIndex(this.togglePays);
        // 人数
        key[3] = this.getToggleIndex(this.togglePlayerNums);
        // 封顶
        key[4] = this.getToggleIndex(this.toggleDifenTypes);
        // 墩子
        key[5] = this.getToggleIndex(this.toggleXuanMaTypes);

        key[6] = this.toggleQFP.selected;
        key[7] = this.toggleBSJ.selected;
        key[8] = this.toggleG2B.selected;

        key[9] = this.toggleLY2B.selected;
        key[10] = this.toggleDZ2B.selected;
        key[11] = this.toggleDZ4B.selected;

        key[12] = this.toggleFZ2B.selected;
        key[13] = this.toggleQYS2B.selected;
        key[14] = this.togglePPH2B.selected;

        key[15] = this.toggleTH5B.selected;
        key[16] = this.toggle13Y10B.selected;
        key[17] = this.toggleBMRKJ.selected;

        key[18] = this.toggleJZHD.selected;
        key[19] = this.toggleJTIP.selected;

        key[20] = this.getToggleIndex(this.toggleFengDingTypes);

        const jsonString = JSON.stringify(key);
        DataStore.setItem(this.recordKey, jsonString);
    }

}
