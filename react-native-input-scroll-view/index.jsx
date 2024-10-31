import React from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';
import {NavigationContainer, Page} from '../../components';
import {PortalHost, PortalProvider} from '@gorhom/portal';

import ScrollViewPropsOne from './ScrollView.props/ContentContainerStyle';
import ScrollViewPropsTwo from './ScrollView.props/ShowsVerticalScrollIndicator';
import ScrollViewPropsThree from './ScrollView.props/OnScrollBeginDrag';
import ScrollViewPropsFour from './ScrollView.props/OnScrollEndDrag';
import ScrollViewPropsFive from './ScrollView.props/ScrollTo';
import ScrollViewPropsSix from './ScrollView.props/ScrollToEnd';

import UseAnimatedScrollViewOne from './useAnimatedScrollView/ContentContainerStyle';
import UseAnimatedScrollViewTwo from './useAnimatedScrollView/ShowsVerticalScrollIndicator';
import UseAnimatedScrollViewThree from './useAnimatedScrollView/OnScrollBeginDrag';
import UseAnimatedScrollViewFour from './useAnimatedScrollView/OnScrollEndDrag';
import UseAnimatedScrollViewFive from './useAnimatedScrollView/ScrollTo';
import UseAnimatedScrollViewSix from './useAnimatedScrollView/ScrollToEnd';

import KeyboardAvoidingViewOne from './keyboardAvoidingViewProps/KeyboardVerticalOffset';
import KeyboardAvoidingViewTwo from './keyboardAvoidingViewProps/ContentContainerStyle';
import KeyboardAvoidingViewThree from './keyboardAvoidingViewProps/OnLayout';
import KeyboardAvoidingViewFour from './keyboardAvoidingViewProps/OnResponderMove';

import KeyboardOffset from './keyboardOffset/KeyboardOffset';
import KeyboardOffsetTwo from './keyboardOffset/KeyboardOffsetTwo';

import TopOffset from './topOffset/TopOffset';
import TopOffsetTwo from './topOffset/TopOffsetTwo';

import MultilineInputStyle from './multilineInputStyle';
import SupportHardwareKeyboard from './supportHardwareKeyboard';

// 该demo依赖 @gorhom/portal， 请先 npm i @gorhom/portal@1.0.14

function Example() {
  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <SafeAreaView>
          <NavigationContainer>
            <PortalProvider>
              <View id="__harmony::ready" />

              <Page name="KeyboardOffset">
                <KeyboardOffset />
              </Page>
              <Page name="KeyboardOffsetTwo">
                <KeyboardOffsetTwo />
              </Page>

              <Page name="TopOffset">
                <TopOffset />
              </Page>
              <Page name="TopOffsetTwo">
                <TopOffsetTwo />
              </Page>

              <Page name="ScrollViewPropsOne">
                <ScrollViewPropsOne />
              </Page>
              <Page name="ScrollViewPropsTwo">
                <ScrollViewPropsTwo />
              </Page>
              <Page name="ScrollViewPropsThree">
                <ScrollViewPropsThree />
              </Page>
              <Page name="ScrollViewPropsFour">
                <ScrollViewPropsFour />
              </Page>
              <Page name="ScrollViewPropsFive">
                <ScrollViewPropsFive />
              </Page>
              <Page name="ScrollViewPropsSix">
                <ScrollViewPropsSix />
              </Page>

              <Page name="UseAnimatedScrollViewOne">
                <UseAnimatedScrollViewOne />
              </Page>
              <Page name="UseAnimatedScrollViewTwo">
                <UseAnimatedScrollViewTwo />
              </Page>
              <Page name="UseAnimatedScrollViewThree">
                <UseAnimatedScrollViewThree />
              </Page>
              <Page name="UseAnimatedScrollViewFour">
                <UseAnimatedScrollViewFour />
              </Page>
              <Page name="UseAnimatedScrollViewFive">
                <UseAnimatedScrollViewFive />
              </Page>
              <Page name="UseAnimatedScrollViewSix">
                <UseAnimatedScrollViewSix />
              </Page>

              <Page name="KeyboardAvoidingViewOne">
                <KeyboardAvoidingViewOne />
              </Page>
              <Page name="KeyboardAvoidingViewTwo">
                <KeyboardAvoidingViewTwo />
              </Page>
              <Page name="KeyboardAvoidingViewThree">
                <KeyboardAvoidingViewThree />
              </Page>
              <Page name="KeyboardAvoidingViewFour">
                <KeyboardAvoidingViewFour />
              </Page>

              <Page name="MultilineInputStyle">
                <MultilineInputStyle />
              </Page>
              <Page name="SupportHardwareKeyboard">
                <SupportHardwareKeyboard />
              </Page>

            </PortalProvider>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </>
  );
}

export default Example;