package tabfragment;

import android.annotation.TargetApi;
import android.app.Activity;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Build;
import android.os.SystemClock;
import android.provider.Settings;
import android.support.v4.app.NotificationCompat;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.text.TextUtils;
import android.util.TypedValue;
import android.view.View;
import android.widget.Toast;

import org.json.JSONArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import base.BaseFragmentActivity;
import base.TestBaseFragment;
import contants.Constant;
import contants.FragmentPage;
import customview.FloatingStickItemDecoration;
import entity.ListGrup;
import in.srain.cube.views.ptr.PtrFrameLayout;
import mvp.view.ListActivity;
import pullrefresh.XctPtrLayout;
import pullrefresh.XctRefreshLayout;
import recycleview.adapter.MainPageItemAdapter;
import recycleview.view.InvestorBillMainActivity;
import rn.BaseRnActivity;
import rn.RnListActivity;
import rn.RnViewActivity;
import testdb.TestDBApiActivity;
import utils.Bus;
import utils.ColorUtils;
import utils.HkStockUtil;
import utils.NotificationsUtils;
import utils.ToastUtils;
import view.niudong.com.demo.ClideAidlConnActivity;
import view.niudong.com.demo.CoolTranslucentActivity;
import view.niudong.com.demo.FragMentTabHostActivity;
import view.niudong.com.demo.FragmentStackActivity;
import view.niudong.com.demo.FragmentVPActivity;
import view.niudong.com.demo.Main2Activity;
import view.niudong.com.demo.MainTabActivity;
import view.niudong.com.demo.MyApplication;
import view.niudong.com.demo.NavigationMainActivity;
import view.niudong.com.demo.NewActivity;
import view.niudong.com.demo.R;
import view.niudong.com.demo.RxBusActivity;
import view.niudong.com.demo.SlideScrollActivity;
import view.niudong.com.demo.TestHtmlJsActivity;
import view.niudong.com.demo.TestLeakActivity;
import view.niudong.com.demo.TestOnClickActivity;
import view.niudong.com.demo.TestPayActivity;
import view.niudong.com.demo.TranslucentActivity;
import view.niudong.com.demo.receiver.MyReceiver;
import view.niudong.com.demo.receiver.NotificationReceiver;

import static android.content.Context.NOTIFICATION_SERVICE;
import static view.niudong.com.demo.MainTabActivity.NOTIFY_CLICK;

/**
 * mFramePageListener.navigate(2);
 * 名称：首页
 * Created by niudong on 2018/5/29.
 * Tel：18811793194
 * VersionChange：港股通5.5.2
 * mFramePageListener = (IFramePage) activity;
 */
public class HomeFragment extends TestBaseFragment implements MainPageItemAdapter.OnItemClickListener {
    private static final String TAG = "GenerateQrCodeActivity";
    private List<String> mResultData = new ArrayList<>();//adapter数据源
    private Map<Integer, String> keys = new HashMap<>();//存放所有key的位置和内容
    private MainPageItemAdapter adapter;
    private RecyclerView rv;

