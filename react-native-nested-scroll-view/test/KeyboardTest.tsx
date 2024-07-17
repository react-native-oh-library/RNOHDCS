import {TestCase, TestSuite} from '@rnoh/testerino';
import {Platform, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {COMMON_PROPS, getScrollViewContent} from './fixtures';

export function KeyboardTest() {
  return (
    <TestSuite name="keyboard props">
      <TestCase
        modal
        itShould="the left scrollview should dismiss the keyboard on scroll and the right one shouldn't (keyboardDismissMode)">
        <View>
          <TextInput style={styles.textInput} />
          <View style={[styles.wrapperView, {flexDirection: 'row'}]}>
            <ScrollView {...COMMON_PROPS} keyboardDismissMode={'on-drag'}>
              {getScrollViewContent({})}
            </ScrollView>
            <ScrollView {...COMMON_PROPS} keyboardDismissMode={'none'}>
              {getScrollViewContent({})}
            </ScrollView>
          </View>
        </View>
      </TestCase>
      <TestCase
        modal
        skip={Platform.select({android: 'fails', harmony: 'fails on Android'})}
        itShould="adjust the scrollview when showing keyboard (automaticallyAdjustKeyboardInsets)"
        //https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/302
      >
        <View style={styles.wrapperView}>
          <TextInput style={styles.textInput} />
          <ScrollView {...COMMON_PROPS} automaticallyAdjustKeyboardInsets />
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
  textInput: {
    borderWidth: 1,
    borderColor: 'silver',
    backgroundColor: '#444',
    height: 32, // hack
    borderRadius: 8,
    marginTop: 8,
    padding: 8,
    fontSize: 16,
    color: 'white',
  },
});
