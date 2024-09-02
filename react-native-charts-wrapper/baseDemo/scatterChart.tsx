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

const ScatterChartScreen = () => {
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
    <View style={{height: 300}}>
      <ScatterChart
        style={styles.chart}
        data={{
          dataSets: [
            {
              label: 'demo',
              values: data,
              config: {
                color: processColor('#259'),
                visible: true,
                drawValues: true,
                highlightEnabled: true,
                highlightColor: processColor('#000'),
              },
            },
            {
              label: 'demo2',
              values: data2,
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
        dragEnabled={true}
      />
    </View>
  );
};

export default ScatterChartScreen;
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
