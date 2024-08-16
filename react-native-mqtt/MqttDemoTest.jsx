import React from 'react';
import { AsyncStorage, View, Button, StyleSheet, Text, TextInput } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import init from 'react_native_mqtt';


export const MqttDemoTest = () => {
    const [connectStatus, setConnectStatus] = React.useState('');
    const [client, setClient] = React.useState({ client });
    const [subscribeStatus, setSubscribeStatus] = React.useState('');
    const [onChangeTopic, setOnChangeTopic] = React.useState('testTopic');
    const [topic, setTopic] = React.useState('');
    const [arrivedMessage, setArrivedMessage] = React.useState('');
    const [onChangeMessage, setOnChangeMessage] = React.useState('');
    return (
        <Tester>
            <TestSuite name="MqttDemoTest1">
                <TestCase tags={['C_API']} itShould="连接MQTT服务器"
                    initialState={''}
                    arrange={({ setState }) =>
                        <View>
                            <View style={styles.buttonContainer}>
                                {
                                    connectStatus === 'success' ?
                                        <View>
                                            <Button
                                                title="取消连接"
                                                color="#FF0000"
                                                onPress={() => {
                                                    disconnect();
                                                    setState('success');
                                                }}
                                            />
                                        </View>
                                        :
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
                                }
                            </View>
                            <Text style={styles.text}>连接服务器状态:{connectStatus}</Text>
                        </View>
                    }
                    assert={({ expect, state }) => {
                        expect(state).to.be.eq('success');
                    }}>
                </TestCase>
            </TestSuite>
            <TestSuite name="MqttDemoTest2">
                <TestCase tags={['C_API']} itShould="订阅消息主题"
                    initialState={''}
                    arrange={({ setState }) =>
                        <View>
                            <View style={styles.buttonsContainer}>
                                <Button
                                    title={subscribeStatus === 'subscribe' ? "取消订阅" : '订阅主题topic'}
                                    color="#FF0000"
                                    disabled={connectStatus === 'success' ? false : true}
                                    onPress={() => {
                                        subscribeStatus === 'subscribe' ? unSubscribe() : subscribe();
                                        setState('success');
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
            <TestSuite name="MqttDemoTest3">
                <TestCase tags={['C_API']} itShould="发布消息"
                    initialState={''}
                    arrange={({ setState }) =>
                        <View>
                            <View style={styles.buttonsContainer}>
                                <Button
                                    title={subscribeStatus === 'subscribe' ? "输入发送的消息内容:" : "请先订阅主题topic"}
                                    color="#FF0000"
                                    onPress={() => {
                                        sendMessage();
                                        setState('success');
                                    }}
                                    disabled={(subscribeStatus === 'subscribe' && connectStatus === 'success') ? false : true}
                                />
                            </View>
                            <TextInput
                                value={onChangeMessage}
                                onChangeText={(text) => {
                                    setOnChangeMessage(text);
                                }}
                            />
                            <Text style={styles.text}>接收到消息内容:{arrivedMessage}</Text>
                        </View>
                    }
                    assert={({ expect, state }) => {
                        expect(state).to.be.eq('success');
                    }}>
                </TestCase>
            </TestSuite>
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

        //MQ服务器配置
        const options = {
            host: 'q0ee219b.ala.dedicated.huawei.emqxcloud.cn',
            port: 8083,
            path: '/mqtt',
            id: 'testId24614',
            userName: 'test1',
            password: '123456',
            keepAliveInterval: 600,
            cleanSession: true,
            clientId: 'mqttTestDemo' + Math.random().toString(16).substring(2, 8)
        };
        //此服务器存在时效性，如遇到无法使用，请在确保网络的前提下尝试以下开源服务器:
        //Host: iot.eclipse.org
        //Port: 443
        //SSL: true

        //连接成功时
        function onConnect() {
            client.subscribe('testTopic', { qos: 0 });
            setConnectStatus('success');
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
            cleanSession: options.cleanSession
        });
        setClient(client);
    }
    //断开连接
    function disconnect() {
        client.disconnect();
        setConnectStatus('disconnect');
    }
    //订阅主题
    function subscribe() {
        client.subscribe(onChangeTopic, { qos: 0 });
        setSubscribeStatus('subscribe');
        setTopic(onChangeTopic);
    }
    //取消订阅
    function unSubscribe() {
        client.unsubscribe(onChangeTopic);
        setSubscribeStatus('unsubscribe');
        setTopic('');
    }
    //消息发布
    function sendMessage() {
        var message = new Paho.MQTT.Message(onChangeMessage);
        message.destinationName = topic;
        client.send(message);
    }
};

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
