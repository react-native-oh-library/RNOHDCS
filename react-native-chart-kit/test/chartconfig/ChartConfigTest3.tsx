import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function ChartConfigTest3() {
  const screenWidth = Dimensions.get('window').width;

  const useShadowColorConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: '#ffa126',
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: '#2663ff',
    fillShadowGradientToOpacity: 0.5,
    fillShadowGradientToOffset: 0.5,
    useShadowColorFromDataset: true,
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

  const colorConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: '#ffa126',
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: '#2663ff',
    fillShadowGradientToOpacity: 0.5,
    fillShadowGradientToOffset: 0.5,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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

  const strokeWidthConfig = {
    backgroundGradientFrom: '#ff9626',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffa126',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: '#26ccff',
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: '#2663ff',
    fillShadowGradientToOpacity: 0.5,
    fillShadowGradientToOffset: 0.5,
    strokeWidth: 16,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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

  const barRadiusConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    barRadius: 32,
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

  const propsForBackgroundLinesConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    barRadius: 32,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: 'rgba(111, 111, 111, 1)',
      strokeDasharray: '5 5',
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const propsForLabelsConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    barRadius: 32,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForLabels: {
      fontSize: 24,
      fill: 'rgba(0, 0, 0, 1)',
      fontFamily: 'Arial',
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const propsForVerticalLabelsConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    barRadius: 32,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForVerticalLabels: {
      fontSize: 24,
      fill: 'rgba(0, 0, 0, 1)',
      fontFamily: 'Arial',
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const propsForHorizontalLabelsConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    barRadius: 32,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForHorizontalLabels: {
      fontSize: 24,
      fill: 'rgba(0, 0, 0, 1)',
      fontFamily: 'Arial',
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [25.44, 76.23, 55.55, 13.2, 88.88, 46.78],
        color: (opacity = 1) => `rgba(222, 222, 222, ${opacity})`,
      },
    ],
    legend: ['Rainy Days'],
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [30, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="useShadowColorFromDataset">
          <TestCase itShould="test Chart Style useShadowColorFromDataset property with value true">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={useShadowColorConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="color">
          <TestCase itShould="test Chart Style color property with value rgba(0, 0, 0, 1)">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={colorConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="strokeWidth">
          <TestCase itShould="test Chart Style strokeWidth property with value 16">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={strokeWidthConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="barRadius">
          <TestCase itShould="test Chart Style barRadius property with value 32">
            <BarChart
              data={barData}
              width={screenWidth}
              height={220}
              chartConfig={barRadiusConfig}
              yAxisLabel=""
              yAxisSuffix=""
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="propsForBackgroundLines">
          <TestCase itShould="test Chart Style propsForBackgroundLines property with strokeWidth is 1, stroke is rgba(111, 111, 111, 1), strokeDasharray is 5 5">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={propsForBackgroundLinesConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="propsForLabels">
          <TestCase itShould="test Chart Style propsForLabels property with fontSize is 24, fill is rgba(0, 0, 0, 1), fontFamily is Arial">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={propsForLabelsConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="propsForVerticalLabels">
          <TestCase itShould="test Chart Style propsForVerticalLabels property with fontSize is 24, fill is rgba(0, 0, 0, 1), fontFamily is Arial">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={propsForVerticalLabelsConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="propsForHorizontalLabels">
          <TestCase itShould="test Chart Style propsForHorizontalLabels property with fontSize is 24, fill is rgba(0, 0, 0, 1), fontFamily is Arial">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={propsForHorizontalLabelsConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
