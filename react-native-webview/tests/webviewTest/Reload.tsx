import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestReload() {
  const reloadRef = useRef<any>();
  const reload = () => {
    reloadRef?.current.reload();
  };

  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref reload'}
            itShould={`webview api ref reload`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} ref={reloadRef} />
                  <Button title={'reload'} onPress={reload}></Button>
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