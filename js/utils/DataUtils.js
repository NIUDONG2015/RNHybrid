/**
 * 名称：
 * Created by niudong on 2018/10/24
 * Tel：18811793194
 * VersionChange：mthq RN 1.0
 */

import React, {Component} from 'react';


export let currselect = null

export function getListDatas() {
    let resultData = [
        {key: 'NiuDong'},
        {key: 'Devin'},
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'NiuDong'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'NiuDong'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'NiuDong'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'NiuDong'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'NiuDong'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'NiuDong'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'NiuDong'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Julie'},
        {key: 'Hello'},
    ];
    return resultData;
}


export function getListDatasTwo() {
    let resultData = [
        {key: 'NiuDong'},
        {key: 'Devin'},
        {key: 'NiuDong'},
        {key: 'Jackson'},

    ];
    return resultData;
}

export function getListDatasServer() {
    let resultData = [
        {
            "id": 10000,
            "imageUri": "https://image.mytour.vip/minapp/v1/home/vist/1.png",
            "linkUri": "/pages/h5?url=https%3a%2f%2fblue.mytour.vip%2fequities%3fequityId%3d20000%26site%3dweChat",
            "title": "和规范对我国服务各方不二",
            "descText": "私人管家签证服务 全球保签",
            "field": 0,
            "show": true,
            "router": true
        },
        {
            "id": 10000,
            "imageUri": "https://image.mytour.vip/minapp/v1/home/vist/2.png",
            "linkUri": "/pages/h5?url=https%3a%2f%2fapp.mytour.vip%2fphone%2flines%2fshownew_190399.html%3fsite%3dweChat",
            "title": "we9fweyfyiei9wr",
            "descText": "随着现代人对健康理念和养生观念的越来越重视，很多人发现...",
            "field": 0,
            "show": true,
            "router": true
        },

        {
            "id": 10000,
            "imageUri": "https://image.mytour.vip/minapp/v1/home/vist/3.png",
            "linkUri": "/pages/h5?url=https%3a%2f%2fapp.mytour.vip%2fphone%2flines%2fshow_216.html%3fsite%3dweChat",
            "title": "fweqfwegfwefggwe",
            "descText": "带孩子去哪了好？来泰国享受亲子游吧！",
            "field": 0,
            "show": true,
            "router": true
        },

        {
            "id": 898787,
            "imageUri": "https://image.mytour.vip/minapp/v1/home/vist/3.png",
            "linkUri": "/pages/h5?url=https%3a%2f%2fapp.mytour.vip%2fphone%2flines%2fshow_216.html%3fsite%3dweChat",
            "title": "fweqfwegfwefggwe",
            "descText": "带孩子去哪了好？来泰国享受亲子游吧！",
            "field": 0,
            "show": true,
            "router": true
        },

        {
            "id": 99999,
            "imageUri": "https://image.mytour.vip/minapp/v1/home/vist/3.png",
            "linkUri": "/pages/h5?url=https%3a%2f%2fapp.mytour.vip%2fphone%2flines%2fshow_216.html%3fsite%3dweChat",
            "title": "fweqfwegfwefggwe",
            "descText": "带孩子去哪了好？来泰国享受亲子游吧！",
            "field": 0,
            "show": true,
            "router": true
        }
    ]

    return resultData;
}

export function getListResult() {

    let result = [
        {
            "imageUri": "https://image.mytour.vip/minapp/v1/home/swiper/taiguo.png",
            "linkUri": "/pages/h5?url=https%3a%2f%2fapp.mytour.vip%2fphone%2flines%2fshow_303.html%3fsite%3dweChat",
            "swiperId": 0,
            "show": true,
            "router": true,

            "navigato": false
        },
        {
            "imageUri": "https://image.mytour.vip/minapp/v1/home/swiper/1.png",
            "linkUri": "/pages/card/index",
            "swiperId": 0,
            "show": true,
            "router": true,
            "navigato": true
        },
        {
            "imageUri": "https://image.mytour.vip/minapp/v1/home/swiper/2.png",
            "linkUri": "/pages/hotel/index",
            "swiperId": 0,
            "show": true,
            "router": true,
            "navigato": true
        },
        {
            "imageUri": "https://image.mytour.vip/minapp/v1/home/swiper/3.png",
            "linkUri": "/pages/h5?url=https%3a%2f%2fapp.mytour.vip%2fphone%2flines%2fshow_255.html%3fsite%3dweChat",
            "swiperId": 0,
            "show": true,
            "router": true,
            "navigato": false
        },
        {
            "imageUri": "https://image.mytour.vip/minapp/v1/home/swiper/4.png",
            "linkUri": "/pages/h5?url=https%3a%2f%2fgoods.mytour.vip%2findex.php%3fs%3d%2fwap%2fgoods%2fgoodsdetail%26id%3d67%26site%3dweChatt",
            "swiperId": 0,
            "show": true,
            "router": true,
            "navigato": false
        }
    ]
    return result;
}


export function getPrivilegeListResult() {

    let result = [
        {
            "id": "20000",
            "namePrimary": "环球保签",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fo26vwdGLidjVe3rIx-tYw8ouTsH",
            "isClick": "1"
        },
        {
            "id": "40000",
            "namePrimary": "口腔护理",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fm5OoDEVTFEoE6zwVHDt2U3ubFv5"
            ,
            "isClick": "0"
        },
        {
            "id": "80000",
            "namePrimary": "生活写真",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FgAV1nJz2NARgQZNdoZZmEUaye-n"
            ,
            "isClick": "1"
        },
        {
            "id": "30000",
            "namePrimary": "代办驾照",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FvDl3lJhDJmDWe-V1wIbehgPvXYi"
            ,
            "isClick": "0"
        },
        {
            "id": "50000",
            "namePrimary": "肿瘤检测",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FjBxvc6BVcxvurfHrK_Y3IyqGc89"
            ,
            "isClick": "0"
        },
        {
            "id": "60000",
            "namePrimary": "净水设备",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fi_-vMcirhFG_zO4_NMQC0ICiPG2"
            ,
            "isClick": "0"
        },
        {
            "id": "140000",
            "namePrimary": "畅游千个景区",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FpwzDkXnpgQWHSSAAtOC3Bh4drYw"
            ,
            "isClick": "0"
        },
        {
            "id": "150000",
            "namePrimary": "海外租车",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FsKWWTwnMhQSj7f1srEMNo91o5mS"
            ,
            "isClick": "0"
        },
        {
            "id": "160000",
            "namePrimary": "星级酒店自助餐",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fjc0waVBGejwLHA11XfKYz5GSVGu"
            ,
            "isClick": "1"
        },
        {
            "id": "170000",
            "namePrimary": "健康旅⾏定制",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fnws3yj9H7Evka_PIKinNn2eeQK7"
            ,
            "isClick": "0"
        },
        {
            "id": "190000",
            "namePrimary": "高额信用卡",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fjoe-tIhRX4KOd-gsizSJlnXPF7b"
            ,
            "isClick": "0"
        },
        {
            "id": "210000",
            "namePrimary": "7天健身房体验",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FvosE_qTxfsX7jivLc5fON60uPrG"
            ,
            "isClick": "0"
        }
    ]
    return result;
}

export function getPrivilegeListOrderResult() {

    let result = [
        {
            "id": "20000",
            "namePrimary": "环球保签",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fo26vwdGLidjVe3rIx-tYw8ouTsH",
            "isClick": "1"
        },
        {
            "id": "40000",
            "namePrimary": "口腔护理",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fm5OoDEVTFEoE6zwVHDt2U3ubFv5"
            ,
            "isClick": "0"
        },
        {
            "id": "80000",
            "namePrimary": "生活写真",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FgAV1nJz2NARgQZNdoZZmEUaye-n"
            ,
            "isClick": "1"
        },
        {
            "id": "30000",
            "namePrimary": "代办驾照",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FvDl3lJhDJmDWe-V1wIbehgPvXYi"
            ,
            "isClick": "0"
        },
        {
            "id": "50000",
            "namePrimary": "肿瘤检测",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FjBxvc6BVcxvurfHrK_Y3IyqGc89"
            ,
            "isClick": "0"
        },
        {
            "id": "60000",
            "namePrimary": "净水设备",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fi_-vMcirhFG_zO4_NMQC0ICiPG2"
            ,
            "isClick": "0"
        },
        {
            "id": "140000",
            "namePrimary": "畅游千个景区",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FpwzDkXnpgQWHSSAAtOC3Bh4drYw"
            ,
            "isClick": "0"
        },
        {
            "id": "150000",
            "namePrimary": "海外租车",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FsKWWTwnMhQSj7f1srEMNo91o5mS"
            ,
            "isClick": "0"
        },
        {
            "id": "160000",
            "namePrimary": "星级酒店自助餐",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fjc0waVBGejwLHA11XfKYz5GSVGu"
            ,
            "isClick": "1"
        },
        {
            "id": "170000",
            "namePrimary": "健康旅⾏定制",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fnws3yj9H7Evka_PIKinNn2eeQK7"
            ,
            "isClick": "0"
        },
        {
            "id": "190000",
            "namePrimary": "高额信用卡",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/Fjoe-tIhRX4KOd-gsizSJlnXPF7b"
            ,
            "isClick": "0"
        },
        {
            "id": "210000",
            "namePrimary": "7天健身房体验",
            "nameSub": "",
            "imageUrl": "https://image.mytour.vip/FvosE_qTxfsX7jivLc5fON60uPrG"
            ,
            "isClick": "0"
        }
    ]
    return result;
}

