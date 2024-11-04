import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {
  Box,
  BoxShadow,
  Canvas,
  rect,
  rrect,
  Fill,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

class BoxExample extends Component {
  render() {
    const width = 256;
    const height = 256;
    const r = width * 0.33;

    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width: 256, height: 256}}>
          <Fill color="#add8e6" />
          <Box box={rrect(rect(64, 64, 128, 128), 24, 24)} color="#add8e6">
            <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" />
            <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" />
            <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" />
            <BoxShadow
              dx={-10}
              dy={-10}
              blur={10}
              color="#c7f8ff"
              spread={10}
              inner
            />
          </Box>
        </Canvas>
      </View>
    );
  }
}

class BoxShadowExample extends Component {
  render() {
    const width = 256;
    const height = 256;
    const r = width * 0.33;

    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width: 256, height: 256}}>
          <Fill color="#add8e6" />
          <Box box={rrect(rect(64, 64, 128, 128), 24, 24)} color="#add8e6">
            <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" inner />
            <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" inner />
            <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" />
            <BoxShadow
              dx={-10}
              dy={-10}
              blur={10}
              color="#c7f8ff"
              spread={10}
              inner
            />
          </Box>
        </Canvas>
      </View>
    );
  }
}

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Box: box={rrect(rect(64, 64, 128, 128), 24, 24)} color='#add8e6'">
          <BoxExample />
        </TestCase>
        <TestCase
          itShould="BoxShadow: dx={-10}
              dy={-10}
              blur={10}
              color='#c7f8ff'
              spread={10}
              inner">
          <BoxShadowExample />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
