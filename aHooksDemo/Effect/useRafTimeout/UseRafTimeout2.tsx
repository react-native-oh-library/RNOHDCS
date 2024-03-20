/**
 * title: Advanced usage
 * desc: Modify the delay to realize the timer timeout change and pause.
 *
 * title.zh-CN: 进阶使用
 * desc.zh-CN: 动态修改 delay 以实现定时器间隔变化与暂停。
 */

import React, { useState } from 'react';
import { useRafTimeout } from 'ahooks';
import { Button, Text, View } from 'react-native';

export function UseRafTimeout2() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState<number | undefined>(1000);

  const clear = useRafTimeout(() => {
    setCount(count + 1);
  }, delay);

  return (
    <View>
      <Text> count: {count} </Text>
      <Text style={{ marginTop: 16 }}> Delay: {delay} </Text>
      <Button onPress={() => setDelay((t) => (!!t ? t + 1000 : 1000))} title=' Delay + 1000' />
      <Button
        title='reset Delay'
        onPress={() => {
          setDelay(1000);
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
