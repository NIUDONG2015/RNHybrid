import {Dimensions, PixelRatio, Platform,} from 'react-native';

/**
 * 名称： 常用的適配信息
 * Created by niudong on 2018/10/24
 * Tel：18811793194
 * VersionChange：mthq RN 1.0
 */

const {height, width} = Dimensions.get('window'); //设置view占满屏幕宽度
//分割线高度
export const ruleSize = 1 / PixelRatio.get();
//屏幕高度
export const screen_height = height;
//屏幕宽度
export const screen_width = width;
//是不是安卓设备
export const isAndroid = (Platform.OS === 'android');
//是不是ios设备
export const isIOS = (Platform.OS === 'ios');
//IOS界面距离屏幕顶部特殊处理
export const viewIOSMarginTop = isIOS ? 20 : 0;
/**文字大小*/
//重要的内容文字／标题
export const textSize_15 = 15;
/**cell 按钮 高度*/
export const height_44 = 44;
/**
 * App 底部Tab Icon 大小
 */
export const app_tab_size = 24;

export const Size = {
    main_text_size: 20,
    middle_text_size: 16,
    sub_text_size: 14,
    sub_text_large_size: 15,
    sub_date_text_size: 12,
    sub_price_text_size: 11,
    sub_bot_text_size: 10,
    sub_bt_text_size: 12,
    sub_hotbt_text_size: 8,
    public_margin: 12,
    nav_bar_height_ios: 50,
    nav_bar_height_android: 51,
    sub_notice_text_size: 13,
    x80: 80,
    x90: 85,
    x100: 100,
    mleft20:20,
    mleft29:29,

};

