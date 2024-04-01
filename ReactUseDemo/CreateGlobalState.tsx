import React from 'react';
import { View, Text, Button } from 'react-native';
import { createGlobalState } from 'react-use'

const useGlobalValue = createGlobalState<number>(0);

const CompA = () => {
  const [value, setValue] = useGlobalValue();

  return <Button title='+' onPress={() => setValue(value + 1)} />
};

const CompB = () => {
  const [value, setValue] = useGlobalValue();

  return <Button title='-' onPress={() => setValue(value - 1)} />
};

const CreateGlobalStateDemo = () => {
  const [value] = useGlobalValue();
  return (
    <View>
      <Text>{value}</Text>
      <CompA />
      <CompB />
    </View>
  );
};

export default CreateGlobalStateDemo;