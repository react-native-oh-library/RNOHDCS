import { ScrollView, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestCase } from "@rnoh/testerino";

export default function () {

  return (
    <Tester>
      <ScrollView>
        {
          [{ leftShiftForTooltip: 10 }, { leftShiftForTooltip: 30 }, { leftShiftForLastIndexTooltip: 10 }, { leftShiftForLastIndexTooltip: 30 }].map((item, index) => {
            return (<TestCase key={'renderTooltip_' + index} itShould={`{${JSON.stringify(item)},
              data: [{ value: 50 }, { value: ${item.leftShiftForLastIndexTooltip ? 30 : 70} }],
              showValuesAsTopLabel: true,
              renderTooltip: () => { return (<Text>renderTooltip</Text>) }
           }`}>
              {item.leftShiftForTooltip ? <Text>请点击条形图第一个子项,观察效果</Text> : null}
              {item.leftShiftForLastIndexTooltip ? <Text>请点击条形图最后一个子项,观察效果</Text> : null}
              <BarChart  {...{
                data: [{ value: 50 }, { value: item.leftShiftForLastIndexTooltip ? 30 : 70}],
                showValuesAsTopLabel: true,
                ...item,
                renderTooltip: () => { return (<Text>Tooltip_{index}</Text>) }
              }}></BarChart>
            </TestCase>)
          })
        }
      </ScrollView>
    </Tester >

  )
}