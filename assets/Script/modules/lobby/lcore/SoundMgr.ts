/**
 * 音效管理
 */
export namespace SoundMgr {
    /**
     * 播放音效判断是否
     * @param path 音频地址
     * @param loop 是否循环播放
     */
    export const playEffectAudio = (path: string, loop: boolean = false): void => {
        cc.loader.loadRes(`sound/${path}`, cc.AudioClip, null, (err: Error, result: Object) => {
            if (err !== undefined && err !== null) {
                console.error(`loadRes Audio -------------: ${err}`);

                return;
            }
            cc.audioEngine.playEffect(<cc.AudioClip>result, loop);
        });
    };
}
