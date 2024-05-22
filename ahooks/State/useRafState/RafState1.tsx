/**
 * title: Default usage
 *
 * title.zh-CN: 基础用法
 */

import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useRafState } from 'ahooks';

export function RafState1(){
  const [state, setState] = useRafState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      });
    };

    onResize();

    const subscription = Dimensions.addEventListener('change', onResize);

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View>
      <Text>Try to resize the window</Text>
      <Text>current: {JSON.stringify(state)}</Text>
    </View>
  );
};
