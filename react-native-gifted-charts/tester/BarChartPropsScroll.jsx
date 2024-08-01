import { ScrollView, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestCase } from "@rnoh/testerino";
import { useState } from "react";

export default function () {
  const [pressProText, setPressProText] = useState('');

  const data = [
    { value: 50, label: '50', },
    { value: 60, label: '60', },
    { value: 70, label: '70', },
    { value: 80, label: '80', },
    { value: 90, label: '90', },
    { value: 100, label: '100' },
    { value: 110, label: '110' }];

  const barChartProps = [
    { scrollAnimation: true, scrollToEnd: true, scrollEventThrottle: 5000 },
    { scrollAnimation: true, scrollToEnd: true, scrollEventThrottle: 100 },
    { scrollAnimation: false, },
    { scrollToIndex: 1 }, { scrollToIndex: 6 },
    { disableScroll: true }, { disableScroll: false },
    { showScrollIndicator: true, indicatorColor: 'white' }, { showScrollIndicator: false },
    { showScrollIndicator: true, indicatorColor: 'black' },
    { showScrollIndicator: true, indicatorColor: 'default' },
    { autoShiftLabels: true, }, { autoShiftLabels: false, },
    { scrollToEnd: true, }, { scrollToEnd: false, },
  ]

  return (
    <Tester>
      <ScrollView>
        {
          barChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              {item.disableScroll ? <Text>请左右滑动图，为true,不允左右滚动</Text> : null}
              {item.showScrollIndicator ? <Text>请左右滑动图，为true,底部会出现滚动条</Text> : null}
              <BarChart data={data}  {...item}></BarChart>
            </TestCase>)
          })
        }
        <TestCase itShould={'请左右滚动条形图触发onScroll方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
          <BarChart data={data}  {...{
            onScroll: () => {
              setPressProText('触发onScroll方法');
            }
          }}></BarChart>
        </TestCase>
        <TestCase itShould={'请左右滚动条形图触发onMomentumScrollEnd方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
          <BarChart data={data}  {...{
            onMomentumScrollEnd: () => {
              setPressProText('触发onMomentumScrollEnd方法');
            }
          }}></BarChart>
        </TestCase>
      </ScrollView>
    </Tester >

  )
}