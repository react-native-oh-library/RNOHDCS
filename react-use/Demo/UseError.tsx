import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useError } from "react-use";

 const UseErrorDemo = () => {
  const error = useError();

  const handleButtonClick = () => {
    try {
      throw new Error('这是一个测试错误！')
    } catch (err: any) {
      error(err);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleButtonClick}>
        <Text>点我触发错误</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UseErrorDemo