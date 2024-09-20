import {
    RNHoleView,
    RNHole,
    IRNHoleViewAnimation,
    ERNHoleViewTimingFunction,
} from 'react-native-hole-view';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import React, { useCallback, useEffect, useState } from 'react';

interface BasicHolePorps {
    hole: RNHole | RNHole[];
    showImage?: boolean;
}

const BasicHoleDemo: React.FC<BasicHolePorps> = props => {
    const holes = Array.isArray(props.hole) ? [...props.hole] : [props.hole];
    const [showText, setShowText] = useState('');

    const showImage = props.showImage ? true : false;

    return (
        <View>
            {showText.length ? <Text style={{ fontSize: 20 }}>{showText}</Text> : <></>}

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 500,
                }}>
                <Text
                    style={{ flexGrow: 0, flex: 0, padding: 10 }}
                    onPress={() => {
                        setShowText('press Text !');
                    }}>
                    {"Wow! I'm a text inside a hole!"}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        setShowText('press Button !');
                    }}
                    style={{ backgroundColor: 'pink', padding: 10, borderRadius: 5 }}>
                    <Text>{"Wow! I'm a button inside a hole!"}</Text>
                </TouchableOpacity>
                <ScrollView
                    style={{ flexGrow: 0, flex: 0, padding: 10 }}
                    horizontal={true}>
                    <Text numberOfLines={1}>
                        {
                            "Wow! I'm a ScrollView inside a hole! Wow! I'm a ScrollView inside a hole! Wow! I'm a ScrollView inside a hole!"
                        }
                    </Text>
                </ScrollView>
                <RNHoleView
                    pointerEvents="none"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(34,146,231,0.4)',
                    }}
                    holes={holes}>
                    {showImage && (
                        <Image
                            source={{
                                uri: 'https://img0.baidu.com/it/u=3712712192,1784493696&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=300',
                            }} style={{ marginTop: 180, width: '100%', height: 200 }}></Image>
                    )}
                </RNHoleView>
            </View>
        </View>
    );
};

