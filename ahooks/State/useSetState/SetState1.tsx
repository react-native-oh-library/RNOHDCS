/**
 * title: Default usage
 * desc: Automatically merge object.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 自动合并对象。
 */

import React from 'react';
import { useSetState } from 'ahooks';
import { View, Text, Button } from 'react-native';

interface State {
  hello: string;
  [key: string]: any;
}

export function SetState1(){
  const [state, setState] = useSetState<State>({
    hello: '',
  });

  return (
    <View>
      <Text>{JSON.stringify(state, null, 2)}</Text>
      <Text>
        <Button title="set hello" onPress={() => setState({ hello: 'world' })} />
        <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
        <Button title="set foo" onPress={() => setState({ foo: 'bar' })}  />
        </View>
      </Text>
    </View>
  );
};