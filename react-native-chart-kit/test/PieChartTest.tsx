import React, {useState} from 'react';
import {Dimensions, Button, ScrollView} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function PieChartTest() {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
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

  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 87612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: 'yellow',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const [accessorVal, setAccessorVal] = useState<string>('population');
  const [bgColor, setBgColor] = useState<string>('transparent');
  const [padLeft, setPadLeft] = useState<string>('0');
  const [centerArr, setCenterArr] = useState<number[]>([10, 10]);
  const [chartState, setChartState] = useState(false);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="accessor">
          <TestCase itShould="test Pie Chart accessor property with value population or legendFontSize">
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              backgroundColor="transparent"
              paddingLeft="0"
              accessor={accessorVal}
            />
            <Button
              onPress={() => {
                if (accessorVal === 'population') {
                  setAccessorVal('legendFontSize');
                } else {
                  setAccessorVal('population');
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="backgroundColor">
          <TestCase itShould="test Pie Chart backgroundColor property with value transparent or #ffa726">
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              backgroundColor={bgColor}
              paddingLeft="0"
              accessor="population"
            />
            <Button
              onPress={() => {
                if (bgColor === 'transparent') {
                  setBgColor('#ffa726');
                } else {
                  setBgColor('transparent');
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="paddingLeft">
          <TestCase itShould="test Pie Chart paddingLeft property with value 0 or 15">
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              backgroundColor="transparent"
              paddingLeft={padLeft}
              accessor="population"
            />
            <Button
              onPress={() => {
                if (padLeft === '0') {
                  setPadLeft('15');
                } else {
                  setPadLeft('0');
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="center">
          <TestCase itShould="test Pie Chart center property with value [20, 20] or [10, 10]">
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              backgroundColor="transparent"
              paddingLeft="0"
              accessor="population"
              center={centerArr}
            />
            <Button
              onPress={() => {
                if (centerArr[0] === 10) {
                  setCenterArr([20, 20]);
                } else {
                  setCenterArr([10, 10]);
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="absolute">
          <TestCase itShould="test Pie Chart absolute property with value true or false">
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              backgroundColor="transparent"
              paddingLeft="0"
              accessor="population"
              absolute={chartState}
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
        <TestSuite name="hasLegend">
          <TestCase itShould="test Pie Chart hasLegend property with value true or false">
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              backgroundColor="transparent"
              paddingLeft="0"
              accessor="population"
              hasLegend={chartState}
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
        <TestSuite name="avoidFalseZero">
          <TestCase itShould="test Pie Chart avoidFalseZero property with value true or false">
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              backgroundColor="transparent"
              paddingLeft="0"
              accessor="population"
              avoidFalseZero={chartState}
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
