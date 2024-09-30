import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

const BarChartScreen = () => {
  const data = [
    {x: 0, y: 32},
    {x: 1, y: 20},
    {x: 2, y: 43},
    {x: 3, y: 21},
    {x: 4, y: 33},
    {x: 5, y: 23},
    {x: 6, y: 44},
    {x: 7, y: 15},
  ];
  const data2 = [
    {x: 0, y: 13},
    {x: 1, y: 43},
    {x: 2, y: 11},
    {x: 3, y: 12},
    {x: 4, y: 31},
    {x: 5, y: 22},
    {x: 6, y: 25},
    {x: 7, y: 13},
  ];
  return (
    <View style={{width: '100%', height: 300, marginTop: 30}}>
      <BarChart
        style={styles.chart}
        data={{
          dataSets: [
            {
              label: 'demo',
              values: data,
              config: {
                color: processColor('#4f9'),
                highlightEnabled: true,
                highlightColor: processColor('#666'),
                drawValues: true,
                highlightAlpha: 255,
              },
            },
            {
              label: 'demo2',
              values: data2,
              config: {
                color: processColor('#55f'),
                highlightEnabled: true,
                highlightColor: processColor('#666'),
                drawValues: true,
                highlightAlpha: 255,
              },
            },
          ],
          config: {
            group: {fromX: 0, groupSpace: 0.06, barSpace: 0.02},
            barWidth: 0.45,
          },
        }}
        xAxis={{
          position: 'BOTTOM',
          centerAxisLabels: true,
          avoidFirstLastClipping: true,
          granularity: 1,
          labelCount: 10,
        }}
        touchEnabled={true}
        drawValueAboveBar={true}
        animation={{durationX: 2000, durationY: 2000}}
        highlightPerTapEnabled={true}
        maxVisibleValueCount={70}
        scaleEnabled={true}
        scaleXEnabled={true}
        scaleYEnabled={true}
        highlightFullBarEnabled={true}
        maxHighlightDistance={1000}
        dragEnabled={true}
      />
    </View>
  );
};
export default BarChartScreen;
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
