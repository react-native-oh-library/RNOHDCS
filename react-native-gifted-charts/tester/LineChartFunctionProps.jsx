import { useState, useRef } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Path, Stop, LinearGradient } from 'react-native-svg';
import { LineChart } from 'react-native-gifted-charts';
import { CurveType } from 'gifted-charts-core'
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import { axesProps, commonPointerProps } from "../commonProps";

export default function () {
  const [pressText, setPressText] = useState('')
  const scrollref = useRef();
  const [lineData, setLineData] = useState([
    { value: 50, label: '50' },
    { value: 80, label: '80' },
    { value: 90, label: '90' },
    { value: 70, label: '70' },
    { value: 50, label: '50' },
    { value: 80, label: '80' },
    { value: 90, label: '90' },
    { value: 70, label: '70' }
  ]);

  return (
    <Tester>
      <ScrollView>
        <TestCase itShould='请点击图形触发onPress, 左右滑动触发onScroll，onMomentumScrollEnd,onEndReached,onStartReached'>
          <Text>{pressText}</Text>
          <LineChart
            scrollRef={scrollref}
            data={lineData}
            onPress={() => {
              setPressText('onPress被触发')
            }}
            onScroll={() => {
              setPressText('onScroll被触发')
            }}
            onMomentumScrollEnd={() => {
              setPressText('onMomentumScrollEnd被触发')
            }}
            onEndReached={() => {
              setPressText('onEndReached被触发')
            }}
            onStartReached={() => {
              setPressText('onStartReached被触发')
            }}></LineChart>
        </TestCase>
      </ScrollView>
    </Tester >
  )
}