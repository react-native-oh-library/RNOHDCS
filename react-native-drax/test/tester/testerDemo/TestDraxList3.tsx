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

const DraxListDemo3 = () => {
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
          itShould="DraxList组件:itemStyles(设置内部FlatList组件内部item项的样式-增加Item项绿色边框)"
          tags={['C_API']}>
          <View style={{height: 800}}>
            <DraxListBaseComponent
              data={alphabet}
              itemStyles={{style: styles.itemStyles}}></DraxListBaseComponent>
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
  itemStyles: {
    borderWidth: 2,
    borderColor: '#0f0',
  },
});
export default DraxListDemo3;
