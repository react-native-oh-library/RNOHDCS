import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  Svg,
  Circle,
  Path,
  Rect,
  Mask,
  RNSVGMask,
  Polygon,
  Defs,
  LinearGradient,
  Stop,
  Text,
  Pattern,
  Ellipse
} from 'react-native-svg';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 200,
    marginBottom: 10,
  },
  svg: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

class SimplePattern extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
            <Svg width="100%" height="100%" viewBox="0 0 800 400">
            <Defs>
              <Pattern
                id="TrianglePattern"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100">
                <Path d="M 0 0 L 7 0 L 3.5 7 z" fill="red"/>
              </Pattern>
            </Defs>
            <Rect fill="none" stroke="blue" x="1" y="1" width="798" height="398" />
            <Ellipse
              fill="url(#TrianglePattern)"
              stroke="black"
              strokeWidth="5"
              cx="400"
              cy="200"
              rx="350"
              ry="150"
            />
          </Svg>
        </View>
    );
  }
}

class WithViewBox extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
            <Svg width="100%" height="100%" viewBox="0 0 800 400">
            <Defs>
              <Pattern
                id="TrianglePattern"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
                viewBox="0 0 10 10">
                <Path d="M 0 0 L 7 0 L 3.5 7 z" fill="red"/>
              </Pattern>
            </Defs>
            <Rect fill="none" stroke="blue" x="1" y="1" width="798" height="398" />
            <Ellipse
              fill="url(#TrianglePattern)"
              stroke="black"
              strokeWidth="5"
              cx="400"
              cy="200"
              rx="350"
              ry="150"
            />
          </Svg>
        </View>
    );
  }
}

class WithViewBoxandX extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
          <Svg width="100%" height="100%" viewBox="0 0 800 400">
            <Defs>
              <Pattern
                id="TrianglePattern"
                patternUnits="userSpaceOnUse"
                x="10"
                width="100"
                height="100"
                viewBox="0 0 10 10">
                <Path d="M 0 0 L 7 0 L 3.5 7 z" fill="red"/>
              </Pattern>
            </Defs>
            <Rect fill="none" stroke="blue" x="1" y="1" width="798" height="398" />
            <Ellipse
              fill="url(#TrianglePattern)"
              stroke="black"
              strokeWidth="5"
              cx="400"
              cy="200"
              rx="350"
              ry="150"
            />
          </Svg>
        </View>
    );
  }
}

class WithViewBoxandY extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
          <Svg width="100%" height="100%" viewBox="0 0 800 400">
            <Defs>
              <Pattern
                id="TrianglePattern"
                patternUnits="userSpaceOnUse"
                y="10"
                width="100"
                height="100"
                viewBox="0 0 10 10">
                <Path d="M 0 0 L 7 0 L 3.5 7 z" fill="red"/>
              </Pattern>
            </Defs>
            <Rect fill="none" stroke="blue" x="1" y="1" width="798" height="398" />
            <Ellipse
              fill="url(#TrianglePattern)"
              stroke="black"
              strokeWidth="5"
              cx="400"
              cy="200"
              rx="350"
              ry="150"
            />
          </Svg>
        </View>
    );
  }
}

class WidthandHeight extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
          <Svg width="100%" height="100%" viewBox="0 0 800 400">
            <Defs>
              <Pattern
                id="TrianglePattern"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
                viewBox="0 0 10 10">
                <Path d="M 0 0 L 7 0 L 3.5 7 z" fill="red"/>
              </Pattern>
            </Defs>
            <Rect fill="none" stroke="blue" x="1" y="1" width="798" height="398" />
            <Ellipse
              fill="url(#TrianglePattern)"
              stroke="black"
              strokeWidth="5"
              cx="400"
              cy="200"
              rx="350"
              ry="150"
            />
          </Svg>
        </View>
    );
  }
}

class WithoutTransform extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
            <Svg viewBox="0 0 100 100">
            <Pattern
              id="p1"
              width=".20"
              height=".20"
            >
            <Circle cx="10" cy="10" r="10" />
            </Pattern>
            <Rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
          </Svg>
        </View>
    );
  }
}

class WithTransform extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
            <Svg viewBox="0 0 100 100">
            <Pattern
              id="p1"
              width=".20"
              height=".20"
              patternTransform="rotate(20)
                      skewX(30)
                      scale(1 0.5)"
            >
            <Circle cx="10" cy="10" r="10" />
            </Pattern>
            <Rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
          </Svg>
        </View>
    );
  }
}

class WithPatternUnits extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
          <Svg viewBox="0 0 100 100">
            <Pattern
              id="p1"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
              patternTransform="rotate(20)
                      skewX(30)
                      scale(1 0.5)"
            >
              <Circle cx="10" cy="10" r="10" />
            </Pattern>
            <Rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
          </Svg>
        </View>
    );
  }
}

class ContentUnitsUse extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
          <Svg viewBox="0 0 100 100">
            <Pattern
              id="p1"
              width="20%"
              height="20%"
              patternContentUnits="userSpaceOnUse"
              >
              <Circle cx="10" cy="10" r="10" />
            </Pattern>
            <Rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
          </Svg>
        </View>
    );
  }
}

class ContentUnitsObj extends Component {
  static title = 'pattern svg with viewbox';
  render() {
    return (
        <View style={styles.container}>
          <Svg viewBox="0 0 100 100">
            <Pattern
              id="p1"
              width="20%"
              height="20%"
              patternContentUnits="objectBoundingBox"
              >
              <Circle cx=".1" cy=".1" r=".1" />
            </Pattern>
            <Rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
          </Svg>
        </View>
    );
  }
}

const samples = [SimplePattern,
                 WithViewBox,
                 WithViewBoxandX,
                 WithViewBoxandY,
                 WidthandHeight,
                 WithoutTransform,
                 WithTransform,
                 WithPatternUnits,
                 ContentUnitsUse,
                 ContentUnitsObj
                ];

export { samples };

export default function () {
  return (
    <Tester style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <ScrollView>
        <TestCase itShould="width=100,height=100">
          <SimplePattern />
        </TestCase>
        <TestCase itShould="width=100,height=100,viewBox=0 0 10 10">
          <WithViewBox />
        </TestCase>
        <TestCase itShould="x=10,width=100,height=100,viewBox=0 0 10 10">
          <WithViewBoxandX />
        </TestCase>
        <TestCase itShould="y=10,width=100,height=100,viewBox=0 0 10 10">
          <WithViewBoxandY />
        </TestCase>
        <TestCase itShould="width=20,height=20,viewBox=0 0 10 10">
          <WidthandHeight />
        </TestCase>
        <TestCase itShould="width=.20,height=.20">
          <WithoutTransform />
        </TestCase>
        <TestCase itShould="width=20,height=20,patternTransform=rotate(20) skewX(30) scale(1 0.5)">
          <WithTransform />
        </TestCase>
        <TestCase itShould="patternUnits=userSpaceOnUse,width=20,height=20,patternTransform=rotate(20) skewX(30) scale(1 0.5)">
          <WithPatternUnits />
        </TestCase>
        <TestCase itShould="patternContentUnits=userSpaceOnUse,width=20%,height=20%">
          <ContentUnitsUse />
        </TestCase>
        <TestCase itShould="patternContentUnits=objectBoundingBox,width=20%,height=20%">
          <ContentUnitsObj />
        </TestCase>
      </ScrollView>
    </Tester>
  )
}