import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestOnError() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref onError'}
            itShould={`webview api ref onError`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView
                    source={{ uri: 'xxxx.baidu.com' }}
                    onError={e => {
                      setEvent(e.nativeEvent);
                      console.log('errorrr,e', e.nativeEvent);

                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
        </Tester>
    </View>
  );
}