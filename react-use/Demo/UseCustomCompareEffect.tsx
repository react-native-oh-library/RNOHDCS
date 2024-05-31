import React from 'react';
import { Text, View } from 'react-native';
import { useCounter, useCustomCompareEffect } from 'react-use';
import isEqual from 'lodash/isEqual';

 const UseCustomCompareEffectDemo = () => {
  const [count, { inc: inc }] = useCounter(0);
  const options = { step: 2 };

  useCustomCompareEffect(() => {
    inc(options.step)
  }, [options], (prevDeps, nextDeps) => isEqual(prevDeps, nextDeps));

  return (
    <View>
      <Text>初始值为0</Text>
      <Text>useCustomCompareEffect with deep comparison: {count}</Text>
    </View>
  );
};
export default UseCustomCompareEffectDemo