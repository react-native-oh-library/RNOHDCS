import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {LineChart, ProgressChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function ChartConfigTest2() {
  const screenWidth = Dimensions.get('window').width - 40;

  const bgFromConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#00c0fb',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ff9626',
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

  const bgFromOpacityConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#00c0fb',
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientTo: '#ff9626',
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

  const bgToConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#00c0fb',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ff2d26',
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

  const bgToOpacityConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#00c0fb',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ff2d26',
    backgroundGradientToOpacity: 0.3,
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

  const fillShadowFromConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: '#ffa126',
    fillShadowGradientFromOpacity: 1,
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

  const fillShadowFromOpacityConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: '#ffa126',
    fillShadowGradientFromOpacity: 0.3,
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

  const fillShadowFromOffsetConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: '#ffa126',
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientFromOffset: 0.5,
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

  const fillShadowToConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: '#ffa126',
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: '#2663ff',
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

  const fillShadowToOpacityConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: '#ffa126',
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: '#2663ff',
    fillShadowGradientToOpacity: 0.5,
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

  const fillShadowToOffsetConfig = {
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

  const data = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
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

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="backgroundGradientFrom">
          <TestCase itShould="test Chart Style backgroundGradientFrom property with value #00c0fb">
            <ProgressChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={bgFromConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="backgroundGradientFromOpacity">
          <TestCase itShould="test Chart Style backgroundGradientFromOpacity property with value 0.3">
            <ProgressChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={bgFromOpacityConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="backgroundGradientTo">
          <TestCase itShould="test Chart Style backgroundGradientTo property with value #ff2d26">
            <ProgressChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={bgToConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="backgroundGradientToOpacity">
          <TestCase itShould="test Chart Style backgroundGradientToOpacity property with value 0.3">
            <ProgressChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={bgToOpacityConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="fillShadowGradientFrom">
          <TestCase itShould="test Chart Style fillShadowGradientFrom property with value #ffa126">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={fillShadowFromConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="fillShadowGradientFromOpacity">
          <TestCase itShould="test Chart Style fillShadowGradientFromOpacity property with value 0.3">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={fillShadowFromOpacityConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="fillShadowGradientFromOffset">
          <TestCase itShould="test Chart Style fillShadowGradientFromOffset property with value 0.5">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={fillShadowFromOffsetConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="fillShadowGradientTo">
          <TestCase itShould="test Chart Style fillShadowGradientTo property with value #2663ff">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={fillShadowToConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="fillShadowGradientToOpacity">
          <TestCase itShould="test Chart Style fillShadowGradientToOpacity property with value 0.5">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={fillShadowToOpacityConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="fillShadowGradientToOffset">
          <TestCase itShould="test Chart Style fillShadowGradientToOffset property with value 0.5">
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={fillShadowToOffsetConfig}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
