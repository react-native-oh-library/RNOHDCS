/**
 * title: Use key aliases
 * desc: Support using key aliases. Please refer to the [document](#remarks) below.
 *
 * title.zh-CN: 使用别名
 * desc.zh-CN: 支持使用别名，更多内容请[查看备注](#remarks)。
 */

import React, { useState } from 'react';
import { useKeyPress } from 'ahooks';
import { View, Text } from 'react-native';

export function UsingAliasesKeyPress() {
  const [counter, setCounter] = useState(0);

  useKeyPress('leftarrow', () => {
    setCounter((s) => s - 1);
  });

  useKeyPress('rightarrow', () => {
    setCounter((s) => s + 1);
  });

  return (
    <View>
      <Text>Try pressing the following:</Text>
      <Text>1. Press ArrowUp by key to increase</Text>
      <Text>2. Press ArrowDown by key to decrease</Text>
      <Text>
        counter: <Text style={{ color: '#f00' }}>{counter}</Text>
      </Text>
    </View>
  );
};
