import { Alert, View, Text } from 'react-native'
export interface CaseParams {
    type?: | 'mulKey' | 'key-value' | undefined,
    id?: string,
    key?: string,
    values?: string[] | Object[],
    title?: string,
    desc?: string,
    othersProps?: Object,
    showOtherProps?: boolean,
    showBasicProps?: boolean,
    opacity?:string
}

export function genFillProps() {
    return [

        {
            key: 'fill',
            values: ['#000', 'pink', 'green', 'red'],
            title: '测试fill属性',
        },
        {
            key: 'fillOpacity',
            values: ['0.15', '0.5', '1'],
            title: '测试fillOpacity属性'
        },
        {
            key: 'fillRule',
            values: ['evenodd', 'nonzero'], // 'evenodd' | 'nonzero'
            othersProps: {
                fill: 'green'
            }
        },
    ]
}

export function commonProps() {
    return [
        {
            key: 'opacity',
            values: ['0.1', '0.5', '1']
        },
        {
            key: 'responsible',
            values: ['true', 'false']
        },
    ]
}

export function genStrokeProps(): CaseParams[] {
    return [
        {
            key: 'stroke',
            values: ['#000', 'red', 'green'],
            othersProps: {}
        },
        {
            key: 'strokeWidth',
            values: ['1', '4', '8'],
            othersProps: {
                stroke: 'green'
            }
        },
        {
            key: 'strokeOpacity',
            values: ['0.1', '0.5', '1'],
            othersProps: {
                stroke: 'green',
                strokeWidth: '8',
            }
        },
        {
            key: 'strokeDasharray',
            values: ['5, 5', '20, 20'],
            othersProps: {
                stroke: 'green',
                strokeWidth: '8',
            }
        },
        {
            key: 'strokeDashoffset',
            values: ['10', '50', '80'],
            othersProps: {
                stroke: 'green',
                strokeWidth: '8',
                strokeDasharray: "20 20"
            }
        },
        {
            key: 'strokeLinecap',
            values: ['butt', 'round', 'square'],
            othersProps: {
                stroke: 'green',
                strokeWidth: 8,
                y: 20,
                x: 10
            }
        },
        {
            key: 'strokeLinejoin',
            values: ['miter', 'bevel', 'round'],
            othersProps: {
                stroke: 'green',
                strokeWidth: 8,
            }
        },
        {
            key: 'strokeMiterlimit',
            values: ['10', '20', '30'],
            othersProps: {
                stroke: 'green',
                strokeWidth: '8',
            }
        },
        {
            key: 'vectorEffect',
            values: ['none', 'non-scaling-stroke', 'nonScalingStroke', 'default', 'uri', 'inherit'],
            othersProps: {
                stroke: 'green',
                strokeWidth: '8',
            }
        },
    ]
}
`
stroke?: ColorValue
strokeWidth?: NumberProp
strokeOpacity?: NumberProp
strokeDasharray?: ReadonlyArray<NumberProp> | NumberProp
strokeDashoffset?: NumberProp
strokeLinecap?: Linecap
strokeLinejoin?: Linejoin
strokeMiterlimit?: NumberProp
vectorEffect?: VectorEffect

vectorEffect?:
    | 'none'
    | 'non-scaling-stroke'
    | 'nonScalingStroke'
    | 'default'
    | 'inherit'
    | 'uri'
`

export function genClipProps(): CaseParams[] {
    return [
        {
            key: 'clipRule',
            values: ['evenodd', 'nonzero']
        },
        // {
        //     key: 'clipPath',
        //     values: []
        // }
    ]
}


export function genTransformProps(): CaseParams[] {
    return [
        {
            key: 'translate',
            values: ['10', '20', '30']
        },
        {
            key: 'translateX',
            values: ['10', '20', '30']
        },
        {
            key: 'translateY',
            values: ['10', '20', '30']
        },
        {
            key: 'origin',
            values: ['0, 0', '30, 30', '60, 60'],
            othersProps: {
                rotation: '45'
            },
            showOtherProps: true
        },
        {
            key: 'originx',
            values:['10', '20', '30']
        },
        {
            key: 'originy',
            values:['10', '20', '30']
        },
        {
            key: 'scale',
            values: ['0.7', '1', '2']
        },
        {
            key: 'scaleX',
            values: ['0.7', '1', '2']
        },
        {
            key: 'scaleY',
            values: ['0.7', '1', '2']
        },
        {
            key: 'rotation',
            values: ['0', '45', '-45', '60']
        },
        {
            key: 'x',
            values: ['10', '20', '30']
        },
        {
            key: 'y',
            values: ['10', '20', '30']
        },
        {
            key: 'transform',
            values: ['translate(10, 10)', 'scale(2)', 'rotate(45)']
        },
    ]
}
`
translate?: NumberArray
translateX?: NumberProp
translateY?: NumberProp
origin?: NumberArray
originX?: NumberProp
originY?: NumberProp
scale?: NumberArray
scaleX?: NumberProp
scaleY?: NumberProp
rotation?: NumberProp
x?: NumberArray
y?: NumberArray
transform?:
    | ColumnMajorTransformMatrix
    | string
    | TransformsStyle['transform']
`

