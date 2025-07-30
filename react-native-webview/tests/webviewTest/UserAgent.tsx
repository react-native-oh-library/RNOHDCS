import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestUserAgent() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api userAgent'}
            itShould={`webview api userAgent`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const webView = useRef<any>();
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={webView}
                    userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
                  />
                  <Button title='获取userAgent' onPress={() => {
                    webView?.current.injectJavaScript(`var userAgent = navigator.userAgent;
                     console.log("获取userAgent",userAgent);`);
                  }}></Button>
                  <Text>'在控制台搜索:获取userAgent'</Text>

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