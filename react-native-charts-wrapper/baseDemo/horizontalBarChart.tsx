import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {HorizontalBarChart} from 'react-native-charts-wrapper';

const HorizontalBarChartScreen = () => {
  const data = [
    {x: 1, y: 20},
    {x: 2, y: 43},
    {x: 3, y: 21},
    {x: 4, y: 33},
    {x: 5, y: 23},
    {x: 6, y: 44},
    {x: 7, y: 5},
    {x: 8, y: 12},
  ];
  return (
    <View style={{width: '100%', height: 300}}>
      <HorizontalBarChart
        style={styles.chart}
        data={{
          dataSets: [
            {
              label: 'demo',
              values: data,
              config: {
                colors: [
                  processColor('#333'),
                  processColor('#f54'),
                  processColor('#4f4'),
                ],
                highlightEnabled: true,
                highlightColor: processColor('#666'),
                drawValues: true,
                highlightAlpha: 255,
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

export default HorizontalBarChartScreen;
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
