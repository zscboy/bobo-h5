/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package org.cocos2dx.javascript;

import org.cocos2dx.lib.Cocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxGLSurfaceView;

import android.net.Uri;
import android.os.Bundle;
import com.google.gson.Gson;

import android.content.Intent;
import android.content.res.Configuration;
import android.util.Log;

import com.tencent.mm.opensdk.modelmsg.SendAuth;
import com.tencent.mm.opensdk.modelmsg.SendMessageToWX;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.modelmsg.WXWebpageObject;
import com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import net.sourceforge.simcpux.R;
import net.sourceforge.simcpux.Util;

public class AppActivity extends Cocos2dxActivity {
	public static String appId = "wxd930ea5d5a258f4f";
    //public static IWXAPI api;
    private static AppActivity app = null;
    private static IWXAPI api;
    private static final int THUMB_SIZE = 150;
    private static final int mTargetScene = SendMessageToWX.Req.WXSceneSession;
    private String shareRoomNumber = "";

	
	public static void callJsFunction(final String resp) {
        Log.d("llwant", "AppActivity.callJsFunction() " + resp);
        final String jsonString = resp.replace("\"", "\\\"");
        final String jsCallStr = String.format("cc.NativeJsFun(\"%s\");", jsonString);
        Log.d("llwant", "jsCallStr:" + jsCallStr);
        app.runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(jsCallStr);//直接调用到js里面
            }
        });
    }

    private static String buildTransaction(final String type) {
        return (type == null) ? String.valueOf(System.currentTimeMillis()) : type + System.currentTimeMillis();
    }

    public static void shareWebPage(final String title, final String description, final String url) {
	    Log.d("llwant", "AppActivity.shareWebPage, title:" + title + ", description:"+ description + ", url:" + url);
        WXWebpageObject webpage = new WXWebpageObject();
        webpage.webpageUrl = url;
        WXMediaMessage msg = new WXMediaMessage(webpage);
        msg.title = title;
        msg.description = description;
        Bitmap bmp = BitmapFactory.decodeResource(app.getResources(), R.drawable.zjmj);
        Bitmap thumbBmp = Bitmap.createScaledBitmap(bmp, THUMB_SIZE, THUMB_SIZE, true);
        bmp.recycle();
        msg.thumbData = Util.bmpToByteArray(thumbBmp, true);

        SendMessageToWX.Req req = new SendMessageToWX.Req();
        req.transaction = buildTransaction("webpage");
        req.message = msg;
        req.scene = mTargetScene;
        api.sendReq(req);
    }
	 //微信登录接口
     public static void wxLogin(){
         Log.d("llwant", "AppActivity.wxLogin");
         requestCode();      //向微信服务器请求code
     }

     public static String getShareRoomNumber() {
	     final String roomNumber = app.shareRoomNumber;
	     app.shareRoomNumber = "";
	     Log.d("llwant", "AppActivity.getShareRoomNumber:" + roomNumber);
	     return roomNumber;
     }
     //获取微信登录第一步的code
     public static void requestCode(){
         final SendAuth.Req req = new SendAuth.Req();
         req.scope = "snsapi_userinfo";
         req.state = "none";
         //利用微信api发送请求
         api.sendReq(req);
     }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            // Android launched another instance of the root activity into an existing task
            //  so just quietly finish and go away, dropping the user back into the activity
            //  at the top of the stack (ie: the last state of this task)
            // Don't need to finish it again since it's finished in super.onCreate .
            return;
        }
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.getInstance().init(this);

        Log.e("llwant", "AppActivity.onCreate");
        api = WXAPIFactory.createWXAPI(this, appId, true);
        api.registerApp(appId);

		app = this;

        Intent intent = getIntent();
        String scheme = intent.getScheme();
        String dataString = intent.getDataString();
        Uri uri = intent.getData();
        Log.d("llwant", "AppActivity.onCreate scheme:" + scheme + ", dataString:"+dataString);
        if (uri != null) {
            Gson gson = new Gson();
            String urlJson = gson.toJson(uri);
            Log.d("llwant", "urlJson:"+ urlJson);

            if (!uri.getScheme().equals("haibintest")) {
                return;
            }

            final String queryString = uri.getQuery();
            this.shareRoomNumber =  uri.getQueryParameter("roomNumber");

//            final String jsCallStr = String.format("cc.CallFromShare(\"%s\");", uri.getQuery());
//            this.runOnUiThread(new Runnable() {
//                @Override
//                public void run() {
//                    Cocos2dxJavascriptJavaBridge.evalString(jsCallStr);//直接调用到js里面
//                }
//            });
        }
    }
    
    @Override
    public Cocos2dxGLSurfaceView onCreateView() {
        Cocos2dxGLSurfaceView glSurfaceView = new Cocos2dxGLSurfaceView(this);
        // TestCpp should create stencil buffer
        glSurfaceView.setEGLConfigChooser(5, 6, 5, 0, 16, 8);
        SDKWrapper.getInstance().setGLSurfaceView(glSurfaceView, this);

        return glSurfaceView;
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.getInstance().onResume();

    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.getInstance().onPause();

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        SDKWrapper.getInstance().onDestroy();

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.getInstance().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.getInstance().onNewIntent(intent);

        String scheme = intent.getScheme();
        String dataString = intent.getDataString();
        Uri uri = intent.getData();
        Log.d("llwant", "AppActivity.onNewIntent scheme:" + scheme + ", dataString:"+dataString);
        if (uri != null) {
            Gson gson = new Gson();
            String urlJson = gson.toJson(uri);
            Log.d("llwant", "urlJson:"+ urlJson + ", queryString:"+ uri.getQuery());

            if (!uri.getScheme().equals("haibintest")) {
                Log.d("llwant", "scheme no haibintest");
                return;
            }

            final String jsCallStr = String.format("cc.CallFromShare(\"%s\");", uri.getQuery());
            Log.d("llwant", "jsCallStr:" + jsCallStr);
            this.runOnGLThread(new Runnable() {
                @Override
                public void run() {
                    Cocos2dxJavascriptJavaBridge.evalString(jsCallStr);//直接调用到js里面
                }
            });
        }
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.getInstance().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.getInstance().onStop();
    }
        
    @Override
    public void onBackPressed() {
        SDKWrapper.getInstance().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.getInstance().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.getInstance().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.getInstance().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.getInstance().onStart();
        super.onStart();
    }
}
