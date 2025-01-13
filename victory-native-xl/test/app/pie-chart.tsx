import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { LinearGradient, vec } from "@react-native-oh-tpl/react-native-skia";
import { Pie, PolarChart } from "@react-native-oh-tpl/victory-native-xl";
import { Button } from "../components/Button";
import { appColors } from "./consts/colors";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

function calculateGradientPoints(
  radius: number,
  startAngle: number,
  endAngle: number,
  centerX: number,
  centerY: number,
) {
  // Calculate the midpoint angle of the slice for a central gradient effect
  const midAngle = (startAngle + endAngle) / 2;

  // Convert angles from degrees to radians
  const startRad = (Math.PI / 180) * startAngle;
  const midRad = (Math.PI / 180) * midAngle;

  // Calculate start point (inner edge near the pie's center)
  const startX = centerX + radius * 0.5 * Math.cos(startRad);
  const startY = centerY + radius * 0.5 * Math.sin(startRad);

  // Calculate end point (outer edge of the slice)
  const endX = centerX + radius * Math.cos(midRad);
  const endY = centerY + radius * Math.sin(midRad);

  return { startX, startY, endX, endY };
}

// const randomNumber = () => Math.floor(Math.random() * (50 - 25 + 1)) + 125;改动位置
const randomNumber = () => Math.floor((50 - 25 + 1)) + 125;

function generateRandomColor(): string {
  // Generating a random number between 0 and 0xFFFFFF
  // const randomColor = Math.floor(Math.random() * 0xffffff);改动位置
  const randomColor = Math.floor(0x336688);
  // Converting the number to a hexadecimal string and padding with zeros
  return `#${randomColor.toString(16).padStart(6, "0")}`;
}

const DATA = (numberPoints = 5) =>
  Array.from({ length: numberPoints }, (_, index) => ({
    value: randomNumber(),
    color: generateRandomColor(),
    label: `Label ${index + 1}`,
  }));

export default function PieChart() {
  const [dataTest, setDataTest] = useState(DATA(5));
  const [insetWidth, setInsetWidth] = useState(4);
  const [innerRadius, setInnerRadius] = useState("100%");
  const [circleSweepDegrees, setCircleSweepDegrees] = useState(360);
  const [startAngle, setStartAngle] = useState(30);
  const [insetColor, setInsetColor] = useState<string>("#fafafa");
  const [linearGradient, setLinearGradient] = useState(false);

  return (
    <Tester style={{ flex: 1 }}>
      <TestCase itShould="case1: 饼状图 图表">
        <View style={{ height: 180 }}>
          <PolarChart
            data={dataTest}
            colorKey={"color"}
            valueKey={"value"}
            labelKey={"label"}
          >
            <Pie.Chart
              innerRadius={innerRadius}
              circleSweepDegrees={circleSweepDegrees}
              startAngle={startAngle}
            >
              {({ slice }) => {
                const { startX, startY, endX, endY } = calculateGradientPoints(
                  slice.radius,
                  slice.startAngle,
                  slice.endAngle,
                  slice.center.x,
                  slice.center.y,
                );

                return (
                  <>
                    <Pie.Slice>
                    {linearGradient?<LinearGradient
                        start={vec(startX, startY)}
                        end={vec(endX, endY)}
                        colors={[slice.color, `${slice.color}50`]}
                        positions={[0, 1]}
                      />:null}
                    </Pie.Slice>
                    <Pie.SliceAngularInset
                      angularInset={{
                        angularStrokeWidth: insetWidth,
                        angularStrokeColor: insetColor,
                      }}
                    />
                  </>
                );
              }}
            </Pie.Chart>
          </PolarChart>
        </View>
      </TestCase>

      <ScrollView
        style={styles.optionsScrollView}
        contentContainerStyle={styles.options}
      >

        <TestCase itShould="case2: angularStrokeWidth 属性 设置切块中间的间隔">
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
                if (insetWidth < 6) {
                  setInsetWidth(insetWidth + 1)
                }
              }}
              title="up"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                if (insetWidth > 0) {
                  setInsetWidth(insetWidth - 1);
                }

              }}
              title="down"
            />
          </View>
        </TestCase>


        <TestCase itShould="case3: angularStrokeColor 属性 设置间隔的颜色">
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
              onPress={() => setInsetColor('red')}
              title="red"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setInsetColor('green')}
              title="green"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setInsetColor('black')}
              title="black"
            />
          </View>
        </TestCase>

        <TestCase itShould="case4: innerRadius 属性 设置内环的半径，100% 为饼图，小于100 为环形图">
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
              onPress={() => setInnerRadius('50%')}
              title="innerRadius 50%"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setInnerRadius('80%')}
              title="innerRadius 80%"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setInnerRadius('100%')}
              title="innerRadius 100%"
            />
          </View>
        </TestCase>

        <TestCase itShould="case5: circleSweepDegrees 属性 设置环形角度，0-360">
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
              onPress={() => setCircleSweepDegrees(90)}
              title="CircleSweepDegrees 90"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setCircleSweepDegrees(180)}
              title="CircleSweepDegrees 180"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setCircleSweepDegrees(360)}
              title="CircleSweepDegrees 360"
            />
          </View>
        </TestCase>

        <TestCase itShould="case6: startAngle 属性 设置起始角度，0-360">
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
              onPress={() => setStartAngle(45)}
              title="setStartAngle 45"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setStartAngle(90)}
              title="setStartAngle 90"
            />
          </View>
        </TestCase>

        <TestCase itShould="case7: children 属性 设置饼状图每个切片属性 以下是渐变效果">
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
              onPress={() => setLinearGradient(true)}
              title="enbale"
            />
            <Button
              style={{ flex: 1 }}
              onPress={() => setLinearGradient(false)}
              title="disable"
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
