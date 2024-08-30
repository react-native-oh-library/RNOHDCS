import React from 'react';
import {Dimensions, Text} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

export function ProgressChartExample() {
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
  };

  return (
    <>
      <Text>Progress Chart</Text>
      <ProgressChart
        data={{
          labels: ['Swim', 'Bike', 'Run'], // optional
          data: [0.4, 0.6, 0.8],
        }}
        width={Dimensions.get('window').width}
        height={220}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </>
  );
}
