import { useRequest, useToggle } from 'ahooks';
import Mock from 'mockjs';
import React from 'react';
import { Button, Text, View } from 'react-native';

function getUsername() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function ReadyManualReady() {
  const [ready, { toggle }] = useToggle(false);

  const { data, loading, run }: any = useRequest(getUsername, {
    ready,
    manual: true,
  });

  return (
    <View>
      <Text>
        Ready: {JSON.stringify(ready)}
        <View style={{ marginLeft: 16 }}>
          <Button title="Toggle Ready" onPress={toggle} />
        </View>
      </Text>
      <Text>
        Username: {loading ? 'Loading' : data}
        <View style={{ marginLeft: 16 }}>
          <Button title="run" onPress={run} />
        </View>
      </Text>
    </View>
  );
};