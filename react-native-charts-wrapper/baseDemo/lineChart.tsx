import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {LineChart} from 'react-native-charts-wrapper';

const LineChartScreen = () => {
  const data = [
    {x: 0, y: 4},
    {x: 1, y: 15},
    {x: 2, y: 33},
    {x: 3, y: 1},
    {x: 4, y: 23},
    {x: 5, y: 35},
    {x: 6, y: 23},
    {x: 7, y: 20},
    {x: 8, y: 31},
    {x: 9, y: 12},
    {x: 10, y: 36},
    {x: 11, y: 12},
    {x: 12, y: 15},
  ];
  const data2 = [
    {x: 0, y: 23},
    {x: 1, y: 14},
    {x: 2, y: 3},
    {x: 3, y: 22},
    {x: 4, y: 21},
    {x: 5, y: 12},
    {x: 6, y: 32},
    {x: 7, y: 16},
    {x: 8, y: 18},
    {x: 9, y: 20},
    {x: 10, y: 21},
    {x: 11, y: 44},
    {x: 12, y: 31},
  ];
  return (
    <View style={{width: '100%', height: 300, marginTop: 30}}>
      <LineChart
        style={styles.chart}
        data={{
          dataSets: [
            {
              label: 'demo',
              values: data,
              config: {
                drawValues: true,
                highlightEnabled: true,
                highlightColor: processColor('#000'),
              },
            },
          ],
        }}
        xAxis={{
          position: 'BOTTOM',
          centerAxisLabels: true,
          avoidFirstLastClipping: true,
          granularity: 1,
          labelCount: 10,
        }}
        touchEnabled={true}
        animation={{durationX: 2000, durationY: 2000}}
        highlightPerTapEnabled={true}
        maxVisibleValueCount={70}
        scaleEnabled={true}
        scaleXEnabled={true}
        scaleYEnabled={true}
        maxHighlightDistance={1000}
      />
    </View>
  );
};

export default LineChartScreen;
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
