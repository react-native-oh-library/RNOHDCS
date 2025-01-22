import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import RTNPermissions, { Permission } from "react-native-permissions";
export const PermissionTest = () => {
    const permissionNormal: Permission[] = [
        "ohos.permission.APPROXIMATELY_LOCATION",
        "ohos.permission.MICROPHONE",
        "ohos.permission.READ_CALENDAR",
        "ohos.permission.WRITE_CALENDAR",
        "ohos.permission.ACTIVITY_MOTION",
        "ohos.permission.READ_HEALTH_DATA",
        "ohos.permission.DISTRIBUTED_DATASYNC",
        "ohos.permission.READ_MEDIA",
        "ohos.permission.MEDIA_LOCATION",
        "ohos.permission.ACCESS_BLUETOOTH",
        'ohos.permission.READ_IMAGEVIDEO'
    ];

    const [camer, setCamer] = useState("还未获取")
    const [checkNotifications, setCheckNotifications] = useState<string>("还未获取")
    const [checkMultiple, setCheckMultiple] = useState("还未获取")
    return (
        <Tester style={{ paddingBottom: 80 }}>
            <ScrollView>
                <TestSuite name="react-native-permissions">
                    <TestCase
                        key={"getInitStatus_1"}
                        itShould={`check change`}
                        tags={['C_API']}
                        initialState={camer}

                        arrange={({ setState }) => {

                            return (
                                <View style={{flex: 1}}>
                                    <Text>{camer}</Text>
                                    <Button title="查询相机权限"
                                        onPress={async () => {
                                            let check = await RTNPermissions.check("ohos.permission.CAMERA");
                                            setCamer(check)
                                            setState(check)
                                        }}>
                                    </Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state === 'denied' || state === 'granted').to.be.true;
                        }}
                    />

                    <TestCase
                        key={"getInitStatus_2"}
                        itShould={`checkNotifications change`}
                        tags={['C_API']}
                        initialState={checkNotifications}

                        arrange={({ setState }) => {

                            return (
                                <View style={{ flex: 1 }}>
                                    <Text>{checkNotifications}</Text>
                                    <Button title="检查通知权限"
                                        onPress={async () => {
                                            let check = await RTNPermissions.checkNotifications();
                                            setCheckNotifications(JSON.stringify(check))
                                            setState(check.status)

                                        }}>
                                    </Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state === 'granted' || state === 'blocked').to.be.true;
                        }}
                    />


                    <TestCase
                        key={"getInitStatus_4"}
                        itShould={`request change`}
                        tags={['C_API']}
                        initialState={camer}

                        arrange={({ setState }) => {

                            return (
                                <View style={{ flex: 1 }}>
                                    <Button
                                        title="设置相机权限"
                                        onPress={async () => {
                                            let request = await RTNPermissions.request("ohos.permission.CAMERA");
                                            setState(request)
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state === 'granted' || state === 'blocked' || state === 'denied').to.be.true;
                        }}
                    />

                    <TestCase
                        key={"getInitStatus_5"}
                        itShould={`requestNotifications change`}
                        tags={['C_API']}
                        initialState={checkNotifications}

                        arrange={({ setState }) => {

                            return (
                                <View style={{ flex: 1 }}>
                                    <Button
                                        title="设置通知权限"
                                        onPress={async () => {
                                            let request = await RTNPermissions.requestNotifications(["alert"]);
                                            setState(request.status)
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.eq('granted');
                        }}
                    />

                    <TestCase
                        key={"getInitStatus_6"}
                        itShould={`checkMultiple change`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {

                            return (

                                <View style={{ flex: 1 }}>
                                    <Text>{checkMultiple}</Text>
                                    <Button
                                        title={"查询多个权限"}
                                        onPress={async () => {
                                            let checkMultiple = await RTNPermissions.checkMultiple(
                                                permissionNormal
                                            );
                                            setCheckMultiple(JSON.stringify(checkMultiple))

                                            setState(true)
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        key={"getInitStatus_7"}
                        itShould={`requestMultiple change`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {

                            return (
                                <View style={{ flex: 1 }}>
                                    <Button
                                        title={"设置多个权限"}
                                        onPress={async () => {
                                            let requestMultiple = await RTNPermissions.requestMultiple(
                                                permissionNormal
                                            );
                                            setState(true)
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        key={"getInitStatus_3"}
                        itShould={`openSettings change`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {

                            return (
                                <View style={{ flex: 1 }}>
                                    <Button title="打开设置页"
                                            onPress={async () => {
                                                let check = await RTNPermissions.openSettings();

                                                setState(true)

                                            }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_8"}
                        itShould={`openPhotoPicker change`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {

                            return (
                                <View style={{ flex: 1 }}>
                                    <Button title="打开图片选择"
                                            onPress={async () => {
                                                let check = await RTNPermissions.openPhotoPicker();

                                                setState(true)

                                            }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>

            </ScrollView>
        </Tester>
    );
}

const markerStyles = StyleSheet.create({
    webviewContainer: {
        height: 300
    },
    webviewContainerChange: {
        height: 500
    }
});
