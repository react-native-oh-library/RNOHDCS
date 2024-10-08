import React, {useState} from 'react';
import {Button, Dimensions, ScrollView} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function ProgressChartTest() {
  const screenWidth = Dimensions.get('window').width - 40;

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ff9626',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };

  const [strokeWidthVal, setStrokeWidthVal] = useState(16);
  const [radiusVal, setRadiusVal] = useState(32);
  const [isHideLegend, setIsHideLegend] = useState(false);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="strokeWidth">
          <TestCase itShould="test Progress Ring strokeWidth property with value is 16 or 8">
            <ProgressChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              strokeWidth={strokeWidthVal}
            />
            <Button
              onPress={() => {
                if (strokeWidthVal === 16) {
                  setStrokeWidthVal(8);
                } else {
                  setStrokeWidthVal(16);
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="radius">
          <TestCase itShould="test Progress Ring radius property with value is 32 or 8">
            <ProgressChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              radius={radiusVal}
            />
            <Button
              onPress={() => {
                if (radiusVal === 32) {
                  setRadiusVal(8);
                } else {
                  setRadiusVal(32);
                }
              }}
              title={'Check'}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="hideLegend">
          <TestCase itShould="test Progress Ring hideLegend property with value is true or false">
            <ProgressChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
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
