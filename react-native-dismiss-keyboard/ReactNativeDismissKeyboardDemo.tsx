import React, { Component, useState } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    Keyboard,
    ScrollView,
    View,
    Button,
    Pressable
} from 'react-native';

import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

interface State {
    KeyboardShown?: boolean;
}
export default function ReactNativeDismissKeyboardExample() {

    const [state, setState] = useState({
        KeyboardShown: false,
    })


    const TestDismiss = () => {
        return <View style={styles.container}>
            <TextInput style={styles.textInput} />
            <Button title='dismiss' onPress={() => Keyboard.dismiss()}></Button>
        </View>
    }

    const TestVisible = () => {

        const [val, setVal] = useState(false)
        React.useEffect(() => {
            Keyboard.addListener('keyboardDidShow', () => {

                setVal(Keyboard.isVisible())

            })
            Keyboard.addListener('keyboardDidHide', () => {

                setVal(Keyboard.isVisible())
            })
        }, [])
        return <View style={styles.container}>
            <TextInput style={styles.textInput} />
            <Text>
                当前键盘状态：{val + ''}
            </Text>
        </View>
    }

    const TestMetrics = () => {
        const [val, setVal] = useState({})
        React.useEffect(() => {
            Keyboard.addListener('keyboardDidShow', () => {
                setVal(Keyboard.metrics())
            })
            Keyboard.addListener('keyboardDidHide', () => {
                setVal(Keyboard.metrics())
            })
        }, [])
        return <View style={styles.container}>
            <TextInput style={styles.textInput} />
            <Text>
                当前键盘尺寸：{JSON.stringify(val)}
            </Text>
        </View>
    }

    const TestAnimation = () => {
        const [open, setOpen] = useState(false)
        const scheduleLayoutAnimation = (duration) => {
            Keyboard.scheduleLayoutAnimation({
                duration,
                easing: 'linear',
                endCoordinates: { x: 0, y: 0 }
            })
        }

        return <View style={styles.container}>
            <TextInput style={[styles.textInput, open ? { width: 300 } : {}]} onFocus={() => {
                scheduleLayoutAnimation(250)
                setOpen(true)
            }} />
            <Button title='dismiss' onPress={() => {
                scheduleLayoutAnimation(250)
                Keyboard.dismiss()
                setOpen(false)
            }}></Button>
        </View>
    }
    return <Tester style={{ flex: 1 }}>
        <ScrollView >
            <View style={{ paddingBottom: 300 }}>

                <TestSuite name="dismiss">
                    <TestCase itShould='dismiss可以强制收起键盘' tags={['C_API']} >
                        <TestDismiss />
                    </TestCase>
                </TestSuite>

                <TestSuite name="addListener('keyboardDidShow')">
                    <TestCase
                        itShould='事件，键盘开启时触发'
                        tags={['C_API']}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        initialState={false} arrange={
                            ({ setState }) => {
                                React.useEffect(() => {
                                    Keyboard.addListener('keyboardDidShow', () => {
                                        state.KeyboardShown = true
                                        setState(true)
                                    })
                                }, [])
                                return <View style={styles.container}>
                                    <TextInput style={styles.textInput} />
                                </View>
                            }
                        }>
                    </TestCase>
                </TestSuite>
                <TestSuite name="addListener('keyboardDidHide')">
                    <TestCase
                        itShould='事件，键盘关闭时触发'
                        tags={['C_API']}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        initialState={false} arrange={
                            ({ setState }) => {
                                React.useEffect(() => {
                                    Keyboard.addListener('keyboardDidHide', () => {
                                        state.KeyboardShown = false
                                        setState(true)
                                    })
                                }, [])
                                return <View style={styles.container}>
                                    <TextInput style={styles.textInput} />
                                </View>
                            }
                        }>
                    </TestCase>
                </TestSuite>
                <TestSuite name="isVisible">
                    <TestCase
                        itShould='键盘是否可见'
                        tags={['C_API']}>
                        <TestVisible></TestVisible>
                    </TestCase>
                </TestSuite>
                <TestSuite name="scheduleLayoutAnimation">
                    <TestCase
                        itShould='同步动画效果，聚焦input和点击dismiss时能看到动画'
                        tags={['C_API']}>
                        <TestAnimation></TestAnimation>
                    </TestCase>
                </TestSuite>
                <TestSuite name="metrics">
                    <TestCase
                        itShould='如果可见，返回软键盘的指标'
                        tags={['C_API']}>
                        <TestMetrics></TestMetrics>
                    </TestCase>
                </TestSuite>
            </View>

        </ScrollView>
    </Tester >
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        width: 200,
        height: 50
    }
});

export { ReactNativeDismissKeyboardExample }