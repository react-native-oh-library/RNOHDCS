import React from 'react';
import { View, Text, Button } from 'react-native';
import { useStateWithHistory } from 'react-use';

const Demo: React.FC = () => {
  // Initialize state with history
  const [count, setCount, { history, position, back, forward, go }] = useStateWithHistory<number>(0);

  // Function to jump back by 2 steps in history
  const jumpBackByTwo = () => {
    go(position - 2);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>useStateWithHistory Demo</Text>
      <Text>Current Count: {count}</Text>
      <Button title="count+1" onPress={() => setCount(count + 1)} />
      <Button title="back" onPress={() => back()} />
      <Button title="forward" onPress={() => forward()} />
      <Button title="go(2)" onPress={jumpBackByTwo} />
      <Text>History: {JSON.stringify(history)}</Text>
      <Text>Pointer: {position}</Text>
    </View>
  );
};

export default Demo;
