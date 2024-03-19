/**
 * title: Refresh username
 *
 * title.zh-CN: 刷新用户名称
 */

import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React, { useEffect } from 'react';
import { Text, Button, View } from 'react-native';


function getUsername(id: number): Promise<string> {
  console.log('use-request-refresh-id', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function BasicRefresh() {
  const { data, loading, run, refresh } = useRequest((id: number) => getUsername(id), {
    manual: true,
  });

  useEffect(() => {
    run(1);
  }, []);

  if (loading) {
    return <View>loading...</View>;
  }
  return (
    <View>
      <Text>Username: {data}</Text>
      <Button onPress={refresh} title="Refresh" />
    </View>
  );
};
