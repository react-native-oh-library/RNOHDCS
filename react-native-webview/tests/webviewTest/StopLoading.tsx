import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestinjectStopLoading() {
  const stopLoadingRef = useRef<any>();
  const stopLoading = () => {
    stopLoadingRef?.current.stopLoading();
  };
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
        <TestCase
            key={'webview api ref stopLoading'}
            itShould={`webview api ref stopLoading`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [flg, setFlg] = useState(false)
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={stopLoadingRef}
                    onLoadProgress={() => {
                      if (flg) {
                        stopLoading()
                      }
                    }}
                  />
                  <Button title='切换' onPress={() => {
                    setFlg(!flg)
                    stopLoadingRef?.current.reload()
                  }}></Button>
                  <Text>{flg ? '停止' : '放行'}</Text>
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