import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRafLoop, useUpdate } from 'react-use';

 const UseRafLoopDemo = () => {
  const [ticks, setTicks] = React.useState(0);
  const [lastCall, setLastCall] = React.useState(0);
  const update = useUpdate();

  const [loopStop, loopStart, isActive] = useRafLoop((time: any) => {
    setTicks(ticks => ticks + 1);
    setLastCall(time);
  });

  return (
    <View>
      <Text>RAF triggered: {ticks} (times)</Text>
      <Text>Last high res timestamp: {lastCall}</Text>
      <Button title={isActive() ? 'STOP' : 'START'} onPress={() => {
        isActive() ? loopStop() : loopStart();
        update();
      }} />
    </View>
  );
};
export default UseRafLoopDemo