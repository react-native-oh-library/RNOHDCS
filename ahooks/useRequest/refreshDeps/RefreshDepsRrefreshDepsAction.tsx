/**
 * title: Custom refresh
 * desc: This example shows that when the dependency array changes, it checks the parameters' validity first and then makes a new request.
 *
 * title.zh-CN: 自定义刷新行为
 * desc.zh-CN: 该示例展示了当依赖数组变化时，首先校验参数合法性，然后发起新的请求。
 */

import React, { useState } from 'react';
import Mock from 'mockjs';
import isNumber from 'lodash/isNumber';
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

export function RefreshDepsRrefreshDepsAction(){
  const [userId, setUserId] = useState<number>();
  const { data, loading, run } = useRequest((id: number) => getUsername(id), {
    refreshDeps: [userId],
    refreshDepsAction: () => {
      if (!isNumber(userId)) {
        console.log(
          `parameter "userId" expected to be a number, but got ${typeof userId}.`,
          userId,
        );
        return;
      }
      run(userId);
    },
  });

  return (
    <View>
      <Text>Username: {loading ? 'loading...' : data}</Text>
      <Button onPress={() => setUserId(Math.random())} title='Use latest id to refresh (by `refreshDeps`)'/>
      <Button onPress={() => run(Math.random())} title='Use latest id to refresh (by `run`)'/>
    </View>
  );
};