export function getCityData() {
    let result = [
        {
            "id": 1,
            "provinceId": "0100",
            "cityId": "0101",
            "cityName": "北京",
            "pinyin": "beijing",
            "py": "bj"
        },
        {
            "id": 2,
            "provinceId": "0200",
            "cityId": "0201",
            "cityName": "上海",
            "pinyin": "shanghai",
            "py": "sh"
        },
        {
            "id": 3,
            "provinceId": "0300",
            "cityId": "0301",
            "cityName": "天津",
            "pinyin": "tianjin",
            "py": "tj"
        },
        {
            "id": 4,
            "provinceId": "0400",
            "cityId": "0401",
            "cityName": "重庆",
            "pinyin": "zhongqing",
            "py": "zq"
        },
        {
            "id": 5,
            "provinceId": "0400",
            "cityId": "0402",
            "cityName": "万州",
            "pinyin": "wanzhou",
            "py": "wz"
        },
        {
            "id": 6,
            "provinceId": "0400",
            "cityId": "0403",
            "cityName": "丰都",
            "pinyin": "fengdou",
            "py": "fd"
        },
        {
            "id": 7,
            "provinceId": "0400",
            "cityId": "0404",
            "cityName": "涪陵",
            "pinyin": "fuling",
            "py": "fl"
        },
        {
            "id": 8,
            "provinceId": "0400",
            "cityId": "0405",
            "cityName": "垫江",
            "pinyin": "dianjiang",
            "py": "dj"
        },
        {
            "id": 9,
            "provinceId": "0400",
            "cityId": "0406",
            "cityName": "武隆",
            "pinyin": "wulong",
            "py": "wl"
        },
        {
            "id": 10,
            "provinceId": "0400",
            "cityId": "0408",
            "cityName": "大足",
            "pinyin": "dazu",
            "py": "dz"
        },
        {
            "id": 11,
            "provinceId": "0400",
            "cityId": "0409",
            "cityName": "合川",
            "pinyin": "hechuan",
            "py": "hc"
        },
        {
            "id": 12,
            "provinceId": "0400",
            "cityId": "0410",
            "cityName": "永川",
            "pinyin": "yongchuan",
            "py": "yc"
        },
        {
            "id": 13,
            "provinceId": "0400",
            "cityId": "0411",
            "cityName": "南川",
            "pinyin": "nanchuan",
            "py": "nc"
        },
        {
            "id": 14,
            "provinceId": "0400",
            "cityId": "0412",
            "cityName": "荣昌",
            "pinyin": "rongchang",
            "py": "rc"
        },
        {
            "id": 15,
            "provinceId": "0400",
            "cityId": "0413",
            "cityName": "铜梁",
            "pinyin": "tongliang",
            "py": "tl"
        },
        {
            "id": 16,
            "provinceId": "0400",
            "cityId": "0414",
            "cityName": "綦江",
            "pinyin": "qijiang",
            "py": "qj"
        },
        {
            "id": 17,
            "provinceId": "0400",
            "cityId": "0415",
            "cityName": "江津",
            "pinyin": "jiangjin",
            "py": "jj"
        },
        {
            "id": 18,
            "provinceId": "0400",
            "cityId": "0416",
            "cityName": "彭水",
            "pinyin": "pengshui",
            "py": "ps"
        },
        {
            "id": 19,
            "provinceId": "0400",
            "cityId": "0417",
            "cityName": "黔江",
            "pinyin": "qianjiang",
            "py": "qj"
        },
        {
            "id": 20,
            "provinceId": "0400",
            "cityId": "0418",
            "cityName": "长寿",
            "pinyin": "zhangshou",
            "py": "zs"
        },
        {
            "id": 21,
            "provinceId": "0400",
            "cityId": "0419",
            "cityName": "酉阳",
            "pinyin": "youyang",
            "py": "yy"
        },
        {
            "id": 22,
            "provinceId": "0400",
            "cityId": "0420",
            "cityName": "秀山",
            "pinyin": "xiushan",
            "py": "xs"
        },
        {
            "id": 23,
            "provinceId": "0400",
            "cityId": "0421",
            "cityName": "万盛",
            "pinyin": "wansheng",
            "py": "ws"
        },
        {
            "id": 24,
            "provinceId": "0500",
            "cityId": "0501",
            "cityName": "石家庄",
            "pinyin": "shijiazhuang",
            "py": "sjz"
        },
        {
            "id": 25,
            "provinceId": "0500",
            "cityId": "0502",
            "cityName": "承德",
            "pinyin": "chengde",
            "py": "cd"
        },
        {
            "id": 26,
            "provinceId": "0500",
            "cityId": "0503",
            "cityName": "秦皇岛",
            "pinyin": "qinhuangdao",
            "py": "qhd"
        },
        {
            "id": 27,
            "provinceId": "0500",
            "cityId": "0504",
            "cityName": "南戴河",
            "pinyin": "nandaihe",
            "py": "ndh"
        },
        {
            "id": 28,
            "provinceId": "0500",
            "cityId": "0505",
            "cityName": "邢台",
            "pinyin": "xingtai",
            "py": "xt"
        },
        {
            "id": 29,
            "provinceId": "0500",
            "cityId": "0506",
            "cityName": "唐山",
            "pinyin": "tangshan",
            "py": "ts"
        },
        {
            "id": 30,
            "provinceId": "0500",
            "cityId": "0507",
            "cityName": "坝上",
            "pinyin": "bashang",
            "py": "bs"
        },
        {
            "id": 31,
            "provinceId": "0500",
            "cityId": "0508",
            "cityName": "北戴河",
            "pinyin": "beidaihe",
            "py": "bdh"
        },
        {
            "id": 32,
            "provinceId": "0500",
            "cityId": "0509",
            "cityName": "涞源",
            "pinyin": "laiyuan",
            "py": "ly"
        },
        {
            "id": 33,
            "provinceId": "0500",
            "cityId": "0510",
            "cityName": "怀来",
            "pinyin": "huailai",
            "py": "hl"
        },
        {
            "id": 34,
            "provinceId": "0500",
            "cityId": "0511",
            "cityName": "廊坊",
            "pinyin": "langfang",
            "py": "lf"
        },
        {
            "id": 35,
            "provinceId": "0500",
            "cityId": "0512",
            "cityName": "保定",
            "pinyin": "baoding",
            "py": "bd"
        },
        {
            "id": 36,
            "provinceId": "0500",
            "cityId": "0513",
            "cityName": "张家口",
            "pinyin": "zhangjiakou",
            "py": "zjk"
        },
        {
            "id": 37,
            "provinceId": "0500",
            "cityId": "0514",
            "cityName": "衡水",
            "pinyin": "hengshui",
            "py": "hs"
        },
        {
            "id": 38,
            "provinceId": "0500",
            "cityId": "0515",
            "cityName": "邯郸",
            "pinyin": "handan",
            "py": "hd"
        },
        {
            "id": 39,
            "provinceId": "0500",
            "cityId": "0516",
            "cityName": "沧州",
            "pinyin": "cangzhou",
            "py": "cz"
        },
        {
            "id": 40,
            "provinceId": "0500",
            "cityId": "0517",
            "cityName": "任丘",
            "pinyin": "renqiu",
            "py": "rq"
        },
        {
            "id": 41,
            "provinceId": "0500",
            "cityId": "0518",
            "cityName": "涿州",
            "pinyin": "zhuozhou",
            "py": "zz"
        },
        {
            "id": 42,
            "provinceId": "0500",
            "cityId": "0519",
            "cityName": "正定",
            "pinyin": "zhengding",
            "py": "zd"
        },
        {
            "id": 43,
            "provinceId": "0500",
            "cityId": "0520",
            "cityName": "兴隆",
            "pinyin": "xinglong",
            "py": "xl"
        },
        {
            "id": 44,
            "provinceId": "0500",
            "cityId": "0523",
            "cityName": "霸州",
            "pinyin": "bazhou",
            "py": "bz"
        },
        {
            "id": 45,
            "provinceId": "0500",
            "cityId": "0525",
            "cityName": "丰宁",
            "pinyin": "fengning",
            "py": "fn"
        },
        {
            "id": 46,
            "provinceId": "0500",
            "cityId": "0526",
            "cityName": "迁安",
            "pinyin": "qianan",
            "py": "qa"
        },
        {
            "id": 47,
            "provinceId": "0500",
            "cityId": "0527",
            "cityName": "安国",
            "pinyin": "anguo",
            "py": "ag"
        },
        {
            "id": 48,
            "provinceId": "0500",
            "cityId": "0528",
            "cityName": "高碑店",
            "pinyin": "gaobeidian",
            "py": "gbd"
        },
        {
            "id": 49,
            "provinceId": "0500",
            "cityId": "0530",
            "cityName": "涞水",
            "pinyin": "laishui",
            "py": "ls"
        },
        {
            "id": 50,
            "provinceId": "0500",
            "cityId": "0531",
            "cityName": "涿鹿县",
            "pinyin": "zhuoluxian",
            "py": "zlx"
        },
        {
            "id": 51,
            "provinceId": "0500",
            "cityId": "0532",
            "cityName": "武安",
            "pinyin": "wuan",
            "py": "wa"
        },
        {
            "id": 52,
            "provinceId": "0500",
            "cityId": "0533",
            "cityName": "三河",
            "pinyin": "sanhe",
            "py": "sh"
        },
        {
            "id": 53,
            "provinceId": "0500",
            "cityId": "0534",
            "cityName": "山海关",
            "pinyin": "shanhaiguan",
            "py": "shg"
        },
        {
            "id": 54,
            "provinceId": "0500",
            "cityId": "0535",
            "cityName": "野三坡",
            "pinyin": "yesanpo",
            "py": "ysp"
        },
        {
            "id": 55,
            "provinceId": "0500",
            "cityId": "0537",
            "cityName": "玉泉山",
            "pinyin": "yuquanshan",
            "py": "yqs"
        },
        {
            "id": 56,
            "provinceId": "0500",
            "cityId": "0538",
            "cityName": "高阳",
            "pinyin": "gaoyang",
            "py": "gy"
        },
        {
            "id": 57,
            "provinceId": "0500",
            "cityId": "0539",
            "cityName": "唐海",
            "pinyin": "tanghai",
            "py": "th"
        },
        {
            "id": 58,
            "provinceId": "0500",
            "cityId": "0540",
            "cityName": "遵化",
            "pinyin": "zunhua",
            "py": "zh"
        },
        {
            "id": 59,
            "provinceId": "0500",
            "cityId": "0541",
            "cityName": "白洋淀",
            "pinyin": "baiyangdian",
            "py": "byd"
        },
        {
            "id": 60,
            "provinceId": "0500",
            "cityId": "0542",
            "cityName": "藁城",
            "pinyin": "gaocheng",
            "py": "gc"
        },
        {
            "id": 61,
            "provinceId": "0500",
            "cityId": "0543",
            "cityName": "乐亭",
            "pinyin": "leting",
            "py": "lt"
        },
        {
            "id": 62,
            "provinceId": "0500",
            "cityId": "0544",
            "cityName": "沽水",
            "pinyin": "gushui",
            "py": "gs"
        },
        {
            "id": 63,
            "provinceId": "0500",
            "cityId": "0545",
            "cityName": "宣化",
            "pinyin": "xuanhua",
            "py": "xh"
        },
        {
            "id": 64,
            "provinceId": "0500",
            "cityId": "0546",
            "cityName": "宽城",
            "pinyin": "kuancheng",
            "py": "kc"
        },
        {
            "id": 65,
            "provinceId": "0500",
            "cityId": "0547",
            "cityName": "唐县",
            "pinyin": "tangxian",
            "py": "tx"
        },
        {
            "id": 66,
            "provinceId": "0500",
            "cityId": "0548",
            "cityName": "盐山",
            "pinyin": "yanshan",
            "py": "ys"
        },
        {
            "id": 67,
            "provinceId": "0500",
            "cityId": "0549",
            "cityName": "肃宁",
            "pinyin": "suning",
            "py": "sn"
        },
        {
            "id": 68,
            "provinceId": "0500",
            "cityId": "0550",
            "cityName": "泊头",
            "pinyin": "botou",
            "py": "bt"
        },
        {
            "id": 69,
            "provinceId": "0500",
            "cityId": "0551",
            "cityName": "平山县",
            "pinyin": "pingshanxian",
            "py": "psx"
        },
        {
            "id": 70,
            "provinceId": "0500",
            "cityId": "0552",
            "cityName": "崇礼县",
            "pinyin": "chonglixian",
            "py": "clx"
        },
        {
            "id": 71,
            "provinceId": "0500",
            "cityId": "0553",
            "cityName": "蔚县",
            "pinyin": "yuxian",
            "py": "yx"
        },
        {
            "id": 72,
            "provinceId": "0500",
            "cityId": "0554",
            "cityName": "鹿泉",
            "pinyin": "luquan",
            "py": "lq"
        },
        {
            "id": 73,
            "provinceId": "0500",
            "cityId": "0555",
            "cityName": "黄骅",
            "pinyin": "huanghua",
            "py": "hh"
        },
        {
            "id": 74,
            "provinceId": "0500",
            "cityId": "0556",
            "cityName": "定州",
            "pinyin": "dingzhou",
            "py": "dz"
        },
        {
            "id": 75,
            "provinceId": "0500",
            "cityId": "0557",
            "cityName": "香河县",
            "pinyin": "xianghexian",
            "py": "xhx"
        },
        {
            "id": 76,
            "provinceId": "0500",
            "cityId": "0558",
            "cityName": "徐水",
            "pinyin": "xushui",
            "py": "xs"
        },
        {
            "id": 77,
            "provinceId": "0500",
            "cityId": "0559",
            "cityName": "白沟",
            "pinyin": "baigou",
            "py": "bg"
        },
        {
            "id": 78,
            "provinceId": "0500",
            "cityId": "0560",
            "cityName": "河间",
            "pinyin": "hejian",
            "py": "hj"
        },
        {
            "id": 79,
            "provinceId": "0600",
            "cityId": "0601",
            "cityName": "太原",
            "pinyin": "taiyuan",
            "py": "ty"
        },
        {
            "id": 80,
            "provinceId": "0600",
            "cityId": "0602",
            "cityName": "大同",
            "pinyin": "datong",
            "py": "dt"
        },
        {
            "id": 81,
            "provinceId": "0600",
            "cityId": "0603",
            "cityName": "临汾",
            "pinyin": "linfen",
            "py": "lf"
        },
        {
            "id": 82,
            "provinceId": "0600",
            "cityId": "0604",
            "cityName": "五台山",
            "pinyin": "wutaishan",
            "py": "wts"
        },
        {
            "id": 83,
            "provinceId": "0600",
            "cityId": "0605",
            "cityName": "运城",
            "pinyin": "yuncheng",
            "py": "yc"
        },
        {
            "id": 84,
            "provinceId": "0600",
            "cityId": "0606",
            "cityName": "忻州",
            "pinyin": "xinzhou",
            "py": "xz"
        },
        {
            "id": 85,
            "provinceId": "0600",
            "cityId": "0607",
            "cityName": "晋中",
            "pinyin": "jinzhong",
            "py": "jz"
        },
        {
            "id": 86,
            "provinceId": "0600",
            "cityId": "0608",
            "cityName": "平遥",
            "pinyin": "pingyao",
            "py": "py"
        },
        {
            "id": 87,
            "provinceId": "0600",
            "cityId": "0609",
            "cityName": "晋城",
            "pinyin": "jincheng",
            "py": "jc"
        },
        {
            "id": 88,
            "provinceId": "0600",
            "cityId": "0611",
            "cityName": "阳泉",
            "pinyin": "yangquan",
            "py": "yq"
        },
        {
            "id": 89,
            "provinceId": "0600",
            "cityId": "0613",
            "cityName": "阳城",
            "pinyin": "yangcheng",
            "py": "yc"
        },
        {
            "id": 90,
            "provinceId": "0600",
            "cityId": "0615",
            "cityName": "灵石",
            "pinyin": "lingshi",
            "py": "ls"
        },
        {
            "id": 91,
            "provinceId": "0600",
            "cityId": "0616",
            "cityName": "永济",
            "pinyin": "yongji",
            "py": "yj"
        },
        {
            "id": 92,
            "provinceId": "0600",
            "cityId": "0617",
            "cityName": "长治",
            "pinyin": "zhangzhi",
            "py": "zz"
        },
        {
            "id": 93,
            "provinceId": "0600",
            "cityId": "0618",
            "cityName": "朔州",
            "pinyin": "shuozhou",
            "py": "sz"
        },
        {
            "id": 94,
            "provinceId": "0600",
            "cityId": "0619",
            "cityName": "吕梁",
            "pinyin": "lvliang",
            "py": "ll"
        },
        {
            "id": 95,
            "provinceId": "0600",
            "cityId": "0620",
            "cityName": "介休",
            "pinyin": "jiexiu",
            "py": "jx"
        },
        {
            "id": 96,
            "provinceId": "0600",
            "cityId": "0621",
            "cityName": "闻喜",
            "pinyin": "wenxi",
            "py": "wx"
        },
        {
            "id": 97,
            "provinceId": "0600",
            "cityId": "0622",
            "cityName": "左权",
            "pinyin": "zuoquan",
            "py": "zq"
        },
        {
            "id": 98,
            "provinceId": "0600",
            "cityId": "0623",
            "cityName": "浑源",
            "pinyin": "hunyuan",
            "py": "hy"
        },
        {
            "id": 99,
            "provinceId": "0600",
            "cityId": "0624",
            "cityName": "右玉",
            "pinyin": "youyu",
            "py": "yy"
        },
        {
            "id": 100,
            "provinceId": "0600",
            "cityId": "0625",
            "cityName": "霍州",
            "pinyin": "huozhou",
            "py": "hz"
        },
        {
            "id": 101,
            "provinceId": "0600",
            "cityId": "0626",
            "cityName": "高平",
            "pinyin": "gaoping",
            "py": "gp"
        },
        {
            "id": 102,
            "provinceId": "0600",
            "cityId": "0627",
            "cityName": "怀仁",
            "pinyin": "huairen",
            "py": "hr"
        },
        {
            "id": 103,
            "provinceId": "0600",
            "cityId": "0628",
            "cityName": "汾阳",
            "pinyin": "fenyang",
            "py": "fy"
        },
        {
            "id": 104,
            "provinceId": "0600",
            "cityId": "0629",
            "cityName": "孝义",
            "pinyin": "xiaoyi",
            "py": "xy"
        },
        {
            "id": 105,
            "provinceId": "0600",
            "cityId": "0630",
            "cityName": "离石",
            "pinyin": "lishi",
            "py": "ls"
        },
        {
            "id": 106,
            "provinceId": "0700",
            "cityId": "0701",
            "cityName": "呼和浩特",
            "pinyin": "huhehaote",
            "py": "hhht"
        },
        {
            "id": 107,
            "provinceId": "0700",
            "cityId": "0702",
            "cityName": "包头",
            "pinyin": "baotou",
            "py": "bt"
        },
        {
            "id": 108,
            "provinceId": "0700",
            "cityId": "0704",
            "cityName": "锡林浩特",
            "pinyin": "xilinhaote",
            "py": "xlht"
        },
        {
            "id": 109,
            "provinceId": "0700",
            "cityId": "0705",
            "cityName": "鄂尔多斯",
            "pinyin": "eerduosi",
            "py": "eeds"
        },
        {
            "id": 110,
            "provinceId": "0700",
            "cityId": "0706",
            "cityName": "通辽",
            "pinyin": "tongliao",
            "py": "tl"
        },
        {
            "id": 111,
            "provinceId": "0700",
            "cityId": "0707",
            "cityName": "赤峰",
            "pinyin": "chifeng",
            "py": "cf"
        },
        {
            "id": 112,
            "provinceId": "0700",
            "cityId": "0709",
            "cityName": "满洲里",
            "pinyin": "manzhouli",
            "py": "mzl"
        },
        {
            "id": 113,
            "provinceId": "0700",
            "cityId": "0710",
            "cityName": "巴彦淖尔",
            "pinyin": "bayannaoer",
            "py": "byne"
        },
        {
            "id": 114,
            "provinceId": "0700",
            "cityId": "0712",
            "cityName": "呼伦贝尔－海拉尔",
            "pinyin": "hulunbeier－hailaer",
            "py": "hlbe－hle"
        },
        {
            "id": 115,
            "provinceId": "0700",
            "cityId": "0713",
            "cityName": "乌兰察布",
            "pinyin": "wulanchabu",
            "py": "wlcb"
        },
        {
            "id": 116,
            "provinceId": "0700",
            "cityId": "0714",
            "cityName": "乌海",
            "pinyin": "wuhai",
            "py": "wh"
        },
        {
            "id": 117,
            "provinceId": "0700",
            "cityId": "0715",
            "cityName": "和林格尔",
            "pinyin": "helingeer",
            "py": "hlge"
        },
        {
            "id": 118,
            "provinceId": "0700",
            "cityId": "0716",
            "cityName": "阿拉善",
            "pinyin": "alashan",
            "py": "als"
        },
        {
            "id": 119,
            "provinceId": "0700",
            "cityId": "0717",
            "cityName": "宁城",
            "pinyin": "ningcheng",
            "py": "nc"
        },
        {
            "id": 120,
            "provinceId": "0700",
            "cityId": "0718",
            "cityName": "乌兰浩特",
            "pinyin": "wulanhaote",
            "py": "wlht"
        },
        {
            "id": 121,
            "provinceId": "0700",
            "cityId": "0719",
            "cityName": "阿尔山",
            "pinyin": "aershan",
            "py": "aes"
        },
        {
            "id": 122,
            "provinceId": "0700",
            "cityId": "0720",
            "cityName": "加格达奇",
            "pinyin": "jiagedaqi",
            "py": "jgdq"
        },
        {
            "id": 123,
            "provinceId": "0700",
            "cityId": "0721",
            "cityName": "杭锦后旗",
            "pinyin": "hangjinhouqi",
            "py": "hjhq"
        },
        {
            "id": 124,
            "provinceId": "0700",
            "cityId": "0722",
            "cityName": "乌拉特中旗",
            "pinyin": "wulatezhongqi",
            "py": "wltzq"
        },
        {
            "id": 125,
            "provinceId": "0700",
            "cityId": "0723",
            "cityName": "扎鲁特旗",
            "pinyin": "zhaluteqi",
            "py": "zltq"
        },
        {
            "id": 126,
            "provinceId": "0700",
            "cityId": "0725",
            "cityName": "根河－呼伦贝尔",
            "pinyin": "genhe－hulunbeier",
            "py": "gh－hlbe"
        },
        {
            "id": 127,
            "provinceId": "0700",
            "cityId": "0726",
            "cityName": "额尔古纳－呼伦贝尔",
            "pinyin": "eerguna－hulunbeier",
            "py": "eegn－hlbe"
        },
        {
            "id": 128,
            "provinceId": "0700",
            "cityId": "0727",
            "cityName": "室韦－呼伦贝尔",
            "pinyin": "shiwei－hulunbeier",
            "py": "sw－hlbe"
        },
        {
            "id": 129,
            "provinceId": "0800",
            "cityId": "0801",
            "cityName": "大连",
            "pinyin": "dalian",
            "py": "dl"
        },
        {
            "id": 130,
            "provinceId": "0800",
            "cityId": "0802",
            "cityName": "沈阳",
            "pinyin": "shenyang",
            "py": "sy"
        },
        {
            "id": 131,
            "provinceId": "0800",
            "cityId": "0803",
            "cityName": "鞍山",
            "pinyin": "anshan",
            "py": "as"
        },
        {
            "id": 132,
            "provinceId": "0800",
            "cityId": "0804",
            "cityName": "抚顺",
            "pinyin": "fushun",
            "py": "fs"
        },
        {
            "id": 133,
            "provinceId": "0800",
            "cityId": "0805",
            "cityName": "本溪",
            "pinyin": "benxi",
            "py": "bx"
        },
        {
            "id": 134,
            "provinceId": "0800",
            "cityId": "0806",
            "cityName": "丹东",
            "pinyin": "dandong",
            "py": "dd"
        },
        {
            "id": 135,
            "provinceId": "0800",
            "cityId": "0807",
            "cityName": "兴城",
            "pinyin": "xingcheng",
            "py": "xc"
        },
        {
            "id": 136,
            "provinceId": "0800",
            "cityId": "0808",
            "cityName": "新浦",
            "pinyin": "xinpu",
            "py": "xp"
        },
        {
            "id": 137,
            "provinceId": "0800",
            "cityId": "0809",
            "cityName": "盘锦",
            "pinyin": "panjin",
            "py": "pj"
        },
        {
            "id": 138,
            "provinceId": "0800",
            "cityId": "0810",
            "cityName": "锦州",
            "pinyin": "jinzhou",
            "py": "jz"
        },
        {
            "id": 139,
            "provinceId": "0800",
            "cityId": "0812",
            "cityName": "海城",
            "pinyin": "haicheng",
            "py": "hc"
        },
        {
            "id": 140,
            "provinceId": "0800",
            "cityId": "0813",
            "cityName": "铁岭",
            "pinyin": "tieling",
            "py": "tl"
        },
        {
            "id": 141,
            "provinceId": "0800",
            "cityId": "0815",
            "cityName": "营口",
            "pinyin": "yingkou",
            "py": "yk"
        },
        {
            "id": 142,
            "provinceId": "0800",
            "cityId": "0816",
            "cityName": "朝阳",
            "pinyin": "chaoyang",
            "py": "cy"
        },
        {
            "id": 143,
            "provinceId": "0800",
            "cityId": "0818",
            "cityName": "辽阳",
            "pinyin": "liaoyang",
            "py": "ly"
        },
        {
            "id": 144,
            "provinceId": "0800",
            "cityId": "0820",
            "cityName": "葫芦岛",
            "pinyin": "huludao",
            "py": "hld"
        },
        {
            "id": 145,
            "provinceId": "0800",
            "cityId": "0822",
            "cityName": "大石桥",
            "pinyin": "dashiqiao",
            "py": "dsq"
        },
        {
            "id": 146,
            "provinceId": "0800",
            "cityId": "0823",
            "cityName": "阜新",
            "pinyin": "fuxin",
            "py": "fx"
        },
        {
            "id": 147,
            "provinceId": "0800",
            "cityId": "0824",
            "cityName": "凤城",
            "pinyin": "fengcheng",
            "py": "fc"
        },
        {
            "id": 148,
            "provinceId": "0800",
            "cityId": "0825",
            "cityName": "东港",
            "pinyin": "donggang",
            "py": "dg"
        },
        {
            "id": 149,
            "provinceId": "0800",
            "cityId": "0826",
            "cityName": "法库",
            "pinyin": "faku",
            "py": "fk"
        },
        {
            "id": 150,
            "provinceId": "0800",
            "cityId": "0827",
            "cityName": "旅顺",
            "pinyin": "lvshun",
            "py": "ls"
        },
        {
            "id": 151,
            "provinceId": "0800",
            "cityId": "0828",
            "cityName": "瓦房店",
            "pinyin": "wafangdian",
            "py": "wfd"
        },
        {
            "id": 152,
            "provinceId": "0800",
            "cityId": "0829",
            "cityName": "长兴岛",
            "pinyin": "zhangxingdao",
            "py": "zxd"
        },
        {
            "id": 153,
            "provinceId": "0800",
            "cityId": "0830",
            "cityName": "普兰店",
            "pinyin": "pulandian",
            "py": "pld"
        },
        {
            "id": 154,
            "provinceId": "0900",
            "cityId": "0901",
            "cityName": "长春",
            "pinyin": "zhangchun",
            "py": "zc"
        },
        {
            "id": 155,
            "provinceId": "0900",
            "cityId": "0902",
            "cityName": "吉林",
            "pinyin": "jilin",
            "py": "jl"
        },
        {
            "id": 156,
            "provinceId": "0900",
            "cityId": "0903",
            "cityName": "通化",
            "pinyin": "tonghua",
            "py": "th"
        },
        {
            "id": 157,
            "provinceId": "0900",
            "cityId": "0904",
            "cityName": "延吉",
            "pinyin": "yanji",
            "py": "yj"
        },
        {
            "id": 158,
            "provinceId": "0900",
            "cityId": "0905",
            "cityName": "延边",
            "pinyin": "yanbian",
            "py": "yb"
        },
        {
            "id": 159,
            "provinceId": "0900",
            "cityId": "0907",
            "cityName": "长白山池北",
            "pinyin": "zhangbaishanchibei",
            "py": "zbscb"
        },
        {
            "id": 160,
            "provinceId": "0900",
            "cityId": "0909",
            "cityName": "长白山池西",
            "pinyin": "zhangbaishanchixi",
            "py": "zbscx"
        },
        {
            "id": 161,
            "provinceId": "0900",
            "cityId": "0910",
            "cityName": "松原",
            "pinyin": "songyuan",
            "py": "sy"
        },
        {
            "id": 162,
            "provinceId": "0900",
            "cityId": "0911",
            "cityName": "珲春",
            "pinyin": "hunchun",
            "py": "hc"
        },
        {
            "id": 163,
            "provinceId": "0900",
            "cityId": "0912",
            "cityName": "长白山池南",
            "pinyin": "zhangbaishanchinan",
            "py": "zbscn"
        },
        {
            "id": 164,
            "provinceId": "0900",
            "cityId": "0913",
            "cityName": "辽源",
            "pinyin": "liaoyuan",
            "py": "ly"
        },
        {
            "id": 165,
            "provinceId": "0900",
            "cityId": "0914",
            "cityName": "长白山",
            "pinyin": "zhangbaishan",
            "py": "zbs"
        },
        {
            "id": 166,
            "provinceId": "0900",
            "cityId": "0915",
            "cityName": "磐石",
            "pinyin": "panshi",
            "py": "ps"
        },
        {
            "id": 167,
            "provinceId": "0900",
            "cityId": "0916",
            "cityName": "扶余",
            "pinyin": "fuyu",
            "py": "fy"
        },
        {
            "id": 168,
            "provinceId": "0900",
            "cityId": "0917",
            "cityName": "敦化",
            "pinyin": "dunhua",
            "py": "dh"
        },
        {
            "id": 169,
            "provinceId": "0900",
            "cityId": "0918",
            "cityName": "白山",
            "pinyin": "baishan",
            "py": "bs"
        },
        {
            "id": 170,
            "provinceId": "0900",
            "cityId": "0919",
            "cityName": "四平",
            "pinyin": "siping",
            "py": "sp"
        },
        {
            "id": 171,
            "provinceId": "0900",
            "cityId": "0920",
            "cityName": "白城",
            "pinyin": "baicheng",
            "py": "bc"
        },
        {
            "id": 172,
            "provinceId": "1000",
            "cityId": "1001",
            "cityName": "哈尔滨",
            "pinyin": "haerbin",
            "py": "heb"
        },
        {
            "id": 173,
            "provinceId": "1000",
            "cityId": "1002",
            "cityName": "牡丹江",
            "pinyin": "mudanjiang",
            "py": "mdj"
        },
        {
            "id": 174,
            "provinceId": "1000",
            "cityId": "1003",
            "cityName": "亚布力",
            "pinyin": "yabuli",
            "py": "ybl"
        },
        {
            "id": 175,
            "provinceId": "1000",
            "cityId": "1004",
            "cityName": "大庆",
            "pinyin": "daqing",
            "py": "dq"
        },
        {
            "id": 176,
            "provinceId": "1000",
            "cityId": "1005",
            "cityName": "齐齐哈尔",
            "pinyin": "qiqihaer",
            "py": "qqhe"
        },
        {
            "id": 177,
            "provinceId": "1000",
            "cityId": "1006",
            "cityName": "绥芬河",
            "pinyin": "suifenhe",
            "py": "sfh"
        },
        {
            "id": 178,
            "provinceId": "1000",
            "cityId": "1008",
            "cityName": "尚志",
            "pinyin": "shangzhi",
            "py": "sz"
        },
        {
            "id": 179,
            "provinceId": "1000",
            "cityId": "1009",
            "cityName": "鹤岗",
            "pinyin": "hegang",
            "py": "hg"
        },
        {
            "id": 180,
            "provinceId": "1000",
            "cityId": "1010",
            "cityName": "绥化",
            "pinyin": "suihua",
            "py": "sh"
        },
        {
            "id": 181,
            "provinceId": "1000",
            "cityId": "1012",
            "cityName": "佳木斯",
            "pinyin": "jiamusi",
            "py": "jms"
        },
        {
            "id": 182,
            "provinceId": "1000",
            "cityId": "1013",
            "cityName": "密山",
            "pinyin": "mishan",
            "py": "ms"
        },
        {
            "id": 183,
            "provinceId": "1000",
            "cityId": "1014",
            "cityName": "黑河",
            "pinyin": "heihe",
            "py": "hh"
        },
        {
            "id": 184,
            "provinceId": "1000",
            "cityId": "1015",
            "cityName": "鸡西",
            "pinyin": "jixi",
            "py": "jx"
        },
        {
            "id": 185,
            "provinceId": "1000",
            "cityId": "1016",
            "cityName": "漠河",
            "pinyin": "mohe",
            "py": "mh"
        },
        {
            "id": 186,
            "provinceId": "1000",
            "cityId": "1017",
            "cityName": "海林",
            "pinyin": "hailin",
            "py": "hl"
        },
        {
            "id": 187,
            "provinceId": "1000",
            "cityId": "1018",
            "cityName": "加格达奇",
            "pinyin": "jiagedaqi",
            "py": "jgdq"
        },
        {
            "id": 188,
            "provinceId": "1000",
            "cityId": "1019",
            "cityName": "伊春",
            "pinyin": "yichun",
            "py": "yc"
        },
        {
            "id": 189,
            "provinceId": "1000",
            "cityId": "1020",
            "cityName": "双鸭山",
            "pinyin": "shuangyashan",
            "py": "sys"
        },
        {
            "id": 190,
            "provinceId": "1000",
            "cityId": "1021",
            "cityName": "扎龙自然保护区",
            "pinyin": "zhalongziranbaohuqu",
            "py": "zlzrbhq"
        },
        {
            "id": 191,
            "provinceId": "1100",
            "cityId": "1101",
            "cityName": "南京",
            "pinyin": "nanjing",
            "py": "nj"
        },
        {
            "id": 192,
            "provinceId": "1100",
            "cityId": "1102",
            "cityName": "苏州",
            "pinyin": "suzhou",
            "py": "sz"
        },
        {
            "id": 193,
            "provinceId": "1100",
            "cityId": "1103",
            "cityName": "常州",
            "pinyin": "changzhou",
            "py": "cz"
        },
        {
            "id": 194,
            "provinceId": "1100",
            "cityId": "1104",
            "cityName": "扬州",
            "pinyin": "yangzhou",
            "py": "yz"
        },
        {
            "id": 195,
            "provinceId": "1100",
            "cityId": "1105",
            "cityName": "无锡",
            "pinyin": "wuxi",
            "py": "wx"
        },
        {
            "id": 196,
            "provinceId": "1100",
            "cityId": "1106",
            "cityName": "徐州",
            "pinyin": "xuzhou",
            "py": "xz"
        },
        {
            "id": 197,
            "provinceId": "1100",
            "cityId": "1107",
            "cityName": "南通",
            "pinyin": "nantong",
            "py": "nt"
        },
        {
            "id": 198,
            "provinceId": "1100",
            "cityId": "1108",
            "cityName": "镇江",
            "pinyin": "zhenjiang",
            "py": "zj"
        },
        {
            "id": 199,
            "provinceId": "1100",
            "cityId": "1109",
            "cityName": "宜兴",
            "pinyin": "yixing",
            "py": "yx"
        },
        {
            "id": 200,
            "provinceId": "1100",
            "cityId": "1110",
            "cityName": "连云港",
            "pinyin": "lianyungang",
            "py": "lyg"
        },
        {
            "id": 201,
            "provinceId": "1100",
            "cityId": "1111",
            "cityName": "张家港",
            "pinyin": "zhangjiagang",
            "py": "zjg"
        },
        {
            "id": 202,
            "provinceId": "1100",
            "cityId": "1112",
            "cityName": "镇江扬中",
            "pinyin": "zhenjiangyangzhong",
            "py": "zjyz"
        },
        {
            "id": 203,
            "provinceId": "1100",
            "cityId": "1113",
            "cityName": "江阴",
            "pinyin": "jiangyin",
            "py": "jy"
        },
        {
            "id": 204,
            "provinceId": "1100",
            "cityId": "1114",
            "cityName": "吴江－苏州",
            "pinyin": "wujiang－suzhou",
            "py": "wj－sz"
        },
        {
            "id": 205,
            "provinceId": "1100",
            "cityId": "1115",
            "cityName": "泰州",
            "pinyin": "taizhou",
            "py": "tz"
        },
        {
            "id": 206,
            "provinceId": "1100",
            "cityId": "1116",
            "cityName": "盐城",
            "pinyin": "yancheng",
            "py": "yc"
        },
        {
            "id": 207,
            "provinceId": "1100",
            "cityId": "1117",
            "cityName": "常熟",
            "pinyin": "changshu",
            "py": "cs"
        },
        {
            "id": 208,
            "provinceId": "1100",
            "cityId": "1118",
            "cityName": "江都",
            "pinyin": "jiangdou",
            "py": "jd"
        },
        {
            "id": 209,
            "provinceId": "1100",
            "cityId": "1119",
            "cityName": "仪征",
            "pinyin": "yizheng",
            "py": "yz"
        },
        {
            "id": 210,
            "provinceId": "1100",
            "cityId": "1120",
            "cityName": "太仓",
            "pinyin": "taicang",
            "py": "tc"
        },
        {
            "id": 211,
            "provinceId": "1100",
            "cityId": "1121",
            "cityName": "同里－吴江",
            "pinyin": "tongli－wujiang",
            "py": "tl－wj"
        },
        {
            "id": 212,
            "provinceId": "1100",
            "cityId": "1122",
            "cityName": "溧阳天目湖－常州",
            "pinyin": "liyangtianmuhu－changzhou",
            "py": "lytmh－cz"
        },
        {
            "id": 213,
            "provinceId": "1100",
            "cityId": "1123",
            "cityName": "淮安",
            "pinyin": "huaian",
            "py": "ha"
        },
        {
            "id": 214,
            "provinceId": "1100",
            "cityId": "1124",
            "cityName": "泰兴",
            "pinyin": "taixing",
            "py": "tx"
        },
        {
            "id": 215,
            "provinceId": "1100",
            "cityId": "1125",
            "cityName": "启东",
            "pinyin": "qidong",
            "py": "qd"
        },
        {
            "id": 216,
            "provinceId": "1100",
            "cityId": "1126",
            "cityName": "周庄－昆山",
            "pinyin": "zhouzhuang－kunshan",
            "py": "zz－ks"
        },
        {
            "id": 217,
            "provinceId": "1100",
            "cityId": "1127",
            "cityName": "昆山",
            "pinyin": "kunshan",
            "py": "ks"
        },
        {
            "id": 218,
            "provinceId": "1100",
            "cityId": "1128",
            "cityName": "如东",
            "pinyin": "rudong",
            "py": "rd"
        },
        {
            "id": 219,
            "provinceId": "1100",
            "cityId": "1129",
            "cityName": "丹阳",
            "pinyin": "danyang",
            "py": "dy"
        },
        {
            "id": 220,
            "provinceId": "1100",
            "cityId": "1130",
            "cityName": "金坛－常州",
            "pinyin": "jintan－changzhou",
            "py": "jt－cz"
        },
        {
            "id": 221,
            "provinceId": "1100",
            "cityId": "1131",
            "cityName": "宿迁",
            "pinyin": "suqian",
            "py": "sq"
        },
        {
            "id": 222,
            "provinceId": "1100",
            "cityId": "1134",
            "cityName": "新沂",
            "pinyin": "xinyi",
            "py": "xy"
        },
        {
            "id": 223,
            "provinceId": "1100",
            "cityId": "1136",
            "cityName": "东台",
            "pinyin": "dongtai",
            "py": "dt"
        },
        {
            "id": 224,
            "provinceId": "1100",
            "cityId": "1137",
            "cityName": "靖江",
            "pinyin": "jingjiang",
            "py": "jj"
        },
        {
            "id": 225,
            "provinceId": "1100",
            "cityId": "1138",
            "cityName": "泗阳",
            "pinyin": "siyang",
            "py": "sy"
        },
        {
            "id": 226,
            "provinceId": "1100",
            "cityId": "1139",
            "cityName": "海安－南通",
            "pinyin": "haian－nantong",
            "py": "ha－nt"
        },
        {
            "id": 227,
            "provinceId": "1100",
            "cityId": "1141",
            "cityName": "姜堰",
            "pinyin": "jiangyan",
            "py": "jy"
        },
        {
            "id": 228,
            "provinceId": "1100",
            "cityId": "1143",
            "cityName": "句容",
            "pinyin": "jurong",
            "py": "jr"
        },
        {
            "id": 229,
            "provinceId": "1100",
            "cityId": "1144",
            "cityName": "高邮",
            "pinyin": "gaoyou",
            "py": "gy"
        },
        {
            "id": 230,
            "provinceId": "1100",
            "cityId": "1145",
            "cityName": "木渎",
            "pinyin": "mudu",
            "py": "md"
        },
        {
            "id": 231,
            "provinceId": "1100",
            "cityId": "1146",
            "cityName": "如皋",
            "pinyin": "rugao",
            "py": "rg"
        },
        {
            "id": 232,
            "provinceId": "1100",
            "cityId": "1148",
            "cityName": "东海－连云港",
            "pinyin": "donghai－lianyungang",
            "py": "dh－lyg"
        },
        {
            "id": 233,
            "provinceId": "1100",
            "cityId": "1149",
            "cityName": "邳县－徐州",
            "pinyin": "pixian－xuzhou",
            "py": "px－xz"
        },
        {
            "id": 234,
            "provinceId": "1100",
            "cityId": "1150",
            "cityName": "大丰－盐城",
            "pinyin": "dafeng－yancheng",
            "py": "df－yc"
        },
        {
            "id": 235,
            "provinceId": "1100",
            "cityId": "1151",
            "cityName": "睢宁县－徐州",
            "pinyin": "suiningxian－xuzhou",
            "py": "snx－xz"
        },
        {
            "id": 236,
            "provinceId": "1100",
            "cityId": "1152",
            "cityName": "海门－南通",
            "pinyin": "haimen－nantong",
            "py": "hm－nt"
        },
        {
            "id": 237,
            "provinceId": "1100",
            "cityId": "1153",
            "cityName": "通州－南通",
            "pinyin": "tongzhou－nantong",
            "py": "tz－nt"
        },
        {
            "id": 238,
            "provinceId": "1100",
            "cityId": "1154",
            "cityName": "兴化",
            "pinyin": "xinghua",
            "py": "xh"
        },
        {
            "id": 239,
            "provinceId": "1100",
            "cityId": "1155",
            "cityName": "铜山",
            "pinyin": "tongshan",
            "py": "ts"
        },
        {
            "id": 240,
            "provinceId": "1100",
            "cityId": "1156",
            "cityName": "盱眙",
            "pinyin": "xuyi",
            "py": "xy"
        },
        {
            "id": 241,
            "provinceId": "1100",
            "cityId": "1157",
            "cityName": "泗洪",
            "pinyin": "sihong",
            "py": "sh"
        },
        {
            "id": 242,
            "provinceId": "1100",
            "cityId": "1158",
            "cityName": "涟水－淮安",
            "pinyin": "lianshui－huaian",
            "py": "ls－ha"
        },
        {
            "id": 243,
            "provinceId": "1100",
            "cityId": "1160",
            "cityName": "金湖－淮安",
            "pinyin": "jinhu－huaian",
            "py": "jh－ha"
        },
        {
            "id": 244,
            "provinceId": "1100",
            "cityId": "1161",
            "cityName": "高邮－扬州",
            "pinyin": "gaoyou－yangzhou",
            "py": "gy－yz"
        },
        {
            "id": 245,
            "provinceId": "1100",
            "cityId": "1162",
            "cityName": "高淳县－南京",
            "pinyin": "gaochunxian－nanjing",
            "py": "gcx－nj"
        },
        {
            "id": 246,
            "provinceId": "1100",
            "cityId": "1163",
            "cityName": "溧水县－南京",
            "pinyin": "lishuixian－nanjing",
            "py": "lsx－nj"
        },
        {
            "id": 247,
            "provinceId": "1100",
            "cityId": "1164",
            "cityName": "响水县－盐城",
            "pinyin": "xiangshuixian－yancheng",
            "py": "xsx－yc"
        },
        {
            "id": 248,
            "provinceId": "1100",
            "cityId": "1165",
            "cityName": "滨海县－盐城",
            "pinyin": "binhaixian－yancheng",
            "py": "bhx－yc"
        },
        {
            "id": 249,
            "provinceId": "1100",
            "cityId": "1166",
            "cityName": "洪泽县－淮安",
            "pinyin": "hongzexian－huaian",
            "py": "hzx－ha"
        },
        {
            "id": 250,
            "provinceId": "1100",
            "cityId": "1167",
            "cityName": "丰县－徐州",
            "pinyin": "fengxian－xuzhou",
            "py": "fx－xz"
        },
        {
            "id": 251,
            "provinceId": "1100",
            "cityId": "1168",
            "cityName": "沭阳－宿迁",
            "pinyin": "shuyang－suqian",
            "py": "sy－sq"
        },
        {
            "id": 252,
            "provinceId": "1100",
            "cityId": "1170",
            "cityName": "灌云－连云港",
            "pinyin": "guanyun－lianyungang",
            "py": "gy－lyg"
        },
        {
            "id": 253,
            "provinceId": "1100",
            "cityId": "1171",
            "cityName": "赣榆－连云港",
            "pinyin": "ganyu－lianyungang",
            "py": "gy－lyg"
        },
        {
            "id": 254,
            "provinceId": "1200",
            "cityId": "1201",
            "cityName": "杭州",
            "pinyin": "hangzhou",
            "py": "hz"
        },
        {
            "id": 255,
            "provinceId": "1200",
            "cityId": "1202",
            "cityName": "宁波",
            "pinyin": "ningbo",
            "py": "nb"
        },
        {
            "id": 256,
            "provinceId": "1200",
            "cityId": "1203",
            "cityName": "温州",
            "pinyin": "wenzhou",
            "py": "wz"
        },
        {
            "id": 257,
            "provinceId": "1200",
            "cityId": "1204",
            "cityName": "金华",
            "pinyin": "jinhua",
            "py": "jh"
        },
        {
            "id": 258,
            "provinceId": "1200",
            "cityId": "1205",
            "cityName": "绍兴",
            "pinyin": "shaoxing",
            "py": "sx"
        },
        {
            "id": 259,
            "provinceId": "1200",
            "cityId": "1206",
            "cityName": "永康",
            "pinyin": "yongkang",
            "py": "yk"
        },
        {
            "id": 260,
            "provinceId": "1200",
            "cityId": "1207",
            "cityName": "义乌",
            "pinyin": "yiwu",
            "py": "yw"
        },
        {
            "id": 261,
            "provinceId": "1200",
            "cityId": "1208",
            "cityName": "玉环",
            "pinyin": "yuhuan",
            "py": "yh"
        },
        {
            "id": 262,
            "provinceId": "1200",
            "cityId": "1209",
            "cityName": "嘉兴",
            "pinyin": "jiaxing",
            "py": "jx"
        },
        {
            "id": 263,
            "provinceId": "1200",
            "cityId": "1211",
            "cityName": "余杭",
            "pinyin": "yuhang",
            "py": "yh"
        },
        {
            "id": 264,
            "provinceId": "1200",
            "cityId": "1212",
            "cityName": "诸暨－绍兴",
            "pinyin": "zhuji－shaoxing",
            "py": "zj－sx"
        },
        {
            "id": 265,
            "provinceId": "1200",
            "cityId": "1213",
            "cityName": "临安",
            "pinyin": "linan",
            "py": "la"
        },
        {
            "id": 266,
            "provinceId": "1200",
            "cityId": "1214",
            "cityName": "兰溪",
            "pinyin": "lanxi",
            "py": "lx"
        },
        {
            "id": 267,
            "provinceId": "1200",
            "cityId": "1215",
            "cityName": "奉化",
            "pinyin": "fenghua",
            "py": "fh"
        },
        {
            "id": 268,
            "provinceId": "1200",
            "cityId": "1223",
            "cityName": "青田",
            "pinyin": "qingtian",
            "py": "qt"
        },
        {
            "id": 269,
            "provinceId": "1200",
            "cityId": "1224",
            "cityName": "台州",
            "pinyin": "taizhou",
            "py": "tz"
        },
        {
            "id": 270,
            "provinceId": "1200",
            "cityId": "1225",
            "cityName": "黄岩",
            "pinyin": "huangyan",
            "py": "hy"
        },
        {
            "id": 271,
            "provinceId": "1200",
            "cityId": "1226",
            "cityName": "临海",
            "pinyin": "linhai",
            "py": "lh"
        },
        {
            "id": 272,
            "provinceId": "1200",
            "cityId": "1227",
            "cityName": "天台",
            "pinyin": "tiantai",
            "py": "tt"
        },
        {
            "id": 273,
            "provinceId": "1200",
            "cityId": "1228",
            "cityName": "云和",
            "pinyin": "yunhe",
            "py": "yh"
        },
        {
            "id": 274,
            "provinceId": "1200",
            "cityId": "1230",
            "cityName": "丽水",
            "pinyin": "lishui",
            "py": "ls"
        },
        {
            "id": 275,
            "provinceId": "1200",
            "cityId": "1231",
            "cityName": "慈溪",
            "pinyin": "cixi",
            "py": "cx"
        },
        {
            "id": 276,
            "provinceId": "1200",
            "cityId": "1233",
            "cityName": "千岛湖",
            "pinyin": "qiandaohu",
            "py": "qdh"
        },
        {
            "id": 277,
            "provinceId": "1200",
            "cityId": "1234",
            "cityName": "海宁",
            "pinyin": "haining",
            "py": "hn"
        },
        {
            "id": 278,
            "provinceId": "1200",
            "cityId": "1235",
            "cityName": "衢州",
            "pinyin": "quzhou",
            "py": "qz"
        },
        {
            "id": 279,
            "provinceId": "1200",
            "cityId": "1236",
            "cityName": "嵊州",
            "pinyin": "shengzhou",
            "py": "sz"
        },
        {
            "id": 280,
            "provinceId": "1200",
            "cityId": "1237",
            "cityName": "瑞安",
            "pinyin": "ruian",
            "py": "ra"
        },
        {
            "id": 281,
            "provinceId": "1200",
            "cityId": "1238",
            "cityName": "温岭",
            "pinyin": "wenling",
            "py": "wl"
        },
        {
            "id": 282,
            "provinceId": "1200",
            "cityId": "1239",
            "cityName": "湖州",
            "pinyin": "huzhou",
            "py": "hz"
        },
        {
            "id": 283,
            "provinceId": "1200",
            "cityId": "1240",
            "cityName": "安吉－湖州",
            "pinyin": "anji－huzhou",
            "py": "aj－hz"
        },
        {
            "id": 284,
            "provinceId": "1200",
            "cityId": "1241",
            "cityName": "海盐",
            "pinyin": "haiyan",
            "py": "hy"
        },
        {
            "id": 285,
            "provinceId": "1200",
            "cityId": "1242",
            "cityName": "德清",
            "pinyin": "deqing",
            "py": "dq"
        },
        {
            "id": 286,
            "provinceId": "1200",
            "cityId": "1243",
            "cityName": "东阳",
            "pinyin": "dongyang",
            "py": "dy"
        },
        {
            "id": 287,
            "provinceId": "1200",
            "cityId": "1245",
            "cityName": "舟山",
            "pinyin": "zhoushan",
            "py": "zs"
        },
        {
            "id": 288,
            "provinceId": "1200",
            "cityId": "1246",
            "cityName": "上虞",
            "pinyin": "shangyu",
            "py": "sy"
        },
        {
            "id": 289,
            "provinceId": "1200",
            "cityId": "1247",
            "cityName": "桐庐",
            "pinyin": "tonglu",
            "py": "tl"
        },
        {
            "id": 290,
            "provinceId": "1200",
            "cityId": "1248",
            "cityName": "富阳",
            "pinyin": "fuyang",
            "py": "fy"
        },
        {
            "id": 291,
            "provinceId": "1200",
            "cityId": "1250",
            "cityName": "仙居－台州",
            "pinyin": "xianju－taizhou",
            "py": "xj－tz"
        },
        {
            "id": 292,
            "provinceId": "1200",
            "cityId": "1251",
            "cityName": "新昌",
            "pinyin": "xinchang",
            "py": "xc"
        },
        {
            "id": 293,
            "provinceId": "1200",
            "cityId": "1252",
            "cityName": "宁海",
            "pinyin": "ninghai",
            "py": "nh"
        },
        {
            "id": 294,
            "provinceId": "1200",
            "cityId": "1253",
            "cityName": "象山",
            "pinyin": "xiangshan",
            "py": "xs"
        },
        {
            "id": 295,
            "provinceId": "1200",
            "cityId": "1258",
            "cityName": "三门",
            "pinyin": "sanmen",
            "py": "sm"
        },
        {
            "id": 296,
            "provinceId": "1200",
            "cityId": "1259",
            "cityName": "乐清",
            "pinyin": "leqing",
            "py": "lq"
        },
        {
            "id": 297,
            "provinceId": "1200",
            "cityId": "1260",
            "cityName": "龙泉",
            "pinyin": "longquan",
            "py": "lq"
        },
        {
            "id": 298,
            "provinceId": "1200",
            "cityId": "1262",
            "cityName": "江山",
            "pinyin": "jiangshan",
            "py": "js"
        },
        {
            "id": 299,
            "provinceId": "1200",
            "cityId": "1263",
            "cityName": "桐乡",
            "pinyin": "tongxiang",
            "py": "tx"
        },
        {
            "id": 300,
            "provinceId": "1200",
            "cityId": "1264",
            "cityName": "武义",
            "pinyin": "wuyi",
            "py": "wy"
        },
        {
            "id": 301,
            "provinceId": "1200",
            "cityId": "1266",
            "cityName": "雁荡山",
            "pinyin": "yandangshan",
            "py": "yds"
        },
        {
            "id": 302,
            "provinceId": "1200",
            "cityId": "1267",
            "cityName": "缙云",
            "pinyin": "jinyun",
            "py": "jy"
        },
        {
            "id": 303,
            "provinceId": "1200",
            "cityId": "1268",
            "cityName": "平湖",
            "pinyin": "pinghu",
            "py": "ph"
        },
        {
            "id": 304,
            "provinceId": "1200",
            "cityId": "1270",
            "cityName": "西塘－嘉善",
            "pinyin": "xitang－jiashan",
            "py": "xt－js"
        },
        {
            "id": 305,
            "provinceId": "1200",
            "cityId": "1271",
            "cityName": "建德",
            "pinyin": "jiande",
            "py": "jd"
        },
        {
            "id": 306,
            "provinceId": "1200",
            "cityId": "1272",
            "cityName": "遂昌－丽水",
            "pinyin": "suichang－lishui",
            "py": "sc－ls"
        },
        {
            "id": 307,
            "provinceId": "1200",
            "cityId": "1274",
            "cityName": "浦江",
            "pinyin": "pujiang",
            "py": "pj"
        },
        {
            "id": 308,
            "provinceId": "1200",
            "cityId": "1275",
            "cityName": "余姚",
            "pinyin": "yuyao",
            "py": "yy"
        },
        {
            "id": 309,
            "provinceId": "1200",
            "cityId": "1276",
            "cityName": "永嘉",
            "pinyin": "yongjia",
            "py": "yj"
        },
        {
            "id": 310,
            "provinceId": "1200",
            "cityId": "1277",
            "cityName": "嘉善",
            "pinyin": "jiashan",
            "py": "js"
        },
        {
            "id": 311,
            "provinceId": "1200",
            "cityId": "1279",
            "cityName": "常山",
            "pinyin": "changshan",
            "py": "cs"
        },
        {
            "id": 312,
            "provinceId": "1200",
            "cityId": "1280",
            "cityName": "龙游",
            "pinyin": "longyou",
            "py": "ly"
        },
        {
            "id": 313,
            "provinceId": "1200",
            "cityId": "1283",
            "cityName": "苍南",
            "pinyin": "cangnan",
            "py": "cn"
        },
        {
            "id": 314,
            "provinceId": "1200",
            "cityId": "1284",
            "cityName": "泰顺",
            "pinyin": "taishun",
            "py": "ts"
        },
        {
            "id": 315,
            "provinceId": "1200",
            "cityId": "1286",
            "cityName": "开化",
            "pinyin": "kaihua",
            "py": "kh"
        },
        {
            "id": 316,
            "provinceId": "1200",
            "cityId": "1287",
            "cityName": "平阳",
            "pinyin": "pingyang",
            "py": "py"
        },
        {
            "id": 317,
            "provinceId": "1200",
            "cityId": "1288",
            "cityName": "横店",
            "pinyin": "hengdian",
            "py": "hd"
        },
        {
            "id": 318,
            "provinceId": "1200",
            "cityId": "1291",
            "cityName": "磐安",
            "pinyin": "panan",
            "py": "pa"
        },
        {
            "id": 319,
            "provinceId": "1200",
            "cityId": "1293",
            "cityName": "乌镇－桐乡",
            "pinyin": "wuzhen－tongxiang",
            "py": "wz－tx"
        },
        {
            "id": 320,
            "provinceId": "1200",
            "cityId": "1294",
            "cityName": "普陀山",
            "pinyin": "putuoshan",
            "py": "pts"
        },
        {
            "id": 321,
            "provinceId": "1200",
            "cityId": "1297",
            "cityName": "南浔－湖州",
            "pinyin": "nanxun－huzhou",
            "py": "nx－hz"
        },
        {
            "id": 322,
            "provinceId": "1200",
            "cityId": "1298",
            "cityName": "长兴",
            "pinyin": "zhangxing",
            "py": "zx"
        },
        {
            "id": 323,
            "provinceId": "1200",
            "cityId": "1299",
            "cityName": "景宁",
            "pinyin": "jingning",
            "py": "jn"
        },
        {
            "id": 324,
            "provinceId": "1300",
            "cityId": "1301",
            "cityName": "合肥",
            "pinyin": "hefei",
            "py": "hf"
        },
        {
            "id": 325,
            "provinceId": "1300",
            "cityId": "1302",
            "cityName": "黄山",
            "pinyin": "huangshan",
            "py": "hs"
        },
        {
            "id": 326,
            "provinceId": "1300",
            "cityId": "1303",
            "cityName": "安庆",
            "pinyin": "anqing",
            "py": "aq"
        },
        {
            "id": 327,
            "provinceId": "1300",
            "cityId": "1304",
            "cityName": "芜湖",
            "pinyin": "wuhu",
            "py": "wh"
        },
        {
            "id": 328,
            "provinceId": "1300",
            "cityId": "1305",
            "cityName": "蚌埠",
            "pinyin": "bangbu",
            "py": "bb"
        },
        {
            "id": 329,
            "provinceId": "1300",
            "cityId": "1306",
            "cityName": "淮南",
            "pinyin": "huainan",
            "py": "hn"
        },
        {
            "id": 330,
            "provinceId": "1300",
            "cityId": "1307",
            "cityName": "阜阳－安徽",
            "pinyin": "fuyang－anhui",
            "py": "fy－ah"
        },
        {
            "id": 331,
            "provinceId": "1300",
            "cityId": "1308",
            "cityName": "巢湖",
            "pinyin": "chaohu",
            "py": "ch"
        },
        {
            "id": 332,
            "provinceId": "1300",
            "cityId": "1309",
            "cityName": "九华山",
            "pinyin": "jiuhuashan",
            "py": "jhs"
        },
        {
            "id": 333,
            "provinceId": "1300",
            "cityId": "1311",
            "cityName": "马鞍山",
            "pinyin": "maanshan",
            "py": "mas"
        },
        {
            "id": 334,
            "provinceId": "1300",
            "cityId": "1312",
            "cityName": "亳州",
            "pinyin": "bozhou",
            "py": "bz"
        },
        {
            "id": 335,
            "provinceId": "1300",
            "cityId": "1313",
            "cityName": "天柱山",
            "pinyin": "tianzhushan",
            "py": "tzs"
        },
        {
            "id": 336,
            "provinceId": "1300",
            "cityId": "1314",
            "cityName": "宿州",
            "pinyin": "suzhou",
            "py": "sz"
        },
        {
            "id": 337,
            "provinceId": "1300",
            "cityId": "1315",
            "cityName": "铜陵",
            "pinyin": "tongling",
            "py": "tl"
        },
        {
            "id": 338,
            "provinceId": "1300",
            "cityId": "1316",
            "cityName": "怀远",
            "pinyin": "huaiyuan",
            "py": "hy"
        },
        {
            "id": 339,
            "provinceId": "1300",
            "cityId": "1318",
            "cityName": "滁州",
            "pinyin": "chuzhou",
            "py": "cz"
        },
        {
            "id": 340,
            "provinceId": "1300",
            "cityId": "1319",
            "cityName": "六安",
            "pinyin": "liuan",
            "py": "la"
        },
        {
            "id": 341,
            "provinceId": "1300",
            "cityId": "1320",
            "cityName": "池州",
            "pinyin": "chizhou",
            "py": "cz"
        },
        {
            "id": 342,
            "provinceId": "1300",
            "cityId": "1322",
            "cityName": "淮北",
            "pinyin": "huaibei",
            "py": "hb"
        },
        {
            "id": 343,
            "provinceId": "1300",
            "cityId": "1323",
            "cityName": "宁国",
            "pinyin": "ningguo",
            "py": "ng"
        },
        {
            "id": 344,
            "provinceId": "1300",
            "cityId": "1324",
            "cityName": "广德",
            "pinyin": "guangde",
            "py": "gd"
        },
        {
            "id": 345,
            "provinceId": "1300",
            "cityId": "1325",
            "cityName": "桐城",
            "pinyin": "tongcheng",
            "py": "tc"
        },
        {
            "id": 346,
            "provinceId": "1300",
            "cityId": "1326",
            "cityName": "繁昌",
            "pinyin": "fanchang",
            "py": "fc"
        },
        {
            "id": 347,
            "provinceId": "1300",
            "cityId": "1327",
            "cityName": "繁昌",
            "pinyin": "fanchang",
            "py": "fc"
        },
        {
            "id": 348,
            "provinceId": "1300",
            "cityId": "1328",
            "cityName": "宣城",
            "pinyin": "xuancheng",
            "py": "xc"
        },
        {
            "id": 349,
            "provinceId": "1300",
            "cityId": "1330",
            "cityName": "宏村－黄山",
            "pinyin": "hongcun－huangshan",
            "py": "hc－hs"
        },
        {
            "id": 350,
            "provinceId": "1300",
            "cityId": "1331",
            "cityName": "查济－泾县",
            "pinyin": "chaji－jingxian",
            "py": "cj－jx"
        },
        {
            "id": 351,
            "provinceId": "1300",
            "cityId": "1332",
            "cityName": "西递－黄山",
            "pinyin": "xidi－huangshan",
            "py": "xd－hs"
        },
        {
            "id": 352,
            "provinceId": "1300",
            "cityId": "1333",
            "cityName": "天长－滁州",
            "pinyin": "tianzhang－chuzhou",
            "py": "tz－cz"
        },
        {
            "id": 353,
            "provinceId": "1300",
            "cityId": "1334",
            "cityName": "舒城－六安",
            "pinyin": "shucheng－liuan",
            "py": "sc－la"
        },
        {
            "id": 354,
            "provinceId": "1300",
            "cityId": "1335",
            "cityName": "砀山－宿州",
            "pinyin": "dangshan－suzhou",
            "py": "ds－sz"
        },
        {
            "id": 355,
            "provinceId": "1300",
            "cityId": "1336",
            "cityName": "潜山－安庆",
            "pinyin": "qianshan－anqing",
            "py": "qs－aq"
        },
        {
            "id": 356,
            "provinceId": "1300",
            "cityId": "1337",
            "cityName": "涡阳－亳州",
            "pinyin": "woyang－bozhou",
            "py": "wy－bz"
        },
        {
            "id": 357,
            "provinceId": "1300",
            "cityId": "1338",
            "cityName": "霍山－六安",
            "pinyin": "huoshan－liuan",
            "py": "hs－la"
        },
        {
            "id": 358,
            "provinceId": "1400",
            "cityId": "1401",
            "cityName": "厦门",
            "pinyin": "shamen",
            "py": "sm"
        },
        {
            "id": 359,
            "provinceId": "1400",
            "cityId": "1402",
            "cityName": "福州",
            "pinyin": "fuzhou",
            "py": "fz"
        },
        {
            "id": 360,
            "provinceId": "1400",
            "cityId": "1403",
            "cityName": "泉州",
            "pinyin": "quanzhou",
            "py": "qz"
        },
        {
            "id": 361,
            "provinceId": "1400",
            "cityId": "1404",
            "cityName": "武夷山",
            "pinyin": "wuyishan",
            "py": "wys"
        },
        {
            "id": 362,
            "provinceId": "1400",
            "cityId": "1405",
            "cityName": "石狮",
            "pinyin": "shishi",
            "py": "ss"
        },
        {
            "id": 363,
            "provinceId": "1400",
            "cityId": "1406",
            "cityName": "莆田",
            "pinyin": "putian",
            "py": "pt"
        },
        {
            "id": 364,
            "provinceId": "1400",
            "cityId": "1408",
            "cityName": "漳州",
            "pinyin": "zhangzhou",
            "py": "zz"
        },
        {
            "id": 365,
            "provinceId": "1400",
            "cityId": "1409",
            "cityName": "龙岩",
            "pinyin": "longyan",
            "py": "ly"
        },
        {
            "id": 366,
            "provinceId": "1400",
            "cityId": "1410",
            "cityName": "三明",
            "pinyin": "sanming",
            "py": "sm"
        },
        {
            "id": 367,
            "provinceId": "1400",
            "cityId": "1412",
            "cityName": "福鼎",
            "pinyin": "fuding",
            "py": "fd"
        },
        {
            "id": 368,
            "provinceId": "1400",
            "cityId": "1413",
            "cityName": "晋江",
            "pinyin": "jinjiang",
            "py": "jj"
        },
        {
            "id": 369,
            "provinceId": "1400",
            "cityId": "1414",
            "cityName": "宁德",
            "pinyin": "ningde",
            "py": "nd"
        },
        {
            "id": 370,
            "provinceId": "1400",
            "cityId": "1415",
            "cityName": "连城－龙岩",
            "pinyin": "liancheng－longyan",
            "py": "lc－ly"
        },
        {
            "id": 371,
            "provinceId": "1400",
            "cityId": "1417",
            "cityName": "龙海",
            "pinyin": "longhai",
            "py": "lh"
        },
        {
            "id": 372,
            "provinceId": "1400",
            "cityId": "1418",
            "cityName": "东山－漳州",
            "pinyin": "dongshan－zhangzhou",
            "py": "ds－zz"
        },
        {
            "id": 373,
            "provinceId": "1400",
            "cityId": "1419",
            "cityName": "安溪－泉州",
            "pinyin": "anxi－quanzhou",
            "py": "ax－qz"
        },
        {
            "id": 374,
            "provinceId": "1400",
            "cityId": "1420",
            "cityName": "长乐",
            "pinyin": "zhangle",
            "py": "zl"
        },
        {
            "id": 375,
            "provinceId": "1400",
            "cityId": "1421",
            "cityName": "屏南",
            "pinyin": "pingnan",
            "py": "pn"
        },
        {
            "id": 376,
            "provinceId": "1400",
            "cityId": "1422",
            "cityName": "福清",
            "pinyin": "fuqing",
            "py": "fq"
        },
        {
            "id": 377,
            "provinceId": "1400",
            "cityId": "1423",
            "cityName": "南平",
            "pinyin": "nanping",
            "py": "np"
        },
        {
            "id": 378,
            "provinceId": "1400",
            "cityId": "1424",
            "cityName": "长汀－龙岩",
            "pinyin": "zhangting－longyan",
            "py": "zt－ly"
        },
        {
            "id": 379,
            "provinceId": "1400",
            "cityId": "1425",
            "cityName": "沙县－三明",
            "pinyin": "shaxian－sanming",
            "py": "sx－sm"
        },
        {
            "id": 380,
            "provinceId": "1400",
            "cityId": "1426",
            "cityName": "上杭－龙岩",
            "pinyin": "shanghang－longyan",
            "py": "sh－ly"
        },
        {
            "id": 381,
            "provinceId": "1400",
            "cityId": "1427",
            "cityName": "惠安－泉州",
            "pinyin": "huian－quanzhou",
            "py": "ha－qz"
        },
        {
            "id": 382,
            "provinceId": "1400",
            "cityId": "1428",
            "cityName": "永安－三明",
            "pinyin": "yongan－sanming",
            "py": "ya－sm"
        },
        {
            "id": 383,
            "provinceId": "1400",
            "cityId": "1429",
            "cityName": "泰宁－三明",
            "pinyin": "taining－sanming",
            "py": "tn－sm"
        },
        {
            "id": 384,
            "provinceId": "1400",
            "cityId": "1430",
            "cityName": "连江－福州",
            "pinyin": "lianjiang－fuzhou",
            "py": "lj－fz"
        },
        {
            "id": 385,
            "provinceId": "1400",
            "cityId": "1431",
            "cityName": "将乐－三明",
            "pinyin": "jiangle－sanming",
            "py": "jl－sm"
        },
        {
            "id": 386,
            "provinceId": "1400",
            "cityId": "1432",
            "cityName": "武平－龙岩",
            "pinyin": "wuping－longyan",
            "py": "wp－ly"
        },
        {
            "id": 387,
            "provinceId": "1400",
            "cityId": "1433",
            "cityName": "德化－泉州",
            "pinyin": "dehua－quanzhou",
            "py": "dh－qz"
        },
        {
            "id": 388,
            "provinceId": "1400",
            "cityId": "1434",
            "cityName": "漳浦－漳州",
            "pinyin": "zhangpu－zhangzhou",
            "py": "zp－zz"
        },
        {
            "id": 389,
            "provinceId": "1400",
            "cityId": "1435",
            "cityName": "霞浦－宁德",
            "pinyin": "xiapu－ningde",
            "py": "xp－nd"
        },
        {
            "id": 390,
            "provinceId": "1400",
            "cityId": "1436",
            "cityName": "漳平－龙岩",
            "pinyin": "zhangping－longyan",
            "py": "zp－ly"
        },
        {
            "id": 391,
            "provinceId": "1400",
            "cityId": "1437",
            "cityName": "永定－龙岩",
            "pinyin": "yongding－longyan",
            "py": "yd－ly"
        },
        {
            "id": 392,
            "provinceId": "1400",
            "cityId": "1438",
            "cityName": "平潭－福州",
            "pinyin": "pingtan－fuzhou",
            "py": "pt－fz"
        },
        {
            "id": 393,
            "provinceId": "1500",
            "cityId": "1501",
            "cityName": "南昌",
            "pinyin": "nanchang",
            "py": "nc"
        },
        {
            "id": 394,
            "provinceId": "1500",
            "cityId": "1502",
            "cityName": "九江",
            "pinyin": "jiujiang",
            "py": "jj"
        },
        {
            "id": 395,
            "provinceId": "1500",
            "cityId": "1503",
            "cityName": "吉安",
            "pinyin": "jian",
            "py": "ja"
        },
        {
            "id": 396,
            "provinceId": "1500",
            "cityId": "1506",
            "cityName": "庐山",
            "pinyin": "lushan",
            "py": "ls"
        },
        {
            "id": 397,
            "provinceId": "1500",
            "cityId": "1507",
            "cityName": "景德镇",
            "pinyin": "jingdezhen",
            "py": "jdz"
        },
        {
            "id": 398,
            "provinceId": "1500",
            "cityId": "1508",
            "cityName": "上饶",
            "pinyin": "shangrao",
            "py": "sr"
        },
        {
            "id": 399,
            "provinceId": "1500",
            "cityId": "1509",
            "cityName": "宜春",
            "pinyin": "yichun",
            "py": "yc"
        },
        {
            "id": 400,
            "provinceId": "1500",
            "cityId": "1511",
            "cityName": "井冈山",
            "pinyin": "jinggangshan",
            "py": "jgs"
        },
        {
            "id": 401,
            "provinceId": "1500",
            "cityId": "1512",
            "cityName": "萍乡",
            "pinyin": "pingxiang",
            "py": "px"
        },
        {
            "id": 402,
            "provinceId": "1500",
            "cityId": "1514",
            "cityName": "新余",
            "pinyin": "xinyu",
            "py": "xy"
        },
        {
            "id": 403,
            "provinceId": "1500",
            "cityId": "1515",
            "cityName": "抚州",
            "pinyin": "fuzhou",
            "py": "fz"
        },
        {
            "id": 404,
            "provinceId": "1500",
            "cityId": "1516",
            "cityName": "赣州",
            "pinyin": "ganzhou",
            "py": "gz"
        },
        {
            "id": 405,
            "provinceId": "1500",
            "cityId": "1517",
            "cityName": "鹰潭",
            "pinyin": "yingtan",
            "py": "yt"
        },
        {
            "id": 406,
            "provinceId": "1500",
            "cityId": "1520",
            "cityName": "婺源",
            "pinyin": "wuyuan",
            "py": "wy"
        },
        {
            "id": 407,
            "provinceId": "1500",
            "cityId": "1521",
            "cityName": "瑞金",
            "pinyin": "ruijin",
            "py": "rj"
        },
        {
            "id": 408,
            "provinceId": "1500",
            "cityId": "1522",
            "cityName": "德兴",
            "pinyin": "dexing",
            "py": "dx"
        },
        {
            "id": 409,
            "provinceId": "1500",
            "cityId": "1523",
            "cityName": "三清山",
            "pinyin": "sanqingshan",
            "py": "sqs"
        },
        {
            "id": 410,
            "provinceId": "1500",
            "cityId": "1524",
            "cityName": "玉山县",
            "pinyin": "yushanxian",
            "py": "ysx"
        },
        {
            "id": 411,
            "provinceId": "1500",
            "cityId": "1526",
            "cityName": "南康",
            "pinyin": "nankang",
            "py": "nk"
        },
        {
            "id": 412,
            "provinceId": "1500",
            "cityId": "1527",
            "cityName": "永修县",
            "pinyin": "yongxiuxian",
            "py": "yxx"
        },
        {
            "id": 413,
            "provinceId": "1500",
            "cityId": "1528",
            "cityName": "大余",
            "pinyin": "dayu",
            "py": "dy"
        },
        {
            "id": 414,
            "provinceId": "1500",
            "cityId": "1529",
            "cityName": "崇义",
            "pinyin": "chongyi",
            "py": "cy"
        },
        {
            "id": 415,
            "provinceId": "1500",
            "cityId": "1530",
            "cityName": "定南",
            "pinyin": "dingnan",
            "py": "dn"
        },
        {
            "id": 416,
            "provinceId": "1500",
            "cityId": "1531",
            "cityName": "南城县",
            "pinyin": "nanchengxian",
            "py": "ncx"
        },
        {
            "id": 417,
            "provinceId": "1600",
            "cityId": "1601",
            "cityName": "青岛",
            "pinyin": "qingdao",
            "py": "qd"
        },
        {
            "id": 418,
            "provinceId": "1600",
            "cityId": "1602",
            "cityName": "济南",
            "pinyin": "jinan",
            "py": "jn"
        },
        {
            "id": 419,
            "provinceId": "1600",
            "cityId": "1603",
            "cityName": "潍坊",
            "pinyin": "weifang",
            "py": "wf"
        },
        {
            "id": 420,
            "provinceId": "1600",
            "cityId": "1604",
            "cityName": "烟台",
            "pinyin": "yantai",
            "py": "yt"
        },
        {
            "id": 421,
            "provinceId": "1600",
            "cityId": "1605",
            "cityName": "威海",
            "pinyin": "weihai",
            "py": "wh"
        },
        {
            "id": 422,
            "provinceId": "1600",
            "cityId": "1606",
            "cityName": "淄博",
            "pinyin": "zibo",
            "py": "zb"
        },
        {
            "id": 423,
            "provinceId": "1600",
            "cityId": "1607",
            "cityName": "东营",
            "pinyin": "dongying",
            "py": "dy"
        },
        {
            "id": 424,
            "provinceId": "1600",
            "cityId": "1608",
            "cityName": "枣庄",
            "pinyin": "zaozhuang",
            "py": "zz"
        },
        {
            "id": 425,
            "provinceId": "1600",
            "cityId": "1610",
            "cityName": "曲阜",
            "pinyin": "qufu",
            "py": "qf"
        },
        {
            "id": 426,
            "provinceId": "1600",
            "cityId": "1611",
            "cityName": "临沂",
            "pinyin": "linyi",
            "py": "ly"
        },
        {
            "id": 427,
            "provinceId": "1600",
            "cityId": "1612",
            "cityName": "德州",
            "pinyin": "dezhou",
            "py": "dz"
        },
        {
            "id": 428,
            "provinceId": "1600",
            "cityId": "1613",
            "cityName": "蓬莱",
            "pinyin": "penglai",
            "py": "pl"
        },
        {
            "id": 429,
            "provinceId": "1600",
            "cityId": "1614",
            "cityName": "泰安",
            "pinyin": "taian",
            "py": "ta"
        },
        {
            "id": 430,
            "provinceId": "1600",
            "cityId": "1615",
            "cityName": "日照",
            "pinyin": "rizhao",
            "py": "rz"
        },
        {
            "id": 431,
            "provinceId": "1600",
            "cityId": "1616",
            "cityName": "菏泽",
            "pinyin": "heze",
            "py": "hz"
        },
        {
            "id": 432,
            "provinceId": "1600",
            "cityId": "1618",
            "cityName": "滨州",
            "pinyin": "binzhou",
            "py": "bz"
        },
        {
            "id": 433,
            "provinceId": "1600",
            "cityId": "1619",
            "cityName": "济宁",
            "pinyin": "jining",
            "py": "jn"
        },
        {
            "id": 434,
            "provinceId": "1600",
            "cityId": "1620",
            "cityName": "寿光",
            "pinyin": "shouguang",
            "py": "sg"
        },
        {
            "id": 435,
            "provinceId": "1600",
            "cityId": "1622",
            "cityName": "聊城",
            "pinyin": "liaocheng",
            "py": "lc"
        },
        {
            "id": 436,
            "provinceId": "1600",
            "cityId": "1625",
            "cityName": "即墨",
            "pinyin": "jimo",
            "py": "jm"
        },
        {
            "id": 437,
            "provinceId": "1600",
            "cityId": "1626",
            "cityName": "莱西",
            "pinyin": "laixi",
            "py": "lx"
        },
        {
            "id": 438,
            "provinceId": "1600",
            "cityId": "1627",
            "cityName": "章丘",
            "pinyin": "zhangqiu",
            "py": "zq"
        },
        {
            "id": 439,
            "provinceId": "1600",
            "cityId": "1629",
            "cityName": "文登",
            "pinyin": "wendeng",
            "py": "wd"
        },
        {
            "id": 440,
            "provinceId": "1600",
            "cityId": "1631",
            "cityName": "胶州",
            "pinyin": "jiaozhou",
            "py": "jz"
        },
        {
            "id": 441,
            "provinceId": "1600",
            "cityId": "1632",
            "cityName": "胶南",
            "pinyin": "jiaonan",
            "py": "jn"
        },
        {
            "id": 442,
            "provinceId": "1600",
            "cityId": "1633",
            "cityName": "长岛县",
            "pinyin": "zhangdaoxian",
            "py": "zdx"
        },
        {
            "id": 443,
            "provinceId": "1600",
            "cityId": "1634",
            "cityName": "莱芜",
            "pinyin": "laiwu",
            "py": "lw"
        },
        {
            "id": 444,
            "provinceId": "1600",
            "cityId": "1636",
            "cityName": "荣成",
            "pinyin": "rongcheng",
            "py": "rc"
        },
        {
            "id": 445,
            "provinceId": "1600",
            "cityId": "1637",
            "cityName": "莱阳",
            "pinyin": "laiyang",
            "py": "ly"
        },
        {
            "id": 446,
            "provinceId": "1600",
            "cityId": "1638",
            "cityName": "平邑",
            "pinyin": "pingyi",
            "py": "py"
        },
        {
            "id": 447,
            "provinceId": "1600",
            "cityId": "1639",
            "cityName": "青州",
            "pinyin": "qingzhou",
            "py": "qz"
        },
        {
            "id": 448,
            "provinceId": "1600",
            "cityId": "1640",
            "cityName": "龙口",
            "pinyin": "longkou",
            "py": "lk"
        },
        {
            "id": 449,
            "provinceId": "1600",
            "cityId": "1641",
            "cityName": "广饶",
            "pinyin": "guangrao",
            "py": "gr"
        },
        {
            "id": 450,
            "provinceId": "1600",
            "cityId": "1642",
            "cityName": "垦利",
            "pinyin": "kenli",
            "py": "kl"
        },
        {
            "id": 451,
            "provinceId": "1600",
            "cityId": "1643",
            "cityName": "平度",
            "pinyin": "pingdu",
            "py": "pd"
        },
        {
            "id": 452,
            "provinceId": "1600",
            "cityId": "1644",
            "cityName": "高密",
            "pinyin": "gaomi",
            "py": "gm"
        },
        {
            "id": 453,
            "provinceId": "1600",
            "cityId": "1645",
            "cityName": "肥城",
            "pinyin": "feicheng",
            "py": "fc"
        },
        {
            "id": 454,
            "provinceId": "1600",
            "cityId": "1646",
            "cityName": "五莲",
            "pinyin": "wulian",
            "py": "wl"
        },
        {
            "id": 455,
            "provinceId": "1600",
            "cityId": "1647",
            "cityName": "东明",
            "pinyin": "dongming",
            "py": "dm"
        },
        {
            "id": 456,
            "provinceId": "1600",
            "cityId": "1648",
            "cityName": "诸城",
            "pinyin": "zhucheng",
            "py": "zc"
        },
        {
            "id": 457,
            "provinceId": "1600",
            "cityId": "1649",
            "cityName": "夏津",
            "pinyin": "xiajin",
            "py": "xj"
        },
        {
            "id": 458,
            "provinceId": "1600",
            "cityId": "1650",
            "cityName": "博兴",
            "pinyin": "boxing",
            "py": "bx"
        },
        {
            "id": 459,
            "provinceId": "1600",
            "cityId": "1651",
            "cityName": "海阳",
            "pinyin": "haiyang",
            "py": "hy"
        },
        {
            "id": 460,
            "provinceId": "1600",
            "cityId": "1652",
            "cityName": "莱州",
            "pinyin": "laizhou",
            "py": "lz"
        },
        {
            "id": 461,
            "provinceId": "1600",
            "cityId": "1653",
            "cityName": "安丘",
            "pinyin": "anqiu",
            "py": "aq"
        },
        {
            "id": 462,
            "provinceId": "1600",
            "cityId": "1654",
            "cityName": "栖霞",
            "pinyin": "qixia",
            "py": "qx"
        },
        {
            "id": 463,
            "provinceId": "1600",
            "cityId": "1655",
            "cityName": "兖州",
            "pinyin": "yanzhou",
            "py": "yz"
        },
        {
            "id": 464,
            "provinceId": "1600",
            "cityId": "1656",
            "cityName": "招远",
            "pinyin": "zhaoyuan",
            "py": "zy"
        },
        {
            "id": 465,
            "provinceId": "1600",
            "cityId": "1657",
            "cityName": "沂源县",
            "pinyin": "yiyuanxian",
            "py": "yyx"
        },
        {
            "id": 466,
            "provinceId": "1600",
            "cityId": "1658",
            "cityName": "沂南",
            "pinyin": "yinan",
            "py": "yn"
        },
        {
            "id": 467,
            "provinceId": "1600",
            "cityId": "1659",
            "cityName": "郓城",
            "pinyin": "yuncheng",
            "py": "yc"
        },
        {
            "id": 468,
            "provinceId": "1600",
            "cityId": "1660",
            "cityName": "沂水",
            "pinyin": "yishui",
            "py": "ys"
        },
        {
            "id": 469,
            "provinceId": "1600",
            "cityId": "1661",
            "cityName": "乳山",
            "pinyin": "rushan",
            "py": "rs"
        },
        {
            "id": 470,
            "provinceId": "1600",
            "cityId": "1662",
            "cityName": "泗水",
            "pinyin": "sishui",
            "py": "ss"
        },
        {
            "id": 471,
            "provinceId": "1600",
            "cityId": "1663",
            "cityName": "邹平县",
            "pinyin": "zoupingxian",
            "py": "zpx"
        },
        {
            "id": 472,
            "provinceId": "1600",
            "cityId": "1664",
            "cityName": "济阳县",
            "pinyin": "jiyangxian",
            "py": "jyx"
        },
        {
            "id": 473,
            "provinceId": "1600",
            "cityId": "1665",
            "cityName": "滕州",
            "pinyin": "tengzhou",
            "py": "tz"
        },
        {
            "id": 474,
            "provinceId": "1600",
            "cityId": "1666",
            "cityName": "平原县",
            "pinyin": "pingyuanxian",
            "py": "pyx"
        },
        {
            "id": 475,
            "provinceId": "1600",
            "cityId": "1667",
            "cityName": "茌平",
            "pinyin": "chiping",
            "py": "cp"
        },
        {
            "id": 476,
            "provinceId": "1600",
            "cityId": "1668",
            "cityName": "昌乐",
            "pinyin": "changle",
            "py": "cl"
        },
        {
            "id": 477,
            "provinceId": "1600",
            "cityId": "1669",
            "cityName": "无棣",
            "pinyin": "wudi",
            "py": "wd"
        },
        {
            "id": 478,
            "provinceId": "1600",
            "cityId": "1670",
            "cityName": "东平",
            "pinyin": "dongping",
            "py": "dp"
        },
        {
            "id": 479,
            "provinceId": "1600",
            "cityId": "1671",
            "cityName": "莒南",
            "pinyin": "junan",
            "py": "jn"
        },
        {
            "id": 480,
            "provinceId": "1600",
            "cityId": "1672",
            "cityName": "邹城",
            "pinyin": "zoucheng",
            "py": "zc"
        },
        {
            "id": 481,
            "provinceId": "1600",
            "cityId": "1673",
            "cityName": "金乡",
            "pinyin": "jinxiang",
            "py": "jx"
        },
        {
            "id": 482,
            "provinceId": "1600",
            "cityId": "1674",
            "cityName": "宁阳",
            "pinyin": "ningyang",
            "py": "ny"
        },
        {
            "id": 483,
            "provinceId": "1600",
            "cityId": "1675",
            "cityName": "新泰",
            "pinyin": "xintai",
            "py": "xt"
        },
        {
            "id": 484,
            "provinceId": "1700",
            "cityId": "1701",
            "cityName": "郑州",
            "pinyin": "zhengzhou",
            "py": "zz"
        },
        {
            "id": 485,
            "provinceId": "1700",
            "cityId": "1702",
            "cityName": "洛阳",
            "pinyin": "luoyang",
            "py": "ly"
        },
        {
            "id": 486,
            "provinceId": "1700",
            "cityId": "1703",
            "cityName": "开封",
            "pinyin": "kaifeng",
            "py": "kf"
        },
        {
            "id": 487,
            "provinceId": "1700",
            "cityId": "1704",
            "cityName": "新乡",
            "pinyin": "xinxiang",
            "py": "xx"
        },
        {
            "id": 488,
            "provinceId": "1700",
            "cityId": "1705",
            "cityName": "平顶山",
            "pinyin": "pingdingshan",
            "py": "pds"
        },
        {
            "id": 489,
            "provinceId": "1700",
            "cityId": "1706",
            "cityName": "濮阳",
            "pinyin": "puyang",
            "py": "py"
        },
        {
            "id": 490,
            "provinceId": "1700",
            "cityId": "1707",
            "cityName": "南阳",
            "pinyin": "nanyang",
            "py": "ny"
        },
        {
            "id": 491,
            "provinceId": "1700",
            "cityId": "1708",
            "cityName": "三门峡",
            "pinyin": "sanmenxia",
            "py": "smx"
        },
        {
            "id": 492,
            "provinceId": "1700",
            "cityId": "1709",
            "cityName": "济源",
            "pinyin": "jiyuan",
            "py": "jy"
        },
        {
            "id": 493,
            "provinceId": "1700",
            "cityId": "1710",
            "cityName": "焦作",
            "pinyin": "jiaozuo",
            "py": "jz"
        },
        {
            "id": 494,
            "provinceId": "1700",
            "cityId": "1711",
            "cityName": "灵宝",
            "pinyin": "lingbao",
            "py": "lb"
        },
        {
            "id": 495,
            "provinceId": "1700",
            "cityId": "1712",
            "cityName": "鹤壁",
            "pinyin": "hebi",
            "py": "hb"
        },
        {
            "id": 496,
            "provinceId": "1700",
            "cityId": "1713",
            "cityName": "许昌",
            "pinyin": "xuchang",
            "py": "xc"
        },
        {
            "id": 497,
            "provinceId": "1700",
            "cityId": "1714",
            "cityName": "周口",
            "pinyin": "zhoukou",
            "py": "zk"
        },
        {
            "id": 498,
            "provinceId": "1700",
            "cityId": "1716",
            "cityName": "安阳",
            "pinyin": "anyang",
            "py": "ay"
        },
        {
            "id": 499,
            "provinceId": "1700",
            "cityId": "1717",
            "cityName": "漯河",
            "pinyin": "luohe",
            "py": "lh"
        },
        {
            "id": 500,
            "provinceId": "1700",
            "cityId": "1718",
            "cityName": "驻马店",
            "pinyin": "zhumadian",
            "py": "zmd"
        },
        {
            "id": 501,
            "provinceId": "1700",
            "cityId": "1719",
            "cityName": "登封",
            "pinyin": "dengfeng",
            "py": "df"
        },
        {
            "id": 502,
            "provinceId": "1700",
            "cityId": "1720",
            "cityName": "信阳",
            "pinyin": "xinyang",
            "py": "xy"
        },
        {
            "id": 503,
            "provinceId": "1700",
            "cityId": "1721",
            "cityName": "商丘",
            "pinyin": "shangqiu",
            "py": "sq"
        },
        {
            "id": 504,
            "provinceId": "1700",
            "cityId": "1722",
            "cityName": "荥阳",
            "pinyin": "yingyang",
            "py": "yy"
        },
        {
            "id": 505,
            "provinceId": "1700",
            "cityId": "1723",
            "cityName": "新郑",
            "pinyin": "xinzheng",
            "py": "xz"
        },
        {
            "id": 506,
            "provinceId": "1700",
            "cityId": "1724",
            "cityName": "新密",
            "pinyin": "xinmi",
            "py": "xm"
        },
        {
            "id": 507,
            "provinceId": "1700",
            "cityId": "1726",
            "cityName": "栾川",
            "pinyin": "luanchuan",
            "py": "lc"
        },
        {
            "id": 508,
            "provinceId": "1700",
            "cityId": "1727",
            "cityName": "汝州",
            "pinyin": "ruzhou",
            "py": "rz"
        },
        {
            "id": 509,
            "provinceId": "1700",
            "cityId": "1728",
            "cityName": "林州",
            "pinyin": "linzhou",
            "py": "lz"
        },
        {
            "id": 510,
            "provinceId": "1700",
            "cityId": "1729",
            "cityName": "禹州",
            "pinyin": "yuzhou",
            "py": "yz"
        },
        {
            "id": 511,
            "provinceId": "1700",
            "cityId": "1730",
            "cityName": "永城",
            "pinyin": "yongcheng",
            "py": "yc"
        },
        {
            "id": 512,
            "provinceId": "1700",
            "cityId": "1731",
            "cityName": "巩义",
            "pinyin": "gongyi",
            "py": "gy"
        },
        {
            "id": 513,
            "provinceId": "1700",
            "cityId": "1732",
            "cityName": "偃师",
            "pinyin": "yanshi",
            "py": "ys"
        },
        {
            "id": 514,
            "provinceId": "1700",
            "cityId": "1733",
            "cityName": "舞阳",
            "pinyin": "wuyang",
            "py": "wy"
        },
        {
            "id": 515,
            "provinceId": "1700",
            "cityId": "1734",
            "cityName": "邓州",
            "pinyin": "dengzhou",
            "py": "dz"
        },
        {
            "id": 516,
            "provinceId": "1700",
            "cityId": "1736",
            "cityName": "周口淮阳县",
            "pinyin": "zhoukouhuaiyangxian",
            "py": "zkhyx"
        },
        {
            "id": 517,
            "provinceId": "1800",
            "cityId": "1801",
            "cityName": "武汉",
            "pinyin": "wuhan",
            "py": "wh"
        },
        {
            "id": 518,
            "provinceId": "1800",
            "cityId": "1802",
            "cityName": "荆州",
            "pinyin": "jingzhou",
            "py": "jz"
        },
        {
            "id": 519,
            "provinceId": "1800",
            "cityId": "1803",
            "cityName": "宜昌",
            "pinyin": "yichang",
            "py": "yc"
        },
        {
            "id": 520,
            "provinceId": "1800",
            "cityId": "1806",
            "cityName": "车溪",
            "pinyin": "chexi",
            "py": "cx"
        },
        {
            "id": 521,
            "provinceId": "1800",
            "cityId": "1807",
            "cityName": "十堰",
            "pinyin": "shiyan",
            "py": "sy"
        },
        {
            "id": 522,
            "provinceId": "1800",
            "cityId": "1810",
            "cityName": "荆门",
            "pinyin": "jingmen",
            "py": "jm"
        },
        {
            "id": 523,
            "provinceId": "1800",
            "cityId": "1811",
            "cityName": "恩施",
            "pinyin": "enshi",
            "py": "es"
        },
        {
            "id": 524,
            "provinceId": "1800",
            "cityId": "1813",
            "cityName": "神农架",
            "pinyin": "shennongjia",
            "py": "snj"
        },
        {
            "id": 525,
            "provinceId": "1800",
            "cityId": "1814",
            "cityName": "黄石",
            "pinyin": "huangshi",
            "py": "hs"
        },
        {
            "id": 526,
            "provinceId": "1800",
            "cityId": "1815",
            "cityName": "仙桃",
            "pinyin": "xiantao",
            "py": "xt"
        },
        {
            "id": 527,
            "provinceId": "1800",
            "cityId": "1816",
            "cityName": "丹江口",
            "pinyin": "danjiangkou",
            "py": "djk"
        },
        {
            "id": 528,
            "provinceId": "1800",
            "cityId": "1818",
            "cityName": "鄂州",
            "pinyin": "ezhou",
            "py": "ez"
        },
        {
            "id": 529,
            "provinceId": "1800",
            "cityId": "1819",
            "cityName": "大冶－黄石",
            "pinyin": "daye－huangshi",
            "py": "dy－hs"
        },
        {
            "id": 530,
            "provinceId": "1800",
            "cityId": "1820",
            "cityName": "咸宁",
            "pinyin": "xianning",
            "py": "xn"
        },
        {
            "id": 531,
            "provinceId": "1800",
            "cityId": "1821",
            "cityName": "赤壁－咸宁",
            "pinyin": "chibi－xianning",
            "py": "cb－xn"
        },
        {
            "id": 532,
            "provinceId": "1800",
            "cityId": "1822",
            "cityName": "孝感",
            "pinyin": "xiaogan",
            "py": "xg"
        },
        {
            "id": 533,
            "provinceId": "1800",
            "cityId": "1823",
            "cityName": "随州",
            "pinyin": "suizhou",
            "py": "sz"
        },
        {
            "id": 534,
            "provinceId": "1800",
            "cityId": "1826",
            "cityName": "钟祥－荆门",
            "pinyin": "zhongxiang－jingmen",
            "py": "zx－jm"
        },
        {
            "id": 535,
            "provinceId": "1800",
            "cityId": "1829",
            "cityName": "潜江",
            "pinyin": "qianjiang",
            "py": "qj"
        },
        {
            "id": 536,
            "provinceId": "1800",
            "cityId": "1830",
            "cityName": "黄冈",
            "pinyin": "huanggang",
            "py": "hg"
        },
        {
            "id": 537,
            "provinceId": "1800",
            "cityId": "1831",
            "cityName": "武当山－十堰",
            "pinyin": "wudangshan－shiyan",
            "py": "wds－sy"
        },
        {
            "id": 538,
            "provinceId": "1800",
            "cityId": "1832",
            "cityName": "应城",
            "pinyin": "yingcheng",
            "py": "yc"
        },
        {
            "id": 539,
            "provinceId": "1800",
            "cityId": "1833",
            "cityName": "洪湖",
            "pinyin": "honghu",
            "py": "hh"
        },
        {
            "id": 540,
            "provinceId": "1800",
            "cityId": "1834",
            "cityName": "襄阳",
            "pinyin": "xiangyang",
            "py": "xy"
        },
        {
            "id": 541,
            "provinceId": "1800",
            "cityId": "1835",
            "cityName": "嘉鱼－咸宁",
            "pinyin": "jiayu－xianning",
            "py": "jy－xn"
        },
        {
            "id": 542,
            "provinceId": "1800",
            "cityId": "1836",
            "cityName": "武穴－黄冈",
            "pinyin": "wuxue－huanggang",
            "py": "wx－hg"
        },
        {
            "id": 543,
            "provinceId": "1800",
            "cityId": "1837",
            "cityName": "麻城－黄冈",
            "pinyin": "macheng－huanggang",
            "py": "mc－hg"
        },
        {
            "id": 544,
            "provinceId": "1800",
            "cityId": "1838",
            "cityName": "罗田－黄冈",
            "pinyin": "luotian－huanggang",
            "py": "lt－hg"
        },
        {
            "id": 545,
            "provinceId": "1800",
            "cityId": "1839",
            "cityName": "利川－恩施",
            "pinyin": "lichuan－enshi",
            "py": "lc－es"
        },
        {
            "id": 546,
            "provinceId": "1800",
            "cityId": "1840",
            "cityName": "天门",
            "pinyin": "tianmen",
            "py": "tm"
        },
        {
            "id": 547,
            "provinceId": "1800",
            "cityId": "1849",
            "cityName": "英山",
            "pinyin": "yingshan",
            "py": "ys"
        },
        {
            "id": 548,
            "provinceId": "1900",
            "cityId": "1901",
            "cityName": "长沙",
            "pinyin": "zhangsha",
            "py": "zs"
        },
        {
            "id": 549,
            "provinceId": "1900",
            "cityId": "1902",
            "cityName": "株洲",
            "pinyin": "zhuzhou",
            "py": "zz"
        },
        {
            "id": 550,
            "provinceId": "1900",
            "cityId": "1903",
            "cityName": "张家界",
            "pinyin": "zhangjiajie",
            "py": "zjj"
        },
        {
            "id": 551,
            "provinceId": "1900",
            "cityId": "1904",
            "cityName": "岳阳",
            "pinyin": "yueyang",
            "py": "yy"
        },
        {
            "id": 552,
            "provinceId": "1900",
            "cityId": "1906",
            "cityName": "湘潭",
            "pinyin": "xiangtan",
            "py": "xt"
        },
        {
            "id": 553,
            "provinceId": "1900",
            "cityId": "1907",
            "cityName": "郴州",
            "pinyin": "chenzhou",
            "py": "cz"
        },
        {
            "id": 554,
            "provinceId": "1900",
            "cityId": "1910",
            "cityName": "常德",
            "pinyin": "changde",
            "py": "cd"
        },
        {
            "id": 555,
            "provinceId": "1900",
            "cityId": "1915",
            "cityName": "凤凰－湘西",
            "pinyin": "fenghuang－xiangxi",
            "py": "fh－xx"
        },
        {
            "id": 556,
            "provinceId": "1900",
            "cityId": "1916",
            "cityName": "韶山－湘潭",
            "pinyin": "shaoshan－xiangtan",
            "py": "ss－xt"
        },
        {
            "id": 557,
            "provinceId": "1900",
            "cityId": "1918",
            "cityName": "衡阳",
            "pinyin": "hengyang",
            "py": "hy"
        },
        {
            "id": 558,
            "provinceId": "1900",
            "cityId": "1919",
            "cityName": "浏阳－长沙",
            "pinyin": "liuyang－zhangsha",
            "py": "ly－zs"
        },
        {
            "id": 559,
            "provinceId": "1900",
            "cityId": "1920",
            "cityName": "益阳",
            "pinyin": "yiyang",
            "py": "yy"
        },
        {
            "id": 560,
            "provinceId": "1900",
            "cityId": "1921",
            "cityName": "怀化",
            "pinyin": "huaihua",
            "py": "hh"
        },
        {
            "id": 561,
            "provinceId": "1900",
            "cityId": "1922",
            "cityName": "耒阳－衡阳",
            "pinyin": "leiyang－hengyang",
            "py": "ly－hy"
        },
        {
            "id": 562,
            "provinceId": "1900",
            "cityId": "1923",
            "cityName": "永州",
            "pinyin": "yongzhou",
            "py": "yz"
        },
        {
            "id": 563,
            "provinceId": "1900",
            "cityId": "1924",
            "cityName": "邵阳",
            "pinyin": "shaoyang",
            "py": "sy"
        },
        {
            "id": 564,
            "provinceId": "1900",
            "cityId": "1925",
            "cityName": "冷水－娄底",
            "pinyin": "lengshui－loudi",
            "py": "ls－ld"
        },
        {
            "id": 565,
            "provinceId": "1900",
            "cityId": "1926",
            "cityName": "安化",
            "pinyin": "anhua",
            "py": "ah"
        },
        {
            "id": 566,
            "provinceId": "1900",
            "cityId": "1927",
            "cityName": "吉首－湘西",
            "pinyin": "jishou－xiangxi",
            "py": "js－xx"
        },
        {
            "id": 567,
            "provinceId": "1900",
            "cityId": "1928",
            "cityName": "娄底",
            "pinyin": "loudi",
            "py": "ld"
        },
        {
            "id": 568,
            "provinceId": "1900",
            "cityId": "1929",
            "cityName": "醴陵市政府",
            "pinyin": "lilingshizhengfu",
            "py": "llszf"
        },
        {
            "id": 569,
            "provinceId": "2000",
            "cityId": "2001",
            "cityName": "广州",
            "pinyin": "guangzhou",
            "py": "gz"
        },
        {
            "id": 570,
            "provinceId": "2000",
            "cityId": "2002",
            "cityName": "汕头",
            "pinyin": "shantou",
            "py": "st"
        },
        {
            "id": 571,
            "provinceId": "2000",
            "cityId": "2003",
            "cityName": "深圳",
            "pinyin": "shenzhen",
            "py": "sz"
        },
        {
            "id": 572,
            "provinceId": "2000",
            "cityId": "2004",
            "cityName": "珠海",
            "pinyin": "zhuhai",
            "py": "zh"
        },
        {
            "id": 573,
            "provinceId": "2000",
            "cityId": "2005",
            "cityName": "佛山",
            "pinyin": "foshan",
            "py": "fs"
        },
        {
            "id": 574,
            "provinceId": "2000",
            "cityId": "2006",
            "cityName": "揭阳",
            "pinyin": "jieyang",
            "py": "jy"
        },
        {
            "id": 575,
            "provinceId": "2000",
            "cityId": "2007",
            "cityName": "东莞",
            "pinyin": "dongguan",
            "py": "dg"
        },
        {
            "id": 576,
            "provinceId": "2000",
            "cityId": "2008",
            "cityName": "澄海",
            "pinyin": "chenghai",
            "py": "ch"
        },
        {
            "id": 577,
            "provinceId": "2000",
            "cityId": "2009",
            "cityName": "茂名",
            "pinyin": "maoming",
            "py": "mm"
        },
        {
            "id": 578,
            "provinceId": "2000",
            "cityId": "2010",
            "cityName": "惠州",
            "pinyin": "huizhou",
            "py": "hz"
        },
        {
            "id": 579,
            "provinceId": "2000",
            "cityId": "2011",
            "cityName": "中山",
            "pinyin": "zhongshan",
            "py": "zs"
        },
        {
            "id": 580,
            "provinceId": "2000",
            "cityId": "2013",
            "cityName": "肇庆",
            "pinyin": "zhaoqing",
            "py": "zq"
        },
        {
            "id": 581,
            "provinceId": "2000",
            "cityId": "2014",
            "cityName": "湛江",
            "pinyin": "zhanjiang",
            "py": "zj"
        },
        {
            "id": 582,
            "provinceId": "2000",
            "cityId": "2016",
            "cityName": "潮州",
            "pinyin": "chaozhou",
            "py": "cz"
        },
        {
            "id": 583,
            "provinceId": "2000",
            "cityId": "2020",
            "cityName": "阳江",
            "pinyin": "yangjiang",
            "py": "yj"
        },
        {
            "id": 584,
            "provinceId": "2000",
            "cityId": "2021",
            "cityName": "江门",
            "pinyin": "jiangmen",
            "py": "jm"
        },
        {
            "id": 585,
            "provinceId": "2000",
            "cityId": "2026",
            "cityName": "河源",
            "pinyin": "heyuan",
            "py": "hy"
        },
        {
            "id": 586,
            "provinceId": "2000",
            "cityId": "2027",
            "cityName": "清远",
            "pinyin": "qingyuan",
            "py": "qy"
        },
        {
            "id": 587,
            "provinceId": "2000",
            "cityId": "2028",
            "cityName": "梅州",
            "pinyin": "meizhou",
            "py": "mz"
        },
        {
            "id": 588,
            "provinceId": "2000",
            "cityId": "2029",
            "cityName": "鹤山",
            "pinyin": "heshan",
            "py": "hs"
        },
        {
            "id": 589,
            "provinceId": "2000",
            "cityId": "2030",
            "cityName": "韶关",
            "pinyin": "shaoguan",
            "py": "sg"
        },
        {
            "id": 590,
            "provinceId": "2000",
            "cityId": "2037",
            "cityName": "台山",
            "pinyin": "taishan",
            "py": "ts"
        },
        {
            "id": 591,
            "provinceId": "2000",
            "cityId": "2040",
            "cityName": "汕尾",
            "pinyin": "shanwei",
            "py": "sw"
        },
        {
            "id": 592,
            "provinceId": "2000",
            "cityId": "2041",
            "cityName": "云浮",
            "pinyin": "yunfu",
            "py": "yf"
        },
        {
            "id": 593,
            "provinceId": "2000",
            "cityId": "2042",
            "cityName": "普宁",
            "pinyin": "puning",
            "py": "pn"
        },
        {
            "id": 594,
            "provinceId": "2000",
            "cityId": "2045",
            "cityName": "顺德",
            "pinyin": "shunde",
            "py": "sd"
        },
        {
            "id": 595,
            "provinceId": "2000",
            "cityId": "2048",
            "cityName": "开平",
            "pinyin": "kaiping",
            "py": "kp"
        },
        {
            "id": 596,
            "provinceId": "2000",
            "cityId": "2049",
            "cityName": "从化－广州",
            "pinyin": "conghua－guangzhou",
            "py": "ch－gz"
        },
        {
            "id": 597,
            "provinceId": "2000",
            "cityId": "2050",
            "cityName": "恩平",
            "pinyin": "enping",
            "py": "ep"
        },
        {
            "id": 598,
            "provinceId": "2100",
            "cityId": "121000001",
            "cityName": "松阳",
            "pinyin": "songyang",
            "py": "sy"
        },
        {
            "id": 599,
            "provinceId": "2100",
            "cityId": "2101",
            "cityName": "桂林",
            "pinyin": "guilin",
            "py": "gl"
        },
        {
            "id": 600,
            "provinceId": "2100",
            "cityId": "2102",
            "cityName": "南宁",
            "pinyin": "nanning",
            "py": "nn"
        },
        {
            "id": 601,
            "provinceId": "2100",
            "cityId": "2103",
            "cityName": "北海",
            "pinyin": "beihai",
            "py": "bh"
        },
        {
            "id": 602,
            "provinceId": "2100",
            "cityId": "2104",
            "cityName": "玉林",
            "pinyin": "yulin",
            "py": "yl"
        },
        {
            "id": 603,
            "provinceId": "2100",
            "cityId": "2105",
            "cityName": "柳州",
            "pinyin": "liuzhou",
            "py": "lz"
        },
        {
            "id": 604,
            "provinceId": "2100",
            "cityId": "2106",
            "cityName": "阳朔－桂林",
            "pinyin": "yangshuo－guilin",
            "py": "ys－gl"
        },
        {
            "id": 605,
            "provinceId": "2100",
            "cityId": "2107",
            "cityName": "贺州",
            "pinyin": "hezhou",
            "py": "hz"
        },
        {
            "id": 606,
            "provinceId": "2100",
            "cityId": "2108",
            "cityName": "梧州",
            "pinyin": "wuzhou",
            "py": "wz"
        },
        {
            "id": 607,
            "provinceId": "2100",
            "cityId": "2109",
            "cityName": "钦州",
            "pinyin": "qinzhou",
            "py": "qz"
        },
        {
            "id": 608,
            "provinceId": "2100",
            "cityId": "2111",
            "cityName": "贵港",
            "pinyin": "guigang",
            "py": "gg"
        },
        {
            "id": 609,
            "provinceId": "2100",
            "cityId": "2112",
            "cityName": "百色",
            "pinyin": "baise",
            "py": "bs"
        },
        {
            "id": 610,
            "provinceId": "2100",
            "cityId": "2113",
            "cityName": "防城港",
            "pinyin": "fangchenggang",
            "py": "fcg"
        },
        {
            "id": 611,
            "provinceId": "2100",
            "cityId": "2114",
            "cityName": "大新－凭祥",
            "pinyin": "daxin－pingxiang",
            "py": "dx－px"
        },
        {
            "id": 612,
            "provinceId": "2100",
            "cityId": "2115",
            "cityName": "凤山县",
            "pinyin": "fengshanxian",
            "py": "fsx"
        },
        {
            "id": 613,
            "provinceId": "2100",
            "cityId": "2116",
            "cityName": "北流",
            "pinyin": "beiliu",
            "py": "bl"
        },
        {
            "id": 614,
            "provinceId": "2100",
            "cityId": "2118",
            "cityName": "来宾",
            "pinyin": "laibin",
            "py": "lb"
        },
        {
            "id": 615,
            "provinceId": "2100",
            "cityId": "2119",
            "cityName": "河池",
            "pinyin": "hechi",
            "py": "hc"
        },
        {
            "id": 616,
            "provinceId": "2100",
            "cityId": "2120",
            "cityName": "巴马",
            "pinyin": "bama",
            "py": "bm"
        },
        {
            "id": 617,
            "provinceId": "2100",
            "cityId": "2121",
            "cityName": "德保县",
            "pinyin": "debaoxian",
            "py": "dbx"
        },
        {
            "id": 618,
            "provinceId": "2100",
            "cityId": "2123",
            "cityName": "宜州－河池",
            "pinyin": "yizhou－hechi",
            "py": "yz－hc"
        },
        {
            "id": 619,
            "provinceId": "2100",
            "cityId": "2124",
            "cityName": "兴安－桂林",
            "pinyin": "xingan－guilin",
            "py": "xa－gl"
        },
        {
            "id": 620,
            "provinceId": "2100",
            "cityId": "2125",
            "cityName": "龙胜－桂林",
            "pinyin": "longsheng－guilin",
            "py": "ls－gl"
        },
        {
            "id": 621,
            "provinceId": "2100",
            "cityId": "2126",
            "cityName": "资源－桂林",
            "pinyin": "ziyuan－guilin",
            "py": "zy－gl"
        },
        {
            "id": 622,
            "provinceId": "2100",
            "cityId": "2127",
            "cityName": "东兴－防城港",
            "pinyin": "dongxing－fangchenggang",
            "py": "dx－fcg"
        },
        {
            "id": 623,
            "provinceId": "2100",
            "cityId": "2128",
            "cityName": "桂平－贵港",
            "pinyin": "guiping－guigang",
            "py": "gp－gg"
        },
        {
            "id": 624,
            "provinceId": "2100",
            "cityId": "2129",
            "cityName": "凭祥",
            "pinyin": "pingxiang",
            "py": "px"
        },
        {
            "id": 625,
            "provinceId": "2100",
            "cityId": "2130",
            "cityName": "崇左",
            "pinyin": "chongzuo",
            "py": "cz"
        },
        {
            "id": 626,
            "provinceId": "2200",
            "cityId": "2201",
            "cityName": "三亚",
            "pinyin": "sanya",
            "py": "sy"
        },
        {
            "id": 627,
            "provinceId": "2200",
            "cityId": "2202",
            "cityName": "海口",
            "pinyin": "haikou",
            "py": "hk"
        },
        {
            "id": 628,
            "provinceId": "2200",
            "cityId": "2203",
            "cityName": "万宁",
            "pinyin": "wanning",
            "py": "wn"
        },
        {
            "id": 629,
            "provinceId": "2200",
            "cityId": "2206",
            "cityName": "琼海",
            "pinyin": "qionghai",
            "py": "qh"
        },
        {
            "id": 630,
            "provinceId": "2200",
            "cityId": "2207",
            "cityName": "陵水",
            "pinyin": "lingshui",
            "py": "ls"
        },
        {
            "id": 631,
            "provinceId": "2200",
            "cityId": "2208",
            "cityName": "通什",
            "pinyin": "tongshen",
            "py": "ts"
        },
        {
            "id": 632,
            "provinceId": "2200",
            "cityId": "2211",
            "cityName": "兴隆",
            "pinyin": "xinglong",
            "py": "xl"
        },
        {
            "id": 633,
            "provinceId": "2200",
            "cityId": "2212",
            "cityName": "文昌",
            "pinyin": "wenchang",
            "py": "wc"
        },
        {
            "id": 634,
            "provinceId": "2200",
            "cityId": "2213",
            "cityName": "五指山",
            "pinyin": "wuzhishan",
            "py": "wzs"
        },
        {
            "id": 635,
            "provinceId": "2200",
            "cityId": "2214",
            "cityName": "保亭",
            "pinyin": "baoting",
            "py": "bt"
        },
        {
            "id": 636,
            "provinceId": "2200",
            "cityId": "2215",
            "cityName": "定安",
            "pinyin": "dingan",
            "py": "da"
        },
        {
            "id": 637,
            "provinceId": "2200",
            "cityId": "2216",
            "cityName": "儋州",
            "pinyin": "danzhou",
            "py": "dz"
        },
        {
            "id": 638,
            "provinceId": "2200",
            "cityId": "2218",
            "cityName": "东方",
            "pinyin": "dongfang",
            "py": "df"
        },
        {
            "id": 639,
            "provinceId": "2200",
            "cityId": "2219",
            "cityName": "乐东",
            "pinyin": "ledong",
            "py": "ld"
        },
        {
            "id": 640,
            "provinceId": "2200",
            "cityId": "2220",
            "cityName": "博鳌",
            "pinyin": "boao",
            "py": "ba"
        },
        {
            "id": 641,
            "provinceId": "2200",
            "cityId": "2222",
            "cityName": "七仙岭",
            "pinyin": "qixianling",
            "py": "qxl"
        },
        {
            "id": 642,
            "provinceId": "2200",
            "cityId": "2224",
            "cityName": "临高县",
            "pinyin": "lingaoxian",
            "py": "lgx"
        },
        {
            "id": 643,
            "provinceId": "2200",
            "cityId": "9909",
            "cityName": "昌江",
            "pinyin": "changjiang",
            "py": "cj"
        },
        {
            "id": 644,
            "provinceId": "2300",
            "cityId": "2301",
            "cityName": "成都",
            "pinyin": "chengdou",
            "py": "cd"
        },
        {
            "id": 645,
            "provinceId": "2300",
            "cityId": "2302",
            "cityName": "绵阳",
            "pinyin": "mianyang",
            "py": "my"
        },
        {
            "id": 646,
            "provinceId": "2300",
            "cityId": "2303",
            "cityName": "乐山",
            "pinyin": "leshan",
            "py": "ls"
        },
        {
            "id": 647,
            "provinceId": "2300",
            "cityId": "2304",
            "cityName": "眉山",
            "pinyin": "meishan",
            "py": "ms"
        },
        {
            "id": 648,
            "provinceId": "2300",
            "cityId": "2305",
            "cityName": "自贡",
            "pinyin": "zigong",
            "py": "zg"
        },
        {
            "id": 649,
            "provinceId": "2300",
            "cityId": "2306",
            "cityName": "雅安",
            "pinyin": "yaan",
            "py": "ya"
        },
        {
            "id": 650,
            "provinceId": "2300",
            "cityId": "2307",
            "cityName": "都江堰",
            "pinyin": "doujiangyan",
            "py": "djy"
        },
        {
            "id": 651,
            "provinceId": "2300",
            "cityId": "2308",
            "cityName": "宜宾",
            "pinyin": "yibin",
            "py": "yb"
        },
        {
            "id": 652,
            "provinceId": "2300",
            "cityId": "2309",
            "cityName": "南充",
            "pinyin": "nanchong",
            "py": "nc"
        },
        {
            "id": 653,
            "provinceId": "2300",
            "cityId": "2310",
            "cityName": "峨眉山",
            "pinyin": "emeishan",
            "py": "ems"
        },
        {
            "id": 654,
            "provinceId": "2300",
            "cityId": "2311",
            "cityName": "九寨沟",
            "pinyin": "jiuzhaigou",
            "py": "jzg"
        },
        {
            "id": 655,
            "provinceId": "2300",
            "cityId": "2312",
            "cityName": "德阳",
            "pinyin": "deyang",
            "py": "dy"
        },
        {
            "id": 656,
            "provinceId": "2300",
            "cityId": "2313",
            "cityName": "广安",
            "pinyin": "guangan",
            "py": "ga"
        },
        {
            "id": 657,
            "provinceId": "2300",
            "cityId": "2314",
            "cityName": "泸州",
            "pinyin": "luzhou",
            "py": "lz"
        },
        {
            "id": 658,
            "provinceId": "2300",
            "cityId": "2315",
            "cityName": "遂宁",
            "pinyin": "suining",
            "py": "sn"
        },
        {
            "id": 659,
            "provinceId": "2300",
            "cityId": "2316",
            "cityName": "松潘－黄龙，川主寺",
            "pinyin": "songpan－huanglong，chuanzhusi",
            "py": "sp－hl，czs"
        },
        {
            "id": 660,
            "provinceId": "2300",
            "cityId": "2317",
            "cityName": "阆中",
            "pinyin": "langzhong",
            "py": "lz"
        },
        {
            "id": 661,
            "provinceId": "2300",
            "cityId": "2318",
            "cityName": "西昌",
            "pinyin": "xichang",
            "py": "xc"
        },
        {
            "id": 662,
            "provinceId": "2300",
            "cityId": "2319",
            "cityName": "内江",
            "pinyin": "neijiang",
            "py": "nj"
        },
        {
            "id": 663,
            "provinceId": "2300",
            "cityId": "2320",
            "cityName": "广元",
            "pinyin": "guangyuan",
            "py": "gy"
        },
        {
            "id": 664,
            "provinceId": "2300",
            "cityId": "2321",
            "cityName": "攀枝花",
            "pinyin": "panzhihua",
            "py": "pzh"
        },
        {
            "id": 665,
            "provinceId": "2300",
            "cityId": "2323",
            "cityName": "卧龙",
            "pinyin": "wolong",
            "py": "wl"
        },
        {
            "id": 666,
            "provinceId": "2300",
            "cityId": "2328",
            "cityName": "海螺沟－甘孜州",
            "pinyin": "hailuogou－ganzizhou",
            "py": "hlg－gzz"
        },
        {
            "id": 667,
            "provinceId": "2300",
            "cityId": "2329",
            "cityName": "江油",
            "pinyin": "jiangyou",
            "py": "jy"
        },
        {
            "id": 668,
            "provinceId": "2300",
            "cityId": "2330",
            "cityName": "甘孜州",
            "pinyin": "ganzizhou",
            "py": "gzz"
        },
        {
            "id": 669,
            "provinceId": "2300",
            "cityId": "2331",
            "cityName": "什邡－德阳",
            "pinyin": "shenfang－deyang",
            "py": "sf－dy"
        },
        {
            "id": 670,
            "provinceId": "2300",
            "cityId": "2333",
            "cityName": "巴中",
            "pinyin": "bazhong",
            "py": "bz"
        },
        {
            "id": 671,
            "provinceId": "2300",
            "cityId": "2334",
            "cityName": "马尔康－阿坝州",
            "pinyin": "maerkang－abazhou",
            "py": "mek－abz"
        },
        {
            "id": 672,
            "provinceId": "2300",
            "cityId": "2336",
            "cityName": "康定－甘孜州",
            "pinyin": "kangding－ganzizhou",
            "py": "kd－gzz"
        },
        {
            "id": 673,
            "provinceId": "2300",
            "cityId": "2337",
            "cityName": "泸定县－甘孜州",
            "pinyin": "ludingxian－ganzizhou",
            "py": "ldx－gzz"
        },
        {
            "id": 674,
            "provinceId": "2300",
            "cityId": "2339",
            "cityName": "彭州",
            "pinyin": "pengzhou",
            "py": "pz"
        },
        {
            "id": 675,
            "provinceId": "2300",
            "cityId": "2340",
            "cityName": "达州",
            "pinyin": "dazhou",
            "py": "dz"
        },
        {
            "id": 676,
            "provinceId": "2300",
            "cityId": "2341",
            "cityName": "凉山州",
            "pinyin": "liangshanzhou",
            "py": "lsz"
        },
        {
            "id": 677,
            "provinceId": "2300",
            "cityId": "2346",
            "cityName": "资阳",
            "pinyin": "ziyang",
            "py": "zy"
        },
        {
            "id": 678,
            "provinceId": "2300",
            "cityId": "2348",
            "cityName": "双流",
            "pinyin": "shuangliu",
            "py": "sl"
        },
        {
            "id": 679,
            "provinceId": "2300",
            "cityId": "2350",
            "cityName": "西岭雪山",
            "pinyin": "xilingxueshan",
            "py": "xlxs"
        },
        {
            "id": 680,
            "provinceId": "2300",
            "cityId": "2351",
            "cityName": "北川县",
            "pinyin": "beichuanxian",
            "py": "bcx"
        },
        {
            "id": 681,
            "provinceId": "2300",
            "cityId": "2352",
            "cityName": "简阳",
            "pinyin": "jianyang",
            "py": "jy"
        },
        {
            "id": 682,
            "provinceId": "2300",
            "cityId": "2353",
            "cityName": "蜀南竹海",
            "pinyin": "shunanzhuhai",
            "py": "snzh"
        },
        {
            "id": 683,
            "provinceId": "2300",
            "cityId": "2354",
            "cityName": "若尔盖",
            "pinyin": "ruoergai",
            "py": "reg"
        },
        {
            "id": 684,
            "provinceId": "2300",
            "cityId": "2355",
            "cityName": "崇州",
            "pinyin": "chongzhou",
            "py": "cz"
        },
        {
            "id": 685,
            "provinceId": "2300",
            "cityId": "2356",
            "cityName": "阿坝州",
            "pinyin": "abazhou",
            "py": "abz"
        },
        {
            "id": 686,
            "provinceId": "2400",
            "cityId": "2401",
            "cityName": "贵阳",
            "pinyin": "guiyang",
            "py": "gy"
        },
        {
            "id": 687,
            "provinceId": "2400",
            "cityId": "2402",
            "cityName": "遵义",
            "pinyin": "zunyi",
            "py": "zy"
        },
        {
            "id": 688,
            "provinceId": "2400",
            "cityId": "2403",
            "cityName": "兴义－黔西南州",
            "pinyin": "xingyi－qianxinanzhou",
            "py": "xy－qxnz"
        },
        {
            "id": 689,
            "provinceId": "2400",
            "cityId": "2404",
            "cityName": "凯里－黔东南",
            "pinyin": "kaili－qiandongnan",
            "py": "kl－qdn"
        },
        {
            "id": 690,
            "provinceId": "2400",
            "cityId": "2405",
            "cityName": "安顺－黄果树",
            "pinyin": "anshun－huangguoshu",
            "py": "as－hgs"
        },
        {
            "id": 691,
            "provinceId": "2400",
            "cityId": "2407",
            "cityName": "仁怀－遵义",
            "pinyin": "renhuai－zunyi",
            "py": "rh－zy"
        },
        {
            "id": 692,
            "provinceId": "2400",
            "cityId": "2408",
            "cityName": "都匀市－黔南州",
            "pinyin": "douyunshi－qiannanzhou",
            "py": "dys－qnz"
        },
        {
            "id": 693,
            "provinceId": "2400",
            "cityId": "2411",
            "cityName": "荔波－黔南州",
            "pinyin": "libo－qiannanzhou",
            "py": "lb－qnz"
        },
        {
            "id": 694,
            "provinceId": "2400",
            "cityId": "2412",
            "cityName": "六盘水",
            "pinyin": "liupanshui",
            "py": "lps"
        },
        {
            "id": 695,
            "provinceId": "2400",
            "cityId": "2413",
            "cityName": "铜仁",
            "pinyin": "tongren",
            "py": "tr"
        },
        {
            "id": 696,
            "provinceId": "2400",
            "cityId": "2414",
            "cityName": "毕节",
            "pinyin": "bijie",
            "py": "bj"
        },
        {
            "id": 697,
            "provinceId": "2400",
            "cityId": "2415",
            "cityName": "镇远－黔东南州",
            "pinyin": "zhenyuan－qiandongnanzhou",
            "py": "zy－qdnz"
        },
        {
            "id": 698,
            "provinceId": "2400",
            "cityId": "2416",
            "cityName": "独山县",
            "pinyin": "dushanxian",
            "py": "dsx"
        },
        {
            "id": 699,
            "provinceId": "2400",
            "cityId": "2417",
            "cityName": "麻江县",
            "pinyin": "majiangxian",
            "py": "mjx"
        },
        {
            "id": 700,
            "provinceId": "2400",
            "cityId": "2418",
            "cityName": "安顺",
            "pinyin": "anshun",
            "py": "as"
        },
        {
            "id": 701,
            "provinceId": "2400",
            "cityId": "2419",
            "cityName": "安龙县",
            "pinyin": "anlongxian",
            "py": "alx"
        },
        {
            "id": 702,
            "provinceId": "2400",
            "cityId": "2420",
            "cityName": "福泉",
            "pinyin": "fuquan",
            "py": "fq"
        },
        {
            "id": 703,
            "provinceId": "2400",
            "cityId": "2421",
            "cityName": "铜梓县",
            "pinyin": "tongzixian",
            "py": "tzx"
        },
        {
            "id": 704,
            "provinceId": "2400",
            "cityId": "2422",
            "cityName": "江口",
            "pinyin": "jiangkou",
            "py": "jk"
        },
        {
            "id": 705,
            "provinceId": "2500",
            "cityId": "2501",
            "cityName": "昆明",
            "pinyin": "kunming",
            "py": "km"
        },
        {
            "id": 706,
            "provinceId": "2500",
            "cityId": "2503",
            "cityName": "丽江",
            "pinyin": "lijiang",
            "py": "lj"
        },
        {
            "id": 707,
            "provinceId": "2500",
            "cityId": "2505",
            "cityName": "大理",
            "pinyin": "dali",
            "py": "dl"
        },
        {
            "id": 708,
            "provinceId": "2500",
            "cityId": "2506",
            "cityName": "香格里拉－迪庆州",
            "pinyin": "xianggelila－diqingzhou",
            "py": "xgll－dqz"
        },
        {
            "id": 709,
            "provinceId": "2500",
            "cityId": "2507",
            "cityName": "西双版纳",
            "pinyin": "xishuangbanna",
            "py": "xsbn"
        },
        {
            "id": 710,
            "provinceId": "2500",
            "cityId": "2510",
            "cityName": "保山",
            "pinyin": "baoshan",
            "py": "bs"
        },
        {
            "id": 711,
            "provinceId": "2500",
            "cityId": "2511",
            "cityName": "临沧",
            "pinyin": "lincang",
            "py": "lc"
        },
        {
            "id": 712,
            "provinceId": "2500",
            "cityId": "2512",
            "cityName": "腾冲",
            "pinyin": "tengchong",
            "py": "tc"
        },
        {
            "id": 713,
            "provinceId": "2500",
            "cityId": "2513",
            "cityName": "文山",
            "pinyin": "wenshan",
            "py": "ws"
        },
        {
            "id": 714,
            "provinceId": "2500",
            "cityId": "2516",
            "cityName": "德宏洲",
            "pinyin": "dehongzhou",
            "py": "dhz"
        },
        {
            "id": 715,
            "provinceId": "2500",
            "cityId": "2517",
            "cityName": "红河州",
            "pinyin": "honghezhou",
            "py": "hhz"
        },
        {
            "id": 716,
            "provinceId": "2500",
            "cityId": "2518",
            "cityName": "楚雄",
            "pinyin": "chuxiong",
            "py": "cx"
        },
        {
            "id": 717,
            "provinceId": "2500",
            "cityId": "2519",
            "cityName": "德钦",
            "pinyin": "deqin",
            "py": "dq"
        },
        {
            "id": 718,
            "provinceId": "2500",
            "cityId": "2520",
            "cityName": "瑞丽",
            "pinyin": "ruili",
            "py": "rl"
        },
        {
            "id": 719,
            "provinceId": "2500",
            "cityId": "2521",
            "cityName": "芒市－德宏州",
            "pinyin": "mangshi－dehongzhou",
            "py": "ms－dhz"
        },
        {
            "id": 720,
            "provinceId": "2500",
            "cityId": "2522",
            "cityName": "曲靖",
            "pinyin": "qujing",
            "py": "qj"
        },
        {
            "id": 721,
            "provinceId": "2500",
            "cityId": "2523",
            "cityName": "玉溪",
            "pinyin": "yuxi",
            "py": "yx"
        },
        {
            "id": 722,
            "provinceId": "2500",
            "cityId": "2524",
            "cityName": "泸沽湖",
            "pinyin": "luguhu",
            "py": "lgh"
        },
        {
            "id": 723,
            "provinceId": "2500",
            "cityId": "2525",
            "cityName": "建水",
            "pinyin": "jianshui",
            "py": "js"
        },
        {
            "id": 724,
            "provinceId": "2500",
            "cityId": "2527",
            "cityName": "怒江",
            "pinyin": "nujiang",
            "py": "nj"
        },
        {
            "id": 725,
            "provinceId": "2500",
            "cityId": "2528",
            "cityName": "泸西",
            "pinyin": "luxi",
            "py": "lx"
        },
        {
            "id": 726,
            "provinceId": "2500",
            "cityId": "2529",
            "cityName": "普洱",
            "pinyin": "puer",
            "py": "pe"
        },
        {
            "id": 727,
            "provinceId": "2500",
            "cityId": "2530",
            "cityName": "昭通",
            "pinyin": "zhaotong",
            "py": "zt"
        },
        {
            "id": 728,
            "provinceId": "2600",
            "cityId": "2601",
            "cityName": "拉萨",
            "pinyin": "lasa",
            "py": "ls"
        },
        {
            "id": 729,
            "provinceId": "2600",
            "cityId": "2602",
            "cityName": "西藏",
            "pinyin": "xizang",
            "py": "xz"
        },
        {
            "id": 730,
            "provinceId": "2600",
            "cityId": "2603",
            "cityName": "林芝",
            "pinyin": "linzhi",
            "py": "lz"
        },
        {
            "id": 731,
            "provinceId": "2600",
            "cityId": "2604",
            "cityName": "日喀则",
            "pinyin": "rikaze",
            "py": "rkz"
        },
        {
            "id": 732,
            "provinceId": "2600",
            "cityId": "2606",
            "cityName": "昌都",
            "pinyin": "changdou",
            "py": "cd"
        },
        {
            "id": 733,
            "provinceId": "2600",
            "cityId": "2607",
            "cityName": "山南",
            "pinyin": "shannan",
            "py": "sn"
        },
        {
            "id": 734,
            "provinceId": "2600",
            "cityId": "2608",
            "cityName": "那曲",
            "pinyin": "neiqu",
            "py": "nq"
        },
        {
            "id": 735,
            "provinceId": "2600",
            "cityId": "2609",
            "cityName": "阿里",
            "pinyin": "ali",
            "py": "al"
        },
        {
            "id": 736,
            "provinceId": "2700",
            "cityId": "2701",
            "cityName": "西安",
            "pinyin": "xian",
            "py": "xa"
        },
        {
            "id": 737,
            "provinceId": "2700",
            "cityId": "2702",
            "cityName": "宝鸡",
            "pinyin": "baoji",
            "py": "bj"
        },
        {
            "id": 738,
            "provinceId": "2700",
            "cityId": "2703",
            "cityName": "咸阳",
            "pinyin": "xianyang",
            "py": "xy"
        },
        {
            "id": 739,
            "provinceId": "2700",
            "cityId": "2704",
            "cityName": "杨凌",
            "pinyin": "yangling",
            "py": "yl"
        },
        {
            "id": 740,
            "provinceId": "2700",
            "cityId": "2705",
            "cityName": "延安",
            "pinyin": "yanan",
            "py": "ya"
        },
        {
            "id": 741,
            "provinceId": "2700",
            "cityId": "2706",
            "cityName": "韩城",
            "pinyin": "hancheng",
            "py": "hc"
        },
        {
            "id": 742,
            "provinceId": "2700",
            "cityId": "2707",
            "cityName": "汉中",
            "pinyin": "hanzhong",
            "py": "hz"
        },
        {
            "id": 743,
            "provinceId": "2700",
            "cityId": "2708",
            "cityName": "渭南",
            "pinyin": "weinan",
            "py": "wn"
        },
        {
            "id": 744,
            "provinceId": "2700",
            "cityId": "2709",
            "cityName": "榆林",
            "pinyin": "yulin",
            "py": "yl"
        },
        {
            "id": 745,
            "provinceId": "2700",
            "cityId": "2710",
            "cityName": "华山",
            "pinyin": "huashan",
            "py": "hs"
        },
        {
            "id": 746,
            "provinceId": "2700",
            "cityId": "2711",
            "cityName": "米脂县",
            "pinyin": "mizhixian",
            "py": "mzx"
        },
        {
            "id": 747,
            "provinceId": "2700",
            "cityId": "2712",
            "cityName": "商洛",
            "pinyin": "shangluo",
            "py": "sl"
        },
        {
            "id": 748,
            "provinceId": "2700",
            "cityId": "2713",
            "cityName": "铜川",
            "pinyin": "tongchuan",
            "py": "tc"
        },
        {
            "id": 749,
            "provinceId": "2700",
            "cityId": "2714",
            "cityName": "安康",
            "pinyin": "ankang",
            "py": "ak"
        },
        {
            "id": 750,
            "provinceId": "2700",
            "cityId": "2715",
            "cityName": "靖边县",
            "pinyin": "jingbianxian",
            "py": "jbx"
        },
        {
            "id": 751,
            "provinceId": "2700",
            "cityId": "2716",
            "cityName": "扶风县",
            "pinyin": "fufengxian",
            "py": "ffx"
        },
        {
            "id": 752,
            "provinceId": "2700",
            "cityId": "2717",
            "cityName": "柞水县",
            "pinyin": "zuoshuixian",
            "py": "zsx"
        },
        {
            "id": 753,
            "provinceId": "2700",
            "cityId": "2718",
            "cityName": "吴起县",
            "pinyin": "wuqixian",
            "py": "wqx"
        },
        {
            "id": 754,
            "provinceId": "2700",
            "cityId": "2719",
            "cityName": "宁陕县",
            "pinyin": "ningshanxian",
            "py": "nsx"
        },
        {
            "id": 755,
            "provinceId": "2700",
            "cityId": "2720",
            "cityName": "户县",
            "pinyin": "huxian",
            "py": "hx"
        },
        {
            "id": 756,
            "provinceId": "2700",
            "cityId": "2721",
            "cityName": "兴平",
            "pinyin": "xingping",
            "py": "xp"
        },
        {
            "id": 757,
            "provinceId": "2700",
            "cityId": "2722",
            "cityName": "彬县",
            "pinyin": "binxian",
            "py": "bx"
        },
        {
            "id": 758,
            "provinceId": "2700",
            "cityId": "2724",
            "cityName": "临潼",
            "pinyin": "lintong",
            "py": "lt"
        },
        {
            "id": 759,
            "provinceId": "2800",
            "cityId": "2801",
            "cityName": "兰州",
            "pinyin": "lanzhou",
            "py": "lz"
        },
        {
            "id": 760,
            "provinceId": "2800",
            "cityId": "2802",
            "cityName": "嘉峪关",
            "pinyin": "jiayuguan",
            "py": "jyg"
        },
        {
            "id": 761,
            "provinceId": "2800",
            "cityId": "2803",
            "cityName": "敦煌",
            "pinyin": "dunhuang",
            "py": "dh"
        },
        {
            "id": 762,
            "provinceId": "2800",
            "cityId": "2804",
            "cityName": "张掖",
            "pinyin": "zhangye",
            "py": "zy"
        },
        {
            "id": 763,
            "provinceId": "2800",
            "cityId": "2805",
            "cityName": "天水",
            "pinyin": "tianshui",
            "py": "ts"
        },
        {
            "id": 764,
            "provinceId": "2800",
            "cityId": "2806",
            "cityName": "酒泉",
            "pinyin": "jiuquan",
            "py": "jq"
        },
        {
            "id": 765,
            "provinceId": "2800",
            "cityId": "2807",
            "cityName": "白银",
            "pinyin": "baiyin",
            "py": "by"
        },
        {
            "id": 766,
            "provinceId": "2800",
            "cityId": "2808",
            "cityName": "武威",
            "pinyin": "wuwei",
            "py": "ww"
        },
        {
            "id": 767,
            "provinceId": "2800",
            "cityId": "2809",
            "cityName": "平凉",
            "pinyin": "pingliang",
            "py": "pl"
        },
        {
            "id": 768,
            "provinceId": "2800",
            "cityId": "2810",
            "cityName": "金昌",
            "pinyin": "jinchang",
            "py": "jc"
        },
        {
            "id": 769,
            "provinceId": "2800",
            "cityId": "2811",
            "cityName": "夏河",
            "pinyin": "xiahe",
            "py": "xh"
        },
        {
            "id": 770,
            "provinceId": "2800",
            "cityId": "2812",
            "cityName": "甘南",
            "pinyin": "gannan",
            "py": "gn"
        },
        {
            "id": 771,
            "provinceId": "2800",
            "cityId": "2813",
            "cityName": "庆阳",
            "pinyin": "qingyang",
            "py": "qy"
        },
        {
            "id": 772,
            "provinceId": "2800",
            "cityId": "2814",
            "cityName": "迭部县",
            "pinyin": "diebuxian",
            "py": "dbx"
        },
        {
            "id": 773,
            "provinceId": "2800",
            "cityId": "2815",
            "cityName": "临夏",
            "pinyin": "linxia",
            "py": "lx"
        },
        {
            "id": 774,
            "provinceId": "2800",
            "cityId": "2816",
            "cityName": "定西",
            "pinyin": "dingxi",
            "py": "dx"
        },
        {
            "id": 775,
            "provinceId": "2800",
            "cityId": "2818",
            "cityName": "陇南",
            "pinyin": "longnan",
            "py": "ln"
        },
        {
            "id": 776,
            "provinceId": "2900",
            "cityId": "2901",
            "cityName": "银川",
            "pinyin": "yinchuan",
            "py": "yc"
        },
        {
            "id": 777,
            "provinceId": "2900",
            "cityId": "2902",
            "cityName": "石嘴山",
            "pinyin": "shizuishan",
            "py": "szs"
        },
        {
            "id": 778,
            "provinceId": "2900",
            "cityId": "2903",
            "cityName": "吴忠",
            "pinyin": "wuzhong",
            "py": "wz"
        },
        {
            "id": 779,
            "provinceId": "2900",
            "cityId": "2904",
            "cityName": "中卫",
            "pinyin": "zhongwei",
            "py": "zw"
        },
        {
            "id": 780,
            "provinceId": "2900",
            "cityId": "2905",
            "cityName": "固原",
            "pinyin": "guyuan",
            "py": "gy"
        },
        {
            "id": 781,
            "provinceId": "2900",
            "cityId": "2906",
            "cityName": "灵武",
            "pinyin": "lingwu",
            "py": "lw"
        },
        {
            "id": 782,
            "provinceId": "2900",
            "cityId": "2907",
            "cityName": "中宁县",
            "pinyin": "zhongningxian",
            "py": "znx"
        },
        {
            "id": 783,
            "provinceId": "3000",
            "cityId": "3001",
            "cityName": "西宁",
            "pinyin": "xining",
            "py": "xn"
        },
        {
            "id": 784,
            "provinceId": "3000",
            "cityId": "3002",
            "cityName": "青海湖",
            "pinyin": "qinghaihu",
            "py": "qhh"
        },
        {
            "id": 785,
            "provinceId": "3000",
            "cityId": "3003",
            "cityName": "格尔木",
            "pinyin": "geermu",
            "py": "gem"
        },
        {
            "id": 786,
            "provinceId": "3000",
            "cityId": "3004",
            "cityName": "德令哈",
            "pinyin": "delingha",
            "py": "dlh"
        },
        {
            "id": 787,
            "provinceId": "3000",
            "cityId": "3005",
            "cityName": "玉树",
            "pinyin": "yushu",
            "py": "ys"
        },
        {
            "id": 788,
            "provinceId": "3000",
            "cityId": "3006",
            "cityName": "贵德",
            "pinyin": "guide",
            "py": "gd"
        },
        {
            "id": 789,
            "provinceId": "3000",
            "cityId": "3007",
            "cityName": "湟中",
            "pinyin": "huangzhong",
            "py": "hz"
        },
        {
            "id": 790,
            "provinceId": "3000",
            "cityId": "3008",
            "cityName": "海晏",
            "pinyin": "haiyan",
            "py": "hy"
        },
        {
            "id": 791,
            "provinceId": "3000",
            "cityId": "3009",
            "cityName": "共和县",
            "pinyin": "gonghexian",
            "py": "ghx"
        },
        {
            "id": 792,
            "provinceId": "3000",
            "cityId": "3010",
            "cityName": "黄南藏族自治州",
            "pinyin": "huangnanzangzuzizhizhou",
            "py": "hnzzzzz"
        },
        {
            "id": 793,
            "provinceId": "3000",
            "cityId": "3011",
            "cityName": "祁连县",
            "pinyin": "qilianxian",
            "py": "qlx"
        },
        {
            "id": 794,
            "provinceId": "3000",
            "cityId": "3012",
            "cityName": "夏河",
            "pinyin": "xiahe",
            "py": "xh"
        },
        {
            "id": 795,
            "provinceId": "3000",
            "cityId": "3013",
            "cityName": "若尔盖",
            "pinyin": "ruoergai",
            "py": "reg"
        },
        {
            "id": 796,
            "provinceId": "3000",
            "cityId": "3014",
            "cityName": "海西州",
            "pinyin": "haixizhou",
            "py": "hxz"
        },
        {
            "id": 797,
            "provinceId": "3100",
            "cityId": "3101",
            "cityName": "乌鲁木齐",
            "pinyin": "wulumuqi",
            "py": "wlmq"
        },
        {
            "id": 798,
            "provinceId": "3100",
            "cityId": "3102",
            "cityName": "克拉玛依",
            "pinyin": "kelamayi",
            "py": "klmy"
        },
        {
            "id": 799,
            "provinceId": "3100",
            "cityId": "3103",
            "cityName": "伊犁",
            "pinyin": "yili",
            "py": "yl"
        },
        {
            "id": 800,
            "provinceId": "3100",
            "cityId": "3104",
            "cityName": "库尔勒",
            "pinyin": "kuerle",
            "py": "kel"
        },
        {
            "id": 801,
            "provinceId": "3100",
            "cityId": "3105",
            "cityName": "鄯善",
            "pinyin": "shanshan",
            "py": "ss"
        },
        {
            "id": 802,
            "provinceId": "3100",
            "cityId": "3106",
            "cityName": "伊宁",
            "pinyin": "yining",
            "py": "yn"
        },
        {
            "id": 803,
            "provinceId": "3100",
            "cityId": "3107",
            "cityName": "石河子",
            "pinyin": "shihezi",
            "py": "shz"
        },
        {
            "id": 804,
            "provinceId": "3100",
            "cityId": "3108",
            "cityName": "吐鲁番",
            "pinyin": "tulufan",
            "py": "tlf"
        },
        {
            "id": 805,
            "provinceId": "3100",
            "cityId": "3109",
            "cityName": "阿克苏",
            "pinyin": "akesu",
            "py": "aks"
        },
        {
            "id": 806,
            "provinceId": "3100",
            "cityId": "3110",
            "cityName": "喀纳斯",
            "pinyin": "kanasi",
            "py": "kns"
        },
        {
            "id": 807,
            "provinceId": "3100",
            "cityId": "3111",
            "cityName": "喀什",
            "pinyin": "kashen",
            "py": "ks"
        },
        {
            "id": 808,
            "provinceId": "3100",
            "cityId": "3112",
            "cityName": "奎屯",
            "pinyin": "kuitun",
            "py": "kt"
        },
        {
            "id": 809,
            "provinceId": "3100",
            "cityId": "3113",
            "cityName": "哈密",
            "pinyin": "hami",
            "py": "hm"
        },
        {
            "id": 810,
            "provinceId": "3100",
            "cityId": "3114",
            "cityName": "塔什库尔干",
            "pinyin": "tashenkuergan",
            "py": "tskeg"
        },
        {
            "id": 811,
            "provinceId": "3100",
            "cityId": "3115",
            "cityName": "昌吉",
            "pinyin": "changji",
            "py": "cj"
        },
        {
            "id": 812,
            "provinceId": "3100",
            "cityId": "3116",
            "cityName": "博尔塔拉",
            "pinyin": "boertala",
            "py": "betl"
        },
        {
            "id": 813,
            "provinceId": "3100",
            "cityId": "3117",
            "cityName": "博乐",
            "pinyin": "bole",
            "py": "bl"
        },
        {
            "id": 814,
            "provinceId": "3100",
            "cityId": "3118",
            "cityName": "阿勒泰",
            "pinyin": "aletai",
            "py": "alt"
        },
        {
            "id": 815,
            "provinceId": "3100",
            "cityId": "3119",
            "cityName": "鄯善县",
            "pinyin": "shanshanxian",
            "py": "ssx"
        },
        {
            "id": 816,
            "provinceId": "3100",
            "cityId": "3120",
            "cityName": "呼图壁县",
            "pinyin": "hutubixian",
            "py": "htbx"
        },
        {
            "id": 817,
            "provinceId": "3100",
            "cityId": "3121",
            "cityName": "和田",
            "pinyin": "hetian",
            "py": "ht"
        },
        {
            "id": 818,
            "provinceId": "3100",
            "cityId": "3122",
            "cityName": "布尔津县",
            "pinyin": "buerjinxian",
            "py": "bejx"
        },
        {
            "id": 819,
            "provinceId": "3100",
            "cityId": "3123",
            "cityName": "布尔津",
            "pinyin": "buerjin",
            "py": "bej"
        },
        {
            "id": 820,
            "provinceId": "3100",
            "cityId": "3124",
            "cityName": "吉木乃县",
            "pinyin": "jimunaixian",
            "py": "jmnx"
        },
        {
            "id": 821,
            "provinceId": "3200",
            "cityId": "3201",
            "cityName": "香港",
            "pinyin": "xianggang",
            "py": "xg"
        },
        {
            "id": 822,
            "provinceId": "3400",
            "cityId": "3401",
            "cityName": "高雄",
            "pinyin": "gaoxiong",
            "py": "gx"
        },
        {
            "id": 823,
            "provinceId": "3400",
            "cityId": "3402",
            "cityName": "台中",
            "pinyin": "taizhong",
            "py": "tz"
        },
        {
            "id": 824,
            "provinceId": "3400",
            "cityId": "3403",
            "cityName": "台北",
            "pinyin": "taibei",
            "py": "tb"
        },
        {
            "id": 825,
            "provinceId": "3400",
            "cityId": "3405",
            "cityName": "花莲",
            "pinyin": "hualian",
            "py": "hl"
        },
        {
            "id": 826,
            "provinceId": "3400",
            "cityId": "3406",
            "cityName": "宜兰",
            "pinyin": "yilan",
            "py": "yl"
        },
        {
            "id": 827,
            "provinceId": "3400",
            "cityId": "3407",
            "cityName": "台南",
            "pinyin": "tainan",
            "py": "tn"
        },
        {
            "id": 828,
            "provinceId": "3400",
            "cityId": "3408",
            "cityName": "南投",
            "pinyin": "nantou",
            "py": "nt"
        },
        {
            "id": 829,
            "provinceId": "3400",
            "cityId": "3409",
            "cityName": "新竹",
            "pinyin": "xinzhu",
            "py": "xz"
        },
        {
            "id": 830,
            "provinceId": "3400",
            "cityId": "3410",
            "cityName": "桃园市",
            "pinyin": "taoyuanshi",
            "py": "tys"
        },
        {
            "id": 831,
            "provinceId": "3400",
            "cityId": "3411",
            "cityName": "垦丁",
            "pinyin": "kending",
            "py": "kd"
        },
        {
            "id": 832,
            "provinceId": "3400",
            "cityId": "3466",
            "cityName": "马公",
            "pinyin": "magong",
            "py": "mg"
        },
        {
            "id": 833,
            "provinceId": "3400",
            "cityId": "3467",
            "cityName": "台东",
            "pinyin": "taidong",
            "py": "td"
        },
        {
            "id": 834,
            "provinceId": "3400",
            "cityId": "3682",
            "cityName": "嘉义",
            "pinyin": "jiayi",
            "py": "jy"
        },
        {
            "id": 835,
            "provinceId": "3400",
            "cityId": "5355",
            "cityName": "新北市",
            "pinyin": "xinbeishi",
            "py": "xbs"
        },
        {
            "id": 836,
            "provinceId": "3400",
            "cityId": "5366",
            "cityName": "基隆",
            "pinyin": "jilong",
            "py": "jl"
        },
        {
            "id": 837,
            "provinceId": "3400",
            "cityId": "5367",
            "cityName": "金门",
            "pinyin": "jinmen",
            "py": "jm"
        },
        {
            "id": 838,
            "provinceId": "3683",
            "cityId": "1676",
            "cityName": "鹿港镇",
            "pinyin": "lugangzhen",
            "py": "lgz"
        },
        {
            "id": 839,
            "provinceId": "3300",
            "cityId": "3301",
            "cityName": "澳门",
            "pinyin": "aomen",
            "py": "am"
        }
    ];


    function createComparisonFunction(propertyName) {
        return function (object1, object2) {
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];
            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0;
            }
        };
    }

    var cityTotalData = {};
    result.map((v, i) => {
        let k = v.py[0] && v.py[0].toUpperCase();
        if (!cityTotalData[k]) {
            cityTotalData[k] = {letter: k.toUpperCase(), data: []};
        }
        cityTotalData[k].data.push(v);

    })
    var cityArr = [];
    for (let k in cityTotalData) {
        cityArr.push(cityTotalData[k]);
    }
    // console.log('cityTotalDataMap========',cityArr);

    // let arr1 = arr.sort((a,b)=>{
    //     console.log(a,b);
    //     console.log(a[0],b[0]);
    //     return(a[0] < b[0]);
    // })

    //sort排序不是返回布尔是返回数字，所以这么写
    cityArr.sort((a, b) => a.letter.charCodeAt(0) - b.letter.charCodeAt(0))
    // console.log('cityTotalDataMap========',cityArr);

    return cityArr;
}

