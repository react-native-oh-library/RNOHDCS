import React from 'react';
import { Text } from 'react-native';
import { View,Text,TextInput } from 'react-native';
import { createMemo } from 'react-use';

const fibonacci: any = (n: number) => {
@@ -11,12 +11,21 @@ const fibonacci: any = (n: number) => {
const useMemoFibonacci = createMemo(fibonacci);

 const CreateMemoDemo = () => {
  const result = useMemoFibonacci(10);
  const [count,setCount]=React.useState('10')
  const result = useMemoFibonacci(Number(count));

  return (
    <Text>
      fib(10) = {result}
    </Text>
  <View>
        <Text>此demo使用createMemo验证斐波那契数列（优化地柜性能）</Text>
        <TextInput
          value={count}
          placeholder = '请输入0-20内的数字'
          style={{borderWidth:1,fontSize: 16}}
          onChangeText={(value)=>{setCount(value)}}
          maxLength={2} />
        <Text>{`fib(${count}=)`}{result}</Text>
  </View>
  );
};

export default CreateMemoDemo