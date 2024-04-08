import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import Mock from 'mockjs';
import { useRequest } from 'ahooks'; 

async function getArticle(): Promise<{ data: string; time: number }> {
  console.log('cacheKey-share');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph'),
        time: new Date().getTime(),
      });
    }, 3000);
  });
}

const Article = () => {
  const { data, loading, refresh } = useRequest(getArticle, {
    cacheKey: 'cacheKey-share',
  });

  if (!data && loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text>Background loading: {loading ? 'true' : 'false'}</Text>
      <View>
        <Button onPress={refresh} title="更新" />
      </View>
      <Text>Latest request time: {data?.time}</Text>
      <Text>{data?.data}</Text>
    </View>
  );
};

export function CacheShare(){
  return (
    <View>
      <Text style={{fontSize: 20}}>Article 1</Text>
      <Article />
      <Text style={{fontSize: 20}}>Article 2</Text>
      <Article />
    </View>
  );
};