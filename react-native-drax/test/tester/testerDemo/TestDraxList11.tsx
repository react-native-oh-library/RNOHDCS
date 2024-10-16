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

const DraxListDemo11 = () => {
  const [result, setResult] = useState('');
  const resetBtn = () => {
    setResult('');
  };
  const onItemReorderHandler = data => {
    setResult('onItemReorder回调方法已执行,参数：' + JSON.stringify(data));
  };
  const viewPropsExtractor = data => {
    return {
      style: {
        backgroundColor: data == 'B' ? 'green' : 'red',
      },
    };
  };
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <>
      <Tester children={undefined}>
        <TestCase
          itShould="DraxList组件:viewPropsExtractor(根据每一个Item的数据设置对应的Item样式-设置B项的背景色为绿色，其他item项为红色)"
          tags={['C_API']}>
          <View style={{height: 800}}>
            <DraxListBaseComponent
              data={alphabet}
              reorderable={true}
              viewPropsExtractor={viewPropsExtractor}></DraxListBaseComponent>
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
  inputArea: {
    width: '100%',
    height: 80,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  resetBtn: {
    width: '100%',
    height: 32,
    lineHeight: 32,
  },
  baseText: {
    width: '100%',
    height: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});
export default DraxListDemo11;
