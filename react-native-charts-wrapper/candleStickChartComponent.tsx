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
    { x: 12, shadowH: 55, shadowL: 16, open: 25, close: 35 },
  ]
  return (
    <Tester>
      <ScrollView style={{ marginBottom: 100 }}>
        <TestSuite name='烛台图(基础图表)'>
          <TestCase itShould='props:data,viewStyle'>

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
                animation={{ durationX: 1000, durationY: 1000 }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='烛台图(XY轴公共属性)'>
          <TestCase itShould='props:axisMaximum(最大刻度)'>
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
        <TestSuite name='烛台图(XY轴公共属性)'>
          <TestCase itShould='props:axisMinimum(最小刻度)'>
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

                xAxis={{ axisMaximum: 15, axisMinimum: -1, position: 'BOTTOM' }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='烛台图(XY轴公共属性)'>
          <TestCase itShould='props:granularity(最小间隔),granularityEnabled:是否启用，默认为true,设为false则设置了最小间隔也不生效'>
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
                yAxis={{ left: { granularityEnabled: true, granularity: 5 }, right: { granularityEnabled: true, granularity: 5 } }}
                xAxis={{ axisMaximum: 15, axisMinimum: -15, position: 'BOTTOM', granularity: 5, granularityEnabled: true }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='烛台图(XY轴公共属性)'>
          <TestCase itShould='props:labelCount 标签条目数'>
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

                xAxis={{ axisMaximum: 15, axisMinimum: -15, position: 'BOTTOM', labelCount: 40 }}
                yAxis={{ left: { granularityEnabled: true, granularity: 5, labelCount: 80 }, right: { granularityEnabled: true, granularity: 5, labelCount: 80 } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='烛台图(XY轴公共属性)'>
          <TestCase itShould='props:centerAxisLabels 将轴标签居中，而不是在其原始位置绘制它们'>
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

                xAxis={{ axisMaximum: 15, axisMinimum: -15, position: 'BOTTOM', labelCount: 40, centerAxisLabels: true }}
                yAxis={{ left: { axisMaximum: 15, axisMinimum: -15, labelCount: 40, centerAxisLabels: true }, right: { axisMaximum: 15, axisMinimum: -15, labelCount: 40, centerAxisLabels: true } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='烛台图(X轴属性)'>
          <TestCase itShould='props:labelRotationAngle 设置绘制X轴标签的角度（以度为单位）'>
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

                xAxis={{ axisMaximum: 15, axisMinimum: -15, position: 'BOTTOM', labelRotationAngle: 15 }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='烛台图(X轴属性)'>
          <TestCase itShould='props:avoidFirstLastClipping 如果设置为true，图表将避免第一个和最后一个标签条目'>
            <View style={{ height: 300 }}>
              <CandleStickChart
                style={{ width: "100%", height: 300 }}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}

                xAxis={{ axisMaximum: 15, axisMinimum: -15, position: 'BOTTOM', avoidFirstLastClipping: true }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='烛台图(X轴属性)'>
          <TestCase itShould='props:position 设置X轴标签的位置 TOP:在上方'>
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

        <TestSuite name='烛台图(X轴属性)'>
          <TestCase itShould='props:position 设置X轴标签的位置 TOP_INSIDE:在上方,在图表里面'>
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

        <TestSuite name='烛台图(X轴属性)'>
          <TestCase itShould='props:position 设置X轴标签的位置 BOTTOM:在下方'>
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

        <TestSuite name='烛台图(X轴属性)'>
          <TestCase itShould='props:position 设置X轴标签的位置 BOTTOM_INSIDE:在下方，在图表里面'>
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

        <TestSuite name='烛台图(X轴属性)'>
          <TestCase itShould='props:position 设置X轴标签的位置 BOTH_SIDED:上方下方都有'>
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

        <TestSuite name='烛台图(X轴属性)'>
          <TestCase itShould='props:yOffset 为该轴上的标签设置使用的y轴偏移量'>
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

        <TestSuite name='烛台图(Y轴属性)'>
          <TestCase itShould='props:inverted 设置为true，则反转y轴，这意味着低值位于图表底部'>
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


        <TestSuite name='烛台图(Y轴属性)!!!'>
          <TestCase itShould='props:spaceTop 设置顶轴间距，以占满量程的百分比为单位'>
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

        <TestSuite name='烛台图(Y轴属性)!!!'>
          <TestCase itShould='props:spaceBottom 设置底轴间距，以占满量程的百分比为单位'>
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

        <TestSuite name='烛台图(Y轴属性)'>
          <TestCase itShould='props:position 设置y标签的位置 在图表内部'>
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
                yAxis={{ left: { position: 'INSIDE_CHART' }, right: { position: 'INSIDE_CHART' } }}
              />
            </View>
          </TestCase>
        </TestSuite>


        <TestSuite name='烛台图(Y轴属性)'>
          <TestCase itShould='props:position 设置y标签的位置 在图表外部 '>
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
                yAxis={{ left: { position: 'OUTSIDE_CHART' }, right: { position: 'OUTSIDE_CHART' } }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='烛台图(Y轴属性)'>
          <TestCase itShould='props:maxWidth 设置轴可以采用的最大宽度 '>
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

        <TestSuite name='烛台图(Y轴属性)'>
          <TestCase itShould='props:minWidth 设置轴可以采用的最小宽度 '>
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

        <TestSuite name='烛台图(Y轴属性!!!)'>
          <TestCase itShould='props:zeroLine.enabled 网格线是否启用 '>
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
                yAxis={{ left: { zeroLine: { enabled: true,lineWidth:2,lineColor:processColor("#4f4") }, drawGridLines: false, spaceBottom: 40 }, right: { zeroLine: { enabled: true }, drawGridLines: false, spaceBottom: 40 } }}
              />
            </View>
          </TestCase>
        </TestSuite>

      </ScrollView>
    </Tester>

  )
}

export default CandleChartDemo
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