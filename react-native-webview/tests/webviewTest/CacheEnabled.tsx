import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTestClearCacheRef() {
  const clearCacheRef = useRef<any>();


  const clearCache = () => {
    clearCacheRef?.current.clearCache(true);
  };
  return (
    <View style={{ flex:1}}>
        <Tester style={{ paddingBottom: 80 }}>
       
        <TestCase
            key={'webview api ref clearCache cacheEnabled'}
            itShould={`webview api ref clearCache value LOAD_CACHE_ELSE_NETWORK  cacheEnabled value true`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              let [start, setstart] = useState<number>(0)
              let [end, setend] = useState<number>(0)
              let [cacheEnabled, setcacheEnabled] = useState<boolean>(true)
              return (
                <View style={{ padding: 20, height: 500 }}>
                  <WebView
                    source={{ uri: 'https://wallpapersite.com/' }}
                    ref={clearCacheRef}
                    cacheMode="LOAD_CACHE_ELSE_NETWORK"
                    cacheEnabled={true}
                    onLoadStart={() => {
                      setstart(new Date().getTime())
                    }}
                    onLoadEnd={(e) => {
                      console.log('总耗时', new Date().getTime() - start);
                      setend(new Date().getTime() - start)
                    }}
                  />
                  <Text>总耗时：{end}</Text>
                  <Button title={'clearCache'} onPress={clearCache}></Button>
                  <Button title={'reload'} onPress={() => {
                    setcacheEnabled(cacheEnabled)
                    clearCacheRef?.current.reload();
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