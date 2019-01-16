package rn;

import android.widget.LinearLayout;

import com.facebook.react.ReactRootView;

import view.niudong.com.demo.R;

public class RnListActivity extends BaseRnActivity {
    String  titleStr="Hello！Native, 我是ReactNative列表";

    @Override
    protected String getModleName() {
        return "RNHybrid";
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
        return titleStr;
    }

    @Override
    protected void initListener() {

    }
}
