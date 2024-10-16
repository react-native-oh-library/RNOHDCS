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

const DraxViewDemo28 = () => {
  const [result, setResult] = useState('');
  const onDragEnterHandler = ({receiver}) => {
    setResult(
      'onDragEnter回调接收到绿色正方形传递的receiverPayload:' +
        JSON.stringify(receiver.payload),
    );
  };

  return (
    <>
      <Tester children={undefined}>
        <TestCase
          itShould="DraxView组件:longPressDelay(设置视图识别长按手势的最小时间，单位为毫秒,默认值250-设置0不用长按就识别为长按手势)"
          tags={['C_API']}>
          <View style={{height: 300}}>
            <DraxViewBaseComponent
              draggingStyle={styles.draggingStyle}
              longPressDelay={0}
              receiverPayload={'receiverPayload'}
              onDragEnter={onDragEnterHandler}></DraxViewBaseComponent>
          </View>
        </TestCase>
        <TestCase
          itShould="DraxView组件:longPressDelay(设置视图识别长按手势的最小时间，单位为毫秒,默认值250)"
          tags={['C_API']}>
          <View style={{height: 300}}>
            <DraxViewBaseComponent
              draggingStyle={styles.draggingStyle}
              longPressDelay={250}
              receiverPayload={'receiverPayload'}
              onDragEnter={onDragEnterHandler}></DraxViewBaseComponent>
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
  dragInactiveStyle: {
    borderWidth: 2,
    borderColor: 'red',
  },
  draggingStyle: {
    borderWidth: 2,
    borderColor: 'green',
  },
  redText: {
    fontSize: 24,
    color: 'red',
  },
  yellowText: {
    fontSize: 24,
    color: 'yellow',
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
    height: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});
export default DraxViewDemo28;
