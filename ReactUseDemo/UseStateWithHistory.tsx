import React from 'react';
import { View, Text, Button } from 'react-native';
import { useStateWithHistory } from 'react-use';

const UseStateHistoryDemo = () => {
  const [count, setCount, { history, position, back, forward, go }] = useStateWithHistory(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <View>
      <Text>Count:{count}</Text>
      <Button title='Increment' onPress={handleIncrement} />
      <Button title='Decrement' onPress={handleDecrement} />
      <View>
        <Button title='Back' onPress={() => back()} disabled={position <= 0} />
        <Button title='Forward' onPress={() => forward()} disabled={position >= history.length - 1} />
        <Button title='Go' onPress={() => go(2)} disabled={position === 2} />
      </View>
    </View>
  );
};

export default UseStateHistoryDemo;