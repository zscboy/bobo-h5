import { Logger } from "../lobby/lcore/LCoreExports";
import { PlayerView } from "./PlayerView";
import { MeldType, TingPai } from "./RoomInterfaces";

/**
 * 房间
 */
export class RoomView extends cc.Component {
    public playerViews: PlayerView[];
    public listensObj: fgui.GObject;
    public meldOpsPanel: fgui.GObject;
    public donateMoveObj: fgui.GLoader;
    public tilesInWall: fgui.GObject;
    public showOrHideMeldsOpsPanel(meld: MeldType[]): void {
        Logger.debug("等待加代码");
    }
    public hideTingDataView(): void {
        Logger.debug("等待加代码");

    }
    public setArrowByParent(d: fgui.GComponent): void {
        Logger.debug("等待加代码");

    }
    public showTingDataView(list: TingPai[]): void {
        Logger.debug("等待加代码");
    }

    //////////////////////////////////////////////
    // 根据玩家的chairID获得相应的playerView
    // 注意服务器的chairID是由0开始
    //////////////////////////////////////////////
    public getPlayerViewByChairID(chairID: number, myChairId: number): PlayerView {
        const playerViews = this.playerViews;

        //获得chairID相对于本玩家的偏移
        const c = (chairID - myChairId + 4) % 4;
        //加1是由于lua table索引从1开始

        return playerViews[c + 1];
    }
}
