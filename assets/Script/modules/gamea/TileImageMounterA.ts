import { AgariIndexA } from "./AgariIndexA";

/**
 * 牌的图片挂载
 */
export namespace TileImageMounterA {
    export const mountTileImage = (btn: fgui.GComponent, tileID: number): void => {
        const artID = AgariIndexA.tileId2ArtId(tileID);
        const dianShu = Math.floor(artID / 4) + 2;
        let huaSe = artID % 4;

        const num = btn.getChild("n1").asLoader;
        num.visible = false;
        const flag = btn.getChild("n2").asLoader;
        flag.visible = false;
        const big = btn.getChild("n3").asLoader;
        big.visible = false;

        let pathDianShu;
        let p;
        if (huaSe === 1 || huaSe === 0) {
            // 方块 红桃
            pathDianShu = "hong_";
        } else {
            //梅花 黑桃
            pathDianShu = "hei_";
        }
        let pathHuaSeBig = `big_${huaSe}`;
        if (dianShu > 10 && dianShu < 14) {
            //JQK
            pathHuaSeBig = `big_${pathDianShu}${dianShu}`;
            p = btn.getChild("p2");
        } else if (dianShu === 15) {
            //大小鬼 15
            huaSe = -1;
            pathHuaSeBig = `big_${pathDianShu}${dianShu}`;
            p = btn.getChild("p2");
        } else {
            //A 14
            p = btn.getChild("p1");
        }
        num.url = `ui://lobby_poker/${pathDianShu}${dianShu}`;
        num.visible = true;
        if (huaSe !== -1) {
            flag.url = `ui://lobby_poker/small_${huaSe}`;
            flag.visible = true;
        }
        big.url = `ui://lobby_poker/${pathHuaSeBig}`;
        big.setPosition(p.x, p.y);
        big.visible = true;
        // const m = `ui://lobby_mahjong/suit${artID}`;
        // const num = btn.getChild("title").asLoader;
        // num.url = m;
    };
    export const mountMeldEnableImage = (btn: fgui.GComponent, tileID: number, id: number): void => {
        mountTileImage(btn, tileID);
    };
}
