import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Mock from 'mockjs';
import { useRequest, clearCache, useBoolean } from 'ahooks';

async function getArticle(): Promise<{ data: string; time: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph'),
        time: new Date().getTime(),
      });
    }, 3000);
  });
}

const Article = ({ cacheKey }: { cacheKey: any }) => {
  const { data, loading } = useRequest(getArticle, {
    cacheKey,
  });

  if (!data && loading) {
    return <Text>Loading</Text>;
  }

  return (
    <>
      <Text>Background loading: {loading ? 'true' : 'false'}</Text>
      <Text>Latest request time: {data?.time}</Text>
      <Text>{data?.data}</Text>
    </>
  );
};

const clear = (cacheKey?: string | string[]) => {
  clearCache(cacheKey);
  const tips = Array.isArray(cacheKey) ? cacheKey.join('、') : cacheKey;
  Alert.alert("Clear Cache", `Clear ${tips ?? 'All'} finished`);
};

export function CacheClearCache(){
  const [state, { toggle }] = useBoolean();

  return (
    <View style={{ padding: 20 }}>
      <Button onPress={() => toggle()} title="show/hidden" />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button onPress={() => clear('Article1')} title="Clear Article1" />
        <Button onPress={() => clear('Article2')} title="Clear Article2" />
        <Button onPress={() => clear(['Article2', 'Article3'])} title="Clear Article2 and Article3" />
        <Button onPress={() => clear()} title="Clear All" />
      </View>
      <Text style={{ marginTop: 20, fontSize: 18 }}>Article 1</Text>
      {state && <Article cacheKey="Article1" />}
      <Text style={{ marginTop: 20, fontSize: 18 }}>Article 2</Text>
      {state && <Article cacheKey="Article2" />}
      <Text style={{ marginTop: 20, fontSize: 18 }}>Article 3</Text>
      {state && <Article cacheKey="Article3" />}
    </View>
  );
};
