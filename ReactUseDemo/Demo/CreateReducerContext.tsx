import React from 'react';
import { View, Button, Text } from 'react-native';
import { createReducerContext } from 'react-use';

type Action = 'increment' | 'decrement';

const reducer = (state: number, action: Action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
};

const [useSharedCounter, SharedCounterProvider] = createReducerContext(reducer, 0);

const ComponentA = () => {
  const [count, dispatch] = useSharedCounter();
  return (
    <View>
      <Text>Component A</Text>
      <Button title='-' onPress={() => dispatch('decrement')} />
      <Text>{count}</Text>
      <Button title='+' onPress={() => dispatch('increment')} />
    </View>
  );
};

const ComponentB = () => {
  const [count, dispatch] = useSharedCounter();
  return (
    <View>
      <Text>Component B</Text>
      <Button title='-' onPress={() => dispatch('decrement')} />
      <Text>{count}</Text>
      <Button title='+' onPress={() => dispatch('increment')} />
    </View>
  );
};

 const CreateReducerContextDemo = () => {
  return (
    <SharedCounterProvider>
      <Text>Those two counters share the same value.</Text>
      <ComponentA />
      <ComponentB />
    </SharedCounterProvider>
  );
};
export default CreateReducerContextDemo