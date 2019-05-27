/**
 * stupid
 */
const { ccclass } = cc._decorator;

import { LobbyModule } from "./modules/lobby/LobbyModule";

/**
 * hello
 */
@ccclass
export class Boot extends cc.Component {

    protected start(): void {
        // 加载lobby main
        this.addComponent(LobbyModule);
    }
}
