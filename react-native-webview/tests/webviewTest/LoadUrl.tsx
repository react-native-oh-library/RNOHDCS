import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestLoadUrl() {
  const loadUrlRef = useRef<any>();
  const loadUrl = () => {
    loadUrlRef.current.loadUrl('https://gitee.com/');
  };
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref loadUrl'}
            itShould={`webview api ref loadUrl`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} ref={loadUrlRef} />
                  <Button title={'loadUrl'} onPress={loadUrl}></Button>
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