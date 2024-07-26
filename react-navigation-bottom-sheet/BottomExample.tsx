import * as React from 'react';
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SimpleExample } from './SimpleExample';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
const { width, height } = Dimensions.get('window');

export function BottomExample() {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name='BottomSheetTesteDemo'>
        <TestCase itShould="BottomSheet0 (snapPoints=['60%', '80%'] has onSnapTo)" tags={['C_API']}>
            <View style={styles.app}>
              <GestureHandlerRootView style={styles.container}>
                <SimpleExample onSnapTo={true} snapPoints={['60%', '80%']} />
              </GestureHandlerRootView>
            </View>
          </TestCase>
          <TestCase itShould="BottomSheet1 (snapPoints=['60%', '80%'] has snapTo)" tags={['C_API']}>
            <View style={styles.app}>
              <GestureHandlerRootView style={styles.container}>
                <SimpleExample snapPoints={['60%', '80%']} />
              </GestureHandlerRootView>
            </View>
          </TestCase>
          <TestCase itShould="BottomSheet2 (snapPoints=[''90%', '100%'] has snapTo)" tags={['C_API']}>
            <View style={styles.app}>
              <GestureHandlerRootView style={styles.container}>
                <SimpleExample snapPoints={['90%', '100%']} />
              </GestureHandlerRootView>
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  app: {
    height: height - 200
  },
  container: {
    flex: 1,
  },
});
