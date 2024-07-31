import { useState, useRef } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Path } from 'react-native-svg';
import { PopulationPyramid } from 'react-native-gifted-charts';
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

export default function () {
  const popData = [
    { left: 30, right: 40, midAxisLabel: '~115' },
    { left: 40, right: 44, midAxisLabel: '~105' },
    { left: 55, right: 57, midAxisLabel: '~95' },
    { left: 94, right: 87, midAxisLabel: '~85' },
    { left: 90, right: 88, midAxisLabel: '~75' },
    { left: 88, right: 86, midAxisLabel: '~65' },
  ];
  const [populationPyramidProps, setPopulationPyramidProps] = useState({});

  const populationPyramidProp = [
    { height: 100 }, { height: 200 },
    { width: 200 }, { width: 400 },
    { hideRules: true, noOfSections: 4 }, { hideRules: false, noOfSections: 4 },
    { rulesThickness: 5 }, { rulesThickness: 10 },
    { rulesColor: 'red' }, { rulesColor: 'blue' },
    { rulesType: 'SOLID' }, { rulesType: 'DASHED' }, { rulesType: 'DOTTED' },
    { dashWidth: 2 }, { dashWidth: 5 }, { dashWidth: 10 },
    { dashGap: 2 }, { dashGap: 10 }, { dashGap: 15 },
    { stepHeight: 10 }, { stepHeight: 20 },
    { verticalMarginBetweenBars: 1 }, { verticalMarginBetweenBars: 5 },
    { hideYAxisText: false }, { hideYAxisText: true },
    { yAxisLabelWidth: 25 }, { yAxisLabelWidth: 45 },
    { yAxisColor: 'red' }, { yAxisColor: 'blue' },
    { yAxisThickness: 5 }, { yAxisThickness: 10 },
    { yAxisStrokeDashArray: [5, 10] }, { yAxisStrokeDashArray: [2, 8] },
    { xAxisColor: 'red' }, { xAxisColor: 'blue' },
    { xAxisThickness: 5 }, { xAxisThickness: 10 },
    { xAxisType: 'SOLID' }, { xAxisType: 'DASHED' }, { xAxisType: 'DOTTED' },
    { xAxisNoOfSections: 5 }, { xAxisNoOfSections: 10 }, { xAxisNoOfSections: 15 },
    { showXAxisIndices: false }, { showXAxisIndices: true },
    { xAxisIndicesWidth: 5, showXAxisIndices: true }, { xAxisIndicesWidth: 10, showXAxisIndices: true },
    { xAxisIndicesHeight: 5, showXAxisIndices: true }, { xAxisIndicesHeight: 10, showXAxisIndices: true },
    { xAxisIndicesColor: 'red', showXAxisIndices: true }, { xAxisIndicesColor: 'blue', showXAxisIndices: true },
    { xAxisIndicesShiftY: 1 }, { xAxisIndicesShiftY: 10 },
    { showXAxisLabelTexts: true }, { showXAxisLabelTexts: false },
    { xAxisLabelFontSize: 14, showXAxisLabelTexts: true }, { xAxisLabelFontSize: 18, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontStyle: 'normal', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'blue', xAxisLabelFontStyle: 'italic', xAxisLabelFontSize: 18, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'yellow', xAxisLabelFontStyle: 'oblique', xAxisLabelFontSize: 18, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontWeight: 'bold', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontWeight: 'bolder', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontWeight: 'lighter', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontWeight: 100, xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontWeight: 200, xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'cursive', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'auto', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'fangsong', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelShiftX: 2, xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelShiftX: 10, xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelShiftY: 2, xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelShiftY: 10, xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelPrefix: '$', xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelPrefix: '￥', xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelSuffix: '$', xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelSuffix: '￥', xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { showVerticalLines: true }, { showVerticalLines: false },
    { verticalLinesColor: 'red', showVerticalLines: true }, { verticalLinesColor: 'blue', showVerticalLines: true },
    { verticalLinesThickness: 2, verticalLinesColor: 'blue', showVerticalLines: true },
    { verticalLinesThickness: 10, verticalLinesColor: 'blue', showVerticalLines: true },
    { verticalLinesStrokeDashArray: [2, 8], verticalLinesColor: 'blue', showVerticalLines: true },
    { verticalLinesStrokeDashArray: [10, 15], verticalLinesColor: 'blue', showVerticalLines: true },
    { noOfSections: 2 }, { noOfSections: 10 },
    { barsMapToYAxisSections: true, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { barsMapToYAxisSections: false },
    { showYAxisIndices: true }, { showYAxisIndices: false },
    { yAxisIndicesWidth: 4, showYAxisIndices: true }, { yAxisIndicesWidth: 8, showYAxisIndices: true, },
    { yAxisIndicesHeight: 8, showYAxisIndices: true }, { yAxisIndicesHeight: 10, showYAxisIndices: true },
    { yAxisIndicesColor: 'red', showYAxisIndices: true }, { yAxisIndicesColor: 'blue', showYAxisIndices: true },
    { yAxisLabelColor: 'red', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelColor: 'blue', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontSize: 14, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontSize: 18, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontStyle: 'normal', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontStyle: 'italic', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontStyle: 'oblique', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: 'bold', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: 'bolder', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: 'lighter', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: '100', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: '200', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontFamily: 'cursive', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontFamily: 'auto', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontFamily: 'fangsong', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { showMidAxis: true }, { showMidAxis: false },
    { midAxisThickness: 5, showMidAxis: true }, { midAxisThickness: 10, showMidAxis: true },
    { midAxisLabelWidth: 25, showMidAxis: true }, { midAxisLabelWidth: 40, showMidAxis: true },
    { midAxisColor: 'red', showMidAxis: true }, { midAxisColor: 'blue', showMidAxis: true },
    { midAxisLeftColor: 'red', showMidAxis: true }, { midAxisLeftColor: 'blue', showMidAxis: true },
    { midAxisRightColor: 'red', showMidAxis: true }, { midAxisRightColor: 'blue', showMidAxis: true },
    { midAxisStrokeDashArray: [4, 10], showMidAxis: true }, { midAxisStrokeDashArray: [2, 9], showMidAxis: true },
    { midAxisLabelFontSize: 14, showMidAxis: true }, { midAxisLabelFontSize: 18, showMidAxis: true },
    { midAxisLabelColor: 'red', showMidAxis: true }, { midAxisLabelColor: 'blue', showMidAxis: true },
    { midAxisLabelFontStyle: 'normal', showMidAxis: true },
    { midAxisLabelFontStyle: 'italic', showMidAxis: true },
    { midAxisLabelFontStyle: 'oblique', showMidAxis: true },
    { midAxisLabelFontWeight: 'bold', showMidAxis: true },
    { midAxisLabelFontWeight: 'bolder', showMidAxis: true },
    { midAxisLabelFontWeight: 'lighter', showMidAxis: true },
    { midAxisLabelFontWeight: 100, showMidAxis: true },
    { midAxisLabelFontWeight: 200, showMidAxis: true },
    { midAxisLabelFontFamily: 'cursive', showMidAxis: true },
    { midAxisLabelFontFamily: 'auto', showMidAxis: true },
    { midAxisLabelFontFamily: 'fangsong', showMidAxis: true },
    { barLabelWidth: 5, showValuesAsBarLabels: true },
    { barLabelWidth: 100, showValuesAsBarLabels: true },
    { barLabelFontSize: 14, showValuesAsBarLabels: true },
    { barLabelFontSize: 18, showValuesAsBarLabels: true },
    { barLabelColor: 'red', showValuesAsBarLabels: true },
    { barLabelColor: 'blue', showValuesAsBarLabels: true },
    { barLabelFontStyle: 'normal', showValuesAsBarLabels: true },
    { barLabelFontStyle: 'italic', showValuesAsBarLabels: true },
    { barLabelFontStyle: 'oblique', showValuesAsBarLabels: true },
    { barLabelFontWeight: 'bold', showValuesAsBarLabels: true },
    { barLabelFontWeight: 'bolder', showValuesAsBarLabels: true },
    { barLabelFontWeight: 'lighter', showValuesAsBarLabels: true },
    { barLabelFontWeight: 100, showValuesAsBarLabels: true },
    { barLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    { barLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    { barLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { leftBarLabelWidth: 20, showValuesAsBarLabels: true },
    { leftBarLabelWidth: 40, showValuesAsBarLabels: true },
    { leftBarLabelFontSize: 14, showValuesAsBarLabels: true },
    { leftBarLabelFontSize: 18, showValuesAsBarLabels: true },
    { leftBarLabelColor: 'red', showValuesAsBarLabels: true },
    { leftBarLabelColor: 'blue', showValuesAsBarLabels: true },
    { leftBarLabelFontStyle: 'normal', showValuesAsBarLabels: true },
    { leftBarLabelFontStyle: 'italic', showValuesAsBarLabels: true },
    { leftBarLabelFontStyle: 'oblique', showValuesAsBarLabels: true },
    { leftBarLabelFontWeight: 'bold', showValuesAsBarLabels: true },
    { leftBarLabelFontWeight: 'bolder', showValuesAsBarLabels: true },
    { leftBarLabelFontWeight: 'lighter', showValuesAsBarLabels: true },
    { leftBarLabelFontWeight: 100, showValuesAsBarLabels: true },
    { leftBarLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    { leftBarLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    { leftBarLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { leftBarLabelShift: 2, showValuesAsBarLabels: true },
    { leftBarLabelShift: 10, showValuesAsBarLabels: true },
    { leftBarLabelPrefix: '$', showValuesAsBarLabels: true },
    { leftBarLabelPrefix: '￥', showValuesAsBarLabels: true },
    { leftBarLabelSuffix: 'money', showValuesAsBarLabels: true },
    { leftBarLabelSuffix: '元', showValuesAsBarLabels: true },
    { rightBarLabelWidth: 25, showValuesAsBarLabels: true },
    { rightBarLabelWidth: 45, showValuesAsBarLabels: true },
    { rightBarLabelFontSize: 14, showValuesAsBarLabels: true },
    { rightBarLabelFontSize: 18, showValuesAsBarLabels: true },
    { rightBarLabelColor: 'red', showValuesAsBarLabels: true },
    { rightBarLabelColor: 'blue', showValuesAsBarLabels: true },
    { rightBarLabelFontStyle: 'normal', showValuesAsBarLabels: true },
    { rightBarLabelFontStyle: 'italic', showValuesAsBarLabels: true },
    { rightBarLabelFontStyle: 'oblique', showValuesAsBarLabels: true },
    { rightBarLabelFontWeight: 'bold', showValuesAsBarLabels: true },
    { rightBarLabelFontWeight: 'bolder', showValuesAsBarLabels: true },
    { rightBarLabelFontWeight: 'lighter', showValuesAsBarLabels: true },
    { rightBarLabelFontWeight: 100, showValuesAsBarLabels: true },
    { rightBarLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    { rightBarLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    { rightBarLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { rightBarLabelShift: 2, showValuesAsBarLabels: true },
    { rightBarLabelShift: 10, showValuesAsBarLabels: true },
    { rightBarLabelPrefix: '$', showValuesAsBarLabels: true },
    { rightBarLabelPrefix: '￥', showValuesAsBarLabels: true },
    { rightBarLabelSuffix: 'money', showValuesAsBarLabels: true },
    { rightBarLabelSuffix: '元', showValuesAsBarLabels: true },
    { leftBarColor: 'red' }, { leftBarColor: 'blue' },
    { rightBarColor: 'red' }, { rightBarColor: 'blue' },
    { leftBarBorderColor: 'red' }, { leftBarBorderColor: 'black' },
    { barBorderWidth: 5 }, { barBorderWidth: 15 },
    { leftBarBorderWidth: 5 }, { leftBarBorderWidth: 15 },
    { barBorderRadius: 5 }, { barBorderRadius: 15 },
    { leftBarBorderRadius: 5 }, { leftBarBorderRadius: 15 },
    { rightBarBorderRadius: 5 }, { rightBarBorderRadius: 15 },
    { allCornersRounded: false }, { allCornersRounded: true },
    { showSurplus: false }, { showSurplus: true },
    { showSurplusLeft: false }, { showSurplusLeft: true },
    { showSurplusRight: false }, { showSurplusRight: true },
    { leftSurplusColor: 'red', showSurplusLeft: true }, { leftSurplusColor: 'blue', showSurplusLeft: true },
    { leftSurplusBorderColor: 'red', showSurplusLeft: true }, { leftSurplusBorderColor: 'blue', showSurplusLeft: true },
    { rightSurplusColor: 'red', showSurplusRight: true }, { rightSurplusColor: 'blue', showSurplusRight: true },
    { rightSurplusBorderColor: 'red', showSurplusRight: true }, { rightSurplusBorderColor: 'blue', showSurplusRight: true },
    { leftSurplusBorderWidth: 5, showSurplusLeft: true }, { leftSurplusBorderWidth: 10, showSurplusLeft: true },
    { rightSurplusBorderWidth: 5, showSurplusRight: true }, { rightSurplusBorderWidth: 10, showSurplusRight: true },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const changeProps = (props) => {
    setIsVisible(false);
    let t = setTimeout(() => {
      clearTimeout(t);
      setPopulationPyramidProps(props)
      setIsVisible(true);
    }, 300)
  }

  return (
    <Tester>
      <TestCase itShould="base" tags={['C_API']}>
        <View style={{ minHeight: 250 }}>
          {isVisible ? <PopulationPyramid
            data={popData}
            {...populationPyramidProps}
          /> : null}
        </View>
      </TestCase>
      <ScrollView style={{ marginBottom: 330 }}>
        {
          populationPyramidProp.map(item => {
            {
              return (
                <TestCase
                  key={JSON.stringify(item)}
                  itShould={JSON.stringify(item)}
                  tags={['C_API']}>
                  <Button title='点击按钮并观察饼图变化' onPress={() => {
                    changeProps(item)
                  }}></Button>
                </TestCase>
              )
            }
          })
        }
        <TestCase itShould='formatXAxisLabels: (label) => label' tags={['C_API']}>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPopulationPyramidProps({
              formatXAxisLabels: (label) => label
            })
          }}></Button>
        </TestCase>
        <TestCase itShould='formatXAxisLabels: (label) => label+"$"' tags={['C_API']}>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPopulationPyramidProps({
              formatXAxisLabels: (label) => label + '$'
            })
          }}></Button>
        </TestCase>
        <TestCase itShould='formatBarLabels: (label) => label' tags={['C_API']}>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPopulationPyramidProps({
              showValuesAsBarLabels: true,
              formatBarLabels: (label) => label
            })
          }}></Button>
        </TestCase>
        <TestCase itShould='formatBarLabels: (label) => label+"$"' tags={['C_API']}>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPopulationPyramidProps({
              showValuesAsBarLabels: true,
              formatBarLabels: (label) => label + '$'
            })
          }}></Button>
        </TestCase>
      </ScrollView>

    </Tester>
  )
}