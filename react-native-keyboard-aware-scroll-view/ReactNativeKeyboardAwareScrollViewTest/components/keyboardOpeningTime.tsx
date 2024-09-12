import React, { useState, useRef } from 'react';
import ReactNative, { TextInput, StyleSheet, Button, View, Text, Switch } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

const Labels = ['Username', 'Password', 'Firstname', 'Lastname', 'Address', 'Phone', 'Email', 'QQ', 'WeChat', 'Webo'];

export const keyboardOpeningTime: React.FC = (): JSX.Element => {
    const [resetScrollToCoords, setResetScrollToCoords] = useState({ x: 20, y: 20 });
    const [enableAutomaticScroll, setEnableAutomaticScroll] = useState(true);
    const [extraHeight, setExtraHeight] = useState(100);
    const [extraScrollHeight, setExtraScrollHeight] = useState(60);
    const [keyboardOpeningTime, setKeyboardOpeningTime] = useState(60);
    const [enableResetScrollToCoords, setEnableResetScrollToCoords] = useState(true);
    const inputRef = useRef<TextInput | null>(null);
    let scroll: JSX.Element | null = null;

    return <Tester>
        <TestSuite name='react-native-autoheight-webview'>
            <TestCase
                key={'getInitStatus_1'}
                itShould={`设置滚动到新位置之前的延迟时间`}
                tags={['C_API']}
                initialState={false}

                arrange={({ setState }) => {
                    const [isShow, setIsshow] = useState(true)
                    return (
                        <KeyboardAwareScrollView
                            style={styles.scroll}
                            resetScrollToCoords={resetScrollToCoords}
                            enableAutomaticScroll={enableAutomaticScroll}
                            extraHeight={extraHeight}
                            extraScrollHeight={extraScrollHeight}
                            enableResetScrollToCoords={enableResetScrollToCoords}
                            innerRef={ref => {
                                scroll = ref
                            }}
                            viewIsInsideTabBar={true}
                            keyboardOpeningTime={keyboardOpeningTime}
                        >
                            <TextInput keyboardType='numeric' style={styles.input} placeholder='请输入keyboardOpeningTime' onEndEditing={(val) => { setKeyboardOpeningTime(Number(val.nativeEvent.text)); setState(true) }} />
                            {
                                Labels.map(item => {
                                    return <View key={item}>
                                        <Text>{item}:</Text>
                                        <TextInput style={styles.input} placeholder='请输入' />
                                    </View>;
                                })
                            }
                        </KeyboardAwareScrollView>
                    );
                }}
                assert={async ({ expect, state }) => {
                    expect(state).to.be.true;
                }}
            />
        </TestSuite>
    </Tester>
};
const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#f0f0f0',
    },
    input: {
        width: 300,
        marginLeft: 20,
        borderWidth: 2,
        borderColor: 'black',
        height: 40,
        borderRadius: 10,
        fontSize: 26,
        paddingLeft: 6,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
    },
    margin: {
        marginTop: 20
    },
});