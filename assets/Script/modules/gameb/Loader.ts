/**
 * 加载器
 */
// tslint:disable-next-line:no-unnecessary-class
export class Loader {
    public static fguiLoad(packageName: string): void {
        fgui.UIPackage.addPackage(packageName);
    }
}
