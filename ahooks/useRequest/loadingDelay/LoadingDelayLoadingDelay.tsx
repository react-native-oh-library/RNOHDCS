import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 200);
  });
}

export function LoadingDelayLoadingDelay() {
  const action = useRequest(getUsername);

  const withLoadingDelayAction = useRequest(getUsername, {
    loadingDelay: 300,
  });

  const trigger = () => {
    action.run();
    withLoadingDelayAction.run();
  };

  return (
    <View style={styles.container}>
      <Button onPress={trigger} title="run" />
      <View style={styles.usernameContainer}>
        <Text>Username: {action.loading ? 'Loading...' : action.data}</Text>
      </View>
      <View style={styles.usernameContainer}>
        <Text>Username: {withLoadingDelayAction.loading ? 'Loading...' : withLoadingDelayAction.data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameContainer: {
    marginVertical: 24,
    width: 300,
    alignItems: 'center',
  },
});