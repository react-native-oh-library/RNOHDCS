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

import React, {  useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withRepeat, cancelAnimation, withSequence, useDerivedValue } from 'react-native-reanimated';
import { snapPoint } from "react-native-redash/src/Physics"
import { mixColor } from "react-native-redash/src/Colors";
import { useVector } from 'react-native-redash/src/Vectors';
import { useTiming, useSpring, withPause, withBouncing, ReText } from "react-native-redash";

export default function RedashOtherTest() {
    const [mixColorText, setMixColorText] = useState('');

    const [openTiming, setOpenTiming] = useState(false);
    const [openSpring, setOpenSpring] = useState(false);

    const timingValue = useTiming(openTiming ? 20 : 0, {
        duration: 2000,
    });

    const springValue = useSpring(openSpring ? 100 : 0, {
        mass: 1,
        stiffness: 100,
        damping: 10,
        velocity: 0,
    });

    const x = 10;
    const y = 20;
    const vector = useVector(x, y)
    const [vectorText, setVectorText] = useState('');

    const offset = useSharedValue(0);
    const progress = useSharedValue(0);


    const translateAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: offset.value * 2
                },
            ],
        };
    })

    const colorAnimatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: mixColor(progress.value, "#b58df1", "#38ffb3"),
        };
    });

    const handlePress = () => {
        offset.value = withSequence(
            withTiming(-snapPoint(96, 600, [0, 125, 393]), { duration: 1000 }),
            withRepeat(withTiming(snapPoint(96, 600, [0, 125, 393]), { duration: 1000 }), 60, true),
            withTiming(0, { duration: 50 })
        );
    }

    const handleColorPress = () => {
        progress.value = withRepeat(withTiming(1 - progress.value, { duration: 1000 }), 60, true);
    }

    /** 用于处理混合颜色 */
    const handleMixColor = () => {
        const bgc = mixColor(progress.value, "#b58df1", "#38ffb3"); // 使用mixColor函数混合颜色
        setMixColorText(bgc) // 更新背景颜色
    }

    const handleSetVectorText = () => {
        setVectorText(`x: ${vector.x.value}, y: ${vector.y.value}`)
    }

    const handleOpenTiming = () => {
        setOpenTiming(!openTiming);
    }
    const timingAnimateStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: timingValue.value
                },
            ],
        };
    })

    const handleOpenSpring = () => {
        setOpenSpring(!openSpring);
    }
    const springAnimateStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: springValue.value
                },
            ],
        };
    })

    /**
     * withPause 使用
     */
    const pausedValue = useSharedValue(0);
    const paused = useSharedValue(true);
    const pausedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: pausedValue.value
                },
            ],
        };
    });

    useEffect(() => {
        pausedValue.value = withPause(withTiming(100, { duration: 3000 }), paused);
    }, [paused.value]);

    const handlePausePress = () => {
        paused.value = false;
    }

    const handlePauseCancel = () => {
        paused.value = true;
    }

    /**
     * withBouncing 使用
     */
    const bouncValue = useSharedValue(0);
    const bouncStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: bouncValue.value
                },
            ],
        };
    });

    const handleBouncingPress = () => {
        bouncValue.value = withBouncing(withSpring(100, { damping: 10, mass: 1 }), 0, 200);
    }

    const handleBouncingCancel = () => {
        bouncValue.value = 0;
    }

    const [open, setOpen] = useState(false);
    const textOpacity = useSharedValue(open ? 1 : 0);

    const toggleText = () => {
        setOpen(!open);
        textOpacity.value = withTiming(open ? 0 : 1, { duration: 500 });
    };

    const price = useSharedValue(42);
    const formattedPrice = useDerivedValue(() => `${price.value}`.toLocaleString());

    return (
        <View style={[styles.container]}>
            <View style={styles.baseArea}>
                <Text>{mixColorText}</Text>
                <Button color='#841584' title="MixColor" onPress={handleMixColor} />
            </View>
            <View style={styles.baseArea}>
                <View>
                    <Text>{vectorText}</Text>
                </View>
                <Button color='#841584' title="useVector(10, 20)" onPress={handleSetVectorText} />
            </View>
            <View style={styles.baseArea}>
                <View>
                    <Animated.View style={[styles.box, colorAnimatedStyle]} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Button color='#841584' onPress={() => handleColorPress()} title="mixColor 开始" />
                    </View>
                    <View>
                        <Button color='#841584' onPress={() => cancelAnimation(progress)} title="暂停" />
                    </View>
                </View>
            </View>
            <View style={styles.baseArea}>
                <View>
                    <Animated.View style={[styles.box, translateAnimatedStyles]} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Button color='#841584' onPress={() => handlePress()} title="snapPoint 开始" />
                    </View>
                    <View>
                        <Button color='#841584' onPress={() => cancelAnimation(offset)} title="停止" />
                    </View>
                </View>
            </View>
            <View style={styles.baseArea}>
                <View>
                    <Animated.View style={[styles.box, timingAnimateStyle]} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button color='#841584' onPress={() => handleOpenTiming()} title="Timing 开始" />
                </View>
            </View>
            <View style={styles.baseArea}>
                <View>
                    <Animated.View style={[styles.box, springAnimateStyle]} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button color='#841584' onPress={() => handleOpenSpring()} title="Spring 开始" />
                </View>
            </View>
            <View style={styles.baseArea}>
                <View>
                    <Animated.View style={[styles.box, pausedStyle]} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Button color='#841584' onPress={() => handlePausePress()} title="Pause 开始" />
                    </View>
                    <View>
                        <Button color='#841584' onPress={() => handlePauseCancel()} title="暂停" />
                    </View>
                </View>
            </View>
            <View style={styles.baseArea}>
                <View>
                    <Animated.View style={[styles.box, bouncStyle]} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Button color='#841584' onPress={() => handleBouncingPress()} title="Bouncing 开始" />
                    </View>
                    <View>
                        <Button color='#841584' onPress={() => handleBouncingCancel()} title="恢复" />
                    </View>
                </View>
            </View>
            <View style={styles.baseArea}>
                <View>
                    <ReText
                        style={{
                            color: "black",
                            backgroundColor: "#38ffb3",
                            opacity: textOpacity
                        }}
                        text={formattedPrice}
                    />
                </View>
                <View>
                    <Button color='#841584' onPress={() => { toggleText() }} title={open ? 'Close' : 'Open'} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F1F3F5',
        padding: 20,
        justifyContent: 'space-between',
    },
    boxstyle: {
        marginBottom: 10,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
    },
    box: {
        height: 40,
        width: 40,
        marginBottom: 20,
        backgroundColor: '#b58df1',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 8,
    },
});
