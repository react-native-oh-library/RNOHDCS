/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { MJRefreshControl } from 'react-native-mjrefresh'

export const MjRefreshDemo = () => {

  const [state, setState] = useState<{
    message?: string
  }>({
    message: ''
  })
  const { message } = state
  let mjRefreshRef: React.RefObject<MJRefreshControl>;
  return (
    <View>
      <MJRefreshControl style={{ width: '100%', height: '80%' }}
        ref={(ref) => this.mjRefreshRef = ref}
        onRefresh={() => {
          setState({ message: '正在刷新' })
          console.log("------------onRefresh")
          // 开始刷新
          this.mjRefreshRef.beginRefresh()
          // 自定义刷新结束事件
          setTimeout(() => {
            console.log("------------ Finish Refresh")
            // 结束刷新
            this.mjRefreshRef.finishRefresh()
          }, 2000)
        }}
        onRefreshIdle={() => {
          setState({ message: '下拉刷新' })
          console.log("------------onRefreshIdle")
        }}
        onReleaseToRefresh={() => {
          setState({ message: '释放刷新' })
          console.log("------------onReleaseToRefresh")
        }}
        onPulling={() => {
          setState({ message: '下拉刷新' })
          console.log("------------onPulling")
        }}>
      </MJRefreshControl>

      <Text>Refresh State:{message}</Text>
    </View>
  );
}