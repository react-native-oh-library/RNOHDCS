import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Animated } from 'react-native';

import { SmartRefreshControl, AnyHeader } from '@react-native-oh-tpl/react-native-smartrefreshlayout/src/index';

const SmartRefreshLayoutAutoRefreshExample = () => {
  const [headerHeight, setHeaderHeight] = useState(69);
  const [color, setColor] = useState('#ff0000');
  const [scaleValue, setScaleSize] = useState(new Animated.Value(0.1));
  const generateArray = (size: number) => {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = { id: i, text: `Item ${i}` }
    }
    return arr;
  };
  const [data, setData] = useState(generateArray(100));

  const ItemView = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText} onPress={() => {
      }}>{item.text}</Text>
    </View>
  );
  let smartRefreshControlRef: React.RefObject<SmartRefreshControl> = useRef(null);
  return (
    <View >
      <SmartRefreshControl
        ref={smartRefreshControlRef}
        primaryColor={color}
        autoRefresh={{ 'refresh': true, 'time': 1000 }}
        headerHeight={headerHeight}
        style={{ height: '100%', width: '100%', backgroundColor: '#ffffff' }}
        onReleaseToRefresh={e => {
          console.log("Smart RN onReleaseToRefresh")
        }}
        onRefresh={() => {
          console.log("Smart RN onRefresh")
          setTimeout(() => {
            smartRefreshControlRef.current.finishRefresh({ delayed: -1, success: true });
          }, 5000);
        }}
        onHeaderReleasing={(data: any) => {
          console.log("Smart RN onHeaderReleasing:" + JSON.stringify(data.nativeEvent))
        }}
        onHeaderPulling={(data: any) => {
          console.log("Smart RN onHeaderPulling" + JSON.stringify(data.nativeEvent))
        }}
        onPullDownToRefresh={() => {
          console.log("Smart RN onPullDownToRefresh")
        }}
        onHeaderReleased={() => {
          console.log("Smart RN onHeaderReleased")
        }}
        onHeaderMoving={(data: any) => {
          const { percent, offset } = data.nativeEvent;
          if (percent <= 1) {
            Animated.timing(scaleValue, {
              toValue: percent * 1.8,
              useNativeDriver: true,
              duration: 0,
            }).start();
          }
          else {
            Animated.timing(scaleValue, {
              toValue: 1.8,
              useNativeDriver: true,
              duration: 0,
            }).start();
          }
        }}
        HeaderComponent={

          <AnyHeader style={{ height: 0 }}>
            <Animated.View style={{
              height: 69,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "green",
              transform: [{ scale: scaleValue }],
            }}>
              <Image source={require("./img/load.gif")} style={{ width: 20, height: 20 }}></Image>
            </Animated.View>
          </AnyHeader>

        }>
        <FlatList
          style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#ffffff' }}
          data={data}
          renderItem={({ item }) => <ItemView item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </SmartRefreshControl>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SmartRefreshLayoutAutoRefreshExample;