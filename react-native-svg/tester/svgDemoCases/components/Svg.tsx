import React from "react";
// import  from 'react-native-svg'
import { Circle, Rect } from 'react-native-svg'
import { GenMain } from './gen'
import { genTransformProps, genStrokeProps, genFillProps, genViewProps, genResponderProps, genTouchableProps, CaseParams } from '../genUtil'
const basicProps = {
    title: 'I am Svg',
    width: '70',
    height: '30',
    viewBox: '0 0 100 100'
}

const alignValues = ['none', 'xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax']
// const meeetOrSliceValues = ['meet', 'slice']

const preserveAspectRatioValues: string[] = [];
alignValues.forEach(align => {
    preserveAspectRatioValues.push(`${align} meet`)
    preserveAspectRatioValues.push(`${align} slice`)
})

const preserveAspectRatioCases: CaseParams = {
    key: 'preserveAspectRatio',
    values: preserveAspectRatioValues,
    othersProps: {
        width: '70',
        height: '50',
        viewBox: '0 0 100 100'
    },
    showOtherProps: true
}

const basicCases: CaseParams[] = [
    {
        type: 'mulKey',
        id: 'svg1',
        values: [
            {
                width: 30,
                height: 60,
                viewBox: '0 0 50 100'
            },
            {
                width: 30,
                height: 60,
                fill: 'red',
                viewBox: '0 0 100 100'
            },
            {
                width: 90,
                height: 60,
                fill: 'green',
                viewBox: '0 0 200 100'
            },
            {
                width: 90,
                height: 60,
                fill: 'green',
                viewBox: '-20 -20 200 100'
            },
        ]
    },
    preserveAspectRatioCases
]

const allCases = [
    ...basicCases,
    ...genFillProps(),
    ...genViewProps(),
]

const bindFunc = {
    ...genTouchableProps('Svg'),
  };

export default function () {
    return (
        <GenMain
            cases={allCases}
            basicProps={basicProps}
            comName='Svg'
            noSvg={true}
            bindFunc={bindFunc}
            renderComChildren={<Circle cx="50" cy="50" r="40" />}
        >
        </GenMain>
    )
}