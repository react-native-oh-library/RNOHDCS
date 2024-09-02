import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper';

const PieChartScreen = () => {
  const data = [
    {value: 13, label: '西瓜'},
    {value: 10, label: '香蕉'},
    {value: 29, label: '橙子'},
    {value: 34, label: '柚子'},
    {value: 15, label: '柠檬'},
    {value: 23, label: '苹果'},
  ];
  return (
    <View style={{width: '100%', height: 300}}>
      <PieChart
        style={styles.container}
        data={{
          dataSets: [
            {
              label: 'demo',
              values: data,
              config: {sliceSpace: 10, yValuePosition: 'OUTSIDE_SLICE'},
            },
          ],
        }}
        maxAngle={360}
        styledCenterText={{text: 'Demo'}}
        holeRadius={58}
        transparentCircleRadius={62}
        holeColor={processColor('#fff')}
        rotationEnabled={true}
        highlightPerTapEnabled={true}
        touchEnabled={true}
        animation={{durationX:1000,durationY:1000}}
      />
    </View>
  );
};

export default PieChartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 200,
  },
  chart: {
    flex: 1,
  },
});
