import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DraxListDemo2 = () => {
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
            <TestCase itShould="DraxList组件:flatListStyle(设置内部FlatList组件的样式-设置背景色为绿色)"
              tags={['C_API']}>
              <DraxList
                data={data}
                renderItemContent={renderItemContent}
                keyExtractor={(item) => item.id}
                reorderable
                flatListStyle={styles.flatListStyle}
              />
            </TestCase>
            <TestCase itShould="DraxList组件:flatListStyle(设置内部FlatList组件的样式-设置背景色为粉色)"
              tags={['C_API']}>
              <DraxList
                data={data}
                renderItemContent={renderItemContent}
                keyExtractor={(item) => item.id}
                reorderable
                flatListStyle={styles.flatListStyles}
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
});
export default DraxListDemo2;
