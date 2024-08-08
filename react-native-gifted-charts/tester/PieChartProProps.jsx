import { PieChartPro } from "react-native-gifted-charts";
import { TestCase, Tester } from "@rnoh/testerino";
import { ScrollView } from "react-native";

export default function () {

  const pieData = [
    { value: 54, color: '#177AD5', text: '54%', onPress: () => console.log('ddddd') },
    { value: 30, color: '#79D2DE', text: '30%', onPress: () => setOnPressText('onPress被触发 text:30%') },
    { value: 26, color: '#ED6665', text: '26%', onPress: () => setOnPressText('onPress被触发 text:26%') },
  ];
  const pieChartProProps = [
    { isAnimated: true, curvedStartEdges: true, donut: true, innerRadius: 30 },
    { isAnimated: false, curvedStartEdges: true, donut: true, innerRadius: 30 },
    { curvedStartEdges: true, donut: true, innerRadius: 30 },
    { curvedStartEdges: false, donut: true, innerRadius: 20 },
    { curvedEndEdges: true, donut: true, innerRadius: 30 },
    { curvedEndEdges: false, donut: true, innerRadius: 20 },
    { ring: true }, { ring: false },
    { strokeWidth: 5 }, { strokeWidth: 10 },
    { strokeWidth: 5, strokeColor: 'red' }, { strokeWidth: 10, strokeColor: 'blue' },
    { strokeWidth: 5, strokeDashArray: [2, 4] }, { strokeWidth: 10, strokeDashArray: [2, 8] },
    { edgesRadius: 20, donut: true }, { edgesRadius: 30, donut: true },
    { semiCircle: true }, { semiCircle: false },
    { textSize: 12 }, { textSize: 18 }, { textSize: 20 },
    { textColor: 'red' }, { textColor: 'black' }, { textColor: 'yellow' },
    { font: 'Arial' }, { font: 'Cursive' },
    { fontWeight: 'bold', }, { fontWeight: 'bolder' }, { fontWeight: 'lighter' }, { fontWeight: '100' }, { fontWeight: '200' },
    { fontStyle: 'normal' }, { fontStyle: 'italic', }, { fontStyle: 'oblique' },
  ]

  return (
    <Tester>
      <ScrollView >
        {
          pieChartProProps.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} key={index + '_' + JSON.stringify(item)} tags={['C_API']}>
                <PieChartPro data={pieData} {...item}></PieChartPro>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
}