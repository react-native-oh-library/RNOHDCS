import { useState, useRef } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Path, Stop, LinearGradient } from 'react-native-svg';
import { LineChart } from 'react-native-gifted-charts';
import { CurveType } from 'gifted-charts-core'
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import { axesProps, commonPointerProps } from "../commonProps";

export default function () {
  const [pressText, setPressText] = useState('')
  const [reachedText, setReachedText] = useState('');
  const [lineChartProps, setLineChartProps] = useState({});
  const scrollref = useRef();
  const [lineData, setLineData] = useState([{ value: 50, label: '50' }, { value: 80, label: '80' }, { value: 90, label: '90' }, { value: 70, label: '70' }]);
  const LineChartDataProps = [
    { data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }] },
    { data: [{ value: 50, label: '50' }, { value: 80, label: '80' }, { value: 90, label: '90' }, { value: 70, label: '70' }] },
    {
      data: [
        { value: 50, label: '50', labelTextStyle: { color: 'red', fontSize: 14 } },
        { value: 80, label: '80', labelTextStyle: { color: 'blue', fontSize: 16 } },
        { value: 90, label: '90', labelTextStyle: { color: 'blue', fontSize: 18 } },
        { value: 70, label: '70', labelTextStyle: { color: 'blue', fontSize: 20 } }]
    },
    {
      data: [
        { value: 50, yAxisLabelText: '50' },
        { value: 80, yAxisLabelText: '80' },
        { value: 90, yAxisLabelText: '90' },
        { value: 70, yAxisLabelText: '70' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50' },
        { value: 80, dataPointText: '80' },
        { value: 90, dataPointText: '90' },
        { value: 70, dataPointText: '70' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', textShiftX: 5 },
        { value: 80, dataPointText: '80', textShiftX: 10 },
        { value: 90, dataPointText: '90', textShiftX: 15 },
        { value: 70, dataPointText: '70', textShiftX: 20 }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', textShiftY: 5 },
        { value: 80, dataPointText: '80', textShiftY: 10 },
        { value: 90, dataPointText: '90', textShiftY: 15 },
        { value: 70, dataPointText: '70', textShiftY: 20 }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', textColor: 'red', textFontSize: 14 },
        { value: 80, dataPointText: '80', textColor: 'blue', textFontSize: 16 },
        { value: 90, dataPointText: '90', textColor: 'pink', textFontSize: 18 },
        { value: 70, dataPointText: '70', textColor: 'black', textFontSize: 20 }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointHeight: 10, dataPointWidth: 10, dataPointColor: 'red', dataPointShape: 'circular' },
        { value: 80, dataPointText: '80', dataPointHeight: 15, dataPointWidth: 15, dataPointColor: 'blue', dataPointShape: 'circular' },
        { value: 90, dataPointText: '90', dataPointHeight: 20, dataPointWidth: 20, dataPointColor: 'yellow', dataPointShape: 'circular' },
        { value: 70, dataPointText: '70', dataPointHeight: 25, dataPointWidth: 25, dataPointColor: 'black', dataPointShape: 'circular' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointHeight: 10, dataPointWidth: 10, dataPointColor: 'red', dataPointShape: 'rectangular' },
        { value: 80, dataPointText: '80', dataPointHeight: 15, dataPointWidth: 15, dataPointColor: 'blue', dataPointShape: 'rectangular' },
        { value: 90, dataPointText: '90', dataPointHeight: 20, dataPointWidth: 20, dataPointColor: 'yellow', dataPointShape: 'rectangular' },
        { value: 70, dataPointText: '70', dataPointHeight: 25, dataPointWidth: 25, dataPointColor: 'black', dataPointShape: 'rectangular' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointHeight: 10, dataPointWidth: 10, dataPointColor: 'red', dataPointShape: 'rectangular', hideDataPoint: true, },
        { value: 80, dataPointText: '80', dataPointHeight: 15, dataPointWidth: 15, dataPointColor: 'blue', dataPointShape: 'rectangular', hideDataPoint: false },
        { value: 90, dataPointText: '90', dataPointHeight: 20, dataPointWidth: 20, dataPointColor: 'yellow', dataPointShape: 'rectangular', hideDataPoint: true },
        { value: 70, dataPointText: '70', dataPointHeight: 25, dataPointWidth: 25, dataPointColor: 'black', dataPointShape: 'rectangular', hideDataPoint: false }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, },
        { value: 80, dataPointText: '80', showVerticalLine: false },
        { value: 90, dataPointText: '90', showVerticalLine: true },
        { value: 70, dataPointText: '70', showVerticalLine: false }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, verticalLineUptoDataPoint: true, },
        { value: 80, dataPointText: '80', showVerticalLine: true, verticalLineUptoDataPoint: true, },
        { value: 90, dataPointText: '90', showVerticalLine: true, verticalLineUptoDataPoint: true, },
        { value: 70, dataPointText: '70', showVerticalLine: true, verticalLineUptoDataPoint: true, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, verticalLineUptoDataPoint: false, },
        { value: 80, dataPointText: '80', showVerticalLine: true, verticalLineUptoDataPoint: false, },
        { value: 90, dataPointText: '90', showVerticalLine: true, verticalLineUptoDataPoint: false, },
        { value: 70, dataPointText: '70', showVerticalLine: true, verticalLineUptoDataPoint: false, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, verticalLineColor: 'red', },
        { value: 80, dataPointText: '80', showVerticalLine: true, verticalLineColor: 'blue', },
        { value: 90, dataPointText: '90', showVerticalLine: true, verticalLineColor: 'yellow', },
        { value: 70, dataPointText: '70', showVerticalLine: true, verticalLineColor: 'black', }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, verticalLineThickness: 5, },
        { value: 80, dataPointText: '80', showVerticalLine: true, verticalLineThickness: 10, },
        { value: 90, dataPointText: '90', showVerticalLine: true, verticalLineThickness: 15, },
        { value: 70, dataPointText: '70', showVerticalLine: true, verticalLineThickness: 20, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: false, },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: false, },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, stripHeight: 50, stripWidth: 5, stripColor: 'red' },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: true, stripHeight: 65, stripWidth: 8, stripColor: 'blue' },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: true, stripHeight: 80, stripWidth: 10, stripColor: 'yellow' },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, stripHeight: 105, stripWidth: 14, stripColor: 'black' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, stripHeight: 50, stripWidth: 5, stripColor: 'red', stripOpacity: 0.1 },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: true, stripHeight: 65, stripWidth: 8, stripColor: 'blue', stripOpacity: 0.5 },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: true, stripHeight: 80, stripWidth: 10, stripColor: 'yellow', stripOpacity: 0.8 },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, stripHeight: 105, stripWidth: 14, stripColor: 'black' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', pointerShiftX: 10 },
        { value: 80, dataPointText: '80', pointerShiftX: 15 },
        { value: 90, dataPointText: '90', pointerShiftX: 20 },
        { value: 70, dataPointText: '70', pointerShiftX: 25 }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', pointerShiftY: 10 },
        { value: 80, dataPointText: '80', pointerShiftY: 15 },
        { value: 90, dataPointText: '90', pointerShiftY: 20 },
        { value: 70, dataPointText: '70', pointerShiftY: 25 }]
    },
  ]

  const LineChartProps = [
    {
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    { width: 100 }, { width: 200 },
    { height: 100 }, { height: 200 },
    {
      overflowTop: 20,
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: true, },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: true, },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, }]
    },
    {
      overflowTop: 40,
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: true, },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: true, },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, }]
    },
    {
      overflowBottom: -10,
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: true, },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: true, },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, }]
    },
    {
      overflowBottom: -40,
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: true, },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: true, },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, }]
    },
    { maxValue: 90 }, { maxValue: 80 },
    { mostNegativeValue: 0 }, { mostNegativeValue: 10 }, { mostNegativeValue: -10 },
    { noOfSections: 5 }, { noOfSections: 15 },
    { noOfSectionsBelowXAxis: 1 }, { noOfSectionsBelowXAxis: 2 },
    { stepValue: 10 }, { stepValue: 30 },
    { stepHeight: 10 }, { stepHeight: 20 },
    { data: [{ value: -5 }, { value: 10, }, { value: 30 }] },
    { negativeStepValue: -10, data: [{ value: -5 }, { value: 10, }, { value: 30 }] }, { negativeStepValue: -20, data: [{ value: -5, }, { value: 10, }, { value: 30 }] },
    { negativeStepHeight: 10 }, { negativeStepHeight: 20 },
    { spacing: 30 }, { spacing: 60 },
    { adjustToWidth: true }, { adjustToWidth: false },
    { backgroundColor: 'red' }, { backgroundColor: 'blue' },
    { sectionColors: 'green' }, { sectionColors: 'yellow' },
    { scrollToIndex: 1 }, { scrollToIndex: 6 },
    { disableScroll: true }, { disableScroll: false },
    { showScrollIndicator: true, indicatorColor: 'black' },
    { showScrollIndicator: true, indicatorColor: 'white' },
    { showScrollIndicator: true, indicatorColor: 'default' },
    { showScrollIndicator: false },
    { animateOnDataChange: true, onDataChangeAnimationDuration: 1000, data: [{ value: 90 }, { value: 50 }, { value: 40 }] },
    { animateOnDataChange: true, onDataChangeAnimationDuration: 2000, data: [{ value: 80 }, { value: 60 }, { value: 40 }] },
    { animateOnDataChange: true, scrollEventThrottle: 200, onDataChangeAnimationDuration: 2000, data: [{ value: 20 }, { value: 30 }, { value: 40 }] },
    { animateOnDataChange: true, scrollEventThrottle: 500, onDataChangeAnimationDuration: 2000, data: [{ value: 10 }, { value: 20 }, { value: 30 }] },
    { animateOnDataChange: false },
    { scrollToEnd: true, scrollAnimation: true, data: [{ value: 90 }, { value: 50 }, { value: 40 }, { value: 60 }, { value: 70 }, { value: 80 }, { value: 90 }, { value: 100 }, { value: 110 }, { value: 120 }] },
    { scrollToEnd: false, },
    { scrollToEnd: true, scrollAnimation: false, data: [{ value: 20 }, { value: 30 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }, { value: 60 }, { value: 100 }] },
    { initialSpacing: 10 }, { initialSpacing: 20 },
    { endSpacing: 20 }, { endSpacing: 40 },
    { color: 'red' }, { color: 'blue' },
    { thickness: 3 }, { thickness: 5 },
    { strokeDashArray: [1, 5] }, { strokeDashArray: [2, 9] },
    {
      color1: 'red',
      color2: 'blue',
      color3: 'gray',
      color4: 'green',
      color5: 'yellow',
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      thickness1: 4,
      thickness2: 5,
      thickness3: 6,
      thickness4: 7,
      thickness5: 8,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      zIndex1: 8,
      zIndex2: 7,
      zIndex3: 6,
      zIndex4: 5,
      zIndex5: 4,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      strokeDashArray: [1, 5],
      strokeDashArray: [2, 8],
      strokeDashArray: [3, 9],
      strokeDashArray: [5, 15],
      strokeDashArray: [6, 18],
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      lineSegments: [{
        startIndex: 0,
        endIndex: 3,
        color: 'red',
        thickness: 4,
        strokeDashArray: [2, 4]
      }],
      lineSegments2: [{
        startIndex: 0,
        endIndex: 3,
        color: 'blue',
        thickness: 4,
        strokeDashArray: [2, 4]
      }],
      lineSegments3: [{
        startIndex: 0,
        endIndex: 3,
        color: 'gray',
        thickness: 4,
        strokeDashArray: [2, 4]
      }],
      lineSegments4: [{
        startIndex: 0,
        endIndex: 3,
        color: 'green',
        thickness: 4,
        strokeDashArray: [2, 4]
      }],
      lineSegments5: [{
        startIndex: 0,
        endIndex: 3,
        color: 'blue',
        thickness: 4,
        strokeDashArray: [2, 4]
      }],
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    { highlightedRange: { color: 'red', thickness: 10, }, data: [{ value: 10 }, { value: 20 }, { value: 30 }] },
    { highlightedRange: { color: 'blue', thickness: 15, }, data: [{ value: 15 }, { value: 25 }, { value: 35 }] },
    { startIndex: 0, }, { startIndex: 1, }, { startIndex: 2, },
    {
      startIndex1: 1,
      startIndex2: 1,
      startIndex3: 1,
      startIndex4: 1,
      startIndex5: 1,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    { endIndex: 3, }, { endIndex: 2, }, { endIndex: 1, },
    {
      endIndex1: 2,
      endIndex2: 2,
      endIndex3: 2,
      endIndex4: 2,
      endIndex5: 2,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    { lineGradient: true }, { lineGradient: false },
    { lineGradient: true, lineGradientStartColor: 'yellow' }, { lineGradient: true, lineGradientStartColor: 'blue' },
    { lineGradient: true, lineGradientEndColor: 'yellow' }, { lineGradient: true, lineGradientEndColor: 'blue' },
    { textColor: 'red', data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { textColor: 'blue', data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { textFontSize: 14, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { textFontSize: 20, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { textShiftX: 10, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { textShiftX: 20, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { textShiftY: 10, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { textShiftY: 20, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { focusEnabled: true, focusedDataPointRadius: 10, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { focusEnabled: true, focusedDataPointRadius: 20, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { dataPointLabelWidth: 20, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { dataPointLabelWidth: 50, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { dataPointLabelShiftX: 10, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { dataPointLabelShiftX: 20, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { dataPointLabelShiftY: 10, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { dataPointLabelShiftY: 20, data: [{ value: 50, dataPointText: '50' }, { value: 80, dataPointText: '80' }, { value: 90, dataPointText: '90' }, { value: 70, dataPointText: '70' }] },
    { showValuesAsDataPointsText: false, }, { showValuesAsDataPointsText: true },
    { hideDataPoints: true }, { hideDataPoints: false },
    { dataPointsHeight: 20, dataPointsShape: 'rectangular', showValuesAsDataPointsText: true },
    { dataPointsHeight: 30, dataPointsShape: 'rectangular', showValuesAsDataPointsText: true },
    { dataPointsWidth: 20, dataPointsShape: 'rectangular', showValuesAsDataPointsText: true },
    { dataPointsWidth: 30, dataPointsShape: 'rectangular', showValuesAsDataPointsText: true },
    { dataPointsRadius: 10, dataPointsShape: 'circular', showValuesAsDataPointsText: true },
    { dataPointsRadius: 20, dataPointsShape: 'circular', showValuesAsDataPointsText: true },
    { dataPointsColor: 'red', showValuesAsDataPointsText: true },
    { dataPointsColor: 'blue', showValuesAsDataPointsText: true },
    { dataPointsShape: 'rectangular' }, { dataPointsShape: 'circular' },
    {
      hideDataPoints1: true,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    },
    {
      dataPointsWidth1: 25,
      dataPointsHeight1: 25,
      dataPointsRadius1: 10,
      dataPointsColor1: 'red',
      dataPointsShape1: 'circular',
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    },
    {
      hideDataPoints2: true,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      dataPointsWidth2: 25,
      dataPointsHeight2: 25,
      dataPointsRadius2: 10,
      dataPointsColor2: 'blue',
      dataPointsShape1: 'circular',
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      hideDataPoints3: true,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    },
    {
      dataPointsWidth3: 25,
      dataPointsHeight3: 25,
      dataPointsRadius3: 10,
      dataPointsColor3: 'yellow',
      dataPointsShape3: 'circular',
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    },
    {
      hideDataPoints4: true,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
    },
    {
      dataPointsWidth4: 25,
      dataPointsHeight4: 25,
      dataPointsRadius4: 10,
      dataPointsColor4: 'yellow',
      dataPointsShape4: 'circular',
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
    },
    {
      hideDataPoints5: true,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      dataPointsWidth5: 25,
      dataPointsHeight5: 25,
      dataPointsRadius5: 10,
      dataPointsColor5: 'yellow',
      dataPointsShape5: 'circular',
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
  ]
  const lineChartAxesProps = [
    ...axesProps
  ]
  const arrowProps = [
    { showArrows: true }, { showArrows: false },
    { showArrows: true, arrowConfig: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true } },
    {
      showArrows: true,
      arrowConfig1: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      arrowConfig2: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'green', showArrowBase: true },
      arrowConfig3: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'gray', showArrowBase: true },
      arrowConfig4: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'yellow', showArrowBase: true },
      arrowConfig5: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: true },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      showArrows: true,
      arrowConfig1: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: false },
      arrowConfig2: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'green', showArrowBase: false },
      arrowConfig3: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'gray', showArrowBase: false },
      arrowConfig4: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'yellow', showArrowBase: false },
      arrowConfig5: { length: 10, width: 20, strokeWidth: 2, strokeColor: 'red', fillColor: 'blue', showArrowBase: false },
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 110 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
  ]

  const focusprops = [
    { focusedDataPointIndex: 1, }, { focusedDataPointIndex: 2, },
    { focusedDataPointIndex: 1, focusedDataPointShape: 'circular' },
    { focusedDataPointIndex: 2, focusedDataPointShape: 'rectangular' },
    { focusedDataPointIndex: 1, focusedDataPointWidth: 20, focusedDataPointHeight: 20, focusedDataPointColor: 'red', focusedDataPointRadius: 20, },
    { focusedDataPointIndex: 2, focusedDataPointShape: 'rectangular', focusedDataPointWidth: 20, focusedDataPointHeight: 20, focusedDataPointColor: 'blue', },
    { showDataPointOnFocus: true, areaChart: true, focusEnabled: true, },
    { showDataPointOnFocus: false, areaChart: true, focusEnabled: false, },
    { showStripOnFocus: true, showDataPointOnFocus: true, areaChart: true, focusEnabled: true, },
    { showStripOnFocus: false, showDataPointOnFocus: true, areaChart: true, focusEnabled: true, },
    { showTextOnFocus: true, showDataPointOnFocus: true, areaChart: true, focusEnabled: true, showValuesAsDataPointsText: true },
    { showTextOnFocus: false, showDataPointOnFocus: true, areaChart: true, focusEnabled: true, showValuesAsDataPointsText: true },
    { showDataPointLabelOnFocus: true, areaChart: true, focusEnabled: true },
    { showDataPointLabelOnFocus: false, areaChart: true, focusEnabled: true },
    { stripHeight: 20, stripWidth: 30, stripColor: 'red', stripOpacity: 0.9, showStripOnFocus: true, areaChart: true, focusEnabled: true },
    { stripHeight: 60, stripWidth: 40, stripColor: 'green', stripOpacity: 0.5, showStripOnFocus: true, areaChart: true, focusEnabled: true },
  ]

  const areaChartprops = [
    {
      areaChart: true,
      startFillColor: 'red',
      endFillColor: 'blue',
      startOpacity: 1,
      endOpacity: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    },
    {
      areaChart1: true,
      startFillColor1: 'green',
      endFillColor1: 'blue',
      startOpacity1: 1,
      endOpacity1: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      areaChart2: true,
      startFillColor2: 'gray',
      endFillColor2: 'blue',
      startOpacity2: 1,
      endOpacity1: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      areaChart3: true,
      startFillColor3: 'gray',
      endFillColor3: 'blue',
      startOpacity3: 1,
      endOpacity3: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    },
    {
      areaChart4: true,
      startFillColor4: 'gray',
      endFillColor4: 'blue',
      startOpacity4: 1,
      endOpacity4: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
    },
    {
      areaChart5: true,
      startFillColor5: 'gray',
      endFillColor5: 'blue',
      startOpacity5: 1,
      endOpacity5: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    { areaChart: true, gradientDirection: 'vertical', }, { areaChart: true, gradientDirection: 'horizontal', },
  ]

  const pointerConfigProps = [
    ...commonPointerProps,
    { pointerConfig: { pointer1Color: 'green' }, }, { pointerConfig: { pointer1Color: 'gray' }, },
    {
      pointerConfig: {
        pointer2Color: 'green',
        pointer2Color: 'yellow',
        pointer3Color: 'blue',
        pointer4Color: 'gray',
        pointer5Color: 'black'
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      pointerConfig: {
        hidePointer1: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      pointerConfig: {
        hidePointer2: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      pointerConfig: {
        hidePointer3: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    },
    {
      pointerConfig: {
        hidePointer4: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
    },
    {
      pointerConfig: {
        hidePointer5: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
  ]

  const [isVisible, setIsVisible] = useState(true);
  const changeProps = (props) => {
    setIsVisible(false);
    let t = setTimeout(() => {
      clearTimeout(t);
      setLineChartProps(props)
      setIsVisible(true);
    }, 300)
  }

  return (
    <Tester>
      <TestCase itShould="base" tags={['C_API']}>
        <View style={{ minHeight: 250 }}>
          {isVisible ? <LineChart isAnimated={true} scrollRef={scrollref} data={lineData} {...lineChartProps}
            onPress={() => {
              setPressText('onPress被触发')
            }}
            onScroll={() => {
              setPressText('onScroll被触发')
            }}
            onMomentumScrollEnd={() => {
              setPressText('onMomentumScrollEnd被触发')
            }}>
          </LineChart> : null}
        </View>
      </TestCase>
      <ScrollView style={{ marginBottom: 330 }}>
        {
          LineChartDataProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <Button title='点击按钮并观察图形变化' onPress={() => {
                  changeProps(item)
                }}></Button>
              </TestCase>
            )
          })
        }
        <TestCase itShould="data: [{
                value: 50, label: '50', onPress: () => {
                  setPressText('onPress被触发 text:50')
                }
              }, {
                value: 80, label: '80', onPress: () => {
                  setPressText('onPress被触发 text:80')
                }
              }, {
                value: 90, label: '90', onPress: () => {
                  setPressText('onPress被触发 text:90')
                }
              }]">
          <Text>请点击这项图子项出发onPress方法，{pressText}</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              data: [{
                value: 50, label: '50', onPress: () => {
                  setPressText('onPress被触发 text:50')
                }
              }, {
                value: 80, label: '80', onPress: () => {
                  setPressText('onPress被触发 text:80')
                }
              }, {
                value: 90, label: '90', onPress: () => {
                  setPressText('onPress被触发 text:90')
                }
              }]
            })
          }}></Button>
        </TestCase>
        <TestCase itShould="data: [{
                value: 50, label: '50', labelComponent: () => <Text style={{ color: 'red' }}>50</Text>
              }, {
                value: 80, label: '80', labelComponent: () => <Text style={{ color: 'green' }}>80</Text>
              }, {
                value: 90, label: '90', labelComponent: () => <Text style={{ color: 'yellow' }}>90</Text>
              }]">
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              data: [{
                value: 50, label: '50', labelComponent: () => <Text style={{ color: 'red' }}>50</Text>
              }, {
                value: 80, label: '80', labelComponent: () => <Text style={{ color: 'green' }}>80</Text>
              }, {
                value: 90, label: '90', labelComponent: () => <Text style={{ color: 'yellow' }}>90</Text>
              }]
            })
          }}></Button>
        </TestCase>
        <TestCase itShould="{
              data: [
                { value: 50, dataPointText: '50', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, dataPointLabelWidth: 10,  },
                { value: 80, dataPointText: '80', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, dataPointLabelWidth: 40,  },
                { value: 90, dataPointText: '90', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, dataPointLabelWidth: 25,  },
                { value: 70, dataPointText: '70', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, dataPointLabelWidth: 30,  }]
            }">
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              data: [
                { value: 50, dataPointText: '50', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, dataPointLabelWidth: 10, },
                { value: 80, dataPointText: '80', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, dataPointLabelWidth: 40, },
                { value: 90, dataPointText: '90', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, dataPointLabelWidth: 25, },
                { value: 70, dataPointText: '70', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, dataPointLabelWidth: 30, }]
            },)
          }}></Button>
        </TestCase>
        <TestCase itShould="{
              data: [
                { value: 50, dataPointText: '50', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, dataPointLabelWidth: 10, dataPointLabelShiftX: 10, dataPointLabelShiftY: 10 },
                { value: 80, dataPointText: '80', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, dataPointLabelWidth: 40, dataPointLabelShiftX: 15, dataPointLabelShiftY: 15 },
                { value: 90, dataPointText: '90', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, dataPointLabelWidth: 25, dataPointLabelShiftX: 20, dataPointLabelShiftY: 20 },
                { value: 70, dataPointText: '70', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, dataPointLabelWidth: 30, dataPointLabelShiftX: 25, dataPointLabelShiftY: 25 }]
            }">
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              data: [
                { value: 50, dataPointText: '50', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, dataPointLabelWidth: 10, dataPointLabelShiftX: 10, dataPointLabelShiftY: 10 },
                { value: 80, dataPointText: '80', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, dataPointLabelWidth: 40, dataPointLabelShiftX: 15, dataPointLabelShiftY: 15 },
                { value: 90, dataPointText: '90', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, dataPointLabelWidth: 25, dataPointLabelShiftX: 20, dataPointLabelShiftY: 20 },
                { value: 70, dataPointText: '70', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, dataPointLabelWidth: 30, dataPointLabelShiftX: 25, dataPointLabelShiftY: 25 }]
            },)
          }}></Button>
        </TestCase>
        <TestCase itShould="{
              focusEnabled: true,
              data: [
                { value: 50, dataPointText: '50', focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>,},
                { value: 80, dataPointText: '80', focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>,  },
                { value: 90, dataPointText: '90', focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>,},
                { value: 70, dataPointText: '70', focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, }]
            }">
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              focusEnabled: true,
              data: [
                { value: 50, focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, },
                { value: 80, focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, },
                { value: 90, focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, },
                { value: 70, focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, }]
            },)
          }}></Button>
        </TestCase>

        <TestCase itShould="左右滚动图表，滚动结束触发onEndReached事件，开始触发onStartReached事件{
              onEndReached: () => {
                setReachedText('onEndReached被触发')
              },
              onStartReached: () => {
                setReachedText('onStartReached被触发')
              }
            }">
          <Text>{reachedText}</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              onEndReached: () => {
                setReachedText('onEndReached被触发')
              },
              onStartReached: () => {
                setReachedText('onStartReached被触发')
              }
            })
          }}></Button>
        </TestCase>
        {
          LineChartProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                {item.disableScroll ? <Text>disableScroll:true时禁止左右图表滑动</Text> : null}
                {item.focusEnabled ? <Text>请点击图形上显示的数据点，观察效果</Text> : null}
                <Button title='点击按钮并观察图形变化' onPress={() => {
                  changeProps(item);
                }}></Button>
              </TestCase>
            )
          })
        }
        <TestCase itShould=' scrollref?.current?.scrollTo(20)'>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            scrollref?.current?.scrollTo(20)
          }} >
          </Button>
        </TestCase>
        <TestCase itShould="{focusEnabled: true,delayBeforeUnFocus: 500,
              onFocus: (item, index) => { 
                setPressText('onFocus被触发');
               },
            }">
          <Text>请点击图形上显示的数据点触发onFocus，{pressText}</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              focusEnabled: true,
              delayBeforeUnFocus: 500,
              onFocus: (item, index) => {
                setPressText('onFocus被触发');
              },
            })
          }} >
          </Button>
        </TestCase>
        <TestCase itShould="{focusEnabled: true,delayBeforeUnFocus: 1000,
              onFocus: (item, index) => { 
                setPressText('onFocus被触发');
               },
            }">
          <Text>请点击图形上显示的数据点触发onFocus，{pressText}</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              focusEnabled: true,
              delayBeforeUnFocus: 1000,
              onFocus: (item, index) => {
                setPressText('onFocus被触发');
              },
            })
          }} >
          </Button>
        </TestCase>
        {
          <TestCase itShould="{
            focusEnabled: true,
            focusedCustomDataPoint: (item, index) => { return (<Text style={{ fontSize: 14, color: 'red', width: 20, height: 50 }}>{item.value}</Text>) },
          }">
            <Text>请点击图形上显示的数据点，观察效果</Text>
            <Button title='点击按钮并观察图形变化' onPress={() => {
              setLineChartProps({
                focusEnabled: true,
                focusedCustomDataPoint: (item, index) => { return (<Text style={{ fontSize: 14, color: 'red', width: 20, height: 50 }}>{item.value}</Text>) },
              })
            }} >
            </Button>
          </TestCase>
        }
        {
          <TestCase itShould="{
            customDataPoint: (item, index) => { return (<Text>{item.value}</Text>) },
            data: [
              { value: 50, dataPointText: '50' },
              { value: 80, dataPointText: '80' },
              { value: 90, dataPointText: '90' },
              { value: 70, dataPointText: '70' }]
          }">
            <Button title='点击按钮并观察图形变化' onPress={() => {
              setLineChartProps({
                customDataPoint: (item, index) => { return (<Text>{item.value}</Text>) },
                data: [
                  { value: 50, dataPointText: '50' },
                  { value: 80, dataPointText: '80' },
                  { value: 90, dataPointText: '90' },
                  { value: 70, dataPointText: '70' }]
              })
            }} >
            </Button>
          </TestCase>
        }
        <TestCase itShould="{
              lineGradient: true,
              lineGradientId: 'ggrd',
              lineGradientComponent: () =>
                <LinearGradient
                  id='ggrd'
                  x1='0'
                  y1='0'
                  x2={'0'}
                  y2={'1'}
                >
                  <Stop
                    offset='0'
                    stopColor={'blue'}
                  />
                  <Stop
                    offset='1'
                    stopColor={'yellow'}
                  />
                </LinearGradient>
            }" tags={['C_API']}>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              lineGradient: true,
              lineGradientId: 'ggrd',
              lineGradientComponent: () =>
                <LinearGradient
                  id='ggrd'
                  x1='0'
                  y1='0'
                  x2={'0'}
                  y2={'1'}
                >
                  <Stop
                    offset='0'
                    stopColor={'blue'}
                  />
                  <Stop
                    offset='1'
                    stopColor={'yellow'}
                  />
                </LinearGradient>
            });
          }}></Button>
        </TestCase>
        <TestCase itShould='请点击图形触发onPress'>
          <Text>{pressText}</Text>
        </TestCase>
        <TestCase itShould='左右滚动图形触发onScroll'>
          <Text>{pressText}</Text>
        </TestCase>
        <TestCase itShould='左右滚顶图形触发onMomentumScrollEnd'>
          <Text>{pressText}</Text>
        </TestCase>
        {
          lineChartAxesProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <Button title='点击按钮并观察图形变化' onPress={() => {
                  changeProps(item);
                }}></Button>
              </TestCase>
            )
          })
        }
        {
          arrowProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <Button title='点击按钮并观察图形变化' onPress={() => {
                  changeProps(item);
                }}></Button>
              </TestCase>
            )
          })
        }
        {
          focusprops.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                {item.focusEnabled ? <Text>请点击图形上显示的数据点，观察效果</Text> : null}
                <Button title='点击按钮并观察图形变化' onPress={() => {
                  changeProps(item);
                }}></Button>
              </TestCase>
            )
          })
        }
        <TestCase itShould="{
              unFocusOnPressOut: true,
              onFocus: () => {
                setPressText('onFocus被触发');
              }
            }">
          <Text>请点击图形上显示的数据点触发onFocus，{pressText}</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            changeProps({
              unFocusOnPressOut: true,
              onFocus: () => {
                setPressText('onFocus被触发');
              }
            });
          }}></Button>
        </TestCase>
        {
          areaChartprops.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                {item.focusEnabled ? <Text>请点击图形上显示的数据点，观察效果</Text> : null}
                <Button title='点击按钮并观察图形变化' onPress={() => {
                  changeProps(item);
                }}></Button>
              </TestCase>
            )
          })
        }
        <TestCase itShould="{
              areaChart: true,
              areaGradientId: 'ggrd',
              areaGradientComponent: () => <LinearGradient
                id='ggrd' 
                x1='0'
                y1='0'
                x2={'0'}
                y2={'1'}>
                <Stop
                  offset='0'
                  stopColor={'blue'}
                />
                <Stop
                  offset='1'
                  stopColor={'yellow'}
                />
              </LinearGradient>
            }">
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
              areaChart: true,
              areaGradientId: 'ggrd',
              areaGradientComponent: () => <LinearGradient
                id="ggrd"
                x1="0"
                y1="0"
                x2={'0'}
                y2={'1'}>
                <Stop
                  offset="0"
                  stopColor={'blue'}
                />
                <Stop
                  offset="1"
                  stopColor={'yellow'}
                />
              </LinearGradient>
            });
          }}></Button>
        </TestCase>
        {
          pointerConfigProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <Text>{item?.pointerConfig.activatePointersOnLongPress ? '长按' : '请点击'}图形上显示的数据点，观察效果</Text>
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
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <Button title={'点击按钮并观察图形变化'} onPress={() => {
            setLineChartProps({
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
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
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
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <Button title='点击按钮并观察图形变化' onPress={() => {
            setLineChartProps({
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
    </Tester>
  )
}