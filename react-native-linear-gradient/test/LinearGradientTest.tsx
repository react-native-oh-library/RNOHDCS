import { TestCase, TestSuite } from '@rnoh/testerino';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'';

export function LinearGradientApiTest() {
  return (
    <TestSuite name="LinearGradient">
      <TestCase itShould="angleCenter">
        <LinearGradient
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['green', 'blue', 'red']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.gradient}>
        </LinearGradient>
      </TestCase>
    </TestSuite>
  );
}
const styles = StyleSheet.create({
	gradient: {
	  height: 100,
	  margin: 4,
	  width: 100,
	}
});