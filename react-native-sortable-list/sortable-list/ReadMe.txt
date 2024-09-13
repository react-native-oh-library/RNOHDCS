以下内容为开发本地App.tsx参考

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './tests/components/Navigation';
// start
import SortableHorizontal from './tests/sortable-list/SortableHorizontal';
import SortableStyleTest from './tests/sortable-list/SortableStyleTest';
import SortableStyleTest2 from './tests/sortable-list/SortableStyleTest2';
import ShowsVerticalScrollIndicator1 from './tests/sortable-list/ShowsVerticalScrollIndicator1';
import ShowsVerticalScrollIndicator2 from './tests/sortable-list/ShowsVerticalScrollIndicator2';
import SortableOrderTest1 from './tests/sortable-list/SortableOrderTest1';
import SortableOrderTest2 from './tests/sortable-list/SortableOrderTest2';
import ShowsHorizontalScrollIndicator2 from './tests/sortable-list/showsHorizontalScrollIndicator2';
import ShowsHorizontalScrollIndicator1 from './tests/sortable-list/showsHorizontalScrollIndicator1';
import SortingEnabledTest from './tests/sortable-list/SortableSortingEnabledTest';
import SortableScrollEnabledTest from './tests/sortable-list/SortableScrollEnabledTest1';
import SortableScrollEnabledTest2 from './tests/sortable-list/SortableScrollEnabledTest2';
import SortableKeyboard3 from './tests/sortable-list/SortableKeyboard3';
import SortableKeyboard2 from './tests/sortable-list/SortableKeyboard2';
import SortableKeyboard1 from './tests/sortable-list/SortableKeyboard1';
import SortableHeaderAndFooter from './tests/sortable-list/SortableHeaderAndFooter';
import SortableInnerContainerStyle from './tests/sortable-list/SortableInnerContainerStyle';
import SortablecontentContainerStyle from './tests/sortable-list/SortablecontentContainerStyle';
import SortableOnPressRow from './tests/sortable-list/SortableOnPressRow';
import SortableOnReleaseRow from './tests/sortable-list/SortableOnReleaseRow';
import SortableOnActivateRow from './tests/sortable-list/SortableOnActivateRow';
import SortableRowActiveTime1 from './tests/sortable-list/SortableRowActiveTime1';
import SortableRowActiveTime2 from './tests/sortable-list/SortableRowActiveTime2';
import SortableRefreshControl from './tests/sortable-list/SortableRefreshControl';
import SortableAutoscrollAreaSize1 from './tests/sortable-list/SortableAutoscrollAreaSize1';
import SortableAutoscrollAreaSize2 from './tests/sortable-list/SortableAutoscrollAreaSize2';
import SortableManuallyActivateRows2 from './tests/sortable-list/SortableManuallyActivateRows2';
import SortableManuallyActivateRows1 from './tests/sortable-list/SortableManuallyActivateRows1';
import SortableScrollMethod1 from './tests/sortable-list/SortableScrollMethod1';
import SortableScrollMethod2 from './tests/sortable-list/SortableScrollMethod2';

// end

function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <View id="__harmony::ready" />
          {/* SortableList start */}
        <Page name="SortableHorizontal">
          <SortableHorizontal />
        </Page>
        <Page name="SortableStyle1">
          <SortableStyleTest />
        </Page>
        <Page name="SortableStyle2">
          <SortableStyleTest2 />
        </Page>
        <Page name="SortableOrderTest1">
          <SortableOrderTest1 />
        </Page>
        <Page name="SortableOrderTest2">
          <SortableOrderTest2 />
        </Page>
        <Page name="ShowsVerticalScrollIndicator true">
          <ShowsVerticalScrollIndicator1 />
        </Page>
        <Page name="ShowsVerticalScrollIndicator false">
          <ShowsVerticalScrollIndicator2 />
        </Page>
        <Page name="showsHorizontalScrollIndicator true">
          <ShowsHorizontalScrollIndicator1 />
        </Page>
        <Page name="showsHorizontalScrollIndicator false">
          <ShowsHorizontalScrollIndicator2 />
        </Page>
        <Page name="SortingEnabled Test">
          <SortingEnabledTest />
        </Page>
        <Page name="scrollEnabled false">
          <SortableScrollEnabledTest />
        </Page>
        <Page name="scrollEnabled true">
          <SortableScrollEnabledTest2 />
        </Page>
        <Page name="SortableKeyboard never">
          <SortableKeyboard1 />
        </Page>
        <Page name="SortableKeyboard always">
          <SortableKeyboard2 />
        </Page>
        <Page name="SortableKeyboard handled">
          <SortableKeyboard3 />
        </Page>
        <Page name="Header And Footer Test">
          <SortableHeaderAndFooter />
        </Page>
        <Page name="innerContainerStyle Test">
          <SortableInnerContainerStyle />
        </Page>
        <Page name="contentContainerStyle Test">
          <SortablecontentContainerStyle />
        </Page>
        <Page name="OnPressRow Test">
          <SortableOnPressRow />
        </Page>
        <Page name="onReleaseRow Test">
          <SortableOnReleaseRow />
        </Page>
        <Page name="onActivateRow Test">
          <SortableOnActivateRow />
        </Page>
        <Page name="rowActivationTime Test 500">
          <SortableRowActiveTime1 />
        </Page>
        <Page name="rowActivationTime Test 2000">
          <SortableRowActiveTime2 />
        </Page>
        <Page name="SortableRefreshControl Test">
          <SortableRefreshControl />
        </Page>
        <Page name="autoscrollAreaSize Test 1 ">
          <SortableAutoscrollAreaSize1 />
        </Page>
        <Page name="autoscrollAreaSize Test 2">
          <SortableAutoscrollAreaSize2 />
        </Page>
        <Page name="manuallyActivateRows false Test">
          <SortableManuallyActivateRows1 />
        </Page>
        <Page name="manuallyActivateRows true Test">
          <SortableManuallyActivateRows2 />
        </Page>
        <Page name="ScrollMethod Test y">
          <SortableScrollMethod1 />
        </Page>
        <Page name="ScrollMethod Test x (need horizontal)">
          <SortableScrollMethod2 />
        </Page>
        

        {/* SortableList end */}

        {/* <Page name="RefreshControlDemo">
          <RefreshControlDemo />
        </Page> */}
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
