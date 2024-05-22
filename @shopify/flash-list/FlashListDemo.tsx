import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  // Pressable,
  Button,
  ScrollView,
} from "react-native";
import { FlashList } from "@shopify/flash-list";

const generateArray = (size: number) => {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = i;
  }
  return arr;
};

const List = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(generateArray(100));
  const [onBlankArea_pass, setBlankArea] = useState(false);
  const [onEndReached_pass, setEndReached] = useState(false);
  const [onLoad_pass, setLoad] = useState(false);
  const [onViewableItemsChanged_pass, setViewableItemsChanged] = useState(false);
  const [onRefresh_pass, setRefresh] = useState(false);
  const [emptyListEnabled, setEmptyListEnabled] = useState(false);
  const [horizontal, setHorizontal] = useState(false);
  const [inverted, setInverted] = useState(false);

  const list = useRef<FlashList<number> | null>(null);

  const removeItem = (item: number) => {
    setData(
      data.filter((dataItem) => {
        return dataItem !== item;
      })
    );
    list.current?.prepareForLayoutAnimationRender();
  };

  const overrideItemLayout = (
    layout: { span?: number; size?: number },
    item: number,
    index: number,
    maxColumns: number,
    extraData?: any
  ) => {
    // 返回项布局的样式对象
    layout.size = 100;
    layout.span = index === 0 ? 2 : 1;
  };

  const renderItem = ({ item }: { item: number }) => {
    const backgroundColor = item % 2 === 0 ? "#00a1f1" : "#ffbb00";
    return (
      <View
        style={{
          backgroundColor: item > 17 ? "red" : backgroundColor,
          height: item % 2 === 0 ? 100 : 100,
          width:100
        }}
      >
        <Text style = {{
          height: item % 2 === 0 ? 100 : 100,
          width:100
        }}> Cell Id: {item}</Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={{ backgroundColor: 'lightblue' }}>
        <Text style={{ width: 100, height: 100}}>List Header</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{ backgroundColor: 'lightblue' }}>
        <Text style={{ width: 100, height: 100  }}>List Footer</Text>
      </View>
    );
  };

  const Empty = () => {
    const title = "List empty!"
    const subTitle = "Press the 'EmptyListEnabled' button to set whether the list is empty";
    return (
      <View style={styles.emptyComponent}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    );
  };

  const Divider = () => {
    return <View style={styles.divider}/>;
  }

  const CellRendererComponent = React.forwardRef<View, { item: string; index: number; style: any }>(
    ({ item, index, style }, ref) => {
      // 自定义渲染单元格的逻辑
      return <View ref={ref} style={style}>{item}</View>;
    }
  );
  return (
    <>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={styles.infoText}>onBlankArea: {onBlankArea_pass?'Pass':'Not Triggered'};  </Text>
        <Text style={styles.infoText}>onEndReached: {onEndReached_pass?'Pass':'Not Triggered'};  </Text>
        <Text style={styles.infoText}>onLoad: {onLoad_pass?'Pass':'Not Triggered'};  </Text>
        <Text style={styles.infoText}>onViewableItemsChanged: {onViewableItemsChanged_pass?'Pass':'Not Triggered'};  </Text>
        <Text style={styles.infoText}>onRefresh: {onRefresh_pass?'Pass':'Not Triggered'};  </Text>
      </View>     
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View
          style={styles.button}
          onTouchEnd={() =>
            list.current?.scrollToEnd()
          }>
          <Text style={styles.buttonText}>scrollToEnd()</Text>
        </View>
        <View
          style={styles.button}
          onTouchEnd={() =>
            list.current?.scrollToIndex({index: 20})
          }>
          <Text style={styles.buttonText}>scrollToIndex(20)</Text>
        </View>
        <View
          style={styles.button}
          onTouchEnd={() =>setEmptyListEnabled(!emptyListEnabled)}
        >
          <Text style={styles.buttonText}>EmptyListEnabled: {emptyListEnabled ? 'true': 'false'}</Text>
        </View>
        <View
          style={styles.button}
          onTouchEnd={() =>setHorizontal(!horizontal)}
        >
          <Text style={styles.buttonText}>Horizontal: {horizontal ? 'true': 'false'}</Text>
        </View>
        <View
          style={styles.button}
          onTouchEnd={() =>setInverted(!inverted)}
        >
          <Text style={styles.buttonText}>Inverted: {inverted ? 'true': 'false'}</Text>
        </View>
        <View
          style={styles.button}
          onTouchEnd={() =>setRefreshing(!refreshing)}
        >
          <Text style={styles.buttonText}>Refreshing: {refreshing ? 'true': 'false'}</Text>
        </View>
      </View>
      <FlashList
        ref={list}
        horizontal={horizontal}
        refreshing={refreshing}
      //   onContentSizeChange={() => {
      //     // list.current.scrollToEnd();
      //     // list.current.scrollToIndex({index: 30});
      //     // list.current.scrollToItem({item: 30});
      //     list.current.scrollToOffset({offset: 300})
      // }}
        onRefresh={() => {
          setRefreshing(true);
          setRefresh(true);
          setTimeout(() => {
            setRefreshing(false);
          }, 2000);
        }}
        // refreshControl={<RefreshControl refreshing={true} colors={['hsl(190, 50%, 70%)']}/>}
        keyExtractor={(item: number) => {
          return item.toString();
        }}
        getItemType={(item: number) => {
          return item > 7 ? "even" : "odd";
        }}
        renderItem={renderItem}
        estimatedItemSize={100}
        numColumns={3}
        estimatedListSize={{width:384,height:753}}
        drawDistance={10}
        overScrollMode={'always'}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        onEndReachedThreshold={1}
        overrideItemLayout={overrideItemLayout}
        // CellRendererComponent={CellRendererComponent}
        data={emptyListEnabled ? [] : data}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={Empty()}
        ItemSeparatorComponent={Divider}
        // initialScrollIndex={40}
        inverted={inverted}
        contentContainerStyle={{padding: 50}}
        viewabilityConfig={{
          waitForInteraction: true,
          itemVisiblePercentThreshold: 10,
          minimumViewTime: 1000,
        }}
        disableAutoLayout={true}
        onBlankArea={()=>setBlankArea(true)}
        onEndReached={()=>setEndReached(true)}
        onLoad={()=>setLoad(true)}
        onViewableItemsChanged={()=>setViewableItemsChanged(true)}
      />
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemContainer: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
  infoText: {
    fontSize:10,
  },
  button: {
    width: 180,
    height: 38,
    backgroundColor: 'hsl(190, 50%, 70%)',
    padding: 5,
    borderRadius: 8,
    margin: 5
  },
  buttonText: {
    width: '100%',
    height: '100%',
    lineHeight: 28,
    textAlign: 'center'
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  divider: {
    width: "100%",
    height: 10,
    backgroundColor: "#DDD"
  }

});