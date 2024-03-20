import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { useSafeState } from 'ahooks';

export function ResetState1(){
  const [count, setCount, getCount]:any = useSafeState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval count', getCount());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <Button title={`count: ${count}`} onPress={() => setCount((prevCount:any ) => prevCount + 1)} />
    </View>
  );
};

