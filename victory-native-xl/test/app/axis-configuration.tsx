import { useFont } from "@shopify/react-native-skia";
import * as React from "react";
import { useMemo } from "react";
import { SafeAreaView, Text, ScrollView, StyleSheet, View } from "react-native";
import {
  CartesianChart,
  Line,
  Scatter,
} from "victory-native";
import { useDarkMode } from "react-native-dark";
import {
  optionsInitialState,
  optionsReducer,
} from "../hooks/useOptionsReducer";
import { InputText } from "../components/InputText";
import inter from "../../assets/inter-medium.ttf";
import { appColors } from "./consts/colors";
import { Button } from "../components/Button";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const parseTickValues = (tickString?: string) =>
  tickString
    ?.split(",")
    .map((v) => parseFloat(v))
    .filter((v) => !isNaN(v));

const DATA = (ticksX: number[], ticksY: number[]) => {
  const maxY = Math.max(...ticksY);
  const minY = Math.min(...ticksY);
  const maxX = Math.max(...ticksX);
  const minX = Math.min(...ticksX);
  const dX = maxX - minX;
  const dY = maxY - minY;

  return Array.from({ length: 10 }, (_, index) => ({
    day: minX + (dX * index) / 10,
    sales: Math.random() * dY + minY,
  }));
};

