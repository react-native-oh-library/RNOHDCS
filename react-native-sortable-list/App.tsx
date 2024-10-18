import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer, Page} from '../components/Navigation';
// start
import SortableHorizontal from './sortable-list/SortableHorizontal';
import SortableStyleTest from './sortable-list/SortableStyleTest';
import SortableStyleTest2 from './sortable-list/SortableStyleTest2';
import ShowsVerticalScrollIndicator1 from './sortable-list/ShowsVerticalScrollIndicator1';
import ShowsVerticalScrollIndicator2 from './sortable-list/ShowsVerticalScrollIndicator2';
import SortableOrderTest1 from './sortable-list/SortableOrderTest1';
import SortableOrderTest2 from './sortable-list/SortableOrderTest2';
import ShowsHorizontalScrollIndicator2 from './sortable-list/showsHorizontalScrollIndicator2';
import ShowsHorizontalScrollIndicator1 from './sortable-list/showsHorizontalScrollIndicator1';
import SortingEnabledTest from './sortable-list/SortableSortingEnabledTest';
import SortableScrollEnabledTest from './sortable-list/SortableScrollEnabledTest1';
import SortableScrollEnabledTest2 from './sortable-list/SortableScrollEnabledTest2';
import SortableKeyboard3 from './sortable-list/SortableKeyboard3';
import SortableKeyboard2 from './sortable-list/SortableKeyboard2';
import SortableKeyboard1 from './sortable-list/SortableKeyboard1';
import SortableHeaderAndFooter from './sortable-list/SortableHeaderAndFooter';
import SortableInnerContainerStyle from './sortable-list/SortableInnerContainerStyle';
import SortablecontentContainerStyle from './sortable-list/SortablecontentContainerStyle';
import SortableOnPressRow from './sortable-list/SortableOnPressRow';
import SortableOnReleaseRow from './sortable-list/SortableOnReleaseRow';
import SortableOnActivateRow from './sortable-list/SortableOnActivateRow';
import SortableRowActiveTime1 from './sortable-list/SortableRowActiveTime1';
import SortableRowActiveTime2 from './sortable-list/SortableRowActiveTime2';
import SortableRefreshControl from './sortable-list/SortableRefreshControl';
import SortableAutoscrollAreaSize1 from './sortable-list/SortableAutoscrollAreaSize1';
import SortableAutoscrollAreaSize2 from './sortable-list/SortableAutoscrollAreaSize2';
import SortableManuallyActivateRows2 from './sortable-list/SortableManuallyActivateRows2';
import SortableManuallyActivateRows1 from './sortable-list/SortableManuallyActivateRows1';
import SortableScrollMethod1 from './sortable-list/SortableScrollMethod1';
import SortableScrollMethod2 from './sortable-list/SortableScrollMethod2';

// end

export function App() {
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

export const displayName = 'RNSortableList';
export const framework = 'React';
export const category = 'UI';
export const title = 'Sortable List';
export const documentationURL = "https://github.com/gitim/react-native-sortable-list";
export const description = 'React Native Sortable List';

export const examples = [
  {
    title: 'React Native Sortable List',
    render: function (){
      return <App />;
    },
  },
];


