import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRequest, useToggle } from 'ahooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function ReadyReady() {
  const [ready, { toggle }] = useToggle(false);

  const { data, loading } = useRequest(getUsername, {
    ready,
  });

  return (
    <View style={styles.container}>
      <Text>
        Ready: {JSON.stringify(ready)}
        {/* 在 React Native 中，Button 组件不能像 web 那样包含子元素，因此我们将其放在 Text 组件旁边 */}
      </Text>
      <View style={styles.buttonContainer}>
        <Button onPress={toggle} title="Toggle Ready" />
      </View>
      <Text>Username:{loading ? 'Loading...' : data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
