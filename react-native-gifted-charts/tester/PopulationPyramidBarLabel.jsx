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
    { barLabelWidth: 5, showValuesAsBarLabels: true },
    { barLabelWidth: 100, showValuesAsBarLabels: true },
    { barLabelFontSize: 14, showValuesAsBarLabels: true },
    { barLabelFontSize: 18, showValuesAsBarLabels: true },
    { barLabelColor: 'red', showValuesAsBarLabels: true },
    { barLabelColor: 'blue', showValuesAsBarLabels: true },
    { barLabelFontStyle: 'normal', showValuesAsBarLabels: true },
    { barLabelFontStyle: 'italic', showValuesAsBarLabels: true },
    { barLabelFontStyle: 'oblique', showValuesAsBarLabels: true },
    { barLabelFontWeight: 'bold', showValuesAsBarLabels: true, barLabelColor: '#000000' },
    { barLabelFontWeight: 'bolder', showValuesAsBarLabels: true, barLabelColor: '#000000' },
    { barLabelFontWeight: 'lighter', showValuesAsBarLabels: true },
    { barLabelFontWeight: 300, showValuesAsBarLabels: true },
    // { barLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    // { barLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    // { barLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { leftBarLabelWidth: 20, showValuesAsBarLabels: true },
    { leftBarLabelWidth: 80, showValuesAsBarLabels: true },
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
    { leftBarLabelFontWeight: 300, showValuesAsBarLabels: true },
    // { leftBarLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    // { leftBarLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    // { leftBarLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { leftBarLabelShift: 2, showValuesAsBarLabels: true },
    { leftBarLabelShift: 40, showValuesAsBarLabels: true },
    { leftBarLabelPrefix: '$', showValuesAsBarLabels: true },
    { leftBarLabelPrefix: '￥', showValuesAsBarLabels: true },
    { leftBarLabelSuffix: 'money', showValuesAsBarLabels: true },
    { leftBarLabelSuffix: '元', showValuesAsBarLabels: true },
    { rightBarLabelWidth: 25, showValuesAsBarLabels: true },
    { rightBarLabelWidth: 65, showValuesAsBarLabels: true },
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
    { rightBarLabelFontWeight: 300, showValuesAsBarLabels: true },
    // { rightBarLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    // { rightBarLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    // { rightBarLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { rightBarLabelShift: 2, showValuesAsBarLabels: true },
    { rightBarLabelShift: 40, showValuesAsBarLabels: true },
    { rightBarLabelPrefix: '$', showValuesAsBarLabels: true },
    { rightBarLabelPrefix: '￥', showValuesAsBarLabels: true },
    { rightBarLabelSuffix: 'money', showValuesAsBarLabels: true },
    { rightBarLabelSuffix: '元', showValuesAsBarLabels: true },
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
       <TestCase itShould='formatBarLabels: (label) => label' tags={['C_API']}>
          <PopulationPyramid
            data={popData}
            {...{
              showValuesAsBarLabels: true,
              formatBarLabels: (label) => label
            }}
          />
        </TestCase>
        <TestCase itShould='formatBarLabels: (label) => label+"$"' tags={['C_API']}>
          <PopulationPyramid
            data={popData}
            {...{
              showValuesAsBarLabels: true,
              formatBarLabels: (label) => label + '$'
            }}
          />
        </TestCase>
      </ScrollView>

    </Tester>
  )
}