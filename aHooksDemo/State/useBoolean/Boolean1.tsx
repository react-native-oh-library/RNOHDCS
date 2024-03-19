/**
 * title: Basic usage
 * desc: Toggle boolean, default value can be set optionally.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 切换 boolean，可以接收默认值。
 */

import React from 'react';
import { useBoolean } from 'ahooks';
import { Button, View, StyleSheet, Text } from 'react-native';

export function Boolean1() {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

  return (
    <View>
      <Text>Effects:{JSON.stringify(state)}</Text>
      <Text>
        <Button title="Toggle" onPress={toggle} />
        <View style={styles.container}>
          <Button title="Set false" onPress={setFalse} />
        </View>
        <Button title="Set true" onPress={setTrue} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});