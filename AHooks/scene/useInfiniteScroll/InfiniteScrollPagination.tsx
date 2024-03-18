import React from 'react';
import { useInfiniteScroll } from 'ahooks';
import { Button,View,Text } from 'react-native';

interface Result {
  list: string[];
  total: number;
}

const resultData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

function getLoadMoreList(page: number, pageSize: number): Promise<Result> {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  const list = resultData.slice(start, end);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list,
        total: resultData.length,
      });
    }, 1000);
  });
}

const PAGE_SIZE = 4;

export function InfiniteScrollPagination(){
  const { data, loading, loadMore, loadingMore } = useInfiniteScroll((d) => {
    const page = d ? Math.ceil(d.list.length / PAGE_SIZE) + 1 : 1;
    return getLoadMoreList(page, PAGE_SIZE);
  });

  const hasMore = data && data.list.length < data.total;

  return (
    <View>
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
        {hasMore && (
          <Button title={loadingMore ? 'Loading more...' : 'Click to load more'} onPress={loadMore} disabled={loadingMore}/>
        )}
        {!hasMore && <View>No more data</View>}
      </View>
    </View>
  );
};