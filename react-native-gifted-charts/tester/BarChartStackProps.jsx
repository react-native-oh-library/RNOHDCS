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
            value: 10, color: 'red', showGradient: true, gradientColor: 'pink',
          },
          {
            value: 20, color: 'blue', showGradient: true, gradientColor: 'green'
          },
        ],
      showXAxisIndex: true,
      label: 'Jan',
      labelTextStyle: { color: 'green' },
      borderRadius: 10,
    },
    {
      stacks:
        [
          {
            value: 8, color: 'red', 
          },
          {
            value: 17, color: 'blue', marginBottom: 1, 
          },
        ],
      showXAxisIndex: false,
      label: 'Feb',
      labelTextStyle: { color: 'blue' },
      borderRadius: 15,
    },
    {
      stacks:
        [
          {
            value: 8, color: 'red'
          },
          {
            value: 17, color: 'blue', marginBottom: 1
          },
        ],
      showXAxisIndex: true,
      label: 'Feb',
      labelTextStyle: { color: 'blue' },
    },
  ]
  const stackBarChartProps = [
    {
      stackData: stackDatas,
    },
    {
      stackData: stackDatas,spacing:10
    },
    {
      stackData: stackDatas,spacing:40
    },
    {
      stackData: stackDatas, barWidth:10
    },
    {
      stackData: stackDatas, barWidth:80
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
      stackBorderRadius: 0, stackData: stackDatas,
    },
    {
      stackBorderRadius: 60, stackData: stackDatas,
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