import { useFont } from "@shopify/react-native-skia";
import * as React from "react";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import {
  CartesianChart,
  type CurveType,
  Line,
  Area,
  Scatter,

} from "victory-native";
import {
  optionsInitialState,
  optionsReducer,
} from "../hooks/useOptionsReducer";
import inter from "../../assets/inter-medium.ttf";
import { appColors } from "./consts/colors";
import { Button } from "../components/Button";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const randomNumber = () => Math.floor(Math.random() * (50 - 25 + 1)) + 25;

const SKIP = [7, 8, 15];

const DATA = (numberPoints = 13) =>
  Array.from({ length: numberPoints }, (_, index) => ({
    day: index + 1,
    sales: randomNumber(),
  }));

const DATA1 = Array.from({ length: 20 }, (_, i) => ({
  day: i,
  sales: SKIP.includes(i) ? null : Math.random() * 100,
}));

export default function AreaChartPage() {
  const [
    {
      fontSize,
      chartPadding,
      strokeWidth,
      xAxisSide,
      yAxisSide,
      xLabelOffset,
      yLabelOffset,
      xTickCount,
      yTickCount,
      xAxisLabelPosition,
      yAxisLabelPosition,
      scatterRadius,
      colors,
      domainPadding,
      curveType,
      customXLabel,
      customYLabel,
      connectMissingData,
    },
    dispatch,
  ] = React.useReducer(optionsReducer, {
    ...optionsInitialState,
    domainPadding: 10,
    chartPadding: 10,
    strokeWidth: 2,
    connectMissingData: true,
    colors: {
      stroke: "#71717a",
      xLine: "#ffffff",
      yLine: "#ddfa55",
      frameLine: "#aaa",
      xLabel: appColors.text.light,
      yLabel: appColors.text.light,
      scatter: "#a78bfa",
    },
  });
  const font = useFont(inter, fontSize);
  const [data, setData] = useState(DATA());
  const [data1, setData1] = useState(DATA(5));
  const [data2, setData2] = useState(DATA(6));
  const [data3, setData3] = useState(DATA(7));
  const [data4, setData4] = useState(DATA(8));

  return (
      <ScrollView>
        <Tester style={{ flex: 1 }}>
          <TestCase itShould="case1: animate 属性 更新数据， 会有动画效果">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                axisOptions={{ font }}
                data={data}
                domainPadding={{ left: 0, right: 50, top: 30 }}
              >
                {({ points, chartBounds }) => (
                  <>
                    <Area
                      points={points.sales}
                      y0={chartBounds.bottom}
                      color="red"
                      curveType="catmullRom"
                      animate={{ type: "timing", duration: 300 }}
                      connectMissingData={true}
                    />
                  </>
                )}
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
                onPress={() => setData((data) => DATA(data.length))}
                title="Shuffle Data"
              />
            </View>
          </TestCase>


          <TestCase itShould="case2: 增加point点位">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                axisOptions={{ font }}
                data={data1}
                domainPadding={{ left: 0, right: 50, top: 30 }}
              >
                {({ points, chartBounds }) => (
                  <>
                    <Area
                      points={points.sales}
                      y0={chartBounds.bottom}
                      color="green"
                      curveType="catmullRom"
                      animate={{ type: "timing", duration: 300 }}
                    />

                  </>
                )}
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
                onPress={() =>
                  setData1((data1) => [
                    ...data1,
                    {
                      day: data1.length + 1,
                      sales: randomNumber(),
                    },
                  ])
                }
                title="Add Point"
              />
            </View>
          </TestCase>

          <TestCase itShould="case3: curveType 属性 设置 曲线类型 linear：线性插值 natural：自然插值">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                axisOptions={{ font }}
                data={data4}
                domainPadding={{ left: 0, right: 50, top: 30 }}
              >
                {({ points, chartBounds }) => (
                  <>
                    <Area
                      points={points.sales}
                      y0={chartBounds.bottom}
                      color="blue"
                      curveType={curveType}
                      animate={{ type: "timing", duration: 300 }}
                    />
                  </>
                )}
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
                onPress={() => dispatch({ type: "SET_CURVE_TYPE", payload: "linear" })}
                title="linear"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => dispatch({ type: "SET_CURVE_TYPE", payload: "natural" })}
                title="natural"
              />
            </View>
          </TestCase>

          <TestCase itShould="case4: color 属性 设置区域颜色">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                axisOptions={{ font }}
                data={data2}
                domainPadding={{ left: 0, right: 50, top: 30 }}
              >
                {({ points, chartBounds }) => (
                  <>
                    <Area
                      points={points.sales}
                      y0={chartBounds.bottom}
                      color={colors.stroke!}
                      curveType="catmullRom"
                      animate={{ type: "timing", duration: 300 }}
                    />
                  </>
                )}
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
                onPress={() => dispatch({ type: "SET_COLORS", payload: { stroke: 'red' } })}
                title="red"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => dispatch({ type: "SET_COLORS", payload: { stroke: "green" } })}
                title="green"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => dispatch({ type: "SET_COLORS", payload: { stroke: "black" } })}
                title="black"
              />
            </View>
          </TestCase>


          <TestCase itShould="case5: connectMissingData 属性 设置是否连接缺失数据 connectMissingData：连接 disConnectMissingData：不连接">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                axisOptions={{ font }}
                data={DATA1}
                domainPadding={{ left: 0, right: 50, top: 30 }}
              >
                {({ points, chartBounds }) => (
                  <>
                    <Area
                      points={points.sales}
                      y0={chartBounds.bottom}
                      color="green"
                      curveType="catmullRom"
                      animate={{ type: "timing", duration: 300 }}
                      connectMissingData={connectMissingData}
                    />
                  </>
                )}
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
                onPress={() => dispatch({ type: "SET_MiSSINGDATA_VALUES", payload: true })}
                title="connectMissingData"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => dispatch({ type: "SET_MiSSINGDATA_VALUES", payload: false })}
                title="disConnectMissingData"
              />
            </View>
          </TestCase>

          <TestCase itShould="case6: y0属性 当前设置为chartBounds.top， 以上都是设置为 chartBounds.bottom">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                axisOptions={{ font }}
                data={data3}
                domainPadding={{ left: 0, right: 50, top: 30 }}
              >
                {({ points, chartBounds }) => (
                  <>
                    <Area
                      points={points.sales}
                      y0={chartBounds.top}
                      color="pink"
                      curveType="catmullRom"
                      animate={{ type: "timing", duration: 300 }}
                    />
                  </>
                )}
              </CartesianChart>
            </View>
          </TestCase>

        </Tester>
      </ScrollView>
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
    flex: 0.5,
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
