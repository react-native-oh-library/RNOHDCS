import React from "react";
// import  from 'react-native-svg'
import { Svg, Circle } from 'react-native-svg'
import { GenMain } from './gen'
import { genTransformProps, genFillProps, commonProps } from '../genUtil'
const basicProps = {
    points:"10 10 20 12 30 20 40 60 60 70 95 90",
    fill: 'red'
}

const allCases = [
    ...genFillProps(),
    ...genTransformProps(),
    ...commonProps()
]


export default function () {
    return <GenMain
                cases={allCases}
                basicProps={basicProps}
                comName='Polygon'
            />
}