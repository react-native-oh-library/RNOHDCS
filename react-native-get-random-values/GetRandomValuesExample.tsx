import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import 'react-native-get-random-values';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const GetRandomValuesExample = () => {
  const [randomValue, setRandomValue] = useState<any>([]);
  return (
    <Tester style={{flex: 1, backgroundColor: '#fff'}}>
      <TestSuite name="getRandomValues">
        <TestCase
          itShould="getRandomValues"
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
                    setRandomValue(array);
                    setState(array);
                  }}
                  title="点击获取随机数 "
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
      </TestSuite>
    </Tester>
  );
};
