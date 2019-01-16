package utils;

import android.app.Activity;
import android.content.Context;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import java.util.HashMap;
import java.util.Map;

import view.niudong.com.demo.MyApplication;

import static com.tencent.bugly.beta.tinker.TinkerManager.getApplication;

/**
 * 名称：
 * Created by niudong on 2018/7/4.
 * Tel：18811793194
 * VersionChange：港股通5.5.2
 */
public class RnViewSingletonUtils {
    private ReactRootView mReactRootView;
    private static Context mContext;
    private ReactInstanceManager mReactInstanceManager;

    private RnViewSingletonUtils() {
    }


    public static RnViewSingletonUtils getInstance(Context context) {
        mContext = context;
        return InnerHolder.mInstance;
    }


    //内部类  创建实例 final 无法修改  线程安全的
    private static class InnerHolder {
        private static final RnViewSingletonUtils mInstance = new RnViewSingletonUtils();
    }

    /**
     * 加载rn View
     *
     * @param moduleName rn 名称
     */
    public synchronized ReactRootView loadRnModuleName(String moduleName) {
        mReactRootView = new ReactRootView((Activity) mContext);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(((Activity) mContext).getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(true)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, moduleName, null);

        return mReactRootView;
    }

    public void clean() {
        if (mReactRootView != null) {
            mReactRootView = null;
        }
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy((Activity) mContext);
            mReactInstanceManager = null;
        }

    }
}
