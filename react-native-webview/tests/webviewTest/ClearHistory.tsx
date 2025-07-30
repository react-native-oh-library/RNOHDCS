import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestClearHistory() {
  const clearHistoryRef = useRef<any>();


  const clearHistory = () => {
    clearHistoryRef?.current.clearCache(true);
  };
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref clearHistory'}
            itShould={`webview api ref clearHistory`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={clearHistoryRef}
                  />
                  <Button
                    title={'clearHistory'}
                    onPress={clearHistory}></Button>
                  <Button
                    title={'goBack'}
                    onPress={() => {
                      clearHistoryRef?.current.goBack();
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