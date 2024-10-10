/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 * Copyright (c) Huawei Technologies Co., Ltd. 2023-2023. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useState } from 'react';
import {  StyleSheet, Text, Button ,ScrollView,View,Platform,StatusBarStyle} from 'react-native';
import InAppBrowser from '@react-native-oh-tpl/react-native-inappbrowser-reborn/src/NativeInappbrowser'
import {tryDeepLinking,openLink, options} from './utils'
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
interface BrowserClass {
  url: string,
  statusBarStyle:options
}
const url = 'https://reactnative.dev'
const tryDeepUrl = 'https://proyecto26.github.io/react-native-inappbrowser/?redirect_url="my-demo"'
const redirectUrl = 'my-demo'

export default function BrowserDemo() {
  const [text, setText] = useState('');

  const onTryDeepLinking = async() => {
    let result = await tryDeepLinking();
    setText(JSON.stringify(result))
    return result;
  }

  const onOpenLink = async(value:BrowserClass) => {
    let result = await openLink(value.url, value.statusBarStyle);
    setText(JSON.stringify(result))
    return result;
  }

  const onIsAvailable = async () => {
    let isAvailable = await InAppBrowser.isAvailable();
    return isAvailable
  }

  const close = (value:BrowserClass) => {
    return new Promise((resolve)=> {
      openLink(value.url, value.statusBarStyle).then(data => {
        resolve(data)
      });
     let count = 0;  
     while (count < 10000) {  
         console.log(`计数: ${count}`);  
         count++;  
     }
      InAppBrowser.close();
    })
  }

  const closeAuth = () => {
    return new Promise((resolve)=> {
     InAppBrowser.openAuth(tryDeepUrl,redirectUrl,{}).then(data=>{
      resolve(data);
     })
     let count = 0;  
     while (count < 10000) {  
         console.log(`计数: ${count}`);  
         count++;  
     }
     InAppBrowser.closeAuth();
    })
  }

  const warmup = async() => {
   let isWarmup  = await InAppBrowser.warmup();
   return isWarmup;
  }

  const mayLaunchUrl = () => {
    InAppBrowser.mayLaunchUrl(url,[]);
  }

  const BrowserOpenLinkProps = [
    {
      key:"function:onOpenLink('https://reactnative.dev')",
      value: {
          url: 'https://reactnative.dev',
          statusBarStyle: {}
      }
    },
    {
      key:"function:onOpenLink('https://reactnative.dev') style:dismissButtonStyle:done",
      value: {
          url: 'https://reactnative.dev',
          statusBarStyle: {
            dismissButtonStyle: 'done',
          }
      }
    },
    {
      key:"function:onOpenLink('https://reactnative.dev') style:dismissButtonStyle:cancel",
      value: {
          url: 'https://reactnative.dev',
          statusBarStyle: {
            dismissButtonStyle: 'cancel',
          }
      }
    },
    {
      key:"function:onOpenLink('https://reactnative.dev') style:dismissButtonStyle:close",
      value: {
          url: 'https://reactnative.dev',
          statusBarStyle: {
            dismissButtonStyle: 'close',
          }
      }
    },
    {
      key:"function:onOpenLink('https://reactnative.dev') style:preferredBarTintColor :#453AA4",
      value: {
          url: 'https://reactnative.dev',
          statusBarStyle: {
            preferredBarTintColor: '#453AA4',
          }
      }
    },
    {
      key:"function:onOpenLink('https://reactnative.dev') style:preferredBarTintColor :white",
      value: {
          url: 'https://reactnative.dev',
          statusBarStyle: {
            preferredBarTintColor: 'white',
          }
      }
    },
    {
      key:"function:onOpenLink('https://reactnative.dev') style:preferredControlTintColor :#000000",
      value: {
          url: 'https://reactnative.dev',
          statusBarStyle: {
            preferredControlTintColor : '#000000',
          }
      }
    },
    {
      key:"function:onOpenLink('https://reactnative.dev') style:preferredControlTintColor :blue",
      value: {
          url: 'https://reactnative.dev',
          statusBarStyle: {
            preferredControlTintColor : 'blue',
          }
      }
    },
  ]


  return (
    <ScrollView>
      <Tester>
      <TestSuite name='BrowserDemo'>
         <TestCase itShould="Return picture information">
          <View>
            <Text style={styles.baseText}>
              返回结果:
            </Text>
            <Text style={styles.inputArea}>
              {text}
            </Text>
          </View>
        </TestCase>
        {BrowserOpenLinkProps.map((item) => {
            return (
              <TestCase  itShould={item.key}  key={item.key} initialState={null as any} arrange={({ setState }) => (
                <Button title='运行' color='#841584' onPress={async () => {
                 let resultType =  await onOpenLink(item.value);
                 setState(resultType)
               }}>
               </Button>
              )} 
              assert={({ expect, state }) => {
                expect(state).to.have.property('type')
              }}
              />
            );
        })}
        <TestCase itShould="function:openAuth('https://proyecto26.github.io/react-native-inappbrowser/?redirect_url='my-demo','my-demo')" initialState={null as any} arrange={({ setState }) => (
            <Button title='运行' color='#841584' onPress={async () => {
              let resultType =  await onTryDeepLinking();
              setState(resultType)
          }}>
          </Button>
        )}
        assert={({ expect, state }) => {
          expect(state).to.have.property('type')
        }}
        />

        <TestCase itShould="function:isAvailable()(该接口判断是否支持默认华为浏览器)"  initialState={false} arrange={({ setState }) => (
           <Button title='运行' color='#841584' onPress={async () => {
            let isAvailable = await onIsAvailable()
            console.info('isAvailable ===' + isAvailable)
            setState(isAvailable);
         }}>
         </Button>
        )}
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}
        />

        <TestCase itShould="function:close()(该接口调式会先启动浏览器，然后关闭)" initialState={null as any} arrange={({ setState }) => (
              <Button title='运行' color='#841584' onPress={async() => {
                let resultType = await close({
                  url: 'https://reactnative.dev',
                  statusBarStyle: {}
                });
                setText(JSON.stringify(resultType))
                setState(resultType)
            }}>
            </Button>
        )}
        assert={({ expect, state }) => {
          expect(state).to.have.property('type')
        }}
        />

        <TestCase itShould="function:closeAuth()(该接口调式会先启动浏览器，然后关闭)" initialState={null as any} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async() => {
            let resultType = await closeAuth();
            setText(JSON.stringify(resultType))
            setState(resultType)
        }}>
        </Button>
        )}
        assert={({ expect, state }) => {
          expect(state).to.have.property('type')
        }}
        />

        <TestCase itShould="function:warmup()(预热浏览器进程)" initialState={false} arrange={({ setState }) => (
          <Button title='运行' color='#841584' onPress={async() => {
            let isWarmup = await warmup();
            console.info('isWarmup ====' + isWarmup);
            setState(isWarmup);
          }}></Button>
        )}
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true)
        }}
        />

        <TestCase itShould="function:mayLaunchUrl('https://reactnative.dev',[])(预加载某个网址，提高加载速度,不存在返回值)" initialState={false} arrange={({ setState }) => (
           <Button title='运行' color='#841584' onPress={() => {
            mayLaunchUrl();
            setState(true);
          }}>
          </Button>
        )}
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true)
        }}
        />
      </TestSuite>
     </Tester>
  </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F1F3F5',
  }, 
  baseText: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:16
  },

  inputArea: {
    width:'100%',
    height:100,
    borderColor:'#000000',
    marginTop:8,
    justifyContent:'center',
    alignItems:'center',
  },
});