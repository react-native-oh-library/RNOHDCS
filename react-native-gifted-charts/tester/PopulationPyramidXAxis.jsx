import {useState, useRef} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {Path} from 'react-native-svg';
import {PopulationPyramid} from 'react-native-gifted-charts';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';

export default function () {
  const popData = [
    {left: 30, right: 40, midAxisLabel: '~115'},
    {left: 40, right: 44, midAxisLabel: '~105'},
    {left: 55, right: 57, midAxisLabel: '~95'},
    {left: 94, right: 87, midAxisLabel: '~85'},
    {left: 90, right: 88, midAxisLabel: '~75'},
    {left: 88, right: 86, midAxisLabel: '~65'},
  ];

  const populationPyramidProp = [
    {xAxisColor: 'red',showMidAxis: true ,width:350},
    {xAxisColor: 'blue',showMidAxis: true ,width:350},
    {xAxisThickness: 5,showMidAxis: true ,width:350},
    {xAxisThickness: 10,showMidAxis: true ,width:350},
    {xAxisType: 'solid',showMidAxis: true ,width:350},
    {xAxisType: 'dashed',showMidAxis: true ,width:350},
    {xAxisNoOfSections: 2,showMidAxis: true ,width:350},
    {xAxisNoOfSections: 3,showMidAxis: true ,width:350},
    {xAxisNoOfSections: 5,showMidAxis: true ,width:350},
    {showXAxisIndices: false,showMidAxis: true ,width:350},
    {showXAxisIndices: true,showMidAxis: true ,width:350},
    {xAxisIndicesWidth: 5, showXAxisIndices: true,showMidAxis: true ,width:350},
    {xAxisIndicesWidth: 10, showXAxisIndices: true,showMidAxis: true ,width:350},
    {xAxisIndicesHeight: 5, showXAxisIndices: true,showMidAxis: true ,width:350},
    {xAxisIndicesHeight: 10, showXAxisIndices: true,showMidAxis: true ,width:350},
    {xAxisIndicesColor: 'red', showXAxisIndices: true,showMidAxis: true ,width:350},
    {xAxisIndicesColor: 'blue', showXAxisIndices: true,showMidAxis: true ,width:350},
    {xAxisIndicesShiftY: 1,showMidAxis: true ,width:350},
    {xAxisIndicesShiftY: 10,showMidAxis: true ,width:350},
    {showXAxisLabelTexts: true,showMidAxis: true ,width:350},
    {showXAxisLabelTexts: false,showMidAxis: true ,width:350},
    {xAxisLabelFontSize: 14, showXAxisLabelTexts: true,showMidAxis: true ,width:350},
    {xAxisLabelFontSize: 18, showXAxisLabelTexts: true,showMidAxis: true ,width:350},
    {
      xAxisLabelColor: 'red',
      xAxisLabelFontStyle: 'normal',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelColor: 'blue',
      xAxisLabelFontStyle: 'italic',
      xAxisLabelFontSize: 18,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelColor: 'yellow',
      xAxisLabelFontStyle: 'oblique',
      xAxisLabelFontSize: 18,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelColor: 'red',
      xAxisLabelFontWeight: 'bold',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelColor: 'red',
      xAxisLabelFontWeight: 'bolder',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelColor: 'red',
      xAxisLabelFontWeight: 'lighter',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelColor: 'red',
      xAxisLabelFontWeight: 100,
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelColor: 'red',
      xAxisLabelFontWeight: 200,
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    // { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'cursive', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    // { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'auto', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    // { xAxisLabelColor: 'red', xAxisLabelFontFamily: 'fangsong', xAxisLabelFontSize: 14, showXAxisLabelTexts: true },
    {
      xAxisLabelShiftX: 2,
      xAxisLabelColor: 'red',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelShiftX: 10,
      xAxisLabelColor: 'red',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelShiftY: 2,
      xAxisLabelColor: 'red',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelShiftY: 10,
      xAxisLabelColor: 'red',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelPrefix: '$',
      xAxisLabelColor: 'red',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelPrefix: '￥',
      xAxisLabelColor: 'red',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelSuffix: '$',
      xAxisLabelColor: 'red',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
    {
      xAxisLabelSuffix: '￥',
      xAxisLabelColor: 'red',
      xAxisLabelFontSize: 14,
      showXAxisLabelTexts: true,
      showMidAxis: true ,width:350
    },
  ];

  return (
    <Tester>
      <ScrollView>
        {populationPyramidProp.map(item => {
          {
            return (
              <TestCase
                key={JSON.stringify(item)}
                itShould={JSON.stringify(item)}
                tags={['C_API']}>
                <PopulationPyramid data={popData} {...item} />
              </TestCase>
            );
          }
        })}
        <TestCase
          itShould="formatXAxisLabels: (label) => label"
          tags={['C_API']}>
          <PopulationPyramid
          showMidAxis={true} width={350}
            data={popData}
            {...{
              formatXAxisLabels: label => label,
            }}
          />
        </TestCase>
        <TestCase
          itShould='formatXAxisLabels: (label) => label+"$"'
          tags={['C_API']}>
          <PopulationPyramid
          showMidAxis={true} width={350}
            data={popData}
            {...{
              formatXAxisLabels: label => label + '$',
            }}
          />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