    private LinearLayoutManager layoutManager;
    private XctPtrLayout mPullDownView;
    private IFramePage iFramePage;

    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        iFramePage = (IFramePage) activity;
    }

    @Override
    protected int getLayoutResId() {
        return R.layout.activity_item_d;
    }

    @Override
    protected String getFragmentTitle() {
        return "咦，我要留下来看个究竟";
    }

    @Override
    protected void initView(View view) {
        super.initView(view);
        rv = (RecyclerView) view.findViewById(R.id.rv);
        mPullDownView = (XctPtrLayout) view.findViewById(R.id.pull);
        //禁止下拉刷新头左右滑动
        mPullDownView.disableWhenHorizontalMove(true);

        JSONArray jsonArray = new JSONArray();
        for (int i = 0; i < 2; i++) {
            jsonArray.put("/" + "11" + i);
        }


        String josnResult = jsonArray.toString();


    }

    @Override
    protected void initListener() {
        super.initListener();
        //下拉刷新
        mPullDownView.setPtrHandler(new XctRefreshLayout.DefaultRefreshListener() {
            @Override
            public void onRefreshBegin(PtrFrameLayout ptrFrameLayout) {
                mPullDownView.refreshComplete();
            }

            @Override
            public boolean checkCanDoRefresh(PtrFrameLayout frame, View content, View header) {
                return super.checkCanDoRefresh(frame, rv, header);
            }
        });
    }

    @Override
    protected void initData() {
        super.initData();
        //TODO  模拟分组列表数据
        List<ListGrup> grupList = HkStockUtil.getInstance().getGroupList();
        //第一个为头
        keys.put(0, "");
        for (int i = 0; i < grupList.size(); i++) {
            keys.put(mResultData.size() + 1, grupList.get(i).titleData);//组名
            for (int j = 0; j < grupList.get(i).mChildStr.size(); j++) {
                mResultData.add(grupList.get(i).mChildStr.get(j));
            }
        }


        //设置adapter
        adapter = new MainPageItemAdapter(mResultData, mContext);
        // 添加分割线
        final FloatingStickItemDecoration floatingItemDecoration = new FloatingStickItemDecoration(mContext, ColorUtils.COLOR_LINE, 1, 1);
        floatingItemDecoration.setKeys(keys);
        floatingItemDecoration.setmTitleHeight((int) TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 40, getResources().getDisplayMetrics()));
        rv.addItemDecoration(floatingItemDecoration);

        //设置布局管理器
        layoutManager = new LinearLayoutManager(mContext);
        layoutManager.setOrientation(1);
        rv.setLayoutManager(layoutManager);
        adapter.setmItemClickListener(this);
        rv.setHasFixedSize(true);
        rv.setAdapter(adapter);
        adapter.notifyDataSetChanged();
    }

    @Override
    public void onItemClick(int mPostion, String name) {
        selectPage(name);
    }

    private void selectPage(String name) {
        switch (name) {
            case "采用ItemDecoration悬停":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.RECYCLER_STICK);
                break;
            case "采用自定义布局方式悬停":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.RECYCLER_STICK_LAYOUT);
                break;
            case "采用multitype复杂列表":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.MULIT_TAB);
                break;
            case "采用自定义getItemViewType方式":
                enterActivity(InvestorBillMainActivity.class);
                break;
            case "RecyclerView嵌套水平Recycler无冲突":
                enterActivity(NavigationMainActivity.class);
                break;

            case "采用FragMentTabHost+子Fragment":
                enterActivity(FragMentTabHostActivity.class);
                break;
            case "采用NavigationBar+子Fragment":
                enterActivity(NavigationMainActivity.class);
                break;


            case "封装List列表管理子Fragment":
                enterActivity(MainTabActivity.class);
                break;

            case "折叠一：CoordinatorLayout+RecyclerView":
                enterActivity(CoolTranslucentActivity.class);
                break;
            case "折叠二：NestedScrollView+RecyclerView":
                enterActivity(TranslucentActivity.class);
                break;
            case "折叠三：StickyNavLayout+RecyclerView":
                enterActivity(NewActivity.class);
                break;
            case "折叠四：替换索星ScrollView+Recycler":
                enterActivity(SlideScrollActivity.class);
                break;
            case "折叠五：一个RecyclerView切多Tab（悬停）":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.MULIT_TAB);
                break;

            case "封装接口回调方便传消息":
                enterActivity(RxBusActivity.class);
                break;
            case "列表点击跳详情多页面--左右滑动":
                enterActivity(InvestorBillMainActivity.class);
                break;

            case "数据库测试--Api 和Sql":
                enterActivity(TestDBApiActivity.class);
                break;

            case "Fragment任务栈处理":
                enterActivity(FragmentStackActivity.class);
                break;
            case "LazyFragment懒加载+ViewPager":
                enterActivity(FragmentVPActivity.class);
                break;

            case "App内存泄漏那些事":
                enterActivity(TestLeakActivity.class);
                break;

            case "Okhttp-Ping++支付":
                enterActivity(TestPayActivity.class);
                break;

            case "Mvp+Retrofit+Okhttp列表(接口不通有代码)":
                enterActivity(ListActivity.class);
                break;

            case "H5和Js互调":
                enterActivity(TestHtmlJsActivity.class);
                break;

            case "包名得到签名":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.PACKAGE_TEST);
                break;

            case "线性布局写Tab切换":
                enterActivity(TestOnClickActivity.class);
                break;

            case "WebView预加载":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.MULIT_WEBVIEW);
                break;

            case "Aidl跨进程通讯":
                enterActivity(ClideAidlConnActivity.class);
                break;

            case "自定义图表相关":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.CUSTOMVIEW_FRAGMENT);
                break;

            case "BitMap合成图片":
                enterActivity(Main2Activity.class);
                break;

            case "自定义刻度尺":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.CUSTOMVIEWCHI_FRAGMENT);
                break;
            case "自定义钟表":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.CUSTOM_CLOCK_FRAGMENT);
                break;
            case "自定义股票K线":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.STOCK_KLINE_FRAGMENT);
                break;

            case "Pop中的RecyclerView":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.POP_RECYCLER_FRAGMENT);
                break;
            case "手动解析Json":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.DATA_JSON_FRAGMENT);
                break;
            case "加载更多的RecyclerView":
                BaseFragmentActivity.startFragment(mContext, FragmentPage.LOADMOR_RECYLER_FRAGMENT);
                break;
            case "ReactNative分组悬停列表":
                enterActivity(RnViewActivity.class);
                break;
            case "点我跳转到ReactNative列表":
                enterActivity(RnListActivity.class);
                break;
            case "点我显示通知栏":
