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

const RadarChartScreen = () => {
  const data = [
    {value: 30},
    {value: 40},
    {value: 70},
    {value: 34},
    {value: 44},
  ];
  return (
    <View style={{height: 300}}>
      <RadarChart
        style={styles.chart}
        data={{
          dataSets: [
            {
              label: 'demo',
              values: data,
              config: {
                color: processColor('#666'),
                drawFilled: true,
                lineWidth: 2,
                fillColor: processColor('#666'),
                fillAlpha: 150,
                drawHighlightIndicators: false,
                highlightEnabled:true,
                
              },
            },
          ],
        }}
        legend={{
          enabled: true,
          verticalAlignment: 'TOP',
          horizontalAlignment: 'CENTER',
          orientation: 'HORIZONTAL',
          drawInside: false,
          xEntrySpace: 7,
          yEntrySpace: 5,
        }}
        drawWeb={true}
        webLineWidth={3}
        webColor={processColor('#666')}
        webLineWidthInner={3}
        webColorInner={processColor('#000')}
        webAlpha={150}
        xAxis={{
          position: 'BOTTOM',
          drawGridLines: false,
          textSize: 20,
          yOffset: 0,
          granularity: 1,
          labelCount: 7,
          textColor: processColor('#fff'),
        }}
        yAxis={{
          labelCount: 5,
          textSize: 20,
          drawLabels: false,
          axisMaximum: 80,
          axisMinimum: 0,
        }}
        animation={{durationX: 1000, durationY: 1000}}
        skipWebLineCount={1}
        touchEnabled={true}
        highlightPerTapEnabled={true}
        
      />
    </View>
  );
};

export default RadarChartScreen;
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
