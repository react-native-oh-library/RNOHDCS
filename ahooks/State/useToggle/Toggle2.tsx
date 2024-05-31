/**
 * title: Toggle between any two values
 * desc: Accept two optional parameters and toggle between them.
 *
 * title.zh-CN: 在任意两个值之间切换
 * desc.zh-CN: 接受两个可选参数，在它们之间进行切换。
 */

import React from 'react';
import { useToggle } from 'ahooks';
import { Button, Text, View } from 'react-native';

export function Toggle2(){
  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');

  return (
    <View>
      <Text>Effects：{state}</Text>
      <Text>
        <Button title="Toggle" onPress={toggle}/>
        <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
        <Button title="Set Hello" onPress={() => set('Hello')} />
        </View>
        <Button title="Set World" onPress={() => set('World')}/>
        <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
        <Button title="Set Left" onPress={setLeft} />
        </View>
        <Button title="Set Right" onPress={setRight}/>
      </Text>
    </View>
  );
};