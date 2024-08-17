import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { FastImageLoadingDelay } from './FastImageLoadingDelay';
import { FastImageMothodDemo } from './FastImageMothodDemo';
import { FastImageStyleDemo } from './FastImageStyleDemo';
import {NavigationContainer, Page} from './Navigation';

export default function FastImageDemo() {
  // renders
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <NavigationContainer>
          <Page name='FastImageMothodDemo'><FastImageMothodDemo></FastImageMothodDemo></Page>
          <Page name='FastImageLoadingDelay'><FastImageLoadingDelay></FastImageLoadingDelay></Page>
          <Page name='FastImageStyleDemo'><FastImageStyleDemo></FastImageStyleDemo></Page>
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