import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestSetThirdPartyCookiesEnabled() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref setThirdPartyCookiesEnabled'}
            itShould={`webview api ref setThirdPartyCookiesEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    setThirdPartyCookiesEnabled={true}
                  />
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