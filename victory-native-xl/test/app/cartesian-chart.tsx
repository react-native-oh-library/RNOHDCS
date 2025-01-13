import { useFont, Line as SkiaLine, Circle, vec, Skia, Shader } from "@react-native-oh-tpl/react-native-skia";
import * as React from "react";
import { useMemo, useState } from "react";
import { SafeAreaView, Text, ScrollView, StyleSheet, View } from "react-native";
import {
  CartesianChart,
  Line,
  Scatter,
  Area,
  useChartPressState
} from "victory-native";
import {
  type SharedValue,
  useAnimatedStyle,
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
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
const TestNumber = [0.2,0.5,0.5,0.2,0,0.3,0.1,0.2,0.3,0.5];
const DATA = (ticksX: number[], ticksY: number[]) => {
  const maxY = Math.max(...ticksY);
  const minY = Math.min(...ticksY);
  const maxX = Math.max(...ticksX);
  const minX = Math.min(...ticksX);
  const dX = maxX - minX;
  const dY = maxY - minY;

  return Array.from({ length: 10 }, (_, index) => ({
    day: minX + (dX * index) / 10,
    sales: TestNumber[index] * dY + minY,
  }));
};

const ActiveValueIndicator = ({
  xPosition,
  yPosition,
  top,
  bottom,
  activeValue,
  textColor,
  lineColor,
  indicatorColor,
  topOffset = 0,
}: {
  xPosition: SharedValue<number>;
  yPosition: SharedValue<number>;
  activeValue: SharedValue<number>;
  bottom: number;
  top: number;
  textColor: string;
  lineColor: string;
  indicatorColor: SharedValue<string>;
  topOffset?: number;
}) => {
  const FONT_SIZE = 16;
  const font = useFont(inter, FONT_SIZE);
  const start = useDerivedValue(() => vec(xPosition.value, bottom));
  const end = useDerivedValue(() =>
    vec(xPosition.value, top + 1.5 * FONT_SIZE + topOffset),
  );
  // Text label
  const activeValueDisplay = useDerivedValue(
    () => "$" + activeValue.value.toFixed(2),
  );
  const activeValueWidth = useDerivedValue(
    () => font?.measureText(activeValueDisplay.value).width || 0,
  );
  const activeValueX = useDerivedValue(
    () => xPosition.value - activeValueWidth.value / 2,
  );

  return (
    <>
      <SkiaLine p1={start} p2={end} color={lineColor} strokeWidth={1} />
      <Circle cx={xPosition} cy={yPosition} r={10} color={indicatorColor} />
      <Circle
        cx={xPosition}
        cy={yPosition}
        r={8}
        color="hsla(0, 0, 100%, 0.25)"
      />
    </>
  );
};

export default function CartesianChartPage() {
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
      stroke: "#71717a",
      xLine: "#71717a",
      yLine: "#aabbcc",
      frameLine: "#444",
      xLabel: appColors.text.light,
      yLabel: appColors.text.light,
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
  
  const initChartPressState = { x: 0, y: { sales: 0 } } as const;

  const [domain, setDomain] = useState(8);
  const [gestureLongPressDelay, setGestureLongPressDelay] = useState(0);
  const [chartBottom, setChartBottom] = React.useState(0);
  const [chartLeft, setChartLeft] = React.useState(0);
  const data = useMemo(() => DATA(ticksX, ticksY), [ticksX, ticksY]);
  const { state: firstTouch, isActive: isFirstPressActive } =
  useChartPressState(initChartPressState);
  const { state: secondTouch, isActive: isSecondPressActive } =
  useChartPressState(initChartPressState);
  const { state, isActive } = useChartPressState({ x: 0, y: { sales: 0 } });

    // Determine if the selected range has a positive delta, which will be used to conditionally pick colors.
    const isDeltaPositive = useDerivedValue(() => {
      if (!isSecondPressActive) return true;
  
      const early =
        firstTouch.x.value.value < secondTouch.x.value.value
          ? firstTouch
          : secondTouch;
      const late = early === firstTouch ? secondTouch : firstTouch;
      return early.y.sales.value.value < late.y.sales.value.value;
    });

  // Indicator color based on delta
  const indicatorColor = useDerivedValue(() => {
    if (!(isFirstPressActive && isSecondPressActive)) return appColors.tint;
    return isDeltaPositive.value
      ? appColors.success["dark"]
      : appColors.error["dark"];
  });

  const [w, setW] = React.useState(0);
  const [h, setH] = React.useState(0);

  const time = useSharedValue(0);
  React.useEffect(() => {
    time.value = withRepeat(
      withTiming(30, { duration: 60 * 1000, easing: Easing.linear }),
      -1,
    );
  }, [time]);

  const uniforms = useDerivedValue(() => ({
    resW: w,
    resH: h,
    time: time.value,
  }));

  function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
    return <Circle cx={x} cy={y} r={8} color="black" />;
  }

  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView
        style={styles.optionsScrollView}
        contentContainerStyle={styles.options}
      >
      <TestCase itShould="case1: renderOutside 属性 用于绘制轴之外的元素，点击图表，点位高亮的颜色设置为橙色">
        <View style={{ height: 180 }}>
          <CartesianChart
            xKey="day"
            padding={{left: chartPadding, right: 10, bottom: 10 }}
            yKeys={["sales"]}
            chartPressState={[firstTouch, secondTouch]}
            domain={{ y: [0, domain] }}
            data={data}
            domainPadding={{ left: domainPadding, right: 50, top: 30 }}

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
            
            renderOutside={({ chartBounds }) => (
              <>
                {isFirstPressActive && (
                <>
                  <ActiveValueIndicator
                    xPosition={firstTouch.x.position}
                    yPosition={firstTouch.y.sales.position}
                    bottom={chartBounds.bottom}
                    top={chartBounds.top}
                    activeValue={firstTouch.y.sales.value}
                    textColor={colors.xLabel}
                    lineColor={"#71717a"}
                    indicatorColor={indicatorColor}
                  />
                </>
              )}
              {isSecondPressActive && (
                <>
                  <ActiveValueIndicator
                    xPosition={secondTouch.x.position}
                    yPosition={secondTouch.y.sales.position}
                    bottom={chartBounds.bottom}
                    top={chartBounds.top}
                    activeValue={secondTouch.y.sales.value}
                    textColor={colors.xLabel}
                    lineColor={"#71717a"}
                    indicatorColor={indicatorColor}
                    topOffset={16}
                  />
                </>
              )}
              </>
            )}
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

        <TestCase itShould="case2: domain 属性 设置轴坐标值的上下限">
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
                onPress={() => { setDomain(10) }}
                title="domain 10"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => { setDomain(7); }}
                title="domain 7"
              />
          </View>
        </TestCase>
        
        <TestCase itShould="case3: domainPadding 属性 设置图表绘制区域与轴的间距">
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
                if (domainPadding < 20) {
                  dispatch({ type: "SET_DOMAIN_PADDING", payload: (domainPadding + 1) });
                }
              }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                if (domainPadding > 0) {
                  dispatch({ type: "SET_DOMAIN_PADDING", payload: (domainPadding - 1) });
                }
              }}
              title="down"
            />
          </View>
        </TestCase>

        <TestCase itShould="case4: padding 属性 设置图表的边距">
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
        
        <TestCase itShould="case5: data 属性 ， 设置不同的点位值">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="x"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                axisOptions={{ font }}
                data={[
                  { x: "x1", sales: 2},
                  { x: "x2", sales: 4},
                  { x: "x3", sales: 2},
                  { x: "x4", sales: 4},
                  { x: "x5", sales: 2}
                ]}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      strokeWidth={3}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="x"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                axisOptions={{ font }}
                data={[
                  { x: "data1", sales: 1},
                  { x: "data2", sales: 2},
                  { x: "data3", sales: 3},
                  { x: "data4", sales: 4},
                  { x: "data5", sales: 5}
                ]}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      strokeWidth={3}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
          </TestCase>

          <TestCase itShould="case6: xKey 属性 ， 设置X轴的点位值">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="x"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                axisOptions={{ font }}
                data={[
                  { x: "x1", sales: 6},
                  { x: "x2", sales: 3},
                  { x: "x3", sales: 5},
                  { x: "x4", sales: 8},
                  { x: "x5", sales: 2}
                ]}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      strokeWidth={3}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="x"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                axisOptions={{ font }}
                data={[
                  { x: "data1", sales: 6},
                  { x: "data2", sales: 3},
                  { x: "data3", sales: 5},
                  { x: "data4", sales: 8},
                  { x: "data5", sales: 2}
                ]}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      strokeWidth={3}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
          </TestCase>

          <TestCase itShould="case7: yKeys 属性 ， 设置Y轴的点位值">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="x"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                axisOptions={{ font }}
                data={[
                  { x: "x1", sales: 2},
                  { x: "x2", sales: 4},
                  { x: "x3", sales: 2},
                  { x: "x4", sales: 4},
                  { x: "x5", sales: 2}
                ]}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      strokeWidth={3}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="x"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                axisOptions={{ font }}
                data={[
                  { x: "x1", sales: 1},
                  { x: "x2", sales: 2},
                  { x: "x3", sales: 3},
                  { x: "x4", sales: 4},
                  { x: "x5", sales: 5}
                ]}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      strokeWidth={3}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
          </TestCase>

          <TestCase itShould="case8: children 属性 ， 展现不同的图表">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="x"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                axisOptions={{ font }}
                data={[
                  { x: "x1", sales: 2},
                  { x: "x2", sales: 4},
                  { x: "x3", sales: 2},
                  { x: "x4", sales: 4},
                  { x: "x5", sales: 2}
                ]}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      strokeWidth={3}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="x"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                axisOptions={{ font }}
                data={[
                  { x: "x1", sales: 1},
                  { x: "x2", sales: 2},
                  { x: "x3", sales: 3},
                  { x: "x4", sales: 4},
                  { x: "x5", sales: 5}
                ]}
              >
                {({ points, chartBounds }) => {
                  return (
                    <>
                      <Area
                      points={points.sales}
                      y0={chartBounds.bottom}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
          </TestCase>

        <TestCase itShould="case9: axisOptions 属性 ， 不设置该属性，则没有 坐标轴的显示">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                data={data}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      curveType={curveType}
                      color={colors.stroke!}
                      strokeWidth={strokeWidth}
                      />
                      <Scatter
                        radius={scatterRadius}
                        points={points.sales}
                        animate={{ type: "spring" }}
                        color={colors.scatter!}
                      />
                    </>
                  );
                }}
              </CartesianChart>
            </View>
          </TestCase>

          <TestCase itShould="case10: chartPressState 属性 ， 设置该属性后点击后移动会有手势效果">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                axisOptions={{ font }}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                data={data}
                chartPressState={state}
                gestureLongPressDelay={gestureLongPressDelay}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      curveType={curveType}
                      color={colors.stroke!}
                      strokeWidth={strokeWidth}
                      />
                      <Scatter
                        radius={scatterRadius}
                        points={points.sales}
                        animate={{ type: "spring" }}
                        color={colors.scatter!}
                      />
                      {isActive && (
                      <ToolTip x={state.x.position} y={state.y.sales.position} />
                      )}
                    </>
                  );
                }}
              </CartesianChart>
            </View>
          </TestCase>

          <TestCase itShould="case11: gestureLongPressDelay 属性 设置手势时延">
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
                onPress={() => { setGestureLongPressDelay(1000) }}
                title="gestureLongPressDelay 1000ms"
              />
              <Button
                style={{ flex: 1 }}
                onPress={() => { setGestureLongPressDelay(10); }}
                title="gestureLongPressDelay 10ms"
              />
          </View>
        </TestCase>
        
        <TestCase itShould="case12: onChartBoundsChange 属性 ， 可进行自定义绘图">
            <View style={{ height: 180 }}>
              <CartesianChart
                xKey="day"
                padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
                yKeys={["sales"]}
                axisOptions={{ font }}
                domainPadding={{ left: 50, right: 100, top: 30 }}
                domain={{ y: [0, 8] }}
                data={data}
                onChartBoundsChange={({ left, right, top, bottom }) => {
                  setW(right - left);
                  setH(bottom - top);
                }}
              >
                {({ points }) => {
                  return (
                    <>
                      <Line
                      points={points.sales}
                      curveType={curveType}
                      color={colors.stroke!}
                      strokeWidth={strokeWidth}>
                        <Shader source={mindbend} uniforms={uniforms} />
                      </Line>
                      
                      <Scatter
                        radius={scatterRadius}
                        points={points.sales}
                        animate={{ type: "spring" }}
                        color={colors.scatter!}
                      />
                      
                    </>
                  );
                }}
              </CartesianChart>
            </View>
          </TestCase>
      </ScrollView>
    </Tester>
  );
}

const mindbend = Skia.RuntimeEffect.Make(`
uniform float time;
uniform float resW;
uniform float resH;

float f(vec3 p) {
    p.z -= time * 10.;
    float a = p.z * .1;
    p.xy *= mat2(cos(a), sin(a), -sin(a), cos(a));
    return .1 - length(cos(p.xy) + sin(p.yz));
}

vec4 main(vec2 FC) { 
    vec3 d = .5 - FC.xy1 / resH;
    vec3 p=vec3(0);
    for (int i = 0; i < 32; i++) {
      p += f(p) * d;
    }
    return ((sin(p) + vec3(2, 5, 12)) / length(p)).xyz1;
}
`)!;

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