export default function AxisConfiguration() {
  const isDark = useDarkMode();
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
      xAxisValues,
      yAxisValues,
    },
    dispatch,
  ] = React.useReducer(optionsReducer, {
    ...optionsInitialState,
    domainPadding: 10,
    chartPadding: 0,
    strokeWidth: 2,
    xAxisValues: "0,2,4,6,8",
    yAxisValues: "0,1,2,4,6,8",
    colors: {
      stroke: isDark ? "#fafafa" : "#71717a",
      xLine: isDark ? "#71717a" : "#ffffff",
      yLine: isDark ? "#aabbcc" : "#ddfa55",
      frameLine: isDark ? "#444" : "#aaa",
      xLabel: isDark ? appColors.text.dark : appColors.text.light,
      yLabel: isDark ? appColors.text.dark : appColors.text.light,
      scatter: "#a78bfa",
    },
  });
  const font = useFont(inter, fontSize);
  const ticksX = useMemo(
    () => parseTickValues(xAxisValues) ?? [0, 10],
    [xAxisValues],
  );
  const ticksY = useMemo(
    () => parseTickValues(yAxisValues) ?? [0, 10],
    [yAxisValues],
  );

  const data = useMemo(() => DATA(ticksX, ticksY), [ticksX, ticksY]);

  return (
    <Tester style={{ flex: 1 }}>
      <TestCase itShould="case1: 坐标轴相关配置">
        <View style={{ height: 180 }}>
          <CartesianChart
            xKey="day"
            padding={{left: chartPadding, right: 10, bottom: 10 }}
            yKeys={["sales"]}
            axisOptions={{
              font,
              lineWidth: { grid: { x: 0, y: 2 }, frame: 0 },
              lineColor: {
                grid: {
                  x: colors.xLine!,
                  y: colors.yLine!,
                },
                frame: colors.frameLine!,
              },
              labelColor: { x: colors.xLabel!, y: colors.yLabel! },
              labelOffset: { x: xLabelOffset, y: yLabelOffset },
              tickValues: {
                x: ticksX,
                y: ticksY,
              },
              tickCount: { x: xTickCount, y: yTickCount },
              axisSide: { x: xAxisSide, y: yAxisSide },
              labelPosition: {
                x: xAxisLabelPosition,
                y: yAxisLabelPosition,
              },
              formatXLabel: (value) => {
                return customXLabel ? `${value} ${customXLabel}` : `${value}`;
              },
              formatYLabel: (value) => {
                return customYLabel ? `${value} ${customYLabel}` : `${value}`;
              },
            }}
            data={data}
            domainPadding={{ left: 50, right: 50, top: 30 }}
          >
            {({ points }) => (
              <>
                <Line
                  points={points.sales}
                  curveType={curveType}
                  color={colors.stroke!}
                  strokeWidth={strokeWidth}
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
      </TestCase>

      <ScrollView
        style={styles.optionsScrollView}
        contentContainerStyle={styles.options}
      >
        <TestCase itShould="case2: 设置轴上面的值">
          <View style={{ flexDirection: "row" }}>

            <InputText
              label="X Tick Values"
              placeholder="Comma separated"
              value={xAxisValues}
              onChangeText={(val) =>
                dispatch({
                  type: "SET_X_AXIS_VALUES",
                  payload: val,
                })
              }
            />
            {/** Spacer */}
            <View style={{ width: 10 }} />
            <InputText
              label="Y Tick Values"
              placeholder="Comma separated"
              value={yAxisValues}
              onChangeText={(val) =>
                dispatch({
                  type: "SET_Y_AXIS_VALUES",
                  payload: val,
                })
              }
            />
          </View>
        </TestCase>

        <TestCase itShould="case3: 设置轴上面的文字 ">
          <View style={{ flexDirection: "row" }}>
            <InputText
              label="X Label Text"
              placeholder="Label text here..."
              value={customXLabel}
              onChangeText={(val) =>
                dispatch({ type: "SET_X_LABEL", payload: val })
              }
            />
            {/** Spacer */}
            <View style={{ width: 10 }} />
            <InputText
              label="Y Label Text"
              placeholder="Label text here..."
              value={customYLabel}
              onChangeText={(val) =>
                dispatch({ type: "SET_Y_LABEL", payload: val })
              }
            />
          </View>
        </TestCase>

        <TestCase itShould="case4: 设置图表的边距">
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
                if (chartPadding < 20) {
                  dispatch({ type: "SET_CHART_PADDING", payload: (chartPadding + 1) });
                }
              }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                if (chartPadding > 0) {
                  dispatch({ type: "SET_CHART_PADDING", payload: (chartPadding - 1) });
                }
              }}
              title="down"
            />
          </View>
        </TestCase>

        <TestCase itShould="case5: 设置轴上面字体的大小">
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
                if (fontSize < 24) {
                  dispatch({ type: "SET_FONT_SIZE", payload: (fontSize + 1) });
                }
              }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                if (fontSize > 8) {
                  dispatch({ type: "SET_FONT_SIZE", payload: (fontSize - 1) });
                }
              }}
              title="down"
            />
          </View>
        </TestCase>

        <TestCase itShould="case6: 设置X轴文字的偏移 up离轴线越远 down越近">
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
                if (xLabelOffset < 12) {
                  dispatch({ type: "SET_X_LABEL_OFFSET", payload: (xLabelOffset + 1) })
                }
              }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                if (xLabelOffset > 0) {
                  dispatch({ type: "SET_X_LABEL_OFFSET", payload: (xLabelOffset - 1) })
                }
              }}
              title="down"
            />
          </View>
        </TestCase>

        <TestCase itShould="case7: 设置X轴的位置 top顶端 bottom底部">
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
              onPress={() => dispatch({ type: "SET_X_AXIS_SIDE", payload: "top" })}
              title="top"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_X_AXIS_SIDE", payload: "bottom" })}
              title="bottom"
            />
          </View>
        </TestCase>

        <TestCase itShould="case8: 设置X轴文字的位置 top在轴线上方 bottom在轴线下方">
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
              onPress={() => dispatch({ type: "SET_X_AXIS_LABEL_POSITION", payload: "inset" })}
              title="top"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_X_AXIS_LABEL_POSITION", payload: "outset" })}
              title="bottom"
            />
          </View>
        </TestCase>

        <TestCase itShould="case9: 设置X轴字体的颜色">
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
              onPress={() => dispatch({ type: "SET_COLORS", payload: { xLabel: 'red' } })}
              title="red"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_COLORS", payload: { xLabel: "green" } })}
              title="green"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_COLORS", payload: { xLabel: "black" } })}
              title="black"
            />
          </View>
        </TestCase>


        <TestCase itShould="case10: 设置Y轴文字的偏移 up离轴线越远 down越近">
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
                if (yLabelOffset < 12) {
                  dispatch({ type: "SET_Y_LABEL_OFFSET", payload: (yLabelOffset + 1) });
                }
              }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                if (yLabelOffset > 0) {
                  dispatch({ type: "SET_Y_LABEL_OFFSET", payload: (yLabelOffset - 1) });
                }
              }}
              title="down"
            />
          </View>
        </TestCase>

        <TestCase itShould="case11: 设置X轴文字的位置 top在轴线上方 bottom在轴线下方">
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
              onPress={() => dispatch({ type: "SET_Y_AXIS_LABEL_POSITION", payload: "inset" })}
              title="inset"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_Y_AXIS_LABEL_POSITION", payload: "outset" })}
              title="outset"
            />
          </View>
        </TestCase>

        <TestCase itShould="case12: 设置Y轴的位置 left左边 right右边">
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
              onPress={() => dispatch({ type: "SET_Y_AXIS_SIDE", payload: "left" })}
              title="left"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_Y_AXIS_SIDE", payload: "right" })}
              title="right"
            />
          </View>
        </TestCase>

        <TestCase itShould="case13: 设置Y轴字体的颜色">
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
              onPress={() => dispatch({ type: "SET_COLORS", payload: { yLabel: 'red' } })}
              title="red"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_COLORS", payload: { yLabel: "green" } })}
              title="green"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => dispatch({ type: "SET_COLORS", payload: { yLabel: "black" } })}
              title="black"
            />
          </View>
        </TestCase>
      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 0.5,
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
