import React from 'react';
import { View, Text, Button } from 'react-native';
import { BehaviorSubject } from 'rxjs';
import { useObservable } from 'react-use';

const counter = new BehaviorSubject(0);
 const UseObservableDemo = () => {
  const value = useObservable(counter, 0);

  return (
    <View>
      <Text>{value} times</Text>
      <Button title='Chick' onPress={() => counter.next(value + 1)} />
    </View>
  );
};
export default UseObservableDemo