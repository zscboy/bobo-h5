/**
 * 音效管理
 */
export namespace SoundMgr {
    /**
     * 播放音效判断是否
     * @param path 音频地址
     * @param loop 是否循环播放
     */
    export const playEffectAudio = (path: string, loop = false, callBack?: (num: number) => void): void => {
        cc.loader.loadRes(`sound/${path}`, cc.AudioClip, null, (err: Error, result: Object) => {
            if (err !== undefined && err !== null) {
                console.error(`loadRes Audio -------------: ${err}`);

                return;
            }
            const num = cc.audioEngine.playEffect(<cc.AudioClip>result, loop);
            if (callBack !== undefined) {
                callBack(num);
            }
        });
    };

    /**
     * 停止特效 音效
     * @param num 音效id
     */
    export const stopEffect = (num: number): void => {
        cc.audioEngine.stopEffect(num);
    };

}
