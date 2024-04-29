import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';

const App = () => {
  const [openTestResult, setOpenTestResult] = useState('');
  const [closeTestResult, setCloseTestResult] = useState('');
  const [sendTestResult, setSendTestResult] = useState('');
  const [reconnectTestResult, setReconnectTestResult] = useState('');
  const [pingTestResult, setPingTestResult] = useState('');
  const [wsInstance, setWsInstance] = useState(null);

  const testOpenWebSocket = () => {
    setOpenTestResult('Testing WebSocket Open...');

    const ws = new ReconnectingWebSocket('ws://124.222.224.186:8800', [], {
      WebSocket: WebSocket,
      connectionTimeout: 1000,
      maxRetries: 10,
      maxReconnectInterval: 5000,
      minReconnectInterval: 1000,
      debug: true,
    });

    ws.onopen = () => {
      setOpenTestResult('WebSocket Open - OK');
      ws.close();
    };

    ws.onerror = (error) => {
      setOpenTestResult(`WebSocket Open Error - ${error}`);
    };
  };

  const testCloseWebSocket = () => {
    setCloseTestResult('Testing WebSocket Close...');

    const ws = new ReconnectingWebSocket('ws://124.222.224.186:8800', [], {
      WebSocket: WebSocket,
      connectionTimeout: 1000,
      maxRetries: 10,
      maxReconnectInterval: 5000,
      minReconnectInterval: 1000,
      debug: true,
    });

    ws.onopen = () => {
      ws.close();
      setCloseTestResult('WebSocket Close - OK');
    };

    ws.onerror = (error) => {
      setCloseTestResult(`WebSocket Close Error - ${error}`);
    };
  };

  const testSendTestMessage = () => {
    setSendTestResult('Testing Send Test Message...');

    const ws = new ReconnectingWebSocket('ws://124.222.224.186:8800', [], {
      WebSocket: WebSocket,
      connectionTimeout: 10000000,
      maxRetries: 10,
      maxReconnectInterval: 5000,
      minReconnectInterval: 1000,
      debug: true,
    });

    ws.onopen = () => {
      ws.send('ok');
      setSendTestResult('Send Test Message - OK');
      ws.close();
    };

    ws.onerror = (error) => {
      setSendTestResult(`Send Test Message Error - ${error}`);
    };
  };

  const testReconnectWebSocket = () => {
    setReconnectTestResult('Testing Reconnect WebSocket...');

    const ws = new ReconnectingWebSocket('ws://124.222.224.186:8800', [], {
      WebSocket: WebSocket,
      connectionTimeout: 10000000,
      maxRetries: 10,
      maxReconnectInterval: 5000,
      minReconnectInterval: 1000,
      debug: true,
    });

    ws.onopen = () => {
      setReconnectTestResult('WebSocket Reconnect - OK');
      ws.close();
    };

    ws.onerror = (error) => {
      setReconnectTestResult(`WebSocket Reconnect Error - ${error}`);
    };

    ws.onclose = (event) => {
      console.log('WebSocket connection closed with code:', event.code);
      console.log('WebSocket connection closed with reason:', event.reason);
    };

    ws.reconnect();

    // 在2秒后关闭连接并清除状态
    setTimeout(() => {
      ws.close();
      setReconnectTestResult('');
    }, 2000);
  };

  const testPingWebSocket = () => {
    setPingTestResult('Testing Ping WebSocket...');

    const ws = new ReconnectingWebSocket('ws://124.222.224.186:8800', [], {
      WebSocket: WebSocket,
      connectionTimeout: 1000,
      maxRetries: 10,
      maxReconnectInterval: 5000,
      minReconnectInterval: 1000,
      debug: true,
    });

    ws.onopen = () => {
      ws.ping();
      setPingTestResult('Ping Test Message - OK');
      ws.close();
    };

    ws.onerror = (error) => {
      setPingTestResult(`Ping Test Message Error - ${error}`);
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>WebSocket Open Test:</Text>
        <Button title="Test Open WebSocket" onPress={testOpenWebSocket} />
        <Text>{openTestResult}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.box}>
        <Text>WebSocket Close Test:</Text>
        <Button title="Test Close WebSocket" onPress={testCloseWebSocket} />
        <Text>{closeTestResult}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.box}>
        <Text>Send Test Message:</Text>
        <Button title="Test Send Message" onPress={testSendTestMessage} />
        <Text>{sendTestResult}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.box}>
        <Text>Reconnect WebSocket Test:</Text>
        <Button title="Test Reconnect WebSocket" onPress={testReconnectWebSocket} />
        <Text>{reconnectTestResult}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.box}>
        <Text>Ping WebSocket Test:</Text>
        <Button title="Test Ping WebSocket" onPress={testPingWebSocket} />
        <Text>{pingTestResult}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
});

export default App;
