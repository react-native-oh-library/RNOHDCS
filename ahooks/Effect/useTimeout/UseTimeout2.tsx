/**
 * title: Advanced usage
 * desc: Modify the delay to realize the timer timeout change and pause.
 *
 * title.zh-CN: 进阶使用
 * desc.zh-CN: 动态修改 delay 以实现定时器间隔变化与暂停。
 */

import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { useTimeout } from 'ahooks';

export function UseTimeout2() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState<number | undefined>(1000);

  const clear = useTimeout(() => {
    setCount(count + 1);
  }, delay);

  return (
    <View>
      <Text> count: {count} </Text>
      <Text style={{ marginTop: 16 }}> Delay: {delay} </Text>
      <Button title=' Delay + 1000' onPress={() => setDelay((t) => (!!t ? t + 1000 : 1000))} />
      <Button
        title='reset Delay'
        onPress={() => {
          setDelay(1000);
        }}
      />
      <Button title='clear' onPress={clear} />
    </View>
  );
};
