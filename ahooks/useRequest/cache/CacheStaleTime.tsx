import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import Mock from 'mockjs'; // 确保Mockjs支持React Native环境
import { useRequest, useBoolean } from 'ahooks'; // 注意：ahooks和@umijs/hooks在React Native中可能不完全兼容，这里假设它们可以工作

async function getArticle(): Promise<{ data: string; time: number }> {
  console.log('cacheKey-staleTime');
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
    cacheKey: 'staleTime-demo',
    staleTime: 5000,
  });

  if (!data && loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text>Background loading: {loading ? 'true' : 'false'}</Text>
      <Text>Latest request time: {data?.time}</Text>
      <Text>{data?.data}</Text>
    </View>
  );
};

export function CacheStaleTime(){
  const [state, { toggle }] = useBoolean();

  return (
    <View>
      <Button onPress={() => toggle()} title="show/hidden" />
      {state && <Article />}
    </View>
  );
};