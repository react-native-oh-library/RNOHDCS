import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Button,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import BackgroundFetch from 'react-native-background-fetch';
import {
  BackgroundFetchConfig,
  BackgroundFetchStatus,
  TaskConfig,
  NetworkType,
} from 'react-native-background-fetch/src/RNBackgroundFetch';

function generateRandomString(length: number): string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

interface Events {
  taskId: string,
  timestamp: string
}

function App() {
  const [events, setEvents] = useState<Events[]>([{
    taskId: 'test',
    timestamp: new Date().toString()
  }]);

  async function initBackgroundFetch(options: BackgroundFetchConfig) {
    // BackgroundFetch event handler.
    const onEvent = async (taskId: string) => {
      // console.log('=== [BackgroundFetch] task: ', taskId);
      // Do your background work...
      await addEvent(taskId)
      // IMPORTANT:  You must signal to the OS that your task is complete.
      BackgroundFetch.finish(taskId);
    };

    // Timeout callback is executed when your Task has exceeded its allowed running-time.
    // You must stop what you're doing immediately BackgroundFetch.finish(taskId)
    const onTimeout = async (taskId: string) => {
      // console.warn('=== [BackgroundFetch] TIMEOUT task: ', taskId);
      BackgroundFetch.finish(taskId);
    };

    // Initialize BackgroundFetch only once when component mounts.
    let status = await BackgroundFetch.configure(
      options,
      onEvent,
      onTimeout,
    );
  }

  function addEvent(taskId: string) {
    // Simulate a possibly long-running asynchronous task with a Promise.
    return new Promise((resolve, reject) => {
      const newEvents = [...events]
      newEvents.push({
        taskId,
        timestamp: new Date().toString()
      })
      setEvents([...newEvents])
      resolve(true);
    });
  }

  function scheduleTask(options: TaskConfig) {
    BackgroundFetch.scheduleTask(options);
  }

  function stop(taskId?: string) {
    BackgroundFetch.stop(taskId);
  }

  function renderElement(title: string, fn: Function) {
    return (
      <TestCase
        itShould={title}
      >
        <Button title="Press me" onPress={() => {
          fn()
        }} />
      </TestCase>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <FlatList
            data={events}
            renderItem={({item}) => (
              <Text>
                [{item.taskId}]: {item.timestamp}
              </Text>
            )}
            keyExtractor={item => generateRandomString(10)}
          />
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Tester>
            <TestSuite name="BackgroundFetch">
              {renderElement('测试 configure 接口 属性 minimumFetchInterval 20分钟后触发', () => initBackgroundFetch({minimumFetchInterval: 20}))}
              {renderElement('测试 configure 接口 属性 minimumFetchInterval 30分钟后触发', () => initBackgroundFetch({minimumFetchInterval: 30}))}
              {renderElement('测试 configure 接口 属性 requiresCharging 充电后触发', () => initBackgroundFetch({requiresCharging: true}))}
              {renderElement('测试 configure 接口 属性 requiresCharging 不充电后触发', () => initBackgroundFetch({requiresCharging: false}))}
              {renderElement('测试 configure 接口 属性 requiresBatteryNotLow 电池状态 表示这个触发条件是低电告警。', () => initBackgroundFetch({requiresBatteryNotLow: true}))}
              {renderElement('测试 configure 接口 属性 requiresBatteryNotLow 电池状态 表示这个触发条件是从低电恢复到正常电量或者低电告警。', () => initBackgroundFetch({requiresBatteryNotLow: false}))}
              {renderElement('测试 configure 接口 属性 requiredNetworkType 网络类型 表示这个触发条件是任何类型的网络连接。', () => initBackgroundFetch({requiredNetworkType: NetworkType.NETWORK_TYPE_ANY}))}
              {renderElement('测试 configure 接口 属性 requiredNetworkType 网络类型 表示这个触发条件是Mobile网络连接。', () => initBackgroundFetch({requiredNetworkType: NetworkType.NETWORK_TYPE_MOBILE}))}
              {renderElement('测试 configure 接口 属性 requiredNetworkType 网络类型 表示这个触发条件是Wifi类型的网络连接。', () => initBackgroundFetch({requiredNetworkType: NetworkType.NETWORK_TYPE_WIFI}))}
              {renderElement('测试 configure 接口 属性 requiresStorageNotLow 存储状态 表示这个触发条件是存储空间不足。', () => initBackgroundFetch({requiresStorageNotLow: true}))}
              {renderElement('测试 configure 接口 属性 requiresStorageNotLow 存储状态 表示这个触发条件是存储空间不足或者从存储空间不足恢复到正常。', () => initBackgroundFetch({requiresStorageNotLow: false}))}
              {renderElement('测试 configure 接口 属性 requiresDeviceIdle 空闲状态 需要要求设备进入空闲状态。', () => initBackgroundFetch({requiresDeviceIdle: true}))}
              {renderElement('测试 configure 接口 属性 requiresDeviceIdle 空闲状态 不需要要求设备进入空闲状态。', () => initBackgroundFetch({requiresDeviceIdle: false}))}

              {renderElement('测试 scheduleTask 接口 taskId为 com.transistorsoft.customtask delay为 20*60*1000毫秒', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000}))}
              {renderElement('测试 scheduleTask 接口 periodic: false 不重复执行', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, periodic: false}))}
              {renderElement('测试 scheduleTask 接口 periodic: true 重复执行', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, periodic: true}))}
              {renderElement('测试 scheduleTask 接口 属性 requiresCharging 充电后触发', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiresCharging: true}))}
              {renderElement('测试 scheduleTask 接口 属性 requiresCharging 不充电后触发', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiresCharging: false}))}
              {renderElement('测试 scheduleTask 接口 属性 requiresBatteryNotLow 电池状态 表示这个触发条件是低电告警。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiresBatteryNotLow: true}))}
              {renderElement('测试 scheduleTask 接口 属性 requiresBatteryNotLow 电池状态 表示这个触发条件是从低电恢复到正常电量或者低电告警。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiresBatteryNotLow: false}))}
              {renderElement('测试 scheduleTask 接口 属性 requiredNetworkType 网络类型 表示这个触发条件是任何类型的网络连接。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiredNetworkType: NetworkType.NETWORK_TYPE_ANY}))}
              {renderElement('测试 scheduleTask 接口 属性 requiredNetworkType 网络类型 表示这个触发条件是Mobile网络连接。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiredNetworkType: NetworkType.NETWORK_TYPE_MOBILE}))}
              {renderElement('测试 scheduleTask 接口 属性 requiredNetworkType 网络类型 表示这个触发条件是Wifi类型的网络连接。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiredNetworkType: NetworkType.NETWORK_TYPE_WIFI}))}
              {renderElement('测试 scheduleTask 接口 属性 requiresStorageNotLow 存储状态 表示这个触发条件是存储空间不足。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiresStorageNotLow: true}))}
              {renderElement('测试 scheduleTask 接口 属性 requiresStorageNotLow 存储状态 表示这个触发条件是存储空间不足或者从存储空间不足恢复到正常。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiresStorageNotLow: false}))}
              {renderElement('测试 scheduleTask 接口 属性 requiresDeviceIdle 空闲状态 需要要求设备进入空闲状态。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiresDeviceIdle: true}))}
              {renderElement('测试 scheduleTask 接口 属性 requiresDeviceIdle 空闲状态 不需要要求设备进入空闲状态。', () => scheduleTask({taskId: 'com.transistorsoft.customtask', delay: 20*60*1000, requiresDeviceIdle: false}))}

              {renderElement('测试 stop 接口 停止任务', () => stop())}
              {renderElement('测试 stop 接口 传参 com.transistorsoft.customtask 停止某一个任务', () => stop('com.transistorsoft.customtask'))}

              {renderElement('测试 status 接口', () => BackgroundFetch.status())}
              {renderElement('测试 status 接口 传参() => 2', () => BackgroundFetch.status(() => 2))}
            </TestSuite>
          </Tester>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    marginBottom: 60
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default App;
