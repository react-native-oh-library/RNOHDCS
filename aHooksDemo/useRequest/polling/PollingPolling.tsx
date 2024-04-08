import { useRequest } from 'ahooks';
import React from 'react';
import Mock from 'mockjs';

import { Button,View,Text } from 'react-native';

function getUsername() {
  console.log('polling getUsername');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function PollingPolling(){
  const { data, loading, run, cancel }:any = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
  });

  return (
    <View>
      <Text>Username: {loading ? 'Loading' : data}</Text>
      <Button title="start" onPress={run} />
      <View style={{ marginLeft: 16 }}>
      <Button title="stop" onPress={cancel} />
      </View>
    </View>
  );
};