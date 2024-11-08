import _ from 'lodash';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {
  Constants,
  Colors,
  View,
  Text,
  ColorSwatch,
  ColorPalette,
} from 'react-native-ui-lib'; //eslint-disable-line
import {TestCase, TestSuite} from '@rnoh/testerino';

export default class ColorSwatchScreen extends Component {
  colors = [
    'transparent',
    Colors.$backgroundSuccessHeavy,
    Colors.$backgroundWarningHeavy,
    Colors.$backgroundDangerHeavy,
  ];
  mainColors = [
    '#66737C',
    '#459FED',
    '#1D5382',
    '#3CC7C5',
    '#65C888',
    '#FAAD4D',
    '#F27052',
    '#F2564D',
    '#B13DAC',
    '#733CA6',
    '#79838A',
    '#5847FF',
    '#00BBF2',
    '#00CD8B',
    '#FF563D',
    '#ffb600',
  ];
  allColors = _.filter(Object.values(Colors), _.isString);

  state = {
    color: this.colors[0],
    color1: this.mainColors[this.mainColors.length - 1],
    color2: this.allColors[20],
    selected: false,
  };

  onPress = () => {
    this.setState({selected: !this.state.selected});
  };

  onValueChange = (value: string) => {
    this.setState({color: value});
  };
  onValueChange1 = (value: string) => {
    this.setState({color1: value});
  };
  onValueChange2 = (value: string) => {
    this.setState({color2: value});
  };

  unavailableOnPress = () => {
    console.log(`Pressed on unavailable color swatch!`);
  };

  render() {
    const {color, color1, color2, selected} = this.state;

    return (
      <TestSuite name="ColorSwatch">
        <TestCase
          itShould="设置selected 和 onPress 属性"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-20>
              <ColorSwatch
                selected={selected}
                onPress={() => {
                  this.onPress();
                  setState(true);
                }}
              />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase itShould="设置 Disabled">
          <View padding-20>
            <ColorSwatch color={Colors.$backgroundMajorLight} />
          </View>
        </TestCase>
        <TestCase itShould="设置 Unavailable">
          <View padding-20>
            <ColorSwatch
              unavailable
              onPress={this.unavailableOnPress}
              color={Colors.yellow10}
            />
          </View>
        </TestCase>
        <TestCase itShould="ColorPalette组件">
          <View padding-20>
            <Text marginB-10 text70 style={{color}}>
              Selected Color: {color}
            </Text>
            <ColorPalette
              value={color}
              onValueChange={this.onValueChange}
              colors={this.colors}
            />

            <Text margin-10 text60>
              Scrollable
            </Text>
            <ColorPalette
              value={color1}
              onValueChange={this.onValueChange1}
              colors={this.mainColors}
            />

            <Text margin-10 text60>
              Pagination
            </Text>
            <ColorPalette
              numberOfRows={!Constants.isTablet ? 4 : undefined}
              value={color2}
              onValueChange={this.onValueChange2}
              colors={this.allColors}
              containerWidth={330}
              containerStyle={{marginLeft: -18}}
            />
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}
