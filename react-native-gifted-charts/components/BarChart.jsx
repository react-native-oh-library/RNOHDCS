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

  const barChartProps = [
    { width: 100 }, { with: 400 },
    { height: 100 }, { height: 200 },
    { focusBarOnPress: true, focusedBarIndex: 1, focusedBarConfig: { color: 'red', width: 100, opacity: 1, borderRadius: 10 } },
    { focusBarOnPress: true, focusedBarIndex: 0, focusedBarConfig: { color: 'blue', width: 80, opacity: 1, borderRadius: 20 } },
    { maxValue: 70 }, { maxValue: 200 },
    { yAxisOffset: 5 }, { yAxisOffset: 10 },
    { mostNegativeValue: 10 }, { mostNegativeValue: 20 },
    { noOfSections: 5 }, { noOfSections: 10 },
    { noOfSectionsBelowXAxis: 2 }, { noOfSectionsBelowXAxis: 5 },
    { stepValue: 10 }, { stepValue: 15 },
    { stepHeight: 10 }, { stepHeight: 15 },
    { negativeStepValue: 5, negativeStepHeight: 30 }, { negativeStepValue: 15, negativeStepHeight: 20 },
    { spacing: 5, }, { spacing: 35 },
    { backgroundColor: 'red', }, { backgroundColor: 'blue' },
    { sectionColors: 'red', }, { sectionColors: 'blue' },
    { scrollToIndex: 1 }, { scrollToIndex: 6 },
    { disableScroll: true }, { disableScroll: false },
    { showScrollIndicator: true, indicatorColor: 'white' }, { showScrollIndicator: false },
    { showScrollIndicator: true, indicatorColor: 'black' },
    { showScrollIndicator: true, indicatorColor: 'default' },
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
      lineConfig: { isAnimated: true, delay: 5000 },
      lineConfig2: { isAnimated: true, delay: 5000 },
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
    { autoShiftLabels: true, }, { autoShiftLabels: false, },
    { scrollToEnd: true, }, { scrollToEnd: false, },
    { scrollAnimation: true, scrollToEnd: true, scrollEventThrottle: 5000 }, { scrollAnimation: false, },
    { initialSpacing: 10, }, { initialSpacing: 30, },
    { adjustToWidth: true, parentWidth: 300 }, { adjustToWidth: true, parentWidth: 200 },
    { adjustToWidth: false, parentWidth: 300 },
    { barWidth: 20 }, { barWidth: 30 },
    { barStyle: { borderRadius: 10 } }, { barStyle: { borderRadius: 30 } },
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
    { barBorderWidth: 5 }, { barBorderWidth: 10 },
    { barBorderWidth: 5, barBorderColor: 'red' }, { barBorderWidth: 5, barBorderColor: 'blue' },
    { barBorderWidth: 5, barBorderRadius: 10 }, { barBorderWidth: 5, barBorderRadius: 20 },
    { barBorderWidth: 5, barBorderTopLeftRadius: 10 }, { barBorderWidth: 5, barBorderTopLeftRadius: 20 },
    { barBorderWidth: 5, barBorderTopRightRadius: 10 }, { barBorderWidth: 5, barBorderTopRightRadius: 20 },
    { barBorderWidth: 5, barBorderBottomLeftRadius: 10 }, { barBorderWidth: 5, barBorderBottomLeftRadius: 20 },
    { barBorderWidth: 5, barBorderBottomRightRadius: 10 }, { barBorderWidth: 5, barBorderBottomRightRadius: 20 },
    { barMarginBottom: 5 }, { barMarginBottom: 10 },
    { minHeight: 100 }, { minHeight: 200 },
    { isAnimated: false, data: [{ value: 50 }] },
    { isAnimated: true, animationDuration: 500, data: [{ value: 50 }, { value: 60 }] },
    { isAnimated: true, animationDuration: 1000, animationEasing: Easing.linear, data: [{ value: 50 }, { value: 60 }, { value: 70 }] },
    { isAnimated: true, animationDuration: 1500, animationEasing: Easing.inOut, data: [{ value: 50 }, { value: 60 }, { value: 70 }, { value: 80 }] },
    { cappedBars: true }, { cappedBars: false, },
    { cappedBars: true, capThickness: 10 }, { cappedBars: true, capThickness: 20 },
    { cappedBars: true, capColor: 'red' }, { cappedBars: true, capColor: 'blue' },
    { cappedBars: true, capRadius: 10 }, { cappedBars: true, capRadius: 20 },
    { horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { rtl: true, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftX: 10, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftX: 20, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftY: 20, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftY: 10, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { rotateYAxisTexts: 5, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { rotateYAxisTexts: 20, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { yAxisAtTop: true, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { yAxisAtTop: false, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { intactTopLabel: true, horizontal: true, data: [{ value: 50 }, { value: 60 }], showValuesAsTopLabel: true },
    { intactTopLabel: false, horizontal: true, data: [{ value: 50 }, { value: 60 }], showValuesAsTopLabel: true },
  ]
  const stackDatas = [
    {
      stacks:
        [
          {
            value: 10, color: 'red', showGradient: true, gradientColor: 'pink', showXAxisIndex: true,
          },
          {
            value: 20, color: 'blue', showGradient: true, gradientColor: 'green'
          },
        ],
      label: 'Jan',
      labelTextStyle: { color: 'green' },
      barWidth: 40,
      spacing: 30,
      borderRadius: 10,
    },
    {
      stacks:
        [
          {
            value: 8, color: 'red', showXAxisIndex: true,
          },
          {
            value: 17, color: 'blue', marginBottom: 1
          },
        ],
      label: 'Feb',
      labelTextStyle: { color: 'blue' },
      barWidth: 60,
      spacing: 30,
      borderRadius: 15,
    },
  ]
  const stackBarChartProps = [
    {
      stackData: stackDatas,
    },
    {
      barBorderRadius: 10, stackData: stackDatas,
    },
    {
      barBorderRadius: 20, stackData: stackDatas,
    },
    {
      barBorderTopLeftRadius: 10, stackData: stackDatas,
    },
    {
      barBorderTopLeftRadius: 20, stackData: stackDatas,
    },
    {
      barBorderTopRightRadius: 10, stackData: stackDatas,
    },
    {
      barBorderTopRightRadius: 20, stackData: stackDatas,
    },
    {
      barBorderBottomLeftRadius: 10, stackData: stackDatas,
    },
    {
      barBorderBottomLeftRadius: 20, stackData: stackDatas,
    },
    {
      barBorderBottomRightRadius: 10, stackData: stackDatas,
    },
    {
      barBorderBottomRightRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderTopLeftRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderTopLeftRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderTopRightRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderTopRightRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderBottomLeftRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderBottomLeftRadius: 20, stackData: stackDatas,
    },
    {
      stackBorderBottomRightRadius: 10, stackData: stackDatas,
    },
    {
      stackBorderBottomRightRadius: 20, stackData: stackDatas,
    },
    {
      autoShiftLabelsForNegativeStacks: true, stackData: stackDatas,
    },
    {
      autoShiftLabelsForNegativeStacks: false, stackData: stackDatas,
    },
  ]

  const barChartAxesPro = [
    ...axesProps,
    { labelWidth: 20 }, { labelWidth: 30 },
    { labelsDistanceFromXaxis: 10 }, { labelsDistanceFromXaxis: 20 },
  ]

  const pointerConfigProps = [
    ...commonPointerProps,
    { pointerConfig: { pointerEvents: 'box-none' } },
    { pointerConfig: { pointerEvents: 'none' } },
    { pointerConfig: { pointerEvents: 'box-only' } },
    { pointerConfig: { pointerEvents: 'auto' } },
    { pointerConfig: { barTouchable: true } },
    { pointerConfig: { barTouchable: false } }
  ]
  const [barChartProp, setBarChartProp] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const changeProps = (props) => {
    setIsVisible(false);
    let t = setTimeout(() => {
      clearTimeout(t);
      setBarChartProp(props)
      setIsVisible(true);
    }, 300)
  }

  return (
    <Tester>
      <TestCase itShould="base">
        <View style={{ minHeight: 250 }}>
          {isVisible ? <BarChart data={data} {...barChartProp}
            scrollRef={scrollRef}
            onPress={() => {
              setPressProText('触发onPress方法');
            }}
            onLongPress={() => {
              setPressProText('触发onLongPress方法');
            }}
            onPressOut={() => {
              setPressProText('触发onPressOut方法');
            }}
            onScroll={() => {
              setPressProText('触发onScroll方法');
            }}
            onMomentumScrollEnd={() => {
              setPressProText('触发onMomentumScrollEndl方法');
            }}
            onEndReached={() => {
              setPressProText('触发onEndReached方法');
            }}
            onStartReached={() => {
              setPressProText('触发onStartReached方法');
            }}
          ></BarChart> : null}
        </View>
      </TestCase>
      <ScrollView style={{ marginBottom: 330 }}>
        {barDataItemProps.map((item, index) => {
          return (
            <TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              {
                item.data[0].disablePress ? <Text>请点击条形图子项，为true点击无效果</Text> : null
              }
              <Button title='点击按钮并观察图形变化' onPress={() => {
                changeProps(item);
              }}></Button>
            </TestCase>
          )
        })}
        <TestCase itShould="data.onPress" tags={['C_API']}>
          <Text>请点击条形图子项触发onPress：{onPressText} </Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
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
            })
          }}></Button>
        </TestCase>
        <TestCase itShould="data.onLongPress" tags={['C_API']}>
          <Text>请点击条形图子项触发onLongPress：{onLongPressText} </Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              data: [
                {
                  value: 50, label: 50, onLongPress: () => {
                    setOnLongPressText('onLongPress被触发，value：50');
                  }
                },
                {
                  value: 60, label: 60, onLongPress: () => {
                    setOnLongPressText('onLongPress被触发，value：60');
                  }
                }]
            })
          }}></Button>
        </TestCase>
        <TestCase itShould="data.onPressOut" tags={['C_API']}>
          <Text>请点击条形图子项触发onPressOut：{onPressOutText} </Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              data: [
                {
                  value: 50, label: 50, onLongPress: () => {
                    setOnPressOutText('onPressOut被触发，value：50');
                  }
                },
                {
                  value: 60, label: 60, onLongPress: () => {
                    setOnPressOutText('onPressOut被触发，value：60');
                  }
                }]
            })
          }}></Button>
        </TestCase>
        <TestCase itShould="data={[
              { value: 50, labelComponent: () => <Text style={{'color':'red'}}>50</Text> },
              { value: 60, labelComponent: () => <Text style={{'color':'blue'}}>60</Text> }]
            }">
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              data: [
                { value: 50, labelComponent: () => <Text style={{ 'color': 'red' }}>50</Text> },
                { value: 60, labelComponent: () => <Text style={{ 'color': 'blue' }}>60</Text> }]
            })
          }}></Button>
        </TestCase>
        <TestCase itShould="data={[
              { topLabelContainerStyle: { backgroundColor: 'pink' } ,value: 50, topLabelComponent: () => <Text style={{ 'color': 'red' }}>50</Text>},
              { topLabelContainerStyle: { backgroundColor: 'yellow' } ,value: 60, topLabelComponent: () => <Text style={{ 'color': 'blue' }}>60</Text> }]
            }" tags={['C_API']}>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              data: [
                { topLabelContainerStyle: { backgroundColor: 'pink' }, value: 50, topLabelComponent: () => <Text style={{ 'color': 'red' }}>50</Text> },
                { topLabelContainerStyle: { backgroundColor: 'yellow' }, value: 60, topLabelComponent: () => <Text style={{ 'color': 'blue' }}>60</Text> }]
            })
          }}></Button>
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
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              data: [
                { value: 50, label: 50, patternId: 'myPattern', barBackgroundPattern: MyPattern },
                { value: 60, label: 60 },
                { value: 70, label: 70, }]
            })
          }}></Button>
        </TestCase>
        {
          barChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              {item.focusBarOnPress ? <Text>请点击条形图子项，观察效果为focusedBarConfig配置信息</Text> : null}
              {item.disableScroll ? <Text>请左右滑动图，为true,不允左右滚动</Text> : null}
              {item.showScrollIndicator ? <Text>请左右滑动图，为true,底部会出现滚动条</Text> : null}
              {item.activeOpacity ? <Text>请点击条形图子项，观察透明度变化</Text> : null}
              {item.disablePress ? <Text>值为true,取消按钮事件，条形图子项不可点击</Text> : null}
              <Button title='点击按钮并观察图形变化' onPress={() => {
                changeProps(item);
              }}></Button>
            </TestCase>)
          })
        }
        <TestCase itShould={'scrollref'} tags={['C_API']}>
          <Button title='点击按钮并观察图形变化' onPress={() => {
          }}></Button>
        </TestCase>
        <TestCase itShould={'请点击条形图触发onPress方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
        </TestCase>
        <TestCase itShould={'请长按条形图触发onLongPress方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
        </TestCase>
        <TestCase itShould={'请长按条形图并释放触发onPressOut方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
        </TestCase>
        <TestCase itShould={'请左右滚动条形图触发onScroll方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
        </TestCase>
        <TestCase itShould={'请左右滚动条形图触发onMomentumScrollEnd方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
        </TestCase>
        <TestCase itShould={'结束滚动触发onEndReached方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
        </TestCase>
        <TestCase itShould={'开始滚动触发onStartReached方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
        </TestCase>
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
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              barBackgroundPattern: MyPattern,
              patternId: 'myPattern'
            })
          }}></Button>
        </TestCase>
        {
          [{ leftShiftForTooltip: 10 }, { leftShiftForTooltip: 30 }, { leftShiftForLastIndexTooltip: 10 }, { leftShiftForLastIndexTooltip: 30 }].map((item, index) => {
            return (<TestCase key={'renderTooltip_' + index} itShould={`{${JSON.stringify(item)},
              data: [{ value: 50 }, { value: 70 }],
              showValuesAsTopLabel: true,
              renderTooltip: () => { return (<Text>renderTooltip</Text>) }
           }`}>
              {item.leftShiftForTooltip ? <Text>请点击条形图第一个子项,观察效果</Text> : null}
              {item.leftShiftForLastIndexTooltip ? <Text>请点击条形图最后一个子项,观察效果</Text> : null}
              <Button title='点击按钮并观察图形变化' onPress={() => {
                changeProps({
                  data: [{ value: 50 }, { value: 70 }],
                  showValuesAsTopLabel: true,
                  ...item,
                  renderTooltip: () => { return (<Text>renderTooltip</Text>) }
                });
              }}></Button>
            </TestCase>)
          })
        }

        {
          stackBarChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              <Button title='点击按钮并观察图形变化' onPress={() => {
                changeProps(item)
              }}></Button>
            </TestCase>)
          })

        }


        {
          barChartAxesPro.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              <Button title='点击按钮并观察变化' onPress={() => {
                changeProps(item)
              }}></Button>
            </TestCase>)
          })
        }
        <TestCase itShould="{
              formatYLabel: (label) => label+'#'
            }">
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              formatYLabel: (label) => label + '#'
            })
          }}></Button>
        </TestCase>

        {
          pointerConfigProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <Text>{item?.pointerConfig.activatePointersOnLongPress ? '长按' : '请点击'}条形图，观察效果</Text>
                <Button title='点击按钮并观察图形变化' onPress={() => {
                  changeProps(item);
                }}></Button>
              </TestCase>
            )
          })
        }
        <TestCase itShould="{
              pointerConfig: {
                pointerComponent: (items) => {
                  return (
                    <Text style={{ width: 30, height: 15, backgroundColor: '#000000', color: '#ffffff', borderRadius: 5 }}>pointerComponent</Text>
                  )
                }
              }
            }">
          <Text>请点击条形图，观察效果</Text>
          <Button title={'点击按钮并观察图形变化'} onPress={() => {
            setBarChartProp({
              pointerConfig: {
                pointerComponent: (items) => {
                  return (
                    <Text style={{ width: 30, height: 15, backgroundColor: '#000000', color: '#ffffff', borderRadius: 5 }}>pointerComponent</Text>
                  )
                }
              }
            });
          }}></Button>
        </TestCase>
        <TestCase itShould="{
              pointerConfig: {
                pointerLabelComponent: (items) => {
                  return (
                    <Text style={{
                      backgroundColor:'black',
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>{items[0].value}</Text>
                  )
                }
              }
            }">
          <Text>请点击条形图，观察效果</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              pointerConfig: {
                shiftPointerLabelX: 10,
                pointerLabelComponent: (items) => {
                  return (
                    <Text style={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>{items[0].value}</Text>
                  )
                }
              }
            });
          }}></Button>
        </TestCase>
        <TestCase itShould="{
              pointerConfig: {
                shiftPointerLabelX: 10,
                shiftPointerLabelY: 20,
                pointerLabelWidth: 40,
                pointerLabelHeight: 30,
                autoAdjustPointerLabelPosition:true,
                pointerLabelComponent: (items) => {
                  return (
                    <Text style={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>{items[0].value}</Text>
                  )
                }
              }
            }">
          <Text>请点击条形图，观察效果</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setBarChartProp({
              pointerConfig: {
                shiftPointerLabelX: 10,
                shiftPointerLabelY: 20,
                pointerLabelWidth: 40,
                pointerLabelHeight: 30,
                autoAdjustPointerLabelPosition: true,
                pointerLabelComponent: (items) => {
                  return (
                    <Text style={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>{items[0].value}</Text>
                  )
                }
              }
            });
          }}></Button>
        </TestCase>

      </ScrollView>
    </Tester >

  )
}