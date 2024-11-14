import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Text } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React from 'react';
import { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

export default function WebViewOnShouldStartLoadWithRequestTest() {
  return (
    <View style={{ paddingBottom: 100, paddingTop: 0 }}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Tester>
          <TestCase
            key={'webview api ref onShouldStartLoadWithRequest'}
            itShould={`webview api ref onShouldStartLoadWithRequest`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <View><Text>无onShouldStartLoadWithRequest属性</Text></View>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                  />
                  <View><Text>onShouldStartLoadWithRequest返回true</Text></View>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onShouldStartLoadWithRequest={(e: ShouldStartLoadRequest) => {
                      console.log('===', JSON.stringify(e));
                      return true;
                    }}
                  />
                  <View><Text>onShouldStartLoadWithRequest返回false</Text></View>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onShouldStartLoadWithRequest={(e: ShouldStartLoadRequest) => {
                      return false;
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  );
}