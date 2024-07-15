import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Image } from 'react-native-svg'

export default function (props) {

  const data = [
    {
      key: 1,
      amount: 50,
      svg: { fill: '#600080' },
    },
    {
      key: 2,
      amount: 50,
      svg: { fill: '#9900cc' }
    },
    {
      key: 3,
      amount: 40,
      svg: { fill: '#c61aff' }
    },
    {
      key: 4,
      amount: 95,
      svg: { fill: '#d966ff' }
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: '#ecb3ff' }
    }
  ]

  const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <G
          key={index}
          x={labelCentroid[0]}
          y={labelCentroid[1]}
        >
          <Circle
            r={18}
            fill={'white'}
          />
        </G>
      )
    })
  }

  return (
    <PieChart
      style={{ height: 200 }}
      valueAccessor={({ item }) => item.amount}
      data={data}
      spacing={0}
      outerRadius={'95%'}
      labelRadius={props.labelRadius ? props.labelRadius : 20}
    >
      <Labels />
    </PieChart>
  )
}