const AnimateBasicHoleView: React.FC<IRNHoleViewAnimation & { showImage?: boolean } & { onAnimatFinish?: () => void }> = props => {
    const [holes, setHoles] = useState<RNHole[]>([]);
    const [animated, setAnimated] = useState<boolean>(false);
    const [animation, setAnimation] = useState<IRNHoleViewAnimation | undefined>(
        undefined,
    );
    const firstHole: RNHole = {
        x: 110,
        y: 195,
        width: 120,
        height: 120,
        borderRadius: 60,
    };
    const secondHole: RNHole = {
        x: 110,
        y: 10,
        width: 120,
        height: 120,
        borderRadius: 60,
    };

    const onPress = useCallback(() => {
        if (animated) {
            setHoles([firstHole]);
        } else {
            setHoles([secondHole]);
        }
        setAnimation({ ...props });
        setAnimated(!animated);
    }, [animated, animation]);

    useEffect(() => {
        onPress();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: 500,
            }}>
            <Text style={{ flexGrow: 0, flex: 0, padding: 10 }}>
                {"Wow! I'm a text inside a hole!"}
            </Text>
            <TouchableOpacity
                onPress={() => { }}
                style={{ backgroundColor: 'pink', padding: 10, borderRadius: 5 }}>
                <Text>{"Wow! I'm a button inside a hole!"}</Text>
            </TouchableOpacity>
            <ScrollView style={{ flexGrow: 0, flex: 0, padding: 10 }} horizontal={true}>
                <Text numberOfLines={1}>
                    {
                        "Wow! I'm a ScrollView inside a hole! Wow! I'm a ScrollView inside a hole! Wow! I'm a ScrollView inside a hole!"
                    }
                </Text>
            </ScrollView>
            <RNHoleView
                pointerEvents="none"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(34,146,231,0.4)',
                }}
                animation={props}
                holes={holes}
                onAnimationFinished={() => {
                    if (props.onAnimatFinish) {
                        props.onAnimatFinish();
                    }
                    setAnimation(undefined);
                }}>
                {props.showImage && (
                    <Image
                        source={{
                            uri: 'https://img0.baidu.com/it/u=3712712192,1784493696&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=300',
                        }} style={{ marginTop: 180, width: '100%', height: 200 }}></Image>
                )}
            </RNHoleView>
            <View
                pointerEvents={'box-none'}
                style={{
                    position: 'absolute',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <TouchableOpacity
                    onPress={onPress}
                    style={{
                        backgroundColor: 'pink',
                        padding: 10,
                        borderRadius: 5,
                        bottom: 50,
                    }}>
                    <Text>{'Animate!'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const HoleViewDemo = () => {
    return (
        <ScrollView>
            <Tester>
                <TestSuite name="hole 位置和圆角测试">
                    <TestCase itShould="x: 10, y: 10, width: 100, height: 100">
                        <BasicHoleDemo
                            hole={{ x: 10, y: 10, width: 100, height: 100 }}></BasicHoleDemo>
                    </TestCase>
                    <TestCase itShould="x: 100, y: 100, width: 100, height: 100">
                        <BasicHoleDemo
                            hole={{ x: 100, y: 100, width: 100, height: 100 }}></BasicHoleDemo>
                    </TestCase>
                    <TestCase itShould="x: 100, y: 100, width: 100, height: 100, borderRadius: 30">
                        <BasicHoleDemo
                            hole={{
                                x: 100,
                                y: 100,
                                width: 100,
                                height: 100,
                                borderRadius: 30,
                            }}></BasicHoleDemo>
                    </TestCase>
                    <TestCase itShould="x: 100, y: 100, width: 100, height: 100, borderRadius: 50">
                        <BasicHoleDemo
                            hole={{
                                x: 100,
                                y: 100,
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                            }}></BasicHoleDemo>
                    </TestCase>
                    <TestCase
                        itShould="{x: 100, y: 100, width: 80, height: 80, borderTopLeftRadius: 40},
                {x: 100, y: 10, width: 80, height: 80, borderTopRightRadius: 40},
                {x: 200, y: 100, width: 80, height: 80, borderBottomLeftRadius: 40},
                {x: 200, y: 10, width: 80, height: 80, borderBottomRightRadius: 40}">
                        <BasicHoleDemo
                            hole={[
                                {
                                    x: 100,
                                    y: 100,
                                    width: 80,
                                    height: 80,
                                    borderTopLeftRadius: 40,
                                },
                                {
                                    x: 100,
                                    y: 10,
                                    width: 80,
                                    height: 80,
                                    borderTopRightRadius: 40,
                                },
                                {
                                    x: 200,
                                    y: 100,
                                    width: 80,
                                    height: 80,
                                    borderBottomLeftRadius: 40,
                                },
                                {
                                    x: 200,
                                    y: 10,
                                    width: 80,
                                    height: 80,
                                    borderBottomRightRadius: 40,
                                },
                            ]}></BasicHoleDemo>
                    </TestCase>
                    <TestCase
                        itShould="{x: 100, y: 100, width: 80, height: 80, borderTopStartRadius: 40},
                {x: 100, y: 10, width: 80, height: 80, borderTopEndRadius: 40},
                {x: 200, y: 100, width: 80, height: 80, borderBottomStartRadius: 40},
                {x: 200, y: 10, width: 80, height: 80, borderBottomEndRadius: 40}">
                        <BasicHoleDemo
                            hole={[
                                {
                                    x: 100,
                                    y: 100,
                                    width: 80,
                                    height: 80,
                                    borderTopStartRadius: 40,
                                },
                                { x: 100, y: 10, width: 80, height: 80, borderTopEndRadius: 40 },
                                {
                                    x: 200,
                                    y: 100,
                                    width: 80,
                                    height: 80,
                                    borderBottomStartRadius: 40,
                                },
                                {
                                    x: 200,
                                    y: 10,
                                    width: 80,
                                    height: 80,
                                    borderBottomEndRadius: 40,
                                },
                            ]}></BasicHoleDemo>
                    </TestCase>
                    <TestCase itShould="x: 100, y: 100, width: 80, height: 80, borderTopStartRadius: 40, isRTL: true">
                        <BasicHoleDemo
                            hole={[
                                {
                                    x: 100,
                                    y: 100,
                                    width: 80,
                                    height: 80,
                                    borderTopStartRadius: 40,
                                    isRTL: true,
                                },
                            ]}></BasicHoleDemo>
                    </TestCase>
                    <TestCase itShould="x: 100, y: 100, width: 80, height: 80, borderTopEndRadius: 40, isRTL: true">
                        <BasicHoleDemo
                            hole={[
                                {
                                    x: 100,
                                    y: 100,
                                    width: 80,
                                    height: 80,
                                    borderTopEndRadius: 40,
                                    isRTL: true,
                                },
                            ]}></BasicHoleDemo>
                    </TestCase>
                    <TestCase itShould="x: 100, y: 100, width: 80, height: 80, borderBottomStartRadius: 40, isRTL: true">
                        <BasicHoleDemo
                            hole={[
                                {
                                    x: 100,
                                    y: 100,
                                    width: 80,
                                    height: 80,
                                    borderBottomStartRadius: 40,
                                    isRTL: true,
                                },
                            ]}></BasicHoleDemo>
                    </TestCase>
                    <TestCase itShould="x: 100, y: 100, width: 80, height: 80, borderBottomEndRadius: 40, isRTL: true">
                        <BasicHoleDemo
                            hole={[
                                {
                                    x: 100,
                                    y: 100,
                                    width: 80,
                                    height: 80,
                                    borderBottomEndRadius: 40,
                                    isRTL: true,
                                },
                            ]}></BasicHoleDemo>
                    </TestCase>
                </TestSuite>
                <TestSuite name="透过hole点击于scroll滑动效果">
                    <TestCase itShould="">
                        <BasicHoleDemo
                            hole={{
                                x: 110,
                                y: 195,
                                width: 120,
                                height: 120,
                                borderRadius: 60,
                                isRTL: true,
                            }}></BasicHoleDemo>
                    </TestCase>
                </TestSuite>

                <TestSuite name="hole 透过子元素">
                    <TestCase itShould="子元素图片">
                        <AnimateBasicHoleView
                            timingFunction={ERNHoleViewTimingFunction.EASE_OUT}
                            duration={500} showImage={true}></AnimateBasicHoleView>
                    </TestCase>
                </TestSuite>

                <TestSuite name="动画">
                    <TestCase itShould="duration: 200, timingFunction: EASE_IN_OUT">
                        <AnimateBasicHoleView
                            timingFunction={ERNHoleViewTimingFunction.EASE_IN_OUT}
                            duration={200}></AnimateBasicHoleView>
                    </TestCase>
                    <TestCase itShould="duration: 1000, timingFunction: EASE_IN_OUT">
                        <AnimateBasicHoleView
                            timingFunction={ERNHoleViewTimingFunction.EASE_IN_OUT}
                            duration={1000}></AnimateBasicHoleView>
                    </TestCase>
                    <TestCase itShould="duration: 500, timingFunction: EASE_IN">
                        <AnimateBasicHoleView
                            timingFunction={ERNHoleViewTimingFunction.EASE_IN}
                            duration={500}></AnimateBasicHoleView>
                    </TestCase>
                    <TestCase itShould="duration: 500, timingFunction: EASE_OUT">
                        <AnimateBasicHoleView
                            timingFunction={ERNHoleViewTimingFunction.EASE_OUT}
                            duration={500}></AnimateBasicHoleView>
                    </TestCase>
                </TestSuite>



                <TestSuite name="动画结束事件">
                    <TestCase itShould="onAnimationFinish" tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <AnimateBasicHoleView
                                    onAnimatFinish={
                                        () => {
                                            setState(true);
                                        }
                                    }
                                    timingFunction={ERNHoleViewTimingFunction.EASE_OUT}
                                    duration={500} showImage={true}></AnimateBasicHoleView>
                            )
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    >
                    </TestCase>
                </TestSuite>

            </Tester>
        </ScrollView>
    );
};

export default HoleViewDemo;
