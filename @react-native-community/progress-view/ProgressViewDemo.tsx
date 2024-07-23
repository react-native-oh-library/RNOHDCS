import React,{useState} from 'react';

import {
    StyleSheet,
    View,
    ScrollView,
    Button
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
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

export const  ProgressViewDemo =()=> {
 const [getInitStatu_1progress,setGetInitStatu_1progressProgress]=useState(0)
    const [getInitStatu_2progress,setGetInitStatu_2progressProgress]=useState(0.4)
    const [progressTintColor,setProgressTintColor]=useState("purple")
    const [trackTintColor,setTrackTintColor]=useState("purple")
        return (
            <Tester>
                <ScrollView>
                    <TestSuite name="react-native-community/progress-view">
                        <TestCase
                            key={"getInitStatus_1"}
                            itShould={`animation progress change`}
                            tags={['C_API']}
                            initialState={false}

                            arrange={({setState}) => {
                                return (
                                    <View style={{flex:1}}>
                                        <ProgressView
                                            style={styles.progressView}
                                            progress={getInitStatu_1progress}
                                            testID={'p1'}

                                        />
                                        <Button label={"start"}  onPress={() => {
                                            let i=0
                                            const timer=  setInterval(()=>{
                                                i+=0.1
                                                setGetInitStatu_1progressProgress(i)
                                                if(i===1){
                                                    clearInterval(timer)
                                                }
                                            },100)
                                            setState(true)
                                        }}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({expect, state}) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"progress number change"}
                            itShould={`change progress`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({setState}) => {
                                return (
                                    <View style={{flex:1}}>
                                        <ProgressView
                                            style={styles.progressView}
                                            progress={getInitStatu_2progress}
                                            testID={'p2'}

                                        />
                                        <Button label={"add 0.1"}  onPress={() => {
                                            if(getInitStatu_2progress<1.1){
                                                setGetInitStatu_2progressProgress(getInitStatu_2progress+0.1)
                                                setState(true)
                                            }
                                        }}></Button>
                                        <Button label={"sub 0.1"}  onPress={() => {
                                            if(getInitStatu_2progress>0){
                                                setGetInitStatu_2progressProgress(getInitStatu_2progress-0.1)
                                                setState(true)
                                            }
                                        }}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({expect, state}) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"getInitStatus_3"}
                            itShould={`defalut progressTintColor purple color change color`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({setState}) => {
                                return (
                                    <View style={{flex:1}}>
                                        <ProgressView
                                            style={styles.progressView}
                                            progress={0.5}
                                            progressTintColor={progressTintColor}
                                            testID={'p3'}

                                        />
                                        <Button label={"setColor:#FF69B4"}  onPress={() => {
                                            setProgressTintColor("#FF69B4")
                                            setState(true)
                                        }}></Button>
                                        <Button label={"setColor:(0,255,0)"}  onPress={() => {
                                            setProgressTintColor("(0,255,0)")
                                            setState(true)
                                        }}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({expect, state}) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"getInitStatus_4"}
                            itShould={`defalut trackTintColor purple color change color`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({setState}) => {
                                return (
                                    <View style={{flex:1}}>
                                        <ProgressView
                                            style={styles.progressView}
                                            progress={0.5}
                                            trackTintColor={trackTintColor}
                                            testID={'p4'}
                                        />
                                        <Button label={"setColor:#FF69B4"}  onPress={() => {
                                            setTrackTintColor("#FF69B4")
                                            setState(true)
                                        }}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({expect, state}) => {
                                expect(state).to.be.true;
                            }}
                        />

                    </TestSuite>
                </ScrollView>
            </Tester>
        );
}


