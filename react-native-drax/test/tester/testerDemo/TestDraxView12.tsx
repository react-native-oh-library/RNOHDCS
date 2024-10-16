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
import DraxViewBaseComponent from './components/DraxViewBaseComponent';

const DraxViewDemo12 = () => {
  const [result, setResult] = useState('');
  const onReceiveDragEnterHandler = ({dragged: {payload}}) => {
    setResult('onReceiveDragEnter回调执行时接收到payload参数:' + payload);
  };

  const onReceiveDragOverHandler = ({dragged: {payload}}) => {
    setResult('onReceiveDragOver回调已执行,接收到payload参数:' + payload);
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
          itShould="DraxView组件:payload(手指拖动蓝色正方形进入绿色正方形正上方然后释放,此时绿色正方形接收到传递的payload参数'hello')"
          tags={['C_API']}>
          <View style={{height: 260}}>
            <DraxViewBaseComponent
              payload={'hello'}
              onReceiveDragEnter={
                onReceiveDragEnterHandler
              }></DraxViewBaseComponent>
          </View>
        </TestCase>
        <TestCase
          itShould="DraxView组件:dragPayload与payload(手指拖动蓝色正方形悬浮在绿色正方形正上方时,此时绿色正方形接收到传递的dragPayload(值为'hi'覆盖payload的值'hello'))"
          tags={['C_API']}>
          <View style={{height: 260}}>
            <DraxViewBaseComponent
              payload={'hello'}
              dragPayload={'hi'}
              onReceiveDragOver={
                onReceiveDragOverHandler
              }></DraxViewBaseComponent>
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
export default DraxViewDemo12;
