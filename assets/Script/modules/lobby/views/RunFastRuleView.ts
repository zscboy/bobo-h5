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
export class RunFastRuleView {
    private view: fgui.GComponent;
    private newRoomView: NewRoomViewInterface;

    // private consumeText: fgui.GObject;

    private toggleRoundCounts: fgui.GButton[] = [];

    private togglePays: fgui.GButton[] = [];

    private recordKey: string = "GZRule";

    private rules: string = `{"roomType":8, "playerNumAcquired":3, "payNum":4, "payType":0, "handNum":4, "modName":"game1"}`;
    //     ["roomType"] : 8,
    //     ["playerNumAcquired"] : 3,
    //     ["payNum"] : 4,
    //     ["payType"] : 0,
    //     ["handNum"] : 4,
    //     //游戏模块
    //     ["modName"] : "game1"
    // };

    public destroy(): void {
        this.saveRule();
    }
    public bindView(newRoomView: NewRoomViewInterface): void {
        const myNewRoomView = newRoomView.getView();

        this.view = myNewRoomView.getChild("gzRule").asCom;
        this.newRoomView = newRoomView;

        this.initAllView();

        const createRoomBtn = this.view.getChild("createRoomButton");
        createRoomBtn.onClick(this.onCreateRoomBtnClick, this);
    }

    private initAllView(): void {
        // const consume = this.view.getChild("consumeCom").asCom;
        // this.consumeText = consume.getChild("consumeText");

        // 局数
        const toggleRoundCount0 = this.view.getChild("round4Button").asButton;
        toggleRoundCount0.getChild("title").text = "4局";
        toggleRoundCount0.onClick(this.updateComsumer, this);
        this.toggleRoundCounts.push(toggleRoundCount0);

        const toggleRoundCount1 = this.view.getChild("round8Button").asButton;
        toggleRoundCount1.getChild("title").text = "8局";
        toggleRoundCount1.onClick(this.updateComsumer, this);
        this.toggleRoundCounts.push(toggleRoundCount1);

        const toggleRoundCount2 = this.view.getChild("round16Button").asButton;
        toggleRoundCount2.getChild("title").text = "16局";
        toggleRoundCount2.onClick(this.updateComsumer, this);
        this.toggleRoundCounts.push(toggleRoundCount2);

        // 支付
        const togglePay0 = this.view.getChild("ownerPayButton").asButton;
        togglePay0.getChild("title").text = "房主支付";
        togglePay0.onClick(this.updateComsumer, this);
        this.togglePays.push(togglePay0);

        const togglePay1 = this.view.getChild("aapPayButton").asButton;
        togglePay1.getChild("title").text = "AA支付";
        togglePay1.onClick(this.updateComsumer, this);
        this.togglePays.push(togglePay1);

        if (DataStore.hasKey(this.recordKey)) {
            const jsonStr = DataStore.getString(this.recordKey);
            Logger.debug("jsnoStr:", jsonStr);
        }
        // local pp = _ENV.CS.UnityEngine.PlayerPrefs

        // if pp.HasKey(RecordKey) then
        //     local jsonStr = pp.GetString(RecordKey)
        //     if jsonStr and #jsonStr > 0 then
        //         local key = rapidJson.decode(jsonStr)

        //         self.toggleRoundCount[key[1]].selected = true
        //         self.togglePay[key[2]].selected = true
        //     end
        // end
    }

    private getRules(): string {
        // const playCountIndex = this.getToggleIndex(this.toggleRoundCounts)
        // rules["handNum"] = configTable["handNum"][playCountIndex]

        // local payIndex = self:getToggleIndex(self.togglePay)
        // rules["payType"] = configTable["payType"][payIndex]

        //暂时不知道什么配置
        //rules["doubleScoreWhenSelfDrawn"] = self.toggleKX[1].isOn

        //rules["payNum"] = self:getCost(rules["payType"], rules["playerNumAcquired"], rules["handNum"])
        //暂时不知道什么配置
        return this.rules;
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
