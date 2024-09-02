import React from "react";
// import  from 'react-native-svg'
import { Svg, Circle } from 'react-native-svg'
import { GenMain } from './gen'
import { genTransformProps, genStrokeProps,genTouchableProps, genFillProps, CaseParams } from '../genUtil'
const basicProps = {
    cx: '50',
    cy: '50',
    r: '30',
}

const basicCases: CaseParams[] = [
    {
        type: 'mulKey',
        id: 'circle1',
        values: [
            {
                cx: 30,
                cy: 60,
                r: '30',
            },
            {
                cx: 90,
                cy: 60,
                r: '30',
                fill: 'red'
            },
            {
                cx: 30,
                cy: 60,
                r: 20,
                opacity: '0.3'
            },
        ],
        othersProps: {
            fill: 'green'
        },
        showOtherProps: true
    }
]


const allCases = [
    ...basicCases,
    ...genFillProps(),
    ...genStrokeProps(),
    ...genTransformProps()
]

const bindFunc = {
    ...genTouchableProps('Circle'),
  };

function GenCircle () {
    return <GenMain
                cases={allCases}
                basicProps={basicProps}
                comName='Circle'
                bindFunc={bindFunc}
            />            
}

export default GenCircle