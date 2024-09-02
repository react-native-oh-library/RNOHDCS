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
  Use,
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

class SimpleMask extends Component {
  static title = 'Simple svg with mask';
  render() {
    return (
      <View style={styles.container}>
        <Svg viewBox="-10 -10 120 120">
          <Rect x={-10} y={-10} width={120} height={120} fill="blue" />
          <Mask id="myMask" maskUnits="objectBoundingBox" maskContentUnits="userSpaceOnUse">
            <Rect x={0} y={0} width={100} height={100} fill="white" />
            <Path
              d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
              fill="black"
            />
          </Mask>
          <Polygon points="-10,110 110,110 110,-10" fill="orange" />
          <Circle cx={50} cy={50} r={50} fill="purple" mask="url(#myMask)" />
        </Svg>       
      </View>
    );
  }
}

class SimpleMaskWithUnits extends Component {
  static title = 'Simple svg with mask but different maskContentUnits';
  render() {
    return (
      <View style={styles.container}>
        <Svg viewBox="-10 -10 120 120">
          <Rect x={-10} y={-10} width={120} height={120} fill="blue" />
          <Mask id="myMask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <Rect x={0} y={0} width={100} height={100} fill="white" />
            <Path
              d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
              fill="black"
            />
          </Mask>
          <Polygon points="-10,110 110,110 110,-10" fill="orange" />
          <Circle cx={50} cy={50} r={50} fill="purple" mask="url(#myMask)" />
        </Svg>
      </View>
    );
  }
}

class AnotherMask extends Component {
  static title = 'Another svg with mask';
  render() {
    return (
      <View style={styles.container}>
        <Svg width={500} height={120}>
          <Defs>
            <Mask id="mask1" x={0} y={0} width={100} height={100}>
              <Rect
                x={0}
                y={0}
                width={100}
                height={50}
                stroke="none"
                fill="#ffffff"
              />
            </Mask>
          </Defs>
          <Rect
            x={1}
            y={1}
            width={100}
            height={100}
            stroke="none"
            fill="#0000ff"
            mask="url(#mask1)"
          />
          <Rect
            x={1}
            y={1}
            width={100}
            height={100}
            stroke="#000000"
            fill="none"
          />
        </Svg>
      </View>
    );
  }
}

class MaskWithText extends Component {
  static title = 'Svg with with text and a mask with gradient';
  render() {
    return (
      <View style={styles.container}>
        <Svg width={500} height={120}>
          <Defs>
            <LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#ffffff" stopOpacity={1} />
              <Stop offset="100%" stopColor="#000000" stopOpacity={1} />
            </LinearGradient>
            <Mask id="mask4" x={0} y={0} width={300} height={100}>
              <Rect
                x={0}
                y={0}
                width={200}
                height={100}
                stroke="none"
                fill="url(#gradient1)"
              />
            </Mask>
          </Defs>
          <Text x={10} y={55} stroke="none" fill="#000000">
            {'Under the rectangle'}
          </Text>
          <Rect
            x={1}
            y={1}
            width={300}
            height={100}
            stroke="none"
            fill="#0000ff"
            mask="url(#mask4)"
          />
        </Svg>
      </View>
    );
  }
}

const icon = (
  <Svg width="30" height="30" viewBox="-10 -10 120 120">
    <Rect x={-10} y={-10} width={120} height={120} fill="blue" />
    <Mask id="myMask">
      <Rect x={0} y={0} width={100} height={100} fill="white" />
      <Path
        d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
        fill="black"
      />
    </Mask>
    <Polygon points="-10,110 110,110 110,-10" fill="orange" />
    <Circle cx={50} cy={50} r={50} fill="purple" mask="url(#myMask)" />
  </Svg>
);

class SimpleRNSVGMask extends Component {
  static title = 'Simple svg with SimpleRNSVGMask';
  render() {
    return (
      <View style={styles.container}>
        <Svg viewBox="-10 -10 120 120">
          <Rect x={-10} y={-10} width={120} height={120} fill="blue" />
          <RNSVGMask name="myMask" x="0" y="0" width="100" height="100">
            <Rect x={0} y={0} width={100} height={100} fill="white" />
            <Path
              d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
              fill="black"
            />
          </RNSVGMask>
          <Polygon points="-10,110 110,110 110,-10" fill="orange" />
          <Circle cx={50} cy={50} r={50} fill="purple" mask="url(#myMask)" />
        </Svg>
      </View>
    );
  }
}

