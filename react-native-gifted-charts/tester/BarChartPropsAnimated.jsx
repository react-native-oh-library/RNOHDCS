import { Button, ScrollView, Easing, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";

export default function () {

  const data = [
    { value: 50, label: '50', },
    { value: 60, label: '60', },
    { value: 70, label: '70', },
    { value: 80, label: '80', },
    { value: 90, label: '90', },
    { value: 100, label: '100' },
    { value: 110, label: '110' }];

  const barChartProps = [
    { isAnimated: false, data: [{ value: 50 }] },
    { isAnimated: true, animationDuration: 500, data: [{ value: 50 }, { value: 60 }] },
    { isAnimated: true, animationDuration: 1000, animationEasing: Easing.linear, data: [{ value: 50 }, { value: 60 }, { value: 70 }] },
    { isAnimated: true, animationDuration: 3500, animationEasing: Easing.inOut, data: [{ value: 50 }, { value: 60 }, { value: 70 }, { value: 80 }] },
  ]

  return (
    <Tester>
      <ScrollView>
        {
          barChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              <BarChart data={data}  {...item}></BarChart>
            </TestCase>)
          })
        }
      </ScrollView>
    </Tester >

  )
}