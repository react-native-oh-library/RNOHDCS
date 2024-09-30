import {Text, View} from 'react-native';
import React from 'react';

export const RenderFooter = () => {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: '#00ffff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>我是底部</Text>
    </View>
  );
};

export default RenderFooter;