export function getCustomerQue() {

    let result = [
        {
            "title": "美途卡是什么？",
            "isShow": true,
            "content": "美途卡是美途环球推出的会员卡，包含多项福利，融合各个商家优惠福利，让您在旅行、生活中享用到更好的服务，更多的优惠。"
        },
        {
            "title": "美途卡是否可以升级高级别卡？",
            "isShow": true,
            "content": "可以的，您补充差价即可升级卡的级别，会员权益以高级卡覆盖低级卡，不会再次叠加。"
        },
        {
            "title": "手机可正常使用，收不到验证码怎么办？",
            "isShow": true,
            "content": "若您的手机可正常使用，无法接收到验证码短信，可能是由于通信网络异常造成的，请您稍后重新尝试操作。"
        },
        {
            "title": "购买美途卡是否可以开具发票？",
            "isShow": true,
            "content": "发票目前无法正常开取，如有需求请联系客服确认开具。"
        },
        {
            "title": "签证多长时间出签呢？",
            "isShow": true,
            "content": "七国签证需要2-3个月时间，保签和普通签证需要15个工作日左右出签（视不同国家出签日期不一样）。"
        },
        {
            "title": "如何修改登录密码？",
            "isShow": true,
            "content": "您在小程序中，或者app上可以使用手机号获取验证码后修改密码。"
        },
        {
            "title": "我兑换的净水器为什么没有填写地址的地方？",
            "isShow": true,
            "content": "您兑换成功后，会有客服联系您核对邮寄地址，快递单号会以短信方式给您发送过去"
        },
        {
            "title": "美途卡有什么优惠福利？",
            "isShow": true,
            "content": "美途卡每个等级福利与优惠各个不同，美途环球集合各家优势产品，优质服务让您所花费用物超所值。"
        },
        {
            "title": "我可以给父母/家人使用么？",
            "isShow": true,
            "content": "会员权益不限本人或亲人朋友，您在权益兑换后，请与客服确认具体使用人，注意基因检测采样与实际检测人信息需维统一一人，默认为会员本人。"
        },
        {
            "title": "客服的电话是多少？",
            "isShow": true,
            "content": "客服联系方式：电话010-86207518（电话微信客服：工作日9:30~18：30）"
        }
    ];

    return result;
}

