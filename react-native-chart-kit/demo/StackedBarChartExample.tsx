import React from 'react';
import {Dimensions, Text} from 'react-native';
import {StackedBarChart} from 'react-native-chart-kit';

export function StackedBarChartExample() {
  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
    barPercentage: 1,
  };

  return (
    <>
      <Text>StackedBar Chart</Text>
      <StackedBarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        data={{
          labels: ['Test1', 'Test2'],
          legend: ['L1', 'L2', 'L3'],
          data: [
            [60, 60, 60],
            [30, 30, 60],
          ],
          barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
        }}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={chartConfig}
        barPercentage={0.5}
        hideLegend={false}
      />
    </>
  );
}
