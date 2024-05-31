import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useMediatedState } from 'react-use';

const inputMediator = s => s.replace(/[\s]+/g, ' ');
 const UseMediatedStateDemo = () => {
  const [state, setState] = useMediatedState(inputMediator, '');

  return (
    <View>
      <Text>You will not be able to enter more than one space</Text>
      <Text>您将无法输入多个空格</Text>
      <TextInput
        style={{ borderWidth: 1,fontSize: 16 }}
        value={state}
        onChangeText={(value) => {
          setState(value);
        }}
      />
    </View>
  );
};
export default UseMediatedStateDemo