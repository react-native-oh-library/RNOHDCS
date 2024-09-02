import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {RadarChart} from 'react-native-charts-wrapper';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

const RadarChartDemo = () => {
  const data = [
    {value: 30},
    {value: 40},
    {value: 70},
    {value: 34},
    {value: 44},
  ];
  return (
<Tester>
  <TestSuite name='雷达图'>
    <TestCase itShould='props'>
      <View style={{height:'100%'}}>
      <RadarChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config: {
                      color:processColor('#4f4'),
                      drawFilled: true,
                      lineWidth: 2,
                      fillColor:processColor('#4f4'),
                      fillAlpha:150,
                      drawHighlightIndicators:false,
                      
                      
                    },
                  },
                ],
                
              }}
              legend={{enabled:true,verticalAlignment:"TOP",horizontalAlignment:"CENTER",orientation:'HORIZONTAL',drawInside:false,xEntrySpace:7,yEntrySpace:5,textColor:processColor('#fff')}}
              drawWeb={true}
              webLineWidth={3}
              webColor={processColor('#4f4')}
              webLineWidthInner={3}
              webColorInner={processColor('#000')}
              webAlpha={150}
              xAxis={{position:'BOTTOM',drawGridLines:false,textSize:20,yOffset:0,granularity:1,labelCount:7,textColor:processColor('#fff')}}
              yAxis={{labelCount:5,textSize:20,drawLabels:false,axisMaximum:80,axisMinimum:0}}
              animation={{durationX:1000,durationY:1000}}
            />
      </View>
   
    </TestCase>
  
  </TestSuite>

</Tester>
           
  );
};

export default RadarChartDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 100,
  },
  chart: {
    flex: 1,
  },
});
