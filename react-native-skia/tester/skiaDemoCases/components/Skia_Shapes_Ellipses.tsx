import React, {Component} from 'react';
import {View} from 'react-native';

import {Canvas, Group, Circle, Oval} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

class CircleExample extends Component {
  render() {
    const width = 256;
    const height = 256;
    const r = width * 0.33;

    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width, height}}>
          <Group blendMode="multiply" color={'green'}>
            <Circle cx={r} cy={r} r={r} color="cyan" />
            <Circle cx={width - r} cy={r} r={r} color="magenta" />
            <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
          </Group>
        </Canvas>
      </View>
    );
  }
}

class OvalExample extends Component {
  render() {
    const width = 256;
    const height = 256;
    const r = width * 0.33;

    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width, height}}>
          <Oval x={64} y={0} width={128} height={256} color="lightblue" />
        </Canvas>
      </View>
    );
  }
}

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Circle: cx={r} cy={r} r={r} color='cyan'">
          <CircleExample />
        </TestCase>

        <TestCase itShould="Oval: x={64} y={0} width={128} height={256} color='lightblue'">
          <OvalExample />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
