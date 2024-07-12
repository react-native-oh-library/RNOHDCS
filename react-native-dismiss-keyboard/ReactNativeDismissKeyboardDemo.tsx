import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    View,
    Text,
    Keyboard
} from 'react-native';

import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export default class ReactNativeDismissKeyboardExample extends Component {

    //强制隐藏键盘
    dissmissKeyboard() {
        Keyboard.dismiss();
    }

    render() {
        return (
            <Tester>
                <TestSuite name="showkeyboard">
                    <TestCase itShould='render TextInput' tags={['C_API']} >
                        <TextInput style={[styles.flexDirection, styles.inputHeight]} ref="bottomInput" />
                    </TestCase>
                    <TestCase itShould='render buttonStyle' tags={['C_API']} >
                        <Text style={styles.buttonStyle}
                            onPress={this.dissmissKeyboard.bind(this)}>
                            收起键盘
                        </Text>
                    </TestCase>

                </TestSuite>
            </Tester>
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

export {ReactNativeDismissKeyboardExample}