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
import { mix, round, bin, clamp, cubicBezier, avg, between, toRad, toDeg, cubicBezierYForX } from 'react-native-redash/src/Math';
import { useVector } from 'react-native-redash/src/Vectors';
import * as redash from 'react-native-redash'


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


export default function RedashMathTest() {
    const [minText, setMixText] = useState('');
    const [binText, setBinText] = useState('');
    const [toRadText, setToRadText] = useState('');
    const [toDegText, setToDegText] = useState('');
    const [clampText, setClampText] = useState('');
    const [avgText, setAvgText] = useState('');
    const [betweenText, setBetweenText] = useState('');
    const [roundText, setRoundText] = useState('');
    const [cubicBezierText, setCubicBezierText] = useState('');
    const [cubicBezierYForXText, setCubicBezierYForXText] = useState('');

    /** mix在x和y之间执行线性插值，使用在它们之间加权。返回值计算为x _ (1 - value) + y _ value */
    const handleMin = () => {
        const mixre = mix(0, 10, 20);
        setMixText(mixre.toString())
    }

    /** 处理四舍五入 */
    const handleRound = () => {
        const roundre = round(5.123, 0);
        setRoundText(roundre.toString());
    }

    /** 处理二进制转换 */
    const handleBin = () => {
        const binre = bin(true);
        setBinText(binre.toString())
    }
    
    /** 处理在给定范围内的值 */
    const handleBetween = () => {
        const betweenre = between(-1, 0, 100);
        setBetweenText(betweenre.toString())
    }

    /** 处理限制在给定范围内的值 */
    const handleClamp = () => {
        const clampre = clamp(-1, 0, 100);
        setClampText(clampre.toString());
    }

    /** 处理贝塞尔曲线 */
    const handleCubicBezier = () => {
        const cubicBezire = cubicBezier(1, 0, 0.1, 0.1, 1);
        setCubicBezierText(cubicBezire.toString());
    }

    /** 处理贝塞尔曲线 */
    const handleCubicBezierYForX = () => {
        const x1 = 116;
        const from = redash.vec.create(59, 218);
        const c1 = redash.vec.create(131, 39);
        const c2 = redash.vec.create(204, 223);
        const to = redash.vec.create(227, 89);
        const cubicBezireYForX = cubicBezierYForX(x1, from, c1, c2, to);
        console.log('处理贝塞尔曲线', cubicBezireYForX);
        
        setCubicBezierYForXText(cubicBezireYForX.toString());
    }

    /** 处理平均值 */
    const handleAvg = () => {
        const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const avgs = avg(values)
        setAvgText(avgs.toString())
    }

    /** 处理角度转弧度 */
    const handleToRad = () => {
        const toRadre = toRad(180);
        setToRadText(toRadre.toString());
    }

    /** 处理弧度转角度 */
    const handleToDeg = () => {
        const toDegre = toDeg(Math.PI);
        setToDegText(toDegre.toString())
    }


    return (
        <TestSuite name="RedashMath">
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={minText} handleFunc={handleMin} textLabel="mix(0, 10, 20)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('10');
                }}
                tags={['C_API']}
                itShould="onMix"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={binText} handleFunc={handleBin} textLabel="bin(true)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('1');
                }}
                tags={['C_API']}
                itShould="bin"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={toRadText} handleFunc={handleToRad} textLabel="toRad(180)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('3.141592653589793');
                }}
                tags={['C_API']}
                itShould="toRad"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={toDegText} handleFunc={handleToDeg} textLabel="toDeg(Math.PI): " />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('180');
                }}
                tags={['C_API']}
                itShould="toDeg"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={clampText} handleFunc={handleClamp} textLabel="clamp(-1, 0, 100)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('0');
                }}
                tags={['C_API']}
                itShould="clamp"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={avgText} handleFunc={handleAvg} textLabel="avg([1,2,3,4,5,6,7,8,9,10])" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('5.5');
                }}
                tags={['C_API']}
                itShould="avg"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={betweenText} handleFunc={handleBetween} textLabel="between(-1, 0, 100)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('false');
                }}
                tags={['C_API']}
                itShould="between"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={roundText} handleFunc={handleRound} textLabel="roundText(5.123, 0)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('5');
                }}
                tags={['C_API']}
                itShould="roundText"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={cubicBezierText} handleFunc={handleCubicBezier} textLabel="cubicBezier(1, 0, 0.1, 0.1, 1)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('1');
                }}
                tags={['C_API']}
                itShould="cubicBezier"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={cubicBezierYForXText} handleFunc={handleCubicBezierYForX} textLabel="cubicBezierYForX(x1, from, c1, c2, to)" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq(cubicBezierYForXText);
                }}
                tags={['C_API']}
                itShould="cubicBezierYForX"
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
