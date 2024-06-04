/**
 * title: Controlled component
 * desc: If props has the value field, then the state is controlled by it's parent
 *
 * title.zh-CN: 受控组件
 * desc.zh-CN: 如果 props 有 value 字段，则由父级接管控制 state
 */

import React, { useState } from 'react';
import { useControllableValue } from 'ahooks';
import { TextInput, Button, View } from 'react-native';

const ControllableComponent = (props:any) => {
  const [state, setState] = useControllableValue(props);
  return (
    <TextInput
      value={state}
      onChangeText={(text) => setState(text)}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 16 }}
    />
  );
};

export function ControlledControllableValue() {
  const [state, setState] = useState('');
  const clear = () => {
    setState('');
  };
  return (
    <View>
      <ControllableComponent value={state} onChange={setState} />
      <Button title='Clear' onPress={clear}/>
    </View>
  );
};