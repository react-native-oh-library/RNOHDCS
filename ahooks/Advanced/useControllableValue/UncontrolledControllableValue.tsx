/**
 * title: Uncontrolled component
 * desc: If there is no value in props, the component manage state by self
 *
 * title.zh-CN: 非受控组件
 * desc.zh-CN: 如果 props 中没有 value，则组件内部自己管理 state
 */
import React from 'react'; 
import { useControllableValue } from 'ahooks'; 
import { View, TextInput, Button } from 'react-native';  

export function UncontrolledControllableValue(props: any) {   
  const [state, setState] = useControllableValue<string>(props, {     
    defaultValue: '',   
  });    

  return (     
    <View>       
      <TextInput         
        value={state}         
        onChangeText={(text: string) => setState(text)}         
        keyboardType='default'         
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 40, width: 350, marginLeft: 20, marginBottom: 20 }}       
      />       
      <Button         
        title='Clear'         
        onPress={() => setState('')}       
      />     
    </View>   
  ); 
};