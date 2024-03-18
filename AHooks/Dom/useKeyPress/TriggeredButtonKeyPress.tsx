/**
 * title: Get the trigger key
 * desc: Multiple shortcuts are registered by a hook, each corresponding to a different logic.
 *
 * title.zh-CN: 获取触发的按键
 * desc.zh-CN: 单个 hook 注册多个快捷键，每个快捷键对应不同逻辑。
 */

import React, { useState } from 'react';
import { useKeyPress } from 'ahooks';
import { View, Text } from 'react-native';

export function TriggeredButtonKeyPress() {
  const [count, setCount] = useState<number>(0);

  const keyCallbackMap: any = {
    w: () => {
      setCount((prev) => prev + 1);
    },
    s: () => {
      setCount((prev) => prev - 1);
    },
    'shift.c': () => {
      setCount(0);
    },
  };

  useKeyPress(['w', 's', 'shift.c'], (e, key) => {
    keyCallbackMap[key]();
  });

  return (
    <View>
      <Text>Try pressing the following:</Text>
      <View>
        <Text>1. Press [w] to increase</Text>
      </View>
      <View>
        <Text>2. Press [s] to decrease</Text>
      </View>
      <View>
        <Text>3. Press [shift.c] to reset</Text>
      </View>
      <Text>
        counter: <Text style={{ color: '#f00' }}>{count}</Text>
      </Text>
    </View>
  );
};
