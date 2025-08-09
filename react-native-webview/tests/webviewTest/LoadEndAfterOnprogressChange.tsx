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
    let [loadStartStr, setLoadStart] = useState<string>("");
    let [progressStr, setProcess] = useState<string>("");
    let [loadEndStr, setLoadEnd] = useState<string>("");
    let [onNavigationStateChangeStr, setOnNavigationStateChange] = useState<string>("");
	  let [onNavigationStateChangeStrTwo, setOnNavigationStateChangeTwo] = useState<string>("");
    return (
      <View style={{ flex:1, height:"100%"}}>
          <Tester style={{ paddingBottom: 0 }}>
          <TestCase
              key={'webview LoadEnd after progressChange'}
              itShould={`webview LoadEnd after progressChange`}
              tags={['C_API']}
              arrange={({ setState }) => {
                const [event, setEvent] = useState({});
                return (
                  <View style={{ padding: 20, height: 650 }}>
                    <WebView
                      source={source}
                      startInLoadingState={true}
                      style={{height: 100}}
                      onLoadStart={(e) => {
                        setstart(new Date().getTime())
                        console.log('webview LoadStart:', new Date().getTime());
                        setLoadStart(" LoadStart" + "时间戳：" + new Date().getTime())
                      }}
                      onNavigationStateChange={(e)=>{
                        if (e.loading) {
                        console.log("NavigationStateChange :" + (e.loading) + ";")
                                    setOnNavigationStateChange((e.loading) + "时间戳：" + new Date().getTime() + ";")
                        } else {
                        console.log("NavigationStateChange :" + (e.loading) + ";")
                                    setOnNavigationStateChangeTwo((e.loading)  + "时间戳：" + new Date().getTime() + ";")
                        }                     
                      }}
                      onLoadProgress={(e) => {
                        console.log('webview Loading:', new Date().getTime());
                        setProcess(" " + (e.nativeEvent.progress * 100 + "%"))
                      }}
                      onLoadEnd={(e) => {
                        setLoadEnd(" LoadEnd" + "时间戳：" + new Date().getTime())
                        let end = new Date().getTime();
                        console.log('webview LoadEnd:', end);
                        setend(end - start)
                      }}
                    />
                    <Text>LoadStart:{loadStartStr}</Text>
                    <Text>progress:{progressStr}</Text>
                    <Text>LoadEnd:{loadEndStr}</Text>
					          <Text>onNavigationStateChange:{onNavigationStateChangeStr}</Text>
                    <Text>onNavigationStateChange:{onNavigationStateChangeStrTwo}</Text>
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