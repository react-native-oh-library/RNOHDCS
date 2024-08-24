import React from "react";
// import  from 'react-native-svg'
import { Svg, Circle, Rect } from 'react-native-svg'
import { GenMain } from './gen'
import { genTransformProps, genStrokeProps, genFillProps, commonProps } from '../genUtil'
const basicProps = {
    x1: "10",
    y1: "10",
    x2: "190",
    y2: "10",
    strokeWidth: 4,
    stroke: 'red'
}

const allCases = [
    ...genFillProps(),
    ...genStrokeProps(),
    ...genTransformProps(),
    ...commonProps()
]


export default function () {
    return (
        <GenMain
            cases={allCases}
            basicProps={basicProps}
            comName='Line'
        >
        </GenMain>
    )
}