import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useMultiStateValidator } from 'react-use';

const DemoStateValidator = (s: number[]) => [s.every((num: number) => !(num % 2))] as [boolean];
const UseMultiStateValidatorDemo = () => {
  const [state1, setState1] = React.useState(1);
  const [state2, setState2] = React.useState(1);
  const [state3, setState3] = React.useState(1);
  const [[isValid]] = useMultiStateValidator([state1, state2, state3], DemoStateValidator);

  return (
    <View>
      <Text>Below fields will be valid if all of them is even</Text>
      <Text>如果下面的字段都是偶数，则它们是有效的</Text>
      <TextInput
        style={{ borderWidth: 1 }}
        value={state1}
        placeholder='请输入1-10内的数字'
        onChangeText={(value) => {
          setState1(parseInt(value));
        }}
      />
      <TextInput
        style={{ borderWidth: 1 }}
        value={state2}
        placeholder='请输入1-10内的数字'
        onChangeText={(value) => {
          setState2(parseInt(value));
        }}
      />
      <TextInput
        style={{ borderWidth: 1 }}
        value={state3}
        placeholder='请输入1-10内的数字'
        onChangeText={(value) => {
          setState3(parseInt(value));
        }}
      />

      {isValid !== null && <Text>{isValid ? 'Valid!' : 'Invalid'}</Text>}
    </View>
  );
};

export default UseMultiStateValidatorDemo;