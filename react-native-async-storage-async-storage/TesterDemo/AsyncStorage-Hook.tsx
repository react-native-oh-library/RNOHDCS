import React, {useEffect, useState} from 'react';

import {View, ScrollView, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {Button} from '../components';
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
      setGetValue: (arg0: string) => void,
    ) => {
      const {getItem} = useAsyncStorage('test');
      getItem((e, r) => {
        setGetValue(`key:test,value:${r}`);
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
  const [getValue, setGetValue] = useState('');
  const handDisplay = async () => {
    const r = await AsyncStorage.getAllKeys();
    setKey(r.map(item => `${item}`).join(','));
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
          <View style={{flexDirection: 'column'}}>
            <View style={{flex: 1, marginTop: 20, backgroundColor: 'yellow'}}>
              <Text>
                test_mergeItem_InitValue:
                {JSON.stringify({name: 'lili', age: 20})}
              </Text>
              <Text>
                test_mergeItem_MergeValue:
                {JSON.stringify({name: 'lili', age: 21, sex: 'women'})}
              </Text>
            </View>
            <View style={{flex: 1, marginTop: 20, backgroundColor: 'yellow'}}>
              <Text>
                multiMerge_InitValue:
                {JSON.stringify([
                  [
                    '@MyApp_USER_1',
                    JSON.stringify({
                      name: 'Tom',
                      age: 30,
                      traits: {hair: 'brown'},
                    }),
                  ],
                  [
                    '@MyApp_USER_2',
                    JSON.stringify({
                      name: 'Sarah',
                      age: 25,
                      traits: {hair: 'black'},
                    }),
                  ],
                ])}
              </Text>
              <Text>
                multiMerge_MergeValue:
                {JSON.stringify([
                  [
                    '@MyApp_USER_1',
                    JSON.stringify({
                      age: 31,
                      traits: {eyes: 'blue'},
                    }),
                  ],
                  [
                    '@MyApp_USER_2',
                    JSON.stringify({
                      age: 26,
                      traits: {hair: 'green'},
                    }),
                  ],
                ])}
              </Text>
            </View>
            <View style={{flex: 1, marginTop: 20, backgroundColor: 'blue'}}>
              <Text>getValueByKeys:{getValue}</Text>
            </View>
            <View style={{flex: 1, marginTop: 20, backgroundColor: 'green'}}>
              <Text>AllKey:{key}</Text>
            </View>
            <View style={{flex: 1, marginTop: 20, backgroundColor: 'green'}}>
              <Text>AllValue:{value}</Text>
            </View>
          </View>
          {Meun.map(item => (
            <TestCase
              key={item.key}
              itShould={item.itShould}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <View style={{flex: 1}}>
                    <Button
                      label={item.label}
                      onPress={() => {
                        item.onPress(setState, setGetValue);
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
