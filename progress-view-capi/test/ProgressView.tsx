import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    ScrollView,
    Button
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { ProgressView } from "@react-native-community/progress-view";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressView: {
        marginTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10,
    },
    sliders: {
        margin: 20,
        paddingBottom: 80,
    },
    title: {
        fontSize: 30,
    },
    sliderOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sliderMiddle: {
        height: 80,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    sliderSmall: {
        marginLeft: 20,
        marginRight: 20,
    },
});

export default function ProgressViewDemo() {
    const [getInitStatu_1progress, setGetInitStatu_1progressProgress] = useState(0)
    const [getInitStatu_2progress, setGetInitStatu_2progressProgress] = useState(0.4)
    const [getInitStatu_2progress_bar, setGetInitStatu_2progressProgress_bar] = useState(0.4)
    const [progressTintColor, setProgressTintColor] = useState("red")
    const [progressTintColorBar, setProgressTintColorBar] = useState("red")
    const [progressViewStyle, setProgressViewStyle] = useState('default')
    return (
        <Tester>
            <ScrollView>
                <TestSuite name="react-native-community/progress-view">
                    <TestCase
                        key={"progress number change"}
                        itShould={`change progress`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <ProgressView
                                        style={styles.progressView}
                                        progress={getInitStatu_2progress}
                                        testID={'p2'}

                                    />
                                    <Button title={"add 0.1"} onPress={() => {
                                        if (getInitStatu_2progress < 1.1) {
                                            setGetInitStatu_2progressProgress(getInitStatu_2progress + 0.1)
                                            setState(true)
                                        }
                                    }}></Button>
                                    <Button title={"sub 0.1"} onPress={() => {
                                        if (getInitStatu_2progress > 0) {
                                            setGetInitStatu_2progressProgress(getInitStatu_2progress - 0.1)
                                            setState(true)
                                        }
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_3"}
                        itShould={`default progressTintColor red color change color`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <ProgressView
                                        style={styles.progressView}
                                        progress={0.8}
                                        progressTintColor={progressTintColor}
                                        testID={'p3'}

                                    />
                                    <Button title={"setColor:#FF69B4"} onPress={() => {
                                        setProgressTintColor("#FF69B4")
                                        setState(true)
                                    }}></Button>
                                    <Button title={"setColor:(0,255,0)"} onPress={() => {
                                        setProgressTintColor("rgb(0,255,0)")
                                        setState(true)
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_4"}
                        itShould={`progressViewStyle 进度条样式`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <ProgressView
                                        style={styles.progressView}
                                        progress={0.5}
                                        progressViewStyle={progressViewStyle}
                                        testID={'p4'}
                                    />
                                    <Button title={`progressViewStyle:${progressViewStyle}`} onPress={() => {
                                        setProgressViewStyle(progressViewStyle == 'default' ? 'bar' : 'default')
                                        setState(true)
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"progress number change bar"}
                        itShould={`change progress`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <ProgressView
                                        style={styles.progressView}
                                        progress={getInitStatu_2progress_bar}
                                        testID={'p2'}
                                        progressViewStyle={'bar'}

                                    />
                                    <Button title={"add 0.1"} onPress={() => {
                                        if (getInitStatu_2progress_bar < 1.1) {
                                            setGetInitStatu_2progressProgress_bar(getInitStatu_2progress_bar + 0.1)
                                            setState(true)
                                        }
                                    }}></Button>
                                    <Button title={"sub 0.1"} onPress={() => {
                                        if (getInitStatu_2progress_bar > 0) {
                                            setGetInitStatu_2progressProgress_bar(getInitStatu_2progress_bar - 0.1)
                                            setState(true)
                                        }
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_5"}
                        itShould={`default progressTintColor red color change color bar`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1,paddingBottom:40,marginBottom:20 }}>
                                    <ProgressView
                                        style={styles.progressView}
                                        progress={0.5}
                                        progressTintColor={progressTintColorBar}
                                        testID={'p3'}
                                        progressViewStyle={'bar'}

                                    />
                                    <Button title={"setColor:#FF69B4"} onPress={() => {
                                        setProgressTintColorBar("#FF69B4")
                                        setState(true)
                                    }}></Button>
                                    <Button title={"setColor:(0,255,0)"} onPress={() => {
                                        setProgressTintColorBar("rgb(0,255,0)")
                                        setState(true)
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>
            </ScrollView>
        </Tester>
    );
}

