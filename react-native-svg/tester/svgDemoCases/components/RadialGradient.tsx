import React from "react";
// import  from 'react-native-svg'
import { Svg, Circle, Stop } from 'react-native-svg'
import { GenDefs } from './gen'
import { genTransformProps, CaseParams } from '../genUtil'
const basicProps = {
    id: 'myGradient',
    cx: '50%',
    cy: '50%',
    r: '30%'
}

const basicCases: CaseParams[] = [
    {
        type: 'mulKey',
        id: 'pattern1',
        values: [
            {
                cx: '50%',
                cy: '50%'
            },
            {
                cx: '40%',
                cy: '40%',
            },
            {
                cx: '80%',
                cy: '80%'
            },
            {
                cx: '80%',
                cy: '80%',
                fx: '10%',
            },
            {
                cx: '80%',
                cy: '80%',
                fy: '10%',
            },
        ]
    },
    {
        key: 'r',
        values: ['10%', '50%']
    },
    {
        key: 'rx',
        values: ['10%', '50%']
    },
    {
        key: 'ry',
        values: ['10%', '50%']
    },
    {
        key: 'gradientUnits',
        values: ['userSpaceOnUse', 'objectBoundingBox']
    },
    {
        key: 'gradientTransform',
        values: ['skewX(20) translate(-35, 0)', 'translate(-35, 0)']
    }
]

const allCases = [
    ...basicCases,
]
const EffectCom = (
    <Circle cx="50" cy="50" r="40" fill={`url(#myGradient)`} />
)
const DefChildren = (
    [
        <Stop offset="30%" stopColor="yellow" />,
        <Stop offset="95%" stopColor="red" />
    ]
)


export default function () {
    return (
        <GenDefs
            cases={allCases}
            basicProps={basicProps}
            renderComChildren={DefChildren}
            EffectCom={EffectCom}
            defName="RadialGradient"
        >
        </GenDefs>
    )
}