package rn;

import android.view.View;
import android.widget.LinearLayout;

import com.facebook.react.ReactRootView;

import view.niudong.com.demo.R;

public class RnViewActivity extends BaseRnActivity {
    @Override
    protected String getModleName() {
        return "test";
    }

    @Override
    protected void initListener() {

    }

    @Override
    protected void initView(LinearLayout mRootView, ReactRootView mReactRootView) {
        mRootView.addView(mReactRootView);
    }

    @Override
    protected void initData() {

    }

    @Override
    protected int getLayoutView() {
        return R.layout.activity_rn_view;
    }

    @Override
    protected String getPageTitle() {
        return "ReactNative分组悬停列表";
    }
}
