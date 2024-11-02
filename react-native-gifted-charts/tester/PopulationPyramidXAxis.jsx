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
    { xAxisColor: 'red' }, { xAxisColor: 'blue' },
    { xAxisThickness: 5 }, { xAxisThickness: 10 },
    { xAxisType: 'SOLID' }, { xAxisType: 'DASHED' },
    { xAxisNoOfSections: 2 }, 
    { xAxisNoOfSections: 3 }, 
    { xAxisNoOfSections: 5},
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
    // { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'cursive', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    // { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'auto', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    // { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'fangsong', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelShiftX: 2, xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelShiftX: 10, xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelShiftY: 2, xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelShiftY: 10, xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelPrefix: '$', xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelPrefix: '￥', xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelSuffix: '$', xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    { xAxisLabelSuffix: '￥', xAxisLabelColor: 'red', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
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
        <TestCase itShould='formatXAxisLabels: (label) => label' tags={['C_API']}>
          <PopulationPyramid
            data={popData}
            {...{
              formatXAxisLabels: (label) => label
            }}
          />
        </TestCase>
        <TestCase itShould='formatXAxisLabels: (label) => label+"$"' tags={['C_API']}>
          <PopulationPyramid
            data={popData}
            {...{
              formatXAxisLabels: (label) => label + '$'
            }}
          />
        </TestCase>
      </ScrollView>

    </Tester>
  )
}