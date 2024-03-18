/**
 * title: Basic usage
 * desc: Return network status
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 返回网络状态信息
 */

import React from 'react';
import { useNetwork } from 'ahooks';
import { Text } from 'react-native';
import { View } from 'react-native';

export function Network1(){
  const networkState = useNetwork();

  return (
    <View>
      <View>Network information: </View>
      <Text>{JSON.stringify(networkState, null, 2)}</Text>
    </View>
  );
};