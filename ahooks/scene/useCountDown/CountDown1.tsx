/**
 * title: Basic Usage
 * desc: Basic countdown management.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 基础的倒计时管理。
 */

import React from 'react';
import { useCountDown } from 'ahooks';
import { Text } from 'react-native';

export function CountDown1(){
  const [countdown, formattedRes] = useCountDown({
    targetDate: `${new Date().getFullYear()}-12-31 23:59:59`,
  });
  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  return (
    <Text>
      There are {days} days {hours} hours {minutes} minutes {seconds} seconds {milliseconds}{' '}
      milliseconds until {new Date().getFullYear()}-12-31 23:59:59
    </Text>
  );
};