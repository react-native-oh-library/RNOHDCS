import * as React from 'react';
import { Text } from 'react-native'
import { useMotion } from 'react-use';

 function UseMotionDemo(): React.JSX.Element {
  const state = useMotion();
  return (
    <Text>
      {JSON.stringify(state, null, 2)}
    </Text>
  );
}
export default UseMotionDemo