import { AgariIndex } from "./AgariIndex";

/**
 * 牌的图片挂载
 */
// tslint:disable-next-line: no-unnecessary-class
export class TileImageMounter {
    public static mountTileImage(btn: fgui.GComponent, tileID: number): void {
        const artID = AgariIndex.tileId2ArtId(tileID);
        const m = `ui://lobby_mahjong/suit${artID}`;
        const num = btn.getChild("title").asLoader;
        num.url = m;
    }
    public static mountMeldEnableImage(btn: fgui.GComponent, tileID: number, id: number): void {
        this.mountTileImage(btn, tileID);
    }
}
