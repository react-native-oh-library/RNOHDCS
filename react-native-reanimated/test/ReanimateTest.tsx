import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import CancelAnimationExp from '../example/CancelAnimationExp';
import UseDerivedValueExp from '../example/useDerivedValueExp';
import WithDecayExp from '../example/withDecayExp';
import WithDelayExp from '../example/WithDelayExp'
import MeasureExp from '../example/measureExp'
import RunUIExp from '../example/runUIExp'
import WithSequenceExp from '../example/withSequenceExp'
import UseAnimatedPropsExp from '../example/useAnimatedPropsExp'
import UseAnimatedReactionExp from '../example/useAnimatedReactionExp'
import CreateAnimatedComponentExp from '../example/createAnimatedComponentExp'
import AnimatedTextExp from '../example/AnimatedTextExp'
import AnimatedListExample from '../example/AnimatedListExample'
import BasicLayoutAnimation from '../example/BasicLayoutAnimation'
import ScrollToExp from '../example/ScrollToExp'
import KeyframeExp from '../example/KeyframeExp'
import ScrollViewOffsetExample from '../example/ScrollViewOffsetExample'
import ScrollHandlerExp from '../example/ScrollHandlerExp'
import InvertedFlatListExample from '../example/InterpolateExp'
import AnimatedKeyboardExample from '../example/AnimatedKeyboardExample'
import AnimatedSensorGravityExample from '../example/AnimatedSensorGravityExample'
import CustomLayoutTransitionExample from '../example/CustomAnimatedExp'
import WorkletRuntimeExample from '../example/WorkletRuntimeExample'
import CustomLayoutAnimationScreen from '../example/CustomLayoutAnimationScreen'
import DragAndSnapExample from '../example/DragAndSnapExample'
import ColorInterpolationExample from '../example/ColorInterpolationExample'
import DefaultAnimations from '../example/DefaultAnimations'
import GetViewPropExample from '../example/GetViewPropExample'
import FrameCallbackExample from '../example/FrameCallbackExample'
import PagerExample from '../example/PagerExample'
import ChessboardExample from '../example/ChessboardExample'
import DispatchCommandExample from '../example/DispatchCommandExample'
import ReactionsCounterExample from '../example/ReactionsCounterExample'

export const ReanimatedTest = () => {
    return (
        <Tester style={{ flex: 1, marginTop: 30 }}>
            <ScrollView>
                <TestSuite name="Reanimated">
                    <TestCase
                        tags={['C_API']}
                        itShould="CancelAnimationExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <CancelAnimationExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="UseDerivedValueExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <UseDerivedValueExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="WithDecayExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <WithDecayExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="WithDelayExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <WithDelayExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="MeasureExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <MeasureExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="RunUIExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <RunUIExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="WithSequenceExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <WithSequenceExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="UseAnimatedPropsExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <UseAnimatedPropsExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="UseAnimatedReactionExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <UseAnimatedReactionExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="CreateAnimatedComponentExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <CreateAnimatedComponentExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="AnimatedTextExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <AnimatedTextExp />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="AnimatedListExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <AnimatedListExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="BasicLayoutAnimation">
                        <View style={{ width: '100%', height: 500 }}>
                            <BasicLayoutAnimation />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="ScrollToExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <ScrollToExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="KeyframeExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <KeyframeExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="ScrollViewOffsetExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <ScrollViewOffsetExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="ScrollHandlerExp">
                        <View style={{ width: '100%', height: 500 }}>
                            <ScrollHandlerExp />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="InvertedFlatListExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <InvertedFlatListExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="AnimatedKeyboardExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <AnimatedKeyboardExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="AnimatedSensorGravityExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <AnimatedSensorGravityExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="CustomLayoutTransitionExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <CustomLayoutTransitionExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="WorkletRuntimeExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <WorkletRuntimeExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="CustomLayoutAnimationScreen">
                        <View style={{ width: '100%', height: 500 }}>
                            <CustomLayoutAnimationScreen />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="DragAndSnapExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <DragAndSnapExample />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="ColorInterpolationExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <ColorInterpolationExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="DefaultAnimations">
                        <View style={{ width: '100%', height: 500 }}>
                            <DefaultAnimations />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="GetViewPropExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <GetViewPropExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="FrameCallbackExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <FrameCallbackExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="PagerExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <PagerExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="ChessboardExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <ChessboardExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="DispatchCommandExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <DispatchCommandExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="ReactionsCounterExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <ReactionsCounterExample />
                        </View>
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester>
    );
};