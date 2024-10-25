import * as React from 'react';
import { SafeAreaView, } from "react-native";

import { Notifier, NotifierWrapper } from 'react-native-notifier';
import Button from './Button';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TestCase, Tester } from '@rnoh/testerino';
export default function NewNoitfier() {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <NotifierWrapper omitGlobalMethodsHookup={true}>
                        <Tester>
                            <TestCase itShould='测试omitGlobalMethodsHookup属性'>
                                <Button
                                    title="omitGlobalMethodsHookup"
                                    onPress={() =>
                                        Notifier.showNotification({
                                            title: 'omitGlobalMethodsHookup',
                                            description: 'omitGlobalMethodsHookup测试,设置为true',
                                        })
                                    }
                                />
                                <Button title="全局方法关闭通知" onPress={() => Notifier.hideNotification()} />
                            </TestCase>
                        </Tester>
                        <NotifierWrapper omitGlobalMethodsHookup={false}>
                            <Tester>
                                <TestCase itShould='测试omitGlobalMethodsHookup属性'>
                                    <Button
                                        title="omitGlobalMethodsHookup"
                                        onPress={() =>
                                            Notifier.showNotification({
                                                title: 'omitGlobalMethodsHookup',
                                                description: 'omitGlobalMethodsHookup测试,默认为false',
                                            })
                                        }
                                    />
                                    <Button title="全局方法关闭通知" onPress={() => Notifier.hideNotification()} />
                                </TestCase>
                            </Tester>
                        </NotifierWrapper>
                        <NotifierWrapper useRNScreensOverlay={true}>
                            <Tester>
                                <TestCase itShould='测试useRNScreensOverlay属性'>
                                    <Button
                                        title="useRNScreensOverlay"
                                        onPress={() =>
                                            Notifier.showNotification({
                                                title: 'useRNScreensOverlay',
                                                description: 'useRNScreensOverlay测试，设置为true',
                                            })
                                        }
                                    />
                                </TestCase>
                            </Tester>
                        </NotifierWrapper>
                        <NotifierWrapper useRNScreensOverlay={false}>
                            <Tester>
                                <TestCase itShould='测试useRNScreensOverlay属性'>
                                    <Button
                                        title="useRNScreensOverlay"
                                        onPress={() =>
                                            Notifier.showNotification({
                                                title: 'useRNScreensOverlay',
                                                description: 'useRNScreensOverlay测试,默认为false',
                                            })
                                        }
                                    />
                                </TestCase>
                            </Tester>
                        </NotifierWrapper>
                        <NotifierWrapper rnScreensOverlayViewStyle={{ shadowColor: 'red' }}>
                            <Tester>
                                <TestCase itShould='测试rnScreensOverlayViewStyle属性'>
                                    <Button
                                        title="rnScreensOverlayViewStyle"
                                        onPress={() =>
                                            Notifier.showNotification({
                                                title: 'rnScreensOverlayViewStyle',
                                                description: 'rnScreensOverlayViewStyle测试',
                                            })
                                        }
                                    />
                                </TestCase>
                            </Tester>
                        </NotifierWrapper>
                    </NotifierWrapper>
                </GestureHandlerRootView>
            </SafeAreaView>
        </>
    )
};
