import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, RefreshControl, Alert, Image, ScrollView } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino'
import WaterfallFlow from 'react-native-waterfall-flow';

const WaterfallFlowTestCase = () => {
  const item = ['Item', 'ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem', 'ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem', 'Item', 'ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem', 'Item', 'ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem', 'Item', 'Item', 'ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem', 'Item', 'Item', 'ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem', 'Item', 'Item', 'ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem', 'Item', 'Item', 'Item', 'Item', 'ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'].map((l, i) => ({ id: l, text: i + ` ${l}` }))
  const [data, setData] = useState(item);
  const [refreshing, setRefreshing] = useState(false);
  const waterfallRef = useRef(null);

  const renderItem = ({ item }) => {

    return (
      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>
    );
  }

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      // 模拟刷新数据
      setData([...item]);
      setRefreshing(false);
    }, 2000);
  };

  const onEndReached = () => {
    // 模拟加载更多数据
    setData([...data, { id: `${data.length + 1}`, text: `${data.length + 1} Item` }, { id: `${data.length + 2}`, text: `${data.length + 2} Item` }]);
    // Alert.alert('滚动到底部')
  };

  return (
    <ScrollView>
      <Tester style={{ flex: 1 }}>
        <TestSuite name='WaterfallFlow'>
          <TestCase itShould='WaterfallFlow'>
            <View style={styles.container}>
              <View style={{ height: 300 }}>
                <WaterfallFlow
                  ref={waterfallRef}
                  renderItem={renderItem}
                  data={data}
                  numColumns={2}
                  ListHeaderComponent={<Text style={styles.header}>Header Component</Text>}
                  ListFooterComponent={<Text style={styles.footer}>Footer Component</Text>}
                  ListEmptyComponent={<Text style={styles.empty}>No Data Available</Text>}
                  onEndReached={onEndReached}
                  onRefresh={onRefresh}
                  refreshing={refreshing}
                  style={styles.waterfall}
                  contentContainerStyle={styles.contentContainer}
                  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                />
              </View>
              <View style={styles.buttonsContainer}>
                <Button
                  title="ScrollEnd"
                  onPress={() => waterfallRef.current.scrollToEnd({ animated: true })}
                />
                <Button
                  title="ScrollIndex"
                  onPress={() => { data.length >= 20 ? waterfallRef.current.scrollToIndex({ animated: true, index: 20, viewPosition: 0 }) : false }}
                />
                <Button
                  title="Offset"
                  onPress={() => waterfallRef.current.scrollToOffset({ offset: 0 })}
                />
              </View>
              <View style={styles.buttonDelete}>
                <Button
                  title="Delete Data"
                  onPress={() => { setData([]) }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='renderItem & data'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={data}
              />
            </View>
          </TestCase>

          <TestCase itShould='numColumns'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={data}
                numColumns={3}
              />
            </View>
          </TestCase>

          <TestCase itShould='ListHeaderComponent'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={data}
                ListHeaderComponent={<Text style={styles.header}>Header Component</Text>}
              />
            </View>
          </TestCase>

          <TestCase itShould='ListFooterComponent'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={data}
                ListFooterComponent={<Text style={styles.footer}>Footer Component</Text>}
              />
            </View>
          </TestCase>

          <TestCase itShould='ListEmptyComponent'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={[]}
                ListEmptyComponent={<Text style={styles.empty}>No Data Available</Text>}
              />
            </View>
          </TestCase>

          <TestCase itShould='onEndReached'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={data}
                onEndReached={onEndReached}
              />
            </View>
          </TestCase>

          <TestCase itShould='refreshing & refreshing'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={data}
                onRefresh={onRefresh}
                refreshing={refreshing}
              />
            </View>
          </TestCase>

          <TestCase itShould='style'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={data}
                style={{ backgroundColor: 'pink' }}
              />
            </View>
          </TestCase>

          <TestCase itShould='contentContainerStyle'>
            <View style={{ height: 200 }}>
              <WaterfallFlow
                renderItem={renderItem}
                data={data}
                contentContainerStyle={{ backgroundColor: 'yellow' }}
              />
            </View>
          </TestCase>

          <TestCase itShould='scrollToEnd & scrollToIndex & scrollToOffset'>
            <View style={styles.container}>
              <View style={{ height: 400 }}>
                <WaterfallFlow
                  ref={waterfallRef}
                  renderItem={renderItem}
                  data={data}
                />
              </View>
              <View style={{padding: 10}}>
                <Button
                  title="ScrollEnd 滚动到瀑布流列表的底部"
                  onPress={() => waterfallRef.current.scrollToEnd({ animated: true })}
                />
                 <Button
                  title="ScrollIndex 滚动到可视区的指定位置 index20位置"
                  onPress={() => { waterfallRef.current.scrollToIndex({ animated: true, index: 20, viewPosition: 0 })}}
                />
                <Button
                  title="Offset 滚动列表到指定的偏移（以像素为单位）Offset：0（顶部）"
                  onPress={() => waterfallRef.current.scrollToOffset({ offset: 0 })}
                />
              </View>
            </View>
          </TestCase>

        </TestSuite>
      </Tester>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  waterfall: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFF'
  },
  item: {
    backgroundColor: '#ccc',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  header: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  footer: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  empty: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  buttonDelete: {
    marginBottom: 20
  }
});

export default WaterfallFlowTestCase;