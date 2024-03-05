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
import MJRefresh from 'react-native-mjrefresh'

export const MjRefreshDemo = ()=> {
    const [state, setState] = useState<{
        message?: string
      }>({
        message: ''
      })
    const { message } = state

  return (
    <View>
      <MJRefresh style={{width:'100%',height:'80%'}} 
            onRefresh={()=>{
              setState({ message: '正在刷新' })
              console.log("------------onRefresh")
            }} 
            onRefreshIdle={()=>{
              setState({ message: '下拉刷新' })
              console.log("------------onRefreshIdle")
            }}  
            onReleaseToRefresh={()=>{
              setState({ message: '释放刷新' })
              console.log("------------onReleaseToRefresh")
            }}  
            onPulling={()=>{
              setState({ message: '下拉刷新' })
              console.log("------------onPulling")
            }}>
            </MJRefresh>
        
        <Text>Refresh State:{message}</Text>
    </View>
  );
}

