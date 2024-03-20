import React from 'react';
import { View, Text, Button } from 'react-native';
import { useUnmount } from 'react-use';

const Child = () => {
  useUnmount(() => {
    console.log('组件销毁了')
  })
  return <Text>我是子组件</Text>
}

const UseUnmountDemo = () => {
  const [showChild, setShowChild] = React.useState(true);
  const [test, setText] = React.useState('销毁');

  return (
    <View>
      <Text>{showChild && <Child />}</Text>
      <Button title={`点击${test}子组件`} onPress={() => { setShowChild(!showChild); setText(showChild ? '创建' : '销毁') }} />
    </View>
  )
};

export default UseUnmountDemo;