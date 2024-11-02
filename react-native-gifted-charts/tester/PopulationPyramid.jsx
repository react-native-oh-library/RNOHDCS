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
  
  const populationPyramidProp = [
    { height: 100 }, { height: 200 },
    { width: 200 }, { width: 400 },
    { noOfSections: 6, hideRules: true }, { noOfSections: 5, hideRules: false },
    { rulesThickness: 5 }, { rulesThickness: 10 },
    { rulesColor: 'red' }, { rulesColor: 'blue' },
    { rulesType: 'SOLID' }, { rulesType: 'DASHED' },
    { dashWidth: 2 }, { dashWidth: 5 }, { dashWidth: 10 },
    { dashGap: 2 }, { dashGap: 10 }, { dashGap: 15 },
    { stepHeight: 10 }, { stepHeight: 20 },
    { verticalMarginBetweenBars: 1 }, { verticalMarginBetweenBars: 5 },
    { showVerticalLines: true }, { showVerticalLines: false },
    { verticalLinesColor: 'red', showVerticalLines: true }, { verticalLinesColor: 'blue', showVerticalLines: true },
    { verticalLinesThickness: 2, verticalLinesColor: 'blue', showVerticalLines: true },
    { verticalLinesThickness: 10, verticalLinesColor: 'blue', showVerticalLines: true },
    { verticalLinesStrokeDashArray: [2, 8], verticalLinesColor: 'blue', showVerticalLines: true },
    { verticalLinesStrokeDashArray: [10, 15], verticalLinesColor: 'blue', showVerticalLines: true },
    { noOfSections: 2 }, { noOfSections: 10 },
    { showMidAxis: true }, { showMidAxis: false },
    { midAxisThickness: 5, showMidAxis: true }, { midAxisThickness: 10, showMidAxis: true },
    { midAxisLabelWidth: 25, showMidAxis: true }, { midAxisLabelWidth: 40, showMidAxis: true },
    { midAxisColor: 'red', showMidAxis: true }, { midAxisColor: 'blue', showMidAxis: true },
    { midAxisLeftColor: 'red', showMidAxis: true }, { midAxisLeftColor: 'blue', showMidAxis: true },
    { midAxisRightColor: 'red', showMidAxis: true }, { midAxisRightColor: 'blue', showMidAxis: true },
    { midAxisStrokeDashArray: [20, 20], showMidAxis: true }, { midAxisStrokeDashArray: [2, 2], showMidAxis: true },
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
    // { midAxisLabelFontFamily: 'cursive', showMidAxis: true },
    // { midAxisLabelFontFamily: 'auto', showMidAxis: true },
    // { midAxisLabelFontFamily: 'fangsong', showMidAxis: true },
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

  return (
    <Tester>
      <ScrollView >
        {
          populationPyramidProp.map(item => {
            {
              return (
                <TestCase
                  key={JSON.stringify(item)}
                  itShould={JSON.stringify(item)}
                  tags={['C_API']}>
                  <PopulationPyramid
                    data={popData}
                    {...item}
                  />
                </TestCase>
              )
            }
          })
        }
        
      </ScrollView>

    </Tester>
  )
}