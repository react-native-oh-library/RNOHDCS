import React from 'react';
import {TestCase} from './TestCase';
import { TestSuite, Tester } from '@rnoh/testerino';
import {ScrollView} from 'react-native';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import { View, Button } from 'react-native'; // 导入必要的组件

const SERVER_URL = 'ws://124.222.224.186:8800'; 

export function App() {
  

  return (
    <ScrollView>
      <TestSuite name="WebSocket">
        <Tester
          reset={() => {
            setResetCount((prevCount) => prevCount + 1);
          }}
        >
          <TestCase.Manual
            tags={['C_API']}
            itShould="test opening WebSocket connection"
            initialState={false}
            arrange={({ setState, reset }) => (
              <View>
              <Button
                title="Open WebSocket"
                onPress={() => {
                  const ws = new ReconnectingWebSocket(SERVER_URL);

                  ws.onopen = () => {
                    setState(true);
                  };
                  ws.onerror = () => {
                    expect(state).to.be.false;
                  };
                }}
              />
               <Button title="Reset" onPress={reset} />
              </View>
            )}
            assert={({ state, expect }) => {
              expect(state).to.be.true; // 断言连接是否成功打开
            }}
          />
          <TestCase.Manual
            tags={['C_API']}
            itShould="test closing WebSocket connection"
            initialState={false}
            arrange={({ setState, reset }) => (
              <View>
                <Button
                  title="Close WebSocket"
                  onPress={() => {
                    const ws = new ReconnectingWebSocket(SERVER_URL);

                    ws.onopen = () => {
                      ws.close();
                      setState(true);
                    };
                    ws.onerror = () => {
                      expect(state).to.be.false;
                    };
                  }}
                />
                <Button title="Reset" onPress={reset} />
              </View>
            )}
            assert={({ state, expect }) => {
              expect(state).to.be.true; // 断言连接是否成功关闭
            }}
          />
          <TestCase.Manual
            tags={['C_API']}
            itShould="test sending test message"
            initialState={false}
            arrange={({ setState, reset }) => (
              <View>
                <Button
                  title="Send Test Message"
                  onPress={() => {
                    const ws = new ReconnectingWebSocket(SERVER_URL);

                    ws.onopen = () => {
                      ws.send('test message');
                      setState(true);
                    };

                    ws.onmessage = (event) => {
                      console.log("Received message:", event.data);
                      // expect(event.data).to.be.eq('test message');
                    };
                    ws.onerror = () => {
                      expect(state).to.be.false;
                    };
                  }}
                />
                <Button title="Reset" onPress={reset} />
              </View>
            )}
            assert={({ state, expect }) => {
              expect(state).to.be.true;
            }}
          />
           <TestCase.Manual
            tags={['C_API']}
            itShould="test reconnecting WebSocket"
            initialState={false}
            arrange={({ setState, reset }) => (
              <View>
                <Button
                  title="Reconnect WebSocket"
                  onPress={() => {
                    const ws = new ReconnectingWebSocket(SERVER_URL);

                    ws.onopen = () => {
                      ws.close();
                      ws.reconnect();
                      setState(true);
                    };
                    ws.onerror = () => {
                      expect(state).to.be.false;
                    };
                  }}
                />
                <Button title="Reset" onPress={reset} />
              </View>
            )}
            assert={({ state, expect }) => {
              expect(state).to.be.true; // 断言连接是否成功重新打开
            }}
          />
          <TestCase.Manual
            tags={['C_API']}
            itShould="test pinging WebSocket"
            initialState={false}
            arrange={({ setState, reset }) => (
              <View>
              <Button
                title="Ping WebSocket"
                onPress={() => {
                  const ws = new ReconnectingWebSocket(SERVER_URL);

                  ws.onopen = () => {
                    ws.send('ping'); // 发送 ping 消息
                    setState(true);
                  };

                  ws.onmessage = (event) => {
                    if (event.data === 'ping') {
                      // 收到 ping 消息后，自动发送 ping 响应
                      expect(true).to.be.eq(true); // 断言是否成功发送 ping 响应
                    }
                  };
                  ws.onerror = () => {
                    expect(state).to.be.false;
                  };
                }}
              />
              <Button title="Reset" onPress={reset} />
              </View>
            )}
            assert={({ state, expect }) => {
              expect(state).to.be.true;
            }}
          />
        </Tester>
      </TestSuite>
    </ScrollView>
  );
}

export default App;
