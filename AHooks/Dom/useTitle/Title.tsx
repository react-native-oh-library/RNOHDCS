/**
 * title: Basic usage
 * desc: Set title of the page.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 设置页面标题
 */

import React from 'react';
import { useTitle } from 'ahooks';
import { View, Text } from 'react-native';

export function Title() {
  useTitle('Page Title');

  return (
    <View>
      <Text>Set title of the page.</Text>
    </View>
  );
};
