import {TestCase, TestSuite} from '@rnoh/testerino';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {getScrollViewContent} from './fixtures';
import React from 'react';

export function StickyHeadersTest() {
  return (
    <TestSuite
      name="sticky headers" /* (sticky headers fail on Android when Fabric is enabled) */
    >
      <TestCase
        tags={['C_API']}
        modal
        itShould="stick item 1 and 4 (stickyHeaderIndices)"
        skip={Platform.OS === 'android'}>
        <View style={styles.wrapperView}>
          <ScrollView stickyHeaderIndices={[0, 3]} nestedScrollEnabled>
            {getScrollViewContent({})}
          </ScrollView>
        </View>
      </TestCase>
      <TestCase
        tags={['C_API']}
        modal
        skip={Platform.OS === 'android'}
        itShould="hide sticked item 1 or 4 when scrolling down (stickyHeaderHiddenOnScroll)">
        <View style={styles.wrapperView}>
          <ScrollView
            stickyHeaderIndices={[0, 3]}
            nestedScrollEnabled
            stickyHeaderHiddenOnScroll>
            {getScrollViewContent({})}
          </ScrollView>
        </View>
      </TestCase>
      <TestCase
        tags={['C_API']}
        modal
        skip={Platform.OS === 'android'}
        itShould="stick item 13 and 20 to the bottom (invertStickyHeaders)"
        //https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/309
      >
        <View style={styles.wrapperView}>
          <ScrollView
            stickyHeaderIndices={[12, 19]}
            nestedScrollEnabled
            invertStickyHeaders>
            {getScrollViewContent({})}
          </ScrollView>
        </View>
      </TestCase>
      <TestCase
        tags={['C_API']}
        modal
        itShould="display Text 'custom sticky header' in the place of components 1 and 4 (shouldn't stick) (StickyHeaderComponent)">
        <View style={styles.wrapperView}>
          <ScrollView
            stickyHeaderIndices={[0, 3]}
            nestedScrollEnabled
            StickyHeaderComponent={CustomStickyHeader}>
            {getScrollViewContent({})}
          </ScrollView>
        </View>
      </TestCase>
    </TestSuite>
  );
}

const CustomStickyHeader = React.forwardRef(() => (
  <Text>custom sticky header</Text>
));

const styles = StyleSheet.create({
  wrapperView: {
    height: 300,
    width: '60%',
  },
  button: {
    width: 160,
    height: 36,
    backgroundColor: 'hsl(190, 50%, 70%)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
