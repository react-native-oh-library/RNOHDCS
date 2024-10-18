import React from 'react';
import { AsyncStorage, View, Button, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import init from 'react_native_mqtt';

//MQ服务器配置
const options = {
  host: 'iot-06z00dxfjl06yks.mqtt.iothub.aliyuncs.com',
  port: 443,
  path: '/mqtt',
  id: 'testId24614',
  userName: 'test2&k1qxygZSLnc',
  password: '574daed6bfc57d6a79aeb309ebefc48a6cca50ce14e618d584a148845cdaa2ba',
  keepAliveInterval: 180,
  cleanSession: true,
  clientId: 'k1qxygZSLnc.test2|securemode=2,signmethod=hmacsha256,timestamp=1726284781106|'
};

//此服务器存在时效性，如遇到无法使用，请在确保网络的前提下尝试以下开源服务器:
//Host: iot.eclipse.org
//Port: 443
//SSL: true

export const MqttDemoTest = () => {
  const [connectStatus, setConnectStatus] = React.useState('');
  const [client, setClient] = React.useState({ client });
  const [subscribeStatus, setSubscribeStatus] = React.useState('');
  const [onChangeTopic, setOnChangeTopic] = React.useState('/k1qxygZSLnc/test2/user/testTopic');
  const [topic, setTopic] = React.useState('');
  const [sendMessageStatus, setSendMessageStatus] = React.useState('');
  const [arrivedMessage, setArrivedMessage] = React.useState('');
  const [onChangeMessage, setOnChangeMessage] = React.useState('');
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="连接MQTT服务器">
          <TestCase tags={['C_API']} itShould="连接MQTT服务器"
            initialState={''}
            arrange={({ setState }) =>
              <View>
                <View style={styles.buttonContainer}>
                  <View>
                    <Button
                      title="点击连接"
                      color="#FF0000"
                      onPress={() => {
                        initMQTT();
                        setState('success');
                      }}
                    />
                  </View>
                </View>
                <Text style={styles.text}>连接服务器状态:{connectStatus}</Text>
                <Text style={styles.text}>连接参数</Text>
                <Text style={styles.text}>host:{options.host}</Text>
                <Text style={styles.text}>port:{options.port};</Text>
                <Text style={styles.text}>path:{options.path};</Text>
                <Text style={styles.text}>userName:{options.userName};</Text>
                <Text style={styles.text}>password:{options.password};</Text>
                <Text style={styles.text}>keepAliveInterval:{options.keepAliveInterval};</Text>
                <Text style={styles.text}>cleanSession:{options.cleanSession};</Text>
                <Text style={styles.text}>clientId:{options.clientId};</Text>
                <Text style={styles.text}>useSSL:{options.useSSL};</Text>
              </View>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq('success');
            }}>
          </TestCase>
        </TestSuite>
        <TestSuite name="取消连接MQTT服务器">
          <TestCase tags={['C_API']} itShould="取消连接MQTT服务器"
            initialState={''}
            arrange={({ setState }) =>
              <View>
                <View style={styles.buttonContainer}>
                  <View>
                    <Button
                      title="取消连接"
                      color="#FF0000"
                      disabled={connectStatus === 'success' ? false : true}
                      onPress={() => {
                        var isDisconnect = disconnect();
                        setState(isDisconnect);
                      }}
                    />
                  </View>
                </View>
                <Text style={styles.text}>连接服务器状态:{connectStatus}</Text>
              </View>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq('success');
            }}>
          </TestCase>
        </TestSuite>
        <TestSuite name="订阅主题topic">
          <TestCase tags={['C_API']} itShould="订阅主题topic"
            initialState={''}
            arrange={({ setState }) =>
              <View>
                <View style={styles.buttonsContainer}>
                  <Button
                    title="订阅主题topic"
                    color="#FF0000"
                    disabled={connectStatus === 'success' ? false : true}
                    onPress={() => {
                      var isSubscribe = subscribe();
                      setState(isSubscribe);
                    }}
                  />
                </View>
                <TextInput
                  value={onChangeTopic}
                  onChangeText={(text) => {
                    setOnChangeTopic(text);
                  }}
                />
                <Text style={styles.text}>订阅主题状态:{subscribeStatus}, topic is :{onChangeTopic}</Text>
                <Text style={styles.text}>qos is : 1</Text>
              </View>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq('success');
            }}>
          </TestCase>
        </TestSuite>
        <TestSuite name="取消订阅topic">
          <TestCase tags={['C_API']} itShould="取消订阅topic"
            initialState={''}
            arrange={({ setState }) =>
              <View>
                <View style={styles.buttonsContainer}>
                  <Button
                    title="取消订阅topic"
                    color="#FF0000"
                    disabled={subscribeStatus === 'subscribe' ? false : true}
                    onPress={() => {
                      var isUnSubscribe = unSubscribe()
                      setState(isUnSubscribe);
                    }}
                  />
                </View>
                <TextInput
                  value={onChangeTopic}
                  onChangeText={(text) => {
                    setOnChangeTopic(text);
                  }}
                />
                <Text style={styles.text}>订阅主题状态:{subscribeStatus}, topic is :{onChangeTopic}</Text>
              </View>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq('success');
            }}>
          </TestCase>
        </TestSuite>
        <TestSuite name="发布消息">
          <TestCase tags={['C_API']} itShould="发布消息"
            initialState={''}
            arrange={({ setState }) =>
              <View>
                <View style={styles.buttonsContainer}>
                  <Button
                    title="输入发送的消息内容:"
                    color="#FF0000"
                    onPress={() => {
                      var isSendMsg = sendMessage();
                      setState(isSendMsg);
                    }}
                  />
                </View>
                <TextInput
                  value={onChangeMessage}
                  onChangeText={(text) => {
                    setOnChangeMessage(text);
                  }}
                />
                <Text style={styles.text}>发布消息状态:{sendMessageStatus}</Text>
              </View>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq('success');
            }}>
          </TestCase>
        </TestSuite>
        <TestCase itShould="接收消息">
          <View style={styles.buttonsContainer}>
            <Text style={styles.text}>接收到消息内容:{arrivedMessage}</Text>
          </View>
        </TestCase>
        <TestSuite name="连接成功回调">
          <TestCase tags={['C_API']} itShould="连接成功回调"
            initialState={''}
            arrange={({ setState }) =>
              <View>
                <View style={styles.buttonsContainer}>
                  <Button
                    title="连接成功回调"
                    color="#FF0000"
                    onPress={() => {
                      var isConnect = initMQTT();
                      setState(isConnect);
                    }}
                  />
                </View>
                <Text style={styles.text}>连接服务器状态:{connectStatus}</Text>
              </View>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq('success');
            }}>
          </TestCase>
        </TestSuite>
        <TestSuite name="连接失败回调">
          <TestCase tags={['C_API']} itShould="连接失败回调"
            initialState={''}
            arrange={({ setState }) =>
              <View>
                <View style={styles.buttonsContainer}>
                  <Button
                    title="连接失败回调"
                    color="#FF0000"
                    onPress={() => {
                      var isConnect = initFaile();
                      setState(isConnect);
                    }}
                  />
                </View>
                <Text style={styles.text}>连接服务器状态:{connectStatus}</Text>
              </View>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq('failed');
            }}>
          </TestCase>
        </TestSuite>
        <TestSuite name="连接丢失">
          <TestCase tags={['C_API']} itShould="连接丢失"
            initialState={''}
            arrange={({ setState }) =>
              <View>
                <View style={styles.buttonsContainer}>
                  <Button
                    title="点击连接服务器后断网"
                    color="#FF0000"
                    onPress={() => {
                      initMQTT();
                      setState(connectStatus);
                    }}
                  />
                </View>
                <Text style={styles.text}>连接服务器状态:{connectStatus}</Text>
              </View>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq('success');
            }}>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );

  //连接MQTT服务器
  function initMQTT() {
    //初始化參數
    init({
      size: 10000,
      storageBackend: AsyncStorage,
      defaultExpires: 1000 * 3600 * 24,
      enableCache: true,
      reconnect: true,
      sync: {}
    });

    //连接成功时
    function onConnect() {
      client.subscribe('/k1qxygZSLnc/test2/user/testTopic', { qos: 1 });
      setConnectStatus('success');
      return "success";
    }
    //连接失败时
    function onFailure(err) {
      if (err.errorCode !== 0) {
        setConnectStatus('failed');
      }
    }
    //连接断开时
    function onConnectionLost(err) {
      if (err.errorCode !== 0) {
        setConnectStatus('failed');
      }
    }
    //接收消息
    function onMessageArrived(message) {
      setArrivedMessage(message.payloadString);
    }
    //连接服务器
    const client = new Paho.MQTT.Client(options.host, options.port, options.path, options.clientId);
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
      onSuccess: onConnect,
      onFailure: onFailure,
      useSSL: false,
      userName: options.userName,
      password: options.password,
      keepAliveInterval: options.keepAliveInterval,
      cleanSession: options.cleanSession,
      mqttVersion: 3
    });
    setClient(client);
  }
  //断开连接
  function disconnect() {
    try {
      client.disconnect();
      setConnectStatus('disconnect');
      return "success";
    } catch (error) {
      return "failed";
    }
  }
  //订阅主题
  function subscribe() {
    try {
      client.subscribe(onChangeTopic, { qos: 1 });
      setSubscribeStatus('subscribe');
      setTopic(onChangeTopic);
      return "success";
    } catch (error) {
      return "failed";
    }
  }
  //取消订阅
  function unSubscribe() {
    try {
      client.unsubscribe(onChangeTopic);
      setSubscribeStatus('unsubscribe');
      setTopic('');
      return "success";
    } catch (error) {
      return "failed";
    }
  }
  //消息发布
  function sendMessage() {
    try {
      var message = new Paho.MQTT.Message(onChangeMessage);
      message.destinationName = topic;
      client.send(message);
      setSendMessageStatus('success')
      return "success";
    } catch (error) {
      return "failed";
    }
  }
}

