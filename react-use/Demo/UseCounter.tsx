import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCounter } from 'react-use';

 const UseCounterDemo = () => {
  const [min, { inc: incMin, dec: decMin }] = useCounter(1);
  const [max, { inc: incMax, dec: decMax }] = useCounter(10);
  const [value, { inc, dec, set, reset }] = useCounter(5, max, min);

  return (
    <View>
      <Text>
        current: {value} [min: {min}; max: {max}]
      </Text>
      <Text> Current value:</Text>
      <Button title='Increment' onPress={() => inc()} />
      <Button title='Decrement' onPress={() => dec()} />
      <Button title='Increment (+5)' onPress={() => inc(5)} />
      <Button title='Decrement (-5)' onPress={() => dec(5)} />
      <Button title='Set 100' onPress={() => set(100)} />
      <Button title='Reset' onPress={() => reset()} />
      <Button title='Reset (25)' onPress={() => reset(25)} />
      <Text>Min value:</Text>
      <Button title='Increment' onPress={() => incMin()} />
      <Button title='Decrement' onPress={() => decMin()} />
      <Text>Max value:</Text>
      <Button title='Increment' onPress={() => incMax()} />
      <Button title='Decrement' onPress={() => decMax()} />
    </View>
  );
};
export default UseCounterDemo