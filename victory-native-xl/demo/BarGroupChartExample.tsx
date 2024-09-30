import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { CartesianChart, BarGroup } from "victory-native";
import { useFont } from "@shopify/react-native-skia";

import inter from "../assets/inter-medium.ttf";

const DATA = (length: number = 10) =>
  Array.from({ length }, (_, index) => ({
    x: index + 1,
    y: 10 + Math.floor(40 * Math.random()),
    z: 30 + Math.floor(20 * Math.random()),
    w: 5 + Math.floor(45 * Math.random()),
  }));

export function BarGroupChartExample() {
  const font = useFont(inter, 12);
  return (
    <>
      <SafeAreaView>
      <View style={{height: 300}}>
      <Text>BarGroup Chart</Text>
      <CartesianChart
        data={DATA()}
        xKey="x"
        yKeys={["y", "z", "w"]}
        axisOptions={{ font }}
      >
        {({ points, chartBounds }) => (
          <BarGroup
          chartBounds={chartBounds}
          betweenGroupPadding={0.4}
          withinGroupPadding={0.1}
          roundedCorners={{
            topLeft: 0,
            topRight: 0,
          }}
        >
          <BarGroup.Bar points={points.y} animate={{ type: "timing" }} />
          <BarGroup.Bar points={points.z} animate={{ type: "timing" }} />
          <BarGroup.Bar points={points.w} animate={{ type: "timing" }} />
        </BarGroup>
        )}
      </CartesianChart>
      </View>
      </SafeAreaView>
      </>
  );
}
