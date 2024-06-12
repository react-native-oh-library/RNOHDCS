import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useThrottle } from 'react-use';

 const UseThrottleDemo = () => {
  const [value, setValue]:any = useState();
  const throttledValue = useThrottle(value);

  return (
    <View>
      <TextInput
        value={value}
        style={{ borderWidth: 1, fontSize: 16 }}
        placeholder='键入...'
        onChangeText={(value) => {
          setValue(value)
        }}
      />
      <Text>Throttled value:{throttledValue}</Text>
    </View>
  )
};
export default UseThrottleDemo