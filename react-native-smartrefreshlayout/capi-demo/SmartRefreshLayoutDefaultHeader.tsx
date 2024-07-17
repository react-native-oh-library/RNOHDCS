import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';

import { SmartRefreshControl, DefaultHeader } from '@react-native-oh-tpl/react-native-smartrefreshlayout/src/index';

const itamArray = new Array();
itamArray.push({ id: 0, text: "默认主题", dec: "设置刷新头默认背景颜色" });
itamArray.push({ id: 1, text: "设置红色主题", dec: "设置刷新头默认背景红色主题" });
itamArray.push({ id: 2, text: "设置绿色主题", dec: "设置刷新头默认背景绿色主题" });
itamArray.push({ id: 3, text: "设置蓝色主题", dec: "设置刷新头默认背景蓝色主题" });
itamArray.push({ id: 4, text: "设置自动刷新", dec: "该属性需要初次渲染加载" });
itamArray.push({ id: 5, text: "设置自动过5秒刷新", dec: "该属性需要初次渲染加载" });
itamArray.push({ id: 6, text: "设置阻尼效果", dec: "设置下拉阻尼效果" });
itamArray.push({ id: 7, text: "设置最大下拉高度", dec: "设置最大下拉高度" });
itamArray.push({ id: 8, text: "设置禁止刷新", dec: "开启或关闭刷新" });
itamArray.push({ id: 9, text: "设置DefaultHeader黄色主题", dec: "设置DefaultHeader黄色主题" });
itamArray.push({ id: 10, text: "设置DefaultHeader绿色字体主题", dec: "设置DefaultHeader绿色字体主题" });
itamArray.push({ id: 11, text: "设置DefaultHeader白色字体主题", dec: "设置DefaultHeader白色字体主题" });
const App = () => {
  const [data, setData] = useState(itamArray);
  const [headerHeight, setHeaderHeight] = useState(69);
  const [imgHeight, setImgHeight] = useState(0.0);

  const [color, setColor] = useState('#ffffff');
  const [autuR, setAutoR] = useState({ refresh: false, time: -1 })
  const [dragR, setDragRate] = useState(0.5);
  const [maxDragR, setMaxDragRate] = useState(2.0);
  const [enableR, setEnableR] = useState(true);
  const [openAnyBg, setOpenAnyBg] = useState(false);
  const [accentC, setAccentColor] = useState('#000000');
  let defaultSmartRefreshControlRef: React.RefObject<SmartRefreshControl> = useRef(null);

  const ItemView = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {
        switch (item.id) {
          case 0:
            setColor("#ffffff")
            break;
          case 1:
            setColor('#ff0000')
            break;
          case 2:
            setColor("#00FF00")
            break;
          case 3:
            setColor("#0000FF")
            break;
          case 4:
            setAutoR({ refresh: true, time: -1 })
            break;
          case 5:
            setAutoR({ refresh: true, time: 5000 })
            break;
          case 6:
            setDragRate(3.0)
            break;
          case 7:
            setMaxDragRate(5.0)
            break;
          case 8:
            setEnableR(!enableR);
            break;
          case 9:
            setOpenAnyBg(!openAnyBg);
            break;
          case 10:
            setAccentColor("#00FF00");
            break;
          case 11:
            setAccentColor("#ffffff");
            break;
        }
      }}>
        <Text style={styles.itemText}>{item.text}</Text>
      </TouchableOpacity>
      <Text style={styles.itemTextdec}>{item.dec}</Text>
    </View>
  );
  return (
    <View >
      <SmartRefreshControl
        ref={defaultSmartRefreshControlRef}
        primaryColor={color}
        autoRefresh={autuR}
        headerHeight={headerHeight}
        dragRate={dragR}
        maxDragRate={maxDragR}
        enableRefresh={enableR}
        style={{ height: '100%', width: '100%', backgroundColor: '#ffffff' }}
        onReleaseToRefresh={e => {
          console.log("Smart RN onReleaseToRefresh")
        }}
        onRefresh={() => {
          console.log("Smart RN onRefresh")
          setTimeout(() => {
            defaultSmartRefreshControlRef.current.finishRefresh({ delayed: -1, success: true });
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
        onHeaderMoving={(data: any) => {
          if (data.nativeEvent.offset > headerHeight - 20) {
            return;
          }
          setImgHeight(data.nativeEvent.offset);
        }}
        HeaderComponent={
          <DefaultHeader
            primaryColor={openAnyBg ? "#ffff00" : ""}
            accentColor={accentC} />
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
    flexDirection: "column"
  },
  itemText: {
    fontSize: 14,
  },
  itemTextdec: {
    marginTop: 3,
    fontSize: 10
  },
});

export default App;