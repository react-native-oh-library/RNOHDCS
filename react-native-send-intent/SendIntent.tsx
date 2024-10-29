import React, { useState, useEffect } from 'react';
import { Text,  Button, ScrollView} from 'react-native';
import NativeSendIntent from 'react-native-send-intent'

function SendIntent() {
const [url, setUrl] = useState();
const [flag1, setFlag1] = useState<boolean>();
const [flag2, setFlag2] = useState<boolean>();
    return (
        <ScrollView>
            <>
                <Text style={{ color: "red" }}>NativeSendIntent.sendText</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.sendText({
                            title: "Please share this text",
                            text: "Lorem ipsum dolor sit amet, per error erant eu, antiopam intellegebat ne sed",
                            type: NativeSendIntent.TEXT_PLAIN
                        });
                    }}
                    title="分享文本"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.sendPhoneCall</Text>  
                <Button
                    onPress={() => {
                        NativeSendIntent.sendPhoneCall('+86157 2222 3333', true);
                    }}
                    title="打开电话"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.sendPhoneDial</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.sendPhoneDial('1008611', false);
                    }}
                    title="打开电话 无需权限"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.sendSms</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.sendSms('15722223333', '今天你吃饭了吗');
                    }}
                    title="发送短信SMS"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openCalendar</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openCalendar();
                    }}
                    title="打开日历"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.sendMail</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.sendMail('mailto:zhouchong@example.com', 'This is the subject!', 'This%20is%20the%20body!');
                    }}
                    title="发送邮件"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openChooserWithOptions</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openChooserWithOptions(
                            {
                                text: "Message Body",
                            },
                            "Share video to"
                        );
                    }}
                    title="打开文件共享对话框"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openChooserWithMultipleOptions</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openChooserWithMultipleOptions(
                            [
                                {
                                    imageUrl: 'file://media/Photo/1/IMG_1724310149_000/screenshot_20240822_150049.jpg'
                                },
                                {
                                    imageUrl: 'file://media/Photo/1/IMG_1724310149_000/screenshot_20240822_150049.jpg'
                                },
                                {
                                    videoUrl: 'file://media/Photo/1/IMG_1724310149_000/screenshot_20240822_150049.jpg'
                                },
                            ],
                            'Share video'
                        );
                    }}
                    title="打开多文件文件共享对话框"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openMaps</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openMaps('未来科技城C2');
                    }}
                    title="打开地图"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openMapsWithRoute</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openMapsWithRoute('汉口火车站', 'b');
                    }}
                    title="打开带路线的地图"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openCamera</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openCamera();
                    }}
                    title="打开相机"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openSettings</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openSettings('bluetooth_entry');
                    }}
                    title="打开设置_蓝牙"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.gotoHomeScreen</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.gotoHomeScreen();
                    }}
                    title="返回主界面"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openApp</Text>
            <><Text style={{ color: "red" }}>{JSON.stringify(flag1)}</Text></>
                <Button
                    onPress={async () => {
                        NativeSendIntent.openApp('com.huawei.hmos.email', {}).then((flag) => {
                            setFlag1(flag)
                        })

                    }}
                    title="打开APP"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openChromeIntent</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openChromeIntent('http://www.baidu.com');
                    }}
                    title="打开浏览器指定网站"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openDownloadManager</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openDownloadManager();
                    }}
                    title="打开下载管理"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openEmailApp</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openEmailApp();
                    }}
                    title="打开电子邮件"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openAllEmailApp</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openAllEmailApp();
                    }}
                    title="打开设备中所有可用的电子邮件应用"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.requestIgnoreBatteryOptimizations</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.requestIgnoreBatteryOptimizations();
                    }}
                    title="忽略电池优化"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.showIgnoreBatteryOptimizationsSettings</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.showIgnoreBatteryOptimizationsSettings();
                    }}
                    title="显示电池优化"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openAppWithUri</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openAppWithUri('|| com.huawei.hmos.calendar');
                    }}
                    title="打开应用商店"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openFileChooser</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openFileChooser({
                            fileUrl: 'file://.../test.docx',
                            subject: '',
                            type: 'application/msword'
                        }, '');
                    }}
                    title="选择打开文件选择器"
                />
            </>
            <>
            <Text style={{ color: "red" }}>NativeSendIntent.openFilePicker</Text>
                <Text>{JSON.stringify(url)}</Text>
                <Button
                    onPress={() => {
                        NativeSendIntent.openFilePicker({
                            type: '',
                            title: ''
                        }, (uris) => {
                            setUrl(uris)
                        });
                    }}
                    title="选择打开文件选择器获取文件地址"
                />
            </>
            
        </ScrollView>
    );
};
export default SendIntent;
