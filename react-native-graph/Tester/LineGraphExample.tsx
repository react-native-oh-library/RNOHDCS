import React from 'react'
import {ScrollView} from 'react-native'
import {TestSuite, Tester, TestCase} from '@rnoh/testerino'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import GraphAnimated from './LineGraphAllProperty/GraphAnimated'
import GraphEnableGestrue from './LineGraphAllProperty/GraphEnableGestrue'
import GraphHorizonPadding from './LineGraphAllProperty/GraphHorizonPadding'
import GraphVerticalPadding from './LineGraphAllProperty/GraphVerticalPadding'
import GraphEnableIndicator from './LineGraphAllProperty/GraphEnableIndicator'
import GraphIndicatorPulsating from './LineGraphAllProperty/GraphIndicatorPulsating'
import GraphPanGestureDelay from './LineGraphAllProperty/GraphPanGestureDelay'
import GraphOnPointSelected from './LineGraphAllProperty/GraphOnPointSelected'
import GraphOnGestureStart from './LineGraphAllProperty/GraphOnGestureStart'
import GraphOnGestureEnd from './LineGraphAllProperty/GraphOnGestureEnd'
import GraphSelectionDot from './LineGraphAllProperty/GraphSelectionDot'
import GraphTopAxisLabel from './LineGraphAllProperty/GraphTopAxisLabel'
import GraphBottomAxisLabel from './LineGraphAllProperty/GraphBottomAxisLabel'
import GraphEnableFadeInMask from './LineGraphAllProperty/GraphEnableFadeInMask'
import GraphLineThickness from './LineGraphAllProperty/GraphLineThickness'
import GraphGradientFillColors from './LineGraphAllProperty/GraphGradientFillColors'
import GraphRange from './LineGraphAllProperty/GraphRange'
import GraphColor from './LineGraphAllProperty/GraphColor'

export const LineGraphExample = () => {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <Tester>
          <TestSuite name="LineGraphExample">
            <TestCase itShould={`Whether to animate between data changes.`} tags={['C_API']}>
              <GraphAnimated />
            </TestCase>

            <TestCase itShould={`Whether to enable the pan gesture.(animated Property must be true)`} tags={['C_API']}>
              <GraphEnableGestrue />
            </TestCase>

            <TestCase itShould={`Horizontal padding applied to graph, so the pan gesture dot doesn't get cut off horizontally(animated Property must be true)`} tags={['C_API']}>
              <GraphHorizonPadding />
            </TestCase>

            <TestCase itShould={`Vertical padding applied to graph, so the pan gesture dot doesn't get cut off vertically(animated Property must be true)`} tags={['C_API']}>
              <GraphVerticalPadding />
            </TestCase>

            <TestCase itShould={`Enables an indicator which is displayed at the end of the graph(animated Property must be true)`} tags={['C_API']}>
              <GraphEnableIndicator />
            </TestCase>

            <TestCase itShould={`Let's the indicator pulsate(animated GraphEnableIndicator Property must be true)`} tags={['C_API']}>
              <GraphIndicatorPulsating />
            </TestCase>
            
            <TestCase itShould={`Delay after which the pan gesture starts(animated enablePanGesture Property must be true)`} tags={['C_API']}>
              <GraphPanGestureDelay />
            </TestCase>

            <TestCase itShould={`Called for each point while the user is scrubbing/panning through the graph(animated enablePanGesture Property must be true)`} tags={['C_API']}>
              <GraphOnPointSelected />
            </TestCase>

            <TestCase itShould={`Called once the user starts scrubbing/panning through the graph (animated enablePanGesture Property must be true)`} tags={['C_API']}>
              <GraphOnGestureStart />
            </TestCase>

            <TestCase itShould={`Called once the user stopped scrubbing/panning through the graph (animated enablePanGesture Property must be true)`} tags={['C_API']}>
              <GraphOnGestureEnd />
            </TestCase>
            
            <TestCase itShould={`The element that renders the selection dot(animated enablePanGesture Property must be true)`} tags={['C_API']}>
              <GraphSelectionDot />
            </TestCase>

            <TestCase itShould={`The element that gets rendered above the Graph (usually the "max" point/value of the Graph)(animated Property must be true)`} tags={['C_API']}>
              <GraphTopAxisLabel />
            </TestCase>

            <TestCase itShould={`The element that gets rendered below the Graph (usually the "min" point/value of the Graph)(animated Property must be true)`} tags={['C_API']}>
              <GraphBottomAxisLabel />
            </TestCase>

            <TestCase itShould={`Enable the Fade-In Gradient Effect at the beginning of the Graph`} tags={['C_API']}>
              <GraphEnableFadeInMask />
            </TestCase>

             <TestCase itShould={`The width of the graph line (path)`} tags={['C_API']}>
              <GraphLineThickness />
            </TestCase>

            <TestCase itShould={`(Optional) Colors for the fill gradient below the graph line`} tags={['C_API']}>
              <GraphGradientFillColors />
            </TestCase>
            
            <TestCase itShould={`Range of the graph's x and y-axis. The range must be greaterthan the range given by the points.`} tags={['C_API']}>
              <GraphRange/>
            </TestCase>
  
            <TestCase itShould={`Color of the graph line (path).`} tags={['C_API']}>
              <GraphColor/>
            </TestCase>
          </TestSuite>
        </Tester>
      </ScrollView>
      </GestureHandlerRootView>
    )
  }