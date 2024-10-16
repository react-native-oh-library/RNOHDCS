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

const DraxViewDemo25 = () => {
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const onDragEnterHandler = ({receiver}) => {
    setResult1(
      'onDragEnter回调接收到绿色正方形传递的receiverPayload:' +
        JSON.stringify(receiver.payload),
    );
  };

  const handleRegistration = e => {
    setResult1('registration回调接收到的参数:' + JSON.stringify(e));
  };
  const handleOnMeasure = e => {
    setResult2('onMeasure回调接收到的参数:' + JSON.stringify(e));
  };

  return (
    <>
      <View style={styles.inputArea}>
        <Text style={styles.baseText}>{result1}</Text>
        <Text style={styles.baseText}>{result2}</Text>
      </View>
      <Tester children={undefined}>
        <TestCase
          itShould="DraxView组件:registration回调,回调参数可以接收到蓝色正方形组件内部传递的数据"
          tags={['C_API']}>
          <View style={{height: 260}}>
            <DraxViewBaseComponent
              draggingStyle={styles.draggingStyle}
              registration={handleRegistration}
              receiverPayload={'receiverPayload'}
              onDragEnter={onDragEnterHandler}></DraxViewBaseComponent>
          </View>
        </TestCase>
        <TestCase
          itShould="DraxView组件:onMeasure回调,回调参数可以接收到蓝色正方形组件内部传递的数据"
          tags={['C_API']}>
          <View style={{height: 260}}>
            <DraxViewBaseComponent
              draggingStyle={styles.draggingStyle}
              onMeasure={handleOnMeasure}
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
export default DraxViewDemo25;
