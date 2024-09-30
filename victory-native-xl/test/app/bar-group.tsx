import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { BarGroup, CartesianChart } from "victory-native";
import { LinearGradient, useFont, vec } from "@shopify/react-native-skia";
import { appColors } from "./consts/colors";
import inter from "../../assets/inter-medium.ttf";
import { Button } from "../components/Button";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const DATA = (length: number = 10) =>
  Array.from({ length }, (_, index) => ({
    x: index + 1,
    y: 10 + Math.floor(40 * Math.random()),
    z: 30 + Math.floor(20 * Math.random()),
    w: 5 + Math.floor(45 * Math.random()),
  }));

export default function BarGroupPage() {
  const [data, setData] = React.useState(DATA(5));
  const [betweenGroupPadding, setBetweenGroupPadding] = React.useState(0.4);
  const [withinGroupPadding, setWithinGroupPadding] = React.useState(0.1);
  const [roundedCorner, setRoundedCorner] = React.useState(0);
  const [barCount, setBarCount] = React.useState(5);
  const [barWidth, setBarWidth] = React.useState(10);
  const [color1, setColor1] = React.useState("#f472b6");
  const [color2, setColor2] = React.useState("#c084fc");
  const [color3, setColor3] = React.useState("#a5f3fc");
  const font = useFont(inter, 12);

  return (
    <Tester style={{ flex: 1 }}>
      <TestCase itShould="case1: 分组条形图">
        <View style={{ height: 180 }}>
          <CartesianChart
            data={data}
            xKey="x"
            yKeys={["y", "z", "w"]}
            domain={{ y: [0, 50] }}
            padding={{ left: 10, right: 10, bottom: 10, top: 15 }}
            domainPadding={{ left: 50, right: 80, top: 30 }}
            axisOptions={{ font }}
          >
            {({ points, chartBounds }) => (
              <BarGroup
                chartBounds={chartBounds}
                betweenGroupPadding={betweenGroupPadding}
                withinGroupPadding={withinGroupPadding}
                roundedCorners={{
                  topLeft: roundedCorner,
                  topRight: roundedCorner,
                }}
                barCount={barCount}
                barWidth={barWidth}
              >
                <BarGroup.Bar points={points.y} animate={{ type: "timing" }} color={color1} />
                <BarGroup.Bar points={points.z} animate={{ type: "timing" }} color={color2} />
                <BarGroup.Bar points={points.w} animate={{ type: "timing" }} color={color3} />
              </BarGroup>
            )}
          </CartesianChart>
        </View>
      </TestCase>


      <ScrollView
        style={styles.optionsScrollView}
        contentContainerStyle={styles.options}
      >
        <TestCase itShould="case2: 更新数据，会有动画效果">
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


        <TestCase itShould="case3: betweenGroupPadding 参数 设置每组之间的间隔">
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
                if (betweenGroupPadding < 1) {
                  setBetweenGroupPadding(betweenGroupPadding + 0.1);
                }
              }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                if (betweenGroupPadding > 0) {
                  setBetweenGroupPadding(betweenGroupPadding - 0.1);
                }
              }}
              title="down"
            />
          </View>
        </TestCase>

        <TestCase itShould="case4: withinGroupPadding 属性 设置组间间隔">
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
                setBarWidth(0);
                setBarCount(0);
                setWithinGroupPadding(withinGroupPadding + 0.1);

              }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                setBarWidth(0);
                setBarCount(0);
                setWithinGroupPadding(withinGroupPadding - 0.1);
              }}
              title="down"
            />
          </View>
        </TestCase>

        <TestCase itShould="case5: roundedCorners 属性 设置柱顶圆角半径">
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
                  setRoundedCorner(roundedCorner + 2);
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

        <TestCase itShould="case6: color 属性 设置条形图颜色">
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
              onPress={() => { setColor1("green") }}
              title="setColor1 green"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => { setColor2("blue") }}
              title="setColor2 blue"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => { setColor3("red") }}
              title="setColor3 red"
            />
          </View>
        </TestCase>

        <TestCase itShould="case7: barWidth 属性 设置 条形的宽度">
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
              onPress={() => { setBarWidth(8) }}
              title="setBarWidth 8"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => { setBarWidth(12) }}
              title="setBarWidth 12"
            />
          </View>
        </TestCase>

        <TestCase itShould="case8: barCount 属性 设置条形的宽度 比 barWidth 的 优先级低。 数值越大，宽度越小">
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
              onPress={() => { setBarWidth(0); setBarCount(6) }}
              title="setBarCount 6"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => { setBarWidth(0); setBarCount(8) }}
              title="setBarCount 8"
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
    height: 350,
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
