import { ScrollView, StyleSheet, View, Text } from 'react-native';
import RTNPermissions, { Permission } from 'react-native-permissions';
import React, { useState } from 'react';
import { Button } from '../components';

const permissionNormal: Permission[] = [
    'ohos.permission.APPROXIMATELY_LOCATION',
    'ohos.permission.CAMERA',
    'ohos.permission.MICROPHONE',
    'ohos.permission.READ_CALENDAR',
    'ohos.permission.WRITE_CALENDAR',
    'ohos.permission.ACTIVITY_MOTION',
    'ohos.permission.READ_HEALTH_DATA',
    'ohos.permission.DISTRIBUTED_DATASYNC',
    'ohos.permission.READ_MEDIA',
    'ohos.permission.MEDIA_LOCATION',
    'ohos.permission.ACCESS_BLUETOOTH',
]

export function PermissionsExample() {
    const [result, setResult] = useState('');

    return (
        <View style={styles.container}>
            <Text> - blocked：未授权。</Text>
            <Text> - granted：已授权。</Text>
            <Text> - unavailable：未授权，表示请求无效，可能原因有：</Text>
            <Text> - 权限名非法。</Text>
            <Text> - 未在设置文件中声明目标权限。</Text>

            <Text style={styles.text}>{result}</Text>

            <ScrollView style={styles.buttonArea}>
                <View style={styles.view}>
                    <Button label={'查询相机权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.CAMERA');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置相机权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.CAMERA');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button label={'查询麦克风权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.MICROPHONE');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置麦克风权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.MICROPHONE');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button label={'查询日历读取权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.READ_CALENDAR');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置日历读取权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.READ_CALENDAR');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button label={'查询日历添加、移除或更改日历活动权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.WRITE_CALENDAR');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置日历添加、移除或更改日历活动权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.WRITE_CALENDAR');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button label={'查询健身运动权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.ACTIVITY_MOTION');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置健身运动权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.ACTIVITY_MOTION');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button label={'查询身体传感器权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.READ_HEALTH_DATA');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置身体传感器权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.READ_HEALTH_DATA');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button label={'查询多设备协同权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.DISTRIBUTED_DATASYNC');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置多设备协同权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.DISTRIBUTED_DATASYNC');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button label={'查询蓝牙权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.ACCESS_BLUETOOTH');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置蓝牙权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.ACCESS_BLUETOOTH');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button label={'查询读取用户外部存储中的媒体文件信息权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.READ_MEDIA');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置读取用户外部存储中的媒体文件信息权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.READ_MEDIA');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>


                <View style={styles.view}>
                    <Button label={'查询访问图片与视频权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.MEDIA_LOCATION');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }} />
                    <Button label={'设置访问图片与视频权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.MEDIA_LOCATION');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }} />
                </View>

                <View style={styles.view}>
                    <Button
                        label={'查询应用获取设备位置信息权限'}
                        onPress={async () => {
                            let check = await RTNPermissions.check('ohos.permission.APPROXIMATELY_LOCATION');
                            setResult(check + '');
                            console.info('RTNPermissions===== check', check);
                        }}
                    />
                    <Button
                        label={'设置应用获取设备位置信息权限'}
                        onPress={async () => {
                            let request = await RTNPermissions.request('ohos.permission.APPROXIMATELY_LOCATION');
                            setResult(request);
                            console.info('RTNPermissions===== request', request);
                        }}
                    />
                </View>

                <View style={styles.view}>
                    <Button
                        label={'查询多个权限'}
                        onPress={async () => {
                            let checkMultiple = await RTNPermissions.checkMultiple(permissionNormal);
                            setResult(JSON.stringify(checkMultiple));
                            console.info('RTNPermissions===== checkMultiple', checkMultiple);
                        }}
                    />
                    <Button
                        label={'设置多个权限'}
                        onPress={async () => {
                            let requestMultiple = await RTNPermissions.requestMultiple(permissionNormal);
                            setResult(JSON.stringify(requestMultiple));
                            console.info('RTNPermissions===== requestMultiple', requestMultiple);
                        }}
                    />
                </View>

                <View style={styles.view}>
                    <Button
                        label={'设置通知权限'}
                        onPress={async () => {
                            let requestNotifications = await RTNPermissions.requestNotifications([]);
                            setResult('granted');
                            console.info('RTNPermissions===== requestMultiple', requestNotifications);
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    textArea: {
        width: '100%',
        height: '50%',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    },
    buttonArea: {
        width: '100%',
        height: '50%',
        marginBottom: 20
    },
    view: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        margin: 5,
    },
    button: {
        backgroundColor: '#17a3f5',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        width: '40%',
        marginTop: 5
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        width: '100%',
        textAlign: 'center',
        margin: 10,
        padding: 10
    }
});