export function getHtmlContent() {
    let mHtml = <div className="policy">
        <p style="line-height: 2em;">
            <div style="font-size: 22px; text-align: center;">欢迎您使用美途环球软件及服务！</div>
        </p>
        <br/>
        <p style="line-height: 2em;"><span
            style="font-size: 18px;">&nbsp;&nbsp;&nbsp;&nbsp;?为使用美途环球软件（以下简称“本软件”）及服务，您应当阅读并遵守《美途环球软件许可及服务协议》（以下简称“本协议”）。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。限制、免责条款可能以加粗形式提示您注意。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 18px;">&nbsp;&nbsp;&nbsp;&nbsp;除非您已阅读并接受本协议所有条款，否则您无权下载、安装或使用本软件及相关服务。您的下载、安装、使用、获取美途环球帐号、用美途环球账户或其他第三方账号登录等行为即视为您已阅读并同意上述协议的约束。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 18px;">&nbsp;&nbsp;&nbsp;&nbsp;如您不同意本协议及/或随时对其的修改，请您立即停止使用美途环球所提供的全部服务；您一旦使用美途环球服务，即视为您已了解并完全同意本使用协议各项内容，包括美途环球对使用协议随时所做的任何修改，并成为美途环球用户（以下简称“用户”）。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 18px;">&nbsp;&nbsp;&nbsp;&nbsp;美途环球根据以下服务条款为您提供服务。这些条款可由美途环球随时更新，且毋须另行通知。美途环球使用本协议一旦发生变动，美途环球将在网页上公布修改内容。修改后的使用协议一旦在网页上公布即有效代替原来的使用协议。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 18px;">&nbsp;&nbsp;&nbsp;&nbsp;如果您未满18周岁，请在法定监护人的陪同下阅读本协议及其他上述协议，并特别注意未成年人使用条款。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">一、协议的范围</span></p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">1.1 协议适用主体范围</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;本协议是您与美途环球之间关于您下载、安装、使用、复制本软件，以及使用美途环球相关服务所订立的协议。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">1.2 协议关系及冲突条款</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;本协议内容同时包括美途环球可能不断发布的关于本服务的相关协议、业务规则等内容。上述内容一经正式发布，即为本协议不可分割的组成部分，您同样应当遵守。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">二、关于本服务</span></p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">2.1 本服务的内容</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;本服务内容是指美途环球向用户提供的跨平台的资讯及互动工具，支持资讯查询、活动报名、问答讨论等功能或内容的软件许可及服务（以下简称“本服务”）。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">2.2 本服务的形式</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;2.2.1 您使用本服务需要下载美途环球客户端软件，对于这些软件，美途环球给予您一项个人的、不可转让及非排他性的许可。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;2.2.2 本服务中美途环球客户端软件提供包括但不限于ios应用版本，用户必须选择与所安装手机相匹配的软件版本。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">2.3 本服务许可的范围</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;2.3.1 美途环球给予您一项个人的、不可转让及非排他性的许可，以使用本软件。您可以为非商业目的在单一台终端设备上安装、使用、显示、运行本软件。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;2.3.2 您可以为使用本软件及服务的目的复制本软件的一个副本，仅用作备份。备份副本必须包含原软件中含有的所有著作权信息。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;2.3.3 本条及本协议其他条款未明示授权的其他一切权利仍由美途环球保留，您在行使这些权利时须另外取得美途环球的书面许可。美途环球如果未行使前述任何权利，并不构成对该权利的放弃。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">三、软件的获取</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;3.1 您可以直接从美途环球的网站上获取本软件，也可以从得到美途环球授权的第三方获取。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;3.2 如果您从未经美途环球授权的第三方获取本软件或与本软件名称相同的安装程序，美途环球无法保证该软件能够正常使用，并对因此给您造成的损失不予负责。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">四、软件的安装与卸载</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;4.1 美途环球可能为不同的终端设备开发了不同的软件版本，您应当根据实际情况选择下载合适的版本进行安装。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;4.2 下载安装程序后，您需要按照该程序提示的步骤正确安装。</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;4.3 为提供更加优质、安全的服务，在本软件安装时美途环球可能推荐您安装其他软件，您可以选择安装或不安装。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;4.4 如果您不再需要使用本软件或者需要安装新版软件，可以自行卸载。如果您愿意帮助美途环球改进产品服务，请告知卸载的原因。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">五、软件的更新</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;5.1 为了改善用户体验、完善服务内容，美途环球将不断努力开发新的服务，并为您不时提供软件更新（这些更新可能会采取软件替换、修改、功能强化、版本升级等形式）。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;5.2 为了保证本软件及服务的安全性和功能的一致性，美途环球有权不经向您特别通知而对软件进行更新，或者对软件的部分功能效果进行改变或限制。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;5.3 本软件新版本发布后，旧版本的软件可能无法使用。美途环球不保证旧版本软件继续可用及相应的客户服务，请您随时核对并下载最新版本。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">六、用户个人信息保护</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;6.1 保护用户个人信息是美途环球的一项基本原则，美途环球将会采取合理的措施保护用户的个人信息。除法律法规规定的情形外，未经用户许可美途环球不会向第三方公开、透露用户个人信息。美途环球对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;6.2 您在注册帐号或使用本服务的过程中，可能需要提供一些必要的信息，例如：为向您提供帐号注册服务或进行用户身份识别，需要您填写手机号码、QQ号码或邮箱帐号等信息。若国家法律法规或政策有特殊规定的，您需要提供真实的身份信息。若您提供的信息不完整，则无法使用本服务或在使用过程中受到限制。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;6.3 一般情况下，您可随时浏览、修改自己提交的信息，但出于安全性和身份识别（如号码申诉服务）的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;6.4 美途环球将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;6.5 未经您的同意，美途环球不会向美途环球以外的任何公司、组织和个人披露您的个人信息，但法律法规另有规定的除外。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;6.6 美途环球非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，在使用美途环球的服务前，应事先取得您家长或法定监护人的书面同意。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">七、主权利义务条款</span></p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">7.1 帐号使用规范</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.1.1 您在使用本服务前需要注册一个美途环球帐号。美途环球帐号可通过手机号码、邮箱帐号进行绑定注册。美途环球有权根据用户需求或产品需要对帐号注册和绑定的方式进行变更。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.1.2 美途环球帐号的所有权归美途环球公司所有，用户完成申请注册手续后，仅获得美途环球帐号的使用权，且该使用权仅属于初始申请注册人，同时，初始申请注册人不得赠与、借用、租用、转让或售卖美途环球帐号或者以其他方式许可非初始申请注册人使用美途环球帐号。非初始申请注册人不得通过受赠、继承、承租、受让或者其他任何方式使用美途环球账号。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.1.3 用户有责任妥善保管注册帐户信息及帐户密码的安全，用户需要对注册帐户以及密码下的行为承担法律责任。用户同意在任何情况下不向他人透露帐户及密码信息。在您怀疑他人在使用您的帐号时，您应立即通知美途环球公司。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.1.4 用户注册美途环球帐号后如果长期不登录该帐号，美途环球有权回收该帐号，以免造成资源浪费，由此带来的任何损失均由用户自行承担。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">7.2 用户注意事项</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.1 您理解并同意：为了向您提供有效的服务，本软件会利用您移动通讯终端的处理器和带宽等资源。本软件使用过程中可能产生数据流量的费用，用户需自行向运营商了解相关资费信息，并自行承担相关费用。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.2您理解并同意美途环球将会尽其商业上的合理努力保障您在本软件及服务中的数据存储安全，但是，美途环球并不能就此提供完全保证，包括但不限于以下情形：</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.1 美途环球不对您在本软件及服务中相关数据的删除或储存失败负责；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.2 美途环球有权根据实际情况自行决定单个用户在本软件及服务中数据的最长储存期限，并在服务器上为其分配数据最大存储空间等。您可根据自己的需要自行备份本软件及服务中的相关数据；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.3 如果您停止使用本软件及服务或服务被终止或取消，美途环球可以从服务器上永久地删除您的数据。服务停止、终止或取消后，美途环球没有义务向您返还任何数据。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.4 用户在使用本软件及服务时，须自行承担如下来自美途环球不可掌控的风险内容，包括但不限于：</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.4.1 由于不可抗拒因素可能引起的个人信息丢失、泄漏等风险；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.4.2 用户必须选择与所安装手机相匹配的软件版本，否则，由于软件与手机型号不相匹配所导致的任何问题或损害，均由用户自行承担；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.2.4.3 由于无线网络信号不稳定、无线网络带宽小等原因，所引起的美途环球登录失败、资料同步不完整、页面打开速度慢等风险。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">7.3 第三方产品和服务</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.3.1 您在使用本软件第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。美途环球和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;7.3.2 因用户使用本软件或要求美途环球提供特定服务时，本软件可能会调用第三方系统或者通过第三方支持用户的使用或访问，使用或访问的结果由该第三方提供（包括但不限于第三方通过美途环球公众帐号提供的服务，或通过开放平台接入的内容等），美途环球不保证通过第三方提供服务及内容的安全性、准确性、有效性及其他不确定的风险，由此若引发的任何争议及损害，与美途环球无关，美途环球不承担任何责任。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">八、用户行为规范</span></p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">8.1 信息内容规范</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.1.1 本条所述信息内容是指用户使用本软件及服务过程中所制作、复制、发布、传播的任何内容，包括但不限于美途环球帐号头像、名字、用户说明等注册信息，或文字、图片等发送，以及其他使用美途环球帐号或本软件及服务所产生的内容。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.1.2 您理解并同意，美途环球一直致力于为用户提供文明健康、规范有序的网络环境，您不得利用美途环球帐号或本软件及服务制作、复制、发布、传播如下干扰美途环球正常运营，以及侵犯其他用户或第三方合法权益的内容，包括但不限于：</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.1.2.1 发布、传送、传播、储存违反国家法律、危害国家安全统一、社会稳定、公序良俗、社会公德以及侮辱、诽谤、淫秽或含有任何性或性暗示的、暴力的内容；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.1.2.2 发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容；</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.1.2.3 涉及他人隐私、个人信息或资料的；</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.1.2.4 发表、传送、传播骚扰、广告信息及垃圾信息；</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.1.2.5 其他违反法律法规、政策及公序良俗、社会公德或干扰美途环球正常运营和侵犯其他用户或第三方合法权益内容的信息。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">8.2 软件使用规范</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;除非法律允许或美途环球书面许可，您使用本软件过程中不得从事下列行为：</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.2.1 对本软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本软件的源代码；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.2.2 对美途环球拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.2.3 对本软件或者本软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及本软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非美途环球经授权的第三方工具/服务接入本软件和相关系统；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.2.4 通过修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.2.5 通过非美途环球开发、授权的第三方软件、插件、外挂、系统，登录或使用美途环球软件及服务，或制作、发布、传播上述工具；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.2.6 自行或者授权他人、第三方软件对本软件及其组件、模块、数据进行干扰；</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.2.7 其他未经美途环球明示授权的行为。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3 服务运营规范</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;除非法律允许或美途环球书面许可，您使用本服务过程中不得从事下列行为：</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3.1 提交、发布虚假信息，或冒充、利用他人名义的；</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3.2 诱导其他用户点击链接页面或分享信息的；</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3.3 虚构事实、隐瞒真相以误导、欺骗他人的；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3.4 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3.5 未经美途环球书面许可利用美途环球帐号和任何功能，以及第三方运营平台进行推广或互相推广的；</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3.6 利用美途环球帐号或本软件及服务从事任何违法犯罪活动的；</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3.7 制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.3.8 其他违反法律法规规定、侵犯其他用户合法权益、干扰产品正常运营或美途环球未明示授权的行为。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">8.4 对自己行为负责</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;您充分了解并同意，您必须为自己注册帐号下的一切行为负责，包括您所发表的任何内容以及由此产生的任何后果。您应对本服务中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的正确性、完整性或实用性的依赖而产生的风险。美途环球无法且不会对因前述风险而导致的任何损失或损害承担责任。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">8.5 违约处理</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.5.1 如果美途环球发现或收到他人举报或投诉用户违反本协议约定的，美途环球有权不经通知随时对相关内容进行删除，并视行为情节对违规帐号处以包括但不限于警告、限制或禁止使用全部或部分功能、帐号封禁直至注销的处罚，并公告处理结果。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.5.2 您理解并同意，美途环球有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此而产生的一切法律责任。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;8.5.3 您理解并同意，因您违反本协议或相关服务条款的规定，导致或产生第三方主张的任何索赔、要求或损失，您应当独立承担责任；美途环球因此遭受损失的，您也应当一并赔偿。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">九、知识产权声明</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;9.1 美途环球是本软件的知识产权权利人。本软件的一切著作权、商标权、专利权、商业秘密等知识产权，以及与本软件相关的所有信息内容（包括但不限于文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律法规和相应的国际条约保护，美途环球享有上述知识产权，但相关权利人依照法律规定应享有的权利除外。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;9.2 未经美途环球或相关权利人书面同意，您不得为任何商业或非商业目的自行或许可任何第三方实施、利用、转让上述知识产权。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">十、终端安全责任</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;10.1 您理解并同意，本软件同大多数互联网软件一样，可能会受多种因素影响，包括但不限于用户原因、网络服务质量、社会环境等；也可能会受各种安全问题的侵扰，包括但不限于他人非法利用用户资料，进行现实中的骚扰；用户下载安装的其他软件或访问的其他网站中可能含有病毒、木马程序或其他恶意程序，威胁您的终端设备信息和数据安全，继而影响本软件的正常使用等。因此，您应加强信息安全及个人信息的保护意识，注意密码保护，以免遭受损失。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;10.2 您不得制作、发布、使用、传播用于窃取美途环球帐号及他人个人信息、财产的恶意程序。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;10.3 维护软件安全与正常使用是美途环球和您的共同责任，美途环球将按照行业标准合理审慎地采取必要技术措施保护您的终端设备信息和数据安全，但是您承认和同意美途环球并不能就此提供完全保证。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;10.4 在任何情况下，您不应轻信借款、索要密码或其他涉及财产的网络信息。涉及财产操作的，请一定先核实对方身份，并请经常留意美途环球有关防范诈骗犯罪的提示。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">十一、第三方软件或技术</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;11.1 本软件可能会使用第三方软件或技术（包括本软件可能使用的开源代码和公共领域代码等，下同），这种使用已经获得合法授权。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;11.2 本软件如果使用了第三方的软件或技术，美途环球将按照相关法规或约定，对相关的协议或其他文件，可能通过本协议附件、在本软件安装包特定文件夹中打包等形式进行展示，它们可能会以“软件使用许可协议”、“授权协议”、“开源代码许可证”或其他形式来表达。前述通过各种形式展现的相关协议或其他文件，均是本协议不可分割的组成部分，与本协议具有同等的法律效力，您应当遵守这些要求。如果您没有遵守这些要求，该第三方或者国家机关可能会对您提起诉讼、罚款或采取其他制裁措施，并要求美途环球给予协助，您应当自行承担法律责任。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;11.3 如因本软件使用的第三方软件或技术引发的任何纠纷，应由该第三方负责解决，美途环球不承担任何责任。美途环球不对第三方软件或技术提供客服支持，若您需要获取支持，请与第三方联系。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">十二、其他</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;12.1 您使用本软件即视为您已阅读并同意受本协议的约束。美途环球有权在必要时修改本协议条款。您可以在本软件的最新版本中查阅相关协议条款。本协议条款变更后，如果您继续使用本软件，即视为您已接受修改后的协议。如果您不接受修改后的协议，应当停止使用本软件。</span>
        </p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;12.2 本协议签订地为中华人民共和国北京市朝阳区。</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;12.3 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;12.4 若您和美途环球之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地有管辖权的人民法院管辖。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;12.5 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;12.6 本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;12.7 用户理解并同意，美途环球平台可能需要维护或调试，在平台维护或调整期间可能给用户造成的不便。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;12.8 对于因不可抗力、系统故障、系统维修、黑客攻击、计算机病毒、电信部门技术调整或故障、网站升级、政府管制、设备损坏等给用户造成的不便和可能有的损失，美途环球不承担任何责任。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">十三、违约赔偿</span></p>
        <p style="line-height: 2em;"><span
            style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;用户同意保障和维护美途环球及其他用户的利益，如因用户违反有关法律、法规或本协议项下的任何条款而给美途环球或任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任。若由于用户行为导致美途环球向第三人承担责任的，美途环球有权向该用户追偿。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 20px;">十四、法律管辖</span></p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;14.1 本协议的订立、执行和解释及争议的解决均应适用中国法律并受中国法院管辖。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;14.2 如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向美途环球的运营方美途环球（北京）科技发展有限公司所在地的人民法院提起诉讼。</span>
        </p>
        <p style="line-height: 2em;"><span style="font-size: 18px;">&nbsp;</span></p>
        <p><br/></p>
    </div>
    return mHtml;
}



