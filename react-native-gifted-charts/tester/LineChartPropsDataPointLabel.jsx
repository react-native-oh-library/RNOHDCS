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
    {
      dataPointLabelWidth: 20,
      data: [
        {
          value: 50,
          dataPointText: '50',
          dataPointLabelWidth: 10, dataPointLabelShiftX: 10, dataPointLabelShiftY: 10
        },
        { value: 80, dataPointText: '80' },
        { value: 90, dataPointText: '90' },
        { value: 70, dataPointText: '70' }]
    },
    {
      dataPointLabelWidth: 50,
      data: [{
        value: 50,
        dataPointText: '50',
      },
      {
        value: 80,
        dataPointText: '80',
      },
      { value: 90, dataPointText: '90' },
      { value: 70, dataPointText: '70' }]
    },
    {
      dataPointLabelShiftX: 10,
      data: [
        {
          value: 50, dataPointText: '50',
        },
        { value: 80, dataPointText: '80' },
        { value: 90, dataPointText: '90' },
        { value: 70, dataPointText: '70' }]
    },
    {
      dataPointLabelShiftX: 20,
      data: [
        {
          value: 50, dataPointText: '50',
        },
        { value: 80, dataPointText: '80' },
        { value: 90, dataPointText: '90' },
        { value: 70, dataPointText: '70' }]
    },
    {
      dataPointLabelShiftY: 10,
      data: [
        {
          value: 50, dataPointText: '50',
        },
        { value: 80, dataPointText: '80' },
        { value: 90, dataPointText: '90' },
        { value: 70, dataPointText: '70' }]
    },
    {
      dataPointLabelShiftY: 20,
      data: [
        {
          value: 50, dataPointText: '50',
        },
        { value: 80, dataPointText: '80' },
        { value: 90, dataPointText: '90' },
        { value: 70, dataPointText: '70' }]
    },
  ]

  return (
    <Tester>
      <ScrollView>
        {
          LineChartProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                {item.disableScroll ? <Text>disableScroll:true时禁止左右图表滑动</Text> : null}
                {item.focusEnabled ? <Text>请点击图形上显示的数据点，观察效果</Text> : null}
                <LineChart scrollRef={scrollref} data={lineData} {...item}></LineChart>
              </TestCase>
            )
          })
        }

      </ScrollView>
    </Tester>
  )
}