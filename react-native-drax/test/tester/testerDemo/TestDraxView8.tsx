import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import DraxViewBaseComponent from './components/DraxViewBaseComponent';

const DraxViewDemo8 = () => {
  const [result, setResult] = useState('');
  const onMonitorDragOverHandler = eventData => {
    setResult('onMonitorDragOver回调已执行,参数eventData:' + JSON.stringify(eventData));
  };

  const onMonitorDragExitHandler = eventData => {
    setResult('onMonitorDragExit回调已执行,参数eventData:' + JSON.stringify(eventData));
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
          itShould="DraxView组件:onMonitorDragOver(手指拖动蓝色正方形到绿色正方形上方，检测到悬浮时，执行回调)"
          tags={['C_API']}>
          <View style={{height: 230}}>
            <DraxViewBaseComponent
              payload={'hello'}
              onMonitorDragOver={
                onMonitorDragOverHandler
              }></DraxViewBaseComponent>
          </View>
        </TestCase>
        <TestCase
          itShould="DraxView组件:onMonitorDragExit(手指拖动蓝色正方形进入绿色正方形然后离开，检测到离开，执行回调)"
          tags={['C_API']}>
          <View style={{height: 230}}>
            <DraxViewBaseComponent
              payload={'hello'}
              onMonitorDragExit={
                onMonitorDragExitHandler
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
    height: 100,
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
export default DraxViewDemo8;
