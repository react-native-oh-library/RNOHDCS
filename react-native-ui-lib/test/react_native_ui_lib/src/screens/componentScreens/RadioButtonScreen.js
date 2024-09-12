import React, {Component} from 'react';
import {TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {
  Assets,
  Colors,
  View,
  Text,
  RadioButton,
  RadioGroup,
} from 'react-native-ui-lib'; //eslint-disable-line
import {TestCase, TestSuite} from '@rnoh/testerino';
const starIcon = require('../../assets/icons/star.png');

const COLORS = {
  ORANGE: {name: 'Orange', color: Colors.orange20},
  PURPLE: {name: 'Purple', color: Colors.purple20},
  GREEN: {name: 'Green', color: Colors.green20},
};

export default class RadioButtonScreen extends Component {
  static colors = COLORS;

  constructor(props) {
    super(props);

    this.state = {
      color: undefined,
      messageType: undefined,
      disabledSelectedValue: true,
    };
  }

  renderRadioButton(value, text, props) {
    return (
      <View row centerV marginB-5>
        <RadioButton value={value} label={text} {...props} />
      </View>
    );
  }

  renderRadioButtonForColorEnum(color) {
    return (
      <View row centerV marginB-5>
        <RadioButton
          value={color.name}
          label={color.name}
          labelStyle={{color: color.color}}
        />
      </View>
    );
  }

  renderRadioButtonWithImage(value, icon, style) {
    return (
      <View row centerV marginR-15>
        <RadioButton
          value={value}
          size={15}
          color={Colors.green30}
          borderRadius={0}
          iconSource={icon}
          iconStyle={style}
        />
      </View>
    );
  }

  renderRadioButtonWithImageAndText(value, text, iconOnRight) {
    return (
      <View row centerV marginB-5>
        <RadioButton
          value={value}
          label={text}
          iconSource={starIcon}
          iconOnRight={iconOnRight}
        />
      </View>
    );
  }

  render() {
    return (
      <TestSuite name="RadioButton  RadioGroup">
        <TestCase itShould="设置 color属性, RadioGroup的onValueChange">
          <View padding-20>
            <RadioGroup
              initialValue={this.state.color || null}
              onValueChange={value => this.setState({color: value})}>
              {this.renderRadioButton(null, 'Default')}
              <RadioButton
                value={'red'}
                label={'red'}
                labelStyle={{color: 'red'}}
              />
              <RadioButton
                value={'green'}
                label={'green'}
                labelStyle={{color: 'green'}}
              />
              <RadioButton
                value={'blue'}
                label={'blue'}
                labelStyle={{color: 'blue'}}
              />
              <Text marginT-10>
                You chose: {this.state.color ? this.state.color : 'Default'}
              </Text>
            </RadioGroup>
          </View>
        </TestCase>
        <TestCase itShould="设置 iconSource, iconOnRight属性">
          <View padding-20>
            <RadioGroup
              marginT-30
              initialValue={this.state.value}
              onValueChange={value => this.setState({value})}>
              <Text marginB-20 text60 $textDefault>
                Yes or No?
              </Text>
              <View row>
                {this.renderRadioButtonWithImage('yes', Assets.icons.check, {
                  tintColor: 'green',
                })}
                {this.renderRadioButtonWithImage('no', Assets.icons.x, {
                  tintColor: 'red',
                })}
              </View>
              <Text marginT-10>You chose: {this.state.value}</Text>
            </RadioGroup>
          </View>
        </TestCase>
        <TestCase itShould="设置 disabled属性">
          <View padding-20>
            <View row centerV marginT-10>
              <RadioButton
                disabled
                selected={this.state.disabledValue}
                onPress={() =>
                  this.setState({disabledValue: !this.state.disabledValue})
                }
                label="Disabled Radio Button"
                contentOnLeft
                containerStyle={styles.contentOnLeft}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

const styles = StyleSheet.create({
  contentOnLeft: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
