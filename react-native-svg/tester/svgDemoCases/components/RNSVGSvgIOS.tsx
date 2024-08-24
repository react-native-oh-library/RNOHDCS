import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  RNSVGSvgIOS,
  Rect
} from 'react-native-svg';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 200,
    marginBottom: 10,
  },
  minContainer: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
});

class RNSVGSvgIOSSize extends Component {
  static title = 'bbwidth and bbheight';
  render() {
    return (
      <View style={styles.container}>
        <RNSVGSvgIOS bbWidth="240" bbHeight ="240">
          <Rect x={0} y={0} width={120} height={120} fill="blue" />
        </RNSVGSvgIOS>
      </View>
    );
  }
}

class RNSVGSvgIOSMin extends Component {
  static title = 'minX and minY';
  render() {
    return (
      <View style={styles.minContainer}>
        <RNSVGSvgIOS minX={20} minY={20}  bbWidth="240" bbHeight ="240">
          <Rect x={0} y={0} width={120} height={120} fill="blue" />
        </RNSVGSvgIOS>
      </View>
    );
  }
}

class RNSVGSvgIOSVb extends Component {
  static title = 'vbWidth and vbHeight';
  render() {
    return (
      <View style={styles.minContainer}>
        <RNSVGSvgIOS  vbHeight={60} vbHeight={60}>
          <Rect x={0} y={0} width={120} height={120} fill="blue" />
        </RNSVGSvgIOS>
      </View>
    );
  }
}

class RNSVGSvgIOSAlign extends Component {
  static title = 'align and meetOrSlice';
  render() {
    return (
      <View style={styles.minContainer}>
        <RNSVGSvgIOS bbWidth="240" bbHeight ="240" align="xMidYMid" meetOrSlice={2}>
          <Rect x={0} y={0} width={120} height={120} fill="blue" />
        </RNSVGSvgIOS>
      </View>
    );
  }
}

class RNSVGSvgIOSColor extends Component {
  static title = 'color and tintColor';
  render() {
    return (
      <View style={styles.minContainer}>
        <RNSVGSvgIOS bbWidth="240" bbHeight ="240" color="red" tintColor="green">
          <Rect x={0} y={0} width={120} height={120} fill="blue" />
        </RNSVGSvgIOS>
      </View>
    );
  }
}

class RNSVGSvgIOSPointerEvents extends Component {
  static title = 'pointerEvents';
  render() {
    return (
      <View style={styles.container}>
        <RNSVGSvgIOS bbWidth="240" bbHeight="240"  pointerEvents='box-none'>
          <Rect x={0} y={0} width={120} height={120} fill="blue" />
        </RNSVGSvgIOS>
      </View>
    );
  }
}

const samples = [RNSVGSvgIOSSize, RNSVGSvgIOSMin, RNSVGSvgIOSVb, RNSVGSvgIOSAlign, RNSVGSvgIOSColor, RNSVGSvgIOSPointerEvents];

export { samples };

export default function () {
  return (
    <Tester style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <ScrollView>
        <TestCase itShould="RNSVGSvgIOSSize">
          <RNSVGSvgIOSSize />
        </TestCase>
        <TestCase itShould="RNSVGSvgIOSMin">
          <RNSVGSvgIOSMin />
        </TestCase>
        <TestCase itShould="RNSVGSvgIOSVb">
          <RNSVGSvgIOSVb />
        </TestCase>
        <TestCase itShould="RNSVGSvgIOSAlign">
          <RNSVGSvgIOSAlign />
        </TestCase>
        <TestCase itShould="RNSVGSvgIOSColor">
          <RNSVGSvgIOSColor />
        </TestCase>
        <TestCase itShould="RNSVGSvgIOSPointerEvents">
          <RNSVGSvgIOSPointerEvents />
        </TestCase>
      </ScrollView>
    </Tester>
  )
}