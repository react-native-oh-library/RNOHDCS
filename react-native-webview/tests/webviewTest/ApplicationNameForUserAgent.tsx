import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestApplicationNameForUserAgent() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref applicationNameForUserAgent'}
            itShould={`webview api ref applicationNameForUserAgent`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              const webView = useRef<any>();
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={webView}
                    applicationNameForUserAgent={'xxxxx'}
                  />
                  <Button title='获取userAgent' onPress={() => {
                    webView?.current.injectJavaScript(`var userAgent = navigator.userAgent;
                     console.log("获取applicationNameForUserAgent",userAgent);`);
                  }}></Button>
                  <Text>'在控制台搜索:获取applicationNameForUserAgent'</Text>
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