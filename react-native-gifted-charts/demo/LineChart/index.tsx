import { useState, useEffect } from 'react';
import { ScrollView,Text } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import AnimatedArea from './AnimatedArea';
import AreaChartDynamicData from './AreaChartDynamicData';
import AreaTwo from './AreaTwo';
import BiColorAreaChart from './BiColorAreaChart';
import CaloriesBurnt from './CaloriesBurnt';
import ChartWithAdjustingPointer from './ChartWithAdjustingPointer';
import ChartWithPointer from './ChartWithPointer';
import DataSetSteppedChart from './DataSetSteppedChart';
import FocusedIndex from './FocusedIndex';
import GradientLineAndLabel from './GradientLineAndLabel';
import HighlightedRange from './HighlightedRange';
import LineChartEndReached from './LineChartEndReached';
import LineChartTwo from './LineChartTwo';
import PopulationChart from './PopulationChart';
import ScrollingChartWithPointer from './ScrollingChartWithPointer';
import SecondaryLineChart from './SecondaryLineChart';
import Segmented from './Segmented';
import SegmentedDataSet from './SegmentedDataSet';
import SimpleBlueLine from './SimpleBlueLine';
import SimpleBlueLineWithGivenNumberOfVerticalLines from './SimpleBlueLineWithGivenNumberOfVerticalLines';
import AutoScrollLine from './AutoScrollLine';


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
          <Text style={{color:'#fff',paddingTop:16,paddingBottom:16}}>由于图表展示比较多，会影响demo2动画。待demo2动画完成500s后再加载剩余图表</Text>
          <TestCase itShould='demo1'>
            <AnimatedArea></AnimatedArea>
          </TestCase>
          <TestCase itShould='demo2-需停留3.5s观察图表变化'>
            <AreaChartDynamicData></AreaChartDynamicData>
          </TestCase>
          {!isShow ? null :
            <>
              <TestCase itShould='demo3'>
                <AreaTwo></AreaTwo>
              </TestCase>
              <TestCase itShould='demo4'>
                <BiColorAreaChart></BiColorAreaChart>
              </TestCase>
              <TestCase itShould='demo5'>
                <CaloriesBurnt></CaloriesBurnt>
              </TestCase>
              <TestCase itShould='demo6-在图表上左右滑动观察图形变化'>
                <ChartWithAdjustingPointer></ChartWithAdjustingPointer>
              </TestCase>
              <TestCase itShould='demo7-在图表上左右滑动观察图形变化'>
                <ChartWithPointer></ChartWithPointer>
              </TestCase>
              <TestCase itShould='demo8'>
                <DataSetSteppedChart></DataSetSteppedChart>
              </TestCase>
              <TestCase itShould='demo9-点击图表上的点会改变颜色，放开后颜色恢复'>
                <FocusedIndex></FocusedIndex>
              </TestCase>
              <TestCase itShould='demo10'>
                <GradientLineAndLabel></GradientLineAndLabel>
              </TestCase>
              <TestCase itShould='demo11'>
                <HighlightedRange></HighlightedRange>
              </TestCase>
              <TestCase itShould='demo12'>
                <LineChartEndReached></LineChartEndReached>
              </TestCase>
              <TestCase itShould='demo13'>
                <LineChartTwo></LineChartTwo>
              </TestCase>
              <TestCase itShould='demo14'>
                <PopulationChart></PopulationChart>
              </TestCase>
              <TestCase itShould='demo15'>
                <ScrollingChartWithPointer></ScrollingChartWithPointer>
              </TestCase>
              <TestCase itShould='demo16'>
                <SecondaryLineChart></SecondaryLineChart>
              </TestCase>
              <TestCase itShould='demo17'>
                <Segmented></Segmented>
              </TestCase>
              <TestCase itShould='demo18'>
                <SegmentedDataSet></SegmentedDataSet>
              </TestCase>
              <TestCase itShould='demo19'>
                <SimpleBlueLine></SimpleBlueLine>
              </TestCase>
              <TestCase itShould='demo20'>
                <SimpleBlueLineWithGivenNumberOfVerticalLines></SimpleBlueLineWithGivenNumberOfVerticalLines>
              </TestCase>
              <TestCase itShould='demo21-需等待3-5s查看效果'>
                <AutoScrollLine></AutoScrollLine>
              </TestCase>
            </>
          }
        </ScrollView>
      </Tester>
    </>
  )
}