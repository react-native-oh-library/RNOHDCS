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
    { showLine: true },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { initialSpacing: 20 },
      lineConfig: { initialSpacing: 20 }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { initialSpacing: 50 },
      lineConfig2: { initialSpacing: 50 }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { spacing: 10 },
      lineConfig2: { spacing: 10 },
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { spacing: 50 },
      lineConfig2: { spacing: 50 },
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { curved: true },
      lineConfig2: { curved: true },
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { thickness: 5 },
      lineConfig2: { thickness: 5 },
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineConfig: { color: 'red' },
      lineConfig2: { color: 'red' }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { color: 'blue' },
      lineConfig2: { color: 'blue' }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { hideDataPoints: true },
      lineConfig2: { hideDataPoints: true }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { dataPointsShape: 'rectangular' },
      lineConfig2: { dataPointsShape: 'rectangular' }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { dataPointsShape: 'circular' },
      lineConfig2: { dataPointsShape: 'circular' }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { dataPointsShape: 'rectangular', dataPointsWidth: 10 },
      lineConfig2: { dataPointsShape: 'rectangular', dataPointsWidth: 10 }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { dataPointsShape: 'rectangular', dataPointsWidth: 20 },
      lineConfig2: { dataPointsShape: 'rectangular', dataPointsWidth: 20 }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { dataPointsColor: 'red' },
      lineConfig2: { dataPointsColor: 'red' }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { dataPointsColor: 'blue' },
      lineConfig2: { dataPointsColor: 'blue' }
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { dataPointsShape: 'circular', dataPointsRadius: 10 },
      lineConfig2: { dataPointsShape: 'circular', dataPointsRadius: 10 },
    },
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
      lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
      lineConfig: { dataPointsShape: 'circular', dataPointsRadius: 15 },
      lineConfig2: { dataPointsShape: 'circular', dataPointsRadius: 15 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { textColor: 'red', dataPointsShape: 'rectangular', textFontSize: 20 },
      lineConfig2: { textColor: 'red', dataPointsShape: 'rectangular', textFontSize: 20 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { textColor: 'red', dataPointsShape: 'rectangular', textFontSize: 20, textShiftX: 10 },
      lineConfig2: { textColor: 'red', dataPointsShape: 'rectangular', textFontSize: 20, textShiftX: 10 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 30, textShiftX: 20 },
      lineConfig2: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 30, textShiftX: 20 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { textColor: 'red', dataPointsShape: 'rectangular', textFontSize: 20, textShiftY: 10 },
      lineConfig2: { textColor: 'red', dataPointsShape: 'rectangular', textFontSize: 20, textShiftY: 10 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 30, textShiftY: 20 },
      lineConfig2: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 30, textShiftY: 20 },
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 20, shiftY: 20 },
      lineConfig2: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 20, shiftY: 20 },
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 20, shiftY: -10 },
      lineConfig2: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 20, shiftY: -10 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { startIndex: 1 },
      lineConfig2: { startIndex: 1 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { startIndex: 2 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { endIndex: 4 },
      lineConfig2: { endIndex: 4 }
    },
    {
      showLine: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { endIndex: 5 },
      lineConfig2: { endIndex: 5 },
    },
    {
      showLine: true,
      lineBehindBars: true,
      lineData: [{ value: 80, dataPointText: 80 }, { value: 20, dataPointText: 20 }, { value: 100, dataPointText: 100 }, { value: 40, dataPointText: 40 }, { value: 50, dataPointText: 50 }, { value: 60, dataPointText: 60 }, { value: 70, dataPointText: 70 }],
      lineData2: [{ value: 100, dataPointText: 100 }, { value: 90, dataPointText: 90 }, { value: 80, dataPointText: 80 }, { value: 70, dataPointText: 70 }, { value: 60, dataPointText: 60 }, { value: 50, dataPointText: 50 }, { value: 40, dataPointText: 40 }],
      lineConfig: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 20, shiftY: -10 },
      lineConfig2: { textColor: 'blue', dataPointsShape: 'rectangular', textFontSize: 20, shiftY: -10 }
    },
  ]
  const [isAnimated, setIsAnimated] = useState(false)
  const [delay, setDelay] = useState(1000)
  const [isShow, setIsShow] = useState(true)
  const initParams = () => {
    setIsShow(false)
    setIsAnimated(false)
    setDelay(1000)
  }
  return (
    <Tester>
      <ScrollView>
        {
          barChartProps.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
                <BarChart data={data}  {...item}></BarChart>
              </TestCase>
            )
          })
        }
        <TestCase itShould='{
            showLine: true,
            lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
            lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
            lineConfig: { isAnimated: false, delay: 1000 },
            lineConfig2: { isAnimated: false, delay: 1000 }'>
          <View style={{ flex: 1, gap: 10 }}>
            <Button title='lineConfig: { isAnimated: false, delay: 1000 }lineConfig2: { isAnimated: false, delay: 1000 }' onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setIsAnimated(false)
                setDelay(1000)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title='lineConfig: { isAnimated: true, delay: 500 }lineConfig2: { isAnimated: true, delay: 500 }' onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setIsAnimated(true)
                setDelay(500)
                setIsShow(true)
              }, 500)
            }}></Button>
             <Button title='lineConfig: { isAnimated: true, delay: 1500 }lineConfig2: { isAnimated: true, delay: 1500 }' onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setIsAnimated(true)
                setDelay(1500)
                setIsShow(true)
              }, 500)
            }}></Button>
          </View>
          <View style={{ height: 246, gap: 10 }}>
            {isShow ? <BarChart data={data}  {...{
              showLine: true,
              lineData: [{ value: 80 }, { value: 20 }, { value: 100 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }],
              lineData2: [{ value: 100 }, { value: 90 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }, { value: 40 }],
              lineConfig: { isAnimated: isAnimated, delay: delay },
              lineConfig2: { isAnimated: isAnimated, delay: delay },
            }}></BarChart> : null}
          </View>
        </TestCase>
      </ScrollView>
    </Tester >

  )
}