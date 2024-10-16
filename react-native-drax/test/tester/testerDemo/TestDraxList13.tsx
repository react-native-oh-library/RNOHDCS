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

const DraxListDemo13 = () => {
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
          itShould="DraxList组件:itemsDraggable(是否允许FlatList组件内部Item项可以拖拽（默认值为true）-设置itemsDraggable属性值为false)"
          tags={['C_API']}>
          <View style={{height: 800}}>
            <DraxListBaseComponent
              data={alphabet}
              itemsDraggable={false}></DraxListBaseComponent>
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
export default DraxListDemo13;
