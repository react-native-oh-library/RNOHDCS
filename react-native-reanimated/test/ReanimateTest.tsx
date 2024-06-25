import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TestSuite } from '@rnoh/testerino';
import { TestCase } from '../../components';
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
import AnimatedListExample from '.../example/AnimatedListExample'
import BasicLayoutAnimation from '.../example/BasicLayoutAnimation'
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
        <TestSuite name="Reanimated">
            <TestCase.Example
                tags={['C_API']}
                itShould="CancelAnimationExp">
                <CancelAnimationExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="UseDerivedValueExp">
                <UseDerivedValueExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="WithDecayExp">
                <WithDecayExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="WithDelayExp">
                <WithDelayExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="MeasureExp">
                <MeasureExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="RunUIExp">
                <RunUIExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="WithSequenceExp">
                <WithSequenceExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="UseAnimatedPropsExp">
                <UseAnimatedPropsExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="UseAnimatedReactionExp">
                <UseAnimatedReactionExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="CreateAnimatedComponentExp">
                <CreateAnimatedComponentExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="AnimatedTextExp">
                <AnimatedTextExp />
            </TestCase.Example>
            <TestCase.Example
                tags={['C_API']}
                itShould="AnimatedListExample">
                <AnimatedListExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="BasicLayoutAnimation">
                <BasicLayoutAnimation />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="ScrollToExp">
                <ScrollToExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="KeyframeExp">
                <KeyframeExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="ScrollViewOffsetExample">
                <ScrollViewOffsetExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="ScrollHandlerExp">
                <ScrollHandlerExp />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="InvertedFlatListExample">
                <InvertedFlatListExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="AnimatedKeyboardExample">
                <AnimatedKeyboardExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="AnimatedSensorGravityExample">
                <AnimatedSensorGravityExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="CustomLayoutTransitionExample">
                <CustomLayoutTransitionExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="WorkletRuntimeExample">
                <WorkletRuntimeExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="CustomLayoutAnimationScreen">
                <CustomLayoutAnimationScreen />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="DragAndSnapExample">
                <DragAndSnapExample />
            </TestCase.Example>
            <TestCase.Example
                tags={['C_API']}
                itShould="ColorInterpolationExample">
                <ColorInterpolationExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="DefaultAnimations">
                <DefaultAnimations />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="GetViewPropExample">
                <GetViewPropExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="FrameCallbackExample">
                <FrameCallbackExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="PagerExample">
                <PagerExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="ChessboardExample">
                <ChessboardExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="DispatchCommandExample">
                <DispatchCommandExample />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="ReactionsCounterExample">
                <ReactionsCounterExample />
            </TestCase.Example>
        </TestSuite>
    );
};