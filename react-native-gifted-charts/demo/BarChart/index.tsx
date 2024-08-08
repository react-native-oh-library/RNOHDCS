import { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import BarChartWithGivenNumberOfVerticalLines from './BarChartWithGivenNumberOfVerticalLines';
import BarPairWithLine from './BarPairWithLine';
import BarThreeD from './BarThreeD';
import BarWithGradient from './BarWithGradient';
import CappedBars from './CappedBars';
import RoundStackBar from './RoundStackBar';
import ShiftXaxisLabels from './ShiftXaxisLabels';
import SimpleBarAnimated from './SimpleBarAnimated';
import SimpleBarsEndReached from './SimpleBarsEndReached';
import SimpleBlueBars from './SimpleBlueBars';
import SimpleBlueBarsVerticalLines from './SimpleBlueBarsVerticalLines';
import StackPairWithPattern from './StackPairWithPattern';
import StackWithNegative from './StackWithNegative';


export default function () {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    let t = setTimeout(() => {
      clearTimeout(t);
      setIsShow(true);
    }, 4000)
  })

  return (
    <>
      <Tester>
        <ScrollView>
          <TestCase itShould='demo1'>
            <BarChartWithGivenNumberOfVerticalLines></BarChartWithGivenNumberOfVerticalLines>
          </TestCase>
          <TestCase itShould='demo2'>
            <BarPairWithLine></BarPairWithLine>
          </TestCase>
          <TestCase itShould='demo3'>
            <BarThreeD></BarThreeD>
          </TestCase>
          <TestCase itShould='demo4'>
            <BarWithGradient></BarWithGradient>
          </TestCase>
          <TestCase itShould='demo5'>
            <CappedBars></CappedBars>
          </TestCase>
          <TestCase itShould='demo6'>
            <RoundStackBar></RoundStackBar>
          </TestCase>
          <TestCase itShould='demo7'>
            <ShiftXaxisLabels></ShiftXaxisLabels>
          </TestCase>
          <TestCase itShould='demo8'>
            <SimpleBarsEndReached></SimpleBarsEndReached>
          </TestCase>
          <TestCase itShould='demo9'>
            <SimpleBlueBars></SimpleBlueBars>
          </TestCase>
          <TestCase itShould='demo10'>
            <SimpleBlueBarsVerticalLines></SimpleBlueBarsVerticalLines>
          </TestCase>
          <TestCase itShould='demo11'>
            <StackPairWithPattern></StackPairWithPattern>
          </TestCase>
          <TestCase itShould='demo12'>
            <StackWithNegative></StackWithNegative>
          </TestCase>
        </ScrollView>
      </Tester>
    </>
  )
}