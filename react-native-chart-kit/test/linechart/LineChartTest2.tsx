import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function LineChartTest2() {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ff9626',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      marginVertical: 8,
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [25.44, 76.23, 55.55, 13.2, 88.88, 46.78],
      },
    ],
    legend: ['Rainy Days'],
  };

  const [chartState, setChartState] = useState(false);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="formatXLabel and formatYLabel">
          <TestCase itShould="test Line Chart formatXLabel and formatYLabel function with x lable to upper case and y lable add $">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              formatXLabel={xLabel =>
                chartState ? xLabel.toUpperCase() : xLabel
              }
              formatYLabel={yLabel =>
                chartState ? '$' + yLabel + 'k' : yLabel
              }
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withDots">
          <TestCase itShould="test Line Chart withDots property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withDots={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withShadow">
          <TestCase itShould="test Line Chart withShadow property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withShadow={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withInnerLines">
          <TestCase itShould="test Line Chart withInnerLines property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withShadow={false}
              withInnerLines={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withOuterLines">
          <TestCase itShould="test Line Chart withOuterLines property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withShadow={false}
              withInnerLines={false}
              withOuterLines={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withVerticalLines">
          <TestCase itShould="test Line Chart withVerticalLines property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withVerticalLines={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withHorizontalLines">
          <TestCase itShould="test Line Chart withHorizontalLines property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withHorizontalLines={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withVerticalLabels">
          <TestCase itShould="test Line Chart withVerticalLabels property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withVerticalLabels={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="withHorizontalLabels">
          <TestCase itShould="test Line Chart withHorizontalLabels property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withHorizontalLabels={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="fromZero">
          <TestCase itShould="test Line Chart fromZero property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              fromZero={!chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
