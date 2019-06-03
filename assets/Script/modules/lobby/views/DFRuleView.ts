import { DataStore, Logger } from "../lcore/LCoreExports";

// import { proto } from "../proto/protoLobby";

const { ccclass } = cc._decorator;

interface NewRoomViewInterface {
    createRoom: Function;
    getView(): fgui.GComponent;
}

/**
 * LoginView 登录界面
 */
@ccclass
export class DFRuleView {
    private view: fgui.GComponent;
    private newRoomView: NewRoomViewInterface;

    // private consumeText: fgui.GObject;

    private toggleRoundCounts: fgui.GButton[] = [];

    private togglePays: fgui.GButton[] = [];

    private togglePlayerNums: fgui.GButton[] = [];

    private toggleFengDingTypes: fgui.GButton[] = [];

    private toggleDunziPointTypes: fgui.GButton[] = [];

    private toggleZMJF: fgui.GButton;
    private toggleLZJF: fgui.GButton;
    private toggleJYZ: fgui.GButton;

    private consumeText: fgui.GObject;
    private priceCfg: object = null;
    private recordKey: string = "GZRule";

    private readonly rules: { [key: string]: string | number | boolean } = {
        ["roomType"]: 1,
        ["playerNumAcquired"]: 4,
        ["payNum"]: 24,
        ["payType"]: 0,
        ["handNum"]: 4,
        ["doubleScoreWhenSelfDrawn"]: true,
        ["doubleScoreWhenContinuousBanker"]: true,
        ["doubleScoreWhenZuoYuanZi"]: true,
        ["fengDingType"]: 0,
        ["dunziPointType"]: 0,
        //--游戏模块
        ["modName"]: "gameb"
    };

    public destroy(): void {
        this.saveRule();
    }

    public bindView(newRoomView: NewRoomViewInterface): void {
        const myNewRoomView = newRoomView.getView();

        this.view = myNewRoomView.getChild("damjRule").asCom;
        this.newRoomView = newRoomView;

        this.initAllView();

        const createRoomBtn = this.view.getChild("createRoomButton");
        createRoomBtn.onClick(this.onCreateRoomBtnClick, this);
    }

    public updatePriceCfg(priceCfgs: { [key: string]: object }): void {
        if (priceCfgs !== null) {
            const roomType = this.rules[`roomType`];
            this.priceCfg = priceCfgs[`${roomType}`];
            Logger.debug(`DFRuleView.updateComsumer roomType:${roomType}, priceCfg:${JSON.stringify(this.priceCfg)}`);
        }

        this.updateComsumer();
    }

