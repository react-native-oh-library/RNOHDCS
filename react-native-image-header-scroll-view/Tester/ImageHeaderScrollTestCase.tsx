import React from 'react';
import {View, SafeAreaView} from 'react-native';

import {NavigationContainer,Page} from './Pages/Navigation';
import ImageHeaderScrollViewExample from './Pages/ImageHeaderScrollView'
import MaxOverlayOpacity from './Pages/MaxOverlayOpacity'
import MinOverlayOpacity from './Pages/MinOverlayOpacity';
import FadeOutForeground from './Pages/FadeOutForeground';
import OverlayColor from './Pages/OverlayColor';
import RenderFixedForeground from './Pages/RenderFixedForeground';
import RenderForeground from './Pages/RenderForeground';
import UseNativeDriver from './Pages/UseNativeDriver';
import DisableHeaderGrow from './Pages/DisableHeaderGrow';
import TriggeringViewOnHideAndOnDisplay from './Pages/TriggeringViewOnHideAndOnDisplay';
import TriggeringViewOnBeginHiddenAndOnBeginDisplayed from './Pages/TriggeringViewOnBeginHiddenAndOnBeginDisplayed';
import TriggeringViewOnTouchTopAndOnTouchBottom from './Pages/TriggeringViewOnTouchTopAndOnTouchBottom';
import TriggeringViewBottomOffsetAndTopOffset from './Pages/TriggeringViewBottomOffsetAndTopOffset';
export default function ImageHeaderScrollTestCase(): JSX.Element {
  return (
      <NavigationContainer >
        <Page name="ImageHeaderScrollViewExample">
          <ImageHeaderScrollViewExample />
        </Page>
        <Page name="MaxOverlayOpacity">
          <MaxOverlayOpacity />
        </Page>
        <Page name="MinOverlayOpacity">
          <MinOverlayOpacity />
        </Page>
        <Page name="FadeOutForeground">
          <FadeOutForeground />
        </Page>
        <Page name="OverlayColor">
          <OverlayColor />
        </Page>
        <Page name="RenderFixedForeground">
          <RenderFixedForeground />
        </Page>
        <Page name="RenderForeground">
          <RenderForeground />
        </Page>
        <Page name="UseNativeDriver">
          <UseNativeDriver />
        </Page>
        <Page name="DisableHeaderGrow">
          <DisableHeaderGrow />
        </Page>
        <Page name="TriggeringViewOnHideAndOnDisplay">
          <TriggeringViewOnHideAndOnDisplay />
        </Page>
        <Page name="TriggeringViewOnBeginHiddenAndOnBeginDisplayed">
          <TriggeringViewOnBeginHiddenAndOnBeginDisplayed />
        </Page>
        <Page name="TriggeringViewOnTouchTopAndOnTouchBottom">
          <TriggeringViewOnTouchTopAndOnTouchBottom />
        </Page>
        <Page name="TriggeringViewBottomOffsetAndTopOffset">
          <TriggeringViewBottomOffsetAndTopOffset />
        </Page>
      </NavigationContainer>
  );
}
