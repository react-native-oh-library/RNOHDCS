/*
 * MIT License
 *
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { useEffect, useState } from 'react';
import { TestSuite, TestCase } from '@rnoh/testerino';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import {
    canvas2Cartesian,
    cartesian2Canvas,
    cartesian2Polar,
    polar2Cartesian,
    polar2Canvas,
    canvas2Polar
} from 'react-native-redash/src/Coordinates'

const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

function Button({ label, onPress }: { onPress: () => void; label: string }) {
    return (
        <TouchableHighlight
            underlayColor={PALETTE.REACT_CYAN_DARK}
            style={{
                paddingVertical: 6,
                paddingHorizontal: 12,
                backgroundColor: PALETTE.REACT_CYAN_LIGHT,
                borderWidth: 2,
                borderColor: PALETTE.REACT_CYAN_DARK,
            }}
            onPress={onPress}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                {label}
            </Text>
        </TouchableHighlight>
    );
}

export default function RedashCoordinatesTest() {
    const [canvas2CartesianText, setCanvas2CartesianText] = useState('');
    const [cartesian2CanvasText, setCartesian2CanvasText] = useState('');
    const [cartesian2PolarText, setCartesian2PolarText] = useState('');
    const [polar2CartesianText, setPolar2CartesianText] = useState('');
    const [polar2CanvasText, setPolar2CanvasText] = useState('');
    const [canvas2PolarText, setCanvas2PolarText] = useState('');

    /** 处理canvas坐标转换为笛卡尔坐标 */
    const handleCanvas2Cartesian = () => {
        const point = canvas2Cartesian({ x: 500, y: 200 }, { x: 500, y: 200 });
        setCanvas2CartesianText(JSON.stringify(point))
    }

    /** 处理笛卡尔坐标转换为canvas坐标 */
    const handleCartesian2Canvas = () => {
        const point = cartesian2Canvas({ x: -500, y: 200 }, { x: 500, y: 200 });
        setCartesian2CanvasText(JSON.stringify(point))
    }

    /** 用于处理笛卡尔坐标转换为极坐标 */
    const handleCartesian2Polar = () => {
        const x = 0;
        const y = 100;
        const center = { x: 100, y: 100 };
        const { theta, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
        setCartesian2PolarText('theta ==' + theta + "  radius==" + radius);
    }

    /** 处理极坐标转换为笛卡尔坐标 */
    const handlePolar2Cartesian = () => {
        const x = 0;
        const y = 100;
        const center = { x: 100, y: 100 };
        const { theta, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
        const { x: x1, y: y1 } = cartesian2Canvas(
            polar2Cartesian({ theta, radius }),
            center
        );
        setPolar2CartesianText('x1 ==' + x1 + "  Math.round(y1)==" + Math.round(y1));
    }

    /** 用于处理极坐标转换为canvas坐标 */
    const handlePolar2Canvas = () => {
        const x = 0;
        const y = 100;
        const center = { x: 100, y: 100 };
        const { theta, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
        const point = polar2Canvas({ theta, radius }, center)
        setPolar2CanvasText(JSON.stringify(point))
    }

    // 用于处理canvas左边转换极坐标
    const handleCanvas2Polar = () => {
        const { theta, radius } = canvas2Polar({ x: -500, y: 200 }, { x: 500, y: 200 });
        setCanvas2PolarText('theta ==' + theta + "  radius==" + radius);
    }

    return (
        <TestSuite name="RedashCoordinatesTest">
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={canvas2CartesianText} handleFunc={handleCanvas2Cartesian} textLabel="canvas2Cartesian: (vectors,center)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('{"x":0,"y":0}');
                }}
                tags={['C_API']}
                itShould="canvas2Cartesian"
            />
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={cartesian2CanvasText} handleFunc={handleCartesian2Canvas} textLabel="cartesian2Canvas: (vectors,center)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('{"x":0,"y":0}');
                }}
                tags={['C_API']}
                itShould="cartesian2Canvas"
            />
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={cartesian2PolarText} handleFunc={handleCartesian2Polar} textLabel="cartesian2Polar(polarPoint,center)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('theta ==-3.141592653589793  radius==100');
                }}
                tags={['C_API']}
                itShould="cartesian2Polar"
            />
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={polar2CartesianText} handleFunc={handlePolar2Cartesian} textLabel="polar2Cartesian: (polarPoint)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('x1 ==0  Math.round(y1)==100');
                }}
                tags={['C_API']}
                itShould="polar2Cartesian"
            />
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={polar2CanvasText} handleFunc={handlePolar2Canvas} textLabel="polar2Canvas: (polarPoint,center)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('{"x":0,"y":100.00000000000001}');
                }}
                tags={['C_API']}
                itShould="polar2Canvas"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={canvas2PolarText} handleFunc={handleCanvas2Polar} textLabel="canvas2Polar: (vectors,center)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('theta ==-3.141592653589793  radius==1000');
                }}
                tags={['C_API']}
                itShould="canvas2Polar"
            />

        </TestSuite>
    );
}

const SetValueView = (props: {
    testText: any;
    handleFunc: () => void
    setState: React.Dispatch<React.SetStateAction<number>>;
    textLabel?: string;
}) => {
    useEffect(() => {
        if (props.testText) {
            props.setState(props.testText);
        }
    }, [props.testText]);
    return (
        <View>
            <Text style={{ flex: 1 }}>{props.textLabel}: {props.testText} </Text>
            <Button label='运行' onPress={() => { props.handleFunc() }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F1F3F5',
    },
    baseText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    titleArea: {
        width: '90%',
        height: '8%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        width: '90%',
        color: '#000000',
        textAlign: 'left',
        fontSize: 30,
    },
    scrollView: {
        width: '90%',
        marginHorizontal: 20,
    },
    inputArea: {
        width: '90%',
        height: '10%',
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    baseArea: {
        width: '100%',
        height: 60,
        borderRadius: 4,
        borderColor: '#000000',
        marginTop: 8,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8
    },
    box: {
        height: 40,
        width: 40,
        marginBottom: 20,
        backgroundColor: '#b58df1',
        borderRadius: 5,
    },
});
