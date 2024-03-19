import React from 'react';
import { Button, Text, View } from 'react-native';
import { useIsomorphicLayoutEffect } from 'react-use';

const UseIsomorphicLayoutEffectDemo = () => {
  const [count, setCount] = React.useState(0);
  const countRef= React.useRef(count)

  useIsomorphicLayoutEffect(() => {
    countRef.current=count;
  },[count]);

  return(
<View>
<Text>Count: {count}</Text>
<Text>Count(from ref): {countRef.current}</Text>
<Button title='Increment Count' onPress={()=>{setCount(count+1)}}/>
</View>
  ) 
};

export default UseIsomorphicLayoutEffectDemo;