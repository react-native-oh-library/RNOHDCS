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

  const LineChartProps = [
    {
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    // dataSet used instead of using data2, data3, data4 etc)
    { width: 100 }, { width: 200 },
    { height: 100 }, { height: 200 },
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
    { spacing: 30 }, { spacing: 60 },
    { adjustToWidth: true }, { adjustToWidth: false },
    { backgroundColor: 'red' }, { backgroundColor: 'blue' },
    { sectionColors: ['red', 'yellow', 'pink', 'blue'] }, { sectionColors: ['blue', 'pink'] },
    { disableScroll: true }, { disableScroll: false },
    { showScrollIndicator: true, indicatorColor: 'black', data: [{ value: 5 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 5 }] },
    { showScrollIndicator: true, indicatorColor: 'white', data: [{ value: 5 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 5 }] },
    { showScrollIndicator: true, indicatorColor: 'default', data: [{ value: 5 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 5 }] },
    { showScrollIndicator: false, indicatorColor: 'white', data: [{ value: 5 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: 5 }] },
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
      zIndex1: 3,
      zIndex2: 5,
      zIndex3: 4,
      zIndex4: 7,
      zIndex5: 6,
      color1: 'red',
      color2: 'blue',
      color3: 'gray',
      color4: 'green',
      color5: 'yellow',
      thickness1: 6,
      thickness2: 6,
      thickness3: 6,
      thickness4: 6,
      thickness5: 6,
      data: [{ value: 70 }, { value: 5 }, { value: 95 }, { value: 100 }],
      data2: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 20 }, { value: 30 }, { value: 40 }, { value: 10 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      zIndex1: 9,
      zIndex2: 5,
      zIndex3: 4,
      zIndex4: 7,
      zIndex5: 6,
      color1: 'red',
      color2: 'blue',
      color3: 'gray',
      color4: 'green',
      color5: 'yellow',
      thickness1: 6,
      thickness2: 6,
      thickness3: 6,
      thickness4: 6,
      thickness5: 6,
      data: [{ value: 70 }, { value: 5 }, { value: 95 }, { value: 100 }],
      data2: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 20 }, { value: 30 }, { value: 40 }, { value: 10 }],
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
    { lineGradient: true, lineGradientStartColor: 'red' }, { lineGradient: true, lineGradientStartColor: 'blue' },
    { lineGradient: true, lineGradientEndColor: 'yellow' }, { lineGradient: true, lineGradientEndColor: 'green' },
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
  return (
    <Tester>
      <ScrollView>
        {
          LineChartProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                {item.disableScroll ? <Text>disableScroll:true时禁止左右图表滑动</Text> : null}
                {item.focusEnabled ? <Text>请点击图形上显示的数据点，观察效果</Text> : null}
                <LineChart scrollRef={scrollref} data={lineData} {...item}></LineChart>
              </TestCase>
            )
          })
        }

        <TestCase itShould='{overflowTop:0}'>
          <LineChart scrollRef={scrollref} data={lineData}
            showVerticalLines
            verticalLinesColor={'white'}
            overflowTop={0}
            noOfSections={5}
            pointerConfig={{
              initialPointerIndex: 0,
              stripBehindBars: false,
              pointerStripHeight: 207,
              pointerLabelComponent: items => {
                return (
                  <View
                    style={{
                      width: 36,
                      padding: 6,
                      borderWidth: 1,
                      borderRadius: 8,
                      backgroundColor: '#eee',
                    }}>
                    <Text>{items[0].value}</Text>
                  </View>
                );
              },
            }}></LineChart>
        </TestCase>
        <TestCase itShould='{overflowTop:1}'>
          <LineChart scrollRef={scrollref} data={lineData}
            showVerticalLines
            verticalLinesColor={'white'}
            overflowTop={1}
            noOfSections={5}
            pointerConfig={{
              initialPointerIndex: 0,
              stripBehindBars: false,
              pointerStripHeight: 207,
              pointerLabelComponent: items => {
                return (
                  <View
                    style={{
                      width: 36,
                      padding: 6,
                      borderWidth: 1,
                      borderRadius: 8,
                      backgroundColor: '#eee',
                    }}>
                    <Text>{items[0].value}</Text>
                  </View>
                );
              },
            }}></LineChart>
        </TestCase>

        <TestCase itShould="{focusEnabled: true,delayBeforeUnFocus: 500,
              onFocus: (item, index) => { 
                setPressText('onFocus被触发');
               },
            }">
          <Text>请点击图形上显示的数据点触发onFocus，{pressText}</Text>
          <LineChart scrollRef={scrollref} data={lineData} {...{
            focusEnabled: true,
            delayBeforeUnFocus: 500,
            onFocus: (item, index) => {
              setPressText('onFocus被触发');
            },
          }}></LineChart>
        </TestCase>
        <TestCase itShould="{focusEnabled: true,delayBeforeUnFocus: 1000,
              onFocus: (item, index) => { 
                setPressText('onFocus被触发');
               },
            }">
          <Text>请点击图形上显示的数据点触发onFocus，{pressText}</Text>
          <LineChart scrollRef={scrollref} data={lineData} {...{
            focusEnabled: true,
            delayBeforeUnFocus: 1000,
            onFocus: (item, index) => {
              setPressText('onFocus被触发');
            },
          }}></LineChart>
        </TestCase>
        {
          <TestCase itShould="{
            focusEnabled: true,
            focusedCustomDataPoint: (item, index) => { return (<Text style={{ fontSize: 14, color: 'red', width: 20, height: 50 }}>{item.value}</Text>) },
          }">
            <Text>请点击图形上显示的数据点，观察效果</Text>
            <LineChart scrollRef={scrollref} data={lineData} {...{
              focusEnabled: true,
              focusedCustomDataPoint: (item, index) => { return (<Text style={{ fontSize: 14, color: 'red', width: 20, height: 50 }}>{item.value}</Text>) },
            }}></LineChart>
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

            <LineChart scrollRef={scrollref} data={lineData} {...{
              customDataPoint: (item, index) => { return (<Text>{item.value}</Text>) },
              data: [
                { value: 50, dataPointText: '50' },
                { value: 80, dataPointText: '80' },
                { value: 90, dataPointText: '90' },
                { value: 70, dataPointText: '70' }]
            }}></LineChart>

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
          <LineChart scrollRef={scrollref} data={lineData} {...{
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
          }}></LineChart>
        </TestCase>
      </ScrollView>
    </Tester>
  )
}