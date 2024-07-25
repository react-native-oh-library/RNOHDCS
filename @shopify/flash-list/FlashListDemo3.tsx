import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
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

  const list = useRef<FlashList<number> | null>(null);
  const viewabilityConfigRef = useRef({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
  });

  const onViewableItemsChanged = () => {
    console.info('flashlist onViewableItemsChanged');
  };
  const viewabilityConfigCallbackPairs = [
    {
      viewabilityConfig: viewabilityConfigRef.current,
      onViewableItemsChanged,
    },
  ];

  const renderItem = ({ item }: { item: number }) => {
    const backgroundColor = item % 2 === 0 ? "#00a1f1" : "#ffbb00";
    return (
      <Pressable
        onPress={() => {
          console.info('flashlist renderItem refresh');
          setRefreshing(!refreshing)
        }}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: item > 97 ? "red" : backgroundColor,
            height: item % 2 === 0 ? 100 : 200,
          }}
        >
          <Text>Cell Id: {item}</Text>
        </View>
      </Pressable>
    );
  };
  useEffect(() => {
    console.info('flashlist component render')
  }, [refreshing]);

  return (
    <FlashList
      ref={list}
      keyExtractor={(item: number) => {
        return item.toString();
      }}
      getItemType={(item: number) => {
        return item > 97 ? "even" : "odd";
      }}
      extraData={refreshing}
      renderItem={renderItem}
      estimatedItemSize={100}
      data={data}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
      overrideProps={{
        contentContainerStyle: { paddingLeft: 10, paddingTop: 10, backgroundColor: 'red' },
      }}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 120,
    backgroundColor: "#00a1f1",
  },
});
