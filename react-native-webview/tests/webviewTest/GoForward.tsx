import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestGoForward() {
  const goForwardRef = useRef<any>();
  const goForward = () => {
    goForwardRef?.current.goForward();
  };
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref goForward'}
            itShould={`webview api ref goForward`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} ref={goForwardRef} />
                  <Button title={'goForward'} onPress={goForward}></Button>
                  <Button title={'goBack'} onPress={()=>{
                    goForwardRef?.current.goBack()
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