import { useState, useRef } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Path, Stop, LinearGradient } from 'react-native-svg';
import { LineChart } from 'react-native-gifted-charts';
import { CurveType } from 'gifted-charts-core'
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import { axesProps, commonPointerProps } from "../commonProps";

export default function () {
  const scrollref = useRef();
  const [lineData, setLineData] = useState([{ value: 50, label: '50' }, { value: 80, label: '80' }, { value: 90, label: '90' }, { value: 70, label: '70' }]);
  const lineChartAxesProps = [
    ...axesProps
  ]
  return (
    <Tester>
      <ScrollView>
        {
          lineChartAxesProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <LineChart scrollRef={scrollref} data={lineData} {...item}></LineChart>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
}