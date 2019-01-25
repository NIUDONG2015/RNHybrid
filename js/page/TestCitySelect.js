import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    SectionList,
    Platform, StyleSheet
} from 'react-native';
import * as Dimens from "../utils/Dimens";
import * as Color from "../utils/Color";
import Loading from "../utils/Loading";

const titleName = "OC你好，我是RN分组列表"
export default class TestCitySelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataType: -1,
            dataUtils: []
        };
        // this.processData = this.processData.bind(this);

    }

    //渲染完成，请求网络数据
    componentDidMount() {
        // this.processData().then((result)=>{
        //     this.setState({
        //         dataUtils: result,
        //         dataType: 0,
        //     })
        // })

        //TODO  方法二
        this.getProcessData2();
    }

    /**
     *
     * @returns {Promise<void>}
     */
    async getProcessData2() {
        let result = await this.processData(1);
        let result2 = await this.processData(2);
        if (result != null && result2 != null) {
            let finalResult = this.state.dataUtils.concat(result).concat(result2);
            this.setState({
                dataUtils: finalResult,
                dataType: 0,
            })
        } else {
            this.setState({
                dataType: 1,
            })
        }
    }

    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return <Text
            style={{
                height: 60,
                textAlignVertical: 'center',
                backgroundColor: "#ffffff",
                color: '#5C5C5C',
                fontSize: 15
            }}>{txt}</Text>
    }

    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={{
                height: 50,
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: '#9CEBBC',
                color: 'white',
                fontSize: 30
            }}>{txt}</Text>
    }

    render() {
        let navigationBar = <View style={styles.title_bar_view}>
            <Text style={{fontSize: 16, color: Color.white}}>{titleName}</Text>
        </View>
        //TODO  决定Titlebar是否要显示
        let mTitleBar = Platform.OS === "ios" ? navigationBar : null;

        return (
            <View style={{flex: 1}}>
                {mTitleBar}
                {this.getFinalList(this.state.dataType)}
            </View>
        );
    }

    async processData(mType) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var sections = [
                    {
                        key: mType === 1 ? "A" : "111111",
                        data: [{title: "分组1"}, {title: "阿玛尼2"}, {title: "爱多多3"}, {title: "阿童木1"}, {title: "阿玛尼2"}, {title: "爱多多3"}, {title: "阿童木1"}, {title: "阿玛尼2"}, {title: "爱多多3"}]
                    },
                    {
                        key: mType === 1 ? "B" : "22222",
                        data: [{title: "分组2"}, {title: "贝贝"}, {title: "表弟"}, {title: "表姐"}, {title: "表叔"}]
                    },
                    {
                        key: "C",
                        data: [{title: "分组3"}, {title: "超市快递1"}, {title: "超市快递2"}, {title: "超市快递3"}, {title: "超市快递4"}, {title: "超市快递5"}]
                    },
                    {
                        key: "D",
                        data: [{title: "分组4"}, {title: "王者荣耀"}, {title: "往事不能回味"}, {title: "王小磊"}, {title: "王中磊"}, {title: "王大磊"}]
                    },
                    {
                        key: "E",
                        data: [{title: "分组5"}, {title: "111"}, {title: "222"}, {title: "333"}, {title: "444"}, {title: "555"}]
                    },
                ];
                resolve(sections);
            }, 1500)
        });
    }

    /**
     * 获取数据状态
     * @param type
     */
    getFinalList(type) {
        let result = <Loading/>;
        switch (type) {
            case -1:
                result = <Loading/>
                break;
            case 0:
                let listContent = <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    stickySectionHeadersEnabled={true}//安卓专用,吸顶
                    sections={this.state.dataUtils}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={() => <View
                        style={{backgroundColor: '#25B960', alignItems: 'center', height: 30}}><Text
                        style={{fontSize: 18, color: '#ffffff'}}>我是HeadView</Text></View>}
                    ListFooterComponent={() => <View
                        style={{backgroundColor: '#25B960', alignItems: 'center', height: 30}}><Text
                        style={{fontSize: 18, color: '#ffffff'}}>我是FootView</Text></View>}
                />
                result = listContent;
                break;
            case 1:
                result = this.dataStatusPage(0)

                break;
            case 2:
                result = this.dataStatusPage(1)
                break;
            default:
                break;
        }
        return result;
    }

    /**
     * 网络状态显示UI
     * @param mType   0 没数据     1网络异常
     * @returns {*}
     */
    dataStatusPage(mType) {
        let result = mType === 1 ? require("../image/no_data.png") : require("../image/no_net.png");

        let hintStr = mType === 1 ? "暂无数据" : "网速不给力";
        return <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Image
                    source={result}
                    style={{
                        resizeMode: 'stretch',
                        width: 100, height: 100
                    }}
                />
                <Text
                    style={{marginTop: 8, fontSize: Dimens.Size.sub_text_size, color: Color.color_text_33}}>
                    {hintStr}
                </Text>
            </View>
        </View>
    }


}
const styles = StyleSheet.create({
    title_bar_view: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.color_theme, width: Dimens.screen_width, height: 65
    }
});

