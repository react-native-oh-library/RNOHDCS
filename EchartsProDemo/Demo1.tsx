import React from "react";
import { View, Text } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";
import { huanxing } from './options';

export default function Demo1() {
    return (
        <View style={{ height: 300, paddingTop: 25 }}>
            <Text>基础自定义属性：height/width/option/backgroundColor</Text>
            <RNEChartsPro
                backgroundColor="#e0e0e0"
                height={400}
                width={300}
                option={huanxing}
            />
        </View>
    );
}