export function genResponderProps(): CaseParams[] {
    return [
        {
            key: 'pointerEvents',
            values: ['box-none', 'none', 'box-only', 'auto']
        },
    ]
}
`
pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto'
`

export function genTouchableProps(name: string, { disabled = false } = {}) {
    return {
        disabled,
        onPress () {
            console.log(`Triggered onPress of the ${name}`)
            Alert.alert(`Triggered onPress of the ${name}`)
        },
        onPressIn () {
            console.log(`Triggered onPressIn of the ${name}`)
        },
        onLongPress() {
            console.log(`Triggered onLongPress of the ${name}`)
        },
        onPressOut() {
            console.log(`Triggered onPressOut of the ${name}`)
        },
        delayPressIn: 1000,
        delayPressOut: 1000
    }
}

export function genAccessibilityProps(): CaseParams[] {
    return [
        {
            key: 'testID',
            values: []
        },
        {
            key: 'accessible',
            values: ['true', 'false']
        },
        {
            key: 'accessibilityLabel',
            values: ['video', 'music', 'news'],
            othersProps: {
                accessible: 'true'
            },
            showOtherProps: true
        },
    ]
}

export function genViewProps(): CaseParams[] {
    return [
        {
            key: 'style',
            values: [
                {
                    opacity: 0.3
                }
            ]
        },
        {
            key: 'hitSlop',
            values: [
                {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                {
                    top: 10,
                    left: 10,
                    bottom: 10,
                    right: 10
                },
                {
                    top: 30,
                    left: 30,
                    bottom: 0,
                    right: 0
                },
            ]
        },
        {
            key: 'pointerEvents', // 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
            values: ['box-none', 'none', 'box-only', 'auto']
        },
        {
            key: 'removeClippedSubviews',
            values: [true, false]
        },
        // testID nativeID
        {
            key: 'shouldRasterizeIOS',
            values: [true, false]
        }
    ]
}

export function genViewPropsFuncs(name: string) {
    return {
        onLayout () {
            console.log(`Triggered onLayout of the ${name}`)
        }
    }
}

export function genCommonPathProps(): CaseParams[] {
    return [
        {
            key: 'opacity',
            values: ['0.1', '0.5', '1']
        },
        ...genFillProps(),
        ...genStrokeProps(),
        ...genTransformProps(),
        ...genAccessibilityProps()
    ]
}
`
| 'baseline'
| 'text-bottom'
| 'alphabetic'
| 'ideographic'
| 'middle'
| 'central'
| 'mathematical'
| 'text-top'
| 'bottom'
| 'center'
| 'top'
| 'text-before-edge'
| 'text-after-edge'
| 'before-edge'
| 'after-edge'
| 'hanging';
`
export function genTextSpecificProps(): CaseParams[] {
    return [
        {
            key: 'alignmentBaseline',
            values: ['baseline', 'text-bottom', 'alphabetic', 'ideographic', 'middle', 'central', 'mathematical', 'text-top', 'bottom', 'center', 'top', 'text-before-edge', 'text-after-edge', 'before-edge', 'after-edge', 'hanging']
        },
        {
            key: 'baselineShift',
            values: ['sub', 'super', 'baseline']
        },
        // {
        //     key: 'verticalAlign',
        //     values: ['baseline', 'top', 'middle', 'bottom', 'sub', 'text-top']
        // },
        {
            key: 'lengthAdjust',
            values: ['spacing', 'spacingAndGlyphs']
        },
        {
            key: 'textLength',
            values: ['5', '10', '150%']
        },
        {
            key: 'fontData',
            values: [
                {
                    fontSize: '100',
                }
            ]
        },
        {
            key: 'fontFeatureSettings',
            values: ['normal', '"liga" 0', 'tnum', 'smcp']
        },
    ]
}

export function genFontProps(): CaseParams[] {
    return [
        {
            key: 'fontWeight',
            values: ['normal', 'bold', 'bolder', 'lighter'],
            othersProps: {
                fontSize: '18'
            }
        },
        {
            key: 'fontSize',
            values: ['12', '24', '48']
        },
        {
            key: 'fontFamily',
            values: ['NotoSansVai-Regular', 'HarmonyOS Sans Condensed', 'HarmonyOS_Sans_Digit_Medium', 'Noto Sans Pau Cin Hau'],
        },
        {
            key: 'textAnchor',
            values: ['start', 'middle', 'end'] // 'start' | 'middle' | 'end'
        },
        {
            key: 'letterSpacing',
            values: ['1', '4', '10']
        },
        {
            key: 'wordSpacing',
            values: ['1', '4', '10']
        },
        {
            key: 'fontStyle',
            values: ['normal', 'italic', 'oblique']
        },
        {
            key: 'textDecoration',
            values: ['none', 'underline', 'overline', 'line-through', 'blink']
        },
        // {
        //     key: 'fontVariantLigatures',
        //     values: ['normal', 'no-common-ligatures', 'common-ligatures']
        // }
    ]
}

export function genTextCommonProps() {

}

export function genAdditionalProps(name: string) {
    return {
        onError() {
            console.log(`Triggered onError of the ${name}`)
            Alert.alert(`Triggered onError of the ${name}`)
        },
        onLoad() {
            console.log(`Triggered onLoad of the ${name}`)
        },
        fallback: <Text>fallback:err occured</Text>
    }
}

export function genPointerEvents(name: string) {
    return {
        onPointerEnter() {
            console.log(`Triggered onPointerEnter of the ${name}`)
        },
        onPointerEnterCapture() {
            console.log(`Triggered onPointerEnterCapture of the ${name}`)
        },
        onPointerLeave() {
            console.log(`Triggered onPointerLeave of the ${name}`)
        },
        onPointerLeaveCapture() {
            console.log(`Triggered onPointerLeaveCapture of the ${name}`)
        },
        onPointerMove() {
            console.log(`Triggered onPointerMove of the ${name}`)
        },
        onPointerMoveCapture() {
            console.log(`Triggered onPointerMoveCapture of the ${name}`)
        },
        onPointerEonPointerCancelnter() {
            console.log(`Triggered onPointerCancel of the ${name}`)
        },
        onPointerCancelCapture() {
            console.log(`Triggered onPointerCancelCapture of the ${name}`)
        },
        onPointerDown() {
            console.log(`Triggered onPointerDown of the ${name}`)
        },
        onPointerDownCapture() {
            console.log(`Triggered onPointerDownCapture of the ${name}`)
        },
        onPointerUp() {
            console.log(`Triggered onPointerUp of the ${name}`)
        },
        onPointerUpCapture() {
            console.log(`Triggered onPointerUpCapture of the ${name}`)
        },
    }
}

export function genCommonMarkerProps() {

}

export function genGestureResponderHandlers(name: string) {
    return {
        onStartShouldSetResponder() {
            console.log(`Triggered onStartShouldSetResponder of the ${name}`)
        },
        onMoveShouldSetResponder() {
            console.log(`Triggered onMoveShouldSetResponder of the ${name}`)
        },
        onResponderEnd () {
            console.log(`Triggered onResponderEnd of the ${name}`)
        },
        onResponderGrant() {
            console.log(`Triggered onResponderGrant of the ${name}`)
        },
        onResponderReject() {
            console.log(`Triggered onResponderReject of the ${name}`)
        },  
        onResponderMove() {
            console.log(`Triggered onResponderMove of the ${name}`)
        },
        onResponderRelease() {
            console.log(`Triggered onResponderRelease of the ${name}`)
        },
        onResponderStart() {
            console.log(`Triggered onResponderStart of the ${name}`)
        },
        onResponderTerminationRequest() {
            console.log(`Triggered onResponderTerminationRequest of the ${name}`)
        },
        onResponderTerminate() {
            console.log(`Triggered onResponderTerminate of the ${name}`)
        },
        onStartShouldSetResponderCapture() {
            console.log(`Triggered onStartShouldSetResponderCapture of the ${name}`)
        },
        onMoveShouldSetResponderCapture() {
            console.log(`Triggered onMoveShouldSetResponderCapture of the ${name}`)
        }
    }
}