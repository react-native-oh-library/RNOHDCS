/**
 * title: Basic usage
 * desc: Forces component to re-render.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 强制组件重新渲染。
 */

import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import React from 'react';
import { useUpdate } from 'ahooks';

export function UseUpdate() {
  const update = useUpdate();

  return (
    <View>
      <Text>Time: {Date.now()}</Text>
      <Button title="update" onPress={update} />
    </View>
  );
};
