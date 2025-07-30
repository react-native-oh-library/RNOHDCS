import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestTextZoom() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api textZoom'}
            itShould={`webview api textZoom`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (

                <View style={{ padding: 20, height: 500 }}>
                  <Text>textZoom:10</Text>
                  <WebView source={{ uri: 'https://developer.huawei.com/consumer/cn/devservice/use' }} textZoom={10} />
                  <Text>textZoom:150</Text>
                  <WebView source={{ uri: 'https://developer.huawei.com/consumer/cn/devservice/use' }} textZoom={150} />
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