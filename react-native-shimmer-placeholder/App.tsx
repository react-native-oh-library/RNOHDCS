import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer, Page } from "./tests/components/Navigation";

import ContainPropTest from "./tests/shimmer-placeholder/containPropTest";
import ShimmerPlaceholderTest from "./tests/shimmer-placeholder/shimmerPlaceholderTest";

function App() {
  return (
    <View style={{ backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <View id="__harmony::ready" />
          <Page name="ContainPropTest">
            <ContainPropTest />
          </Page>
          <Page name="ShimmerPlaceholderTest">
            <ShimmerPlaceholderTest />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
