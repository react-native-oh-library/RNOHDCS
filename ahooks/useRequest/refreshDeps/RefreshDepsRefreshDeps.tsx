/**
 * title: Repeat last request
 * desc: When the dependency array changes, use the previous parameters to make the request again.
 *
 * title.zh-CN: 重复上一次请求
 * desc.zh-CN: 依赖数组变化时，使用上一次的参数重新发起请求。
 */

import React, { useState } from 'react';
import Mock from 'mockjs';
import { useRequest } from 'ahooks';
import { Button,View,Text } from 'react-native';

function getUsername(id: number): Promise<string> {
  console.log('getUsername id:', id);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function RefreshDepsRefreshDeps(){
  const [userId, setUserId] = useState<number>();
  const { data, loading, run } = useRequest((id: number) => getUsername(id), {
    refreshDeps: [userId],
  });

  return (
    <View>
      <Text>Username: {loading ? 'loading...' : data}</Text>
      <Button onPress={() => setUserId(Math.random())} title='Use previous id to refresh '/>
      <Button onPress={() => run(Math.random())} title='Use latest id to refresh '/>
    </View>
  );
};
