import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Tester, TestCase } from '@rnoh/testerino';

export default function PushNotificationIos() {

    const [data, setData] = useState({});

    const addNotificationRequest = () => {
        PushNotificationIOS.addNotificationRequest({
            id: 'test',
            title: 'title1',
            subtitle: 'subtitle',
            body: 'body',
            category: 'test',
            threadId: 'thread-id',
            repeats: true,
            sound: 'customSound.wav',
        });
    };

    const addNotificationBadgeRequest = () => {

        PushNotificationIOS.addNotificationRequest({
            id: 'test',
            title: 'badge1',
            subtitle: 'badge',
            body: 'badge',
            category: 'badge',
            threadId: 'badge-id',
            repeats: true,
            badge: 1,
        });
    }

    const addNotificationIdRequest = () => {
        PushNotificationIOS.addNotificationRequest({
            id: 'id',
            title: 'id',
            subtitle: 'subtitle id',
            body: 'body id',
            repeats: true,
        });
    };

    const addNotificationUserInfoRequest = () => {
        PushNotificationIOS.addNotificationRequest({
            id: 'userInfo',
            title: 'userInfo',
            subtitle: 'subtitle userInfo',
            body: 'body userInfo',
            repeats: true,
        });
    };

    const addSilentNotificationRequest = () => {
        PushNotificationIOS.addNotificationRequest({
            id: 'test-4',
            title: 'title2',
            subtitle: 'subtitle',
            body: 'body',
            category: 'test',
            isSilent: true,
            threadId: 'thread-id',
            repeats: true
        });
    };

    const addMultipleRequests = () => {
        PushNotificationIOS.addNotificationRequest({
            id: 'test-1',
            title: 'First',
            subtitle: 'subtitle',
            body: 'First Notification out of 3',
            category: 'test',
            threadId: 'thread-id',
            repeats: true,
        });

        PushNotificationIOS.addNotificationRequest({
            id: 'test-2',
            title: 'Second',
            subtitle: 'subtitle',
            body: 'Second Notification out of 3',
            category: 'test',
            threadId: 'thread-id',
            repeats: true,
        });

        PushNotificationIOS.addNotificationRequest({
            id: 'test-3',
            title: 'Third',
            subtitle: 'subtitle',
            body: 'Third Notification out of 3',
            category: 'test',
            threadId: 'thread-id',
            repeats: true,
        });
    };

    const setApplicationIconBadgeNumber = (number: number) => {
        PushNotificationIOS.setApplicationIconBadgeNumber(number);
    }

    const removeAllDeliveredNotifications = () => {
        PushNotificationIOS.removeAllDeliveredNotifications();
        getDeliveredNotifications();
    };

    const removeDeliveredNotifications = () => {
        PushNotificationIOS.removeDeliveredNotifications(['test-1']);
        getDeliveredNotifications();
    };

    // removeAllPendingNotificationRequests  removePendingNotificationRequests  setNotificationCategories

    const getDeliveredNotifications = () => {
        PushNotificationIOS.getDeliveredNotifications((data) => {
            if (data) {
                setData(data)
            } else {
                console.log("failed");
            }
        });
    };


    const setNotificationCategories = () => {
        PushNotificationIOS.setNotificationCategories([
            {
                id: 'userAction',
                actions: [
                    { id: 'open', title: 'Open', options: { foreground: true } },
                    {
                        id: 'ignore',
                        title: 'Desruptive',
                        options: { foreground: true, destructive: true },
                    },
                    {
                        id: 'text',
                        title: 'Text Input',
                        options: { foreground: true },
                        textInput: { buttonTitle: 'Send' },
                    },
                ],
            },
        ]);
    };

    const removePendingNotificationRequests = () => {
        PushNotificationIOS.removePendingNotificationRequests(['test-2']);
    }

    const removeAllPendingNotificationRequests = () => {
        PushNotificationIOS.removeAllPendingNotificationRequests();
    }

    const getApplicationIconBadgeNumber = () => {
        PushNotificationIOS.getApplicationIconBadgeNumber((e) => {
            Alert.alert(
                `获取到的角标号`,
                `${e}`,
                [
                    {
                        text: '确认',
                    },
                ],
            );

        });
    }

    const requestPermissions = () => {
        PushNotificationIOS.requestPermissions({
            alert: true,
            badge: true,
        }).then(
            (data) => {
                Alert.alert(
                    `已经开启的推送权限`,
                    `${JSON.stringify(data)}`,
                    [
                        {
                            text: '关闭',
                        },
                    ],
                );
            },
            (data) => {
                console.log('PushNotificationIOS.requestPermissions failed', data);
            },
        );
    }

    const abandonPermissions = () => {
        PushNotificationIOS.abandonPermissions();
    }
    const checkPermissions = () => {
        PushNotificationIOS.checkPermissions((e) => {
            Alert.alert(
                `已经开启的推送权限`,
                `${JSON.stringify(e)}`,
                [
                    {
                        text: '关闭',
                    },
                ],
            );
        });
    }

    const getInitialNotification = () => {
        let result = PushNotificationIOS.getInitialNotification();
        Alert.alert(
            `应用启动方式`,
            `${JSON.stringify(result)}`,
            [
                {
                    text: '关闭',
                },
            ],
        );
    }

    useEffect(() => {
        const type = 'notification';
        PushNotificationIOS.addEventListener(type, onRemoteNotification);
        return () => {
            PushNotificationIOS.removeEventListener(type);
        };
    });

    const onRemoteNotification = (notification) => {
        console.log(notification)
        // const isClicked = notification.getData().userInteraction === 1;

        // if (isClicked) {
        //   // Navigate user to another screen
        // } else {
        //   // Do something else with push notification
        // }
        // // Use the appropriate result based on what you needed to do for this notification
        // const result = PushNotification.FetchResult.NoData;
        // notification.finish(result);
    };

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            <ScrollView>
                <Tester>
                    <TestCase itShould="addNotificationRequest">
                        <Button title="添加通知请求title1"
                            onPress={addNotificationRequest}
                        />
                    </TestCase>
                    <TestCase itShould="addNotificationRequest badge">
                        <Button title="添加通知请求 badge=1"
                            onPress={addNotificationBadgeRequest}
                        />
                    </TestCase>
                    <TestCase itShould="addNotificationRequest id">
                        <Button title="添加通知请求 id"
                            onPress={addNotificationIdRequest}
                        />
                    </TestCase>
                    <TestCase itShould="addNotificationRequest userInfo">
                        <Button title="添加通知请求 userInfo"
                            onPress={addNotificationUserInfoRequest}
                        />
                    </TestCase>
                    <TestCase itShould="addNotificationRequest isSilent=true">
                        <Button title="添加静默通知请求title2"
                            onPress={addSilentNotificationRequest}
                        />
                    </TestCase>
                    <TestCase itShould="addNotificationRequest First Second Third">
                        <Button title="添加多个通知请求First Second Third"
                            onPress={addMultipleRequests}
                        />
                    </TestCase>
                    <TestCase itShould="setApplicationIconBadgeNumber 50">
                        <Button title="设置主屏幕上应用图标的标记编号为50"
                            onPress={() =>
                                PushNotificationIOS.setApplicationIconBadgeNumber(50)}
                        />
                    </TestCase>
                    <TestCase itShould="setApplicationIconBadgeNumber 0">
                        <Button title="清除主屏幕上应用图标的标记编号"
                            onPress={() =>
                                PushNotificationIOS.setApplicationIconBadgeNumber(0)}
                        />
                    </TestCase>
                    {/* 鸿蒙不支持属性getApplicationIconBadgeNumber */}
                    {/* <TestCase itShould="getApplicationIconBadgeNumber">
                        <Button title="获取主屏幕上应用图标的标记编号"
                            onPress={getApplicationIconBadgeNumber}
                        />
                    </TestCase> */}
                    <TestCase itShould="removeAllDeliveredNotifications">
                        <Button title="删除所有已发送的通知请求"
                            onPress={removeAllDeliveredNotifications}
                        />
                    </TestCase>
                    <TestCase itShould="removeDeliveredNotifications">
                        <Button title="删除指定的通知请求First"
                            onPress={removeDeliveredNotifications}
                        />
                    </TestCase>
                    <TestCase itShould="getDeliveredNotifications">
                        <View>
                            <Button
                                onPress={getDeliveredNotifications}
                                title="获取送达通知"
                            />
                            <Text>{JSON.stringify(data)}</Text>
                        </View>
                    </TestCase>
                    {/* 鸿蒙和ios都不支持部分 */}
                    {/* <TestCase itShould="setNotificationCategories">
                        <Button title="设置通知中心的类别"
                            onPress={setNotificationCategories}
                        />
                    </TestCase>
                    <TestCase itShould="removePendingNotificationRequests">
                        <Button title="从通知中心删除指定的待处理通知"
                            onPress={removePendingNotificationRequests}
                        />
                    </TestCase>
                    <TestCase itShould="removeAllPendingNotificationRequests">
                        <Button title="删除通知中心中所有待处理的通知请求"
                            onPress={removeAllPendingNotificationRequests}
                        />
                    </TestCase> */}
                    {/* 鸿蒙不支持部分 */}
                    {/* <TestCase itShould="requestPermissions">
                        <Button title="向iOS请求通知权限 alert badge"
                            onPress={requestPermissions}
                        />
                    </TestCase>
                    <TestCase itShould="abandonPermissions">
                        <Button title="取消通过 Apple Push Notification的远程通知"
                            onPress={abandonPermissions}
                        />
                    </TestCase>
                    <TestCase itShould="checkPermissions">
                        <Button title="查看启用的推送权限"
                            onPress={checkPermissions}
                        />
                    </TestCase>
                    <TestCase itShould="getInitialNotification">
                        <Button title="判断应用程序启动方式"
                            onPress={getInitialNotification}
                        />
                    </TestCase> */}
                </Tester>
            </ScrollView>

        </View>
    );
};