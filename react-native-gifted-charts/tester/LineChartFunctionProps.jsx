import { useState, useRef } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Path, Stop, LinearGradient } from 'react-native-svg';
import { LineChart } from 'react-native-gifted-charts';
import { CurveType } from 'gifted-charts-core'
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import { axesProps, commonPointerProps } from "../commonProps";

export default function () {
  const [pressText, setPressText] = useState('')
  const [pressText1, setPressText1] = useState('')
  const [pressText2, setPressText2] = useState('')
  const [pressText3, setPressText3] = useState('')
  const [pressText4, setPressText4] = useState('')
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
        <TestCase itShould='请点击图形触发onPress'>
          <Text>{pressText}</Text>
          <LineChart
            scrollRef={scrollref}
            data={lineData}
            onPress={() => {
              setPressText('onPress被触发')
            }}
            >
              
            </LineChart>
        </TestCase>
        <TestCase itShould='请左右滑动触发onScroll'>
          <Text>{pressText1}</Text>
          <LineChart
            scrollRef={scrollref}
            data={lineData}
            onScroll={() => {
              setPressText1('onScroll被触发')
            }}
            >
            </LineChart>
        </TestCase>
        <TestCase itShould='请左右滑动触发onMomentumScrollEnd'>
          <Text>{pressText2}</Text>
          <LineChart
            scrollRef={scrollref}
            data={lineData}
            onMomentumScrollEnd={() => {
              setPressText2('onMomentumScrollEnd被触发')
            }}
            >
            </LineChart>
        </TestCase>
        <TestCase itShould='请左右滑动触发onEndReached'>
          <Text>{pressText3}</Text>
          <LineChart
            scrollRef={scrollref}
            data={lineData}
            onEndReached={() => {
              setPressText3('onEndReached被触发')
            }}
            >
            </LineChart>
        </TestCase>
        <TestCase itShould='请左右滑动触发onStartReached'>
          <Text>{pressText4}</Text>
          <LineChart
            scrollRef={scrollref}
            data={lineData}
            onStartReached={() => {
              setPressText4('onStartReached被触发')
            }}
            >
            </LineChart>
        </TestCase>
      </ScrollView>
    </Tester >
  )
}