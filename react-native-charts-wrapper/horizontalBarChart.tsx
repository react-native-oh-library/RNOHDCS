import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import { BarChart, HorizontalBarChart } from 'react-native-charts-wrapper';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const HorizontalBarChartDemo = () => {
  const data = [
    { x: 1, y: 20 },
    { x: 2, y: 43 },
    { x: 3, y: 21 },
    { x: 4, y: 33 },
    { x: 5, y: 23 },
    { x: 6, y: 44 },
    { x: 7, y: 5 },
    { x: 8, y: 12 },
  ]
  return (
    <Tester>
      <ScrollView style={{ marginBottom: 70 }}>


        <TestSuite name="horizontalBarChart 基础水平柱状图:数据(data)">
          <TestCase itShould="Props:data">
            <View style={{ width: '100%', height: 300 }}>
              <HorizontalBarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [processColor('#333'), processColor('#f54'), processColor('#4f4')],
                      },
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="horizontalBarChart 水平柱状图">
          <TestCase itShould="Props:dragDecelerationEnabled设置拖拽减速 dragDecelerationFrictionCoef={0.8}">
            <View style={{ width: '100%', height: 300 }}>
              <HorizontalBarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {

                      },
                    },
                  ],
                }}
                touchEnabled={true}
                dragDecelerationEnabled={true}
                dragDecelerationFrictionCoef={0.8}
                dragEnabled={true}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="horizontalBarChart 水平柱状图">
          <TestCase itShould="Props:dragDecelerationEnabled设置拖拽减速 dragDecelerationFrictionCoef={0.1}">
            <View style={{ width: '100%', height: 300 }}>
              <HorizontalBarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {

                      },
                    },
                  ],
                }}
                touchEnabled={true}
                dragDecelerationEnabled={true}
                dragDecelerationFrictionCoef={0.1}
                dragEnabled={true}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="horizontalBarChart 水平柱状图(drawGridBackground)">
          <TestCase itShould="Props:drawGridBackground 是否设置网格背景颜色,gridBackgroundColor：#4f4 设置网格背景颜色,如为false则在其他用例中均覆盖">
            <View style={{ width: '100%', height: 300 }}>
              <HorizontalBarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}

                drawGridBackground={true}
                gridBackgroundColor={processColor('#4f4')}

              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="horizontalBarChart 水平柱状图(drawBorders)">
          <TestCase itShould="Props:drawBorders 是否设置边框,borderColor 设置边框颜色，borderWidth 设置边框宽度 同一种需要一起设置  drawBorders={true} borderWidth={4} borderColor={processColor('#4f4')}">
            <View style={{ width: '100%', height: 300 }}>
              <HorizontalBarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}

                drawBorders={true}
                borderColor={processColor('#4f4')}
                borderWidth={4}

              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="horizontalBarChart 水平柱状图(drawBorders)">
          <TestCase itShould="Props:drawBorders 是否设置边框,borderColor 设置边框颜色，borderWidth 设置边框宽度 同一种需要一起设置  drawBorders={true} borderWidth={6} borderColor={processColor('#328')}">
            <View style={{ width: '100%', height: 300 }}>
              <HorizontalBarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}

                drawBorders={true}
                borderColor={processColor('#328')}
                borderWidth={6}

              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="horizontalBarChart 水平柱状图(minOffset)">
          <TestCase itShould="Props:minOffset 设置最小偏移 图表偏移多少 minOffset={30}">
            <View style={{ width: '100%', height: 300 }}>
              <HorizontalBarChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                    },
                  ],
                }}

                minOffset={30}

              />
            </View>
          </TestCase>
        </TestSuite>




      </ScrollView>
    </Tester>
  )
}

export default HorizontalBarChartDemo
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