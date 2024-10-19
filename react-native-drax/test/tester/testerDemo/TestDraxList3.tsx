import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DraxListDemo3 = () => {
  const [result, setResult] = useState('');
  const onDragEnterHandler = ({ receiver }) => {
    setResult(
      'onDragEnter回调接收到绿色正方形传递的receiverPayload:' +
      JSON.stringify(receiver.payload),
    );
  };

  const [data, setData] = useState([
    { id: '1', text: 'Task 1' },
    { id: '2', text: 'Task 2' },
    { id: '3', text: 'Task 3' },
    { id: '4', text: 'Task 4' },
  ]);

  const renderItemContent = ({ item }) => (
    <DraxView style={styles.item}>
      <Text style={styles.itemText}>{item.text}</Text>
    </DraxView>
  );

  return (
    <DraxProvider>
      <GestureHandlerRootView>
          <View style={styles.container}>
          <Tester>
            <TestCase itShould="DraxList组件:itemStyles(设置内部FlatList组件内部item项的样式-增加Item项绿色边框)"

              tags={['C_API']}>
              <DraxList
                data={data}
                renderItemContent={renderItemContent}
                keyExtractor={(item) => item.id}
                reorderable
                itemStyles={{style:styles.itemStyles}}
              />
            </TestCase>
            <TestCase itShould="DraxList组件:itemStyles(设置内部FlatList组件内部item项的样式-增加Item项粉色边框)"

              tags={['C_API']}>
              <DraxList
                data={data}
                renderItemContent={renderItemContent}
                keyExtractor={(item) => item.id}
                reorderable
                itemStyles={{style:styles.itemStyle}}
              />
            </TestCase>
            </Tester>
          </View>
      </GestureHandlerRootView>
    </DraxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    backgroundColor: '#fff',
    height: 800
  },
  item: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '100%',
  },
  itemText: {
    fontSize: 16,
  },
  flatListStyle: {
    backgroundColor: '#0f0',
  },
  flatListStyles: {
    backgroundColor: 'pink',
  },
  itemStyles: {
    borderWidth: 2,
    borderColor: '#0f0',
  },
  itemStyle: {
    borderWidth: 2,
    borderColor: 'pink',
  },
});
export default DraxListDemo3;
