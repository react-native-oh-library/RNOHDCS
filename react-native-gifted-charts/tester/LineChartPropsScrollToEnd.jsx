import { useRef } from 'react';
import { ScrollView } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { TestCase, Tester } from "@rnoh/testerino";

export default function () {
  const scrollref = useRef();
  const LineChartProps = [
    {
      scrollToIndex: 1,
      data: [
        { value: 50, label: '50' },
        { value: 80, label: '80' },
        { value: 90, label: '90' },
        { value: 70, label: '70' },
        { value: 40, label: '40' },
        { value: 30, label: '30' },
        { value: 20, label: '20' },
        { value: 10, label: '10' },
      ]
    },
    {
      scrollToIndex: 6,
      data: [
        { value: 50, label: '50' },
        { value: 80, label: '80' },
        { value: 90, label: '90' },
        { value: 70, label: '70' },
        { value: 40, label: '40' },
        { value: 30, label: '30' },
        { value: 20, label: '20' },
        { value: 10, label: '10' },
      ]
    },
    { scrollToEnd: false, data: [{ value: 90 }, { value: 50 }, { value: 40 }, { value: 60 }, { value: 70 }, { value: 80 }, { value: 90 }, { value: 100 }, { value: 110 }, { value: 120 }] },
    { scrollToEnd: true, scrollAnimation: false, data: [{ value: 90 }, { value: 50 }, { value: 40 }, { value: 60 }, { value: 70 }, { value: 80 }, { value: 90 }, { value: 100 }, { value: 110 }, { value: 120 }] },
    { scrollToEnd: true, scrollAnimation: true, data: [{ value: 90 }, { value: 50 }, { value: 40 }, { value: 60 }, { value: 70 }, { value: 80 }, { value: 90 }, { value: 100 }, { value: 110 }, { value: 120 }] },
  ]
  return (
    <Tester>
      <ScrollView>
        {
          LineChartProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <LineChart scrollRef={scrollref} {...item}></LineChart>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
}