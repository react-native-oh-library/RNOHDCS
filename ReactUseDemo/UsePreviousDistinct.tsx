import React from 'react';
import { View, Text, Button } from 'react-native';
import { usePreviousDistinct, useCounter } from 'react-use';

const UsePreviousDistinctDemo = () => {
  const [count, { inc: relatedInc }] = useCounter(0);
  const [unrelatedCount, { inc }] = useCounter(0);
  const prevCount = usePreviousDistinct(count);

  return (
    <View>
      <Text>Now: {count}, before: {prevCount}</Text>
      <Button title='Increment' onPress={() => relatedInc()} />
      <Text>Unrelated: {unrelatedCount}</Text>
      <Button title='Increment Unrelated' onPress={() => inc()} />
    </View>
  );
};

export default UsePreviousDistinctDemo;