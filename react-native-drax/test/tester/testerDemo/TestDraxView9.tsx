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
import DraxViewBaseTestMonitor from './components/DraxViewBaseTestMonitor';

const DraxViewDemo9 = () => {
  const [result, setResult] = useState('');

  const onMonitorDragStartHandler = eventData => {
    setResult(
      'onMonitorDragStart回调已执行,参数eventData:' + JSON.stringify(eventData),
    );
  };
  const onReceiveDragDropHandler = ({dragged: {payload}}) => {
    setResult('onReceiveDragDrop回调已执行,接收到payload参数:' + payload);
  };

  const onMonitorDragDropHandler = eventData => {
    setResult(
      'onMonitorDragDrop回调已执行,参数eventData:' + JSON.stringify(eventData),
    );
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
          itShould="DraxView组件:onMonitorDragStart(拖动蓝色正方形此时检测到拖拽开始)"
          tags={['C_API']}>
          <View style={{height: 230}}>
            <DraxViewBaseTestMonitor
              payload={'hello'}
              onMonitorDragStart={
                onMonitorDragStartHandler
              }></DraxViewBaseTestMonitor>
          </View>
        </TestCase>
        <TestCase
          itShould="DraxView组件:onMonitorDragDrop(拖动蓝色正方形进入绿色正方形然后丢掉此时检测到释放)"
          tags={['C_API']}>
          <View style={{height: 230}}>
            <DraxViewBaseTestMonitor
              payload={'hello'}
              onReceiveDragDrop={onReceiveDragDropHandler}
              onMonitorDragDrop={
                onMonitorDragDropHandler
              }></DraxViewBaseTestMonitor>
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
    height: 120,
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
    height: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});
export default DraxViewDemo9;
