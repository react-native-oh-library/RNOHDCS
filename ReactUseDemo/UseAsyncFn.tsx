import { View, Text, Button } from 'react-native';
import { useAsyncFn } from 'react-use';

const UseAsyncFnDemo = () => {
  const [state, asyncFn] = useAsyncFn(async () => {
    return 'Hello Wrold';
  })

  return (
    <View>
      <Text>useAsyncFn共有三个状态：loading、error和value获取成功</Text>
      <Button title='Fetch Date' onPress={asyncFn} />
      {state.loading
        ? <Text>Loading...</Text>
        : state.error
          ? <Text>Error: {state.error.message}</Text>
          : <Text>Value: {state.value}</Text>
      }
    </View>
  );
};

export default UseAsyncFnDemo;