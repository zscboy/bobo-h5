package org.cocos2dx.javascript;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

import org.cocos2dx.javascript.AppActivity;

public class AppRegister extends BroadcastReceiver {

	@Override
	public void onReceive(Context context, Intent intent) {
		Log.d("llwant", "AppRegister.onReceive");
		final IWXAPI api = WXAPIFactory.createWXAPI(context, null,true);

		// 将该app注册到微信
		api.registerApp(AppActivity.appId);
	}
}
