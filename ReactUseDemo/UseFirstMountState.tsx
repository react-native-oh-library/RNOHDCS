import React from 'react';
import { View, Text, Button } from 'react-native';
import { useFirstMountState, useUpdate } from 'react-use';

const UseFirstMountStateDemo = () => {
  const isFirstMount = useFirstMountState();
  const update = useUpdate();

  return (
    <View>
      <Text>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</Text>
      <Button title='re-render' onPress={update} />
    </View>
  );
};

export default UseFirstMountStateDemo;