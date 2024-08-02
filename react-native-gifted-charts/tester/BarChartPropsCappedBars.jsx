import { Button, ScrollView, Easing, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { yAxisSides } from 'gifted-charts-core';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";
import { G, Circle, Pattern, Rect } from "react-native-svg";
import { useRef, useState } from "react";
import { axesProps, commonPointerProps } from '../commonProps'

const SvgCompont = () => {
  return (<G id="shape">
    <Circle cx="100" cy="100" r="50" stroke="black" />
  </G>)
}
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
  const [onPressText, setOnPressText] = useState('');
  const [onLongPressText, setOnLongPressText] = useState('');
  const [onPressOutText, setOnPressOutText] = useState('');
  const [pressProText, setPressProText] = useState('');
  const scrollRef = useRef();

  const data = [
    { value: 50, label: '50', },
    { value: 60, label: '60', },
    { value: 70, label: '70', },
    { value: 80, label: '80', },
    { value: 90, label: '90', },
    { value: 100, label: '100' },
    { value: 110, label: '110' }];

  const barChartProps = [
    { cappedBars: true }, { cappedBars: false, },
    { cappedBars: true, capThickness: 10 }, { cappedBars: true, capThickness: 20 },
    { cappedBars: true, capColor: 'red' }, { cappedBars: true, capColor: 'blue' },
    { cappedBars: true, capRadius: 10 }, { cappedBars: true, capRadius: 20 },
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
              <BarChart data={data}  {...item}></BarChart>
            </TestCase>)
          })
        }
      </ScrollView>
    </Tester >

  )
}