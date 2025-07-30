import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestJavaScriptEnabled() {
  return (
    <View style={{ flex: 1 }}>
      <Tester style={{ paddingBottom: 80 }}>
      <TestCase
            key={'webview api javaScriptEnabled'}
            itShould={`webview api javaScriptEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const webView1 = useRef<any>();
              const webView2 = useRef<any>();
              return (
                <View style={{ height: 500 }}>
                  <WebView
                    ref={webView1}
                    source={{ uri: 'www.baidu.com' }}
                    javaScriptEnabled={false}
                  />
                  <WebView
                    ref={webView2}
                    source={{ uri: 'www.baidu.com' }}
                    javaScriptEnabled={true}
                  />
                  <Button style={{bottem:200}} title='弹窗' onPress={() => {
                    webView1.current.injectJavaScript(`
                      alert('JavaScript11111111 is enabled!');
                    `);
                    webView2.current.injectJavaScript(`
                    alert('JavaScript22222222 is enabled!');
                  `);
                  }}></Button>
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