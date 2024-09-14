import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { Pie, PolarChart } from "victory-native";
import { Button } from "../components/Button";
import { appColors } from "./consts/colors";
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const randomNumber = () => Math.floor(Math.random() * (50 - 25 + 1)) + 125;
function generateRandomColor(): string {
  // Generating a random number between 0 and 0xFFFFFF
  const randomColor = Math.floor(Math.random() * 0xffffff);
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
  const [insetColor, setInsetColor] = useState<string>("#fafafa");

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
            >
              {() => {
                return (
                  <>
                    <Pie.Slice />
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
        <TestCase itShould="case2: 更新数据">
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

        <TestCase itShould="case3: 设置切块中间的间隔">
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


        <TestCase itShould="case4: 设置间隔的颜色">
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

        <TestCase itShould="case5: 设置内环的半径，100% 为饼图，小于100 为环形图">
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
