import React, {useState} from 'react';
import {Dimensions, Text} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';

export function ContributionGraphExample() {
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

  const values = [
    {date: '2017-01-02', count: 1},
    {date: '2017-01-03', count: 2},
    {date: '2017-01-04', count: 3},
    {date: '2017-01-05', count: 4},
    {date: '2017-01-06', count: 5},
    {date: '2017-01-30', count: 2},
    {date: '2017-01-31', count: 3},
    {date: '2017-03-01', count: 2},
    {date: '2017-04-02', count: 4},
    {date: '2017-03-05', count: 2},
    {date: '2017-02-30', count: 4},
  ];

  const handleToolTip: any = {};
  const [chartState, setChartState] = useState(false);

  return (
    <>
      <Text>Contribution Graph</Text>
      <ContributionGraph
        values={values}
        endDate={new Date('2017-04-01')}
        numDays={105}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={chartConfig}
        tooltipDataAttrs={() => handleToolTip}
        gutterSize={2}
        squareSize={22}
        horizontal={!chartState}
        showMonthLabels={true}
        showOutOfRangeDays={true}
        accessor="count"
        onDayPress={() => {
          setChartState(!chartState);
        }}
      />
    </>
  );
}
