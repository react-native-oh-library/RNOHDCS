import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import { LineChart } from 'react-native-charts-wrapper';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const lineChartDemo = () => {
  const data = [
    { x: 0, y: 13 },
    { x: 1, y: 20 },
    { x: 2, y: 33 },
    { x: 3, y: 12 },
    { x: 4, y: 23 },
    { x: 5, y: 35 },
    { x: 6, y: 23 },
    { x: 7, y: 20 },
    { x: 8, y: 31 },
    { x: 9, y: 12 },
    { x: 10, y: 36 },
    { x: 11, y: 12 },
    { x: 12, y: 15 }
  ]
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:chartDescription,enabled:true,默认值就为true，不设置也能显示">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data
                    },
                  ],
                }}
                chartDescription={{ text: 'ChartDescription demo' }}
              />
            </View>

          </TestCase>
        </TestSuite>
        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:text 描述文本,enabled:false 不显示描述部件">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data
                    },
                  ],
                }}
                chartDescription={{ text: 'ChartDescription demo', enabled: false }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:textColor 描述文本的颜色 #4f4">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data
                    },
                  ],
                }}
                chartDescription={{ text: 'ChartDescription demo', enabled: true, textColor: processColor('#4f4') }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:textSize 描述文本的大小 textSize:20">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data
                    },
                  ],
                }}
                chartDescription={{ text: 'ChartDescription demo', textSize: 20 }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:position 描述文本在屏幕中的位置 positionX:80,positionY:45">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data
                    },
                  ],
                }}
                chartDescription={{ text: 'ChartDescription demo', positionX: 80, positionY: 45 }}
              />
            </View>

          </TestCase>
        </TestSuite>


        <TestSuite name="LineChart 基础折线图(noDataText:无数据显示的文本)">
          <TestCase itShould="Props:noDataText noDataTextColor 无数据显示的文本和文本 颜色">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{

                }}
                noDataText={'none text'}
                noDataTextColor={processColor('#4f4')}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(touchEnabled:设置触摸)">
          <TestCase itShould="Props:touchEnabled  设置触摸">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { highlightEnabled: true, highlightColor: processColor('#000') }
                    },
                  ],
                }}
                touchEnabled={true}
                highlightPerTapEnabled={true}
                maxHighlightDistance={1000}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(highlightLineWidth:高亮宽度)">
          <TestCase itShould="Props:highlightLineWidth  高亮宽度 highlightLineWidth:6">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { highlightEnabled: true, highlightColor: processColor('#000'), highlightLineWidth: 6 }
                    },
                  ],
                }}
                touchEnabled={true}
                highlightPerTapEnabled={true}
                maxHighlightDistance={1000}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:data  数据">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(circleRadius)  设置绘制的圆的半径。最小是1f circleRadius:20">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { circleRadius: 20 }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(drawCircles false) 将此值设置为false以关闭此的圆圈指示器的绘制数据集，默认为true,其他用例均覆盖true的情况">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { drawCircles: false }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(mode ) 设置lineDataSet的绘制模式 CUBIC_BEZIER 立方曲线 ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { mode: 'CUBIC_BEZIER' }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(mode) 设置lineDataSet的绘制模式 HORIZONTAL_BEZIER 水平曲线 ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { mode: 'HORIZONTAL_BEZIER' }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(mode) 设置lineDataSet的绘制模式 LINEAR 直线 ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { mode: 'LINEAR' }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(mode) 设置lineDataSet的绘制模式 STEPPED 阶梯 ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { mode: 'STEPPED' }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(circleColor #4f4) 设置应该用于此数据集的唯一颜色  ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { circleColor: processColor('#4f4') }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(circleColors) 设置应该用于此数据集的颜色集,可设置多个颜色，可查看用例看见颜色  ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { circleColors: [processColor('#333'), processColor('#f54'), processColor('#4f4')] }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>

        </TestSuite>
        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(circleHoleColor) 设置线条圆的内圆的颜色。 #f54 ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { circleHoleColor: processColor('#f54') }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(drawCircleHole:false) 允许在每个数据圆圈中绘制一个孔,默认为true，其他用例均覆盖此情况，此用例为false  ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { drawCircleHole: false }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(dashedLine lineLength:10,spaceLength:2,phase:1) 折线设置为虚线  ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { dashedLine: { lineLength: 10, spaceLength: 2, phase: 1 } }
                    },
                  ],
                }}
              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(drawVerticalHighlightIndicator false) 禁用垂直突出显示指示器。水平突出显示器会生效drawHorizontalHighlightIndicator，高亮线为横向">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { drawVerticalHighlightIndicator: false, drawHorizontalHighlightIndicator:true}
                    },
                  ],
                }}
                touchEnabled={true}
                highlightPerTapEnabled={true}
                maxVisibleValueCount={70}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                maxHighlightDistance={1000}

              />
            </View>

          </TestCase>
        </TestSuite>
        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(drawHorizontalHighlightIndicator false) 启用水平突出显示指示器。垂直突出显示器会生效drawVerticalHighlightIndicator，高亮线为纵向 ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { drawVerticalHighlightIndicator: true, drawHorizontalHighlightIndicator:false}
                    },
                  ],
                }}
                touchEnabled={true}
                highlightPerTapEnabled={true}
                maxVisibleValueCount={70}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                maxHighlightDistance={1000}

              />
            </View>

          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(lineWidth 0.5) 折线宽度 ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { lineWidth: 0.5 }
                    },
                  ],
                }}
                touchEnabled={true}
                highlightPerTapEnabled={true}
                maxVisibleValueCount={70}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                maxHighlightDistance={1000}

              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(fillFormatter #4f4) 填充 drawFilled:true,fillColor:processColor('#4f4') ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { drawFilled: true, fillAlpha: 0.8, fillColor: processColor('#4f4') }
                    },
                  ],
                }}
                touchEnabled={true}
                highlightPerTapEnabled={true}
                maxVisibleValueCount={70}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                maxHighlightDistance={1000}

              />
            </View>
            


          </TestCase>
        </TestSuite>
        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(fillFormatter  #d41) 填充 drawFilled:true,fillColor: processColor(' #d41') ">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { drawFilled: true, fillAlpha:  0.8, fillColor: processColor('#d41') }
                    },
                  ],
                }}
                touchEnabled={true}
                highlightPerTapEnabled={true}
                maxVisibleValueCount={70}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                maxHighlightDistance={1000}

              />
            </View>
            


          </TestCase>
        </TestSuite>
        <TestSuite name="LineChart 基础折线图(X轴属性)">
          <TestCase itShould="props:avoidFirstLastClipping true,图表将避免第一个和最后一个标签条目被裁剪,会显示出来 偏移量都是设的一样">
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { dashedLine: { lineLength: 10, spaceLength: 2, phase: 1 } }
                    },
                  ],
                }}
                xAxis={{ avoidFirstLastClipping: true }}
                touchEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                scaleEnabled={true}
                viewPortOffsets={{ top: -2, left: 20, right: 20, bottom: 20 }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LineChart 基础折线图(X轴属性)">
          <TestCase itShould="props:avoidFirstLastClipping false,图表将避免第一个和最后一个标签条目被裁剪，超出直接会被裁剪，偏移量都是设的一样" >
            <View style={{ width: '100%', height: 300 }}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: { dashedLine: { lineLength: 10, spaceLength: 2, phase: 1 } }
                    },
                  ],
                }}
                xAxis={{ avoidFirstLastClipping: false }}
                touchEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                scaleEnabled={true}
                viewPortOffsets={{ top: -2, left: 20, right: 20, bottom: 20 }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>

  )
}

export default lineChartDemo
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