import React, {PureComponent} from 'react';
import {
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from 'react-native';
import {G, Line, Path, Polyline, Svg, Text} from 'react-native-svg';
import {Tester, TestCase} from '@rnoh/testerino';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const zeroDelta = {x: 0, y: 0};

class PanExample extends PureComponent {
  static title = 'Bind PanResponder on the SVG Shape';
  panXY: any;
  constructor(props: {}, context: {}) {
    super(props, context);
    const xy = new Animated.ValueXY();
    const {x: dx, y: dy} = xy;
    let offset = zeroDelta;
    xy.addListener(flatOffset => {
      offset = flatOffset;
    });
    const {panHandlers} = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        xy.setOffset(offset);
        xy.setValue(zeroDelta);
      },
      onPanResponderMove: Animated.event([null, {dx, dy}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        xy.flattenOffset();
      },
    });
    this.panXY = {
      style: {
        transform: xy.getTranslateTransform(),
      },
      ...panHandlers,
    };
  }
  render() {
    return (
      <TouchableWithoutFeedback>
        <View>
          <AnimatedSvg height="200" width="200" {...this.panXY}>
            <Path
              d="M50,5L20,99L95,39L5,39L80,99z"
              stroke={'black'}
              fill={'red'}
              strokeWidth="6"
              scale="0.8"
            />
            <Text
              fontSize="20"
              fontWeight="bold"
              fill="blue"
              textAnchor="middle"
              x="40"
              y="80">
              STAR
            </Text>
          </AnimatedSvg>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const samples = [PanExample,];

export {samples};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Bind PanResponder on the SVG Shape">
          <PanExample />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}