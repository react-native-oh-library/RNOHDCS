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
  const LineChartProps = [
    { animateOnDataChange: true, onDataChangeAnimationDuration: 1000, data: [{ value: 90 }, { value: 50 }, { value: 40 }] },
    { animateOnDataChange: true, onDataChangeAnimationDuration: 2000, data: [{ value: 80 }, { value: 60 }, { value: 40 }] },
    { animateOnDataChange: true, scrollEventThrottle: 200, onDataChangeAnimationDuration: 2000, data: [{ value: 20 }, { value: 30 }, { value: 40 }] },
    { animateOnDataChange: true, scrollEventThrottle: 500, onDataChangeAnimationDuration: 2000, data: [{ value: 10 }, { value: 20 }, { value: 30 }] },
    { animateOnDataChange: false },
  ]
  return (
    <Tester>
      <ScrollView>
        {
          LineChartProps.map(item => {
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