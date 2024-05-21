import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useDebounce } from "react-use";

 const UseDebounceDemo = () => {
  const [state, setState] = React.useState('已停止键入');
  const [val, setVal] = React.useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');

  const [, cancel] = useDebounce(
    () => {
      setState('已停止键入');
      setDebouncedValue(val);
    },
    2000,
    [val]
  );

  return (
    <View>
      <TextInput
        value={val}
        placeholder="去抖输入..."
        style={{ borderWidth: 1 }}
        onChangeText={(value) => {
          setState('正在等待键入停止...');
          setVal(value);
        }}
      />
      <Text>{state}</Text>
      <View>
        <Text>已经去抖的值: {debouncedValue}</Text>
        <Button title='Cancel debounce' onPress={cancel} />
      </View>
    </View>
  );
};
export default UseDebounceDemo