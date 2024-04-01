import React from 'react';
import { View, Text, Button } from 'react-native';
import { useMethods } from 'react-use';

const initialState = {
  count: 0,
};

function createMethods(state: any) {
  return {
    reset() {
      return initialState;
    },
    increment() {
      return { ...state, count: state.count + 1 };
    },
    decrement() {
      return { ...state, count: state.count - 1 };
    },
  };
}

const UseMethodsDemo = () => {
  const [state, methods] = useMethods(createMethods, initialState);

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title='-' onPress={methods.decrement} />
      <Button title='+' onPress={methods.increment} />
    </View>
  );
};

export default UseMethodsDemo;