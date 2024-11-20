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
    { barLabelWidth: 5, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelWidth: 100, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelFontSize: 14, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelFontSize: 18, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelColor: 'red', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelColor: 'blue', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelFontStyle: 'normal', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelFontStyle: 'italic', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelFontStyle: 'oblique', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelFontWeight: 'bold', showValuesAsBarLabels: true, barLabelColor: '#000000' ,showMidAxis: true ,width:350},
    { barLabelFontWeight: 'bolder', showValuesAsBarLabels: true, barLabelColor: '#000000' ,showMidAxis: true ,width:350},
    { barLabelFontWeight: 'lighter', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { barLabelFontWeight: 300, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    // { barLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    // { barLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    // { barLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { leftBarLabelWidth: 20, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelWidth: 80, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontSize: 14, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontSize: 18, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelColor: 'red', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelColor: 'blue', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontStyle: 'normal', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontStyle: 'italic', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontStyle: 'oblique', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontWeight: 'bold', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontWeight: 'bolder', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontWeight: 'lighter', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelFontWeight: 300, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    // { leftBarLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    // { leftBarLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    // { leftBarLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { leftBarLabelShift: 2, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelShift: 40, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelPrefix: '$', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelPrefix: '￥', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelSuffix: 'money', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { leftBarLabelSuffix: '元', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelWidth: 25, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelWidth: 65, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontSize: 14, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontSize: 18, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelColor: 'red', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelColor: 'blue', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontStyle: 'normal', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontStyle: 'italic', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontStyle: 'oblique', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontWeight: 'bold', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontWeight: 'bolder', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontWeight: 'lighter', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelFontWeight: 300, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    // { rightBarLabelFontFamily: 'cursive', showValuesAsBarLabels: true },
    // { rightBarLabelFontFamily: 'auto', showValuesAsBarLabels: true },
    // { rightBarLabelFontFamily: 'fangsong', showValuesAsBarLabels: true },
    { rightBarLabelShift: 2, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelShift: 40, showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelPrefix: '$', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelPrefix: '￥', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelSuffix: 'money', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
    { rightBarLabelSuffix: '元', showValuesAsBarLabels: true ,showMidAxis: true ,width:350},
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
          showMidAxis={ true} width={350}
            data={popData}
            {...{
              showValuesAsBarLabels: true,
              formatBarLabels: (label) => label
            }}
          />
        </TestCase>
        <TestCase itShould='formatBarLabels: (label) => label+"$"' tags={['C_API']}>
          <PopulationPyramid
          showMidAxis={true} width={350}
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