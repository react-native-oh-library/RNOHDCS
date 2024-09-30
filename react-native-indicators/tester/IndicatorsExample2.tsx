import React from 'react';
import { View, Dimensions, ScrollView, Text, Easing } from 'react-native';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
const { height } = Dimensions.get('window');

export function IndicatorsExample2() {

  const components = [
    {
      Comp: BallIndicator,
      mame: 'BallIndicator1',
      props: {
        color: 'white',
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: true,
        hidesWhenStopped: true,
        count: 8,
        size: 40
      },
    },
    {
      Comp: BallIndicator,
      mame: 'BallIndicator2',
      props: {
        color: 'white',
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: false,
        hidesWhenStopped: true,
        count: 8,
        size: 40
      },
    },
    {
      Comp: BallIndicator,
      mame: 'BallIndicator3',
      props: {
        color: 'white',
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: true,
        hidesWhenStopped: false,
        count: 8,
        size: 40
      },
    },
    {
      Comp: BallIndicator,
      mame: 'BallIndicator4',
      props: {
        color: 'red',
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        count: 6,
        size: 20
      },
    },
    {
      Comp: PulseIndicator,
      mame: 'PulseIndicator1',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: true,
        hidesWhenStopped: true,
        color: 'white',
        size: 60
      },
    },
    {
      Comp: PulseIndicator,
      mame: 'PulseIndicator2',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: false,
        hidesWhenStopped: true,
        color: 'white',
        size: 60
      },
    },
    {
      Comp: PulseIndicator,
      mame: 'PulseIndicator3',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: true,
        hidesWhenStopped: false,
        color: 'white',
        size: 60
      },
    },
    {
      Comp: PulseIndicator,
      mame: 'PulseIndicator4',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'red',
        size: 40
      },
    },
    {
      Comp: SkypeIndicator,
      mame: 'SkypeIndicator1',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        count: 8,
        minScale: 0.2,
        maxScale: 1
      },
    },
    {
      Comp: SkypeIndicator,
      mame: 'SkypeIndicator2',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        count: 8,
        minScale: 0.2,
        maxScale: 1
      },
    },
    {
      Comp: SkypeIndicator,
      mame: 'SkypeIndicator3',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: "Easing.linear",
        animating: false,
        interaction: true,
        hidesWhenStopped: true,
        color: 'white',
        size: 60,
        count: 8,
        minScale: 0.2,
        maxScale: 1
      },
    },
    {
      Comp: SkypeIndicator,
      mame: 'SkypeIndicator4',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'red',
        size: 30,
        count: 4,
        minScale: 0.4,
        maxScale: 2
      },
    },
    {
      Comp: WaveIndicator,
      mame: 'WaveIndicator1',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        count: 8,
        waveFactor: 0.54,
        waveMode: 'fill'
      },
    },
    {
      Comp: WaveIndicator,
      mame: 'WaveIndicator2',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: true,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        count: 8,
        waveFactor: 0.54,
        waveMode: 'fill'
      },
    },
    {
      Comp: WaveIndicator,
      mame: 'WaveIndicator3',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: false,
        hidesWhenStopped: true,
        color: 'white',
        size: 60,
        count: 8,
        waveFactor: 0.54,
        waveMode: 'fill'
      },
    },
    {
      Comp: WaveIndicator,
      mame: 'WaveIndicator4',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'red',
        size: 30,
        count: 4,
        waveFactor: 1,
        waveMode: 'outline'
      },
    },
    {
      Comp: UIActivityIndicator,
      mame: 'UIActivityIndicator1',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        count: 12
      },
    },
    {
      Comp: UIActivityIndicator,
      mame: 'UIActivityIndicator2',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: true,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        count: 12
      },
    },
    {
      Comp: UIActivityIndicator,
      mame: 'UIActivityIndicator3',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: false,
        hidesWhenStopped: true,
        color: 'white',
        size: 60,
        count: 12
      },
    },
    {
      Comp: UIActivityIndicator,
      mame: 'UIActivityIndicator4',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'red',
        size: 30,
        count: 6
      },
    }
  ]
  return (
    <ScrollView>
      <Tester >
        <TestSuite name='IndicatorsExample' >
          {components.map((copm, index) => (
            <TestCase itShould={copm.mame + ': ' + JSON.stringify(copm.props)} tags={['C_API']} key={copm.mame + index}>
              <View style={{ backgroundColor: '#01579B' }}>
                <copm.Comp {...copm.props} />
              </View>
            </TestCase>
          )
          )}
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}


const styles = {
  container: {
    height: height-200,
    backgroundColor: '#01579B',
    padding: 20,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  reverse: {
    transform: [{
      rotate: '180deg',
    }],
  },

  flex: {
    flex: 1,
  },
};