import { View, Button, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState, ReactElement } from 'react';
import WebView from "react-native-webview";
import { TestCase, Tester } from '@rnoh/testerino';


const WebViewDemo1 = (): ReactElement => {
    let uri = 'https://jsonplaceholder.typicode.com/posts';
    let p = "Name1#=test2!&Password3,=test4^";
    let source = { uri: uri, method: 'POST', body: p };

  return (
        <>        
        <WebView source={source} startInLoadingState={true} style={{height: 100}}/>
        </>  
    );
};

export default function WebViewTestOnLoadEnd() {
    let uri = 'https://www.baidu.com';
    let source = { uri: uri};

    let [start, setstart] = useState<number>(0);
    let [end, setend] = useState<number>(0);
    let [progressStr, setProcess] = useState<string>("");
    return (
      <View style={{ flex:1}}>
          <Tester style={{ paddingBottom: 80 }}>
          <TestCase
              key={'webview LoadEnd after progressChange'}
              itShould={`webview LoadEnd after progressChange`}
              tags={['C_API']}
              arrange={({ setState }) => {
                const [event, setEvent] = useState({});
                return (
                  <View style={{ padding: 20, height: 500 }}>
                    <WebView
                      source={source}
                      startInLoadingState={true}
                      style={{height: 100}}
                      onLoadStart={(e) => {
                        setstart(new Date().getTime())
                        console.log('webview LoadStart:', new Date().getTime());
                        setProcess(" LoadStart" + ";")
                      }}
                      onNavigationStateChange={(e)=>{
                        console.log('webview onNavigationStateChange:', e.loading);
                      }}
                      onLoadProgress={(e) => {
                        console.log('webview Load:', new Date().getTime());
                        setProcess(progressStr + " Loading:" + (e.nativeEvent.progress * 100 + "%") + ";")
                      }}
                      
                      onLoadEnd={(e) => {
                        setProcess(progressStr + " LoadEnd" + ";")
                        let end = new Date().getTime();
                        console.log('LoadEnd:', end);
                        setend(end - start)
                      }}
                    />
                    <Text>总耗时：{end}</Text>
                    <Text>process:{progressStr}</Text>
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