import React, {useState} from 'react';
import {Dimensions, Button, ScrollView} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function BarChartTest() {
  const screenWidth = Dimensions.get('window').width - 40;

  const chartConfig = {
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
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [30, 45, 28, 80, 99, 43],
      },
    ],
  };

  const [chartState, setChartState] = useState(false);
  const [lableStr, setLableStr] = useState('');
  const [suffixStr, setSuffixStr] = useState('');
  const [rotation, setRotation] = useState(0);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="withVerticalLabels">
          <TestCase itShould="test Bar Chart withVerticalLabels property with value true or false">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix=""
              withVerticalLabels={!chartState}
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
          <TestCase itShould="test Bar Chart withHorizontalLabels property with value true or false">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix=""
              withHorizontalLabels={!chartState}
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
        <TestSuite name="fromZero">
          <TestCase itShould="test Bar Chart fromZero property with value true or false">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix=""
              fromZero={chartState}
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
        <TestSuite name="withInnerLines">
          <TestCase itShould="test Bar Chart withInnerLines property with value true or false">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix=""
              withInnerLines={!chartState}
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
        <TestSuite name="yAxisLabel">
          <TestCase itShould="test Bar Chart yAxisLabel property with value aaa">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel={lableStr}
              yAxisSuffix=""
            />
            <Button
              onPress={() => {
                if (lableStr === '') {
                  setLableStr('aaa');
                } else {
                  setLableStr('');
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="yAxisSuffix">
          <TestCase itShould="test Bar Chart yAxisSuffix property with value bbb">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix={suffixStr}
            />
            <Button
              onPress={() => {
                if (suffixStr === '') {
                  setSuffixStr('bbb');
                } else {
                  setSuffixStr('');
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="horizontalLabelRotation">
          <TestCase itShould="test Bar Chart horizontalLabelRotation property with value 0 or 16">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix=""
              horizontalLabelRotation={rotation}
            />
            <Button
              onPress={() => {
                if (rotation === 0) {
                  setRotation(16);
                } else {
                  setRotation(0);
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="verticalLabelRotation">
          <TestCase itShould="test Bar Chart verticalLabelRotation property with value 0 or 16">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix=""
              verticalLabelRotation={rotation}
            />
            <Button
              onPress={() => {
                if (rotation === 0) {
                  setRotation(16);
                } else {
                  setRotation(0);
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="showBarTops">
          <TestCase itShould="test Bar Chart showBarTops property with value true or false">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix=""
              showBarTops={!chartState}
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
        <TestSuite name="showValuesOnTopOfBars">
          <TestCase itShould="test Bar Chart showValuesOnTopOfBars property with value true or false">
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              yAxisLabel=""
              yAxisSuffix=""
              showValuesOnTopOfBars={!chartState}
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
    </ScrollView>
  );
}
