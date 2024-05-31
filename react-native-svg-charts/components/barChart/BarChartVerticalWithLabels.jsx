import React from 'react'
import { View, Platform } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class BarChartVerticalWithLabels extends React.PureComponent {

    render() {

        const data = [10, 5, 25, 15, 20]

        const CUT_OFF = 20
        const yValue1 = Platform.OS == 'harmony' ? 20: 10;
        const yValue2 = Platform.OS == 'harmony' ? 5: 15;

        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={index}
                    x={x(index) + (bandwidth / 2) - 8}
                    y={value < CUT_OFF ? y(value) - yValue1 : y(value) + yValue2}
                    fontSize={14}
                    fill={value >= CUT_OFF ? 'white' : 'black'}
                    alignmentBaseline={'middle'}
                >
                    {value}
                </Text>
            ))
        )

        return (
            <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.HORIZONTAL} />
                    <Labels />
                </BarChart>
            </View>
        )
    }

}

export default BarChartVerticalWithLabels