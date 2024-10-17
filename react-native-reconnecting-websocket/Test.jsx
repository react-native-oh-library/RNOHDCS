import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino'
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';

// const ws = new ReconnectingWebSocket('ws://121.196.235.57/ws');
let ws1
let ws2 = new ReconnectingWebSocket('ws://121.196.235.57/ws');
let ws3 = new ReconnectingWebSocket('ws://121.196.235.57/ws');
let ws4 = new ReconnectingWebSocket('ws://121.196.235.57/ws');
let ws5 = new ReconnectingWebSocket('ws://121.196.235.57/ws');
let ws6 = new ReconnectingWebSocket('ws://121.196.235.57/ws');
const sendMessageArr = ['橙子', '柠檬', '芒果'];
const ReconnectingWebsocketTest = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const [ws1Text, setWs1Text] = useState('');
    const [ws2Text, setWs2Text] = useState('');
    const [ws3Text, setWs3Text] = useState('');
    const [ws4Text, setWs4Text] = useState('');
    const [ws5Text, setWs5Text] = useState('');
    const [ws6Text, setWs6Text] = useState('');
    const [sendMessageIndex, setSendMessgaeIndex] = useState(0);

    useEffect(() => {
        ws6.onmessage = e => {
            setWs6Text(hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' +
                JSON.stringify(e.data) + '\n' + '\n' + ws6Text)
        }
        ws6.onconnecting = e => {
            setWs6Text(hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' +
                '正在尝试重连,当前重连次数:' + JSON.stringify(e.reconnectAttempts) + '\n' + '\n' + ws6Text)
        }
    }, [ws6Text])

    useEffect(() => {
        return () => {
            if (ws1) ws1.close()
            if (ws2) ws2.close()
            if (ws3) ws3.close()
            if (ws4) ws4.close()
            if (ws5) ws5.close()
            if (ws6) ws6.close()
        }
    }, [])

    return (
        <>
            <Tester style={{ height: '100%' }}>
                <ScrollView style={{ flex: 1 }}>
                    <TestSuite name='API'>
                        <TestCase
                            tags={['C_API']}
                            itShould="新建websocket实例, 开启WebSocket连接"
                            initialState={false}
                            arrange={({ setState }) => (
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            ws1 = new ReconnectingWebSocket('ws://121.196.235.57/ws');
                                            ws1.onopen = e => {
                                                setState(true) //成功连接才会进入该回调函数，进入该回调函数才会改变断言值
                                            }
                                            ws1.onerror = e => {
                                                setWs1Text(JSON.stringify(e))
                                                setState(false) //报错会进入该回调函数，此时断言值为false
                                            }
                                            ws1.onmessage = e => {
                                                setWs1Text(JSON.stringify(e.data))
                                            }
                                        }}
                                    >
                                        <Text style={styles.buttonText}>new ReconnectingWebSocket( )</Text>
                                    </TouchableOpacity>
                                    <Text>
                                        来自服务器的信息：
                                        <Text style={{ color: 'deeppink' }}>
                                            {ws1Text}
                                        </Text>
                                        {'\n'}
                                        (首次连接服务器时,
                                        监听message会监听到服务器发送的第一条信息,
                                        监听到即为连接成功)
                                    </Text>
                                </View>

                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould="调用实例的close方法, 关闭WebSocket连接"
                            initialState={false}
                            arrange={({ setState }) => (
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            ws2.onopen = e => {
                                                setWs2Text(JSON.stringify(e))
                                                setState(true) //由于实例创建在页面首次进入时，首次连接不会收到信息，再次连接才会监听到
                                            }
                                            ws2.onerror = e => {
                                                setWs2Text(JSON.stringify(e))
                                                setState(false) //报错会进入该回调函数，此时断言值为false
                                            }
                                            ws2.close()
                                            ws2.send('111') //send方法会自动重连服务器
                                        }}
                                    >
                                        <Text style={styles.buttonText}>close( )</Text>
                                    </TouchableOpacity>
                                    <Text>
                                        来自服务器的信息：
                                        <Text style={{ color: 'deeppink' }}>
                                            {ws2Text}
                                        </Text>
                                        {'\n'}
                                        (该用例的websocket实例在页面进入时就已创建了,
                                        而监听器在该按钮按下后才开始监听,
                                        调用close方法关闭连接后,
                                        再次打开可第一次监听到服务器的open信息,
                                        监听到即为关闭成功)
                                    </Text>
                                </View>

                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould="调用实例的send方法, 向服务器发送信息"
                            initialState={false}
                            arrange={({ setState }) => (
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            ws3.onerror = e => {
                                                setWs3Text(JSON.stringify(e))
                                                setState(false) //报错会进入该回调函数，此时断言值为false
                                            }
                                            ws3.onmessage = e => {
                                                setWs3Text(JSON.stringify(e.data))
                                                if (e.data === '收到来自客户端的信息: ' + sendMessageArr[sendMessageIndex]) {
                                                    setState(true) //比对监听到的信息，一致即断言为true
                                                }
                                            }
                                            ws3.send(sendMessageArr[sendMessageIndex]);
                                            setSendMessgaeIndex(sendMessageIndex === 2 ? 0 : sendMessageIndex + 1);
                                        }}
                                    >
                                        <Text style={styles.buttonText}>send( )</Text>
                                    </TouchableOpacity>
                                    <Text>
                                        来自服务器的信息：
                                        <Text style={{ color: 'deeppink' }}>
                                            {ws3Text}
                                        </Text>
                                        {'\n'}
                                        (连接服务器时, 使用send方法向服务器发送信息,
                                        该服务器设置了收到客户端信息时会返回一条信息,
                                        监听到该信息并比对, 一致即为发送成功)
                                    </Text>
                                </View>

                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould="调用实例的ping方法, 向服务器确保通信状态"
                            initialState={false}
                            arrange={({ setState }) => (
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            ws4.onerror = e => {
                                                setWs4Text(JSON.stringify(e))
                                                setState(false) //报错会进入该回调函数，此时断言值为false
                                            }
                                            ws4.onmessage = e => {
                                                setWs4Text('ping')
                                                setState(true) //接收到消息即断言为true
                                            }
                                            ws4.ping()
                                            ws4.send('ping')
                                        }}
                                    >
                                        <Text style={styles.buttonText}>ping( )</Text>
                                    </TouchableOpacity>
                                    <Text>
                                        来自服务器的信息：
                                        <Text style={{ color: 'deeppink' }}>
                                            {ws4Text}
                                        </Text>
                                        {'\n'}
                                        (连接服务器时, 使用ping向服务器通知,
                                        服务器若在通信状态会返回信息，
                                        监听到该信息为发送成功)
                                    </Text>
                                </View>

                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould="调用实例的reconnect方法, 重新连接服务器"
                            initialState={false}
                            arrange={({ setState }) => (
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            ws5.onopen = e => {
                                                setWs5Text(JSON.stringify(e))
                                            }
                                            ws5.onerror = e => {
                                                setWs5Text(JSON.stringify(e))
                                                setState(false) //报错会进入该回调函数，此时断言值为false
                                            }
                                            ws5.onmessage = e => {
                                                setWs5Text(JSON.stringify(e.data))
                                                if (e.data === '欢迎连接') {
                                                    setState(true) //连接服务器时(初次或重新)，服务器会发送信息'欢迎连接'，此处接收到即为重连成功
                                                }
                                            }
                                            ws5.reconnect()
                                        }}
                                    >
                                        <Text style={styles.buttonText}>reconnect( )</Text>
                                    </TouchableOpacity>
                                    <Text>
                                        来自服务器的信息：
                                        <Text style={{ color: 'deeppink' }}>
                                            {ws5Text}
                                        </Text>
                                        {'\n'}
                                        (连接服务器时(初次或重新),
                                        服务器会发送信息'欢迎连接',
                                        由于该用例的websocket实例在页面进入时就已创建了,
                                        此处接收到即为重连成功)
                                    </Text>
                                </View>

                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould="WebSocket断开后自动重连功能"
                        >
                            <View>
                                <Text>
                                    (该库对比原生WebSocket新增自动重连功能,
                                    即该客户端断网(或服务器原因断连)时,
                                    会自动重复的尝试连接服务器,
                                    直到连接成功,
                                    该用例可通过关闭设备网络测试,
                                    当重新联网时,
                                    下列日志<Text style={{ color: 'deeppink' }}>再次</Text>出现'欢迎连接'即为自动重连成功)
                                    {'\n'}
                                    日志信息:
                                    {'\n'}
                                    <Text style={{ color: 'deeppink' }}>
                                        {ws6Text}
                                    </Text>
                                </Text>
                            </View>
                        </TestCase>
                    </TestSuite>
                </ScrollView>
            </Tester>
        </>
    )
}

const styles = StyleSheet.create({
    moduleButton: {
        backgroundColor: 'deepskyblue',
        height: 34,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    }
})

export default ReconnectingWebsocketTest;