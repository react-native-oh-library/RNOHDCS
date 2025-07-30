import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestRequestFocusRef() {
  const requestFocusRef = useRef<any>();
  const requestFocus = () => {
    requestFocusRef?.current.requestFocus();
  };

  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref requestFocus'}
            itShould={`webview api ref requestFocus`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
              <ScrollView style={{ padding: 20, height: 400 }}>
                <View style={{ padding: 20, height: 350 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={requestFocusRef}
                  />
                  <Button
                    title={'requestFocus'}
                    onPress={requestFocus}></Button>
                  <TextInput style={{ backgroundColor: 'green' }} placeholder='点我聚焦，输入框聚焦' />
                </View>
              </ScrollView>
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