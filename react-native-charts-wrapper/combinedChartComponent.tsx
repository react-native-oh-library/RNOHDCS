import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import { CombinedChart } from 'react-native-charts-wrapper';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const CombinedChartDemo = () => {
  const lineDataSet = [
    { x: 0, y: 3 },
    { x: 1, y: 15 },
    { x: 2, y: 5 },
    { x: 3, y: 12 },
    { x: 4, y: 10 },
    { x: 5, y: 6 },
    { x: 6, y: 8 },
    { x: 7, y: 9 },
    { x: 8, y: 6 },
    { x: 9, y: 13 },
    { x: 10, y: 16 },
  ];

  const barDataSet = [
    { x: 0, y: 6 },
    { x: 1, y: 12 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 9 },
    { x: 5, y: 12 },
    { x: 6, y: 16 },
    { x: 7, y: 14 },
    { x: 8, y: 15 },
    { x: 9, y: 14 },
    { x: 10, y: 5 },
  ];
  const barDataSet2 = [
    { x: 0, y: 3 },
    { x: 1, y: 1 },
    { x: 2, y: 4 },
    { x: 3, y: 6 },
    { x: 4, y: 12 },
    { x: 5, y: 16 },
    { x: 6, y: 11 },
    { x: 7, y: 12 },
    { x: 8, y: 9 },
    { x: 9, y: 8 },
    { x: 10, y: 5 },
  ];

  const scatterDataSet = [
    { x: 0, y: 25 },
    { x: 1, y: 21 },
    { x: 2, y: 35 },
    { x: 3, y: 26 },
    { x: 4, y: 29 },
    { x: 5, y: 30 },
    { x: 6, y: 28 },
    { x: 7, y: 36 },
    { x: 8, y: 27 },
    { x: 9, y: 38 },
    { x: 10, y: 26 },
  ]
  const candleDataSet = [
    { x: 1, shadowH: 90, shadowL: 70, open: 80, close: 75 },
    { x: 2, shadowH: 90, shadowL: 70, open: 80, close: 75 },
    { x: 3, shadowH: 90, shadowL: 70, open: 80, close: 75 },
    { x: 4, shadowH: 90, shadowL: 70, open: 80, close: 75 },
    { x: 5, shadowH: 90, shadowL: 70, open: 80, close: 75 },
    { x: 6, shadowH: 90, shadowL: 70, open: 80, close: 75 },
    { x: 7, shadowH: 90, shadowL: 70, open: 80, close: 75 },
    { x: 8, shadowH: 90, shadowL: 70, open: 80, close: 75 },
    { x: 9, shadowH: 90, shadowL: 70, open: 80, close: 75 },
  ]
  const bubbleDataSet =[
    { x: 1, y: 46, size: 5 },
    { x: 2, y: 55, size: 5 },
    { x: 4, y: 50, size: 5 },
    { x: 6, y: 48, size: 5 },
    { x: 8, y: 51, size: 5 },
  ]
  return (
    <Tester>
      <TestSuite name="组合图（基础图表）">
        <TestCase itShould="props">
          <View style={{ width: '100%', height: 500 }}>
            <CombinedChart
              style={styles.chart}
              data={{
                lineData: {
                  dataSets: [
                    {
                      label: 'lineData',
                      values: lineDataSet,
                      config: {
                        colors: [processColor('#48f')],
                        lineWidth: 2.5,
                        circleColor: processColor('#1d5'),
                        circleRadius: 5,
                        fillColor: processColor('#f4f'),
                        mode: 'CUBIC_BEZIER',
                        axisDependency: 'LEFT',
                      },
                    },
                  ],
                },
                barData: {
                  dataSets: [
                    {
                      label: 'barData',
                      values: barDataSet,
                      config: {
                        color: processColor('#c66'),
                        valueTextColor: processColor('#fff'),
                        valueTextSize: 10,
                        axisDependency: 'LEFT'
                      },
                    },
                    {
                      label: 'barData2',
                      values: barDataSet2,
                      config: {
                        color: processColor('#142'),
                        valueTextColor: processColor('#fff'),
                        valueTextSize: 10,
                        axisDependency: 'LEFT'
                      },
                    },
                  ],
                  config: { group: { fromX: 0, groupSpace: 0.06, barSpace: 0.02 }, barWidth: 0.45 }
                },
                bubbleData: {
                  dataSets: [
                    {
                      label: 'demo3',
                      values: bubbleDataSet,
                      config:{colors:[processColor('#c46'),processColor('#55f'),processColor("#363")]}
                    },
                  ],
                },
                candleData: {
                  dataSets: [
                    {
                      label: 'candleData',
                      values: candleDataSet,
                      config:{decreasingColor:processColor('#444'),shadowColor:processColor('#ccc'),barSpace:0.3,valueTextSize:10,drawValues:false}
                    },
                  ],
                },
                scatterData: {
                  dataSets: [
                    {
                      label: 'scatterData',
                      values: scatterDataSet,
                      config:{colors:[processColor('#4f4'),processColor('#d54')],scatterShapeSize:7.5,drawValues:false,valueTextSize:10}
                    },
                  ],
                },
              }}
              chartDescription={{ enabled: false }}
              legend={{ enabled: true }}
              maxVisibleValueCount={60}
              pinchZoom={false}
              drawGridBackground={false}
              xAxis={{
                position: 'BOTTOM',
                drawGridLines: false,
                granularity: 1,
                labelCount: 7,
              }}
              yAxis={{
                left: { position: 'OUTSIDE_CHART', spaceTop: 15, axisMinimum: 0 },
                right: { drawGridLines: false, spaceTop: 15, axisMinimum: 0 },
              }}
              animation={{durationX:1000,durationY:1000}}
              scaleEnabled={true}
              scaleXEnabled={true}
              scaleYEnabled={true}
              highlightPerTapEnabled={true}
              touchEnabled={true}

            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

export default CombinedChartDemo;
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
