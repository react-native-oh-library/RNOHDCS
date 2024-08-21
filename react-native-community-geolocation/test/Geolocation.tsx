import React, {useEffect, useState} from 'react';

import {View, ScrollView, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {Button} from 'react-native';
import Geo from '@react-native-community/geolocation';
const Meun = [
  {
    key: 'geo_1',
    itShould: '设置位置信息请求配置',
    label: 'setRNConfiguration',
    onPress: (setState: (arg0: boolean) => void) => {
        try {
            Geo.setRNConfiguration({skipPermissionRequests:true})
            setState(true)
        } catch (error) {
            setState(false)
        }
        
        
    },
  },
  {
    key: 'geo_2',
    itShould: '请求获取位置信息权限',
    label: 'requestAuthorization',
    onPress: (
      setState: (arg0: boolean) => void,
      setValue: (arg0: string) => void,
    ) => {
        Geo.requestAuthorization(()=>{
                setState(true)
        },error=>{
            setState(false)
            setValue(JSON.stringify(error))
        })
     
    },
  },
  {
    key: 'geo_3',
    itShould: '获取当前位置信息',
    label: 'getCurrentPosition',
    onPress: (setState: (arg0: boolean) => void,setValue: (arg0: string) => void,) => {
            Geo.getCurrentPosition((success)=>{
                setState(true)
                setValue(JSON.stringify(success))
            },error=>{
                setState(false)
                setValue(JSON.stringify(error))
            })
    },
  },
  {
    key: 'geo_4',
    itShould: '设置位置信息变化监听，返回watchId',
    label: 'watchPosition',
    onPress: (setState: (arg0: boolean) => void,setValue: (arg0: string) => void) => {
     Geo.watchPosition((success)=>{
        setState(true)
        setValue(JSON.stringify(success))
    },error=>{
        setState(false)
        setValue(JSON.stringify(error))
    })
    },
  },
  {
    key: 'geo_5',
    itShould: '通过watchId清除监听',
    label: 'clearWatch',
    onPress: (setState: (arg0: boolean) => void) => {
     Geo.clearWatch(0)
     setState(true)
    },
  },
 
];
export const ProgressViewDemo = () => {
  const [value, setValue] = useState('');
  const [current,setCurrent]=useState(0)
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="@react-native-community/geolocation">
          {Meun.map((item,index) => (
            <TestCase
              key={item.key}
              itShould={item.itShould}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <View style={{flex: 1}}>
                    {current===index&&<Button
                      title={value}
                      onPress={() => {
                       
                      }}></Button>}
                    <Button
                      title={item.label}
                      onPress={() => {
                        setCurrent(index)
                        item.onPress(setState,setValue);
                      }}></Button>
                  </View>
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
          ))}
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
