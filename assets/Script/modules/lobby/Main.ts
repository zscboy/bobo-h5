/**
 * lobby 模块入口
 */
const { ccclass } = cc._decorator;
import { LoginView } from "./views/LoginView";

/**
 * hello
 */
@ccclass
export class Main extends cc.Component {

    protected start(): void {
        // 设置帧率
        cc.game.setFrameRate(29);

        // 初始化fgui
        fgui.addLoadHandler();
        fgui.GRoot.create();

        // 加载大厅的所有资源，显示加载进度
        cc.loader.loadResDir(
            "lobby",
            (completedCount, totalCount, _) => {
                console.log(`lobby load progress:${completedCount}/${totalCount}`);
            },
            (error) => {
                console.log(`lobby load, error:${error}`);
                if (error == null) {
                    this.onResLoadedCompleted();
                }
            }
        );
    }

    protected onResLoadedCompleted(): void {
        // 资源加载完成
        this.addComponent(LoginView);
    }
}
