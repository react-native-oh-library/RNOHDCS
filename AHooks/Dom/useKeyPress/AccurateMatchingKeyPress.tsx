/**
 * title: Exact match
 * desc: Enable exact matching by setting `exactMatch`. For example, press [shift + c], will not trigger [c].
 *
 * title.zh-CN: 精确匹配
 * desc.zh-CN: 通过配置 `exactMatch`, 开启精确匹配。比如按 [shift + c] ，不会触发 [c]。
 */

import { CheckOutlined } from '@ant-design/icons';
import { useKeyPress } from 'ahooks';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

export function AccurateMatchingKeyPress() {
  const [state, setState] = useState<number>();

  useKeyPress(['shift.c'], () => {
    setState(1);
  });

  useKeyPress(
    ['c'],
    () => {
      setState(2);
    },
    {
      exactMatch: true,
    },
  );

  return (
    <View>
      <Text>Try pressing the following:</Text>
      <View>
        <Text>1. Modifier key [shift.c]: {state === 1 && <CheckOutlined style={{ color: '#f00' }} />}</Text>
      </View>
      <View>
        <Text>2. Modifier key [c]: {state === 2 && <CheckOutlined style={{ color: '#f00' }} />}</Text>
      </View>
    </View>
  );
};
