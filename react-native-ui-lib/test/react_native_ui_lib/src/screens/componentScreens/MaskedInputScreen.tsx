import _ from 'lodash';
import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Typography,
  View,
  Text,
  MaskedInput,
  Button,
  Colors,
} from 'react-native-ui-lib'; //eslint-disable-line
import {TestCase, TestSuite} from '@rnoh/testerino';

export default class MaskedInputScreen extends Component {
  minInput = React.createRef<any>();
  priceInput = React.createRef<any>();
  pinCodeInput = React.createRef<any>();
  state = {
    error: '',
    timeValue: '15',
  };

  componentDidMount() {
    
  }

  clearInputs = () => {
    this.minInput.current.clear();
    this.priceInput.current.clear();
    this.pinCodeInput.current.clear();
  };

  renderTimeText(value: string) {
    const paddedValue = _.padStart(value, 4, '0');
    const hours = paddedValue.substr(0, 2);
    const minutes = paddedValue.substr(2, 2);

    return (
      <Text text20 grey20 center>
        {hours}
        <Text red10>h</Text>
        {minutes}
        <Text red10>m</Text>
      </Text>
    );
  }

  renderPrice(value: string) {
    const hasValue = Boolean(value && value.length > 0);
    return (
      <View row center>
        <Text text30 grey50>
          -
        </Text>
        <Text text30 grey10={hasValue} grey60={!hasValue}>
          {hasValue ? value : '00'}
        </Text>
        <Text text80 grey60>
          $
        </Text>
      </View>
    );
  }

  render() {
    const {timeValue} = this.state;

    return (
      <TestSuite name="MaskedInput">
        <TestCase itShould="设置 containerStyle, backgroundColor: 'red'">
          <View padding-20>
            <MaskedInput
              containerStyle={{ backgroundColor: 'red' }}
              renderMaskedText={this.renderPrice}
              formatter={(value: string) => value?.replace(/\D/g, '')}
              keyboardType={'numeric'}
            />
          </View>
        </TestCase>
        <TestCase itShould="设置 renderMaskedText属性, render中给值前加-,后加$">
          <View padding-20>
            <MaskedInput
              migrate
              ref={this.priceInput}
              renderMaskedText={this.renderPrice}
              formatter={(value: string) => value?.replace(/\D/g, '')}
              keyboardType={'numeric'}
            />
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 25,
  },
  title: {
    ...Typography.text20,
  },
  header: {
    ...Typography.text60,
    marginVertical: 20,
  },
  pinCodeSquare: {
    width: 50,
    height: 70,
    borderWidth: 2,
    borderColor: Colors.grey30,
    borderRadius: 4,
  },
});
