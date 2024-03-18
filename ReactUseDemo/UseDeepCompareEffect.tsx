import React from 'react';
import { Text, View } from 'react-native';
import { useCounter, useDeepCompareEffect } from 'react-use';

const UseDeepCompareEffectDemo = () => {
  const [count, { inc: inc }] = useCounter(0);
  const options = { step: 2 };

  useDeepCompareEffect(() => {
    inc(options.step)
  }, [options]);

  return (
    <View>
      <Text>初始值为0</Text>
      <Text>useDeepCompareEffect: {count}</Text>
    </View>
  );
};

export default UseDeepCompareEffectDemo;