import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  console.log('polling getUsername Error');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(Mock.mock('@name')));
    }, 1000);
  });
}

export function PollingPollingError() {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
    pollingErrorRetryCount: 1,
    manual: true,
    onError: (error) => {
      Alert.alert("Error", error.message);
    },
  });

  return (
    <View style={styles.container}>
      <Text>Username: {loading ? 'Loading' : data}</Text>
      <View style={styles.buttonContainer}>
        <Button title="start" onPress={run} />
        <View style={styles.space} />
        <Button title="stop" onPress={cancel} />
      </View>
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
    flexDirection: 'row',
    marginTop: 10,
  },
  space: {
    width: 10,
  },
});
