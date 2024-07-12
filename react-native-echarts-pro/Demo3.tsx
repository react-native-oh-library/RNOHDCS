
import React from 'react';
import {
    View, Text
} from 'react-native';
import RNEChartsPro from 'react-native-echarts-pro';


export default function App(): React.JSX.Element {
    const liquidOption = {
        series: [
            {
                type: "liquidFill",
                data: [0.6],
                color: ["#afb11b"],
                itemStyle: {
                    opacity: 0.6,
                },
                emphasis: {
                    itemStyle: {
                        opacity: 0.9,
                    },
                },
            },
        ],
    };

    return (
        <View>
            <Text>extension自定义水球图(需要网络)</Text>
            <RNEChartsPro
                option={liquidOption}
                extension={
                    [
                        "https://cdn.jsdelivr.net/npm/echarts-liquidfill@3.0.0/dist/echarts-liquidfill.min.js",
                    ]
                } />
        </View>
    );
}

