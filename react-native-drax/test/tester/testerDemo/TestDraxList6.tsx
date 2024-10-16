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

const DraxListDemo6 = () => {
  const [result, setResult] = useState('');
  const resetBtn = () => {
    setResult('');
  };
  const onItemDragStartHandler = data => {
    setResult('onItemDragStart回调方法已执行,参数：' + JSON.stringify(data));
  };
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <>
      <View style={styles.inputArea}>
        <Text style={styles.baseText}>{result}</Text>
        <Button
          style={styles.resetBtn}
          title="重置"
          onPress={resetBtn}></Button>
      </View>
      <Tester children={undefined}>
        <TestCase
          itShould="DraxList组件:onItemDragStart(当组件内部item项开始拖动时执行回调)"
          tags={['C_API']}>
          <View style={{height: 800}}>
            <DraxListBaseComponent
              data={alphabet}
              onItemDragStart={onItemDragStartHandler}></DraxListBaseComponent>
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
export default DraxListDemo6;
