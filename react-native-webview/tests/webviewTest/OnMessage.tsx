import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestOnMessage() {
  const webViewPostMessage = useRef<any>();
  const introduceTemplate = `<html>

  <head>
      <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <style>
          html,
          body {
              height: 100%;
              background-color: transparent
          }
  
          * {
              padding: 0;
              margin: 0
          }
  
          img {
              width: 100%;
              height: auto
          }
          #onPostMessage{
            background: red;
          }
      </style>
      
  </head>
  
  <body>
      <button style="padding-bottom: 90px" id="onPostMessage" style="backgroundColor:'red'">点击触发</button>
      发送数据{a: '123', b: '456'}
      <script>
  
          let onPostMessage = document.getElementById('onPostMessage');
          onPostMessage.onclick = function(){
              window.ReactNativeWebView.postMessage(JSON.stringify({a: '123', b: '456'}));
          }
          
      </script>
  </body>
  
  </html>
  `;
  return (
    <View style={{ flex: 1 }}>
      <Tester style={{ paddingBottom: 80 }}>
        <TestCase
          key={'webview api postMessage and onMessage'}
          itShould={`webview api postMessage and onMessage`}
          tags={['C_API']}
          initialState={false}
          arrange={({ setState }) => {

            const [event, setEvent] = useState({});
            return (
              <View style={{ padding: 20, height: 500 }}>
                <Text>{JSON.stringify(event)}</Text>
                <WebView
                  ref={webViewPostMessage}
                  domStorageEnabled={true}
                  onMessage={event => {
                    // const {data} = event.nativeEvent;
                    setEvent(event.nativeEvent.data)
                    console.log('String message from the WebView: ', event.nativeEvent.data);
                  }}
                  source={{ html: introduceTemplate }}
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