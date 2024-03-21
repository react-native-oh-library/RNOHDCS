import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useToggle } from 'react-use';

const UseToggleDemo = () => {
  const [on, toggle] = useToggle(true);

  return (
    <View>
      <Text>{on ? 'ON' : 'OFF'}</Text>
      <Button title='Toggle' onPress={toggle} />
      <Button title='set ON' onPress={() => toggle(true)} />
      <Button title='set OFF' onPress={() => toggle(false)} />
    </View>
  );
};

export default UseToggleDemo;