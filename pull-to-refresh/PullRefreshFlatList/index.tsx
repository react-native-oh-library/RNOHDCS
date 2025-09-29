// import {withNavigationItem} from 'hybrid-navigation';
import React, {useRef, useState} from 'react';
import {PullToRefresh} from '@react-native-ohos/pull-to-refresh';
import {FlatListPage, useDemoFlatlistData} from '../FlatListPage';
import {SpinnerPullToRefreshHeader} from '../SpinnerPullToRefreshHeader';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
import {CustomPullToRefreshFooter} from '../CustomPullToRefreshFooter'
import {StyleSheet,Image ,Text,Animated} from 'react-native';
function CustomPullRefreshFlatList() {
  const [refreshing, setRefreshing] = useState(true);
  const [loadingMore, setLoadingMore] = useState(true);
  const [noMoreData, setNoMoreData] = useState(false);
  const [offset, setOffset] = useState(0);
  const {flatlistData, addFlatlistRefreshItem, addFlatlistLoadMoreItem} = useDemoFlatlistData();
  const pendingAction = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPendingAction = () => {
    if (pendingAction.current) {
      clearTimeout(pendingAction.current);
    }
  };

  const beginRefresh = async () => {
    setRefreshing(true);
    pendingAction.current = setTimeout(() => {
      addFlatlistRefreshItem();
      endRefresh();
    }, 2000);
  };

  const endRefresh = () => {
    clearPendingAction();
    setRefreshing(false);
    setNoMoreData(false);
  };

  const loadMore = () => {
    setLoadingMore(true);
    pendingAction.current = setTimeout(() => {
      addFlatlistLoadMoreItem();
      endLoadMore();
    }, 3500);
  };

  const endLoadMore = () => {
    clearPendingAction();
    setLoadingMore(false);
    setNoMoreData(true);
  };

  return (
    <Tester style={{ flex: 1, marginTop: 30 }}>
        <Text style={{color:'#00',backgroundColor:'yellow'}}>偏移量：{offset}</Text>
        <PullToRefresh
          style={{height: '100%'}}
          header={<SpinnerPullToRefreshHeader refreshing={refreshing} onRefresh={
            beginRefresh
          } />}
          footer={<CustomPullToRefreshFooter refreshing={loadingMore} onRefresh={loadMore} noMoreData={noMoreData}
          callBack={(offset) => {
            console.log('refresh 触发了自定义回调 :'+offset);
            setOffset(offset);
          }}
          />}
          >
          <FlatListPage data={flatlistData} />
        </PullToRefresh>
    </Tester>
  );
}

export default CustomPullRefreshFlatList