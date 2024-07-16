import * as React from 'react';
import {View, Text, Pressable} from 'react-native';

export function AsyncComponent() {
  const [count, setCount] = React.useState(0);

  const handlePress = () => {
    setTimeout(() => setCount(c => c + 1), 20);
  };

  return (
    <View>
      <Pressable accessibilityRole="button" onPress={handlePress}>
        <Text>Action</Text>
      </Pressable>
      <Text>Count: {count}</Text>
    </View>
  );
}
