import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

import SButton from "./components/SButton";
import { ElementsText, window } from "./constants";
import { useWindowDimensions, View, Text, Button } from "react-native";
import { useSharedValue } from "react-native-reanimated";

const PAGE_WIDTH = window.width;

function ReanimatedCarouselDemo() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(1);
  const [data, setData] = React.useState([...new Array(4).keys()]);
  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isAutoPlay, setIsAutoPlay] = React.useState(true);
  const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<ICarouselInstance>(null);

  const baseOptions = isVertical
    ? ({
      vertical: true,
      width: windowWidth,
      height: PAGE_WIDTH / 2,
    } as const)
    : ({
      vertical: false,
      width: windowWidth,
      height: PAGE_WIDTH / 2,
    } as const);

  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Carousel
        {...baseOptions}
        loop
        enabled // Default is true, just for demo
        ref={ref}
        defaultScrollOffsetValue={scrollOffsetValue}
        testID={"xxx"}
        style={{ width: "100%" }}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={data}
        // onScrollStart={()=>{console.log('===1')}}
        onScrollEnd={() => { console.log('===2') }}

        // onConfigurePanGesture={g => g.enabled(false)}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={index => setValue(index)}
        renderItem={({ index }) => {return <View
          key={index}
          style={{
            width: windowWidth,
            height: PAGE_WIDTH / 2,
            backgroundColor: "skyblue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            {`slide${value + 1}`}
          </Text>
        </View>}}
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title="Change the data length to 5"
            onPress={() => {
              setData([...new Array(5).keys()]);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title="Change the data length to 3"
            onPress={() => {
              setData([...new Array(3).keys()]);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title={isVertical ? "Set horizontal" : "Set Vertical"}
            onPress={() => {
              setIsVertical(!isVertical);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title={isFast ? "NORMAL" : "FAST"}
            onPress={() => {
              setIsFast(!isFast);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title={`PagingEnabled:${isPagingEnabled.toString()}`}
            onPress={() => {
              setIsPagingEnabled(!isPagingEnabled);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title={`ElementsText.AUTOPLAY:${isAutoPlay}`}
            onPress={() => {
              setIsAutoPlay(!isAutoPlay);
            }}
          ></Button>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title="Log current index"
            onPress={() => {
              console.info("9999999999",ref.current?.getCurrentIndex());
            }}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title={`Change-data-length-to:${data.length === 6 ? 8 : 6}`}
            onPress={() => {
              setData(
                data.length === 6
                  ? [...new Array(8).keys()]
                  : [...new Array(6).keys()],
              );
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
          <Button
            title="prev"
            onPress={() => {
              ref.current?.scrollTo({ count: -1, animated: true });
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            padding: 10,
          }}>
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

export default ReanimatedCarouselDemo;