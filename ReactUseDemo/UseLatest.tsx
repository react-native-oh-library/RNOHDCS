import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useLatest } from 'react-use';

const UseLatestDemo = () => {
  const [count, setCount] = React.useState(0);
  const latestCount = useLatest(count);

  function handleAlertClick() {
    setTimeout(() => {
      Alert.alert(`Latest count value: ${latestCount.current}`);
    }, 3000);
  }

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title='Click me' onPress={() => setCount(count + 1)} />
      <Button title='Show alert(3s after)' onPress={handleAlertClick} />
    </View>
  );
};

export default UseLatestDemo;