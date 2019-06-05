import { Enum, LEnv } from "../lcore/LCoreExports";
import { SDKInterface } from "./SDKInterface";
import { WeiXinSDK } from "./wxSdk/WeiXinSDK";

/**
 * sdk管理器
 */
export class SDKManager {
    private static sInstance: SDKManager = null;

    public mInterface: SDKInterface = null;

    private mChannelType: Enum.CHANNEL_TYPE = null;

    private mIsInit: boolean = false;

    public static get instance(): SDKManager {
        if (SDKManager.sInstance === null) {
            SDKManager.sInstance = new SDKManager();
        }

        return SDKManager.sInstance;
    }

    /**
     * 初始化sdk
     */
    public initSDK(): boolean {
        this.mChannelType = LEnv.chanelType;

        if (this.mChannelType === undefined) {
            console.error("-------渠道信息异常！");

            return false;
        }

        switch (this.mChannelType) {
            case Enum.CHANNEL_TYPE.WEIXIN:
                this.mInterface = new WeiXinSDK();
                break;
            default:
                throw new Error("SDKManager initSDK nvalid argument!");
        }

        if (this.mInterface === null) {
            console.warn("-------没有接入SDK！");

            return true;
        }

        this.mIsInit = this.mInterface.init();

        return this.mIsInit;
    }

    // tslint:disable-next-line:no-any
    public login(params?: any): void {
        if (!this.mIsInit) {
            console.error("-------login sdk no init.");

            return;
        }

        this.mInterface.login(params);
    }

    // tslint:disable-next-line:no-any
    public getDataMap(): { [key: string]: any } {
        return this.mInterface.getDataMap();
    }
}
