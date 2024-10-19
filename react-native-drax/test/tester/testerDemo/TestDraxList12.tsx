import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DraxListDemo12 = () => {
  const [result, setResult] = useState('');
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

  const resetBtn = () => {
    setResult('');
  };

  const onScroll = ()=>{
    setResult('滑动执行')
  }

  return (
    <DraxProvider>
      <GestureHandlerRootView>
        <View style={styles.container}>
        <View style={styles.inputArea}>
            <Text style={styles.baseText}>{result}</Text>
            <Button
              style={styles.resetBtn}
              title="重置"
              onPress={resetBtn}></Button>
          </View>
          <Tester>
            <TestCase itShould="DraxList组件:onScroll(滑动执行的回调)"
              tags={['C_API']}>
              <DraxList
                data={data}
                renderItemContent={renderItemContent}
                keyExtractor={(item) => item.id}
                reorderable
                onScroll={onScroll}
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
    width: "100%",
    backgroundColor: '#fff',
    height: 800
  },
  item: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    borderColor: 'blue',
    borderWidth: 1
  },
  itemText: {
    fontSize: 16,
  },
  flatListStyle: {
    backgroundColor: '#0f0',
  },
  renderItemHoverContent: {
    backgroundColor: '#0f0',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    borderColor: 'red',
    borderWidth: 1
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
export default DraxListDemo12;
