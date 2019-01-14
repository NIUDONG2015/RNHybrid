import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text, Button, TouchableHighlight
} from 'react-native';
import * as Color from "./Color";
import * as Dimens from "./Dimens";

let icon_net_err = require('../image/net.png');

export default class NetworkFailureLayout extends Component {

    static propTypes = {
        retryClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <View style={netStyles.wrapper}>
                <Image
                    source={icon_net_err}
                    style={{width: 100, height: 100}}
                />
                <Text style={{
                    marginTop: Dimens.Size.public_margin, color: Color.sub_text_color,
                }}>
                    网络失败啦
                </Text>
                <TouchableHighlight style={netStyles.buttonStyle} underlayColor={'#999'}
                                    onPress={() => {
                                        if (this.props.retryClick != null) {
                                            this.props.retryClick()
                                        }
                                    }}
                >

                    <Text style={{

                        color: Color.white,
                        textAlign: 'center',
                    }}>
                        点我重试
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const netStyles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,

    },
    buttonStyle: {
        marginTop: 20,
        width: 100,
        height: 30 ,
        backgroundColor: '#18B4FF',
        justifyContent: 'center',

    }
});

