import React, { useCallback, useState } from 'react';
import { TestSuite, Tester, Filter } from '@rnoh/testerino';
import { View, Alert, Button, ColorValue, } from 'react-native';
import { TestCase } from '../components';
import sensitive from '@react-native-oh-tpl/react-native-sensitive-info'
import { boolean } from 'yargs';

export function SensitiveInfo() {
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
      Alert.alert(res)
    });
  }, []);

  const handleHasItem = useCallback(() => {
    sensitive.hasItem('key1', {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
      kSecAccessControl: 'kSecAccessControlBiometryAny', // Enabling FaceID
      touchID: true,
      showModal: true,
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
    }).then(res=>{Alert.alert(JSON.stringify(res))});
  }, [])

  const handleHasEnrolledFingerprints = useCallback(() => {
    sensitive.hasEnrolledFingerprints();
  }, [])

  const handleIsSensorAvailable = useCallback(() => {
    sensitive.isSensorAvailable().then(res => {
      Alert.alert(JSON.stringify(res))
    });
  }, [])

  const handlecancelFingerprintAuth = (() => {
    try {

      sensitive.cancelFingerprintAuth()
    } catch {
      Alert.alert("Error")
    }
  });

  const setInvalidatedByBiometricEnrollment = (() => {
    try {

      sensitive.setInvalidatedByBiometricEnrollment(false)
    } catch {
      Alert.alert("Error")
    }
  });


  return (
    <Tester>
      <TestSuite name='SensitiveInfoDemo'>
        <TestCase.Manual
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

        <TestCase.Manual
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


        <TestCase.Manual
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

        <TestCase.Manual
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

        <TestCase.Manual
          itShould="判断键值对是否存在"
          tags={["dev"]}
          initialState={false}
          arrange={({ setState }) =>
            <Button onPress={async () => {
              try {
                await handleHasItem()
                setState(true)
              } catch {
                setState(false)
              }


            }} title={'Add item using handleSetItemUsingTouchIDOnPress'}></Button>
          }
          assert={({ expect, state }) => {
            expect(state).to.be.eq(true);
          }}
        />


        <TestCase.Manual
          itShould="删除键值对"
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


        <TestCase.Manual
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

        <TestCase.Manual
          itShould="判断是否已注册指纹"
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

        <TestCase.Manual
          itShould="判断指纹解锁是否可用"
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

        <TestCase.Manual
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


        <TestCase.Manual
          itShould="设置无效的通过生物识别注册"
          tags={["dev"]}
          initialState={false}
          arrange={({ setState }) =>
            <Button onPress={async () => {
              try {
                await setInvalidatedByBiometricEnrollment()
                setState(true)
              } catch {
                setState(false)
              }


            }} title={'Add item using setInvalidatedByBiometricEnrollment'}></Button>
          }
          assert={({ expect, state }) => {
            expect(state).to.be.eq(true);
          }}
        />
      </TestSuite>
    </Tester>
  );
}