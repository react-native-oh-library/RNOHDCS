import React, {useState} from 'react';
import {Dimensions, Button, ScrollView} from 'react-native';
import {StackedBarChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function StackedBarChartTest() {
  const screenWidth = Dimensions.get('window').width;

  const chartConfigVal = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
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
    barPercentage: 1,
  };

  const chartConfigVal2 = {
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
    barPercentage: 0.5,
  };

  const data = {
    labels: ['Test1', 'Test2', 'Test3', 'Test4'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
      [50, 60, 80],
      [20, 50, 70],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };

  const [chartState, setChartState] = useState(false);
  const [config, setConfig] = useState(chartConfigVal);
  const [configState, setConfigState] = useState(false);
  const [isHideLegend, setIsHideLegend] = useState(false);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="withVerticalLabels">
          <TestCase itShould="test StackedBar Chart withVerticalLabels property with value is true or false">
            <StackedBarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfigVal}
              hideLegend={false}
              withVerticalLabels={chartState}
            />
            <Button
              onPress={() => {
                setChartState(!chartState);
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withHorizontalLabels">
          <TestCase itShould="test StackedBar Chart withHorizontalLabels property with value is true or false">
            <StackedBarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfigVal}
              hideLegend={false}
              withHorizontalLabels={chartState}
            />
            <Button
              onPress={() => {
                setChartState(!chartState);
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="barPercentage">
          <TestCase itShould="test StackedBar Chart barPercentage property with value is 1 or 0.5">
            <StackedBarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={config}
              hideLegend={false}
            />
            <Button
              onPress={() => {
                if (!configState) {
                  setConfig(chartConfigVal2);
                  setConfigState(true);
                } else {
                  setConfig(chartConfigVal);
                  setConfigState(false);
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="hideLegend">
          <TestCase itShould="test StackedBar Chart hideLegend property with value is true or false">
            <StackedBarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfigVal}
              hideLegend={isHideLegend}
            />
            <Button
              onPress={() => {
                setIsHideLegend(!isHideLegend);
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
