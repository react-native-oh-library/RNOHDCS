import React, { useCallback, useState } from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { View, Alert, Button, ScrollView, Text, StyleSheet } from 'react-native';
import sensitive from 'react-native-sensitive-info'

export function SensitiveInfo() {
  const [resTest, setResTest] = useState('');
  const [isEnrollment, setIsEnrollment] = useState(false);
  const handleSetItem = useCallback((key: string, value: string) => {

    sensitive.setItem(key, value, {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    })

  }, []);

  const handleGetItem = useCallback((key: string) => {
    sensitive.getItem(key, {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    }).then(res => {
      setResTest(res)
    });
  }, []);


  const handleDelItem = useCallback(() => {
    sensitive.deleteItem('key1', {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    });
  }, [])

  const handleGetAllItems = useCallback(() => {
    sensitive.getAllItems({
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    }).then(res => { setResTest(JSON.stringify(res)) });
  }, [])

  const handleHasEnrolledFingerprints = useCallback(() => {
    sensitive.hasEnrolledFingerprints().then(res => {
      if (res) {
        setResTest('true')
      } else {
        setResTest('false')
      }
    })
  }, [])

  const handleIsSensorAvailable = useCallback(() => {
    sensitive.isSensorAvailable().then(res => {
      if (res.result == '12500000') {
        setResTest('true')
      } else {
        setResTest('false')
      }
    });
  }, [])

  const handlecancelFingerprintAuth = useCallback(() => {
    try {
      sensitive.cancelFingerprintAuth()
    } catch {
      Alert.alert("Error")
    }
  },[]);

  const InvalidatedByBiometricEnrollment = useCallback(() => {
    sensitive.setInvalidatedByBiometricEnrollment(true);
    setIsEnrollment(!isEnrollment)
    setResTest(JSON.stringify(isEnrollment))
  },[]);

  return (
    <Tester style={{ height: '100%' }}>
      <View style={styles.content}>
        <Text style={styles.contentTest}>
          {resTest}
        </Text>
      </View>
      <ScrollView >
        <TestSuite name='SensitiveInfoDemo' >

          <TestCase
            itShould="存入键值对key:key1 value:value1"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handleSetItem('key1', 'value1')
                  setState(true)
                } catch {
                  setState(false)
                }
              }} title={'Add item using setItem'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />

          <TestCase
            itShould="存入键值对key:key2 value:value2"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handleSetItem('key2', 'value2')
                  setState(true)
                } catch {
                  setState(false)
                }


              }} title={'Add item using setItem'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />


          <TestCase
            itShould="取出键值对value1"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handleGetItem('key1')
                  setState(true)
                } catch {
                  setState(false)
                }


              }} title={'Add item using getItem'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />

          <TestCase
            itShould="取出键值对key2"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handleGetItem('key2')
                  setState(true)
                } catch {
                  setState(false)
                }


              }} title={'Add item using getItem'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />



          <TestCase
            itShould="删除'key1'"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handleDelItem()
                  setState(true)
                } catch {
                  setState(false)
                }


              }} title={'Add item using deleteItem'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />


          <TestCase
            itShould="获取全部键值对"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handleGetAllItems()
                  setState(true)
                } catch {
                  setState(false)
                }


              }} title={'Add item using handleGetAllItems'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />

          <TestCase
            itShould="判断指纹解锁是否可用"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handleHasEnrolledFingerprints()
                  setState(true)
                } catch {
                  setState(false)
                }


              }} title={'Add item using handleHasEnrolledFingerprints'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />

          <TestCase
            itShould="获取指纹解锁权限"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handleIsSensorAvailable()
                  setState(true)
                } catch {
                  setState(false)
                }


              }} title={'Add item using handleIsSensorAvailable'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />

          <TestCase
            itShould="取消指纹认证"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await handlecancelFingerprintAuth()
                  setState(true)
                } catch {
                  setState(false)
                }


              }} title={'Add item using handlecancelFingerprintAuth'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />

          <TestCase
            itShould="关闭指纹权限"
            tags={["dev"]}
            initialState={false}
            arrange={({ setState }) =>
              <Button onPress={async () => {
                try {
                  await sensitive.setInvalidatedByBiometricEnrollment(true)
                  setState(true)
                } catch {
                  setState(false)
                }
              }} title={'Add item using handlecancelFingerprintAuth'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    top: 50,
    width: '100%',
    height: 'auto',
    zIndex: 10,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  contentTest: {
    marginTop: 10,
    marginLeft: 10,
  }
});