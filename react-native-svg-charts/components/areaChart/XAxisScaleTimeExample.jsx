import React from 'react'
import { View, Platform } from 'react-native'
import { AreaChart, XAxis, Grid } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import dateFns from 'date-fns'

class XAxisScaleTimeExample extends React.PureComponent {

    render() {

        const data = [
            {
                value: 50,
                date: dateFns.setHours(new Date(2018, 0, 0), 6),
            },
            {
                value: 10,
                date: dateFns.setHours(new Date(2018, 0, 0), 9),
            },
            {
                value: 150,
                date: dateFns.setHours(new Date(2018, 0, 0), 15),
            },
            {
                value: 10,
                date: dateFns.setHours(new Date(2018, 0, 0), 18),
            },
            {
                value: 100,
                date: dateFns.setHours(new Date(2018, 0, 0), 21),
            },
            {
                value: 20,
                date: dateFns.setHours(new Date(2018, 0, 0), 24),
            },
        ]

        return (
            <View style={{ height: 300, padding: 20, border: '1px solid #000' }}>
                <AreaChart
                    style={{ flex: 1, height: 200 }}
                    data={data}
                    yAccessor={({ item }) => item.value}
                    xAccessor={({ item }) => item.date}
                    xScale={scale.scaleTime}
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
                    curve={shape.curveLinear}
                >
                    <Grid />
                </AreaChart>


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
                    scale={scale.scaleTime}
                    numberOfTicks={10}
                    contentInset={{ left: 10, right: 20 }}
                    formatLabel={(value) => dateFns.format(value, 'HH:mm')}
                />
            </View>
        )
    }

}

export default XAxisScaleTimeExample