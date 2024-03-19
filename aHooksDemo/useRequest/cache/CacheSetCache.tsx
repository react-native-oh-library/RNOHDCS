import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBoolean, useRequest } from 'ahooks';
import Mock from 'mockjs';

async function getArticle(): Promise<{ data: string; time: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph'),
        time: new Date().getTime(),
      });
    }, 1000);
  });
}

const cacheKey = 'setCache-demo';

const Article = () => {
  const { data, loading } = useRequest(getArticle, {
    cacheKey,
    setCache: async (data) => await AsyncStorage.setItem(cacheKey, JSON.stringify(data)),
    getCache: async () => JSON.parse(await AsyncStorage.getItem(cacheKey) || '{}'),
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

export function CacheSetCache() {
  const [state, { toggle }] = useBoolean();

  return (
    <View>
      <Button onPress={() => toggle()} title="show/hidden" />
      {state && <Article />}
    </View>
  );
};