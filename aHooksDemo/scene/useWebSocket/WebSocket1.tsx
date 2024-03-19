import React, { useRef, useMemo } from 'react';
import { useWebSocket } from 'ahooks';
import { Button } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';

enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

export function WebSocket1(){
  const messageHistory = useRef<any[]>([]);

  const { readyState, sendMessage, latestMessage, disconnect, connect } = useWebSocket(
    'wss://ws.postman-echo.com/raw',
  );

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(latestMessage),
    [latestMessage],
  );

  return (
    <View>
      {/* send message */}
      <View style={{ marginRight: 8 }}>
      <Button
      title=' ✉️ send'
        onPress={() => sendMessage && sendMessage(`${Date.now()}`)}
        disabled={readyState !== ReadyState.Open}
      />
      </View>
      {/* disconnect */}
      <View style={{ marginRight: 8 }}>
      <Button
      title='❌ disconnect'
        onPress={() => disconnect && disconnect()}
        disabled={readyState !== ReadyState.Open}
      />
      </View>
      {/* connect */}
      <Button title={readyState === ReadyState.Connecting ? 'connecting' : '📞 connect'} onPress={() => connect && connect()} disabled={readyState === ReadyState.Open}/>
      <View style={{ marginTop: 8 }}>readyState: {readyState}</View>
      <View style={{ marginTop: 8 }}>
        <Text>received message: </Text>
        {messageHistory.current.map((message, index) => (
          <Text key={index}>
            {message?.data}
          </Text>
        ))}
      </View>
    </View>
  );
};