import React, { useRef } from "react";
// import  from 'react-native-svg'
import { Svg, Circle, Polygon, Text } from 'react-native-svg'
import { GenMain, TestItem } from './gen'
import { genTransformProps, genFillProps, CaseParams } from '../genUtil'
import { View, Text as QText } from "react-native";
const basicProps = {
    points: "40,5 70,80 25,95"
}

const allCases = [
    ...genFillProps(),
    ...genTransformProps()
]


export default function () {
    const polyRef = useRef(null)
    return <GenMain
                cases={allCases}
                basicProps={basicProps}
                comName='Polygon'
            >
                <TestItem desc="test setNativeProps1">
                        <View style={{
                            height: 30
                        }}>
                            <QText
                                onPress={() => {
                                    console.log("======setNativeProps====");
                                    (polyRef.current)?.setNativeProps({
                                        points:"40,5 70,80 100,95"
                                    })
                                }}
                            >
                                press here to set points="40,5 70,80 100,95"
                            </QText>
                        </View>
                    <View
                        style={{
                            height: 100,
                            borderWidth: 1
                        }}
                    >
                        <Svg width={'100%'} height={'100%'}>
                            <Polygon ref={polyRef} points="40,5 70,80 3,95" fill={'green'}></Polygon>
                        </Svg>
                    </View>
                </TestItem>
                </GenMain>
}