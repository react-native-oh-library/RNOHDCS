/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Alert,
  Text,
  Button,
  View
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {
  setJSExceptionHandler,
  getJSExceptionHandler,
  setNativeExceptionHandler
} from 'react-native-exception-handler';

let jsErr = '';
let nativeErr = '';
let nativeErrCount = 0;

export function ExceptionHandlerTest() {
  return (
    <ScrollView>
      <Tester>
        <TestCase
          itShould='不使用setJSExceptionHandler：not use setJSExceptionHandler error'
          initialState={{}}
          tags={['C_API']}
          arrange={({ setState, state }) => {
            const notUseSetJSExceptionHandler = () => {
              throw new Error('not use setJSExceptionHandler error');
            }
            return (
              <View style={{ height: 100, padding: 20 }}>
                <Button onPress={() => {
                  notUseSetJSExceptionHandler()
                }}
                  title='notUseSetJSExceptionHandler' />
              </View>
            )
          }}
        />
        <TestCase
          itShould='使用setJSExceptionHandler'
          initialState={{}}
          tags={['C_API']}
          arrange={({ setState, state }) => {
            const [getRequestResult, setGetRequestResult] = useState('');
            const testJSExceptionHandler = () => {
              const errorHandler = (e: any, isFatal: boolean) => {
                if (isFatal) {
                  jsErr = String(e);
                  setGetRequestResult('js 异常 是 e')
                  if (e instanceof String) {
                    setState({
                      errMsg: String(e),
                      method: '2'
                    })
                  }
                  if (e instanceof Error) {
                    setState({
                      errMsg: String(e),
                      method: '1'
                    })
                  }
                  Alert.alert(
                    'setJSExceptionHandler',
                    `Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}`,
                    [
                      {
                        text: 'Close',
                        onPress: () => {
                          console.log("onPress");
                        },
                      },
                    ]
                  );
                } else {
                  Alert.alert(
                    'getJSExceptionHandler',
                    `Error: ${e}`,
                    [
                      {
                        text: 'Close',
                        onPress: () => {
                          console.log("onPress");
                        },
                      },
                    ]
                  );
                }
              };
              setJSExceptionHandler(errorHandler, true);
              throw new Error('js-error');
            }
            return (
              <View style={{ height: 100, padding: 20 }}>
                <Button onPress={() => {
                  testJSExceptionHandler();
                }}
                  title='testJSExceptionHandler' />
              </View>
            )
          }}
          assert={async ({ expect, state }) => {
            expect(jsErr).to.be.eq('Error: js-error');
          }}
        />
        <TestCase
          itShould='getJSExceptionHandler 获取报错信息getJSExceptionHandler-error'
          initialState={{}}
          tags={['C_API']}
          arrange={({ setState, state }) => {
            return (
              <View style={{ height: 100, padding: 20 }}>
                <Button onPress={() => {
                  getJSExceptionHandler()(new Error('getJSExceptionHandler-error'), false)
                }}
                  title='getJSExceptionHandler' />
              </View>
            )
          }}
        />
        <TestCase
          itShould='setNativeExceptionHandler'
          initialState={{}}
          tags={['C_API']}
          arrange={({ setState, state }) => {
            return (
              <View style={{ height: 100, padding: 20 }}>
                <Button onPress={() => {
                  setNativeExceptionHandler((e) => {
                    nativeErr = e;
                  })
                }}
                  title='setNativeExceptionHandler ' />
              </View>
            )
          }}
        />
      </Tester>
    </ScrollView>)
}