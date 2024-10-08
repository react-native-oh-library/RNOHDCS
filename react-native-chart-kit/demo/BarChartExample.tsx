import React from 'react';
import {Dimensions, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

export function BarChartExample() {
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
      <Text>Bar Chart</Text>
      <BarChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        withVerticalLabels={true}
        showBarTops={true}
        showValuesOnTopOfBars={true}
      />
    </>
  );
}
