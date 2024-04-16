import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useThrottleFn } from 'react-use';

 const UseThrottleFnDemo = () => {
  const [status, setStatus] = React.useState('已停止更新');
  const [value, setValue] = React.useState('');
  const [throttledValue, setThrottledValue] = React.useState('');

  useThrottleFn(
    () => {
      setStatus('等待输入...');
      setThrottledValue(value);
    },
    2000,
    [value]
  );

  return (
    <View>
      <TextInput
        value={value}
        placeholder='节流输入...'
        onChangeText={(value) => {
          setStatus('已停止更新')
          setValue(value)
        }}
      />
      <Text>{status}</Text>
      <Text>Throttled value:{throttledValue}</Text>
      <Text>节流设定时间为2s</Text>
    </View>
  )
};
export default UseThrottleFnDemo