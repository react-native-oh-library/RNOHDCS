import * as React from 'react';
import { Alert, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';



const MyComponent = () => (
  <TouchableRipple
    onPress={() => Alert.alert('success')}
    rippleColor="rgba(0, 0, 0, .32)"
    background={'pink'}
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default MyComponent;