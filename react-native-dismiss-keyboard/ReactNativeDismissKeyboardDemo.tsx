import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    View,
    Text,
    Keyboard
} from 'react-native';

export default class ReactNativeDismissKeyboardExample extends Component {

    keyboardDidShowListener = null;
    keyboardDidHideListener = null;
    state = { KeyboardShown: false };

    constructor(props) {
        super(props);
        this.keyboardDidShowListener = null;
        this.keyboardDidHideListener = null;
        this.state = { KeyboardShown: false };
    }

    //键盘弹出事件响应
    keyboardDidShowHandler(event) {
        this.setState({ KeyboardShown: true });
        console.log(event.endCoordinates.height);
    }

    //键盘隐藏事件响应
    keyboardDidHideHandler(event) {
        this.setState({ KeyboardShown: false });
    }

    //强制隐藏键盘
    dissmissKeyboard() {
        Keyboard.dismiss();
        console.log("输入框当前焦点状态：" + this.refs.bottomInput.isFocused());
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.flexDirection, styles.inputHeight]}>
                    <TextInput style={styles.textInputStyle} ref="bottomInput" />
                    <Text style={styles.buttonStyle}
                        onPress={this.dissmissKeyboard.bind(this)}>
                        收起键盘
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#ffffff'
    },
    flexDirection: {
        flexDirection: 'row'
    },
    inputHeight: {
        height: 35,
        alignItems: 'center'
    },
    textInputStyle: {
        flex: 1,
        height: 35,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 8,
        marginRight: 8
    },
    buttonStyle: {
        fontSize: 20,
        color: 'white',
        width: 100,
        textAlign: 'center',
        backgroundColor: '#4CA300'
    },
});