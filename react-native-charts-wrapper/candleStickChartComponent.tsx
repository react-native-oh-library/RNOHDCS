import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import { CandleStickChart } from 'react-native-charts-wrapper';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const CandleChartDemo = () => {
  const data = [
    { x: 0, shadowH: 35, shadowL: 80, open: 43, close: 60 },
    { x: 1, shadowH: 22, shadowL: 80, open: 45, close: 50 },
    { x: 2, shadowH: 45, shadowL: 32, open: 43, close: 34 },
    { x: 3, shadowH: 80, shadowL: 12, open: 22, close: 30 },
    { x: 4, shadowH: 65, shadowL: 11, open: 60, close: 35 },
    { x: 5, shadowH: 45, shadowL: 25, open: 27, close: 32 },
    { x: 6, shadowH: 60, shadowL: 35, open: 40, close: 50 },
    { x: 7, shadowH: 56, shadowL: 88, open: 60, close: 70 },
    { x: 8, shadowH: 43, shadowL: 22, open: 35, close: 25 },
    { x: 9, shadowH: 52, shadowL: 35, open: 42, close: 50 },
    { x: 10, shadowH: 77, shadowL: 32, open: 45, close: 37 },
    { x: 11, shadowH: 65, shadowL: 8, open: 35, close: 28 },
    { x: 12, shadowH: 55, shadowL: 16, open: 25, close: 25 },
  ];
  return (
    <Tester>
      <ScrollView style={{ marginBottom: 100 }}>

        <TestSuite name="烛台图(XY轴公共属性)">
          <TestCase itShould="props:axisMaximum(最大刻度) axisMaximum: 15">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ axisMaximum: 15 }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="烛台图(XY轴公共属性)">
          <TestCase itShould="props:axisMinimum(最小刻度) axisMinimum: 0">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ axisMaximum: 15, axisMinimum: 0, position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(XY轴公共属性)">
          <TestCase itShould="props:granularity(最小间隔),granularityEnabled:是否启用，默认为true,设为false则设置了最小间隔也不生效 granularityEnabled: true, granularity: 5 X轴是5，y轴是5,false的情况其他用例均已覆盖">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                yAxis={{
                  left: { granularityEnabled: true, granularity: 5, labelCount: 20 },
                  right: { granularityEnabled: true, granularity: 5, labelCount: 20 },
                }}
                xAxis={{
                  axisMaximum: 15,
                  axisMinimum: -1,
                  position: 'BOTTOM',
                  granularity: 5,
                  granularityEnabled: true,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(XY轴公共属性)">
          <TestCase itShould="props:granularity(最小间隔),granularityEnabled:是否启用，默认为true,设为false则设置了最小间隔也不生效 granularityEnabled: true, X轴是10，y轴是5，false的情况其他用例均已覆盖">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                yAxis={{
                  left: { granularityEnabled: true, granularity: 5, labelCount: 20 },
                  right: { granularityEnabled: true, granularity: 5, labelCount: 20 },
                }}
                xAxis={{
                  axisMaximum: 15,
                  axisMinimum: -1,
                  position: 'BOTTOM',
                  granularity: 10,
                  granularityEnabled: true,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(XY轴公共属性)">
          <TestCase itShould="props:labelCount 标签条目数  labelCount: X轴为10，Y轴为15">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{
                  axisMaximum: 15,
                  axisMinimum: -1,
                  position: 'BOTTOM',
                  labelCount: 10,
                  labelCountForce: true
                }}
                yAxis={{
                  left: {
                    granularityEnabled: true,
             
                    labelCount: 15,
                    labelCountForce: true
                  },
                  right: {
                    granularityEnabled: true,
                    labelCount: 15,
                    labelCountForce: true
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(XY轴公共属性)">
          <TestCase itShould="props:labelCountForce 是否强制设置标签条目数 true ,其他用例已覆盖为false情况">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{
                  axisMaximum: 15,
                  axisMinimum: -1,
                  position: 'BOTTOM',
                  labelCount: 20,
                  labelCountForce: true
                }}
                yAxis={{
                  left: {
                    granularityEnabled: true,
                    granularity: 5,
                    labelCount: 20,
                    labelCountForce: true
                  },
                  right: {
                    granularityEnabled: true,
                    granularity: 5,
                    labelCount: 20,
                    labelCountForce: true
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(XY轴公共属性)">
          <TestCase itShould="props:centerAxisLabels 将轴标签居中，而不是在其原始位置绘制它们 true">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{
                  axisMaximum: 15,
                  axisMinimum: -1,
                  position: 'BOTTOM',
                  labelCount: 20,
                  centerAxisLabels: true,
                }}
                yAxis={{
                  left: {
                    granularityEnabled: true,
                    centerAxisLabels: true,
                  },
                  right: {
                    granularityEnabled: true,
                    centerAxisLabels: true,
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(X轴属性)">
          <TestCase itShould="props:labelRotationAngle 设置绘制X轴标签的角度（以度为单位）labelRotationAngle: 15">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{
                  axisMaximum: 15,
                  axisMinimum: -1,
                  position: 'BOTTOM',
                  labelRotationAngle: 15,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(X轴属性)">
          <TestCase itShould="props:position 设置X轴标签的位置 TOP:在上方">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'TOP' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(X轴属性)">
          <TestCase itShould="props:position 设置X轴标签的位置 TOP_INSIDE:在上方,在图表里面">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'TOP_INSIDE' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(X轴属性)">
          <TestCase itShould="props:position 设置X轴标签的位置 BOTTOM:在下方">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(X轴属性)">
          <TestCase itShould="props:position 设置X轴标签的位置 BOTTOM_INSIDE:在下方，在图表里面">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM_INSIDE' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(X轴属性)">
          <TestCase itShould="props:position 设置X轴标签的位置 BOTH_SIDED:上方下方都有">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTH_SIDED' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(X轴属性)">
          <TestCase itShould="props:yOffset 为该轴上的标签设置使用的y轴偏移量 yOffset: 20">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM', yOffset: 20 }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Y轴属性)">
          <TestCase itShould="props:inverted 设置为true，则反转y轴，这意味着低值位于图表顶部">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
                yAxis={{ left: { inverted: true }, right: { inverted: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Y轴属性)">
          <TestCase itShould="props:spaceTop 设置顶轴间距，以占满量程的百分比为单位 spaceTop: 80">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
                yAxis={{ left: { spaceTop: 80 }, right: { spaceTop: 80 } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Y轴属性)">
          <TestCase itShould="props:spaceBottom 设置底轴间距，以占满量程的百分比为单位 spaceBottom: 80">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
                yAxis={{ left: { spaceBottom: 80 }, right: { spaceBottom: 80 } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Y轴属性)">
          <TestCase itShould="props:position 设置y标签的位置 在图表内部 INSIDE_CHART">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
                yAxis={{
                  left: { position: 'INSIDE_CHART' },
                  right: { position: 'INSIDE_CHART' },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Y轴属性)">
          <TestCase itShould="props:position 设置y标签的位置 在图表外部 OUTSIDE_CHART">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
                yAxis={{
                  left: { position: 'OUTSIDE_CHART' },
                  right: { position: 'OUTSIDE_CHART' },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Y轴属性)">
          <TestCase itShould="props:maxWidth 设置轴可以采用的最大宽度 maxWidth: 10">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
                yAxis={{ left: { maxWidth: 10 }, right: { maxWidth: 10 } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Y轴属性)">
          <TestCase itShould="props:minWidth 设置轴可以采用的最小宽度 minWidth: 50">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
                yAxis={{ left: { minWidth: 50 }, right: { minWidth: 50 } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Y轴属性)">
          <TestCase itShould="props:zeroLine.enabled 网格线是否启用 y轴：false">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
                yAxis={{
                  left: {
                    zeroLine: {
                      enabled: true,
                      lineWidth: 2,
                      lineColor: processColor('#4f4'),
                    },
                    drawGridLines: false,
                    spaceBottom: 40,
                  },
                  right: {
                    zeroLine: { enabled: true },
                    drawGridLines: false,
                    spaceBottom: 40,
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:barSpace 设置在每个的左侧和右侧留出的空间 对比其他图表 图形正方形的间隔 barSpace:0.2">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { barSpace: 0.2 }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:shadowWidth 以像素为单位设置蜡烛阴影线的宽度。默认为3f shadowWidth:5">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { shadowWidth: 5 }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:shadowColor 设置所有条目的阴影颜色 #2d1">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { shadowColor: processColor('#2d1') }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:shadowColorSameAsCandle 将阴影颜色设置为与蜡烛颜色相同的颜色 #d5f">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { shadowColorSameAsCandle: true, decreasingColor: processColor('#d5f') }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:neutralColor 设置在以下情况下应用于此数据集的唯一颜色 *打开==关闭。open和close值一样 #d5f">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { shadowColorSameAsCandle: true, neutralColor: processColor('#d5f') }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:decreasingColor 设置在以下情况下应用于此数据集的唯一颜色 *打开>关闭。open大于close #d5f" >
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { decreasingColor: processColor('#d5f') }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:decreasingPaintStyle 设置打开>关闭时的绘制样式,填充 FILL">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { decreasingPaintStyle: 'FILL' }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:decreasingPaintStyle 设置打开>关闭时的绘制样式,描边 STROKE">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { decreasingPaintStyle: 'STROKE' }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:decreasingPaintStyle 设置打开>关闭时的绘制样式,描边和填充 FILL_AND_STROKE">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { decreasingPaintStyle: 'FILL_AND_STROKE' }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:increasingColor 设置在以下情况下应用于此数据集的唯一颜色 * open <= close。#54f">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { increasingColor: processColor('#54f') }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:increasingPaintStyle 设置打开<关闭时的绘制样式,填充 FILL">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { increasingPaintStyle: 'FILL' }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:increasingPaintStyle 设置打开<关闭时的绘制样式,描边 STROKE">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { increasingPaintStyle: 'STROKE' }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="烛台图(Data)">
          <TestCase itShould="props:increasingPaintStyle 设置打开<关闭时的绘制样式,描边和填充 FILL_AND_STROKE">
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { increasingPaintStyle: 'FILL_AND_STROKE' }
                    },
                  ],
                }}
                xAxis={{ position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default CandleChartDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 100,
  },
  chart: {
    flex: 1,
  },
});
