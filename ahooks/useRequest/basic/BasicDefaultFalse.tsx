/**
 * title: Read username
 *
 * title.zh-CN: 读取用户名称
 */

import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRequest } from 'ahooks';
import Mock from 'mockjs'; // 确保 Mockjs 在 React Native 中可用或寻找替代方案

function getUsername(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Failed to get username'));
    }, 1000);
  });
}

export function BasicDefaultFalse() {
  const { data, error, loading } = useRequest(getUsername);

  if (error) {
    return <View style={styles.container}><Text>{error.message}</Text></View>;
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </View>
    );
  }
  return <View style={styles.container}><Text>Username: {data}</Text></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
