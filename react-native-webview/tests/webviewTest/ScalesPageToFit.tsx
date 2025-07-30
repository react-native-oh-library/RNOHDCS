import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestScalesPageToFit() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api scalesPageToFit'}
            itShould={`webview api scalesPageToFit`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const webViewRef = useRef<any>(null);

              const onZoomOutPress = () => {
                webViewRef.current.injectJavaScript(`
                  var meta = document.createElement('meta');
                  meta.setAttribute('name', 'viewport');
                  meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0');
                  document.getElementsByTagName('head')[0].appendChild(meta);
                `);
              };

              const onZoomInPress = () => {
                webViewRef.current.injectJavaScript(`
                  var meta = document.createElement('meta');
                  meta.setAttribute('name', 'viewport');
                  meta.setAttribute('content', 'width=device-width, initial-scale=2, maximum-scale=2, user-scalable=0');
                  document.getElementsByTagName('head')[0].appendChild(meta);
                `);
              };
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <Button title="Zoom Out" onPress={onZoomOutPress} />
                    <Button title="Zoom In" onPress={onZoomInPress} />
                  </View>
                  <WebView
                    ref={webViewRef}
                    source={{ uri: 'https://www.baidu.com' }}
                    scalesPageToFit={true}
                    style={{ flex: 1 }}
                  />
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