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
            <View  style={{width: '100%', height: 300}}>
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
              chartDescription={{text:'ChartDescription demo'}}
            />
            </View>
           
          </TestCase>
        </TestSuite>
        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:text 描述文本,enabled:false 不显示描述部件">
            <View  style={{width: '100%', height: 300}}>
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
              chartDescription={{text:'ChartDescription demo',enabled:false}}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:textColor 描述文本的颜色">
            <View  style={{width: '100%', height: 300}}>
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
              chartDescription={{text:'ChartDescription demo',enabled:true,textColor:processColor('#4f4')}}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:textSize 描述文本的颜色">
            <View  style={{width: '100%', height: 300}}>
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
              chartDescription={{text:'ChartDescription demo',textSize:20}}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(chartDescription：描述部件)">
          <TestCase itShould="Props:position 描述文本在屏幕中的位置">
            <View  style={{width: '100%', height: 300}}>
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
              chartDescription={{text:'ChartDescription demo',positionX:80,positionY:45}}
            />
            </View>
           
          </TestCase>
        </TestSuite>


        <TestSuite name="LineChart 基础折线图(noDataText:无数据显示的文本)">
          <TestCase itShould="Props:noDataText noDataTextColor 无数据显示的文本和文本 颜色">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                
              }}
              noDataText={'none text'}
              noDataTextColor = {processColor('#4f4')}
            />
            </View>
           
          </TestCase>
        </TestSuite>

         <TestSuite name="LineChart 基础折线图(touchEnabled:设置触摸)">
          <TestCase itShould="Props:touchEnabled  设置触摸">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{highlightEnabled:true,highlightColor:processColor('#000')}
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
            <View  style={{width: '100%', height: 300}}>
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
          <TestCase itShould="Props:config(circleRadius)  设置绘制的圆的半径。最小是1f">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{circleRadius:20}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(drawCircles) 将此值设置为false以关闭此的圆圈指示器的绘制数据集，默认为true,其他用例均覆盖true的情况">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{drawCircles:false}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(mode) 设置lineDataSet的绘制模式 CUBIC_BEZIER 立方曲线 ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{mode:'CUBIC_BEZIER'}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(mode) 设置lineDataSet的绘制模式 HORIZONTAL_BEZIER 水平曲线 ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{mode:'HORIZONTAL_BEZIER'}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(mode) 设置lineDataSet的绘制模式 LINEAR 直线 ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{mode:'LINEAR'}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(mode) 设置lineDataSet的绘制模式 STEPPED 阶梯 ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{mode:'STEPPED'}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(circleColor) 设置应该用于此数据集的唯一颜色  ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{circleColor:processColor('#4f4')}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(circleColors) 设置应该用于此数据集的颜色集,可设置多个颜色  ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{circleColors:[processColor('#333'), processColor('#f54'),processColor('#4f4')]}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>

        </TestSuite>
        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(circleHoleColor) 设置线条圆的内圆的颜色。  ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{circleHoleColor:processColor('#f54')}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(drawCircleHole:false) 允许在每个数据圆圈中绘制一个孔,默认为true，其他用例均覆盖此情况，此用例为false  ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{drawCircleHole:false}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(dashedLine) 折线设置为虚线  ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{dashedLine:{lineLength:10,spaceLength:2,phase:1}}
                  },
                ],
              }}
            />
            </View>
           
          </TestCase>
        </TestSuite>

        <TestSuite name="LineChart 基础折线图(data:数据)">
          <TestCase itShould="Props:config(drawVerticalHighlightIndicator) 禁用垂直突出显示指示器。如果禁用，则不绘制指示器。">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{drawVerticalHighlightIndicator:false,drawHighlightIndicators:false}
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
          <TestCase itShould="Props:config(drawVerticalHighlightIndicator) 启用垂直突出显示指示器。如果禁用，则不绘制指示器。 ">
            <View  style={{width: '100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{drawVerticalHighlightIndicator:true,drawHighlightIndicators:true}
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
          <TestCase itShould="props:avoidFirstLastClipping 如果设置为true，图表将避免第一个和最后一个标签条目被裁剪  ">
            <View  style={{width:'100%', height: 300}}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config:{dashedLine:{lineLength:10,spaceLength:2,phase:1}}
                  },
                ],
              }}
              xAxis={{avoidFirstLastClipping:true,}}
              touchEnabled={true}
              scaleXEnabled={true}
              scaleYEnabled={true}
              scaleEnabled={true}
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