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
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withRepeat, cancelAnimation, withSequence, useDerivedValue } from 'react-native-reanimated';
import { snapPoint } from "react-native-redash/src/Physics"
import { mixColor } from "react-native-redash/src/Colors";
import { useVector } from 'react-native-redash/src/Vectors';
import { useTiming, useSpring, withPause, withBouncing, ReText } from "react-native-redash";

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

export default function RedashOtherTest() {
    const [mixColorText, setMixColorText] = useState(''); // 已添加
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
    const [vectorText, setVectorText] = useState(''); // 设置向量

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

    const handleOpenTiming = (setState: Function) => {
        setState(true)
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

    const handleOpenSpring = (setState: Function) => {
        setState(true)
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

    pausedValue.value = withPause(withTiming(100, { duration: 3000 }), paused);
    const handlePausePress = (setState: Function) => {
        setState(true)
        paused.value = false;
    }

    const handlePauseCancel = () => {
        paused.value = true;
    }

    /**
     * withBouncing 使用
     */
    const bouncValue = useSharedValue(0);
    const bouncd = useSharedValue(true);
    const bouncStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: bouncValue.value
                },
            ],
        };
    });

    const handleBouncingPress = (setState: Function) => {
        setState(true)
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
        <TestSuite name="RedashOtherTest">

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={mixColorText} handleFunc={handleMixColor} textLabel="mixColorText" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq(mixColorText);
                }}
                tags={['C_API']}
                itShould="mixColor Text"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => {
                    return (
                        <View style={styles.baseArea}>
                            <View>
                                <Animated.View style={[styles.box, colorAnimatedStyle]} />
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Button onPress={() => handleColorPress()} label="Start Animated" />
                                <Button onPress={() => cancelAnimation(progress)} label="Stop Animated" />
                            </View>
                        </View>
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('x: 10, y: 20');
                }}
                tags={['C_API']}
                itShould="测试颜色变化"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => <SetValueView setState={setState} testText={vectorText} handleFunc={handleSetVectorText} textLabel="Vector" />}
                assert={({ state, expect }) => {
                    expect(state).to.be.eq('x: 10, y: 20');
                }}
                tags={['C_API']}
                itShould="设置vector"
            />
            
            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => {
                    return (
                        <View style={styles.baseArea}>
                            <Animated.View style={[styles.box, translateAnimatedStyles]} />
                            <View style={{ marginBottom: 10 }}>
                                <Button onPress={() => { handlePress(); setState(true) }} label="Start Animated" />
                                <Button onPress={() => cancelAnimation(offset)} label="Stop Animated" />
                            </View>
                        </View>
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
                tags={['C_API']}
                itShould="测试SnapPoint"
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => {
                    return (
                        <View style={styles.baseArea}>
                            <Animated.View style={[styles.box, timingAnimateStyle]}>
                            </Animated.View>
                            <View>
                                <Button onPress={() => handleOpenTiming(setState)} label="Start Animated" />
                            </View>
                        </View>
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
                tags={['C_API']}
                itShould="Time-based animation."
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => {
                    return (
                        <View style={styles.baseArea}>
                            <Animated.View style={[styles.box, springAnimateStyle]}>
                            </Animated.View>
                            <View>
                                <Button onPress={() => handleOpenSpring(setState)} label="Start Animated" />
                            </View>
                        </View>
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
                tags={['C_API']}
                itShould="Animation with spring effect."
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => {
                    return (
                        <View style={styles.baseArea}>
                            <Animated.View style={[styles.box, pausedStyle]}></Animated.View>
                            <View>
                                <Button onPress={() => handlePausePress(setState)} label="Start Animated" />
                                <Button onPress={() => handlePauseCancel()} label="Stop Animated" />
                            </View>

                        </View>
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
                tags={['C_API']}
                itShould="Control animation pause."
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => {
                    return (
                        <View style={styles.baseArea}>
                            <Animated.View style={[styles.box, bouncStyle]}></Animated.View>
                            <View>
                                <Button onPress={() => handleBouncingPress(setState)} label="Start Animated" />
                                <Button onPress={() => handleBouncingCancel()} label="Back Animated" />
                            </View>

                        </View>
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
                tags={['C_API']}
                itShould="To add a bounce behavior based on an animation."
            />

            <TestCase
                initialState={undefined as any}
                arrange={({ setState }) => {
                    return (
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
                                <Button onPress={() => { toggleText(); setState(true) } } label={open ? 'Close' : 'Open'} />
                            </View>
                        </View>
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
                tags={['C_API']}
                itShould="ReText show text."
            />
        </TestSuite>
    );
}

const SetValueView = (props: {
    testText: any;
    handleFunc: (setState?: Function) => void
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
        justifyContent: 'space-between',
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
