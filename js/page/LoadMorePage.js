/**
 * created by niudong on 2018/10/23
 */
import React, {Component} from 'react';
import {StyleSheet, ToastAndroid, FlatList, Dimensions, Text, View, TouchableOpacity, Image} from 'react-native';

import Loading from "../utils/Loading";
import Color from "../utils/Color";

import NetworkFailureLayout from "../utils/NetworkFailureLayout";
import * as Dimens from "../utils/Dimens";
import NavigationBar from "../utils/NavigationBar";

const url = 'http://v.juhe.cn/joke/content/text.php?key=ae240f7fba620fc370b803566654949e&pagesize=10&page=';
const {width, height} = Dimensions.get('window');
const  titleStr="Hello！Native, 我是ReactNative列表";
export default class LoadMorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                // {
                //     content: '老爸老妈因为某事吵个不休，我忍不住吼他们：“吵什么吵，都老夫老妻了，不能包容包容吗，我跟我男朋友就从来不吵，就不能学学我？”然后……他们反应过来后男女混合双打。为什么？因为家里不给早恋……………',
                //     updatetime: '2018-06-22 13:55:00',
                //     hashId: '43e7a60c0e7e8fcab5587edb3098870'
                // }
            ],
            refreshing: false,
            loadingVisible: true,
            netErrorVisible: false,
            page: 1,
        };
    };

    render() {

        var statusBar = {
            backgroundColor: Color.color_theme,
            barStyle: 'light-content',
        }
        let navigationBar =
            <NavigationBar
                title={titleStr}
                statusBar={statusBar}
                style={{backgroundColor:Color.color_theme,width:Dimens.screen_width,height:45}}
            />;

        return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.getView}

                    //下拉刷新，必须设置refreshing状态
                    onRefresh={this.onRefresh}
                    refreshing={this.state.refreshing}

                    //上拉加载
                    onEndReachedThreshold={0.1}
                    onEndReached={this.onLoadMore}
                />
                {
                    this.state.loadingVisible ? (
                        <Loading/>
                    ) : null
                }
                {
                    this.state.netErrorVisible ? (
                        //this.state.page   可以是当前页面
                        <NetworkFailureLayout retryClick={() => {
                            this.setState({
                                refreshing: true,
                                loadingVisible: true,
                                page: 1,
                                netErrorVisible: false,
                            });
                            this.getData(1)
                        }}/>
                    ) : null
                }
            </View>
        );
    }

    keyExtractor = (item, index) => item.hashId;
    /**
     * 下拉刷新从第0页面重新开始
     */
    onRefresh = () => {
        //设置刷新状态为正在刷新
        this.setState({
            refreshing: true,
            loadingVisible: true,
            page: 1
        });
        this.getData(1)
    };

    onLoadMore = (info: { distanceFromEnd: number }) => {
        this.setState({
            loadingVisible: true,
        });
        this.getData(this.state.page)
    };

    getView({item}) {
        //这里返回的就是每个Item
        return (
            <View style={styles.joker_card}>
                <Text style={{fontSize: Dimens.Size.middle_text_size, color: Color.main_text_color}}>
                    {item.content}
                </Text>
                <Text style={styles.joker_date}>
                    {item.updatetime}
                </Text>
            </View>
        )
    };

    //渲染完成，请求网络数据
    componentDidMount() {
        this.getData(this.state.page);
    }


    /**
     * 加载数据
     * @param page   失败点击重试和下拉刷新 --------1，其他----- 累加
     */
    getData(page) {
        console.log('Joker', "page:\t" + page);
        fetch(url + page)
            .then((response) => response.json())
            .then((response) => {
                //解析json数据
                this.onSuccess(response)
            })
            .catch((error) => {
                //网络错误处理
                this.onFailed("网络失败啦！")
            });
    }

    onSuccess(response) {
        console.log('Joker', response);
        if (response.error_code ===0) {
            if (this.state.page === 1) {
                this.setState({
                    data: response.result.data,
                })
            } else {
                this.setState({
                    data: this.state.data.concat(response.result.data),
                })
            }

            let page = this.state.page + 1;
            this.setState({
                loadingVisible: false,
                refreshing: false,
                page: page,
                netErrorVisible: false,
            })
        } else {
            this.onFailed(response.reason)
        }
    }

    onFailed(msg) {
        this.setState({
            loadingVisible: false,
            refreshing: false,
            netErrorVisible: true,
        });
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    }

    getLeftButton(callBack) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}>
            <Image
                style={{width: 30, height: 40, tintColor: Color.white}}
                source={require('../image/icon_back.png')}/>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    joker_card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 5,
        width: width - Dimens.Size.public_margin,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        backgroundColor: Color.white,
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        padding: Dimens.Size.public_margin,
        elevation: 3,
        overflow: 'hidden',
    },
    joker_date: {
        marginTop: Dimens.Size.public_margin / 2,
        alignSelf: 'flex-end',
        color: Color.sub_text_color,
    }
});