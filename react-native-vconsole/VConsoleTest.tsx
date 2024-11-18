
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Vconsole from '@kafudev/react-native-vconsole';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export const ConsoleTest = () => {
    return (
        <View style={styles.container}>
            <Tester>
                <TestCase itShould="点击VConsole查看日志以及网络请求状态">
                    <PropsType />
                    <Log />
                </TestCase>
            </Tester>
        </View>
    );
};

function PropsType() { 
    const appInfo = {
        原生构建类型: "1",
        原生版本号: "ConfigReader.VERSION_NAME",
        原生构建时间: "ConfigReader.BUILD_TIME",
        热更新版本号: "codePushStore.info.label",
        热更新详情: "codePushStore.info.desc"
    }
    const Panels = {
        title: 'test',
        component: <Text style={{ paddingLeft: 100 }}>test</Text>
    }

    return (
        <View style={styles.container1}>
            <Vconsole appInfo={appInfo} console={true} showBtn={true} panels={Panels}/>
        </View>
    );
}

function Log() {
    return (
        <View style={styles.container1}>
            <Button title="点击连接网络" onPress={sendRequest_} />
            <Button title="addLog" onPress={addLog} />
            <Button title="addInfoLog" onPress={addInfoLog} />
            <Button title="addWarnLog" onPress={addWarnLog} />
            <Button title="addErrorLog" onPress={addErrorLog} />
        </View>
    );
}

function addLog() {
    console.log('this is a manual log message.');
}
function addInfoLog() {
    console.info('this is a manual info log message.');
}
function addWarnLog() {
    console.warn('this is a manual info warn message.');
}
function addErrorLog() {
    console.error('this is a manual info error message.');
}

// 定义请求数据接口
interface RequestData {
    method: string;
    headers?: HeadersInit_;
    body?: string;
}

// 发起请求的函数
const sendRequest = async (url: string, options: RequestData) => {
    try {
        const response = await fetch(url, options);

        if (response.ok) {
            console.info('HTTP Request Success!');
        }

    } catch (error) {
        console.error('HTTP Request Failed!', error);
    }
};

// 使用示例
const url = 'https://www.huawei.com';
const options: RequestData = {
    method: 'HEAD',
    headers: {
        'Cache-Control': 'no-cache,no-store,must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    },
};

// 发起http请求
function sendRequest_() {
    sendRequest(url, options);
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', // 绝对定位
        bottom: 250, // 底部边界与父容器底部对齐
        width: '100%',
        height: 200,
        borderWidth: 1,
        button: 0
    },
    container1: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        paddingVertical: 20,
        button: 0
    },
    box: {
        width: 60,
        height: 60,
    },
});
