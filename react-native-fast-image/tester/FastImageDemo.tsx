import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { FastImageLoadingDelay } from './FastImageLoadingDelay';
import { FastImageLoadingDelayNatives } from './FastImageLoadingDelayNatives';
import { FastImageMothodDemo } from './FastImageMothodDemo';
import { FastImageStyleDemo } from './FastImageStyleDemo';
import { FastImageSourceDemo } from './FastImageSourceDemo';
import {NavigationContainer, Page} from './Navigation';

export default function FastImageDemo() {
  // renders
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <NavigationContainer>
          <Page name='FastImageMothodDemo'><FastImageMothodDemo></FastImageMothodDemo></Page>
          <Page name='FastImageStyleDemo'><FastImageStyleDemo></FastImageStyleDemo></Page>
          <Page name='FastImageSourceDemo'><FastImageSourceDemo></FastImageSourceDemo></Page>
          <Page name='FastImageLoadingDelayNatives'><FastImageLoadingDelayNatives></FastImageLoadingDelayNatives></Page>
          <Page name='FastImageLoadingDelay'><FastImageLoadingDelay></FastImageLoadingDelay></Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
  },
});