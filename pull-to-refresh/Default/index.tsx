// import {withNavigationItem} from 'hybrid-navigation';
import React, {useRef, useState} from 'react';
import {PullToRefresh} from '@react-native-oh-tpl/pull-to-refresh';
import {FlatListPage, useDemoFlatlistData} from '../FlatListPage';
import {SpinnerPullToRefreshHeader} from '../SpinnerPullToRefreshHeader';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
import {CustomPullToRefreshFooter} from '../CustomPullToRefreshFooter'
function DefaultListPage() {
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(true);
  const [noMoreData, setNoMoreData] = useState(false);
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
        <PullToRefresh
          style={{height: '100%'}}
          refreshing={refreshing}
          onRefresh={beginRefresh}
          loadingMore={loadingMore}
          noMoreData={noMoreData}
          onLoadMore={loadMore}>

          <FlatListPage data={flatlistData} />
        </PullToRefresh>
    </Tester>
  );
}
export default DefaultListPage
