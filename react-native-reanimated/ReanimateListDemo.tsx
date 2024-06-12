import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import { NavigationContainer, Page } from './AnimatedNavigation';

import { PortalHost, PortalProvider } from '@gorhom/portal';


import CancelAnimationExp from './example/CancelAnimationExp';
import UseDerivedValueExp from './example/useDerivedValueExp';
import WithDecayExp from './example/withDecayExp';
import WithDelayExp from './example/WithDelayExp'
import MeasureExp from './example/measureExp'
import RunUIExp from './example/runUIExp'
import WithSequenceExp from './example/withSequenceExp'
import UseAnimatedPropsExp from './example/useAnimatedPropsExp'
import UseAnimatedReactionExp from './example/useAnimatedReactionExp'
import CreateAnimatedComponentExp from './example/createAnimatedComponentExp'
import AnimatedTextExp from './example/AnimatedTextExp'
import AnimatedListExample from './example/AnimatedListExample'
import BasicLayoutAnimation from './example/BasicLayoutAnimation'
import ScrollToExp from './example/ScrollToExp'
import KeyframeExp from './example/KeyframeExp'
import ScrollViewOffsetExample from './example/ScrollViewOffsetExample'
import ScrollHandlerExp from './example/ScrollHandlerExp'
import InvertedFlatListExample from './example/InterpolateExp'
import AnimatedKeyboardExample from './example/AnimatedKeyboardExample'
import AnimatedSensorGravityExample from './example/AnimatedSensorGravityExample'
import CustomLayoutTransitionExample from './example/CustomAnimatedExp'
import WorkletRuntimeExample from './example/WorkletRuntimeExample'
import CustomLayoutAnimationScreen from './example/CustomLayoutAnimationScreen'
import DragAndSnapExample from './example/DragAndSnapExample'
import ColorInterpolationExample from './example/ColorInterpolationExample'
import DefaultAnimations from './example/DefaultAnimations'
import GetViewPropExample from './example/GetViewPropExample'
import FrameCallbackExample from './example/FrameCallbackExample'
import PagerExample from './example/PagerExample'
import ChessboardExample from './example/ChessboardExample'
import DispatchCommandExample from './example/DispatchCommandExample'
import ReactionsCounterExample from './example/ReactionsCounterExample'

function App() {
    return (
        <View style={{ backgroundColor: 'black', flexDirection: "column" }}>
            <StatusBar barStyle="light-content" />
            <ScrollView style={{ width: '100%', height: 720 }}>
                <SafeAreaView>
                    <NavigationContainer>
                        <PortalProvider>
                            <View id="__harmony::ready" />
                            <Page name="CancelAnimationExp">
                                <CancelAnimationExp />
                            </Page>
                            <Page name="useDerivedValueExp">
                                <UseDerivedValueExp />
                            </Page>
                            <Page name="WithDecayExp">
                                <WithDecayExp />
                            </Page>
                            <Page name="WithDelayExp">
                                <WithDelayExp />
                            </Page>
                            <Page name="MeasureExp">
                                <MeasureExp />
                            </Page>
                            <Page name="RunUIExp">
                                <RunUIExp />
                            </Page>
                            <Page name="WithSequenceExp">
                                <WithSequenceExp />
                            </Page>
                            <Page name="AnimatedTextExp">
                                <AnimatedTextExp />
                            </Page>
                            <Page name="UseAnimatedPropsExp">
                                <UseAnimatedPropsExp />
                            </Page>
                            <Page name="UseAnimatedReactionExp">
                                <UseAnimatedReactionExp />
                            </Page>
                            <Page name="CreateAnimatedComponentExp">
                                <CreateAnimatedComponentExp />
                            </Page>
                            <Page name="ScrollToExp">
                                <ScrollToExp />
                            </Page>
                            <Page name="ScrollViewOffsetExample">
                                <ScrollViewOffsetExample />
                            </Page>
                            <Page name="ScrollHandlerExp">
                                <ScrollHandlerExp />
                            </Page>
                            <Page name="AnimatedListExample">
                                <AnimatedListExample />
                            </Page>
                            <Page name="BasicLayoutAnimation">
                                <BasicLayoutAnimation />
                            </Page>
                            <Page name="KeyframeExp">
                                <KeyframeExp />
                            </Page>
                            <Page name="AnimatedKeyboardExample">
                                <AnimatedKeyboardExample />
                            </Page>
                            <Page name="AnimatedSensorGravityExample">
                                <AnimatedSensorGravityExample />
                            </Page>
                            <Page name="CustomLayoutTransitionExample">
                                <CustomLayoutTransitionExample />
                            </Page>
                            <Page name="WorkletRuntimeExample">
                                <WorkletRuntimeExample />
                            </Page>
                            <Page name="CustomLayoutAnimationScreen">
                                <CustomLayoutAnimationScreen />
                            </Page>
                            <Page name="DragAndSnapExample">
                                <DragAndSnapExample />
                            </Page>
                            <Page name="ColorInterpolationExample">
                                <ColorInterpolationExample />
                            </Page>
                            <Page name="DefaultAnimations">
                                <DefaultAnimations />
                            </Page>
                            <Page name="GetViewPropExample">
                                <GetViewPropExample />
                            </Page>
                            <Page name="InvertedFlatListExample">
                                <InvertedFlatListExample />
                            </Page>
                            <Page name="FrameCallbackExample">
                                <FrameCallbackExample />
                            </Page>
                            <Page name="PagerExample">
                                <PagerExample />
                            </Page>
                            <Page name="ChessboardExample">
                                <ChessboardExample />
                            </Page>
                            <Page name="DispatchCommandExample">
                                <DispatchCommandExample />
                            </Page>
                            <Page name="ReactionsCounterExample">
                                <ReactionsCounterExample />
                            </Page>
                            <View
                                style={[
                                    StyleSheet.absoluteFill,
                                    { zIndex: 100, pointerEvents: 'box-none' },
                                ]}>
                                <PortalHost name="ModalHost" />
                            </View>
                        </PortalProvider>
                    </NavigationContainer>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}

export default App;