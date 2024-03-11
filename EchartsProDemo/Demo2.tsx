import React from "react";
import { Text, View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";
import ChinaJsonData from "./chinaJson.js";
import { ditu } from './options';

export default function Demo2() {
    return (
        <View style={{ height: 300 }}>
            <Text>当前已配置themeName为dark,使用webViewSettings控制宽度为200，地图数据使用customMapData自定义中国地图数据</Text>
            <RNEChartsPro
                height={350}
                option={ditu}
                customMapData={ChinaJsonData}
                themeName="dark"
                webViewSettings={{
                    style: { width: 200 }
                }}
            />
        </View>
    );
}