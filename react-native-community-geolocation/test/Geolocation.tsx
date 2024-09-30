import React, { useEffect, useState } from 'react';

import { View, ScrollView, Text } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { Button } from 'react-native';
import Geo from '@react-native-community/geolocation';
const Meun = [
  {
    key: 'geo_1',
    itShould: '设置位置信息请求配置',
    label: 'setRNConfiguration',
    isAssert: false,
    onPress: (setState: (arg0: boolean) => void, setValue: (arg0: string) => void) => {
      try {
        Geo.setRNConfiguration({ skipPermissionRequests: true })
        setValue('setRNConfiguration:success');
      } catch (error) {
        setValue('setRNConfiguration:fail');
      }
    },
  },
  {
    key: 'geo_2',
    itShould: '请求获取位置信息权限',
    label: 'requestAuthorization',
    isAssert: false,
    onPress: (
      setState: (arg0: boolean) => void,
      setValue: (arg0: string) => void,
    ) => {
      Geo.requestAuthorization(() => {
        setValue('requestAuthorization: success')
      }, error => {
        setValue(JSON.stringify(error))
      })

    },
  },
  {
    key: 'geo_3',
    itShould: '获取当前位置信息',
    label: 'getCurrentPosition',
    isAssert: true,
    onPress: (setState: (arg0: boolean) => void, setValue: (arg0: string) => void,) => {
      Geo.getCurrentPosition((success) => {
        setState(!!success)
        setValue(`getCurrentPosition: ${JSON.stringify(success)}`)
      }, error => {
        setState(!!error)
        setValue(JSON.stringify(error))
      })
    },
  },
  {
    key: 'geo_4',
    itShould: '设置位置信息变化监听，返回watchId',
    label: 'watchPosition',
    isAssert: true,
    onPress: (setState: (arg0: boolean) => void, setValue: (arg0: string) => void) => {
      Geo.watchPosition((success) => {
        setState(!!success)
        setValue(`watchPosition: ${JSON.stringify(success)}`)
      }, error => {
        setState(!!error)
        setValue(JSON.stringify(error))
      })
    },
  },
  {
    key: 'geo_5',
    itShould: '通过watchId清除监听',
    isAssert: false,
    label: 'clearWatch',
    onPress: (setState: (arg0: boolean) => void, setValue: (arg0: string) => void) => {
      Geo.clearWatch(0)
      setValue('clearWatch')
    },
  },

];
export const GeoLocationDemo = () => {
  const [value, setValue] = useState('');
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="@react-native-community/geolocation">
          <Text style={{ backgroundColor: '#fff' }}>{value}</Text>
          {Meun.map((item) => {
            if (item.isAssert) {
              return (
                <TestCase
                  key={item.key}
                  itShould={item.itShould}
                  tags={['C_API']}
                  initialState={false}
                  arrange={({ setState }) => {
                    return (
                      <View style={{ flex: 1 }}>
                        <Button
                          title={item.label}
                          onPress={() => {
                            item.onPress(setState, setValue);
                          }}></Button>
                      </View>
                    );
                  }}
                  assert={async ({ expect, state }) => {
                    expect(state).to.be.true;
                  }}
                />
              )
            }
            return (
              <TestCase
                key={item.key}
                itShould={item.itShould}
                tags={['C_API']}
              >
                <View style={{ flex: 1 }}>
                  <Button
                    title={item.label}
                    onPress={() => {
                      item.onPress(() => { }, setValue);
                    }}></Button>
                </View>
              </TestCase>
            )
          })}
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
