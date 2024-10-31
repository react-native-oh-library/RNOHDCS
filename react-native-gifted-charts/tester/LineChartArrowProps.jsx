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
  const arrowProps = [
    { showArrows: true }, { showArrows: false },
    { showArrows: true, arrowConfig: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true } },
    {
      showArrow1: true,
      arrowConfig1: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      showArrow2: true,
      arrowConfig2: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      showArrow3: true,
      arrowConfig3: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      showArrow4: true,
      arrowConfig4: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      showArrow5: true,
      arrowConfig5: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      showArrows: true,
      arrowConfig1: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      arrowConfig2: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'green', showArrowBase: true },
      arrowConfig3: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'gray', showArrowBase: true },
      arrowConfig4: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'yellow', showArrowBase: true },
      arrowConfig5: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      showArrows: true,
      arrowConfig1: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: false },
      arrowConfig2: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'green', showArrowBase: false },
      arrowConfig3: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'gray', showArrowBase: false },
      arrowConfig4: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'yellow', showArrowBase: false },
      arrowConfig5: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: false },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
  ]

  return (
    <Tester>
      <ScrollView>
        {
          arrowProps.map(item => {
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