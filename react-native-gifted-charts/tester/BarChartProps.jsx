import { ScrollView, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestCase } from "@rnoh/testerino";
import { Pattern, Rect } from "react-native-svg";

const MyPattern = () => {
  return (
    <Pattern
      id="myPattern"
      patternUnits="userSpaceOnUse"
      width="30"
      height="6">
      <Rect
        x={0}
        y={0}
        height={4}
        width={30}
        rx={2}
        ry={2}
        fill={'#D38600'}
      />
    </Pattern>
  );
};

export default function () {
  const data = [
    { value: 50, label: '50', },
    { value: 60, label: '60', },
    { value: 70, label: '70', },
    { value: 80, label: '80', },
    { value: 90, label: '90', },
    { value: 100, label: '100' },
    { value: 110, label: '110' }];

  const data1 = [
    { value: -5, label: '-5', },
    { value: -6, label: '-6', },
    { value: -7, label: '-7', },
    { value: -8, label: '-8', },
    { value: -9, label: '-9', },
    { value: -10, label: '-10' },
    { value: -11, label: '-11' }];

  const barChartProps = [
    { width: 100 }, { with: 400 },
    { height: 100 }, { height: 200 },
    { maxValue: 70 }, { maxValue: 200 },
    { yAxisOffset: 5 }, { yAxisOffset: 10 },
    { mostNegativeValue: -12 }, { mostNegativeValue: -15 },
    { noOfSections: 5 }, { noOfSections: 10 },
    { noOfSectionsBelowXAxis: 2 }, { noOfSectionsBelowXAxis: 5 },
    { stepValue: 10 }, { stepValue: 15 },
    { stepHeight: 10 }, { stepHeight: 15 },
    { negativeStepValue: 20, noOfSectionsBelowXAxis: 1 }, { negativeStepValue: 30, noOfSectionsBelowXAxis: 4 },
    { mostNegativeValue: -15, negativeStepHeight: 20 }, { mostNegativeValue: -15, negativeStepHeight: 50 },
    { spacing: 5, }, { spacing: 35 },
    { backgroundColor: 'red', }, { backgroundColor: 'blue' },
    { sectionColors: ['red', 'yellow', 'pink', 'blue'] }, { sectionColors: ['blue', 'pink'] },
    { initialSpacing: 10, }, { initialSpacing: 30, },
    { adjustToWidth: true, parentWidth: 300 }, { adjustToWidth: true, parentWidth: 200 },
    { adjustToWidth: false, parentWidth: 300 },
    { barWidth: 20 }, { barWidth: 30 },
    { barStyle: { borderRadius: 10,backgroundColor:'red' }}, { barStyle: { borderRadius: 30 ,backgroundColor:'green'} },
    { isThreeD: true }, { isThreeD: false },
    { frontColor: 'red' }, { frontColor: 'blue' },
    { isThreeD: true, sideColor: 'red' }, { isThreeD: true, sideColor: 'blue' },
    { isThreeD: true, topColor: 'blue' }, { isThreeD: true, topColor: 'red' },
    { isThreeD: true, sideWidth: 30 }, { isThreeD: true, sideWidth: 40 },
    { showGradient: true }, { showGradient: false },
    { showGradient: true, gradientColor: 'blue' }, { showGradient: true, gradientColor: 'red' },
    { roundedTop: true }, { roundedTop: false },
    { roundedBottom: true }, { roundedBottom: false },
    { activeOpacity: 0.5 }, { activeOpacity: 0.8 },
    { disablePress: true }, { disablePress: false },
    { barMarginBottom: 5 }, { barMarginBottom: 10 },
    { minHeight: 100 }, { minHeight: 200 },
  ]
  return (
    <Tester>
      <ScrollView>
        {
          barChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              {item.focusBarOnPress ? <Text>请点击条形图子项，观察效果为focusedBarConfig配置信息</Text> : null}
              {item.activeOpacity ? <Text>请点击条形图子项，观察透明度变化</Text> : null}
              {item.disablePress ? <Text>值为true,取消按钮事件，条形图子项不可点击</Text> : null}
              <BarChart data={(item.mostNegativeValue || item.negativeStepValue || item.negativeStepHeight) ? data1 : data}  {...item}></BarChart>
            </TestCase>)
          })
        }
        <TestCase itShould="{[
              { patternId: 'myPattern', barBackgroundPattern: =>()=> <Pattern
              id='myPattern'
              patternUnits='userSpaceOnUse'
              width='30'
              height='6'>
              <Rect
                x={0}
                y={0}
                height={4}
                width={30}
                rx={2}
                ry={2}
                fill={'#D38600'}
              />
            </Pattern> },
              { value: 60, label: 60 },
              { value: 70, label: 70, }]}" tags={['C_API']}>
          <BarChart data={data}  {...{
            barBackgroundPattern: MyPattern,
            patternId: 'myPattern'
          }}></BarChart>
        </TestCase>
      </ScrollView>
    </Tester >
  )
}