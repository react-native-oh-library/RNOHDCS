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

export function IndicatorsExample() {

  const components = [
    {
      Comp: MaterialIndicator,
      mame: 'MaterialIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        trackWidth: 12
      },
    },
    {
      Comp: MaterialIndicator,
      mame: 'MaterialIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: true,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        trackWidth: 12
      },
    },
    {
      Comp: MaterialIndicator,
      mame: 'MaterialIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: true,
        hidesWhenStopped: true,
        color: 'white',
        size: 60,
        trackWidth: 12
      },
    },
    {
      Comp: MaterialIndicator,
      mame: 'MaterialIndicator',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: true,
        hidesWhenStopped: false,
        color: 'red',
        size: 30,
        trackWidth: 3
      },
    },
    {
      Comp: PacmanIndicator,
      mame: 'PacmanIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
      },
    },
    {
      Comp: PacmanIndicator,
      mame: 'PacmanIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
      },
    },
    {
      Comp: PacmanIndicator,
      mame: 'PacmanIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: true,
        hidesWhenStopped: true,
        color: 'white',
        size: 60,
      },
    },
    {
      Comp: PacmanIndicator,
      mame: 'PacmanIndicator',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: true,
        hidesWhenStopped: false,
        color: 'red',
        size: 30,
      },
    },
    {
      Comp: BarIndicator,
      mame: 'BarIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        count: 6
      },
    },
    {
      Comp: BarIndicator,
      mame: 'BarIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 60,
        count: 6
      },
    },
    {
      Comp: BarIndicator,
      mame: 'BarIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: false,
        interaction: false,
        hidesWhenStopped: true,
        color: 'white',
        size: 60,
        count: 6
      },
    },
    {
      Comp: BarIndicator,
      mame: 'BarIndicator',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: true,
        hidesWhenStopped: false,
        color: 'red',
        size: 30,
        count: 3
      },
    },
    {
      Comp: DotIndicator,
      mame: 'DotIndicator',
      props: {
        animationDuration: 1000,
        animationEasing: Easing.linear,
        animationEasing_: 'Easing.linear',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'white',
        size: 40,
        count: 6
      },
    },
    {
      Comp: DotIndicator,
      mame: 'DotIndicator',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: false,
        interaction: false,
        hidesWhenStopped: true,
        color: 'red',
        size: 30,
        count: 3,
        style: styles.reverse
      },
    },
    {
      Comp: DotIndicator,
      mame: 'DotIndicator',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: false,
        interaction: true,
        hidesWhenStopped: false,
        color: 'red',
        size: 30,
        count: 3,
        style: styles.reverse
      },
    },
    {
      Comp: DotIndicator,
      mame: 'DotIndicator',
      props: {
        animationDuration: 500,
        animationEasing: Easing.ease,
        animationEasing_: 'Easing.ease',
        animating: true,
        interaction: false,
        hidesWhenStopped: false,
        color: 'red',
        size: 30,
        count: 3,
        style: styles.reverse
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
    height: height - 200,
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