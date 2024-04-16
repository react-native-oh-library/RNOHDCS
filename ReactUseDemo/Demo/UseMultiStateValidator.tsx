import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useMultiStateValidator } from 'react-use';


const UseMultiStateValidatorDemo = () => {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);

  const validator = (s: number[]) => [s.every((num: number) => (num >= 5))] as [boolean];
  const [[isValid]] = useMultiStateValidator([number1, number2], validator)

  return (
    <View>
      <Text>两个数字是否都大于等于5，当两个数字都满足条件时，会显示一条绿色的'Validation Passed!'消息</Text>
      <TextInput
        style={{ borderWidth: 1 }}
        value={number1.toString()}
        placeholder='默认为0'
        keyboardType='numeric'
        onChangeText={(text) => {
          setNumber1(parseInt(text) || 0);
        }}
      />
      <TextInput
        style={{ borderWidth: 1 }}
        value={number2.toString()}
        placeholder='默认为0'
        keyboardType='numeric'
        onChangeText={(text) => {
          setNumber2(parseInt(text) || 0);
        }}
      />
      {isValid ? (<Text style={{color:'green',marginTop:20}}>Validation Passed!</Text>) : null}
    </View>
  );
};
export default UseMultiStateValidatorDemo