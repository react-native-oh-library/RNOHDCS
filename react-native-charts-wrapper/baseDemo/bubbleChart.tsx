import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {BubbleChart} from 'react-native-charts-wrapper';

const BubbleChartScreen = () => {
  const data = [
    {x: 1, y: 20, size: 3},
    {x: 2, y: 43, size: 1},
    {x: 3, y: 21, size: 4},
    {x: 4, y: 33, size: 1},
    {x: 5, y: 23, size: 2},
    {x: 6, y: 44, size: 3},
    {x: 7, y: 5, size: 4},
    {x: 8, y: 12, size: 3},
  ];
  const data1 = [
    {x: 1, y: 12, size: 2},
    {x: 2, y: 13, size: 1},
    {x: 3, y: 32, size: 5},
    {x: 4, y: 25, size: 2},
    {x: 5, y: 18, size: 1},
    {x: 6, y: 10, size: 3},
    {x: 7, y: 9, size: 2},
    {x: 8, y: 36, size: 4},
  ];
  return (
    <View style={{width: '100%', height: 300, marginTop: 30}}>
      <BubbleChart
        style={styles.chart}
        data={{
          dataSets: [
            {
              label: 'demo',
              values: data,
              config: {
                drawValues: true,
                visible: true,
                color: processColor('#259'),
              },
            },
            {
              label: 'demo2',
              values: data1,
              config: {
                drawValues: true,
                visible: true,
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

export default BubbleChartScreen;
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
