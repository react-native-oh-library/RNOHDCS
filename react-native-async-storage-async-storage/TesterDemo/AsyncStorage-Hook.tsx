import React, {useEffect, useState} from 'react';

import {View, ScrollView, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import { Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
const Meun = [
  {
    key: 'async_storage_1',
    itShould: 'Sets a string(hello) value for given key(test)',
    label: 'useAsyncStorage_setItem',
    onPress: (setState: (arg0: boolean) => void) => {
      const {setItem} = useAsyncStorage('test');
      setItem('hello', error => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_2',
    itShould: 'Gets a string value for given key(test)',
    label: 'useAsyncStorage_getItem',
    onPress: (
      setState: (arg0: boolean) => void,
    ) => {
      const {getItem} = useAsyncStorage('test');
      getItem((e, r) => {
        setState(r === 'hello');
      });
    },
  },
  {
    key: 'async_storage_3',
    itShould:
      'Merges an existing value({name:lili,age:20}) stored under key(test_mergeItem), with new value({name:lili,age:21,sex:women}), assuming both values are stringified JSON',
    label: 'useAsyncStorage_mergeItem',
    onPress: (setState: (arg0: boolean) => void) => {
      const {setItem, mergeItem} = useAsyncStorage('test_mergeItem');
      setItem(JSON.stringify({name: 'lili', age: 20}));
      mergeItem(
        JSON.stringify({name: 'lili', age: 21, sex: 'women'}),
        error => {
          setState(!error);
        },
      );
    },
  },
  {
    key: 'async_storage_4',
    itShould: 'Removes item for a key(test_mergeItem)',
    label: 'useAsyncStorage_removeItem',
    onPress: (setState: (arg0: boolean) => void) => {
      const {removeItem} = useAsyncStorage('test_mergeItem');
      removeItem(error => {
        setState(!error);
      });
    },
  },
 
];
export const ProgressViewDemo = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [current,setCurrent]=useState(0)
  const handDisplay = async () => {
    setKey("")
    const r = await AsyncStorage.getAllKeys();
    setKey(r.map(item => `${item}`).join(','));
  };
  const display = () => {
    return (
      <>
        <Button title={`当前key: ${key}`} onPress={() => {}}></Button>
        <Button title={`当前value: ${value}`} onPress={() => {}}></Button>

      </>
    );
  };
  useEffect(() => {
    !key && handDisplay();
    AsyncStorage.getAllKeys(async (e, r) => {
      let list = [];
      for (const item of r) {
        const result = await AsyncStorage.getItem(item);
        list.push(result);
      }

      setValue(list.join(','));
    });
  }, [key]);
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="@react-native-async-storage/async-storage">
          {Meun.map((item,index) => (
            <TestCase
              key={item.key}
              itShould={item.itShould}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <View style={{flex: 1}}>
                    {current===index&&display()}
                    <Button
                      title={item.label}
                      onPress={() => {
                        setCurrent(index)
                        item.onPress(setState);
                        handDisplay();
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
