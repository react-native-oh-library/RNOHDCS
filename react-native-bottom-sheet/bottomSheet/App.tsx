import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, StatusBar, SafeAreaView } from 'react-native';
import {NavigationContainer, Page} from './componets';
import BottomSheetModalDemo from './examples/BottomSheetModalDemo';
import BottomSheetViewDemo from './examples/BottomSheetViewDemo'
import BottomSheetViewIndexDemo from './examples/BottomSheetViewIndexDemo'
import BottomSheetViewSnapPointDemo from './examples/BottomSheetViewSnapPointDemo'
import BottomSheetViewDetachedDemo from './examples/BottomSheetViewDetachedDemo'
import BottomSheetViewCPGDemo from './examples/BottomSheetViewCPGDemo'
import BottomSheetViewHPGDemo from './examples/BottomSheetViewHPGDemo'
import BottomSheetViewOverDragDemo from './examples/BottomSheetViewOverDragDemo'
import BottomSheetViewPanDownToCloseDemo from './examples/BottomSheetViewPanDownToCloseDemo'
import BottomSheetViewDynamicSizingDemo from './examples/BottomSheetViewDynamicSizingDemo'
import BottomSheetViewAnimateOnMountDemo from './examples/BottomSheetViewAnimateOnMountDemo'
import BottomSheetViewStyleDemo from './examples/BottomSheetViewStyleDemo'
import BottomSheetViewContentLayoutDemo from './examples/BottomSheetViewContentLayoutDemo'
import BottomSheetViewContainerLayoutDemo from './examples/BottomSheetViewContainerLayoutDemo'
import BottomSheetViewContainerOffsetDemo from './examples/BottomSheetViewContainerOffsetDemo'
import BottomSheetViewTopInsetLayoutDemo from './examples/BottomSheetViewTopInsetLayoutDemo'
import BottomSheetViewBottomInsetLayoutDemo from './examples/BottomSheetViewBottomInsetLayoutDemo'
import BottomSheetViewMaxDynamicContentSizeLayoutDemo from './examples/BottomSheetViewMaxDynamicContentSizeLayoutDemo'
import BottomSheetViewKeyboardHandlingDemo from './examples/BottomSheetViewKeyboardHandlingDemo'

import BottomSheetViewBackgroundComponentDemo from './examples/BottomSheetViewBackgroundComponentDemo'
import BottomSheetViewHandleComponentDemo from './examples/BottomSheetViewHandleComponentDemo'
import BottomSheetViewBackdropComponentDemo from './examples/BottomSheetViewBackdropComponentDemo'
import BottomSheetViewFooterComponentDemo from './examples/BottomSheetViewFooterComponentDemo'
import BottomSheetViewOnChangeDemo from './examples/BottomSheetViewOnChangeDemo'
import BottomSheetViewOnAnimateDemo from './examples/BottomSheetViewOnAnimateDemo'
import BottomSheetViewGestureDemo from './examples/BottomSheetViewGestureDemo'
import BottomSheetViewGestureDemo1 from './examples/BottomSheetViewGestureDemo1'
import BottomSheetViewAnimatedDemo from './examples/BottomSheetViewAnimatedDemo'

import BottomSheetViewHandleLayoutDemo from './examples/BottomSheetViewHandleLayoutDemo'
//BottomSheetViewOnChangeDemo
import BottomSheetViewOverDemo from './examples/BottomSheetViewOverDemo'
// import BottomSheetScrollViewDemo from './examples/BottomSheetScrollViewDemo'
import BottomSheetFlatlist from './examples/BottomSheetFlatListDemo'
import BottomSheetSectionListDemo from './examples/BottomSheetSectionListDemo'
import BottomSheetVirtualizedListDemo from './examples/BottomSheetVirtualizedListDemo'
import BottomSheetBackdropDemo from './examples/BottomSheetBackdropDemo'
import BottomSheetFooterDemo from './examples/BottomSheetFooterDemo'
import BottomSheetInputDemo from './examples/BottomSheetInputDemo'

const App = () => {
  // renders
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
         <Page name="EXAMPLE: BottomSheetViewDemo">
            <BottomSheetViewDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewIndexDemo">
            <BottomSheetViewIndexDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewSnapPointDemo">
            <BottomSheetViewSnapPointDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewOverDemo">
            <BottomSheetViewOverDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewDetachedDemo">
            <BottomSheetViewDetachedDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewCPGDemo">
            <BottomSheetViewCPGDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewHPGDemo">
            <BottomSheetViewHPGDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewOverDragDemo">
            <BottomSheetViewOverDragDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewPanDownToCloseDemo">
            <BottomSheetViewPanDownToCloseDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewDynamicSizingDemo">
            <BottomSheetViewDynamicSizingDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewAnimateOnMountDemo">
            <BottomSheetViewAnimateOnMountDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewStyleDemo">
            <BottomSheetViewStyleDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewHandleLayoutDemo">
            <BottomSheetViewHandleLayoutDemo/>
          </Page>

          <Page name="EXAMPLE: BottomSheetViewContentLayoutDemo">
            <BottomSheetViewContentLayoutDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewContainerLayoutDemo">
            <BottomSheetViewContainerLayoutDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewContainerOffsetDemo">
            <BottomSheetViewContainerOffsetDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewTopInsetLayoutDemo">
            <BottomSheetViewTopInsetLayoutDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewBottomInsetLayoutDemo">
            <BottomSheetViewBottomInsetLayoutDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewMaxDynamicContentSizeLayoutDemo">
            <BottomSheetViewMaxDynamicContentSizeLayoutDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewKeyboardHandlingDemo">
            <BottomSheetViewKeyboardHandlingDemo/>
          </Page>

          <Page name="EXAMPLE: BottomSheetViewBackgroundComponentDemo">
            <BottomSheetViewBackgroundComponentDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewHandleComponentDemo">
            <BottomSheetViewHandleComponentDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewBackdropComponentDemo">
            <BottomSheetViewBackdropComponentDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewFooterComponentDemo">
            <BottomSheetViewFooterComponentDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewOnChangeDemo">
            <BottomSheetViewOnChangeDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewOnAnimateDemo">
            <BottomSheetViewOnAnimateDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewGestureDemo">
            <BottomSheetViewGestureDemo/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewGestureDemo1">
            <BottomSheetViewGestureDemo1/>
          </Page>
          <Page name="EXAMPLE: BottomSheetViewAnimatedDemo">
            <BottomSheetViewAnimatedDemo/>
          </Page>

          <Page name="EXAMPLE: BottomSheetModalDemo">
            <BottomSheetModalDemo/>
          </Page>
          {/* <Page name="EXAMPLE: BottomSheetScrollViewDemo">
            <BottomSheetScrollViewDemo/>
          </Page> */}
          {/* <Page name="EXAMPLE: BottomSheetFlatlist">
            <BottomSheetFlatlist/>
          </Page> */}
          {/* <Page name="EXAMPLE: BottomSheetSectionListDemo">
            <BottomSheetSectionListDemo/>
          </Page> */}
          {/* <Page name="EXAMPLE: BottomSheetVirtualizedListDemo">
            <BottomSheetVirtualizedListDemo/>
          </Page> */}
          {/* <Page name="EXAMPLE: BottomSheetBackdropDemo">
            <BottomSheetBackdropDemo/>
          </Page> */}
          {/* <Page name="EXAMPLE: BottomSheetFooterDemo">
            <BottomSheetFooterDemo/>
          </Page> */}
          {/* <Page name="EXAMPLE: BottomSheetInputDemo">
            <BottomSheetInputDemo/>
          </Page> */}
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};


export default App;