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


export default function PathTest() {
    const [createPathText, setCreatePathText] = useState('');
    const [addCurvePathText, setAddCurvePathText] = useState('');
    const [closePathText, setClosePathText] = useState('');
    const [serializePathText, setSerializePathText] = useState('');
    const [parsedPathText, setParsedPathText] = useState('');
    const [interpolatePathText, setInterpolatePathText] = useState('');

    const handleCreatePath = () => {
        const vector = {
            x: 10,
            y: 20
        };
        const path = redash.createPath(vector);
        setCreatePathText(JSON.stringify(path))
    }

    const handleAddCurvePath = () => {
        const vector = {
            x: 200,
            y: 100
        };
        const path = redash.createPath(vector);
        redash.addCurve(path, { c1: { x: 50, y: 50 }, c2: { x: 150, y: 50 }, to: { x: 150, y: 150 } });
        setAddCurvePathText(JSON.stringify(path))
    }

    const handleClosePath = () => {
        const vector = {
            x: 200,
            y: 100
        };
        const path = redash.createPath(vector);
        redash.addCurve(path, { c1: { x: 50, y: 50 }, c2: { x: 150, y: 50 }, to: { x: 150, y: 150 } });
        redash.close(path);
        setClosePathText(JSON.stringify(path))
    }

    const handleSerializePath = () => {
        const vector = {
            x: 200,
            y: 100
        };
        const path = redash.createPath(vector);
        redash.addCurve(path, { c1: { x: 50, y: 50 }, c2: { x: 150, y: 50 }, to: { x: 150, y: 150 } });
        redash.close(path);
        const serializePath = redash.serialize(path);
        setSerializePathText(serializePath)
    }

    const handleParsePath = () => {
        const vector = {
            x: 200,
            y: 100
        };
        const path = redash.createPath(vector);
        redash.addCurve(path, { c1: { x: 50, y: 50 }, c2: { x: 150, y: 50 }, to: { x: 150, y: 150 } });
        redash.close(path);
        const serializePath = redash.serialize(path);
        const parsePath = redash.parse(serializePath);
        setParsedPathText(JSON.stringify(parsePath))
    }

    const handleInterpolatePath = () => {
        const inputRange = [0, 1];
        const outputRange = [
          {
            move: { x: 0, y: 0 },
            curves: [{ c1: { x: 1, y: 1 }, c2: { x: 2, y: 2 }, to: { x: 3, y: 3 } }],
            close: false,
          },
          {
            move: { x: 1, y: 1 },
            curves: [{ c1: { x: 2, y: 2 }, c2: { x: 3, y: 3 }, to: { x: 4, y: 4 } }],
            close: false,
          },
        ];
        const value = 0.5;
        const interpolatePath = redash.interpolatePath(value, inputRange, outputRange);
        setInterpolatePathText(interpolatePath)
    }

    return (
        <TestSuite name="RedashPath">
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={createPathText} handleFunc={handleCreatePath} textLabel="Create Path" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('{"move":{"x":10,"y":20},"curves":[],"close":false}');
                }}
                tags={['C_API']}
                itShould='Create Path'
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={addCurvePathText} handleFunc={handleAddCurvePath} textLabel="AddCurve Path" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq(addCurvePathText);
                }}
                tags={['C_API']}
                itShould='AddCurve Path'
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={closePathText} handleFunc={handleClosePath} textLabel="Close Path" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq(closePathText);
                }}
                tags={['C_API']}
                itShould='Close Path'
            />
                
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={serializePathText} handleFunc={handleSerializePath} textLabel="Serialize Path" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq(serializePathText);
                }}
                tags={['C_API']}
                itShould='Serialize Path 序列化路径为字符串'
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={parsedPathText} handleFunc={handleParsePath} textLabel="Parsed Path" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq(parsedPathText);
                }}
                tags={['C_API']}
                itShould='Parsed Path 解析路径字符串'
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={interpolatePathText} handleFunc={handleInterpolatePath} textLabel="Interpolate Path" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq(redash.serialize({
                        move: { x: 0.5, y: 0.5 },
                        curves: [{ c1: { x: 1.5, y: 1.5 }, c2: { x: 2.5, y: 2.5 }, to: { x: 3.5, y: 3.5 } }],
                        close: false,
                        }));
                }}
                tags={['C_API']}
                itShould='Interpolate Path 插值路径'
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
