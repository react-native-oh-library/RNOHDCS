import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function LineChartTest3() {
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

  const [lableStr, setLableStr] = useState('');
  const [suffixStr, setSuffixStr] = useState('');
  const [interval, setInterval] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indexArray, setIndexArray] = useState([-1, -1]);
  const [segment, setSegment] = useState(4);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="yAxisLabel">
          <TestCase itShould="test Line Chart yAxisLabel property with value aaa">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel={lableStr}
              onDataPointClick={() => {
                if (lableStr === '') {
                  setLableStr('aaa');
                } else {
                  setLableStr('');
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="yAxisSuffix">
          <TestCase itShould="test Line Chart yAxisSuffix property with value bbb">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisSuffix={suffixStr}
              onDataPointClick={() => {
                if (suffixStr === '') {
                  setSuffixStr('bbb');
                } else {
                  setSuffixStr('');
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="xAxisLabel">
          <TestCase itShould="test Line Chart xAxisLabel property with value aaa">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              xAxisLabel={lableStr}
              onDataPointClick={() => {
                if (lableStr === '') {
                  setLableStr('aaa');
                } else {
                  setLableStr('');
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="yAxisInterval">
          <TestCase itShould="test Line Chart yAxisInterval property with value 1 or 2">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisInterval={interval}
              onDataPointClick={() => {
                if (interval === 1) {
                  setInterval(2);
                } else {
                  setInterval(1);
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="horizontalLabelRotation">
          <TestCase itShould="test Line Chart horizontalLabelRotation property with value 0 or 16">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              horizontalLabelRotation={rotation}
              onDataPointClick={() => {
                if (rotation === 0) {
                  setRotation(16);
                } else {
                  setRotation(0);
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="verticalLabelRotation">
          <TestCase itShould="test Line Chart verticalLabelRotation property with value 0 or 16">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              verticalLabelRotation={rotation}
              onDataPointClick={() => {
                if (rotation === 0) {
                  setRotation(16);
                } else {
                  setRotation(0);
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="yLabelsOffset">
          <TestCase itShould="test Line Chart yLabelsOffset property with value 0 or 8">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yLabelsOffset={offset}
              onDataPointClick={() => {
                if (offset === 0) {
                  setOffset(8);
                } else {
                  setOffset(0);
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="xLabelsOffset">
          <TestCase itShould="test Line Chart xLabelsOffset property with value 0 or 8">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              xLabelsOffset={offset}
              onDataPointClick={() => {
                if (offset === 0) {
                  setOffset(8);
                } else {
                  setOffset(0);
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="hidePointsAtIndex">
          <TestCase itShould="test Line Chart hidePointsAtIndex property with value [1, 3]">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              hidePointsAtIndex={indexArray}
              onDataPointClick={() => {
                if (indexArray[0] === -1) {
                  setIndexArray([1, 3]);
                } else {
                  setIndexArray([-1, -1]);
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="segments">
          <TestCase itShould="test Line Chart segments property with value 4 or 8">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              segments={segment}
              onDataPointClick={() => {
                if (segment === 4) {
                  setSegment(8);
                } else {
                  setSegment(4);
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
