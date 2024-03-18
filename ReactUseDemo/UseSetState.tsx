import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSetState } from 'react-use';

const UseSetStateDemo = () => {
  const [state, setState] = useSetState({});

  return (
    <View>
      <Text>{JSON.stringify(state, null, 2)}</Text>
      <Button title='hello' onPress={() => setState({ hello: 'world' })} />
      <Button title='foo' onPress={() => setState({ foo: 'bar' })} />
      <Button title='count' onPress={() => { setState((prevState) => ({ count: (prevState.count || 0) + 1, })) }} />
    </View>
  );
};

export default UseSetStateDemo;