import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet,Image ,Text,Animated} from 'react-native';
import {
  PullToRefreshHeader,
  PullToRefreshHeaderProps,
  PullToRefreshStateChangedEvent,
  // PullToRefreshState,
  PullToRefreshStateIdle,
  PullToRefreshStateRefreshing,
  PullToRefreshOffsetChangedEvent
} from '@react-native-oh-tpl/pull-to-refresh';

function SpinnerPullToRefreshHeader(props: PullToRefreshHeaderProps) {
  const stateRef = useRef<number>(PullToRefreshStateIdle);
  const [animating, setAnimating] = useState(false);

  const onStateChanged = useCallback((event: PullToRefreshStateChangedEvent) => {
    const state = event.nativeEvent.state;
    console.log('refresh header onStateChanged state', state);
    stateRef.current = state;
    if (state === PullToRefreshStateIdle) {
      setAnimating(false);
    } else if (state === PullToRefreshStateRefreshing) {
      setAnimating(true);
    } else {
    //   HapticFeedback.trigger('effectClick');
    }
  }, []);
  const onOffsetChanged = useCallback((event: PullToRefreshOffsetChangedEvent) => {
    console.log('refresh header offset', event.nativeEvent.offset);
  }, []);

  return (
    <PullToRefreshHeader style={styles.header} {...props} onStateChanged={onStateChanged} onOffsetChanged={onOffsetChanged}>
      <Animated.View style={{ height: 50, width: '100%', justifyContent: "center", alignItems: 'center' }}>
          <Text style={{color:"red"}}>刷新头部（包裹的PullToRefreshHeader高度需要设置0）</Text>
       </Animated.View>
    </PullToRefreshHeader>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 0,
    width:'100%'
  },
  spinner: {
    transform: [{scale: 0.75}],
  },
});

export {SpinnerPullToRefreshHeader};
