import React from 'react'
import { Path } from 'react-native-svg'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

class AreaChartExample extends React.PureComponent {

  render() {
    const { start } = this.props

    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    const Line = ({ line }) => (
      <Path
        key={'line'}
        d={line}
        stroke={'rgb(134, 65, 244)'}
        fillOpacity={0}
      />
    )

    return (
      <AreaChart
        style={{ height: 200 }}
        data={data}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
        start={start}
      >
        <Grid />
        <Line />
      </AreaChart>
    )
  }
}

export default AreaChartExample