import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, RefreshControl, Animated, TextInput } from 'react-native';

import { SmartRefreshControl, AnyHeader, DefaultHeader, ClassicsHeader, MeaterialHeader } from 'react-native-smartrefreshlayout';

const App = () => {
  const [text, setText] = useState('刷新时间');
  const [headerHeight, setHeaderHeight] = useState(69);
  const [anyheaderHeight, setAnyHeaderHeight] = useState(0);

  const [imgHeight, setImgHeight] = useState(0.0);
  const [color, setColor] = useState('#ffff00');
  const [color1, setColor1] = useState('#ffff00');
  const generateArray = (size: number) => {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = { id: i, text: `Item ${i}` }
    }
    return arr;
  };
  const [data, setData] = useState(generateArray(100));

  const onLoadMore = () => {
    // Simulate loading more data
    setTimeout(() => {
      setData([
        ...data,
        { id: data.length + 1, text: `New Item ${data.length + 1}` },
        // ... more loaded data ...
      ]);
    }, 1000);
  };

  const ItemView = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText} onPress={() => {
        console.log("smartLayout itemText:" + item.text)
      }}>{item.text}</Text>
    </View>
  );
  let smartRefreshControlRef: React.RefObject<SmartRefreshControl> = useRef(null);
  return (
    <View >
      <SmartRefreshControl
        ref={smartRefreshControlRef}
        primaryColor={color}
        autoRefresh={{ 'refresh': false, 'time': 5000 }}
        headerHeight={headerHeight}
        style={{ height: '100%', width: '100%', backgroundColor: '#ffffff' }}
        onReleaseToRefresh={e => {
          console.log("smartLayout RN onReleaseToRefresh:" + JSON.stringify(e.nativeEvent))
        }}
        onRefresh={() => {
          setText('时间：' + new Date().getTime() + 'onRefresh触发刷新');
          setTimeout(() => {
            smartRefreshControlRef.current.finishRefresh({ delayed: -1, success: true });
          }, 5000);
          setText('时间：' + new Date().getTime() + 'onRefresh刷新完成');
        }}
        onHeaderReleasing={(data: any) => {
          console.log("smartLayout RN onHeaderReleasing:" + JSON.stringify(data.nativeEvent))
        }}
        onHeaderPulling={(data: any) => {
          console.log("smartLayout RN onHeaderPulling:" + JSON.stringify(data.nativeEvent))
        }}
        onPullDownToRefresh={() => {
          console.log("smartLayout RN onPullDownToRefresh")
        }}
        onHeaderMoving={(data: any) => {
          console.log("smartLayout RN onHeaderMoving:" + data.nativeEvent.offset)
          setAnyHeaderHeight(data.nativeEvent.offset)
          if (data.nativeEvent.offset > 69) {
            return;
          }
          setImgHeight(data.nativeEvent.offset);
        }}
        HeaderComponent={
          // <MeaterialHeader/>
		  // <ClassicsHeader/>
          // <DefaultHeader
          // primaryColor={'#ffff00'}/>

          <AnyHeader style={{ width: '100%', height: 0 }}>
            <Animated.View style={{ height: 69,  width: '100%',justifyContent: "center", alignItems: 'center', backgroundColor: "red" }}>
              <Image style={{width:imgHeight,height:imgHeight}} source={require('./img/test/load.gif')} />
              {/* <Text style={{ height: 50, width: '100%', textAlign: 'center', textAlignVertical: 'center', color: '#000000', backgroundColor: "green" }}>{'请求头部'}</Text> */}
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

export default App;