import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Circle, useFont } from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";
import inter from "../assets/inter-medium.ttf";

function randomNumber() {
  return Math.floor(Math.random() * 26) + 12;
}
const DATA = (numberPoints = 13) =>
  Array.from({ length: numberPoints }, (_, index) => ({
    day: index + 1,
    highTmp: randomNumber(),
  }));

const [data, setData] = useState(DATA());

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
    return <Circle cx={x} cy={y} r={8} color="black" />;
  }
export function LineChartExample() {
  const font = useFont(inter, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });
  return (
    <>
      <View style={{height: 300}}>
      <Text>Line Chart</Text>
      <CartesianChart
        data={data}
        xKey="day"
        yKeys={["highTmp"]}
        axisOptions={{ font }}
        chartPressState={state}
      >
        {({ points }) => (
          <>
          <Line 
            points={points.highTmp} 
            color="red" 
            strokeWidth={3} 
            curveType="catmullRom"
            animate={{ type: "timing", duration: 300}}
            connectMissingData={true}
          />
          {isActive && (
            <ToolTip x={state.x.position} y={state.y.highTmp.position} />
          )}
          </>
        )}
      </CartesianChart>
      </View>
      </>
  );
}
