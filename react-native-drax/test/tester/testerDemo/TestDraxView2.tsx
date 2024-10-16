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
import DraxViewComponents from './components/DraxViewComponents';

const DraxViewDemo2 = () => {
  const [result, setResult] = useState('');

  const onDragEnterHandler = () => {
    setResult('onDragEnter回调已执行');
  };

  const onDragOverHandler = () => {
    setResult('onDragOver回调已执行');
  };
  const resetBtn = () => {
    setResult('');
  };

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
          itShould="DraxView组件:onDragEnter(手指拖动蓝色正方形进入绿色正方形范围)"
          tags={['C_API']}>
          <View style={{height: 260}}>
            <DraxViewComponents
              onDragEnter={onDragEnterHandler}></DraxViewComponents>
          </View>
        </TestCase>
        <TestCase
          itShould="DraxView组件:onDragOver(手指拖动蓝色正方形到绿色正方形上方)"
          tags={['C_API']}>
          <View style={{height: 260}}>
            <DraxViewComponents
              onDragOver={onDragOverHandler}></DraxViewComponents>
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
  accordion: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  listStyle: {
    borderTopWidth: 5,
    borderTopColor: 'red',
    height: 100,
    backgroundColor: 'purple',
    borderBottomColor: 'red',
    borderBottomWidth: 5,
  },
  headerStyle: {
    backgroundColor: '#5E72E4',
    padding: 10,
    borderTopWidth: 5,
    borderTopColor: 'red',
  },
  contentStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: 'purple',
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
export default DraxViewDemo2;
