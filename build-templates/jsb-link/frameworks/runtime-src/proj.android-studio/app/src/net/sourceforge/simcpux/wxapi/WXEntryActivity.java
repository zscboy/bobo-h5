package net.sourceforge.simcpux.wxapi;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.google.gson.Gson;
import com.tencent.mm.opensdk.modelbase.BaseReq;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.modelmsg.SendAuth;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.tencent.mm.opensdk.constants.ConstantsAPI;

import org.cocos2dx.javascript.AppActivity;

public class WXEntryActivity extends Activity implements IWXAPIEventHandler {
    //微信appId
    private IWXAPI api;
	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Log.d("llwant", "WXEntryActivity.onCreate");
        super.onCreate(savedInstanceState);
        
		api = WXAPIFactory.createWXAPI(this, AppActivity.appId, true);

        try {
            Intent intent = getIntent();
        	api.handleIntent(intent, this);
        } catch (Exception e) {
        	e.printStackTrace();
        }
    }
    @Override
    protected void onNewIntent(Intent intent) {
		super.onNewIntent(intent);
		
		setIntent(intent);
        api.handleIntent(intent, this);
    }
	
    @Override
    public void onReq(BaseReq req) {
        Gson gson = new Gson();
        String json = gson.toJson(req);
        Log.d("llwant", "WXEntryActivity.onReq:" + json);
		switch (req.getType()) {
		case ConstantsAPI.COMMAND_GETMESSAGE_FROM_WX:	
			break;
		case ConstantsAPI.COMMAND_SHOWMESSAGE_FROM_WX:
			break;
		default:
			break;
		}
        finish();

    }
    //向微信发送的请求的响应信息回调该方法
 
    @Override
    public void onResp(BaseResp resp) {
        Gson gson = new Gson();
        String json = gson.toJson(resp);
		Log.d("llwant", "WXEntryActivity.onResp:" + json);
        AppActivity.callJsFunction(json);
        if (resp.errCode != BaseResp.ErrCode.ERR_OK) {
			Log.e("llwant", "WXEntryActivity.onResp: " + json);
		}

        finish();
    }
       
}