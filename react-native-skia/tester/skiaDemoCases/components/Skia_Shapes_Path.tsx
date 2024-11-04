import React, {Component} from 'react';
import {View} from 'react-native';

import {Canvas, Path, Skia, Fill} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

class SVGNotationPathExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{flex: 1, width: 256, height: 256}}>
          <Path
            path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
            color="lightblue"
          />
        </Canvas>
      </View>
    );
  }
}

class PathObjectExample extends Component {
  render() {
    const path = Skia.Path.Make();
    path.moveTo(128, 0);
    path.lineTo(168, 80);
    path.lineTo(256, 93);
    path.lineTo(192, 155);
    path.lineTo(207, 244);
    path.lineTo(128, 202);
    path.lineTo(49, 244);
    path.lineTo(64, 155);
    path.lineTo(0, 93);
    path.lineTo(88, 80);
    path.lineTo(128, 0);
    path.close();
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{flex: 1, width: 256, height: 256}}>
          <Path path={path} color="lightblue" />
        </Canvas>
      </View>
    );
  }
}

class TrimPathExample extends Component {
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{flex: 1, width: 256, height: 256}}>
          <Path
            path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
            color="lightblue"
            style="stroke"
            strokeJoin="round"
            strokeWidth={5}
            // We trim the first and last quarter of the path
            start={0.25}
            end={0.75}
          />
        </Canvas>
      </View>
    );
  }
}

class FillTypePathExample extends Component {
  star = () => {
    const R = 115.2;
    const C = 128.0;
    const path = Skia.Path.Make();
    path.moveTo(C + R, C);
    for (let i = 1; i < 8; ++i) {
      const a = 2.6927937 * i;
      path.lineTo(C + R * Math.cos(a), C + R * Math.sin(a));
    }
    return path;
  };

  render() {
    const path = this.star();
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{flex: 1, width: 256, height: 256}}>
          <Fill color="white" />
          <Path path={path} style="stroke" strokeWidth={4} color="#3EB489" />
          <Path path={path} color="lightblue" fillType="evenOdd" />
        </Canvas>
      </View>
    );
  }
}

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="Path1:
            path='M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z'
            color='lightblue'
          ">
          <SVGNotationPathExample />
        </TestCase>

        <TestCase itShould="Path2: path={path} color='lightblue'">
          <PathObjectExample />
        </TestCase>

        <TestCase
          itShould="Path3: path='M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z'
            color='lightblue'
            style='stroke'
            strokeJoin='round'
            strokeWidth={5}
            start={0.25}
            end={0.75}">
          <TrimPathExample />
        </TestCase>

        <TestCase itShould="Path4: path={path} style='stroke' strokeWidth={4} color='#3EB489'">
          <FillTypePathExample />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
