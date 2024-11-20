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
    { hideYAxisText: false ,showMidAxis: true ,width:350}, { hideYAxisText: true,showMidAxis: true ,width:350 },
    { yAxisLabelWidth: 25 ,showMidAxis: true ,width:350}, { yAxisLabelWidth: 45 ,showMidAxis: true ,width:350},
    { yAxisColor: 'red' ,showMidAxis: true ,width:350}, { yAxisColor: 'blue' ,showMidAxis: true ,width:350},
    { yAxisThickness: 5 ,showMidAxis: true ,width:350}, { yAxisThickness: 10,showMidAxis: true ,width:350 },
    { yAxisStrokeDashArray: [5, 10],showMidAxis: true ,width:350 }, { yAxisStrokeDashArray: [2, 8] ,showMidAxis: true ,width:350},
    { barsMapToYAxisSections: true, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse(),showMidAxis: true ,width:350 },
    { barsMapToYAxisSections: false ,showMidAxis: true ,width:350},
    { showYAxisIndices: true ,showMidAxis: true ,width:350}, { showYAxisIndices: false ,showMidAxis: true ,width:350},
    { yAxisIndicesWidth: 4, showYAxisIndices: true,showMidAxis: true ,width:350 }, { yAxisIndicesWidth: 8, showYAxisIndices: true, showMidAxis: true ,width:350},
    { yAxisIndicesHeight: 8, showYAxisIndices: true,showMidAxis: true ,width:350 }, { yAxisIndicesHeight: 10, showYAxisIndices: true ,showMidAxis: true ,width:350},
    { yAxisIndicesColor: 'red', showYAxisIndices: true,showMidAxis: true ,width:350 }, { yAxisIndicesColor: 'blue', showYAxisIndices: true ,showMidAxis: true ,width:350},
    { yAxisLabelColor: 'red', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelColor: 'blue', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontSize: 14, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontSize: 18, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelTextMarginRight: 4, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelTextMarginRight: 18, yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontStyle: 'normal', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontStyle: 'italic', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontStyle: 'oblique', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontWeight: 'bold', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontWeight: 'bolder', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontWeight: 'lighter', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontWeight: '100', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
    { yAxisLabelFontWeight: '200', yAxisLabelTexts: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120',].reverse() ,showMidAxis: true ,width:350},
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