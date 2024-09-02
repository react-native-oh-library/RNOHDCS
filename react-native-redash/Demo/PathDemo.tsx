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

import React, { useState } from 'react';
import { StyleSheet, Text, Button, ScrollView, View } from 'react-native';
import * as redash from 'react-native-redash';

// 导出组件
export default function RadashPathDemo() {
    const [text, setText] = useState('');

    const handleCreatePath = () => {
        const vector = {
            x: 10,
            y: 20
        };
        setText(JSON.stringify(redash.createPath(vector)))
    }

    const handleAddCurvePath = () => {
        const vector = {
            x: 200,
            y: 100
        };
        const path = redash.createPath(vector);
        redash.addCurve(path, { c1: { x: 50, y: 50 }, c2: { x: 150, y: 50 }, to: { x: 150, y: 150 } });
        setText(JSON.stringify(path))
    }

    const handleClosePath = () => {
        const vector = {
            x: 200,
            y: 100
        };
        const path = redash.createPath(vector);
        redash.addCurve(path, { c1: { x: 50, y: 50 }, c2: { x: 150, y: 50 }, to: { x: 150, y: 150 } });
        redash.close(path);
        setText(JSON.stringify(path))
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
        setText(serializePath)
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
        setText(JSON.stringify(parsePath))
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
        setText(JSON.stringify(interpolatePath))
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Path</Text>
            </View>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {text}
                </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>mix(0, 10, 20)</Text>
                        <Button title='运行' color='#841584' onPress={handleCreatePath}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>addCurvePath</Text>
                        <Button title='运行' color='#841584' onPress={handleAddCurvePath}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>closePath</Text>
                        <Button title='运行' color='#841584' onPress={handleClosePath}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>serializePath</Text>
                        <Button title='运行' color='#841584' onPress={handleSerializePath}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>parsePath</Text>
                        <Button title='运行' color='#841584' onPress={handleParsePath}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>interpolatePath</Text>
                        <Button title='运行' color='#841584' onPress={handleInterpolatePath}></Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        height: 30,
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
    }
});
