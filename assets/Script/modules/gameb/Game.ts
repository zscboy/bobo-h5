import { Loader } from "./Loader";
import { proto } from "./proto/gameb";

/**
 * 子游戏入口
 */
export class Game extends cc.Component {
    private view: fgui.GComponent;

    protected onLoad(): void {
        // 加载游戏界面
        console.log("GameA.onLoad");
        Loader.fguiLoad("lobby/fui_lobby_mahjong/lobby_mahjong");
        Loader.fguiLoad("gameb/dafeng");

        const view = fgui.UIPackage.createObject("dafeng", "desk").asCom;
        fgui.GRoot.inst.addChild(view);
        this.view = view;
    }

    protected start(): void {
        this.testProto();

        // 启动网络连接
    }

    protected onDestroy(): void {
        fgui.GRoot.inst.removeChild(this.view);
    }

    private testProto(): void {
        const gm = new proto.mahjong.GameMessage();
        gm.Ops = 1;

        const decoded = proto.mahjong.GameMessage.encode(gm);
        const gm2 = proto.mahjong.GameMessage.decode(decoded);

        console.log(gm2);
    }
}
