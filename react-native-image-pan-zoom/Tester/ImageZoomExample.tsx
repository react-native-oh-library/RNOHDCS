import React from 'react'
import {ScrollView,View} from 'react-native'
import {TestSuite, Tester, TestCase} from '@rnoh/testerino'

import ImageZoomBase from './ImageZoomAllProperty/ImageZoomBase'
import ImageZoomOnclick from './ImageZoomAllProperty/ImageZoomOnclick'
import ImageZoomOnDoubleclick from './ImageZoomAllProperty/ImageZoomOnDoubleclick'
import ImageZoomPanToMove from './ImageZoomAllProperty/ImageZoomPanToMove'
import ImageZoomPinchToZoom from './ImageZoomAllProperty/ImageZoomPinchToZoom'
import ImageZoomClickDistance from './ImageZoomAllProperty/ImageZoomClickDistance'
import ImageZoomhorizonOuterOffset from './ImageZoomAllProperty/ImageZoomhorizonOuterOffset'
import ImageZoomMaxOverflow from './ImageZoomAllProperty/ImageZoomMaxOverflow'
import ImageZoomResponderRelease from './ImageZoomAllProperty/ImageZoomResponderRelease'
import ImageZoomOnLongPress from './ImageZoomAllProperty/ImageZoomOnLongPress'
import ImageZoomOnMove from './ImageZoomAllProperty/ImageZoomOnMove'
import ImageZoomCenterOn from './ImageZoomAllProperty/ImageZoomCenterOn'
import ImageZoomUseNativeDriver from './ImageZoomAllProperty/ImageZoomUseNativeDriver'
import ImageZoomEnableSwipeDown from './ImageZoomAllProperty/ImageZoomEnableSwipeDown'
import ImageZoomEnableCenterFocus from './ImageZoomAllProperty/ImageZoomEnableCenterFocus'
import ImageZoomEnableDoubleClickZoom from './ImageZoomAllProperty/ImageZoomEnableDoubleClickZoom'
import OnStartShouldSetPanResponder from './ImageZoomAllProperty/OnStartShouldSetPanResponder'
import OnMoveShouldSetPanResponder from './ImageZoomAllProperty/OnMoveShouldSetPanResponder'
import OnPanResponderTerminationRequest from './ImageZoomAllProperty/OnPanResponderTerminationRequest'



export const ImageZoomExample = () => {
    return (
      <ScrollView>
   
        <Tester>
          <TestSuite name="ImageZoomExample">

            <TestCase itShould={`operating area width 300 and height 300 ; picture width 200 and height 200`} tags={['C_API']}>
              <ImageZoomBase />
            </TestCase>

            <TestCase itShould={`onClick callback`} tags={['C_API']}>
              <ImageZoomOnclick />
            </TestCase>

            <TestCase itShould={`onDoubleClick callback and doubleClickInterval time allocated for second click to be considered as doublClick event`} tags={['C_API']}>
              <ImageZoomOnDoubleclick />
            </TestCase>

            <TestCase itShould={`allow to move picture with one finger`} tags={['C_API']}>
              <ImageZoomPanToMove />
            </TestCase>

            <TestCase itShould={`allow scale with two fingers`} tags={['C_API']}>
              <ImageZoomPinchToZoom />
            </TestCase>

            <TestCase itShould={`how long distance can also trigger onClick with single finger`} tags={['C_API']}>
              <ImageZoomClickDistance />
            </TestCase>

            <TestCase itShould={`horizontal beyond the distance`} tags={['C_API']}>
              <ImageZoomhorizonOuterOffset />
            </TestCase>

            <TestCase itShould={`maximum sliding threshold`} tags={['C_API']}>
              <ImageZoomMaxOverflow />
            </TestCase>

            <TestCase itShould={`End of multi-gesture, or end of sliding`} tags={['C_API']}>
              <ImageZoomResponderRelease />
            </TestCase>

            <TestCase itShould={`onLongPress callback and delay time`} tags={['C_API']}>
              <ImageZoomOnLongPress />
            </TestCase>

            <TestCase itShould={`reports movement position data`} tags={['C_API']}>
              <ImageZoomOnMove />
            </TestCase>

            <TestCase itShould={`if given this will cause the map to pan and zoom to the desired location`} tags={['C_API']}>
              <ImageZoomCenterOn />
            </TestCase>

            <TestCase itShould={`Whether to animate using useNativeDriver`} tags={['C_API']}>
              <ImageZoomUseNativeDriver />
            </TestCase>

            <TestCase itShould={`for enabling vertical movement and threshold for firing swipe down function and onSwipeDown callback`} tags={['C_API']}>
              <ImageZoomEnableSwipeDown />
            </TestCase>

            <TestCase itShould={`for disabling focus on image center`} tags={['C_API']}>
              <ImageZoomEnableCenterFocus />
            </TestCase>

            <TestCase itShould={`allow double-click to enlarge`} tags={['C_API']}>
              <ImageZoomEnableDoubleClickZoom />
            </TestCase>

            <TestCase itShould={`Override onStartShouldSetPanResponder behavior`} tags={['C_API']}>
              <OnStartShouldSetPanResponder />
            </TestCase>

            <TestCase itShould={`Override onMoveShouldSetPanResponder behavior`} tags={['C_API']}>
              <OnMoveShouldSetPanResponder />
            </TestCase>
           
            <TestCase itShould={`Override onPanResponderTerminationRequest behavior`} tags={['C_API']}>
              <OnPanResponderTerminationRequest />
            </TestCase>
           

          </TestSuite>
        </Tester>
      </ScrollView>
    )
  }