import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useBoolean, useRequest } from 'ahooks';
import Mock from 'mockjs';

async function getArticle(keyword: string): Promise<{ data: string; time: number }> {
  console.log('cacheKey', keyword);
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
  const { data, loading, run } = useRequest(getArticle, {
    cacheKey: 'cacheKey-demo',
  });

  const [keyword, setKeyword] = useState('');

  if (!data && loading) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button
        onPress={() => {
          run(keyword);
        }}
        title="Get"
      />
      <Text>Background loading: {loading ? 'true' : 'false'}</Text>
      <Text>Latest request time: {data?.time}</Text>
      <Text>Keyword: {keyword}</Text>
      <Text>{data?.data}</Text>
    </View>
  );
};


export function CacheParams(){
  const [state, { toggle }] = useBoolean();

  return (
    <View style={styles.container}>
      <Button onPress={() => toggle()} title="Show/Hide" />
      {state && <Article />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    fontSize: 16
  },
});
