/**
 * stupid
 */
const { ccclass } = cc._decorator;

import { Main as lobbyMain } from "./modules/lobby/Main";

/**
 * hello
 */
@ccclass
export class Boot extends cc.Component {

    protected start(): void {
        // 加载lobby main
        this.addComponent(lobbyMain);
    }
}
