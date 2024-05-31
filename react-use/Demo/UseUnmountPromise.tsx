import React from 'react';
import {View, Text, Button} from 'react-native';
import {useUnmountPromise} from 'react-use';

const UseUnmountPromiseDemo = () => {
  const [loading, setLoading] = React.useState(false);

  useUnmountPromise(() => {
    console.log('Component is unmounting...');
    //Simulate some async operation
    return new Promise(resolve => setTimeout(resolve, 2000));
  });

  const handleClick = async () => {
    setLoading(true);
    //Simulate some async operation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setLoading(false);
    console.log('Async operation completed');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{loading ? 'Loading' : 'Ready'}</Text>
      <Button
        title="Start Async Operation"
        onPress={handleClick}
        disabled={loading}
      />
    </View>
  );
};

export default UseUnmountPromiseDemo;
