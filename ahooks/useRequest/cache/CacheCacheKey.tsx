import React from 'react';
import { View, Text, Button } from 'react-native';
import { useBoolean, useRequest } from 'ahooks';
import Mock from 'mockjs';

async function getArticle(): Promise<{ data: string; time: number }> {
  console.log('cacheKey');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph'),
        time: new Date().getTime(),
      });
    }, 1000);
  });
}

const Article = () => {
  const { data, loading } = useRequest(getArticle, {
    cacheKey: 'cacheKey-demo',
  });

  if (!data && loading) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <Text>Background loading: {loading ? 'true' : 'false'}</Text>
      <Text>Latest request time: {data?.time}</Text>
      <Text>{data?.data}</Text>
    </View>
  );
};

export function CacheCacheKey(){
  const [state, { toggle }] = useBoolean();

  return (
    <View>
      <Button title="show/hidden" onPress={() => toggle()} />
      {state && <Article />}
    </View>
  );
};