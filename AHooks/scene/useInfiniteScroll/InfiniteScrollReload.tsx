import React, { useState } from 'react';
import { useInfiniteScroll } from 'ahooks';
import { Button,View,Text } from 'react-native';
import { TextInput } from 'react-native';

interface Result {
  list: string[];
  nextId: string | undefined;
}

const resultData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

function getLoadMoreList(
  nextId: string | undefined,
  limit: number,
  keyword: string,
): Promise<Result> {
  let start = 0;
  if (nextId) {
    start = resultData.findIndex((i) => i === nextId);
  }
  const end = start + limit;
  const list = resultData.slice(start, end);
  const nId = resultData.length >= end ? resultData[end] : undefined;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list,
        nextId: nId,
      });
    }, 1000);
  });
}

export function InfiniteScrollReload() {
  const [keyword, setKeyword] = useState('');

  const { data, loading, loadMore, loadingMore, reload } = useInfiniteScroll((d) =>
    getLoadMoreList(d?.nextId, 4, keyword),
  );

  return (
    <View>
      <View style={{ marginBottom: 16 }}>
        <TextInput value={keyword} onChangeText={(text: React.SetStateAction<string>) => setKeyword(text)} />
        <View style={{ marginLeft: 8 }}>
        <Button title='Filter'  onPress={reload}/>
        </View>
      </View>
      {loading ? (
        <Text>loading</Text>
      ) : (
        <View>
          {data?.list?.map((item) => (
            <View key={item} style={{ padding: 12, borderWidth:1,borderStyle:'solid',borderBlockColor:"#f5f5f5"}}>
              <Text>item-{item}</Text>
            </View>
          ))}
        </View>
      )}

      <View style={{ marginTop: 8 }}>
        {data?.nextId && (
          <Button title={loadingMore ? 'Loading more...' : 'Click to load more'} onPress={loadMore} disabled={loadingMore}/>
        )}
        {!data?.nextId && <View>No more data</View>}
      </View>
    </View>
  );
};