class AnotherRNSVGMask extends Component {
  static title = 'Another svg with mask';
  render() {
    return (
      <View style={styles.container}>
        <Svg width={500} height={120}>
          <Defs>
            <RNSVGMask name="mask1" x="0" y="0" width="100" height="100">
              <Rect
                x={0}
                y={0}
                width={100}
                height={50}
                stroke="none"
                fill="#ffffff"
              />
            </RNSVGMask>
          </Defs>
          <Rect
            x={1}
            y={1}
            width={100}
            height={100}
            stroke="none"
            fill="#0000ff"
            mask="url(#mask1)"
          />
          <Rect
            x={1}
            y={1}
            width={100}
            height={100}
            stroke="#000000"
            fill="none"
          />
        </Svg>
      </View>
    );
  }
}

class RNSVGMaskWithText extends Component {
  static title = 'Svg with with text and a RNSVGMask with gradient';
  render() {
    return (
      <View style={styles.container}>
        <Svg width={500} height={120}>
          <Defs>
            <LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#ffffff" stopOpacity={1} />
              <Stop offset="100%" stopColor="#000000" stopOpacity={1} />
            </LinearGradient>
            <RNSVGMask name="mask4" x="0" y="0" width="300" height="100">
              <Rect
                x={0}
                y={0}
                width={200}
                height={100}
                stroke="none"
                fill="url(#gradient1)"
              />
            </RNSVGMask>
          </Defs>
          <Text x={10} y={55} stroke="none" fill="#000000">
            {'Under the rectangle'}
          </Text>
          <Rect
            x={1}
            y={1}
            width={300}
            height={100}
            stroke="none"
            fill="#0000ff"
            mask="url(#mask4)"
          />
        </Svg>
      </View>
    );
  }
}

const iconRNSVGMask = (
  <Svg width="30" height="30" viewBox="-10 -10 120 120">
    <Rect x={-10} y={-10} width={120} height={120} fill="blue" />
    <RNSVGMask name="myMask"  x="0" y="0" width="100" height="100">
      <Rect x={0} y={0} width={100} height={100} fill="white" />
      <Path
        d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
        fill="black"
      />
    </RNSVGMask>
    <Polygon points="-10,110 110,110 110,-10" fill="orange" />
    <Circle cx={50} cy={50} r={50} fill="purple" mask="url(#myMask)" />
  </Svg>
);

class MaskUnits extends Component {
  static title = 'MaskUnits';
  render() {
    return (
      <View style={styles.container}>
          <Svg viewBox="0 0 100 100">
            <Mask
              id="myMask1"
              maskUnits="userSpaceOnUse"
              x="20%"
              y="20%"
              width="60%"
              height="60%">
              <Rect fill="black" x="0" y="0" width="100%" height="100%" />
              <Circle fill="white" cx="50" cy="50" r="35" />
            </Mask>

            <Mask
              id="myMask2"
              maskUnits="objectBoundingBox"
              x="20%"
              y="20%"
              width="60%"
              height="60%">
              <Rect fill="black" x="0" y="0" width="100%" height="100%" />
              <Circle fill="white" cx="50" cy="50" r="35" />
            </Mask>

            <Rect id="r1" x="0" y="0" width="45" height="45" />
            <Rect id="r2" x="0" y="55" width="45" height="45" />
            <Rect id="r3" x="55" y="55" width="45" height="45" />
            <Rect id="r4" x="55" y="0" width="45" height="45" />

            <Use mask="url(#myMask1)" href="#r1" fill="red" />
            <Use mask="url(#myMask1)" href="#r2" fill="red" />
            <Use mask="url(#myMask1)" href="#r3" fill="red" />

            <Use mask="url(#myMask2)" href="#r4" fill="yellow" />
          </Svg>
      </View>
    );
  }
}

const samples = [SimpleMask, AnotherMask, MaskWithText, SimpleRNSVGMask, AnotherRNSVGMask, RNSVGMaskWithText, iconRNSVGMask, MaskUnits];

export { icon, iconRNSVGMask, samples };

export default function () {
  return (
    <Tester style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <ScrollView>
        <TestCase itShould="SimpleMask">
          <SimpleMask />
        </TestCase>
        <TestCase itShould="IconMask">
          {icon}
        </TestCase>
        <TestCase itShould="MaskWithText">
          <MaskWithText />
        </TestCase>
        <TestCase itShould="AnotherMask">
          <AnotherMask />
        </TestCase>

        <TestCase itShould="SimpleRNSVGMask">
          <SimpleRNSVGMask />
        </TestCase>
        <TestCase itShould="IconRNSVGMask">
          {iconRNSVGMask}
        </TestCase>
        <TestCase itShould="RNSVGMaskWithText">
          <RNSVGMaskWithText />
        </TestCase>
        <TestCase itShould="AnotherRNSVGMask">
          <AnotherRNSVGMask />
        </TestCase>

        <TestCase itShould="MaskUnits">
          <MaskUnits />
        </TestCase>
      </ScrollView>
    </Tester>
  )
}