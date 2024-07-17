import {TestCase, TestSuite} from '@rnoh/testerino';
import {ScrollView, StyleSheet, View} from 'react-native';
import {COMMON_PROPS} from './fixtures';

export function ContentContainerStyleTest() {
  return (
    <TestSuite name="contentContainerStyle">
      <TestCase
        tags={['C_API']}
        modal
        itShould="render scrollview with content container with different border radii (topLeft, topRight, ...) (contentContainerStyle)">
        <View style={styles.wrapperView}>
          <ScrollView
            {...COMMON_PROPS}
            style={{
              borderWidth: 3,
              borderColor: 'green',
            }}
            contentContainerStyle={{
              borderColor: 'firebrick',
              backgroundColor: 'beige',
              overflow: 'hidden',
              borderWidth: 3,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 40,
            }}
          />
        </View>
      </TestCase>
      <TestCase
        tags={['C_API']}
        modal
        itShould="render scroll view with contentContainer with different border widths (left, right, top, bottom) (contentContainerStyle)">
        <View style={styles.wrapperView}>
          <ScrollView
            {...COMMON_PROPS}
            style={{
              borderWidth: 3,
              borderColor: 'green',
            }}
            contentContainerStyle={{
              borderColor: 'firebrick',
              backgroundColor: 'beige',
              borderLeftWidth: 3,
              borderWidth: 3,
              borderTopWidth: 6,
              borderRightWidth: 9,
              borderBottomWidth: 12,
            }}
          />
        </View>
      </TestCase>
      <TestCase
        tags={['C_API']}
        modal
        itShould="render scroll view contentContainer with different border colors (left, right, top, bottom) (contentContainerStyle)">
        <View style={styles.wrapperView}>
          <ScrollView
            {...COMMON_PROPS}
            style={{
              borderWidth: 3,
              borderColor: 'green',
            }}
            contentContainerStyle={{
              backgroundColor: 'beige',
              borderWidth: 3,
              borderLeftColor: 'firebrick',
              borderTopColor: 'chocolate',
              borderRightColor: 'black',
              borderBottomColor: 'blue',
            }}
          />
        </View>
      </TestCase>
    </TestSuite>
  );
}

const styles = StyleSheet.create({
  wrapperView: {
    height: 300,
    width: '60%',
  },
});
