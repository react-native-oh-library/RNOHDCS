import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSafeState } from 'ahooks';

const Child = () => {
  const [value, setValue] = useSafeState<string>();

  useEffect(() => {
    setTimeout(() => {
      setValue('data loaded from server');
    }, 5000);
  }, []);

  const text = value || 'Loading...';

  return <View><Text>{text}</Text></View>;
};

export function SafeState1(){
  const [visible, setVisible] = useState(true);

  return (
    <View>
      <Button title="Unmount" onPress={() => setVisible(false)} />
      {visible && <Child />}
    </View>
  );
};

