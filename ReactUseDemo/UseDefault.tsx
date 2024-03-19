import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { useDefault } from 'react-use';

const UseDefaultDemo = () => {
  const initialUser = { name: 'Marshall' }
  const defaultUser = { name: 'Mathers' }
  const [user, setUser] = useDefault(defaultUser, initialUser);

  return (
    <View>
      <Text>User: {user.name}</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={newValue => setUser({ name: newValue })} />
      <Button title='set to null' onPress={() => setUser(null)} />
    </View>
  );
};

export default UseDefaultDemo;