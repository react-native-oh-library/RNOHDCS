import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Animated
} from 'react-native';
import { TestSuite,Tester, TestCase } from '@rnoh/testerino';
import {ScrollView } from 'react-native';
import RefreshAndLoadingExample from './RefreshAndLoadingExample'
import RefreshAndLoadingExampleInverted from './RefreshAndLoadingExampleInverted'
import InputExample from './InputExample'
import ScrollToAndOnScrollExample from './ScrollToAndOnScrollExample'
import BouncesAndScrollEnabledExample from './BouncesAndScrollEnabledExample'

export const SpringScrollViewTestCase = () => {
    return (
        <Tester >
        <ScrollView style={{width: '100%'}}>
   
        <TestSuite name="SpringScrollView">
  

            <TestCase
                tags={['C_API']}
                itShould="onRefresh onLoading refreshHeader loadingFooter allLoaded">
                <RefreshAndLoadingExample />
            </TestCase>

            <TestCase
                tags={['C_API']}
                itShould="inverted">
                <RefreshAndLoadingExampleInverted />
            </TestCase>

            <TestCase
                tags={['C_API']}
                itShould="onTouchBegin onTouchFinish onMomentumScrollBegin onMomentumScrollEnd onNativeContentOffsetExtract scrollTo scroll scrollToBegin scrollToEnd bounces onSizeChange onContentSizeChange">
                <ScrollToAndOnScrollExample />
            </TestCase>

            <TestCase
                tags={['C_API']}
                itShould="initialContentOffset directionalLockEnabled contentStyle">
                <BouncesAndScrollEnabledExample />
            </TestCase>

            <TestCase
                tags={['C_API']}
                itShould="textInputRefs tapToHideKeyboard inputToolBarHeight">
                <InputExample />
            </TestCase>
        </TestSuite>
        </ScrollView>
        </Tester>
    );
};