//连接MQTT服务器失败
function initFaile() {
  //初始化參數
  init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {}
  });

  //MQ服务器配置
  const options = {
    host: 'iot-06z00dxfjl06yks.mqtt.iothub.aliyuncs.com',
    port: 8888,
    path: '/mqtt',
    id: 'testId24614',
    userName: 'test2&k1qxygZSLnc',
    password: '574daed6bfc57d6a79aeb309ebefc48a6cca50ce14e618d584a148845cdaa2ba',
    keepAliveInterval: 180,
    cleanSession: true,
    clientId: 'k1qxygZSLnc.test2|securemode=2,signmethod=hmacsha256,timestamp=1726284781106|'
  };

  //连接失败时
  function onFailure(err) {
    if (err.errorCode !== 0) {
      setConnectStatus('failed');
      return "failed";
    }
    return "success"
  }

  //连接服务器
  const client = new Paho.MQTT.Client(options.host, options.port, options.path, options.clientId);
  client.connect({
    onFailure: onFailure,
    useSSL: false,
    userName: options.userName,
    password: options.password,
    keepAliveInterval: options.keepAliveInterval,
    cleanSession: options.cleanSession
  });
  setClient(client);


  setTimeout(delayedFunction, 2000);

  var isConnect;

  function delayedFunction() {
    isConnect = onFailure();
  }

  return isConnect === null ? undefined : isConnect;

}
;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    height: 20,
    width: 500,
    fontSize: 14,
    marginBottom: 10,
  },
  buttonNextFocusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  buttonNextFocus: {
    width: 50,
    height: 20,
  },
});
