import { ScrollView, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestCase } from "@rnoh/testerino";

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
    { focusBarOnPress: true, focusedBarIndex: 1, focusedBarConfig: { color: 'red', width: 100, opacity: 1, borderRadius: 10 } },
    { focusBarOnPress: true, focusedBarIndex: 0, focusedBarConfig: { color: 'blue', width: 80, opacity: 1, borderRadius: 20 } },
  ]
  return (
    <Tester>
      <ScrollView>
        {
          barChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              {item.focusBarOnPress ? <Text>请点击条形图子项，观察效果为focusedBarConfig配置信息</Text> : null}
              <BarChart data={data}  {...item}></BarChart>
            </TestCase>)
          })
        }
      </ScrollView>
    </Tester >

  )
}