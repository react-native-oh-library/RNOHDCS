import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestOnScroll() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref onScroll'}
            itShould={`webview api ref onScroll`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{  height: 500 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onScroll={e => {
                      setEvent(e.nativeEvent);
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