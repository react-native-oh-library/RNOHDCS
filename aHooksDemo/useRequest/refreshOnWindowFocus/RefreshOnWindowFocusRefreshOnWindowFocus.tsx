import Mock from 'mockjs';
import React from 'react';
import { useRequest } from 'ahooks';
import { Text } from 'react-native';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function RefreshOnWindowFocusRefreshOnWindowFocus(){
  const { data, loading } = useRequest(getUsername, {
    refreshOnWindowFocus: true,
  });

  return <Text>Username: {loading ? 'Loading...' : data}</Text>;
};
