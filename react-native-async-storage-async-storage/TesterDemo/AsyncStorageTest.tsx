import React, {useEffect, useState} from 'react';

import {View, ScrollView, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import { Button } from "react-native";
import AsyncStorage,{useAsyncStorage} from '@react-native-async-storage/async-storage';

const Meun = [
  {
    key: 'async_storage_1',
    itShould: 'Sets a string(hello) value for given key(test)',
    label: 'AsyncStorage_setItem',
    onPress: (setState: (arg0: boolean) => void) => {
      AsyncStorage.setItem('test', 'hello', error => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_2',
    itShould: 'Gets a string value for given key(test)',
    label: 'AsyncStorage_getItem',
    onPress: (
      setState: (arg0: boolean) => void,
    ) => {
      AsyncStorage.getItem('test', (e, r) => {
        setState(r === 'hello');
      });
    },
  },
  {
    key: 'async_storage_3',
    itShould: 'Sets a string({name: lili, age: 20}) value for given key(test_mergeItem)',
    label: 'AsyncStorage_mergeItem_before',
    onPress: (
      setState: (arg0: boolean) => void,
    ) => {
      AsyncStorage.setItem(
        'test_mergeItem',
        JSON.stringify({name: 'lili', age: 20}),
      );
    },
  },
  {
    key: 'async_storage_4',
    itShould:
      'Merges an existing value({name:lili,age:20}) stored under key(test_mergeItem), with new value({name:lili,sex:women}), assuming both values are stringified JSON',
    label: 'AsyncStorage_mergeItem',
    onPress: (setState: (arg0: boolean) => void) => {
      AsyncStorage.setItem(
        'test_mergeItem',
        JSON.stringify({name: 'lili', age: 20}),
      );
      AsyncStorage.mergeItem(
        'test_mergeItem',
        JSON.stringify({name: 'lili', sex: 'women'}),
        error => {
          setState(!error);
          AsyncStorage.getItem('test_mergeItem', (e, r) => {
            console.log(`test_mergeItem_value_is` + r)
          });
        },
      );
    },
  },
  {
    key: 'async_storage_5',
    itShould: 'Removes item for a key(test_mergeItem)',
    label: 'AsyncStorage_removeItem',
    onPress: (setState: (arg0: boolean) => void) => {
      AsyncStorage.removeItem('test_mergeItem', error => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_6',
    itShould: 'Returns all keys known to your App',
    label: 'AsyncStorage_getAllKeys',
    onPress: (setState: (arg0: boolean) => void) => {
      AsyncStorage.getAllKeys(error => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_7',
    itShould: 'Stores multiple key-value pairs in a batch',
    label: 'AsyncStorage_multiSet',
    onPress: (setState: (arg0: boolean) => void) => {
      const firstPair = ['@MyApp_user', 'value_1'];
      const secondPair = ['@MyApp_key', 'value_2'];
      AsyncStorage.multiSet([firstPair, secondPair], error => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_8',
    itShould:
      'Fetches multiple key-value pairs for given array of keys in a batch',
    label: 'AsyncStorage_multiGet',
    onPress: (
      setState: (arg0: boolean) => void,
    ) => {
      AsyncStorage.multiGet(['@MyApp_user', '@MyApp_key'], (error, r) => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_9',
    itShould: 'Stores multiple key-value pairs in a batch',
    label: 'AsyncStorage_multiMerge_before',
    onPress: (setState: (arg0: boolean) => void) => {
      const USER_1 = {
        name: 'Tom',
        age: 30,
        traits: {hair: 'brown'},
      };
      const USER_2 = {
        name: 'Sarah',
        genger: "female",
        traits: {hair: 'black'},
      };
      const multiSet = [
        ['@MyApp_USER_1', JSON.stringify(USER_1)],
        ['@MyApp_USER_2', JSON.stringify(USER_2)],
      ];
      AsyncStorage.multiSet(multiSet, error => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_10',
    itShould: 'Multiple merging of existing and new values in a batch',
    label: 'AsyncStorage_multiMerge',
    onPress: async (setState: (arg0: boolean) => void) => {
      const USER_1_DELTA = {
        age: 31,
        genger: "male",
        traits: {eyes: 'blue'},
      };

      const USER_2_DELTA = {
        age: 26,
        traits: {hair: 'green'},
      };

      const multiMerge = [
        ['@MyApp_USER_1', JSON.stringify(USER_1_DELTA)],
        ['@MyApp_USER_2', JSON.stringify(USER_2_DELTA)],
      ];
      try {
        await AsyncStorage.multiMerge(multiMerge);
        const currentlyMerged = await AsyncStorage.multiGet([
          '@MyApp_USER_1',
          '@MyApp_USER_2',
        ]);
        setState(!!currentlyMerged);
        AsyncStorage.multiGet(['@MyApp_USER_1', '@MyApp_USER_2'], (error, r) => {
          console.log(`test_multiMerge_is ${r}`)
        });
      } catch (e) {
        // error
      }
    },
  },
  {
    key: 'async_storage_11',
    itShould: 'Sets a string value for given key',
    label: 'AsyncStorage_multiRemove',
    onPress: (setState: (arg0: boolean) => void) => {
      const keys = ['@MyApp_USER_1', '@MyApp_USER_2'];
      AsyncStorage.multiRemove(keys, error => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_12',
    itShould: 'Removes whole AsyncStorage data, for all clients, libraries',
    label: 'AsyncStorage_clear',
    onPress: (setState: (arg0: boolean) => void) => {
      AsyncStorage.clear(error => {
        setState(!error);
      });
    },
  },
  {
    key: 'async_storage_13',
    itShould: 'Sets a string(hello) value for given key(test-useAsyncStorage)',
    label: 'useAsyncStorage_setItem',
    onPress: (setState: (arg0: boolean) => void) => {
      const {setItem} = useAsyncStorage('test-useAsyncStorage');
      setItem('hello', error => {
        setState(!error);
      });
    },
  },
];

export const AsyncStorageTest = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [current,setCurrent]=useState(0);

  const handDisplay = async () => {
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
  const displayGetAllKey =  () => {
    return (
      <>
        <Button title={`当前key: ${key}`} onPress={() => {}}></Button>
      </>
    );
  };
  const displayMergeItem = () => {
    return (
      <>
        <Button title={`请查看控制台，打印的test_mergeItem_value_is 值， 预期结果为“{"name":"lili","age":20,"sex":"women"}”`} onPress={() => {}}></Button>
      </>
    );
  };
  const displayMultiMerge = () => {
    return (
      <>
        <Button title={`请查看控制台，打印的test_multiMerge—_is 值， 预期结果为“ @MyApp_USER_1,{"name":"Tom","age":31,"traits":{"hair":"brown","eyes":"blue"},"genger":"male"},@MyApp_USER_2,{"name":"Sarah","genger":"female","traits":{"hair":"green"},"age":26}”`} onPress={() => {}}></Button>
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
        <>
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
                     {current===index&& (index === 5 ? displayGetAllKey() : (index === 3 ? displayMergeItem() : (index === 9 ? displayMultiMerge() : display()) ) )}
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
        <View style={{height:100}}></View>
        </>
      </ScrollView>
    </Tester>
  );
};