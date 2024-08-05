import React, {useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import 'react-native-get-random-values';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const GetRandomValuesExample = () => {
  const [randomValue, setRandomValue] = useState<any>([]);
  const [randomValue_Uint8Array, setRandomValue_Uint8Array] = useState<any>([]);
  const [randomValue_Int16Array, setRandomValue_Int16Array] = useState<any>([]);
  const [randomValue_Uint16Array, setRandomValue_Uint16Array] = useState<any>(
    [],
  );
  const [randomValue_Int32Array, setRandomValue_Int32Array] = useState<any>([]);
  const [randomValue_Uint32Array, setRandomValue_Uint32Array] = useState<any>(
    [],
  );
  const [randomValue_Uint8ClampedArray, setRandomValue_Uint8ClampedArray] =
    useState<any>([]);
  return (
    <ScrollView>
      <Tester style={{flex: 1}}>
        <TestSuite name="getRandomValues">
          <TestCase
            itShould="getRandomValues(Int8Array)"
            tags={['C_API']}
            initialState={undefined as any}
            arrange={({setState}) => {
              return (
                <View>
                  <Button
                    onPress={() => {
                      const getRandomValues = global?.crypto?.getRandomValues(
                        new Int8Array(4),
                      );
                      const array = Object.values(getRandomValues);
                      setRandomValue(array);
                      setState(array);
                    }}
                    title="点击获取随机数(Int8Array)"
                  />
                  {randomValue?.map((item: any, index: number) => {
                    return <Text key={index}>{item}</Text>;
                  })}
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.eq(randomValue);
            }}
          />
          <TestCase
            itShould="getRandomValues(Uint8Array)"
            tags={['C_API']}
            initialState={undefined as any}
            arrange={({setState}) => {
              return (
                <View>
                  <Button
                    onPress={() => {
                      const getRandomValues = global?.crypto?.getRandomValues(
                        new Uint8Array(4),
                      );
                      const array = Object.values(getRandomValues);
                      setRandomValue_Uint8Array(array);
                      setState(array);
                    }}
                    title="点击获取随机数(Uint8Array)"
                  />
                  {randomValue_Uint8Array?.map((item: any, index: number) => {
                    return <Text key={index}>{item}</Text>;
                  })}
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.eq(randomValue_Uint8Array);
            }}
          />
          <TestCase
            itShould="getRandomValues(Int16Array)"
            tags={['C_API']}
            initialState={undefined as any}
            arrange={({setState}) => {
              return (
                <View>
                  <Button
                    onPress={() => {
                      const getRandomValues = global?.crypto?.getRandomValues(
                        new Int16Array(4),
                      );
                      const array = Object.values(getRandomValues);
                      setRandomValue_Int16Array(array);
                      setState(array);
                    }}
                    title="点击获取随机数(Int16Array)"
                  />
                  {randomValue_Int16Array?.map((item: any, index: number) => {
                    return <Text key={index}>{item}</Text>;
                  })}
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.eq(randomValue_Int16Array);
            }}
          />
          <TestCase
            itShould="getRandomValues(Uint16Array)"
            tags={['C_API']}
            initialState={undefined as any}
            arrange={({setState}) => {
              return (
                <View>
                  <Button
                    onPress={() => {
                      const getRandomValues = global?.crypto?.getRandomValues(
                        new Uint16Array(4),
                      );
                      const array = Object.values(getRandomValues);
                      setRandomValue_Uint16Array(array);
                      setState(array);
                    }}
                    title="点击获取随机数(Uint16Array)"
                  />
                  {randomValue_Uint16Array?.map((item: any, index: number) => {
                    return <Text key={index}>{item}</Text>;
                  })}
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.eq(randomValue_Uint16Array);
            }}
          />
          <TestCase
            itShould="getRandomValues(Int32Array)"
            tags={['C_API']}
            initialState={undefined as any}
            arrange={({setState}) => {
              return (
                <View>
                  <Button
                    onPress={() => {
                      const getRandomValues = global?.crypto?.getRandomValues(
                        new Int32Array(4),
                      );
                      const array = Object.values(getRandomValues);
                      setRandomValue_Int32Array(array);
                      setState(array);
                    }}
                    title="点击获取随机数(Int32Array)"
                  />
                  {randomValue_Int32Array?.map((item: any, index: number) => {
                    return <Text key={index}>{item}</Text>;
                  })}
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.eq(randomValue_Int32Array);
            }}
          />
        </TestSuite>
        <TestCase
          itShould="getRandomValues(Uint32Array)"
          tags={['C_API']}
          initialState={undefined as any}
          arrange={({setState}) => {
            return (
              <View>
                <Button
                  onPress={() => {
                    const getRandomValues = global?.crypto?.getRandomValues(
                      new Uint32Array(4),
                    );
                    const array = Object.values(getRandomValues);
                    setRandomValue_Uint32Array(array);
                    setState(array);
                  }}
                  title="点击获取随机数(Uint32Array)"
                />
                {randomValue_Uint32Array?.map((item: any, index: number) => {
                  return <Text key={index}>{item}</Text>;
                })}
              </View>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.eq(randomValue_Uint32Array);
          }}
        />
        <TestCase
          itShould="getRandomValues(Uint8ClampedArray)"
          tags={['C_API']}
          initialState={undefined as any}
          arrange={({setState}) => {
            return (
              <View>
                <Button
                  onPress={() => {
                    const getRandomValues = global?.crypto?.getRandomValues(
                      new Uint8ClampedArray(4),
                    );
                    const array = Object.values(getRandomValues);
                    setRandomValue_Uint8ClampedArray(array);
                    setState(array);
                  }}
                  title="点击获取随机数(Uint8ClampedArray)"
                />
                {randomValue_Uint8ClampedArray?.map(
                  (item: any, index: number) => {
                    return <Text key={index}>{item}</Text>;
                  },
                )}
              </View>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.eq(randomValue_Uint8ClampedArray);
          }}
        />
      </Tester>
    </ScrollView>
  );
};

export default GetRandomValuesExample;
