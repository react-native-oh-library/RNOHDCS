import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAsyncRetry } from 'react-use';

 const UseAsyncRetryDemo = () => {
  const [count, setCount] = React.useState(0);

  const { loading, error, retry } = useAsyncRetry(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (count < 5) {
      throw new Error('Count is too low')
    }
  }, [count])

  return (
    <View>
      <Text>useAsyncRetry共有三个状态：loading、error和value获取成功</Text>
      <Button title='Invcrement Date' onPress={() => setCount(count + 1)} />
      <Text>Count:{count}</Text>
      {loading && <Text>loading...</Text>}
      {error && (
        <View>
          <Text>Error:{error.message}</Text>
          <Button title='Retry' onPress={retry} />
        </View>
      )}
    </View>
  );
};
export default UseAsyncRetryDemo