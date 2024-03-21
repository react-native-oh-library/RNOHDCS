/**
 * title: The rest of time
 * desc: A countdown to the number of milliseconds remaining.
 *
 * title.zh-CN: 剩余时间
 * desc.zh-CN: 剩余时间毫秒数的倒计时
 */

import React from 'react';
import { View, Text } from 'react-native';
import { useCountDown } from 'ahooks';

export function CountDown3(){
  const [countdown] = useCountDown({ leftTime: 60 * 1000 });

  return (
    <View>
      <Text>{countdown}</Text>
    </View>
  );
};


