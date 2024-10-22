import React, { useRef, useState } from 'react';
import { Animated, View, Button, StyleSheet, Text, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { Mixpanel } from 'mixpanel-react-native';

const trackAutomaticEvents = false;
const token = 'c67ab2053f163f19e7420e82a8d820f4' //Use the token of your project. The token is used only for tests.
const mixpanel = new Mixpanel(token, trackAutomaticEvents);
mixpanel.init();

export default function MixpanelExample() {
  return (
    <ScrollView>
      <View>
        <Tester>
          <TestSuite name={'Mixpanel Test all'}>
            <TestCase
              itShould={'Mixpanel run by imperative setLoggingEnabled invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='true'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.setLoggingEnabled(true);
                          if (result) {
                            setTest(`调用${'mPanel setLoggingEnabled'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel setLoggingEnabled'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel setLoggingEnabled'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='false'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.setLoggingEnabled(false);
                          if (result) {
                            setTest(`调用${'mPanel setLoggingEnabled'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel setLoggingEnabled'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel setLoggingEnabled'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative setServerURL invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='Run'
                      onPress={async () => {
                        try {
                          const serverURL = "https://api.mixpanel.com"
                          let result = await mixpanel.setServerURL(serverURL);
                          if (result) {
                            setTest(`调用${'mPanel setServerURL'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel setServerURL'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel setServerURL'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative setUseIpAddressForGeolocation invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='yes'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.setUseIpAddressForGeolocation(true);
                          if (result) {
                            setTest(`调用${'mPanel setUseIpAddressForGeolocation'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel setUseIpAddressForGeolocation'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel setUseIpAddressForGeolocation'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='no'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.setUseIpAddressForGeolocation(false);
                          if (result) {
                            setTest(`调用${'mPanel setUseIpAddressForGeolocation'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel setUseIpAddressForGeolocation'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel setUseIpAddressForGeolocation'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='Test'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.track('测试setUseIpAddressForGeolocation');
                          if (result) {
                            setTest(`调用${'mPanel track'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel track'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel track'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative setFlushBatchSize invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='10'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.setFlushBatchSize(10);
                          if (result) {
                            setTest(`调用${'mPanel setFlushBatchSize'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel setFlushBatchSize'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel setFlushBatchSize'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='50'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.setFlushBatchSize(50);
                          if (result) {
                            setTest(`调用${'mPanel setFlushBatchSize'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel setFlushBatchSize'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel setFlushBatchSize'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative optInTracking and optOutTracking and hasOptedOutTracking invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='in'
                      onPress={async () => {
                        try {
                          let result = mixpanel.optInTracking();
                          if (result) {
                            setTest(`调用${'mPanel optInTracking'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel optInTracking'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel optInTracking'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='out'
                      onPress={async () => {
                        try {
                          let result = mixpanel.optOutTracking();
                          if (result) {
                            setTest(`调用${'mPanel optOutTracking'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel optOutTracking'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel optOutTracking'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='has'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.hasOptedOutTracking();
                          if (result) {
                            setTest(`调用${'mPanel hasOptedOutTracking'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel hasOptedOutTracking'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel hasOptedOutTracking'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative track invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='Run'
                      onPress={async () => {
                        try {
                          let properties = { 'school': '清华大学', 'class': 'classA' }
                          let result = await mixpanel.track('测试track', properties);
                          if (result) {
                            setTest(`调用${'mPanel track'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel track'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel track'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative identify invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='Run'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.identify('DSG');
                          if (result) {
                            setTest(`调用${'mPanel identify'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel identify'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel identify'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='Test'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.track('测试identify');
                          if (result) {
                            setTest(`调用${'mPanel track'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel track'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel track'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative alias invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='alias'
                      onPress={async () => {
                        try {
                          const trackAutomaticEvents = false;
                          const token = 'c67ab2053f163f19e7420e82a8d820f4'
                          const mixpanelTest = new Mixpanel(token, trackAutomaticEvents);
                          mixpanelTest.init();
                          mixpanelTest.track('测试alias——未设置ID模拟浏览网站');
                          mixpanelTest.track('测试alias——未设置ID模拟观看视频');
                          let distinctID = await mixpanelTest.getDistinctId();
                          let result = await mixpanelTest.alias('Alias_test', distinctID);
                          mixpanelTest.track('测试alias——设置别名后');
                          mixpanelTest.identify('Alias_test');
                          mixpanelTest.track('测试alias——设置别名identify后');
                          if (result) {
                            setTest(`调用${'mPanel alias'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel alias'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel alias'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative registerSuperProperties and registerSuperPropertiesOnce invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='set'
                      onPress={async () => {
                        try {
                          let properties = { 'SuperProperties': '超级属性' }
                          let result = await mixpanel.registerSuperProperties(properties);
                          if (result) {
                            setTest(`调用${'mPanel registerSuperProperties'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel registerSuperProperties'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel registerSuperProperties'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='serOnce'
                      onPress={async () => {
                        try {
                          let properties = { 'SuperProperties': '超级属性111', 'SuperProperties2': '超级属性111' }
                          let result = await mixpanel.registerSuperPropertiesOnce(properties);
                          if (result) {
                            setTest(`调用${'mPanel registerSuperPropertiesOnce'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel registerSuperPropertiesOnce'}结束，无返回值`);
                          }
                          setState(true)

                        } catch (err) {
                          setTest(`调用${'mPanel registerSuperPropertiesOnce'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='Test'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.track('测试SuperProperties');
                          if (result) {
                            setTest(`调用${'mPanel track'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel track'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel track'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative unregisterSuperProperty and clearSuperProperties and getSuperProperties invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='unregister'
                      onPress={async () => {
                        try {
                          let properties = 'SuperProperties';
                          let result = await mixpanel.unregisterSuperProperty(properties);
                          if (result) {
                            setTest(`调用${'mPanel unregisterSuperProperty'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel unregisterSuperProperty'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel unregisterSuperProperty'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='clear'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.clearSuperProperties();
                          if (result) {
                            setTest(`调用${'mPanel clearSuperProperties'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel clearSuperProperties'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel clearSuperProperties'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='get'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.getSuperProperties();
                          if (result) {
                            setTest(`调用${'mPanel getSuperProperties'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel getSuperProperties'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel getSuperProperties'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative timeEvent and eventElapsedTime invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='timeEvent'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.timeEvent('测试timeEvent');
                          if (result) {
                            setTest(`调用${'mPanel timeEvent'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel timeEvent'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel timeEvent'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='eventElapsedTime'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.eventElapsedTime('测试timeEvent');
                          if (result) {
                            setTest(`调用${'mPanel eventElapsedTime'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel eventElapsedTime'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel eventElapsedTime'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='Test'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.track('测试timeEvent');
                          if (result) {
                            setTest(`调用${'mPanel track'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel track'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel track'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative reset invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='Before the reset'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.track('测试reset前');
                          if (result) {
                            setTest(`调用${'mPanel track'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel track'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel track'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='reset'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.reset();
                          if (result) {
                            setTest(`调用${'mPanel reset'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel reset'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel reset'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='Test'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.track('测试reset');
                          if (result) {
                            setTest(`调用${'mPanel track'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel track'}结束，无返回值`);
                          }
                          setState(true)

                        } catch (err) {
                          setTest(`调用${'mPanel track'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative getDistinctId and getDeviceId invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='distinctId'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.getDistinctId();
                          if (result) {
                            setTest(`调用${'mPanel getDistinctId'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel getDistinctId'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel getDistinctId'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='deviceId'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.getDeviceId();
                          if (result) {
                            setTest(`调用${'mPanel getDeviceId'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel getDeviceId'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel getDeviceId'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel run by imperative flush invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='Run'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.flush();
                          if (result) {
                            setTest(`调用${'mPanel flush'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'mPanel flush'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'mPanel flush'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
          </TestSuite>
        </Tester>

        <Tester>
          <TestSuite name={'Mixpanel people Test all'}>
            <TestCase
              itShould={'Mixpanel people run by imperative set and setOnce invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='set'
                      onPress={async () => {
                        try {
                          let properties = { $name: 'Jingqi' }
                          let result = await mixpanel.getPeople().set(properties);
                          if (result) {
                            setTest(`调用${'people set'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people set'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people set'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='setOnce'
                      onPress={async () => {
                        try {
                          let properties = { $name: 'Jingqi_DSG', $age: 18 }
                          let result = await mixpanel.getPeople().setOnce(properties);
                          if (result) {
                            setTest(`调用${'people setOnce'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people setOnce'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people setOnce'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel people run by imperative increment invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='increment'
                      onPress={async () => {
                        try {
                          let properties = { 'Bonus': 10000 };
                          let result = await mixpanel.getPeople().increment(properties);
                          if (result) {
                            setTest(`调用${'people increment'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people increment'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people increment'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel people run by imperative append and union and remove and unset invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='append'
                      onPress={async () => {
                        try {
                          let properties = '王者荣耀';
                          let result = await mixpanel.getPeople().append('Game', properties);
                          if (result) {
                            setTest(`调用${'people append'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people append'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people append'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='union'
                      onPress={async () => {
                        try {
                          let properties = ['王者荣耀', '永劫无间'];
                          let result = await mixpanel.getPeople().union('Game', properties);
                          if (result) {
                            setTest(`调用${'people union'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people union'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people union'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='remove'
                      onPress={async () => {
                        try {
                          let properties = '王者荣耀';
                          let result = await mixpanel.getPeople().remove('Game', properties);
                          if (result) {
                            setTest(`调用${'people remove'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people remove'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people remove'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='unset'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.getPeople().unset('Game');
                          if (result) {
                            setTest(`调用${'people unset'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people unset'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people unset'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel people run by imperative trackCharge and clearCharges invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='trackCharge'
                      onPress={async () => {
                        try {
                          let properties = { currency: 'RMB' }
                          let result = await mixpanel.getPeople().trackCharge(999, properties);
                          if (result) {
                            setTest(`调用${'people trackCharge'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people trackCharge'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people trackCharge'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                    <Button title='clearCharges'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.getPeople().clearCharges();
                          if (result) {
                            setTest(`调用${'people clearCharges'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people clearCharges'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people clearCharges'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
            <TestCase
              itShould={'Mixpanel people run by imperative deleteUser invoke.'}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState, state }) => {
                const [resultText, setTest] = useState('');
                return (
                  <View style={styles.testCaseBlock}>
                    <Text style={styles.resultText}>{resultText}</Text>
                    <Button title='Run'
                      onPress={async () => {
                        try {
                          let result = await mixpanel.getPeople().deleteUser();
                          if (result) {
                            setTest(`调用${'people deleteUser'}结果： ${JSON.stringify(result)}`);
                          } else {
                            setTest(`调用${'people deleteUser'}结束，无返回值`);
                          }
                          setState(true)
                        } catch (err) {
                          setTest(`调用${'people deleteUser'}出错，错误信息： ${err}`);
                        }
                      }}></Button>
                  </View>
                )
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  testCaseBlock: {
    width: "100%",
    height: 250,
    justifyContent: 'space-evenly',
  },
  resultText: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
});
