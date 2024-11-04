import React, {Component} from 'react';
import {View} from 'react-native';

import {
  Canvas,
  rect,
  Path,
  Skia,
  Group,
  Circle,
  DiscretePathEffect,
  DashPathEffect,
  Rect,
  CornerPathEffect,
  Path1DPathEffect,
  Path2DPathEffect,
  processTransform2d,
  Line2DPathEffect,
  Vector,
  sub,
  transformOrigin,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import {translate} from '../lib/Animations';

const vWidth = 466;
const vHeight = 182;
const vOrigin = {x: vWidth / 2, y: vHeight / 2};

const path = Skia.Path.MakeFromSVGString(
  // eslint-disable-next-line max-len
  'M466 91C466 141.258 361.682 182 233 182C104.318 182 0 141.258 0 91C0 40.7421 104.318 0 233 0C361.682 0 466 40.7421 466 91Z',
)!;

const Logo: React.FC<{center: Vector; origin: Vector; scale: number}> = ({
  center,
  origin,
  scale,
}) => {
  return (
    <>
      <Circle c={center} r={30} style="fill" />
      <Group>
        <Group transform={[...translate(sub(center, origin)), {scale}]}>
          <Path path={path} style="stroke" strokeWidth={15} />
        </Group>
        <Group
          transform={[
            ...translate(sub(center, origin)),
            {scale},
            ...transformOrigin(vOrigin, [{rotate: Math.PI / 3}]),
          ]}>
          <Path path={path} style="stroke" strokeWidth={15} />
        </Group>
        <Group
          transform={[
            ...translate(sub(center, origin)),
            {scale},
            ...transformOrigin(vOrigin, [{rotate: -Math.PI / 3}]),
          ]}>
          <Path path={path} style="stroke" strokeWidth={15} />
        </Group>
      </Group>
    </>
  );
};

const rect1 = rect(0, 0, vWidth, vHeight);
const SquaredLogo: React.FC<{
  center: Vector;
  origin: Vector;
  scale: number;
}> = ({center, origin, scale}) => {
  return (
    <>
      <Circle c={center} r={30} style="fill" />
      <Group color="#61DAFB" opacity={1} style="stroke" strokeWidth={15}>
        <Group transform={[...translate(sub(center, origin)), {scale}]}>
          <Rect rect={rect1} />
        </Group>
        <Group
          transform={[
            ...translate(sub(center, origin)),
            {scale},
            ...transformOrigin(vOrigin, [{rotate: Math.PI / 3}]),
          ]}>
          <Rect rect={rect1} />
        </Group>
        <Group
          transform={[
            ...translate(sub(center, origin)),
            {scale},
            ...transformOrigin(vOrigin, [{rotate: -Math.PI / 3}]),
          ]}>
          <Rect rect={rect1} />
        </Group>
      </Group>
    </>
  );
};

const width = 256;
const SIZE = width;
const scale = (SIZE - 64) / vWidth;
const origin = {x: (vWidth * scale) / 2, y: (vHeight * scale) / 2};
const center = {x: SIZE / 2, y: SIZE / 2};
const styles = {width: 256, height: width};

class DiscretePathEffectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <DiscretePathEffect length={10} deviation={4} seed={10} />
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class DiscretePathEffectChildrenExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <DiscretePathEffect length={10} deviation={4} seed={10}>
              <DashPathEffect intervals={[4, 4]} />
            </DiscretePathEffect>
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class DashPathEffectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <DashPathEffect intervals={[10, 10]} phase={4} />
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class DashPathEffectChildrenExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <DashPathEffect intervals={[10, 10]} phase={4}>
              <DiscretePathEffect length={10} deviation={4} seed={10} />
            </DashPathEffect>
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class CornerPathEffectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15} opacity={0.5}>
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <CornerPathEffect r={200} />
            <SquaredLogo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class CornerPathEffectChildrenExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15} opacity={0.5}>
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <CornerPathEffect r={200}>
              <DashPathEffect intervals={[4, 4]} />
            </CornerPathEffect>
            <SquaredLogo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class Path1DPathEffectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <Path1DPathEffect
              path="M -10 0 L 0 -10, 10 0, 0 10 Z"
              advance={20}
              phase={0}
              style="rotate"
            />
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class Path1DPathEffectChildrenExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <Path1DPathEffect
              path="M -10 0 L 0 -10, 10 0, 0 10 Z"
              advance={20}
              phase={0}
              style="rotate">
              <DashPathEffect intervals={[4, 4]} />
            </Path1DPathEffect>
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class Path2DPathEffectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <Path2DPathEffect
              path="M -10 0 L 0 -10, 10 0, 0 10 Z"
              matrix={processTransform2d([{scale: 40}])}
            />
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class Path2DPathEffectChildrenExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <Path2DPathEffect
              path="M -10 0 L 0 -10, 10 0, 0 10 Z"
              matrix={processTransform2d([{scale: 40}])}>
              <DiscretePathEffect length={10} deviation={4} seed={10} />
            </Path2DPathEffect>
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class Line2DPathEffectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <Line2DPathEffect
              width={0}
              matrix={processTransform2d([{scale: 8}])}
            />
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class Line2DPathEffectChildrenExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <Line2DPathEffect
              width={0}
              matrix={processTransform2d([{scale: 8}])}>
              <DashPathEffect intervals={[4, 4]} />
            </Line2DPathEffect>
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class ComposePathEffectExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={styles}>
          <Group color="#61DAFB" style="stroke" strokeWidth={15}>
            <DashPathEffect intervals={[10, 10]}>
              <DiscretePathEffect length={10} deviation={10} />
            </DashPathEffect>
            <Logo center={center} origin={origin} scale={scale} />
          </Group>
        </Canvas>
      </View>
    );
  }
}

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="DiscretePathEffect: length={10} deviation={4} seed={10}">
          <DiscretePathEffectExample />
        </TestCase>

        <TestCase itShould="DiscretePathEffect: length={10} deviation={4} seed={10} children">
          <DiscretePathEffectChildrenExample />
        </TestCase>

        <TestCase itShould="DashPathEffect: intervals={[10, 10]} phase={4}">
          <DashPathEffectExample />
        </TestCase>

        <TestCase itShould="DashPathEffect: intervals={[10, 10]} phase={4} children">
          <DashPathEffectChildrenExample />
        </TestCase>

        <TestCase itShould="CornerPathEffect: r={200}">
          <CornerPathEffectExample />
        </TestCase>

        <TestCase itShould="CornerPathEffect: r={200} children">
          <CornerPathEffectChildrenExample />
        </TestCase>

        <TestCase itShould="Path1DPathEffect: path='M -10 0 L 0 -10, 10 0, 0 10 Z' advance={20} phase={0} style='rotate'">
          <Path1DPathEffectExample />
        </TestCase>

        <TestCase itShould="Path1DPathEffect: path='M -10 0 L 0 -10, 10 0, 0 10 Z' advance={20} phase={0} style='rotate' children">
          <Path1DPathEffectChildrenExample />
        </TestCase>

        <TestCase itShould="Path2DPathEffect: path='M -10 0 L 0 -10, 10 0, 0 10 Z' matrix={processTransform2d([{scale: 40}])}">
          <Path2DPathEffectExample />
        </TestCase>

        <TestCase itShould="Path2DPathEffect: path='M -10 0 L 0 -10, 10 0, 0 10 Z' matrix={processTransform2d([{scale: 40}])} children">
          <Path2DPathEffectChildrenExample />
        </TestCase>

        <TestCase itShould="Line2DPathEffect: width={0} matrix={processTransform2d([{scale: 8}])}">
          <Line2DPathEffectExample />
        </TestCase>

        <TestCase itShould="Line2DPathEffect: width={0} matrix={processTransform2d([{scale: 8}])} children">
          <Line2DPathEffectChildrenExample />
        </TestCase>

        <TestCase itShould="DashPathEffect and DiscretePathEffect: Compose Path Effect">
          <ComposePathEffectExample />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
