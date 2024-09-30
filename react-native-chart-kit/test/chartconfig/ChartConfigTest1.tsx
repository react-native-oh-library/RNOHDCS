import React, {useState} from 'react';
import {Button, Dimensions, ScrollView} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function ChartConfigTest1() {
  const screenWidth = Dimensions.get('window').width;

  const chartConfigVal = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
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

  const data = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };

  const [widthVal, setWidthVal] = useState(screenWidth);
  const [heightVal, setHeightVal] = useState(220);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="width">
          <TestCase itShould="test Chart width property with screen width">
            <ProgressChart
              data={data}
              width={widthVal}
              height={220}
              chartConfig={chartConfigVal}
            />
            <Button
              onPress={() => {
                if (widthVal === screenWidth) {
                  setWidthVal(screenWidth / 2);
                } else {
                  setWidthVal(screenWidth);
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="height">
          <TestCase itShould="test Chart height property with value 220">
            <ProgressChart
              data={data}
              width={screenWidth}
              height={heightVal}
              chartConfig={chartConfigVal}
            />
            <Button
              onPress={() => {
                if (heightVal === 220) {
                  setHeightVal(heightVal / 2);
                } else {
                  setHeightVal(220);
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
