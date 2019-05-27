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

    private recordKey: string = "GZRule";

    private readonly rules: {[key: string]: string | number | boolean} = {
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
            ["modName"]: "game2"
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

    private initAllView(): void {
        // const consume = this.view.getChild("consumeCom").asCom;
        // this.consumeText = consume.getChild("consumeText");

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

        this.togglePays[0] .getChild("title").text = "房主支付";
        this.togglePays[1] .getChild("title").text = "AA支付";

        this.togglePays[0] .onClick(this.updateComsumer, this);
        this.togglePays[1] .onClick(this.updateComsumer, this);

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

        // if (DataStore.hasKey(this.recordKey)) {
        //     const jsonStr = DataStore.getString(this.recordKey);
        //     Logger.debug("jsnoStr:", jsonStr);
        // }

        // if pp.HasKey(RecordKey) then
        //     local jsonStr = pp.GetString(RecordKey)
        //     if jsonStr and #jsonStr > 0 then
        //         local key = rapidJson.decode(jsonStr)

        //         self.toggleRoundCount[key[1]].selected = true
        //         self.togglePay[key[2]].selected = true
        //     end
        // end

    }

    private getConfigTable(): {[key: string]: {[key: number]: number}} {
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

        rules[`doubleScoreWhenSelfDrawn`] = this.toggleZMJF.selected;
        rules[`doubleScoreWhenContinuousBanker`] = this.toggleLZJF.selected;
        rules[`doubleScoreWhenZuoYuanZi`] = this.toggleJYZ.selected;

        const rulesJson = JSON.stringify(rules);
        Logger.debug("rulesJson:", rulesJson);

        return rulesJson;
    }

    private onCreateRoomBtnClick(): void {
        this.newRoomView.createRoom(this.getRules());
    }

    private getToggleIndex(toggles: fgui.GButton[]): number {
        const len = toggles.length;
        for (let i = 0; i < len; i++) {
            const toggle = toggles[i];
            if (toggle.selected) {
                Logger.debug("select i:", i);

                return i;
            }
        }

        return 0;
    }

    private updateComsumer(): void {
        //     if priceCfgs ~= nil then
        //     self.priceCfg = priceCfgs[tostring(rules.roomType)]
        // end

        // local payIndex = self:getToggleIndex(self.togglePay)
        // local payType = configTable["payType"][payIndex]

        // local playCountIndex = self:getToggleIndex(self.toggleRoundCount)
        // local handNum = configTable["handNum"][playCountIndex]

        // -- 0 是不配置或者无限用户个数
        // local playerNumAcquired = 0

        // local cost = self:getCost(payType, playerNumAcquired, handNum)

        // if cost == nil then
        //     logger.error(
        //         "No price cfg found, payType:" .. payType .. ", playerNumAcquired:" .. playerNumAcquired .. ", handNum:"
        //     )
        // end

        // logger.debug("cost:" .. cost)
        // self.consumeText.text = cost
    }

    private saveRule(): void {
        const key: { [key: number]: boolean | number | string } = {};
        // 局数
        key[1] = this.getToggleIndex(this.toggleRoundCounts);
        // 支付
        key[2] = this.getToggleIndex(this.togglePays);

        Logger.debug("RunFastRuleView:saveRule() ,key = ", key);
        // local json = rapidJson.encode(key)
        // local pp = CS.UnityEngine.PlayerPrefs
        // pp.SetString(RecordKey, json)

        DataStore.setItem(this.recordKey, key);
    }

}
