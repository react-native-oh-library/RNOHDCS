import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React from 'react';
import { Text } from 'react-native';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function IndexDefault(){
  const { data, error, loading } = useRequest(getUsername);

  if (error) {
    return <Text>failed to load</Text>;
  }
  if (loading) {
    return <Text>loading...</Text>;
  }
  return <Text>Username: {data}</Text>;
};


