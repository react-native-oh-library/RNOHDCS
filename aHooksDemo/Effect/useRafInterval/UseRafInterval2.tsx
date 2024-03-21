/**
 * title: Advanced usage
 * desc: Modify the delay to realize the timer interval change and pause.
 *
 * title.zh-CN: 进阶使用
 * desc.zh-CN: 动态修改 delay 以实现定时器间隔变化与暂停。
 */

import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { useRafInterval } from 'ahooks';

export function UseRafInterval2() {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState(1000);

  const clear = useRafInterval(() => {
    setCount(count + 1);
  }, interval);

  return (
    <View>
      <Text> count: {count} </Text>
      <Text style={{ marginTop: 16 }}> interval: {interval} </Text>
      <Button
        title='interval + 1000'
        onPress={() => setInterval((t) => (!!t ? t + 1000 : 1000))}
      />
      <Button
        title='reset interval'
        onPress={() => {
          setInterval(1000);
        }}
      />
      <Button
        title='clear'
        onPress={() => {
          clear();
        }}
      />
    </View>
  );
};