    private initAllView(): void {
        const consume = this.view.getChild("consumeCom").asCom;
        this.consumeText = consume.getChild("consumeText");
        this.consumeText.text = '0';

        // 局数
        this.toggleRoundCounts[0] = this.view.getChild("round4Button").asButton;
        this.toggleRoundCounts[1] = this.view.getChild("round8Button").asButton;
        this.toggleRoundCounts[2] = this.view.getChild("round16Button").asButton;

        this.toggleRoundCounts[0].getChild("title").text = "4局";
        this.toggleRoundCounts[1].getChild("title").text = "8局";
        this.toggleRoundCounts[2].getChild("title").text = "16局";

        this.toggleRoundCounts[0].onClick(this.updateComsumer, this);
        this.toggleRoundCounts[1].onClick(this.updateComsumer, this);
        this.toggleRoundCounts[2].onClick(this.updateComsumer, this);

        // 支付
        this.togglePays[0] = this.view.getChild("ownerPayButton").asButton;
        this.togglePays[1] = this.view.getChild("aapPayButton").asButton;

        this.togglePays[0].getChild("title").text = "房主支付";
        this.togglePays[1].getChild("title").text = "AA支付";

        this.togglePays[0].onClick(this.updateComsumer, this);
        this.togglePays[1].onClick(this.updateComsumer, this);

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

        // 封顶
        this.toggleFengDingTypes[0] = this.view.getChild("fengding1").asButton;
        this.toggleFengDingTypes[1] = this.view.getChild("fengding2").asButton;
        this.toggleFengDingTypes[2] = this.view.getChild("fengding3").asButton;
        this.toggleFengDingTypes[3] = this.view.getChild("fengding4").asButton;

        this.toggleFengDingTypes[0].getChild("title").text = "20/40";
        this.toggleFengDingTypes[1].getChild("title").text = "30/60";
        this.toggleFengDingTypes[2].getChild("title").text = "50/100/150";
        this.toggleFengDingTypes[3].getChild("title").text = "100/200/300";

        // 墩子
        this.toggleDunziPointTypes[0] = this.view.getChild("dunzi1").asButton;
        this.toggleDunziPointTypes[1] = this.view.getChild("dunzi2").asButton;

        this.toggleDunziPointTypes[0].getChild("title").text = "1分/两分";
        this.toggleDunziPointTypes[1].getChild("title").text = "10分/20分/30分";

        this.toggleZMJF = this.view.getChild("zimojiafen").asButton;
        this.toggleLZJF = this.view.getChild("lianzhuangjiafen").asButton;
        this.toggleJYZ = this.view.getChild("jinyuanzi").asButton;

        this.toggleZMJF.getChild("title").text = "自摸加分";
        this.toggleLZJF.getChild("title").text = "连庄加分";
        this.toggleJYZ.getChild("title").text = "进园子";

        if (DataStore.hasKey(this.recordKey)) {
            const jsonStr = DataStore.getString(this.recordKey, "");
            Logger.debug("jsnoStr:", jsonStr);
            if (jsonStr !== "") {
                try {
                    const config = <{ [key: string]: boolean | number }>JSON.parse(jsonStr);
                    this.toggleRoundCounts[<number>config[1]].selected = true;
                    this.togglePays[<number>config[2]].selected = true;
                    this.togglePlayerNums[<number>config[3]].selected = true;
                    this.toggleFengDingTypes[<number>config[4]].selected = true;
                    this.toggleDunziPointTypes[<number>config[5]].selected = true;
                    this.toggleZMJF.selected = <boolean>config[6];
                    this.toggleLZJF.selected = <boolean>config[7];
                    this.toggleJYZ.selected = <boolean>config[8];
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
            ["dunziPointType"]: {
                [0]: 0,
                [1]: 1
            },
            ["dunziPointTypeBig"]: {
                [0]: 2,
                [1]: 3
            },
            ["payType"]: {
                [0]: 0,
                [1]: 1
            },
            ["handNum"]: {
                [0]: 4,
                [1]: 8,
                [2]: 16
            },
            ["fengDingType"]: {
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

        const fengdingIndex = this.getToggleIndex(this.toggleFengDingTypes);
        rules[`fengDingType`] = configTable[`fengDingType`][fengdingIndex];

        const dunziIndex = this.getToggleIndex(this.toggleDunziPointTypes);
        rules[`dunziPointType`] = configTable[`dunziPointType`][dunziIndex];

        rules[`doubleScoreWhenSelfDrawn`] = this.toggleZMJF.selected;
        rules[`doubleScoreWhenContinuousBanker`] = this.toggleLZJF.selected;
        rules[`doubleScoreWhenZuoYuanZi`] = this.toggleJYZ.selected;

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
        Logger.debug("DFRuleView.saveRule()");
        const key: { [key: number]: boolean | number } = {};
        // 局数
        key[1] = this.getToggleIndex(this.toggleRoundCounts);
        // 支付
        key[2] = this.getToggleIndex(this.togglePays);
        // 人数
        key[3] = this.getToggleIndex(this.togglePlayerNums);
        // 封顶
        key[4] = this.getToggleIndex(this.toggleFengDingTypes);
        // 墩子
        key[5] = this.getToggleIndex(this.toggleDunziPointTypes);
        // 自摸加分
        key[6] = this.toggleZMJF.selected;
        // 连庄加分
        key[7] = this.toggleLZJF.selected;
        // 进院子
        key[8] = this.toggleJYZ.selected;

        const jsonString = JSON.stringify(key);
        DataStore.setItem(this.recordKey, jsonString);
    }

}
