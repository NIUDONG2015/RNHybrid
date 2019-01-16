package rn;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.devsupport.DoubleTapReloadRecognizer;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

import view.niudong.com.demo.MyApplication;
import view.niudong.com.demo.R;

/**
 * RN下的数据界面  rn.BaseRnActivity
 * 集成RN的页面注册此模块
 */
public abstract class BaseRnActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
    private Boolean isSupportDev = true;
    private DoubleTapReloadRecognizer mDoubleTapReloadRecognizer;
    private TextView mTexTitle;
    protected LayoutInflater mInflater;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
//        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
//                WindowManager.LayoutParams.FLAG_FULLSCREEN);
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(true)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mDoubleTapReloadRecognizer = new DoubleTapReloadRecognizer();
        //这里的AndroidRnDemoApp必须对应“index.js”中的“AppRegistry.registerComponent()”的第一个参数
        mReactRootView.startReactApplication(mReactInstanceManager, getModleName(), null);
        //加载ReactRootView到布局中
        setContentView(getLayoutView());
        mTexTitle = findViewById(R.id.tv_title);
        if (mTexTitle != null) {
            mTexTitle.setText(getPageTitle());
        } else {
            throw new IllegalStateException("布局Title不能为空");
        }
        final LinearLayout rnlinearLayout =findViewById(R.id.root_rn_view);
        if (rnlinearLayout != null) {
            MyApplication.getHandler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    rnlinearLayout.removeAllViews();
                    initView(rnlinearLayout, mReactRootView);
                    initListener();
                    initData();
                }
            },100);

        } else {
            throw new IllegalStateException("Rn父布局不能为空");
        }

    }


    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    /**
     * ReactInstanceManager生命周期同activity
     */
    @Override
    protected void onPause() {
        super.onPause();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }


    private boolean getUseDeveloperSupport() {
        return mReactInstanceManager != null && isSupportDev;
    }

    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (getUseDeveloperSupport()) {
            if (keyCode == KeyEvent.KEYCODE_MENU) {//Ctrl + M 打开RN开发者菜单
                mReactInstanceManager.showDevOptionsDialog();
                return true;
            }
            boolean didDoubleTapR = Assertions.assertNotNull(mDoubleTapReloadRecognizer).didDoubleTapR(keyCode, getCurrentFocus());
            if (didDoubleTapR) {//双击R 重新加载JS
                mReactInstanceManager.getDevSupportManager().handleReloadJS();
                return true;
            }
        }
        return super.onKeyUp(keyCode, event);
    }

    /**
     * 得到Modle Name
     */
    protected abstract String getModleName();

    protected abstract void initListener();

    protected abstract void initView(LinearLayout mRootRnView, ReactRootView mReactRootView);

    protected abstract void initData();

    protected abstract int getLayoutView();

    protected abstract String getPageTitle();


}
