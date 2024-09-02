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
import {
    canvas2Cartesian,
    cartesian2Canvas,
    cartesian2Polar,
    polar2Cartesian,
    polar2Canvas,
    canvas2Polar
} from 'react-native-redash/src/Coordinates'

// 导出组件
export default function RadashCoordinatesDemo() {
    const [text, setText] = useState('');

    /** 处理canvas坐标转换为笛卡尔坐标 */
    const handleCanvas2Cartesian = () => {
        const point = canvas2Cartesian({ x: 500, y: 200 }, { x: 500, y: 200 });
        setText(JSON.stringify(point))
    }

    /** 处理笛卡尔坐标转换为canvas坐标 */
    const handleCartesian2Canvas = () => {
        const point = cartesian2Canvas({ x: -500, y: 200 }, { x: 500, y: 200 });
        setText(JSON.stringify(point))
    }

    /** 用于处理笛卡尔坐标转换为极坐标 */
    const handleCartesian2Polar = () => {
        const x = 0;
        const y = 100;
        const center = { x: 100, y: 100 };
        const { theta, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
        setText('theta ==' + theta + "  radius==" + radius);
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
        setText('x1 ==' + x1 + "  Math.round(y1)==" + Math.round(y1));
    }

    /** 用于处理极坐标转换为canvas坐标 */
    const handlePolar2Canvas = () => {
        const x = 0;
        const y = 100;
        const center = { x: 100, y: 100 };
        const { theta, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
        const point = polar2Canvas({ theta, radius }, center)
        setText(JSON.stringify(point))
    }

    // 用于处理canvas左边转换极坐标
    const handleCanvas2Polar = () => {
        const { theta, radius } = canvas2Polar({ x: -500, y: 200 }, { x: 500, y: 200 });
        setText('theta ==' + theta + "  radius==" + radius);
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Coordinates</Text>
            </View>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {text}
                </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>canvas2Cartesian</Text>
                        <Button title='运行' color='#841584' onPress={handleCanvas2Cartesian}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>cartesian2Canvas</Text>
                        <Button title='运行' color='#841584' onPress={handleCartesian2Canvas}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>cartesian2Polar</Text>
                        <Button title='运行' color='#841584' onPress={handleCartesian2Polar}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>polar2Cartesian</Text>
                        <Button title='运行' color='#841584' onPress={handlePolar2Cartesian}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>polar2Canvas</Text>
                        <Button title='运行' color='#841584' onPress={handlePolar2Canvas}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>canvas2Polar</Text>
                        <Button title='运行' color='#841584' onPress={handleCanvas2Polar}></Button>
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
