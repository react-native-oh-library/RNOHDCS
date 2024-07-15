import React from 'react';
import { View, Platform } from 'react-native';
import { StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import { stackedDatas, stackesKeys } from '../../genUtil';

class AreaStackWithAxisExample extends React.PureComponent {

  render() {
    const data = [...stackedDatas];
    const colors = ['rgba(138, 0, 230, 0.8)', 'rgba(173, 51, 255, 0.8)', 'rgba(194, 102, 255, 0.8)', 'rgba(214, 153, 255, 0.8)'];
    const keys = [...stackesKeys];
    const distance = Platform.OS == 'harmony' ? 10 : 0;
    return (
      <View style={{ flexDirection: 'row', height: 200 }}>
        <StackedAreaChart
          style={{ flex: 1 }}
          contentInset={{ top: 10, bottom: 10 }}
          data={data}
          keys={keys}
          colors={colors}
          curve={this.props.curve ? this.props.curve : shape.curveNatural}
          order={this.props.order ? this.props.order : null}
          offset={this.props.offset ? this.props.offset : null}
        >
          {this.props.showGrid ? <Grid /> : ''}
        </StackedAreaChart>
        {
          <YAxis
            style={{ position: 'absolute', top: distance, bottom: distance, width: 40 }}
            data={StackedAreaChart.extractDataPoints(data, keys)}
            contentInset={{ top: 10, bottom: 10 }}
            numberOfTicks={8}
            {...this.props}
            svg={{
              fontSize: 8,
              fill: 'white',
              stroke: 'black',
              strokeWidth: 0.1,
              alignmentBaseline: 'baseline',
              baselineShift: '3'
            }}
          />}
      </View>
    )
  }
};

export default AreaStackWithAxisExample;