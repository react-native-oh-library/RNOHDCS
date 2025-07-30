import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestSource() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api incognito'}
            itShould={`webview api incognito`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView source={{ uri: 'https://www.chsi.com.cn/' }} incognito={true} />
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