import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestDomStorageEnabled() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api domStorageEnabled'}
            itShould={`webview api domStorageEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const webView1 = useRef<any>();
              return (
                <View style={{height:500 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={webView1}
                    domStorageEnabled={true}
                  />
                  <Button title='弹窗' onPress={() => {
                    webView1?.current.injectJavaScript("localStorage.setItem('name', 'John');alert('name:=='+localStorage.getItem('name'));");
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