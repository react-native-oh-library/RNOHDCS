import React from 'react'
import { View, Platform, Button } from 'react-native'
import { AreaChart, XAxis, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import {setHours,format} from 'date-fns'

export default function (props) {
  const data = [
    {
      value: 50,
      date: setHours(new Date(2018, 0, 0), 6),
    },
    {
      value: 10,
      date: setHours(new Date(2018, 0, 0), 9),
    },
    {
      value: 150,
      date:setHours(new Date(2018, 0, 0), 15),
    },
    {
      value: 10,
      date: setHours(new Date(2018, 0, 0), 18),
    },
    {
      value: 100,
      date: setHours(new Date(2018, 0, 0), 21),
    },
    {
      value: 20,
      date: setHours(new Date(2018, 0, 0), 24),
    },
  ]
  return (
    <View style={{ height: 300, padding: 20, border: '1px solid #000' }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', height: 200 }}>
        <YAxis
          style={{ width: 30 }}
          data={data}
          svg={{
            fill: 'black',
            fontSize: 8,
          }}
          numberOfTicks={5}
          contentInset={{ top: 30, bottom: 20 }}
          yAccessor={({ item }) => item.date}
          scale={scale[props.scale] == scale.scaleBand?scale.scaleLinear:scale[props.scale]}
          formatLabel={(value) => format(value, 'HH:mm')}
        />
        <AreaChart
          style={{ flex: 1 }}
          data={data}
          yAccessor={({ item }) => item.value}
          xAccessor={({ item }) => item.date}
          xScale={scale[props.scale] == scale.scaleBand?scale.scaleLinear:scale[props.scale]}
          yScale={scale[props.scale] == scale.scaleBand?scale.scaleLinear:scale[props.scale]}
          numberOfTicks={scale[props.scale] == scale.scaleBand ? null : 5}
          contentInset={{ top: 10, bottom: 10, left: 10, }}
          svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
          curve={shape.curveLinear}
        >
          <Grid ticks={5} direction={Grid.Direction.HORIZONTAL} />
        </AreaChart>
      </View>
      <XAxis
        style={{ height: 100, marginHorizontal: -15, height: 20 }}
        data={data}
        svg={{
          fill: 'black',
          fontSize: 8,
          fontWeight: 'bold',
          rotation: 20,
          originY: 30,
          y: 5,
        }}
        xAccessor={({ item }) => item.date}
        scale={scale[props.scale] == scale.scaleBand?scale.scaleLinear:scale[props.scale]}
        numberOfTicks={5}
        contentInset={{ left: 10, right: 20 }}
        formatLabel={(value) => format(value, 'HH:mm')}
      />
    </View>
  )
}
