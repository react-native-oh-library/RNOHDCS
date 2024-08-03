/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef, useState } from 'react';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
    Platform,
} from 'react-native';

import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import {
    GestureHandlerRootView,
    PureNativeButton,
    RectButton,
} from 'react-native-gesture-handler';
import { NewApiTest, OldApiTest, SharedAPITest } from './src';


const DEV_MODE = false;

function App({ }): JSX.Element | null {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: '#222', flex: 1 }}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <Tests />
                </GestureHandlerRootView>
            </SafeAreaView>
        </View>
    );
}

function Tests() {

    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView style={{ width: '100%', flex: 1 }}>
                <TestSuite name="Buttons">
                    <TestCase
                        itShould="onActiveStateChange:点击按钮"
                        skip={Platform.OS === 'android' ? "doesn't work on Android" : false}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <RectButton
                                    onActiveStateChange={() => {
                                        console.log("Gesture-Handler: Buttons -------------------> onActiveStateChange");
                                        setState(true);
                                    }}>
                                    <View style={{ padding: 16 }}>
                                        <Text>点我一下</Text>
                                    </View>
                                </RectButton>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onPress: 点击下面的文字测试该属性"
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <RectButton
                                    onPress={() => {
                                        setState(true);
                                    }}>
                                    <View style={{ padding: 16 }}>
                                        <Text>点我一下</Text>
                                    </View>
                                </RectButton>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onLongPress: 长按点击下面的文字测试该属性"
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <RectButton
                                    onLongPress={() => {
                                        setState(true);
                                    }}>
                                    <View style={{ padding: 16 }}>
                                        <Text>长按点我一下</Text>
                                    </View>
                                </RectButton>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="exclusive: 只能同时点击一个按钮--属性值 false"
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <RectButton
                                    exclusive={false}
                                    onPress={() => {
                                        setState(true);
                                    }}>
                                    <View style={{ padding: 16 }}>
                                        <Text>点我一下</Text>
                                    </View>
                                </RectButton>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="delayLongPress: 长按延迟五秒,不要松手，之后触发长按事件--属性值 5000"
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <RectButton
                                    delayLongPress={5000}
                                    onLongPress={() => {
                                        setState(true);
                                    }}>
                                    <View style={{ padding: 16 }}>
                                        <Text>长按我5秒起步</Text>
                                    </View>
                                </RectButton>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="underlayColor: 当按钮激活时背景色--属性值 red"
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <RectButton
                                    underlayColor='red'
                                    onLongPress={() => {
                                        setState(true);
                                    }}>
                                    <View style={{ padding: 16 }}>
                                        <Text>长按我观察背景色</Text>
                                    </View>
                                </RectButton>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}

export default App;