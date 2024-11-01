import { useState } from "react";
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

  const barDataItemProps = [
    {
      data: [
        { value: 50 },
        { value: 60 },
        { value: 70 },
        { value: 100 },
        { value: -10 }]
    },
    {
      data: [
        { value: 50, barWidth: 5 },
        { value: 60, barWidth: 10 },
        { value: 70, barWidth: 20 },
        { value: 100, barWidth: 30 },
        { value: -10, barWidth: 40 }]
    },
    {
      data: [
        { value: 50, disablePress: true }, { value: 60, disablePress: false }]
    },
    {
      data: [{ value: 50, frontColor: 'red' }, { value: 60, frontColor: 'blue' }]
    },
    {
      isThreeD: true,
      data: [
        { value: 50, sideColor: 'red', sideWidth: 30, topColor: 'blue' },
        { value: 60, sideColor: 'blue', sideWidth: 10, topColor: 'red' }]
    },
    {
      data: [{ value: 50, barStyle: { color: 'red' } }, { value: 60, barStyle: { color: 'blue' } }]
    },
    {
      data: [{ value: 50, showGradient: true, frontColor: 'red' },
      { value: 60, showGradient: false }]
    },
    {
      data: [{ value: 50, showGradient: true, frontColor: 'red', gradientColor: 'blue' },
      { value: 80, showGradient: true, frontColor: 'blue', gradientColor: 'pink' },
      { value: 60, showGradient: false }]
    },
    {
      data: [{ value: 50, label: 50 }, { value: 60, label: 60 }, { value: 70, label: 70 }]
    },
    {
      data: [
        { value: 50, label: 50, labelWidth: 50 },
        { value: 60, label: 60, labelWidth: 60 },
        { value: 70, label: 70 }]
    },
    {
      data: [
        { value: 50, label: 50, labelWidth: 50, labelTextStyle: { color: 'red' } },
        { value: 60, label: 60, labelWidth: 60, labelTextStyle: { color: 'blue' } },
        { value: 70, label: 70, labelWidth: 70 }]
    },
    {
      data: [
        { value: 50, label: 50, labelsDistanceFromXaxis: -5 },
        { value: 60, label: 60, labelsDistanceFromXaxis: 5 },
        { value: 60, label: 70 }]
    },
    {
      cappedBars: true,
      // data.cappedBars 未使用
      data: [
        { value: 50, label: 50, cappedBars: true, capThickness: 50, capColor: 'red', capRadius: 10 },
        { value: 60, label: 60, cappedBars: true, capThickness: 20, capColor: 'blue', capRadius: 20 },
        { value: 60, label: 70 }]
    },
    {
      data: [
        { value: 50, label: 50, barBorderRadius: 5 },
        { value: 60, label: 60, barBorderRadius: 10 },
        { value: 60, label: 70 }]
    },
    {
      data: [
        { value: 50, label: 50, barBorderTopLeftRadius: 10 },
        { value: 60, label: 60, barBorderTopRightRadius: 10 },
        { value: 70, label: 70, barBorderBottomLeftRadius: 10, },
        { value: 80, label: 80, barBorderBottomRightRadius: 10, }]
    },
    {
      data: [
        { value: 50, label: 50, barMarginBottom: 5 },
        { value: 60, label: 60, barMarginBottom: 10 },
        { value: 70, label: 70, barMarginBottom: 15 }]
    },
    {
      data: [
        { value: 50, label: 50, spacing: 45 },
        { value: 60, label: 60, spacing: 20 },
        { value: 70, label: 70, spacing: 35 }]
    },
    {
      data: [
        { value: 50, label: 50, showXAxisIndex: true },
        { value: 60 },
        { value: 70, label: 70, showXAxisIndex: true }]
    },
  ]
  const [onPressText, setOnPressText] = useState(null)
  return (
    <Tester>
      <ScrollView>
        {barDataItemProps.map((item, index) => {
          return (
            <TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              {
                item.data[0].disablePress ? <Text>请点击条形图子项，为true点击无效果</Text> : null
              }
              <BarChart  {...item}></BarChart>
            </TestCase>
          )
        })}
        <TestCase itShould="data.onPress" tags={['C_API']}>
          <Text>请点击条形图子项触发onPress：{onPressText} </Text>
          <BarChart {...{
            data: [
              {
                value: 50, label: 50, onPress: () => {
                  setOnPressText('onPress被触发，value：50');
                }
              },
              {
                value: 60, label: 60, onPress: () => {
                  setOnPressText('onPress被触发，value：60');
                }
              }]
          }}></BarChart>
        </TestCase>
        <TestCase itShould="data.onLongPress" tags={['C_API']}>
          <Text>请点击条形图子项触发onLongPress：{onPressText} </Text>
          <BarChart {...{
            data: [
              {
                value: 50, label: 50, onLongPress: () => {
                  setOnPressText('onLongPress被触发，value：50');
                }
              },
              {
                value: 60, label: 60, onLongPress: () => {
                  setOnPressText('onLongPress被触发，value：60');
                }
              }]
          }}></BarChart>
        </TestCase>
        <TestCase itShould="data.onPressOut" tags={['C_API']}>
          <Text>请点击条形图子项触发onPressOut：{onPressText} </Text>
          <BarChart {...{
            data: [
              {
                value: 50, label: 50, onPressOut: () => {
                  setOnPressText('onPressOut被触发，value：50');
                }
              },
              {
                value: 60, label: 60, onPressOut: () => {
                  setOnPressText('onPressOut被触发，value：60');
                }
              }]
          }}></BarChart>
        </TestCase>
        <TestCase itShould="data={[
              { value: 50, labelComponent: () => <Text style={{'color':'red'}}>50</Text> },
              { value: 60, labelComponent: () => <Text style={{'color':'blue'}}>60</Text> }]
            }">
          <BarChart {...{
            data: [
              { value: 50, labelComponent: () => <Text style={{ 'color': 'red' }}>50</Text> },
              { value: 60, labelComponent: () => <Text style={{ 'color': 'blue' }}>60</Text> }]
          }}></BarChart>

        </TestCase>
        <TestCase itShould="data={[
              { topLabelContainerStyle: { backgroundColor: 'pink' } ,value: 50, topLabelComponent: () => <Text style={{ 'color': 'red' }}>50</Text>},
              { topLabelContainerStyle: { backgroundColor: 'yellow' } ,value: 60, topLabelComponent: () => <Text style={{ 'color': 'blue' }}>60</Text> }]
            }" tags={['C_API']}>
          <BarChart {...{
            data: [
              { topLabelContainerStyle: { backgroundColor: 'pink' }, value: 50, topLabelComponent: () => <Text style={{ 'color': 'red' }}>50</Text> },
              { topLabelContainerStyle: { backgroundColor: 'yellow' }, value: 60, topLabelComponent: () => <Text style={{ 'color': 'blue' }}>60</Text> }]
          }}></BarChart>
        </TestCase>
        <TestCase itShould="data={[
              { value: 50, label: 50, patternId: 'myPattern', barBackgroundPattern: =>()=> <Pattern
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
          <BarChart {...{
            data: [
              { value: 50, label: 50, patternId: 'myPattern', barBackgroundPattern: MyPattern },
              { value: 60, label: 60 },
              { value: 70, label: 70, }]
          }}></BarChart>
        </TestCase>
      </ScrollView>
    </Tester >

  )
}