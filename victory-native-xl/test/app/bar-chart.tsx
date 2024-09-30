import { LinearGradient, useFont, vec } from "@shopify/react-native-skia";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { Bar, CartesianChart } from "victory-native";
import inter from "../../assets/inter-medium.ttf";
import { appColors } from "./consts/colors";
import { Button } from "../components/Button";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const DATA = (length: number = 10) =>
  Array.from({ length }, (_, index) => ({
    month: index + 1,
    listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
  }));

export default function BarChartPage() {
  const font = useFont(inter, 12);
  const [data, setData] = useState(DATA(5));
  const [data1, setData1] = useState(DATA(5));
  const [data2, setData2] = useState(DATA(5));
  const [innerPadding, setInnerPadding] = useState(0.33);
  const [barWidth, setBarWidth] = useState(20);
  const [barCount, setBarCount] = useState(5);
  const [color, setColor] = useState("green");
  const [roundedCorner, setRoundedCorner] = useState(5);
  const [Boundsleft, setBoundsleft] = useState(36);
  const [Boundsright, setBoundsright] = useState(353);
  const [Boundstop, setBoundstop] = useState(15);
  const [Boundsbottom, setBoundsbottom] = useState(150);

  return (
    <>
      <ScrollView>
        <Tester style={{ flex: 1 }}>
          <TestCase itShould="case1: animate 属性，更新数据，会有动画效果">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 80, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data1}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={chartBounds}
                        animate={{ type: "spring" }}
                        innerPadding={0.5}
                        color="#a78bfa"
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
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
                onPress={() => setData1((data1) => DATA(data1.length))}
                title="Shuffle Data"
              />
            </View>
          </TestCase>


          <TestCase itShould="case2: points 属性 设置点位 up增加一个 down减少一个">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 80, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data2}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={chartBounds}
                        animate={{ type: "spring" }}
                        innerPadding={0.5}
                        color="green"
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
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
                onPress={() => setData2(DATA(data2.length + 1))}
                title="up"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => {
                  if (data2.length != 1) {
                    setData2(DATA(data2.length - 1))
                  }
                }}
                title="down"
              />
            </View>
          </TestCase>


          <TestCase itShould="case3: innerPadding 属性 设置条形间隔">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={chartBounds}
                        animate={{ type: "spring" }}
                        innerPadding={innerPadding}
                        color="blue"
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
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
                onPress={() => { setInnerPadding(0.5) }}
                title="innerPadding 0.5"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => { setInnerPadding(0.4) }}
                title="innerPadding 0.4"
              />
            </View>
          </TestCase>

          <TestCase itShould="case4: roundedCorners 属性 设置 柱顶的圆角半径 ">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={chartBounds}
                        animate={{ type: "spring" }}
                        innerPadding={0.5}
                        roundedCorners={{
                          topLeft: roundedCorner,
                          topRight: roundedCorner,
                        }}
                      >
                        <LinearGradient
                          start={vec(0, 0)}
                          end={vec(0, 400)}
                          colors={["#a78bfa", "#a78bfa50"]}
                        />
                      </Bar>
                    </>
                  );
                }}
              </CartesianChart>
            </View>
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
                  if (roundedCorner < 16) {
                    setRoundedCorner(roundedCorner + 2)
                  }
                }}
                title="up"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => {
                  if (roundedCorner > 0) {
                    setRoundedCorner(roundedCorner - 2);
                  }
                }}
                title="down"
              />
            </View>
          </TestCase>

          <TestCase itShould="case5: barWidth 属性 设置 条形宽度">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={chartBounds}
                        animate={{ type: "spring" }}
                        color="pink"
                        barWidth={barWidth}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
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
                onPress={() => { setBarWidth(30) }}
                title="barWidth 30"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => { setBarWidth(40); }}
                title="barWidth 40"
              />
            </View>
          </TestCase>

          <TestCase itShould="case6: barCount 属性， 设置条形宽度，优先级比 barWidth 低。数值越大，宽度越小">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={chartBounds}
                        animate={{ type: "spring" }}
                        color="red"
                        barCount={barCount}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
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
                onPress={() => { setBarCount(barCount + 1) }}
                title="up"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => { setBarCount(barCount - 1) }}
                title="down"
              />
            </View>
          </TestCase>

          <TestCase itShould="case7: color 属性 设置条形的颜色">
            <View style={{ height: 180}}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={chartBounds}
                        animate={{ type: "spring" }}
                        color={color}
                        barCount={7}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
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
                onPress={() => { setColor("red") }}
                title="red"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => { setColor("yellow") }}
                title="yellow"
              />
            </View>
          </TestCase>

          <TestCase itShould="case8: chartBounds 属性 设置图表边界">
          <View style={{ height: 180 }}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 80, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data1}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={{
                          left: Boundsleft,
                          right: Boundsright,
                          top: Boundstop,
                          bottom: Boundsbottom,
                        }}
                        animate={{ type: "spring" }}
                        innerPadding={0.5}
                        color="#a78bfa"
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
            <Text>设置左边界</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 10,
            }}
          >
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                setBoundsleft(Boundsleft + 20);
              }}
              title="左边界up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                setBoundsleft(Boundsleft - 20);
              }}
              title="左边界down"
            />
            </View>

            <Text>设置右边界</Text>
            <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginVertical: 10,
            }}
          >
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                setBoundsright(Boundsright + 20);
              }}
              title="右边界up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                setBoundsright(Boundsright - 20);
              }}
              title="右边界down"
            />
          </View>
          </TestCase>

          <TestCase itShould="case12: children 属性 测试渐变">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="month"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["listenCount"]}
                domainPadding={{ left: 50, right: 80, top: 30 }}
                domain={{ y: [0, 100] }}
                axisOptions={{ font }}
                data={data1}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Bar
                        points={points.listenCount}
                        chartBounds={chartBounds}
                        animate={{ type: "spring" }}
                        innerPadding={0.5}
                        color="#a78bfa"
                      >
                      <LinearGradient start={vec(0, 0)} end={vec(0, 400)} colors={["#a78bfa", "#a7bfa50"]}/>
                      </Bar>
                    </>
                  );
                }}
              </CartesianChart>
            </View>
          </TestCase>

        </Tester>

      </ScrollView>
    </>
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
    flex: 1.5,
  },
  optionsScrollView: {
    flex: 1,
    backgroundColor: appColors.cardBackground.light,
    $dark: {
      backgroundColor: appColors.cardBackground.dark,
    },
  },
  options: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
