import React, { useState, useRef } from 'react';
import ReactNative, { TextInput, StyleSheet, Button, View, Text, Switch } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

const Labels = ['Username', 'Password', 'Firstname', 'Lastname', 'Address', 'Phone', 'Email', 'QQ', 'WeChat', 'Webo'];
const SetLabel = '设置resetScrollToCoords';
const SetEnableAutomaticScroll = '设置enableAutomaticScroll';
const SetEnableResetScrollToCoords = '设置enableAutomaticScroll';

export const enableAutomaticScroll: React.FC = (): JSX.Element => {
    const [resetScrollToCoords, setResetScrollToCoords] = useState({ x: 20, y: 20 });
    const [enableAutomaticScroll, setEnableAutomaticScroll] = useState(true);
    const [extraHeight, setExtraHeight] = useState(100);
    const [extraScrollHeight, setExtraScrollHeight] = useState(60);
    const [enableResetScrollToCoords, setEnableResetScrollToCoords] = useState(false);
    const inputRef = useRef<TextInput | null>(null);
    let scroll: JSX.Element | null = null;

    const setEnableAutomaticScrollValue = () => setEnableAutomaticScroll(previousState => !previousState);
    return <Tester>
        <TestSuite name='react-native-autoheight-webview'>
            <TestCase
                key={'getInitStatus_1'}
                itShould={`设置视图是否更新`}
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
                        >
                            <Text>{SetEnableAutomaticScroll}:</Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={enableAutomaticScroll ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor='#3e3e3e'
                                onValueChange={() => {
                                    setEnableAutomaticScrollValue()
                                    setState(true)
                                }}
                                value={enableAutomaticScroll}
                            />
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