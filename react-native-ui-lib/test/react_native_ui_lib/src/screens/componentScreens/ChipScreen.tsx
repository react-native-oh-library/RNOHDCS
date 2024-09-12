import React, {Component} from 'react';
import {Alert} from 'react-native';
import {
  Chip,
  Colors,
  Spacings,
  Text,
  Typography,
  View,
  Image,
} from 'react-native-ui-lib';
import {TestCase, TestSuite} from '@rnoh/testerino';

const avatarImage = {
  uri: 'https://randomuser.me/api/portraits/women/24.jpg',
};
const checkmark = require('../../assets/icons/check-small.png');
const chevron = require('../../assets/icons/chevronDown.png');
const bell = require('../../assets/icons/bell.png');

export default class ChipScreen extends Component {
  colors = [
    {value: Colors.red10, label: 'Red'},
    {value: Colors.blue10, label: 'Blue'},
    {value: Colors.purple10, label: 'Purple'},
    {value: Colors.green10, label: 'Green'},
    {value: Colors.yellow10, label: 'Yellow'},
  ];

  state = {
    selectedValue: this.colors[2].label,
  };

  renderExample = (text: string, chip: JSX.Element) => {
    return (
      <View row spread marginB-12>
        <Text text70 $textDefault>
          {text}
        </Text>
        {chip}
      </View>
    );
  };

  render() {
    return (
      <TestSuite name="Chip">
        <TestCase itShould="设置 Label,Icon, Left icon, Right icon, Label + Avatar, Label + Counter, Label + Badge">
          <View padding-20>
          {this.renderExample('Label', <Chip label={'Chip'} />)}
          {this.renderExample(
            'Icon',
            <Chip
              iconSource={checkmark}
              iconStyle={{width: 24, height: 24}}
              iconProps={{tintColor: Colors.$iconDefault}}
            />,
          )}
          {this.renderExample(
            'Left icon',
            <Chip
              label={'Chip'}
              iconSource={checkmark}
              iconStyle={{width: 24, height: 24}}
              iconProps={{tintColor: Colors.$iconDefault}}
            />,
          )}
          {this.renderExample(
            'Right icon',
            <Chip
              label={this.state.selectedValue}
              rightIconSource={chevron}
              iconStyle={{margin: 8}}
            />,
          )}
          {this.renderExample(
            'Label + Avatar',
            <Chip
              label={'Chip'}
              avatarProps={{source: avatarImage, size: 20}}
            />,
          )}
          {this.renderExample(
            'Label + Counter',
            <Chip
              label={'Chip'}
              labelStyle={{
                marginRight: undefined,
              }}
              useCounter
              badgeProps={{
                label: '4',
                labelStyle: {
                  ...Typography.text80R,
                  color: Colors.$textNeutralHeavy,
                },
              }}
            />,
          )}
          {this.renderExample(
            'Label + Badge',
            <Chip
              label={'Chip'}
              badgeProps={{
                label: '4',
                backgroundColor: 'red',
              }}
            />,
          )}
          </View>
        </TestCase>
        <TestCase
          itShould="设置Label + onPress属性"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-20>
              {this.renderExample(
                'Label + onPress',
                <Chip
                  label={'Chip'}
                  onPress={() => {
                    Alert.alert('onPress');
                    setState(true);
                  }}
                />,
              )}
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          itShould="设置Label + onDismiss属性, iconProps, dismissIconStyle"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-20>
              {this.renderExample(
                'Label + onDismiss',
                <Chip
                  label={'Chip'}
                  iconProps={{tintColor: Colors.$iconDefault}}
                  onDismiss={() => {
                    Alert.alert('onDismiss')
                    setState(true)
                  }}
                  dismissIconStyle={{width: 10, height: 10}}
                />,
              )}
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
    );
  }
}
