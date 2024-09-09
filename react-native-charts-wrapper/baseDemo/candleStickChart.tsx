import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {CandleStickChart} from 'react-native-charts-wrapper';

const CandleChartScreen = () => {
  const data = [
    {x: 0, shadowH: 35, shadowL: 80, open: 43, close: 60},
    {x: 1, shadowH: 22, shadowL: 80, open: 45, close: 50},
    {x: 2, shadowH: 45, shadowL: 32, open: 43, close: 34},
    {x: 3, shadowH: 80, shadowL: 12, open: 22, close: 30},
    {x: 4, shadowH: 65, shadowL: 11, open: 60, close: 35},
    {x: 5, shadowH: 45, shadowL: 25, open: 27, close: 32},
    {x: 6, shadowH: 60, shadowL: 35, open: 40, close: 50},
    {x: 7, shadowH: 56, shadowL: 88, open: 60, close: 70},
    {x: 8, shadowH: 43, shadowL: 22, open: 35, close: 25},
    {x: 9, shadowH: 52, shadowL: 35, open: 42, close: 50},
    {x: 10, shadowH: 77, shadowL: 32, open: 45, close: 37},
    {x: 11, shadowH: 65, shadowL: 8, open: 35, close: 28},
    {x: 12, shadowH: 55, shadowL: 16, open: 25, close: 25},
  ];
  return (
    <View style={{height: 300}}>
      <CandleStickChart
        style={styles.chart}
        data={{
          dataSets: [
            {
              label: 'demo',
              values: data,
              config: {
                shadowColor: processColor('#888'),
                shadowWidth: 1,
                decreasingPaintStyle: 'FILL',
                decreasingColor: processColor('#34f'),
                drawValues: true,
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

export default CandleChartScreen;
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
