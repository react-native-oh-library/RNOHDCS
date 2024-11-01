import { ScrollView } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestCase } from "@rnoh/testerino";
import { axesProps } from '../commonProps'

export default function () {
  const data = [
    { value: 50, label: '50' },
    { value: 60, label: '60', },
    { value: 70, label: '70', },
    { value: 80, label: '80', },
    { value: 90, label: '90', },
    { value: 100, label: '100' },
    { value: 110, label: '110' }];

  const barChartAxesPro = [
    ...axesProps,
    {
      data: [
        { value: 50, label: '50', labelTextStyle: { fontSize: 14, backgroundColor: 'red' }, labelWidth: 20 },
        { value: 60, label: '60', labelTextStyle: { fontSize: 14, backgroundColor: 'red' }, labelWidth: 40 },
        { value: 70, label: '70', },
        { value: 80, label: '80', },
        { value: 90, label: '90', },
        { value: 100, label: '100' },
        { value: 110, label: '110' }]
    },
    { labelsDistanceFromXaxis: 10 }, { labelsDistanceFromXaxis: 20 },

  ]

  return (
    <Tester>
      <ScrollView>
        {
          barChartAxesPro.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              <BarChart data={data}  {...item}></BarChart>
            </TestCase>)
          })
        }
        <TestCase itShould="{
              formatYLabel: (label) => label+'#'
            }">
          <BarChart data={data}  {...{
            formatYLabel: (label) => label + '#'
          }}></BarChart>
        </TestCase>
      </ScrollView>
    </Tester >

  )
}