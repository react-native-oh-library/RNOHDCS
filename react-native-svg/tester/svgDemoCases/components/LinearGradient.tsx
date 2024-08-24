import React from "react";
// import  from 'react-native-svg'
import { Svg, Circle, Stop } from 'react-native-svg'
import { GenDefs } from './gen'
import { genTransformProps, CaseParams } from '../genUtil'
const basicProps = {
    id: 'myGradient',
    x1: '50%',
    y1: '50%',
    x2: '80%',
    y2: '80%'
}

const basicCases: CaseParams[] = [
    {
        type: 'mulKey',
        id: 'pattern1',
        values: [
            {
                x1: '50%',
                y1: '50%',
                x2: '80%',
                y2: '80%'
            },
            {
                x1: '30%',
                y1: '50%',
                x2: '80%',
                y2: '80%'
            },
            {
                x1: '30%',
                y1: '30%',
                x2: '80%',
                y2: '80%'
            },
            {
                x1: '30%',
                y1: '30%',
                x2: '60%',
                y2: '80%'
            },
        ]
    },
    {
        key: 'gradientUnits',
        values: ['userSpaceOnUse', 'objectBoundingBox'],
        othersProps: {
            x1: '20%',
            y1: '50%',
            x2: '70%',
            y2: '80%'
        },
    },
    {
        key: 'gradientTransform',
        values: ['skewX(20) translate(-35, 0)', 'translate(5, 6)']
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
            defName="LinearGradient"
        >
        </GenDefs>
    )
}