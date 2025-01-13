import { useFont, Circle } from "@react-native-oh-tpl/react-native-skia";
import * as React from "react";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import {
  CartesianChart,
  Line,
  Scatter,
  useChartPressState,
} from "victory-native";
import {
  optionsInitialState,
  optionsReducer,
} from "../hooks/useOptionsReducer";
import type { SharedValue } from "@react-native-oh-tpl/react-native-reanimated";
import inter from "../../assets/inter-medium.ttf";
import { appColors } from "./consts/colors";
import { Button } from "../components/Button";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { LinearGradient, vec } from "@react-native-oh-tpl/react-native-skia";

const randomNumber = () => Math.floor(Math.random() * (50 - 25 + 1)) + 25;
const TestNumber = [1,15,25,90,45,60,8,16];
const TestNumber2 = [1,7,25,8,45,60,15,16,1,7,25,8,45,60,15,16,1,7,25,8,45,60,15,16,1,7,25,8,45,60,15,16];
const TestData=[20,50,30]
const flag=0
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

const DATATest= (numberPoints = 8) =>
Array.from({ length: numberPoints }, (_, index) => ({
  day: index + 1,
  sales: TestNumber[index],
}));

const DATATestSkip = Array.from({ length: 20 }, (_, i) => ({
  day: i,
  sales: SKIP.includes(i) ? null : TestNumber2[i],
}));
export default function LineChartPage() {
  const [
    {
      chartPadding,
      strokeWidth,
      scatterRadius,
      colors,
      domainPadding,
      curveType,
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
  const font = useFont(inter, 12);
  const [data, setData] = useState(DATA());
  const [data1, setData1] = useState(DATA(5));
  const [data2, setData2] = useState(DATA(6));
  const [data3, setData3] = useState(DATA(7));
  const [data4, setData4] = useState(DATA(8));
  const [data5, setData5] = useState(DATATest());
  const [data6, setData6] = useState(DATATest());
  const [data7, setData7] = useState(DATATest());
  const { state, isActive } = useChartPressState({ x: 0, y: { sales: 0 } });

  function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
    return <Circle cx={x} cy={y} r={8} color="black" />;
  }

  return (
    <ScrollView>
      <Tester style={{ flex: 1 }}>
        <TestCase itShould="case1: animate属性 更新数据，有动画效果">
          <View style={{ height: 180}}>
            <CartesianChart
              xKey="day"
              padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
              yKeys={["sales"]}
              axisOptions={{ font }}
              data={data6}
              domainPadding={{ left: 50, right: 50, top: 30 }}
              chartPressState={state}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.sales}
                    curveType="catmullRom"
                    color="red"
                    strokeWidth={2}
                    animate={{ type: "spring" }}
                  />
                  {isActive && (
                    <ToolTip x={state.x.position} y={state.y.sales.position} />
                  )}
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
              onPress={() => setData6((data) => DATA(data.length))}
              title="Shuffle Data"
            />
          </View>
        </TestCase>


        <TestCase itShould="case2: points属性 增加一个点位">
          <View style={{ height: 180 }}>
            <CartesianChart
              xKey="day"
              padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
              yKeys={["sales"]}
              axisOptions={{ font }}
              data={data7}
              domainPadding={{ left: 50, right: 50, top: 30 }}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.sales}
                    curveType="catmullRom"
                    color="green"
                    strokeWidth={2}
                    animate={{ type: "spring" }}
                  />
                  <Scatter
                    radius={scatterRadius}
                    points={points.sales}
                    animate={{ type: "spring" }}
                    color={colors.scatter!}
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
                setData7((data7) => [
                  ...data7,
                  {
                    day: data7.length + 1,
                    sales: (data7.length+1)%3*10,
                  },
                ])
              }
              title="Add Point"
            />
          </View>
        </TestCase>

        <TestCase itShould="case3: curveType 属性 设置曲线类型 linear：线性插值 natural：自然插值 cardinal：基数插值 step：阶梯插值">
          <View style={{ height: 180 }}>
            <CartesianChart
              xKey="day"
              padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
              yKeys={["sales"]}
              axisOptions={{ font }}
              data={data5}
              domainPadding={{ left: 50, right: 50, top: 30 }}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.sales}
                    curveType={curveType}
                    color="blue"
                    strokeWidth={2}
                    animate={{ type: "spring" }}
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
              onPress={() => dispatch({ type: "SET_CURVE_TYPE", payload: "linear" })}
              title="linear"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_CURVE_TYPE", payload: "natural" })}
              title="natural"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_CURVE_TYPE", payload: "cardinal" })}
              title="cardinal"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_CURVE_TYPE", payload: "step" })}
              title="step"
            />
          </View>
        </TestCase>

        <TestCase itShould="case4: color 属性 设置 曲线的颜色">
          <View style={{ height: 180 }}>
            <CartesianChart
              xKey="day"
              padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
              yKeys={["sales"]}
              axisOptions={{ font }}
              data={data5}
              domainPadding={{ left: 50, right: 50, top: 30 }}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.sales}
                    curveType="catmullRom"
                    color={colors.stroke!}
                    strokeWidth={2}
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
              data={DATATestSkip}
              domainPadding={{ left: 50, right: 50, top: 30 }}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.sales}
                    curveType="catmullRom"
                    color="green"
                    strokeWidth={2}
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

        <TestCase itShould="case6: strokeWidth 属性 设置 曲线的宽度">
          <View style={{ height: 180 }}>
            <CartesianChart
              xKey="day"
              padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
              yKeys={["sales"]}
              axisOptions={{ font }}
              data={data5}
              domainPadding={{ left: 50, right: 50, top: 30 }}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.sales}
                    curveType="catmullRom"
                    color="blue"
                    strokeWidth={strokeWidth}
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
              onPress={() => dispatch({ type: "SET_STROKE_WIDTH", payload: 2 })}
              title="width_2"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_STROKE_WIDTH", payload: 5 })}
              title="width_5"
            />
          </View>
        </TestCase>

        <TestCase itShould="case7: children 属性 测试渐变">
          <View style={{ height: 180 }}>
            <CartesianChart
              xKey="day"
              padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
              yKeys={["sales"]}
              axisOptions={{ font }}
              data={data5}
              domainPadding={{ left: 50, right: 50, top: 30 }}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.sales}
                    curveType="catmullRom"
                    color={colors.stroke!}
                    strokeWidth={2}
                    connectMissingData={true} >
                    <LinearGradient
                        start={vec(0, 0)}
                        end={vec(0, 400)}
                        colors={["#FF0000", "#0000FF"]}
                      />
                    </Line>
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
