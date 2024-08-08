import { Button, ScrollView, Easing, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestCase } from "@rnoh/testerino";
import { G, Circle, Pattern, Rect } from "react-native-svg";

export default function () {

  const stackDatas = [
    {
      stacks:
        [
          {
            value: 10, color: 'red', showGradient: true, gradientColor: 'pink', showXAxisIndex: true,
          },
          {
            value: 20, color: 'blue', showGradient: true, gradientColor: 'green'
          },
        ],
      label: 'Jan',
      labelTextStyle: { color: 'green' },
      barWidth: 40,
      spacing: 30,
      borderRadius: 10,
    },
    {
      stacks:
        [
          {
            value: 8, color: 'red', showXAxisIndex: true,
          },
          {
            value: 17, color: 'blue', marginBottom: 1
          },
        ],
      label: 'Feb',
      labelTextStyle: { color: 'blue' },
      barWidth: 60,
      spacing: 30,
      borderRadius: 15,
    },
  ]
  const stackBarChartProps = [
    {
      stackData: stackDatas,
    },
    {
      barBorderRadius: 10, stackData: stackDatas,
    },
    {
      barBorderRadius: 20, stackData: stackDatas,
    },
    {
      barBorderTopLeftRadius: 10, stackData: stackDatas,
    },
    {
      barBorderTopLeftRadius: 20, stackData: stackDatas,
    },
    {
      barBorderTopRightRadius: 10, stackData: stackDatas,
    },
    {
      barBorderTopRightRadius: 20, stackData: stackDatas,
    },
    {
      barBorderBottomLeftRadius: 10, stackData: stackDatas,
    },
    {
      barBorderBottomLeftRadius: 20, stackData: stackDatas,
    },
    {
      barBorderBottomRightRadius: 10, stackData: stackDatas,
    },
    {
      barBorderBottomRightRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderTopLeftRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderTopLeftRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderTopRightRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderTopRightRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderBottomLeftRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderBottomLeftRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderBottomRightRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderBottomRightRadius: 20, stackData: stackDatas,
    },
    {
      autoShiftLabelsForNegativeStacks: true, stackData: stackDatas,
    },
    {
      autoShiftLabelsForNegativeStacks: false, stackData: stackDatas,
    },
  ]
  return (
    <Tester>
      <ScrollView>
        {
          stackBarChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              <BarChart  {...item}></BarChart>
            </TestCase>)
          })
        }
      </ScrollView>
    </Tester >

  )
}