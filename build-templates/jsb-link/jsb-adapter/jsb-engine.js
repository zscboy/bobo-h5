(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

require('./jsb-sys.js');
require('./jsb-game.js');
require('./jsb-videoplayer.js');
require('./jsb-webview.js');
require('./jsb-node.js');
require('./jsb-audio.js');
require('./jsb-loader.js');
require('./jsb-editbox.js');
require('./jsb-reflection.js');
require('./jsb-assets-manager.js');
require('./jsb-editor-support.js');
require('./jsb-dragonbones.js');
require('./jsb-spine-skeleton.js');
require('./jsb-spine-assembler.js');

},{"./jsb-assets-manager.js":2,"./jsb-audio.js":3,"./jsb-dragonbones.js":undefined,"./jsb-editbox.js":4,"./jsb-editor-support.js":5,"./jsb-game.js":6,"./jsb-loader.js":7,"./jsb-node.js":8,"./jsb-reflection.js":9,"./jsb-spine-assembler.js":undefined,"./jsb-spine-skeleton.js":undefined,"./jsb-sys.js":10,"./jsb-videoplayer.js":undefined,"./jsb-webview.js":undefined}],2:[function(require,module,exports){
"use strict";

/*
 * Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

if (jsb.AssetsManager) {
    jsb.AssetsManager.State = {
        UNINITED: 0,
        UNCHECKED: 1,
        PREDOWNLOAD_VERSION: 2,
        DOWNLOADING_VERSION: 3,
        VERSION_LOADED: 4,
        PREDOWNLOAD_MANIFEST: 5,
        DOWNLOADING_MANIFEST: 6,
        MANIFEST_LOADED: 7,
        NEED_UPDATE: 8,
        READY_TO_UPDATE: 9,
        UPDATING: 10,
        UNZIPPING: 11,
        UP_TO_DATE: 12,
        FAIL_TO_UPDATE: 13
    };

    jsb.Manifest.DownloadState = {
        UNSTARTED: 0,
        DOWNLOADING: 1,
        SUCCESSED: 2,
        UNMARKED: 3
    };

    jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST = 0;
    jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST = 1;
    jsb.EventAssetsManager.ERROR_PARSE_MANIFEST = 2;
    jsb.EventAssetsManager.NEW_VERSION_FOUND = 3;
    jsb.EventAssetsManager.ALREADY_UP_TO_DATE = 4;
    jsb.EventAssetsManager.UPDATE_PROGRESSION = 5;
    jsb.EventAssetsManager.ASSET_UPDATED = 6;
    jsb.EventAssetsManager.ERROR_UPDATING = 7;
    jsb.EventAssetsManager.UPDATE_FINISHED = 8;
    jsb.EventAssetsManager.UPDATE_FAILED = 9;
    jsb.EventAssetsManager.ERROR_DECOMPRESS = 10;
}

},{}],3:[function(require,module,exports){
'use strict';

/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

cc.Audio = function (src) {
    this.src = src;
    this.volume = 1;
    this.loop = false;
    this.id = -1;
};

var handleVolume = function handleVolume(volume) {
    if (volume === undefined) {
        // set default volume as 1
        volume = 1;
    } else if (typeof volume === 'string') {
        volume = Number.parseFloat(volume);
    }
    return volume;
};

(function (proto, audioEngine) {

    // Using the new audioEngine
    cc.audioEngine = audioEngine;
    audioEngine.setMaxWebAudioSize = function () {};

    cc.Audio.State = audioEngine.AudioState;

    proto.play = function () {
        audioEngine.stop(this.id);

        var clip = this.src;
        if (clip.loaded) {
            this.id = audioEngine.play2d(clip._nativeAsset, this.loop, this.volume);
        } else {
            var self = this;
            cc.loader.load({
                url: clip.nativeUrl,
                // For audio, we should skip loader otherwise it will load a new audioClip.
                skips: ['Loader']
            }, function (err, audioNativeAsset) {
                if (err) {
                    cc.error(err);
                    return;
                }
                if (!clip.loaded) {
                    clip._nativeAsset = audioNativeAsset;
                    self.id = audioEngine.play2d(audioNativeAsset, self.loop, self.volume);
                }
            });
        }
    };

    proto.pause = function () {
        audioEngine.pause(this.id);
    };

    proto.resume = function () {
        audioEngine.resume(this.id);
    };

    proto.stop = function () {
        audioEngine.stop(this.id);
    };

    proto.destroy = function () {};

    proto.setLoop = function (loop) {
        this.loop = loop;
        audioEngine.setLoop(this.id, loop);
    };

    proto.getLoop = function () {
        return this.loop;
    };

    proto.setVolume = function (volume) {
        volume = handleVolume(volume);
        this.volume = volume;
        return audioEngine.setVolume(this.id, volume);
    };

    proto.getVolume = function () {
        return this.volume;
    };

    proto.setCurrentTime = function (time) {
        audioEngine.setCurrentTime(this.id, time);
    };

    proto.getCurrentTime = function () {
        return audioEngine.getCurrentTime(this.id);
    };

    proto.getDuration = function () {
        return audioEngine.getDuration(this.id);
    };

    proto.getState = function () {
        return audioEngine.getState(this.id);
    };

    // polyfill audioEngine

    var _music = {
        id: -1,
        clip: '',
        loop: false,
        volume: 1
    };
    var _effect = {
        volume: 1
    };

    audioEngine.play = function (clip, loop, volume) {
        if (typeof volume !== 'number') {
            volume = 1;
        }
        if (typeof clip === 'string') {
            // backward compatibility since 1.10
            cc.warnID(8401, 'cc.audioEngine', 'cc.AudioClip', 'AudioClip', 'cc.AudioClip', 'audio');
            var path = clip;
            var md5Pipe = cc.loader.md5Pipe;
            if (md5Pipe) {
                path = md5Pipe.transformURL(path);
            }
            return audioEngine.play2d(path, loop, volume);
        } else {
            if (!clip) {
                return;
            }
            if (clip.loaded) {
                return audioEngine.play2d(clip._nativeAsset, loop, volume);
            } else {
                cc.loader.load({
                    url: clip.nativeUrl,
                    // For audio, we should skip loader otherwise it will load a new audioClip.
                    skips: ['Loader']
                }, function (err, audioNativeAsset) {
                    if (err) {
                        cc.error(err);
                        return;
                    }
                    if (!clip.loaded) {
                        clip._nativeAsset = audioNativeAsset;
                        audioEngine.play2d(audioNativeAsset, loop, volume);
                    }
                });
                // Deffered loading return audioID -1
                return -1;
            }
        }
    };
    audioEngine.playMusic = function (clip, loop) {
        audioEngine.stop(_music.id);
        _music.id = audioEngine.play(clip, loop, _music.volume);
        _music.loop = loop;
        _music.clip = clip;
        return _music.id;
    };
    audioEngine.stopMusic = function () {
        audioEngine.stop(_music.id);
    };
    audioEngine.pauseMusic = function () {
        audioEngine.pause(_music.id);
        return _music.id;
    };
    audioEngine.resumeMusic = function () {
        audioEngine.resume(_music.id);
        return _music.id;
    };
    audioEngine.getMusicVolume = function () {
        return _music.volume;
    };
    audioEngine.setMusicVolume = function (volume) {
        _music.volume = handleVolume(volume);
        audioEngine.setVolume(_music.id, _music.volume);
        return volume;
    };
    audioEngine.isMusicPlaying = function () {
        return audioEngine.getState(_music.id) === audioEngine.AudioState.PLAYING;
    };
    audioEngine.playEffect = function (filePath, loop) {
        return audioEngine.play(filePath, loop || false, _effect.volume);
    };
    audioEngine.setEffectsVolume = function (volume) {
        _effect.volume = handleVolume(volume);
    };
    audioEngine.getEffectsVolume = function () {
        return _effect.volume;
    };
    audioEngine.pauseEffect = function (audioID) {
        return audioEngine.pause(audioID);
    };
    audioEngine.pauseAllEffects = function () {
        var musicPlay = audioEngine.getState(_music.id) === audioEngine.AudioState.PLAYING;
        audioEngine.pauseAll();
        if (musicPlay) {
            audioEngine.resume(_music.id);
        }
    };
    audioEngine.resumeEffect = function (id) {
        audioEngine.resume(id);
    };
    audioEngine.resumeAllEffects = function () {
        var musicPaused = audioEngine.getState(_music.id) === audioEngine.AudioState.PAUSED;
        audioEngine.resumeAll();
        if (musicPaused && audioEngine.getState(_music.id) === audioEngine.AudioState.PLAYING) {
            audioEngine.pause(_music.id);
        }
    };
    audioEngine.stopEffect = function (id) {
        return audioEngine.stop(id);
    };
    audioEngine.stopAllEffects = function () {
        var musicPlaying = audioEngine.getState(_music.id) === audioEngine.AudioState.PLAYING;
        var currentTime = audioEngine.getCurrentTime(_music.id);
        audioEngine.stopAll();
        if (musicPlaying) {
            _music.id = audioEngine.play(_music.clip, _music.loop);
            audioEngine.setCurrentTime(_music.id, currentTime);
        }
    };

    // incompatible implementation for game pause & resume
    audioEngine._break = audioEngine.pauseAll;
    audioEngine._restore = audioEngine.resumeAll;

    // deprecated

    audioEngine._uncache = audioEngine.uncache;
    audioEngine.uncache = function (clip) {
        var path;
        if (typeof clip === 'string') {
            // backward compatibility since 1.10
            cc.warnID(8401, 'cc.audioEngine', 'cc.AudioClip', 'AudioClip', 'cc.AudioClip', 'audio');
            path = clip;
        } else {
            if (!clip) {
                return;
            }
            path = clip._nativeAsset;
        }
        audioEngine._uncache(path);
    };

    audioEngine._preload = audioEngine.preload;
    audioEngine.preload = function (filePath, callback) {
        cc.warn('`cc.audioEngine.preload` is deprecated, use `cc.loader.loadRes(url, cc.AudioClip)` instead please.');
        audioEngine._preload(filePath, callback);
    };
})(cc.Audio.prototype, jsb.AudioEngine);

},{}],4:[function(require,module,exports){
'use strict';

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

(function () {
    if (!(cc && cc.EditBox)) {
        return;
    }
    var EditBox = cc.EditBox;
    var js = cc.js;
    var KeyboardReturnType = EditBox.KeyboardReturnType;
    var InputMode = EditBox.InputMode;
    var InputFlag = EditBox.InputFlag;

    function getInputType(type) {
        switch (type) {
            case InputMode.EMAIL_ADDR:
                return 'email';
            case InputMode.NUMERIC:
            case InputMode.DECIMAL:
                return 'number';
            case InputMode.PHONE_NUMBER:
                return 'phone';
            case InputMode.URL:
                return 'url';
            case InputMode.SINGLE_LINE:
            case InputMode.ANY:
            default:
                return 'text';
        }
    }

    function getKeyboardReturnType(type) {
        switch (type) {
            case KeyboardReturnType.DEFAULT:
            case KeyboardReturnType.DONE:
                return 'done';
            case KeyboardReturnType.SEND:
                return 'send';
            case KeyboardReturnType.SEARCH:
                return 'search';
            case KeyboardReturnType.GO:
                return 'go';
            case KeyboardReturnType.NEXT:
                return 'next';
        }
        return 'done';
    }

    function JsbEditBoxImpl() {
        this._delegate = null;
        this._editing = false;
    }

    js.extend(JsbEditBoxImpl, EditBox._ImplClass);
    EditBox._ImplClass = JsbEditBoxImpl;

    Object.assign(JsbEditBoxImpl.prototype, {
        init: function init(delegate) {
            if (!delegate) {
                cc.error('EditBox init failed');
                return;
            }
            this._delegate = delegate;
        },
        setFocus: function setFocus(value) {
            if (value) {
                this.beginEditing();
            } else {
                this.endEditing();
            }
        },
        isFocused: function isFocused() {
            return this._editing;
        },
        beginEditing: function beginEditing() {
            var self = this;
            var delegate = this._delegate;
            var multiline = delegate.inputMode === InputMode.ANY;
            var rect = this._getRect();

            var inputTypeString = getInputType(delegate.inputMode);
            if (delegate.inputFlag === InputFlag.PASSWORD) {
                inputTypeString = 'password';
            }

            function onConfirm(res) {
                delegate.editBoxEditingReturn();
            }

            function onInput(res) {
                if (res.value.length > delegate.maxLength) {
                    res.value = res.value.slice(0, delegate.maxLength);
                }
                if (delegate._string !== res.value) {
                    delegate.editBoxTextChanged(res.value);
                }
            }

            function onComplete(res) {
                self.endEditing();
                jsb.inputBox.offConfirm(onConfirm);
                jsb.inputBox.offInput(onInput);
                jsb.inputBox.offComplete(onComplete);
            }

            jsb.inputBox.onInput(onInput);
            jsb.inputBox.onConfirm(onConfirm);
            jsb.inputBox.onComplete(onComplete);

            jsb.inputBox.show({
                defaultValue: delegate._string,
                maxLength: delegate.maxLength,
                multiple: multiline,
                confirmHold: false,
                confirmType: getKeyboardReturnType(delegate.returnType),
                inputType: inputTypeString,
                originX: rect.x,
                originY: rect.y,
                width: rect.width,
                height: rect.height
            });
            this._editing = true;
            delegate.editBoxEditingDidBegan();
        },
        endEditing: function endEditing() {
            this._editing = false;
            jsb.inputBox.hide();
            this._delegate.editBoxEditingDidEnded();
        },
        _getRect: function _getRect() {
            var node = this._delegate.node,
                scaleX = cc.view._scaleX,
                scaleY = cc.view._scaleY;
            var dpr = cc.view._devicePixelRatio;

            var math = cc.vmath;
            var matrix = math.mat4.create();
            node.getWorldMatrix(matrix);
            var contentSize = node._contentSize;
            var vec3 = cc.v3();
            vec3.x = -node._anchorPoint.x * contentSize.width;
            vec3.y = -node._anchorPoint.y * contentSize.height;

            math.mat4.translate(matrix, matrix, vec3);

            scaleX /= dpr;
            scaleY /= dpr;

            var finalScaleX = matrix.m00 * scaleX;
            var finaleScaleY = matrix.m05 * scaleY;

            return {
                x: matrix.m12 * finalScaleX,
                y: matrix.m13 * finaleScaleY,
                width: contentSize.width * finalScaleX,
                height: contentSize.height * finaleScaleY
            };
        }
    });
})();

},{}],5:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
(function () {
    if (window.middleware === undefined) return;

    var gfx = cc.gfx;
    var middlewareMgr = middleware.MiddlewareManager.getInstance();
    var director = cc.director;

    director.on(cc.Director.EVENT_BEFORE_DRAW, function () {
        middlewareMgr.update(director._deltaTime);
    });

    var MiddlewareIA = cc.Class({
        ctor: function ctor() {
            var tempFormat = gfx.VertexFormat.XY_UV_Color;
            this._vertexBuffer = {
                _format: tempFormat,
                _usage: gfx.USAGE_DYNAMIC,
                _glID: {
                    _id: 0
                }
            };

            this._indexBuffer = {
                _format: gfx.INDEX_FMT_UINT16,
                _usage: gfx.USAGE_STATIC,
                _glID: {
                    _id: 0
                },
                _bytesPerIndex: 2
            };
            this._primitiveType = gfx.PT_TRIANGLES;
            this._start = 0;
            this.count = -1;
        },
        setVertexFormat: function setVertexFormat(format) {
            this._vertexBuffer._format = format;
        },
        setGLIBID: function setGLIBID(glIBID) {
            this._indexBuffer._glID._id = glIBID;
        },
        setGLVBID: function setGLVBID(glVBID) {
            this._vertexBuffer._glID._id = glVBID;
        }
    });

    middleware.MiddlewareIA = MiddlewareIA;

    var renderInfoMgr = middleware.RenderInfoMgr.getInstance();
    middleware.renderInfoMgr = renderInfoMgr;
    renderInfoMgr.renderInfo = renderInfoMgr.getRenderInfo();
    renderInfoMgr.__middleware__ = middleware;
    renderInfoMgr.setResizeCallback(function () {
        this.renderInfo = this.getRenderInfo();
    });
})();

},{}],6:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

cc.game.restart = function () {
  __restartVM();
};

jsb.onHide = function () {
  cc.game.emit(cc.game.EVENT_HIDE);
};

jsb.onShow = function () {
  cc.game.emit(cc.game.EVENT_SHOW);
};

jsb.onResize = function (size) {
  if (size.width === 0 || size.height === 0) return;
  window.resize(size.width, size.height);
  cc.view.setCanvasSize(window.innerWidth, window.innerHeight);
};

},{}],7:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

function downloadScript(item, callback) {
    require(item.url);
    return null;
}

var audioDownloader = new jsb.Downloader();
var audioUrlMap = {}; // key: url, value: { loadingItem, callback }

audioDownloader.setOnFileTaskSuccess(function (task) {
    var _audioUrlMap$task$req = audioUrlMap[task.requestURL],
        item = _audioUrlMap$task$req.item,
        callback = _audioUrlMap$task$req.callback;

    if (!(item && callback)) {
        return;
    }

    item.url = task.storagePath;
    item.rawUrl = task.storagePath;

    callback(null, item);
    delete audioUrlMap[task.requestURL];
});

audioDownloader.setOnTaskError(function (task, errorCode, errorCodeInternal, errorStr) {
    var callback = audioUrlMap[task.requestURL].callback;

    callback && callback(errorStr, null);
    delete audioUrlMap[task.requestURL];
});

function downloadAudio(item, callback) {
    if (/^http/.test(item.url)) {
        var index = item.url.lastIndexOf('/');
        var fileName = item.url.substr(index + 1);
        var storagePath = jsb.fileUtils.getWritablePath() + fileName;

        // load from local cache
        if (jsb.fileUtils.isFileExist(storagePath)) {
            item.url = storagePath;
            item.rawUrl = storagePath;
            callback && callback(null, item);
        }
        // download remote audio
        else {
                audioUrlMap[item.url] = { item: item, callback: callback };
                audioDownloader.createDownloadFileTask(item.url, storagePath);
            }
        // Don't return anything to use async loading.
    } else {
        return item.url;
    }
}

function loadAudio(item, callback) {
    var loadByDeserializedAsset = item._owner instanceof cc.AudioClip;
    if (loadByDeserializedAsset) {
        return item.url;
    } else {
        var audioClip = new cc.AudioClip();
        // obtain user url through nativeUrl
        audioClip._setRawAsset(item.rawUrl, false);
        // obtain download url through _nativeAsset
        audioClip._nativeAsset = item.url;
        return audioClip;
    }
}

function downloadImage(item, callback) {
    var img = new Image();
    img.src = item.url;
    img.onload = function (info) {
        callback(null, img);
    };
    // Don't return anything to use async loading.
}

function _getFontFamily(fontHandle) {
    var ttfIndex = fontHandle.lastIndexOf(".ttf");
    if (ttfIndex === -1) return fontHandle;

    var slashPos = fontHandle.lastIndexOf("/");
    var fontFamilyName;
    if (slashPos === -1) {
        fontFamilyName = fontHandle.substring(0, ttfIndex) + "_LABEL";
    } else {
        fontFamilyName = fontHandle.substring(slashPos + 1, ttfIndex) + "_LABEL";
    }
    if (fontFamilyName.indexOf(' ') !== -1) {
        fontFamilyName = '"' + fontFamilyName + '"';
    }
    return fontFamilyName;
}

function downloadText(item) {
    var url = item.url;

    var result = jsb.fileUtils.getStringFromFile(url);
    if (typeof result === 'string' && result) {
        return result;
    } else {
        return new Error('Download text failed: ' + url);
    }
}

function downloadBinary(item) {
    var url = item.url;

    var result = jsb.fileUtils.getDataFromFile(url);
    if (result) {
        return result;
    } else {
        return new Error('Download binary file failed: ' + url);
    }
}

function loadFont(item, callback) {
    var url = item.url;
    var fontFamilyName = _getFontFamily(url);

    var fontFace = new FontFace(fontFamilyName, "url('" + url + "')");
    document.fonts.add(fontFace);

    fontFace.load();
    fontFace.loaded.then(function () {
        callback(null, fontFamilyName);
    }, function () {
        cc.warnID(4933, fontFamilyName);
        callback(null, fontFamilyName);
    });
}

function loadCompressedTex(item) {
    return item.content;
}

cc.loader.addDownloadHandlers({
    // JS
    'js': downloadScript,
    'jsc': downloadScript,

    // Images
    'png': downloadImage,
    'jpg': downloadImage,
    'bmp': downloadImage,
    'jpeg': downloadImage,
    'gif': downloadImage,
    'ico': downloadImage,
    'tiff': downloadImage,
    'webp': downloadImage,
    'image': downloadImage,
    'pvr': downloadImage,
    'pkm': downloadImage,

    // Audio
    'mp3': downloadAudio,
    'ogg': downloadAudio,
    'wav': downloadAudio,
    'mp4': downloadAudio,
    'm4a': downloadAudio,

    // Text
    'txt': downloadText,
    'xml': downloadText,
    'vsh': downloadText,
    'fsh': downloadText,
    'atlas': downloadText,

    'tmx': downloadText,
    'tsx': downloadText,

    'json': downloadText,
    'ExportJson': downloadText,
    'plist': downloadText,

    'fnt': downloadText,

    'binary': downloadBinary,
    'bin': downloadBinary,
    'dbbin': downloadBinary,

    'default': downloadText
});

cc.loader.addLoadHandlers({
    // Font
    'font': loadFont,
    'eot': loadFont,
    'ttf': loadFont,
    'woff': loadFont,
    'svg': loadFont,
    'ttc': loadFont,

    // Audio
    'mp3': loadAudio,
    'ogg': loadAudio,
    'wav': loadAudio,
    'mp4': loadAudio,
    'm4a': loadAudio,

    // compressed texture
    'pvr': loadCompressedTex,
    'pkm': loadCompressedTex
});

},{}],8:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

var math = cc.vmath;

var _typedArray_temp = new Float32Array(16);
var _mat4_temp = math.mat4.create();

function _mat4ToArray(typedArray, mat4) {
  typedArray[0] = mat4.m00;
  typedArray[1] = mat4.m01;
  typedArray[2] = mat4.m02;
  typedArray[3] = mat4.m03;
  typedArray[4] = mat4.m04;
  typedArray[5] = mat4.m05;
  typedArray[6] = mat4.m06;
  typedArray[7] = mat4.m07;
  typedArray[8] = mat4.m08;
  typedArray[9] = mat4.m09;
  typedArray[10] = mat4.m10;
  typedArray[11] = mat4.m11;
  typedArray[12] = mat4.m12;
  typedArray[13] = mat4.m13;
  typedArray[14] = mat4.m14;
  typedArray[15] = mat4.m15;
}

cc.Node.prototype.getWorldRTInAB = function () {
  this.getWorldRT(_mat4_temp);
  _mat4ToArray(_typedArray_temp, _mat4_temp);
  return _typedArray_temp;
};

cc.Node.prototype.getWorldMatrixInAB = function () {
  this._updateWorldMatrix();
  _mat4ToArray(_typedArray_temp, this._worldMatrix);
  return _typedArray_temp;
};

},{}],9:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

// JS to Native bridges
if (window.JavascriptJavaBridge && cc.sys.os == cc.sys.OS_ANDROID) {
  jsb.reflection = new JavascriptJavaBridge();
  cc.sys.capabilities["keyboard"] = true;
} else if (window.JavaScriptObjCBridge && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_OSX)) {
  jsb.reflection = new JavaScriptObjCBridge();
}

},{}],10:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

var sys = cc.sys;

sys.getNetworkType = jsb.Device.getNetworkType;
sys.getBatteryLevel = jsb.Device.getBatteryLevel;
sys.garbageCollect = jsb.garbageCollect;
sys.restartVM = __restartVM;
sys.isObjectValid = __isObjectValid;

sys.getSafeAreaRect = function () {
  // x(top), y(left), z(bottom), w(right)
  var edge = jsb.Device.getSafeAreaEdge();
  var screenSize = cc.view.getFrameSize();

  // Get leftBottom and rightTop point in UI coordinates
  var leftBottom = new cc.Vec2(edge.y, screenSize.height - edge.z);
  var rightTop = new cc.Vec2(screenSize.width - edge.w, edge.x);

  // Returns the real location in view.
  var relatedPos = { left: 0, top: 0, width: screenSize.width, height: screenSize.height };
  cc.view.convertToLocationInView(leftBottom.x, leftBottom.y, relatedPos, leftBottom);
  cc.view.convertToLocationInView(rightTop.x, rightTop.y, relatedPos, rightTop);
  // convert view point to design resolution size
  cc.view._convertPointWithScale(leftBottom);
  cc.view._convertPointWithScale(rightTop);

  return cc.rect(leftBottom.x, leftBottom.y, rightTop.x - leftBottom.x, rightTop.y - leftBottom.y);
};

},{}]},{},[1]);
