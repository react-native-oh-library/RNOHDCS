import { useRef, useState } from "react";
import { Button, ScrollView, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestCase } from "@rnoh/testerino";


export default function () {
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

  return (
    <Tester>
      <ScrollView>
        <TestCase itShould={'function'} tags={['C_API']}>
          <Text>请点击条形图触发onPress方法:{pressProText}</Text>
          <Text>请长按条形图触发onLongPress方法:{pressProText}</Text>
          <Text>请长按条形图并释放触发onPressOut方法:{pressProText}</Text>
          <Text>开始滚动触发onStartReached方法:{pressProText}</Text>
          <Text>结束滚动触发onEndReached方法:{pressProText}</Text>
          <BarChart
            data={data}
            scrollref={scrollRef}
            onPress={() => {
              setPressProText('触发onPress方法');
            }}
            onLongPress={() => {
              setPressProText('触发onLongPress方法');
            }}
            onPressOut={() => {
              setPressProText('触发onPressOut方法');
            }}
            onMomentumScrollEnd={() => {
              setPressProText('触发onMomentumScrollEndl方法');
            }}
            onEndReached={() => {
              setPressProText('触发onEndReached方法');
            }}
            onStartReached={() => {
              setPressProText('触发onStartReached方法');
            }}></BarChart>
        </TestCase>
      </ScrollView>
    </Tester >

  )
}