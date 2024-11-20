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
    {height: 100, showMidAxis: true, width: 350},
    {height: 200, showMidAxis: true, width: 350},
    {width: 200, showMidAxis: true},
    {width: 400, showMidAxis: true},
    {noOfSections: 6, hideRules: true,showMidAxis: true ,width:350},
    {noOfSections: 5, hideRules: false,showMidAxis: true ,width:350},
    {rulesThickness: 5,showMidAxis: true ,width:350},
    {rulesThickness: 10,showMidAxis: true ,width:350},
    {rulesColor: 'red',showMidAxis: true ,width:350},
    {rulesColor: 'blue',showMidAxis: true ,width:350},
    {rulesType: 'solid',showMidAxis: true ,width:350},
    {rulesType: 'dashed',showMidAxis: true ,width:350},
    {dashWidth: 2,showMidAxis: true ,width:350},
    {dashWidth: 5,showMidAxis: true ,width:350},
    {dashWidth: 10,showMidAxis: true ,width:350},
    {dashGap: 2,showMidAxis: true ,width:350},
    {dashGap: 10,showMidAxis: true ,width:350},
    {dashGap: 15,showMidAxis: true ,width:350},
    {stepHeight: 10,showMidAxis: true ,width:350},
    {stepHeight: 20,showMidAxis: true ,width:350},
    {verticalMarginBetweenBars: 1,showMidAxis: true ,width:350},
    {verticalMarginBetweenBars: 5,showMidAxis: true ,width:350},
    {showVerticalLines: true,showMidAxis: true ,width:350},
    {showVerticalLines: false,showMidAxis: true ,width:350},
    {verticalLinesColor: 'red', showVerticalLines: true,showMidAxis: true ,width:350},
    {verticalLinesColor: 'blue', showVerticalLines: true,showMidAxis: true ,width:350},
    {
      showMidAxis: true ,width:350,
      verticalLinesThickness: 2,
      verticalLinesColor: 'blue',
      showVerticalLines: true,
    },
    {
      verticalLinesThickness: 10,
      verticalLinesColor: 'blue',
      showVerticalLines: true,
      showMidAxis: true ,width:350
    },
    {
      verticalLinesStrokeDashArray: [2, 8],
      verticalLinesColor: 'blue',
      showVerticalLines: true,
      showMidAxis: true ,width:350
    },
    {
      verticalLinesStrokeDashArray: [10, 15],
      verticalLinesColor: 'blue',
      showVerticalLines: true,
      showMidAxis: true ,width:350
    },
    {noOfSections: 2,showMidAxis: true ,width:350},
    {noOfSections: 10,showMidAxis: true ,width:350},
    {showMidAxis: true, width: 350},
    {showMidAxis: false,width:300},
    {midAxisThickness: 5, showMidAxis: true,width:350},
    {midAxisThickness: 10, showMidAxis: true,width:350},
    {midAxisLabelWidth: 25, showMidAxis: true,width:350},
    {midAxisLabelWidth: 40, showMidAxis: true,width:350},
    {midAxisColor: 'red', showMidAxis: true,width:350},
    {midAxisColor: 'blue', showMidAxis: true,width:350},
    {midAxisLeftColor: 'red', showMidAxis: true,width:350},
    {midAxisLeftColor: 'blue', showMidAxis: true,width:350},
    {midAxisRightColor: 'red', showMidAxis: true,width:350},
    {midAxisRightColor: 'blue', showMidAxis: true,width:350},
    {midAxisStrokeDashArray: [20, 20], showMidAxis: true,width:350},
    {midAxisStrokeDashArray: [2, 2], showMidAxis: true,width:350},
    {midAxisLabelFontSize: 14, showMidAxis: true,width:350},
    {midAxisLabelFontSize: 18, showMidAxis: true,width:350},
    {midAxisLabelColor: 'red', showMidAxis: true,width:350},
    {midAxisLabelColor: 'blue', showMidAxis: true,width:350},
    {midAxisLabelFontStyle: 'normal', showMidAxis: true,width:350},
    {midAxisLabelFontStyle: 'italic', showMidAxis: true,width:350},
    {midAxisLabelFontStyle: 'oblique', showMidAxis: true,width:350},
    {midAxisLabelFontWeight: 'bold', showMidAxis: true,width:350},
    {midAxisLabelFontWeight: 'bolder', showMidAxis: true,width:350},
    {midAxisLabelFontWeight: 'lighter', showMidAxis: true,width:350},
    {midAxisLabelFontWeight: 100, showMidAxis: true,width:350},
    {midAxisLabelFontWeight: 200, showMidAxis: true,width:350},
    // { midAxisLabelFontFamily: 'cursive', showMidAxis: true },
    // { midAxisLabelFontFamily: 'auto', showMidAxis: true },
    // { midAxisLabelFontFamily: 'fangsong', showMidAxis: true },
    {leftBarColor: 'red',showMidAxis: true ,width:350},
    {leftBarColor: 'blue',showMidAxis: true ,width:350},
    {rightBarColor: 'red',showMidAxis: true ,width:350},
    {rightBarColor: 'blue',showMidAxis: true ,width:350},
    {leftBarBorderColor: 'red',showMidAxis: true ,width:350},
    {leftBarBorderColor: 'black',showMidAxis: true ,width:350},
    {barBorderWidth: 5,showMidAxis: true ,width:350},
    {barBorderWidth: 15,showMidAxis: true ,width:350},
    {leftBarBorderWidth: 5,showMidAxis: true ,width:350},
    {leftBarBorderWidth: 15,showMidAxis: true ,width:350},
    {barBorderRadius: 5,showMidAxis: true ,width:350},
    {barBorderRadius: 15,showMidAxis: true ,width:350},
    {leftBarBorderRadius: 5,showMidAxis: true ,width:350},
    {leftBarBorderRadius: 15,showMidAxis: true ,width:350},
    {rightBarBorderRadius: 5,showMidAxis: true ,width:350},
    {rightBarBorderRadius: 15,showMidAxis: true ,width:350},
    {allCornersRounded: false,showMidAxis: true ,width:350},
    {allCornersRounded: true,showMidAxis: true ,width:350},
    {showSurplus: false,showMidAxis: true ,width:350},
    {showSurplus: true,showMidAxis: true ,width:350},
    {showSurplusLeft: false,showMidAxis: true ,width:350},
    {showSurplusLeft: true,showMidAxis: true ,width:350},
    {showSurplusRight: false,showMidAxis: true ,width:350},
    {showSurplusRight: true,showMidAxis: true ,width:350},
    {leftSurplusColor: 'red', showSurplusLeft: true,showMidAxis: true ,width:350},
    {leftSurplusColor: 'blue', showSurplusLeft: true,showMidAxis: true ,width:350},
    {leftSurplusBorderColor: 'red', showSurplusLeft: true,showMidAxis: true ,width:350},
    {leftSurplusBorderColor: 'blue', showSurplusLeft: true,showMidAxis: true ,width:350},
    {rightSurplusColor: 'red', showSurplusRight: true,showMidAxis: true ,width:350},
    {rightSurplusColor: 'blue', showSurplusRight: true,showMidAxis: true ,width:350},
    {rightSurplusBorderColor: 'red', showSurplusRight: true,showMidAxis: true ,width:350},
    {rightSurplusBorderColor: 'blue', showSurplusRight: true,showMidAxis: true ,width:350},
    {leftSurplusBorderWidth: 5, showSurplusLeft: true,showMidAxis: true ,width:350},
    {leftSurplusBorderWidth: 10, showSurplusLeft: true,showMidAxis: true ,width:350},
    {rightSurplusBorderWidth: 5, showSurplusRight: true,showMidAxis: true ,width:350},
    {rightSurplusBorderWidth: 10, showSurplusRight: true,showMidAxis: true ,width:350},
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
      </ScrollView>
    </Tester>
  );
}
