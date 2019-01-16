package fragment;

import android.app.Activity;
import android.content.Context;
import android.view.View;
import android.widget.LinearLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import base.TestBaseFragment;
import view.niudong.com.demo.R;

public class ReactFragment extends TestBaseFragment {
    private LinearLayout mRootRnView;
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
    @Override
    protected int getLayoutResId() {
        return R.layout.fragment_react_list;
    }

    @Override
    protected String getFragmentTitle() {
        return "Fragment加载ReactNative";
    }

    @Override
    protected void initView(View view) {
        super.initView(view);
        mRootRnView = view.findViewById(R.id.ll_root_rn_view);
        loadRnModuleName("test");
        if (null!=mReactRootView)
            mRootRnView.addView(mReactRootView);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
            if (mReactInstanceManager != null) {
                mReactInstanceManager.onHostDestroy(mContext);
            }
    }
    /**
     * 加载rn View
     *
     * @param moduleName rn 名称
     */
    public void  loadRnModuleName(String moduleName) {
        mReactRootView = new ReactRootView(mContext);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(mContext.getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(true)
                .setInitialLifecycleState(LifecycleState.BEFORE_CREATE)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, moduleName, null);
    }
}
