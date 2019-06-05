import { Logger } from "../lobby/lcore/LCoreExports";

/**
 * 房间规则界面
 */
export class RoomRuleView extends cc.Component {

    private view: fgui.GComponent;

    private eventTarget: cc.EventTarget;

    public updateView(roomConfigStr: string): void {
        //
        const roomConfigJSON = <{ [key: string]: boolean | number | string }>JSON.parse(roomConfigStr);
        Logger.debug("roomConfigJSON = ", roomConfigJSON);

        const payType = <number>roomConfigJSON[`payType`];
        const lianZhuangJiaFen = <boolean>roomConfigJSON[`doubleScoreWhenContinuousBanker`];
        const ziMoJiaFen = <boolean>roomConfigJSON[`doubleScoreWhenSelfDrawn`];
        const jinYuanZi = <boolean>roomConfigJSON[`doubleScoreWhenZuoYuanZi`];
        const fengDingType = <number>roomConfigJSON[`fengDingType`];
        const dunziPointType = <number>roomConfigJSON[`dunziPointType`];
        const handNum = <number>roomConfigJSON[`handNum`];

        if (payType !== undefined || payType !== null) {
            this.view.getController("payCtrl").selectedIndex = payType;
        }

        if (fengDingType !== undefined || fengDingType !== null) {
            this.view.getController("fengdingCtrl").selectedIndex = fengDingType;
        }

        if (dunziPointType !== undefined || dunziPointType !== null) {
            this.view.getController("dunziCtrl").selectedIndex = dunziPointType;
        }

        if (handNum !== undefined || handNum !== null) {
            let index = 0;
            if (handNum === 8) {
                index = 1;
            } else if (handNum === 16) {
                index = 2;
            }

            this.view.getController("roundCtrl").selectedIndex = index;
        }

        if (lianZhuangJiaFen !== undefined || lianZhuangJiaFen !== null) {
            this.view.getChild("lzjf").asButton.selected = lianZhuangJiaFen;
        }

        if (ziMoJiaFen !== undefined || ziMoJiaFen !== null) {
            this.view.getChild("zmjf").asButton.selected = ziMoJiaFen;
        }

        if (jinYuanZi !== undefined || jinYuanZi !== null) {
            this.view.getChild("jyz").asButton.selected = jinYuanZi;
        }

        if (this.view !== null) {
            // this.room = room;
            fgui.GRoot.inst.showPopup(this.view);
            this.view.setPosition(0, 0);
        }

    }

    protected onLoad(): void {

        this.eventTarget = new cc.EventTarget();

        const view = fgui.UIPackage.createObject("dafeng", "room_rule_view").asCom;
        this.view = view;

        this.initView();
    }

    protected onDestroy(): void {
        this.eventTarget.emit("destroy");
        this.view.dispose();
    }

    private onCloseClick(): void {
        this.destroy();

    }

    private initView(): void {
        //

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        this.view.getChild("ownerPay").asButton.getChild("title").text = "房主支付";
        this.view.getChild("aaPay").asButton.getChild("title").text = "平摊支付";

        this.view.getChild("zmjf").asButton.getChild("title").text = "自摸加分";
        this.view.getChild("lzjf").asButton.getChild("title").text = "连庄加分";
        this.view.getChild("jyz").asButton.getChild("title").text = "进院子";

        this.view.getChild("fengding1").asButton.getChild("title").text = "20/40";
        this.view.getChild("fengding2").asButton.getChild("title").text = "30/60";
        this.view.getChild("fengding3").asButton.getChild("title").text = "50/100/150";
        this.view.getChild("fengding4").asButton.getChild("title").text = "100/200/300";

        this.view.getChild("dunzi1").asButton.getChild("title").text = "1分/2分";
        this.view.getChild("dunzi2").asButton.getChild("title").text = "10分/20分/30分";

        this.view.getChild("round1").asButton.getChild("title").text = "4局";
        this.view.getChild("round2").asButton.getChild("title").text = "8局";
        this.view.getChild("round3").asButton.getChild("title").text = "16局";
    }

}
