import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { createStateContext } from 'react-use';

const [useSharedText, SharedTextProvider] = createStateContext('');

const ComponentA = () => {
  const [text, setText] = useSharedText();
  return (
    <View>
      <Text>Component A:</Text>
      <TextInput style={{borderWidth:1}} value={text} onChangeText={value => setText(value)} />
    </View>
  );
};

const ComponentB = () => {
  const [text, setText] = useSharedText();
  return (
    <View>
      <Text>Component B:</Text>
      <TextInput style={{borderWidth:1}} value={text} onChangeText={value => setText(value)} />
    </View>
  );
};

const CreateStateContextDemo = () => {
  return (
    <SharedTextProvider>
      <Text>Those two fields share the same value.</Text>
      <ComponentA />
      <ComponentB />
    </SharedTextProvider>
  );
};

export default CreateStateContextDemo;