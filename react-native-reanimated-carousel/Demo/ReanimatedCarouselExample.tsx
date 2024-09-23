import React, { useState, useRef } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { View, Text, Button, Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";

const PAGE_HEIGHT = Dimensions.get('window').height;
const PAGE_WIDTH = Dimensions.get('window').width;

export function ReanimatedCarouselExample() {
  const scrollOffsetValue = useSharedValue<number>(1);
  const [data, setData] = useState([...new Array(4).keys()]);
  const [isVertical, setIsVertical] = useState(false);
  const [isFast, setIsFast] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPagingEnabled, setIsPagingEnabled] = useState(true);
  const [value, setValue] = useState(0);
  const ref = useRef<ICarouselInstance>(null);

  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT / 2}
        loop
        enabled // Default is true, just for demo
        defaultScrollOffsetValue={scrollOffsetValue}
        testID={"testBox"}
        vertical={isVertical}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 200 : 2000}
        data={data}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={index => setValue(index)}
        renderItem={({ index }) => {
          return <View
            key={index}
            style={{
              width: PAGE_WIDTH,
              height: PAGE_HEIGHT / 2,
              ...styles.swiperView,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              {`slide${value + 1}`}
            </Text>
          </View>
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.optView}>
          <Button
            title="Change the data length to 5"
            onPress={() => {
              setData([...new Array(5).keys()]);
            }}
          />
        </View>
        <View style={styles.optView}>
          <Button
            title="Change the data length to 3"
            onPress={() => {
              setData([...new Array(3).keys()]);
            }}
          />
        </View>
        <View style={styles.optView}>
          <Button
            title={isVertical ? "Set horizontal" : "Set Vertical"}
            onPress={() => {
              setIsVertical(!isVertical);
            }}
          />
        </View>
        <View style={styles.optView}>
          <Button
            title={isFast ? "NORMAL" : "FAST"}
            onPress={() => {
              setIsFast(!isFast);
            }}
          />
        </View>
        <View style={styles.optView}>
          <Button
            title={`PagingEnabled:${isPagingEnabled.toString()}`}
            onPress={() => {
              setIsPagingEnabled(!isPagingEnabled);
            }}
          />
        </View>
        <View style={styles.optView}>
          <Button
            title={`ElementsText.AUTOPLAY:${isAutoPlay}`}
            onPress={() => {
              setIsAutoPlay(!isAutoPlay);
            }}
          ></Button>
        </View>
        <View style={styles.optView}>
          <Button
            title="prev"
            onPress={() => {
              ref.current?.scrollTo({ count: -1, animated: true });
            }}
          />
        </View>
        <View style={styles.optView}>
          <Button
            title="next"
            onPress={() => {
              ref.current?.scrollTo({ count: 1, animated: true });
            }}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  swiperView: {
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center"
  },
  optView: {
    flexDirection: 'row',
    gap: 10,
    padding: 5
  }
})
