import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {ScatterChart} from 'react-native-charts-wrapper';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

const ScatterChartDemo = () => {
  const data = [
    {x: 1, y: 29},
    {x: 2, y: 12},
    {x: 3, y: 33},
    {x: 4, y: 12},
    {x: 5, y: 10},
    {x: 6, y: 22},
    {x: 7, y: 14},
    {x: 8, y: 19},
    {x: 9, y: 23},
    {x: 10, y: 44},
    {x: 11, y: 14},
    {x: 12, y: 35},
  ];
  const data2 = [
    {x: 1, y: 23},
    {x: 2, y: 34},
    {x: 3, y: 54},
    {x: 4, y: 13},
    {x: 5, y: 65},
    {x: 6, y: 16},
    {x: 7, y: 52},
    {x: 8, y: 66},
    {x: 9, y: 12},
    {x: 10, y: 4},
    {x: 11, y: 14},
    {x: 12, y: 35},
  ];
  return (
    <Tester>
      <ScrollView style={{marginBottom: 70}}>
        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:AutoScaleMinMaxEnabled  是否设置Y轴的自动缩放标记">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                yAxis={{left:{axisMaximum:200,axisMinimum:0}}}
                touchEnabled={true}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                autoScaleMinMaxEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:highlightPerDragEnabled  设置false,可防止值通过点击手势突出显示">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                highlightPerDragEnabled={false}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:scaleEnabled true 是否启用缩放 scaleXEnabled true是否启用x轴缩放,其他用例均覆盖false的情况">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                scaleEnabled={true}
                scaleXEnabled={true}
                touchEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:scaleEnabled  true 是否启用缩放 scaleYEnabled true 是否启用y轴缩放">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                scaleEnabled={true}
                scaleYEnabled={true}
                touchEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:scaleEnabled  是否启用缩放 scaleXEnabled 是否启用X轴缩放,scaleYEnabled 是否启用y轴缩放 同时设置x轴 y轴缩放">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                touchEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:dragEnabled true 当设置缩放后，可设置拖动，可以拖动图表查看因为缩放看不到的数据 false情况其他用例已经覆盖">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                dragEnabled={true}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                touchEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:pinchZoom 如果设置为true，则x和y轴都可以用2个手指同时缩放，如果为false，x轴和y轴可以单独缩放,false情况缩放用例已经覆盖">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                touchEnabled={true}
                pinchZoom={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:doubleTapToZoomEnabled true 将此属性设置为true可通过双击图表启用放大功能 需配合的props:scaleEnabled touchEnable,pinchZoom">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                touchEnabled={true}
                pinchZoom={true}
                doubleTapToZoomEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:zoom 按给定的比例因子放大或缩小 scaleX:5, scaleY: 5, xValue: 15, yValue:20">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                touchEnabled={true}
                zoom={{scaleX:5, scaleY: 5, xValue: 15, yValue:20}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:viewPortOffsets 设置当前ViewPort的自定义偏移（在视图两侧的偏移）top: 12, left: 10, right: 20, bottom: 10">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                viewPortOffsets={{top: 12, left: 10, right: 20, bottom: 10}}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(barChart和lineChart类型图表的公共属性)">
          <TestCase itShould="props:extraOffsets 设置附加到图表视图的额外偏移量（围绕图表视图）自动计算偏移量。top: 12, left: 10, right: 20, bottom: 10">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {color: processColor('#4f4'), visible: true},
                    },
                    {
                      label: 'demo2',
                      values: data2,
                      config: {color: processColor('#f4f')},
                    },
                  ],
                }}
                extraOffsets={{top: 12, left: 10, right: 20, bottom: 10}}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(数据Data)">
          <TestCase itShould="props:scatterShapeSize 40 设置绘制的scattershape将具有的大小（以密度像素为单位）。">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {scatterShapeSize: 40},
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(数据Data)">
          <TestCase itShould="props:scatterShape 设置绘制此DataSet时应使用的散点形状 CIRCLE (圆形)">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {scatterShape: 'CIRCLE'},
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="散点图(数据Data)">
          <TestCase itShould="props:scatterShape 设置绘制此DataSet时应使用的散点形状 CROSS(交叉)">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {scatterShape: 'CROSS'},
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(数据Data)">
          <TestCase itShould="props:scatterShape 设置绘制此DataSet时应使用的散点形状 SQUARE(正方形)">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {scatterShape: 'SQUARE'},
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(数据Data)">
          <TestCase itShould="props:scatterShape 设置绘制此DataSet时应使用的散点形状 TRIANGLE(三角形)">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {scatterShape: 'TRIANGLE'},
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(数据Data)">
          <TestCase itShould="props:scatterShape 设置绘制此DataSet时应使用的散点形状 x(X)">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {scatterShape: 'X'},
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="散点图(数据Data)">
          <TestCase itShould="props:scatterShape 设置绘制此DataSet时应使用的散点形状 CIRCLE(圆形),scatterShapeHoleColor 设置形状中孔的颜色,scatterShapeHoleRadius 设置形状中孔的半径（适用于正方形、圆形和三角形）将其设置为<=0以删除孔">
            <View style={{height: 300}}>
              <ScatterChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        scatterShape: 'CIRCLE',
                        scatterShapeHoleColor: processColor('#4f4'),
                        scatterShapeHoleRadius: 5,
                      },
                    },
                  ],
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default ScatterChartDemo;
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
