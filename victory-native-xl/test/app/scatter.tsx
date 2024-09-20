import { PaintProps, useFont } from "@shopify/react-native-skia";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import {
  CartesianChart,
  Scatter,
  useChartPressState,
  type ScatterShape,
} from "victory-native";
import { useDarkMode } from "react-native-dark";
import inter from "../../assets/inter-medium.ttf";
import { appColors } from "./consts/colors";
import { Button } from "../components/Button";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const DATA = (length: number = 10) =>
  Array.from({ length }, (_, index) => ({
    month: index + 1,
    listenCount: Math.floor(Math.random() * (20)) + 10,
  }));

export default function ScatterPage() {
  const font = useFont(inter, 12);
  const [dataTest, setDataTest] = useState(DATA(5));
  const [radius, setRadius] = useState(10);
  const [shape, setShape] = useState("circle" as ScatterShape);
  const [color, setColor] = useState("green");
  const [style, setStyle] = useState("fill" as PaintProps["style"]);
  const [strokeWidth, setStrokeWidth] = useState(3);
  const { state, isActive } = useChartPressState({
    x: 0,
    y: { listenCount: 0 },
  });

  return (
    <Tester style={{ flex: 1 }}>
      <TestCase itShould="case1: 散点图 图表">
        <View style={{ height: 180 }}>
          <CartesianChart
            xKey="month"
            padding={{left: 5, right: 5, bottom: 10}}
            yKeys={["listenCount"]}
            domainPadding={{ left: 50, right: 50, top: 30, bottom: 0 }}
            domain={{ y: [0, 30] }}
            chartPressState={state}
            axisOptions={{ 
              font
            }}
            data={dataTest}
          >
            {({ points }) => {
              return (
                <>
                  <Scatter
                    points={points.listenCount}
                    animate={{ type: "spring" }}
                    radius={radius}
                    shape={shape}
                    color={color}
                    style={style}
                    strokeWidth={strokeWidth}
                  />
                </>
              );
            }}
          </CartesianChart>
        </View>
      </TestCase>

      <ScrollView
        style={styles.optionsScrollView}
        contentContainerStyle={styles.options}
      >
        <TestCase itShould="case2: 更新点位数据，会有动画效果">
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Button
              style={{ flex: 1 }}
              onPress={() => setDataTest((data) => DATA(data.length))}
              title="Shuffle Data"
            />
          </View>
        </TestCase>

        <TestCase itShould="case3: 设置点的半径">
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 16,
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Button
              style={{ flex: 1 }}
              onPress={() => { setRadius(radius + 2) }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => { setRadius(radius - 2) }}
              title="down"
            />
          </View>
        </TestCase>

        <TestCase itShould="case4: 设置点的形状 circle圆形 square正方形 star星形">
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 16,
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Button
              style={{ flex: 1 }}
              onPress={() => setShape("circle")}
              title="circle"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setShape("square")}
              title="square"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setShape("star")}
              title="star"
            />
          </View>
        </TestCase>

        <TestCase itShould="case5: 设置点的颜色">
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 16,
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Button
              style={{ flex: 1 }}
              onPress={() => setColor("red")}
              title="red"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setColor("blue")}
              title="blue"
            />
          </View>
        </TestCase>

        <TestCase itShould="case6: 设置每个点是填充还是中空">
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 16,
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                if (style == "fill") {
                  setStyle("stroke");
                }
                else {
                  setStyle("fill");
                }
              }}
              title="styleChange"
            />
          </View>
        </TestCase>

        <TestCase itShould="case7: 设置线条宽度，只有在中空时生效">
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 16,
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                setStyle("stroke");
                setStrokeWidth(6)
              }}
              title="strokeWidth 6"
            />
            <Button
              style={{ flex: 1}}
              onPress={() => {
                setStyle("stroke");
                setStrokeWidth(8)
              }}
              title="strokeWidth 8"
            />
          </View>
        </TestCase>

      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: appColors.viewBackground.light,
    $dark: {
      backgroundColor: appColors.viewBackground.dark,
    },
  },
  chart: {
    flex: 1,
  },
  optionsScrollView: {
    flex: 1,
    backgroundColor: appColors.androidHeader.dark,
    $dark: {
      backgroundColor: appColors.androidHeader.dark,
    },
  },
  options: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});