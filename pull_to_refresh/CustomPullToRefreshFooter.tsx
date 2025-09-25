import {
    PullToRefreshFooter,
    PullToRefreshFooterProps,
    PullToRefreshStateChangedEvent,
    PullToRefreshOffsetChangedEvent,
    PullToRefreshStateIdle,
    PullToRefreshStateRefreshing,
  } from '@sdcx/pull-to-refresh'
  import React, {useCallback, useRef, useState} from 'react';
  import {StyleSheet,Image ,Text,Animated} from 'react-native';

  export function CustomPullToRefreshFooter(props: PullToRefreshFooterProps) {
    const { onRefresh, refreshing, noMoreData } = props
  
    const [text, setText] = useState('上拉加载更多')
  
    const onStateChanged = useCallback((event: PullToRefreshStateChangedEvent) => {
      const state = event.nativeEvent.state
      console.log('refresh footer state', event.nativeEvent.state)
      if (state === PullToRefreshStateIdle) {
        setText('上拉加载更多')
      } else if (state === PullToRefreshStateRefreshing) {
        setText('正在加载更多...')
      } else {
        setText('松开加载更多')
      }
    }, [])
  
    const onOffsetChanged = useCallback((event: PullToRefreshOffsetChangedEvent) => {
      console.log('refresh footer offset11', event.nativeEvent.offset)
    }, [])
  
    return (
      <PullToRefreshFooter
        style={styles.container}
        manual={true /* 设置模式为手动 */}
        onOffsetChanged={onOffsetChanged}
        onStateChanged={onStateChanged}
        onRefresh={onRefresh}
        refreshing={refreshing}
        noMoreData={noMoreData}>
        <Animated.View style={{ height: 50, width: '100%', justifyContent: "center", alignItems: 'center' }}>
          <Text style={styles.text}>{noMoreData ? '没有更多数据了' : text}</Text>
       </Animated.View>
      
      </PullToRefreshFooter>
    )
  }
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height: 0,
    },
    text: {
      color:'red'
    },
  });