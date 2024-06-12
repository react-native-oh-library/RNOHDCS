import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { createStateContext } from 'react-use';

const [useSharedText, SharedTextProvider] = createStateContext('');

const ComponentA = () => {
  const [text, setText] = useSharedText();
  return (
    <View>
      <Text>Component A:</Text>
      <TextInput style={{borderWidth:1, fontSize: 16}} value={text} onChangeText={value => setText(value)} />
    </View>
  );
};

const ComponentB = () => {
  const [text, setText] = useSharedText();
  return (
    <View>
      <Text>Component B:</Text>
      <Text style={{borderWidth:1}}>{text}</Text>
    </View>
  );
};

 const CreateStateContextDemo = () => {
  return (
    <SharedTextProvider>
      <Text>A组件和B组件单向共享状态</Text>
      <ComponentA />
      <ComponentB />
    </SharedTextProvider>
  );
};

export default CreateStateContextDemo