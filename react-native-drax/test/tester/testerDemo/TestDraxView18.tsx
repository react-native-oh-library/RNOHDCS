import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import DraxViewBaseComponent from './components/DraxViewBaseComponent';

const DraxViewDemo18 = () => {
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
          itShould="DraxView组件:hoverDraggingWithReceiverStyle(拖动蓝色正方形进入绿色正方形正上方时应用于复制蓝色正方形的样式-粉色边框)"
          tags={['C_API']}>
          <View style={{height: 260}}>
            <DraxViewBaseComponent
              dragInactiveStyle={styles.dragInactiveStyle}
              hoverDraggingWithReceiverStyle={
                styles.hoverDraggingWithReceiverStyle
              }
              receiverPayload={'receiverPayload'}
              onDragEnter={onDragEnterHandler}></DraxViewBaseComponent>
          </View>
        </TestCase>
        <TestCase
          itShould="DraxView组件:hoverDraggingWithoutReceiverStyle(拖动蓝色正方形未进入绿色正方形正上方时应用于复制蓝色正方形的样式-黄色边框)"
          tags={['C_API']}>
          <View style={{height: 260}}>
            <DraxViewBaseComponent
              dragInactiveStyle={styles.dragInactiveStyle}
              hoverDraggingWithoutReceiverStyle={
                styles.hoverDraggingWithoutReceiverStyle
              }
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
  hoverDraggingWithReceiverStyle: {
    borderWidth: 2,
    borderColor: 'pink',
  },
  hoverDraggingWithoutReceiverStyle: {
    borderWidth: 2,
    borderColor: 'yellow',
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
export default DraxViewDemo18;
