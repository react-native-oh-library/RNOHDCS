import React from "react";
import RNEChartsPro from "react-native-echarts-pro";
import ChinaJsonData from "./chinaJson.js";
import { ditu } from './options';

export default function Demo2() {
    return (
        <RNEChartsPro
            height={350}
            option={ditu}
            customMapData={ChinaJsonData}
            themeName="dark"
            webViewSettings={{
                style: { width: 200 }
            }}
        />
    );
}