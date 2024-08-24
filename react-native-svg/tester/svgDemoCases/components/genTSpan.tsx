import React from "react";
// import  from 'react-native-svg'
import { Svg, Circle } from 'react-native-svg'
import { GenMain } from './gen'
import { genTransformProps, genFillProps, genStrokeProps, CaseParams, genFontProps, genClipProps } from '../genUtil'
const basicProps = {
    x: 10,
    y: 20
}


const basicCases: CaseParams[] = [
    {
        type: 'mulKey',
        id: 'tspan1',
        values: [
            {
                x: 10,
                y: 10
            },
            {
                x: 20,
                y: 20
            },
            {
                dx: 20,
                dy: 20,
                fill: 'green'
            },
            {
                dx: 30,
                dy: 30,
                fill: 'red'
            },
            {
                rotate: '45',
            },
            {
                rotate: '90',
            },
            {
                inlineSize: '6',
            },
            {
                inlineSize: '20',
            }
        ]
    }
]

const allCases = [
    ...basicCases,
    ...genFillProps(),
    ...genStrokeProps(),
    ...genClipProps(),
    ...genTransformProps(),
    ...genFontProps(),
]


export default function () {
    return (
        <GenMain
            cases={allCases}
            basicProps={basicProps}
            comName='TSpan'
            renderComChildren="测试文本012345678"
        >
        </GenMain>
    )
}