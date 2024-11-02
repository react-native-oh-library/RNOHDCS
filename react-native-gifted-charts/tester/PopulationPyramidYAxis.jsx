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
    { hideYAxisText: false }, { hideYAxisText: true },
    { yAxisLabelWidth: 25 }, { yAxisLabelWidth: 45 },
    { yAxisColor: 'red' }, { yAxisColor: 'blue' },
    { yAxisThickness: 5 }, { yAxisThickness: 10 },
    { yAxisStrokeDashArray: [5, 10] }, { yAxisStrokeDashArray: [2, 8] },
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
    { yAxisLabelTextMarginRight: 4, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelTextMarginRight: 18, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontStyle: 'normal', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontStyle: 'italic', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontStyle: 'oblique', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: 'bold', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: 'bolder', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: 'lighter', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: '100', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    { yAxisLabelFontWeight: '200', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    // { yAxisLabelFontFamily: 'cursive', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    // { yAxisLabelFontFamily: 'auto', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
    // { yAxisLabelFontFamily: 'fangsong', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() },
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