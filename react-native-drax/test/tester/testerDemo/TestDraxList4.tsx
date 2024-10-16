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
import DraxListBaseComponent from './components/DraxListBaseComponent';

const DraxListDemo4 = () => {
  const [result, setResult] = useState('');
  const onDragEnterHandler = ({receiver}) => {
    setResult(
      'onDragEnter回调接收到绿色正方形传递的receiverPayload:' +
        JSON.stringify(receiver.payload),
    );
  };
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <>
      <Tester children={undefined}>
        <TestCase
          itShould="DraxList组件:renderItemContent(设置内部FlatList组件内部Item项的渲染函数)默认组件使用renderItemContent渲染方法颜色按照(红、绿、蓝、黄、粉、蓝)渲染ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          tags={['C_API']}>
          <View style={{height: 800}}>
            <DraxListBaseComponent data={alphabet}></DraxListBaseComponent>
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
  flatListStyle: {
    backgroundColor: '#0f0',
  },
});
export default DraxListDemo4;
