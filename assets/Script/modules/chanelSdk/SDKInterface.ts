/**
 * sdk公共接口
 */
export class SDKInterface {

    // tslint:disable-next-line:no-any
    protected mDataMap: { [key: string]: any } = {};

    public init(): boolean {
        return false;
    }

    // tslint:disable-next-line:no-any
    public login(params: any): void {
        return;
    }

    // tslint:disable-next-line:no-any
    public getDataMap(): { [key: string]: any } {
        return this.mDataMap;
    }
}
