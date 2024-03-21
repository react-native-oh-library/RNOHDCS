import React from 'react';
import { View, Text, Button } from 'react-native';
import { usePrevious } from 'react-use';

const UsePreviousDemo = () => {
  const [count, setCount] = React.useState(0);
  const prevCount = usePrevious(count);

  return (
    <View>
      <Button title='+' onPress={() => setCount(count + 1)} />
      <Button title='-' onPress={() => setCount(count - 1)} />
      <Text>
        Now: {count}, before: {prevCount}
      </Text>
    </View>
  );
};

export default UsePreviousDemo;