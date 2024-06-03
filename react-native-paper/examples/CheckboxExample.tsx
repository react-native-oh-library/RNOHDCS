import * as React from 'react';
import { View } from 'react-native-harmony';
import { Checkbox } from 'react-native-paper';

const CheckboxExample = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={{backgroundColor:'#fff',flex:1}}>
      <Checkbox.Item
      label='ios'
      status={checked ? 'checked' : 'unchecked'}
      mode='ios'
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Checkbox.Item
      label='harmony'
      status={checked ? 'checked' : 'unchecked'}
      mode='harmony'
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
  );
};

export default CheckboxExample;