
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Vconsole from '@kafudev/react-native-vconsole';

export const ConsoleDemo = () => {
    return (
        <View style={styles.container}>
            <PropsType />
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

    return (
        <View style={styles.container1}>
            <Vconsole appInfo={appInfo} console={true} showBtn={true} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute', // 绝对定位
        bottom: 180, // 底部边界与父容器底部对齐
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