//                sendChatMsg();
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    NotificationChannel channel = MyApplication.getManager().getNotificationChannel("notifation");
                    if (channel.getImportance() == NotificationManager.IMPORTANCE_NONE && (
                            (android.os.Build.MANUFACTURER.toLowerCase()).contains("vivo") || (android.os.Build.MANUFACTURER.toLowerCase()).contains("oppo"))) {
                        Intent intent = new Intent(Settings.ACTION_CHANNEL_NOTIFICATION_SETTINGS);
                        intent.putExtra(Settings.EXTRA_APP_PACKAGE, mContext.getPackageName());
                        intent.putExtra(Settings.EXTRA_CHANNEL_ID, channel.getId());
                        startActivity(intent);
                        Toast.makeText(mContext, "请手动将通知打开", Toast.LENGTH_SHORT).show();
                    } else {
                        if (NotificationsUtils.notificationIsEnabled(mContext)) {
                            showNotifation(mContext, 9999999);
                        } else {
                            NotificationsUtils.go2Setting(mContext);
                        }
                    }
                }
                break;
            default:
                break;

        }
    }


    private void showNotifation(Context context, int notifation_id) {
        String message = "{\"custom_content\":{\"app_id\":\"1\",\"goto_type\":" + "10102" + ",\"app_version\":\"2.0.0\",\"certified_id\":\"\",\"certified_type\":\"\",\"date\":\"2019-01-04 15:34:33\",\"flag\":\"1\",\"post_id\":\"\",\"type\":0,\"uid\":\"\",\"unread\":\"您有11条未读信息\"},\"goto_id1\":0,\"goto_id2\":0,\"goto_url\":\"\",\"notice_id\":\"\",\"notice_uid\":\"\",\"send_type\":\"single\",\"user_id\":\"23286201\"}";
        try {
            if (message != null) { // 自定义内容获取方式，mykey和myvalue对应透传消息推送时自定义内容中设置的键和值
                String bigPicPath = "";
                String contentTitle = "";
                //内容
                String alert = "2019，6666666";

                Intent reciverNotify = new Intent(context, NotificationReceiver.class);
                //key 自行处理
                reciverNotify.setAction(MainTabActivity.NOTIFY_CLICK);
                PendingIntent contentIntent = PendingIntent.getBroadcast(context,
                        (int) SystemClock.uptimeMillis(), reciverNotify, PendingIntent.FLAG_CANCEL_CURRENT);
                NotificationCompat.Builder builder = new NotificationCompat.Builder(context, "notifation")
                        .setSmallIcon(R.mipmap.logo)
                        .setColor(Color.parseColor("#2CC7C5"))
                        .setAutoCancel(true)
                        .setDefaults(Notification.DEFAULT_ALL)
                        .setContentIntent(contentIntent);
                builder.setContentTitle(TextUtils.isEmpty(contentTitle) ? "牛栋同学" : contentTitle);
                if (!TextUtils.isEmpty(alert)) {
                    builder.setContentText(alert);
                }
                if (!TextUtils.isEmpty(bigPicPath)) {
                    Bitmap bigPic = BitmapFactory.decodeFile(bigPicPath);
                    if (null == bigPic) {
                        NotificationCompat.BigPictureStyle style = new NotificationCompat.BigPictureStyle();
                        style.bigPicture(bigPic);
                        builder.setStyle(style);
                    }
                }
                MyApplication.getManager().cancel(notifation_id);
                MyApplication.getManager().notify((int) System.currentTimeMillis(), builder.build());

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
