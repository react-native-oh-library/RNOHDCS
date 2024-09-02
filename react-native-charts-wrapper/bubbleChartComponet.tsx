import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import { BubbleChart } from 'react-native-charts-wrapper';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const BubbleChartDemo = () => {
  const data = [
    { x: 1, y: 20, size: 3 },
    { x: 2, y: 43, size: 1 },
    { x: 3, y: 21, size: 4 },
    { x: 4, y: 33, size: 1 },
    { x: 5, y: 23, size: 2 },
    { x: 6, y: 44, size: 3 },
    { x: 7, y: 5, size: 4 },
    { x: 8, y: 12, size: 3 },
  ]
  const data1 = [
    { x: 1, y: 12, size: 2 },
    { x: 2, y: 13, size: 1 },
    { x: 3, y: 32, size: 5 },
    { x: 4, y: 25, size: 2 },
    { x: 5, y: 18, size: 1 },
    { x: 6, y: 10, size: 3 },
    { x: 7, y: 9, size: 2 },
    { x: 8, y: 36, size: 4 },
  ]
  return (
    <Tester>
      <ScrollView style={{ marginBottom: 70 }}>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="enabled 是否设置X轴 Y轴 都为true">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true }}
                yAxis={{ left: { enabled: true }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="enabled 是否设置X轴 Y轴 都为false">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: false }}
                yAxis={{ left: { enabled: false }, right: { enabled: false } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="drawLabels 是否设置绘制此轴的标签 都为true">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, drawLabels: true }}
                yAxis={{ left: { enabled: true, drawLabels: true }, right: { enabled: true, drawLabels: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="drawLabels 是否设置绘制此轴的标签 都为false">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, drawLabels: false }}
                yAxis={{ left: { enabled: true, drawLabels: false }, right: { enabled: true, drawLabels: false } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="drawAxisLine 设置轴旁边的线 都为true ">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, drawAxisLine: true }}
                yAxis={{ left: { enabled: true, drawAxisLine: true }, right: { enabled: true, drawAxisLine: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="drawAxisLine 设置轴旁边的线 都为false  其他用例均已覆盖为true的情况">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, drawAxisLine: false }}
                yAxis={{ left: { enabled: true, drawAxisLine: false }, right: { enabled: true, drawAxisLine: false } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="drawGridLines 是否启用此轴的网格线绘制 其他用例均已覆盖为true的情况">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, drawGridLines: false }}
                yAxis={{ left: { enabled: true, drawGridLines: false }, right: { enabled: true, drawGridLines: false } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="textColor 设置用于标签的文本颜色 ">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, textColor: processColor('#f4f') }}
                yAxis={{ left: { enabled: true, textColor: processColor('#f4f') }, right: { enabled: true, textColor: processColor('#f4f') } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="textSize 设置用于标签的文本大小 ">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, textSize: 20 }}
                yAxis={{ left: { enabled: true, textSize: 12 }, right: { enabled: true, textSize: 20 } }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="fontFamily 设置用于标签的文本字体 ">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, textSize: 20 ,fontFamily:'monospace'}}
                yAxis={{ left: { enabled: true, textSize: 12,fontFamily:'monospace' }, right: { enabled: true, textSize: 12,fontFamily:'monospace' } }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="gridColor 设置此坐标轴的网格线（水平线）的颜色 X轴设置的为#f4f,y轴设置的为#4f4">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, gridColor: processColor("#f4f") }}
                yAxis={{ left: { enabled: true, gridColor: processColor("#4f4") }, right: { enabled: true, gridColor: processColor("#4f4") } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="gridLineWidth 设置远离每个轴绘制的栅格线的宽度">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, gridLineWidth: 5 }}
                yAxis={{ left: { enabled: true, gridLineWidth: 2 }, right: { enabled: true, gridLineWidth: 10 } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="axisLineColor 设置图表周围边框的颜色">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, axisLineColor: processColor("#f4f") }}
                yAxis={{ left: { enabled: true, axisLineColor: processColor("#4f4") }, right: { enabled: true, axisLineColor: processColor("#4f4") } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="axisLineWidth 设置图表周围边框的宽度">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, axisLineWidth: 5 }}
                yAxis={{ left: { enabled: true, axisLineWidth: 6 }, right: { enabled: true, axisLineWidth: 2 } }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="gridDashedLine 设置以虚线模式绘制网格线 lineLength:长度 spaceLength:间隔 phase:开始的点">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, gridDashedLine: { lineLength: 2, spaceLength: 5, phase: 10 } }}
                yAxis={{ left: { enabled: true, gridDashedLine: { lineLength: 2, spaceLength: 5, phase: 10 } }, right: { enabled: true, gridDashedLine: { lineLength: 2, spaceLength: 5, phase: 10 } } }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 X轴限制线，单个,覆盖props：limit(从那个点开始),label(标签),lineColor(限制线颜色),lineWidth(限制线宽度)">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine", lineColor: processColor('#4f4'), lineWidth: 5, valueTextColor: processColor('#4f4') }] }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 X轴限制线，单个,覆盖props：labelPosition(标签坐标),LEFT_TOP(左上)">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine", labelPosition: 'LEFT_TOP' }] }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 X轴限制线，单个,覆盖props：labelPosition(标签坐标),LEFT_BOTTOM(左下)">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine", labelPosition: 'LEFT_BOTTOM' }] }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 X轴限制线，单个,覆盖props：labelPosition(标签坐标),RIGHT_TOP(右上)">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine", labelPosition: 'RIGHT_TOP' }] }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 X轴限制线，单个,覆盖props：labelPosition(标签坐标),RIGHT_BOTTOM(右下)">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine", labelPosition: 'RIGHT_BOTTOM' }] }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 X轴限制线，单个,覆盖props：lineDashPhase(使用虚线作为限制线),lineDashLengths（虚线长度）">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine", lineDashPhase: 10, lineDashLengths: [10, 20] }] }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 X轴限制线，多个">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine" }, { limit: 6, label: "limitLine" }] }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 y轴限制线，单个,左边y轴一个，右边y轴一个,覆盖props：limit(从那个点开始),label(标签),lineColor(限制线颜色),lineWidth(限制线宽度)">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, }}
                yAxis={{
                  left: { enabled: true, limitLines: [{ limit: 20, label: "limitLine", lineColor: processColor('#4f4'), lineWidth: 5, valueTextColor: processColor('#4f4') }] },
                  right: { enabled: true, limitLines: [{ limit: 12, label: "limitLine", lineColor: processColor('#4f4'), lineWidth: 5, valueTextColor: processColor('#4f4') }] }
                }}
              />

            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 labelPosition">
            <Text>Y轴设置位置与X轴设置限制线位置用例一致，则不重复编写</Text>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="limitLines 设置限制线 X轴限制线，多个。y轴限制线，,左边y轴一个，右边y轴一个,覆盖props:lineDashPhase(使用虚线作为限制线),lineDashLengths（虚线长度）">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine" }, { limit: 6, label: "limitLine" }] }}
                yAxis={{ left: { enabled: true,limitLines: [{ limit: 10, label: "limitLine",lineDashPhase:10,lineDashLengths:[5,10] }] }, right: { enabled: true,limitLines: [{ limit: 20, label: "limitLine",lineDashPhase:10,lineDashLengths:[5,10] }] } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="bubble 基础气泡图:(X轴Y轴公共设置)">
          <TestCase itShould="drawLimitLinesBehindData 设置在实际数据下面绘制限制线,限制线在数据的下面 ,true。false的情况，其他用例均已覆盖">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine" }, { limit: 6, label: "limitLine" }],drawLimitLinesBehindData:true }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="bubble 基础气泡图:(data)">
          <TestCase itShould="highlightCircleWidth ">
            <View style={{ width: '100%', height: 300 }}>
              <BubbleChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        drawValues: true, visible: true
                      },

                    },
                  ],

                }}
                maxVisibleValueCount={70}
                xAxis={{ enabled: true, limitLines: [{ limit: 3, label: "limitLine" }, { limit: 6, label: "limitLine" }],drawLimitLinesBehindData:true }}
                yAxis={{ left: { enabled: true, }, right: { enabled: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export default BubbleChartDemo
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