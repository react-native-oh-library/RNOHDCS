
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Vconsole from '@kafudev/react-native-vconsole';

const SEVERITIES = ['Log', 'Info', 'Warn', 'Error', 'All'] as const;

export const ConsoleTest = () => {
  return (
    <View style={styles.container}>
      <PropsType />
      <Log />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      position: 'absolute', // 绝对定位
      bottom: 210, // 底部边界与父容器底部对齐
      width:'100%',
      height:200,
      borderWidth:1,
      borderColor: 'red',
      button:0
    },
    container1: {
      width:'100%',
      height:200,
      borderWidth:1,
      borderColor: 'Black',
      paddingVertical :20,
      button:0
    },
    box: {
      width: 60,
      height: 60,
    },
  });

  function Log() {
    return (
      <View style={styles.container1}>
        <Button title="addLog" onPress={addLog}/>
        <Button title="addInfoLog" onPress={addInfoLog} />
        <Button title="addWarnLog" onPress={addWarnLog} />
        <Button title="addErrorLog" onPress={addErrorLog} />
      </View>
    );
  }

  function addLog () {
    console.log('this is a manual log message.');
  }
  function addInfoLog () {
    console.info('this is a manual info log message.');
  }
  function addWarnLog () {
    console.warn('this is a manual info warn message.');
  }
  function addErrorLog () {
    console.error('this is a manual info error message.');
  }

  function PropsType () {
    const appInfo = {
      原生构建类型: "1",
      原生版本号: "ConfigReader.VERSION_NAME",
      原生构建时间: "ConfigReader.BUILD_TIME",
      热更新版本号: "codePushStore.info.label",
      热更新详情: "codePushStore.info.desc"
    }

    return (
      <View style={styles.container1}>
        <Vconsole appInfo= {appInfo} console = {false}/>
        {/* <Text>Result: 'testVConsole'</Text> */}
      </View>
    );

  } 