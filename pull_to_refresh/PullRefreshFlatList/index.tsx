// import {withNavigationItem} from 'hybrid-navigation';
import React, {useRef, useState} from 'react';
import {PullToRefresh} from '@sdcx/pull-to-refresh';
import {FlatListPage, useDemoFlatlistData} from './FlatListPage';
import {SpinnerPullToRefreshHeader} from '../SpinnerPullToRefreshHeader';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
import {CustomPullToRefreshFooter} from '../CustomPullToRefreshFooter'
function PullRefreshFlatList() {
  const [refreshing, setRefreshing] = useState(true);
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
          header={<SpinnerPullToRefreshHeader refreshing={refreshing} onRefresh={
            beginRefresh
          } />}
          footer={<CustomPullToRefreshFooter refreshing={loadingMore} onRefresh={loadMore} />}
          >
          <FlatListPage data={flatlistData} />
        </PullToRefresh>
    </Tester>
  );
}

export default PullRefreshFlatList;
