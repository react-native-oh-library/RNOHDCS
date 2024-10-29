import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, Page } from './components/Navigation';
import SharedElementDemo from './SharedElementDemo1';
import SharedElementDemo2 from './SharedElementDemo2';
import SharedElementDemo3 from './SharedElementDemo3';
import SharedElementDemo4 from './SharedElementDemo4';
import DebugDemo from './Debug';
import OnMeasureDemo from './OnMeasure';
import AlignDemo1 from './Align1';
import AlignDemo2 from './Align2';
import AlignDemo3 from './Align3';
import AlignDemo4 from './Align4';
import AlignDemo5 from './Align5';
import AlignDemo6 from './Align6';
import AlignDemo7 from './Align7';
import AlignDemo8 from './Align8';
import AlignDemo9 from './Align9';
import AlignDemo10 from './Align10';
import ResizeDemo1 from './Resize1';
import ResizeDemo2 from './Resize2';
import ResizeDemo3 from './Resize3';
import ResizeDemo4 from './Resize4';


export function SharedElmentTest() {
  return (
    <View style={{ backgroundColor: 'black'}}>
      <NavigationContainer>
        <Page name="Transition:move">
          <SharedElementDemo />
        </Page>
        <Page name="Transition:fade">
          <SharedElementDemo2 />
        </Page>
        <Page name="Transition:fade-in">
          <SharedElementDemo3 />
        </Page>
        <Page name="Transition:fade-out">
          <SharedElementDemo4 />
        </Page>
        <Page name="Debug = true">
          <DebugDemo />
        </Page>
        <Page name="OnMeasureDemo">
          <OnMeasureDemo />
        </Page>
        <Page name="Align:auto">
          <AlignDemo1 />
        </Page>
        <Page name="Align:left-top">
          <AlignDemo2 />
        </Page>
        <Page name="Align:left-center">
          <AlignDemo3 />
        </Page>
        <Page name="Align:left-bottom">
          <AlignDemo4 />
        </Page>
        <Page name="Align:right-top">
          <AlignDemo5 />
        </Page>
        <Page name="Align:right-center">
          <AlignDemo6 />
        </Page>
        <Page name="Align:right-bottom">
          <AlignDemo7 />
        </Page>
        <Page name="Align:center-top">
          <AlignDemo8 />
        </Page>
        <Page name="Align:center-center">
          <AlignDemo9 />
        </Page>
        <Page name="Align:center-bottom">
          <AlignDemo10 />
        </Page>
        <Page name="Resize:auto">
          <ResizeDemo1 />
        </Page>
        <Page name="Resize:stretch">
          <ResizeDemo2 />
        </Page>
        <Page name="Resize:clip">
          <ResizeDemo3 />
        </Page>
        <Page name="Resize:none">
          <ResizeDemo4 />
        </Page>
      </NavigationContainer>
    </View>
  );
}
export default SharedElmentTest;