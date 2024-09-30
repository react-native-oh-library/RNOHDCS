import { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import BothSideFocusPie from './BothSideFocusPie';
import InwardFocusPie from './InwardFocusPie';
import PieChartFocusOnPress from './PieChartFocusOnPress';
import PieSingleData from './PieSingleData';
import SimplePie from './SimplePie';
import GradientCenterColorPie from './GradientCenterColorPie';
import SplitPie from './SplitPie';
import ThreeDPie from './ThreeDPie';

export default function () {

  return (
    <>
      <Tester>
        <ScrollView>
          <TestCase itShould='demo1-点击饼图子项观察图形变化'>
            <BothSideFocusPie></BothSideFocusPie>
          </TestCase>
          <TestCase itShould='demo2-点击饼图子项观察图形变化'>
            <InwardFocusPie></InwardFocusPie>
          </TestCase>
          <TestCase itShould='demo3-点击饼图子项观察图形变化'>
            <PieChartFocusOnPress></PieChartFocusOnPress>
          </TestCase>
          <TestCase itShould='demo4'>
            <PieSingleData></PieSingleData>
          </TestCase>
          <TestCase itShould='demo5'>
            <SimplePie></SimplePie>
          </TestCase>
          <TestCase itShould='demo6'>
            <GradientCenterColorPie></GradientCenterColorPie>
          </TestCase>
          <TestCase itShould='demo7'>
            <SplitPie></SplitPie>
          </TestCase>
          <TestCase itShould='demo8'>
            <ThreeDPie></ThreeDPie>
          </TestCase>
        </ScrollView>
      </Tester>
    </>
  )
}