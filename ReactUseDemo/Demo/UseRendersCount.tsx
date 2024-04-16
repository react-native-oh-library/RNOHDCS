import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRendersCount,useUpdate } from "react-use";  

 const UseRendersCountDemo = () => {
  const update = useUpdate();
  const rendersCount = useRendersCount();

  return (
    <View>
      <Text>Renders count: {rendersCount}</Text>
      <Button title='re-render' onPress={update} />
    </View>
  );
};

export default UseRendersCountDemo