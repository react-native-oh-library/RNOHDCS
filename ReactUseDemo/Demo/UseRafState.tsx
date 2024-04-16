import React, { useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { useRafState } from 'react-use';

 const UseRafStateDemo = () => {
  const [count, setCount] = useRafState(0);
  const animationRef:any = useRef();

  const startAnimation = () => {
    animationRef.current = requestAnimationFrame(animate);
  };

  const animate = () => {
    setCount((prevCount) => prevCount + 1);
    animationRef.current = requestAnimationFrame(animate)
  };

  const stopAnimation = () => {
    cancelAnimationFrame(animationRef.current)
  }

  return (
    <View>
      <Text>useRafState Demo</Text>
      <Text>{count}</Text>
      <View>
        <Button title='Start Animation' onPress={startAnimation} />
        <Button title='Stop Animation' onPress={stopAnimation} />
      </View>
    </View>
  );
};
export default UseRafStateDemo