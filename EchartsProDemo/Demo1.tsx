import React from "react";
import { View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";
import { huanxing } from './options';

export default function Demo1() {
    return (
        <RNEChartsPro
            backgroundColor="#e0e0e0"
            height={400}
            width={300}
            option={huanxing}
        />
    );
}