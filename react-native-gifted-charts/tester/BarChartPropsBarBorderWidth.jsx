import { ScrollView } from "react-native";
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
    { barBorderWidth: 5 }, { barBorderWidth: 10 },
    { barBorderWidth: 5, barBorderColor: 'red' }, { barBorderWidth: 5, barBorderColor: 'blue' },
    { barBorderWidth: 5, barBorderRadius: 10 }, { barBorderWidth: 5, barBorderRadius: 20 },
    { barBorderWidth: 5, barBorderTopLeftRadius: 10 }, { barBorderWidth: 5, barBorderTopLeftRadius: 20 },
    { barBorderWidth: 5, barBorderTopRightRadius: 10 }, { barBorderWidth: 5, barBorderTopRightRadius: 20 },
    { barBorderWidth: 5, barBorderBottomLeftRadius: 10 }, { barBorderWidth: 5, barBorderBottomLeftRadius: 20 },
    { barBorderWidth: 5, barBorderBottomRightRadius: 10 }, { barBorderWidth: 5, barBorderBottomRightRadius: 20 },
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