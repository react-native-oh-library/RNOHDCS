import { ScrollView, Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { TestCase, Tester } from "@rnoh/testerino";

const pieData = [{ value: 50 }, { value: 20 }, { value: 40 }];

export default function () {

  // 圆环图属性
  const donutChartprops = [
    { inwardExtraLengthForFocused: 10, focusOnPress: true, donut: true, },
    { inwardExtraLengthForFocused: 98, focusOnPress: true, donut: true, },
    { donut: true, semiCircle: true },
    { innerRadius: 10, donut: true },
    { innerRadius: 30, donut: true },
    { innerCircleColor: 'red', donut: true },
    { innerCircleColor: 'blue', donut: true },
    { innerCircleBorderWidth: 5, donut: true },
    { innerCircleBorderWidth: 10, donut: true },
    { innerCircleBorderColor: 'red', donut: true },
    { innerCircleBorderColor: 'blue', donut: true },
    { shiftInnerCenterX: -10, donut: true, isThreeD: true },
    { shiftInnerCenterX: 30, donut: true, isThreeD: true },
    { shiftInnerCenterY: -10, donut: true, isThreeD: true },
    { shiftInnerCenterY: 30, donut: true, isThreeD: true },
  ]

  return (
    <Tester>
      <ScrollView >
        {
          donutChartprops.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} tags={['C_API']}>
                {item.inwardExtraLengthForFocused ? <Text>inwardExtraLengthForFocused:{item.inwardExtraLengthForFocused},请点击圆环图子项，观察选中子项放大后扇形的圆角。</Text> : null}
                <PieChart data={pieData} {...item}></PieChart>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
}