import React from 'react'
import { View, Text } from 'react-native'
import { Path } from 'react-native-svg'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

class AreaChartExample extends React.PureComponent {
  state = {
    data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  }
  render() {
    const Line = ({ line }) => (
      <Path
        key={'line'}
        d={line}
        stroke={'rgb(134, 65, 244)'}
        fillOpacity={0}
      />
    )
    return (
      <View>
        <AreaChart
          style={{ height: 200 }}
          data={this.state.data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={this.props.curve ? this.props.curve : shape.curveLinear}
          {...this.props}
          svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
          start={0}
        >
          <Grid />
          <Line />
        </AreaChart>
      </View>
    )
  }
}

export default AreaChartExample