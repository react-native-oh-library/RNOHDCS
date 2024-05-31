import React from 'react';
import { View,Text,TextInput } from 'react-native';
import { createMemo } from 'react-use';

const fibonacci: any = (n: number) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const useMemoFibonacci = createMemo(fibonacci);

 const CreateMemoDemo = () => {
  const [count,setCount]=React.useState('10')
  const result = useMemoFibonacci(Number(count));

  return (
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