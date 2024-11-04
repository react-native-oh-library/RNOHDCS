import React, {Component} from 'react';
import {View} from 'react-native';

import {
  Canvas,
  RoundedRect,
  Rect,
  rrect,
  rect,
  DiffRect,
  Line,
  vec,
  Points,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

const width = 256;
const height = 256;

class RectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width, height}}>
          <Rect x={0} y={0} width={256} height={256} color="lightblue" />
        </Canvas>
      </View>
    );
  }
}

class RoundedRectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width, height}}>
          <RoundedRect
            x={0}
            y={0}
            width={256}
            height={256}
            r={25}
            color="lightblue"
          />
        </Canvas>
      </View>
    );
  }
}

class CustomRoundedRectExample extends Component {
  render() {
    const size = 256;
    const r = size * 0.2;
    const rrct = {
      rect: {x: 0, y: 0, width: size, height: size},
      topLeft: {x: 0, y: 0},
      topRight: {x: r, y: r},
      bottomRight: {x: 0, y: 0},
      bottomLeft: {x: r, y: r},
    };
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width, height}}>
          <RoundedRect rect={rrct} color="lightblue" />
        </Canvas>
      </View>
    );
  }
}

class DiffRectExample extends Component {
  render() {
    const outer = rrect(rect(0, 0, 256, 256), 25, 25);
    const inner = rrect(rect(50, 50, 256 - 100, 256 - 100), 50, 50);
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width, height}}>
          <DiffRect inner={inner} outer={outer} color="lightblue" />
        </Canvas>
      </View>
    );
  }
}

class LineExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width, height}}>
          <Line
            p1={vec(0, 0)}
            p2={vec(256, 256)}
            color="lightblue"
            style="stroke"
            strokeWidth={4}
          />
        </Canvas>
      </View>
    );
  }
}

class PointsExample extends Component {
  render() {
    const points = [
      vec(128, 0),
      vec(168, 80),
      vec(256, 93),
      vec(192, 155),
      vec(207, 244),
      vec(128, 202),
      vec(49, 244),
      vec(64, 155),
      vec(0, 93),
      vec(88, 80),
      vec(128, 0),
    ];
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width, height}}>
          <Points
            points={points}
            mode="polygon"
            color="lightblue"
            style="stroke"
            strokeWidth={4}
          />
        </Canvas>
      </View>
    );
  }
}

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Rect: x={0} y={0} width={256} height={256} color='lightblue'">
          <RectExample />
        </TestCase>

        <TestCase
          itShould="RoundedRect1: x={0}
            y={0}
            width={256}
            height={256}
            r={25}
            color='lightblue'">
          <RoundedRectExample />
        </TestCase>

        <TestCase itShould="RoundedRect2: rect={rrct} color='lightblue'">
          <CustomRoundedRectExample />
        </TestCase>

        <TestCase itShould="DiffRect: inner={inner} outer={outer} color='lightblue'">
          <DiffRectExample />
        </TestCase>

        <TestCase
          itShould="Line: p1={vec(0, 0)}
            p2={vec(256, 256)}
            color='lightblue'
            style='stroke'
            strokeWidth={4}">
          <LineExample />
        </TestCase>

        <TestCase
          itShould="Points: points={points}
            mode='polygon'
            color='lightblue'
            style='stroke'
            strokeWidth={4}">
          <PointsExample />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
