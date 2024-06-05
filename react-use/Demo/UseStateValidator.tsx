import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useStateValidator } from 'react-use';

const DemoStateValidator :any= (s:any) => [s === '' ? null : (s * 1) % 2 === 0];

 const UseStateValidatorDemo = () => {
  const [state, setState] = React.useState<string | number>(0);
  const [[isValid]] = useStateValidator(state, DemoStateValidator);

  return (
    <View>
      <Text>仅当数字为偶数时，以下字段有效：</Text>
      <TextInput
        style={{ borderWidth: 1,fontSize: 16 }}
        placeholder='请输入数字.....'
        value={state.toString()}
        onChangeText={(value) => {
          setState(parseInt(value));
        }}
      />
      {isValid !== null && <Text>{isValid ? '有效!' : '无效'}</Text>}
    </View>
  );
};
export default UseStateValidatorDemo