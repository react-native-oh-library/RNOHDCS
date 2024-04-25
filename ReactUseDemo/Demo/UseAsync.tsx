import React from 'react';
import { View, Text } from 'react-native';
import { useAsync } from 'react-use';

const ferchDate = async () => {
  return { data: 'Hello World' }
};

const UseAsyncDemo = () => {
  const { loading, error, value } = useAsync(ferchDate)

  if (loading) {
    return (
      <View>
        <Text>useAsync共有三个状态：loading、error和value获取成功</Text>
        <Text>loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>useAsync共有三个状态：loading、error和value获取成功</Text>
        <Text>Error:{error.message}</Text>
      </View>
    );
  }

  if (value) {
    return (
      <View>
        <Text>useAsync共有三个状态：loading、error和value获取成功</Text>
        <Text>Data:{value.data}</Text>
      </View>
    );
  }
};
export default UseAsyncDemo