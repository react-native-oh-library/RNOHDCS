import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestinjectJavaScriptRef() {
  const injectJavaScriptRef = useRef<any>();
  const runJS = () => {
    injectJavaScriptRef?.current.injectJavaScript('window.location.reload()');
  };
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref injectJavaScriptRef'}
            itShould={`webview api ref injectJavaScriptRef`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={injectJavaScriptRef}
                  />
                  <Button
                    title={'injectJavaScriptRef'}
                    onPress={runJS}></Button>
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