import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, RefreshControl, Alert } from 'react-native';
import WaterfallFlow from 'react-native-waterfall-flow';

const WaterfallFlowExample = () => {
  const item = ['Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'].map((l, i) => ({ id: l, text: i + ` ${l}` }))
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
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
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
    padding: 10,
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

export default WaterfallFlowExample;