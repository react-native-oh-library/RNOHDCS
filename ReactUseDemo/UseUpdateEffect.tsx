import React from 'react';
import { Text } from 'react-native';
import { useUpdateEffect } from 'react-use';

const UseUpdateEffectDemo = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useUpdateEffect(() => {
    console.log('count', count) // will only show 1 and beyond

    return () => { // *OPTIONAL*
      // do something on unmount
    }
  }) // you can include deps array if necessary

  return <Text>Count: {count}</Text>
};

export default UseUpdateEffectDemo;