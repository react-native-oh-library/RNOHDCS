/**
 * title: Default usage
 * desc: Update state or props, you can see the output in the console
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 更新 state 或 props，可以在控制台看到输出
 */

import { useWhyDidYouUpdate } from 'ahooks';
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Demo: React.FC<{ count: number }> = (props) => {
  const [randomNum, setRandomNum] = useState(Math.random());

  useWhyDidYouUpdate('useWhyDidYouUpdateComponent', { ...props, randomNum });

  return (
    <View>
      <View>
        <Text>number: {props.count}</Text>
      </View>
      <View>
        <Text>randomNum: {randomNum}</Text>
        <View style={{ marginLeft: 8, width: 60, height: 40 }}>
          <Button
            title="🎲"
            onPress={() => setRandomNum(Math.random)}
          />
        </View>
      </View>
    </View>
  );
};

export function WhyDidYouUpdate() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Demo count={count} />
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ marginLeft: 8, width: 100, height: 60 }}>
          <Button title="count -" onPress={() => setCount((prevCount) => prevCount - 1)} />
        </View>

        <View style={{ marginLeft: 8, width: 100, height: 60 }}>
          <Button title="count +" onPress={() => setCount((prevCount) => prevCount + 1)} />
        </View>
      </View>
      <Text style={{ marginTop: 8 }}>Please open the browser console to view the output!</Text>
    </View>
  );
};
