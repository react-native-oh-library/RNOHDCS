import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";
import * as options from './options';

export default function Demo1() {
    const optionList = [
        { title: '极坐标系', option: options.jizuobiao },
        { title: '散点图', option: options.sandian },
        { title: 'k线图', option: options.kxian },
        { title: '雷达图', option: options.leida },
        { title: '漏斗图', option: options.loudou },
        // { title: '柱状图', option: options.zhuzhuang },
        // { title: '仪表盘', option: options.yibiaopan },
        // { title: '盒须图', option: options.hexu },
        // { title: '关系图', option: options.guanxi },
        // { title: '矩形图', option: options.juxing },
        // { title: '旭日图', option: options.xuri },
        // { title: '坐标系', option: options.zuobiao },
        // { title: '桑基图', option: options.sangji },
    ]
    return (
        <ScrollView style={{ height: 'auto', paddingTop: 25 }}>
            <Text>展示多种图表配置</Text>
            {optionList.map(item => (
                <View key={item.title}>
                    <Text style={styles.title}>{item.title}</Text>
                    <RNEChartsPro height={400} option={item.option} />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        backgroundColor: '#D3E3FD',
        padding: 10,
        marginTop: 10,
        fontWeight: 'bold'
    }
})