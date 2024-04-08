/**
 * title: Basic usage
 * desc: Simple example of counter management.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 简单的 counter 管理示例。
 */

import React from 'react';
import { useCounter } from 'ahooks';
import { } from 'react-native';
import { Button, View, Text } from 'react-native';

export function Counter1(){
  const [current, { inc, dec, set, reset }] = useCounter(100, { min: 1, max: 10 });

  return (
    <View>
      <Text>{current} [max: 10; min: 1;]</Text>
      <View>
        <View style={{ marginRight: 8 }}>
        <Button
          title="inc()"
          onPress={() => {
            inc();
          }}
        />
        </View>
        <View style={{ marginRight: 8 }}>
        <Button
          title="dec()"
          onPress={() => {
            dec();
          }}
        />
        </View>
        <View style={{ marginRight: 8 }}>
        <Button
          title="set(3)"
          onPress={() => {
            set(3);
          }}
        />
        </View>
        <View style={{ marginRight: 8 }}>
        <Button title="reset()" onPress={reset}/>
        </View>
      </View>
    </View>
  );
};