import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    SectionList,
} from 'react-native';
import * as Dimens from "../utils/Dimens";
import * as Color from "../utils/Color";
import Loading from "../utils/Loading";


export default class TestCitySelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataType: -1,
            dataUtils: []
        };
        this.processData = this.processData.bind(this);

    }

    //渲染完成，请求网络数据
    componentDidMount() {
   this.processData();

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
        return (
            <View style={{flex: 1}}>
                {this.getFinalList(this.state.dataType)}
            </View>
        );
    }

    async processData() {
        setTimeout(() => {
            var sections = [
                {
                    key: "A",
                    data: [{title: "分组1"}, {title: "阿玛尼2"}, {title: "爱多多3"}, {title: "阿童木1"}, {title: "阿玛尼2"}, {title: "爱多多3"}, {title: "阿童木1"}, {title: "阿玛尼2"}, {title: "爱多多3"}]
                },
                {key: "B", data: [{title: "分组2"}, {title: "贝贝"}, {title: "表弟"}, {title: "表姐"}, {title: "表叔"}]},
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
            this.setState({
                dataUtils:sections,
                dataType: 0,
            })
        },1500)
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

        let hintStr=mType===1?"暂无数据":"网速不给力";
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

