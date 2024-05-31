import React from 'react';
import { View, Text, Button } from 'react-native';
import { useLogger } from 'react-use';

const UseLoggerDemo = (props: any) => {

  useLogger('UseLoggerDemo', props)

  return (
    <View>
      <Text>控制台打印的数据:</Text>
      <Text>`{'{'}`</Text>
      <Text>"concurrentRoot":"{props.concurrentRoot ? 'true' : 'false'}"</Text>
      <Text>"foo":"{props.foo}"</Text>
      <Text>"rootTag":"{props.rootTag}"</Text>
      <Text>`{'}'}</Text>
    </View>
  )
};
export default UseLoggerDemo