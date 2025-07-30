import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestIgnoreSilentHardwareSwitch() {
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ignoreSilentHardwareSwitch'}
            itShould={`webview api ignoreSilentHardwareSwitch`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <Text> ignoreSilentHardwareSwitch=true</Text>
                  <WebView
                    source={{ uri: 'https://res.vmallres.com//uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4' }}
                    ignoreSilentHardwareSwitch={true} />
                  <Text> ignoreSilentHardwareSwitch=false</Text>
                  <WebView
                    source={{ uri: 'https://res.vmallres.com//uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4' }}
                    ignoreSilentHardwareSwitch={false} />
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