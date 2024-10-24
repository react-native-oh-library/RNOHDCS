import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import DraxViewBaseComponent from './components/DraxViewBaseComponent';



const DraxViewDemo7 = () => {
  const [result, setResult] = useState('');

  const onMonitorDragEndHandler = eventData => {
    setResult('onMonitorDragEnd回调已执行,参数eventData:' + JSON.stringify(eventData));
  };
  const onMonitorDragEnterHandler = eventData => {
    setResult('onMonitorDragEnter回调已执行,参数eventData:' + JSON.stringify(eventData));
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
          itShould="DraxView组件:onMonitorDragEnd(手指拖动蓝色正方形进入绿色正方形然后停止，检测到停止时，执行回调)"
          tags={['C_API']}>
          <View style={{height: 230}}>
            <DraxViewBaseComponent
              payload={'hello'}
              onMonitorDragEnd={
                onMonitorDragEndHandler
              }></DraxViewBaseComponent>
          </View>
        </TestCase>
        <TestCase
          itShould="DraxView组件:onMonitorDragEnter(手指拖动蓝色正方形进入绿色正方形，检测到进入，执行回调)"
          tags={['C_API']}>
          <View style={{height: 230}}>
            <DraxViewBaseComponent
              payload={'hello'}
              onMonitorDragEnter={
                onMonitorDragEnterHandler
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
    height: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});
export default DraxViewDemo7;
