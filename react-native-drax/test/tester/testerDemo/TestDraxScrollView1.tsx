import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import DraxScrollViewBaseComponent from './components/DraxScrollViewBaseComponent';

const DraxScrollViewDemo1 = () => {
  const [result, setResult] = useState('');
  const onDragEnterHandler = ({receiver}) => {
    setResult(
      'onDragEnter回调接收到绿色正方形传递的receiverPayload:' +
        JSON.stringify(receiver.payload),
    );
  };
  return (
    <>
      <Tester children={undefined}>
        <TestCase
          itShould="DraxScrollView组件:children(基准组件包含1、2、3、4四个子组件)"
          tags={['C_API']}>
          <View style={{height: 800}}>
            <DraxScrollViewBaseComponent></DraxScrollViewBaseComponent>
          </View>
        </TestCase>
      </Tester>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
export default DraxScrollViewDemo1;
