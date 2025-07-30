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

export default function WebViewTestOnBody() {
    let uri = 'https://jsonplaceholder.typicode.com/posts';
    let p = "Name1#=test2!&Password3,=test4^";
    let source = { uri: uri, method: 'POST', body: p, html: '' };

    let [start, setstart] = useState<number>(0);
    let [end, setend] = useState<number>(0);
    return (
      <View style={{ flex:1}}>
          <Tester style={{ paddingBottom: 80 }}>
          <TestCase
              key={'webview api body'}
              itShould={`webview api body`}
              tags={['C_API']}
              arrange={({ setState }) => {
                const [event, setEvent] = useState({});
                return (
                  <View style={{ padding: 20, height: 500 }}>
                    <WebView
                      source={source}
                      startInLoadingState={true}
                      style={{height: 100}}
                      onLoadStart={() => {
                        setstart(new Date().getTime())
                      }}
                      onLoadEnd={(e) => {
                        console.log('总耗时', new Date().getTime() - start);
                        setend(new Date().getTime() - start)
                      }}
                    />
                    <Text>总耗时：{end}</Text>
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