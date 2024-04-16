import React from 'react';
import { Text } from 'react-native';
import { createMemo } from 'react-use';

const fibonacci: any = (n: number) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const useMemoFibonacci = createMemo(fibonacci);

 const CreateMemoDemo = () => {
  const result = useMemoFibonacci(10);

  return (
    <Text>
      fib(10) = {result}
    </Text>
  );
};
export default CreateMemoDemo