import _ from 'lodash';
import React, {Component} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {View, ActionBar} from 'react-native-ui-lib'; //eslint-disable-line
import {TestCase, TestSuite} from '@rnoh/testerino';

export default class ActionBarScreen extends Component {
  state = {
    currentPage: 0,
  };

  render() {
    return (
      <TestSuite name="ActionBar">
        <TestCase itShould="设置 actions和keepRelative属性">
          <View padding-10 centerH>
            <ActionBar
              keepRelative
              style={{width: '100%'}}
              actions={[
                {label: 'Delete'},
                {label: 'Replace Photo'},
                {label: 'Edit'},
              ]}
            />
          </View>
        </TestCase>
        <TestCase
          itShould="设置 backgroundColor:green 属性，添加点击事件"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-10 centerH>
            <ActionBar
              keepRelative
              backgroundColor={'green'}
              style={{width: '100%'}}
              actions={[
                {
                  label: 'Hide',
                  onPress: () => {
                    Alert.alert('hide')
                    setState(true)
                  },
                  $textDefaultLight: true,
                },
                {
                  label: 'Add Discount',
                  onPress: () => {
                    Alert.alert('add discount')
                    setState(true)
                  },
                  $textDefaultLight: true,
                },
                {
                  label: 'Duplicate',
                  onPress: () => {
                    Alert.alert('duplicate')
                    setState(true)
                  },
                  $textDefaultLight: true,
                },
              ]}
            />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase itShould="action值设置为两个">
          <View padding-10 centerH>
            <ActionBar
              keepRelative
              style={{width: '100%'}}
              backgroundColor={'gray'}
              centered
              actions={[{label: 'Send as Contact'}, {label: 'Archive Chat'}]}
            />
          </View>
        </TestCase>
        <TestCase itShould="设置height: 80">
          <View padding-10 centerH>
            <ActionBar
              keepRelative
              style={{width: '100%'}}
              backgroundColor={'gray'}
              height={80}
              centered
              actions={[{label: 'Send as Contact'}, {label: 'Archive Chat'}]}
            />
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // marginTop: 50
    marginBottom: 50,
  },
  pageControl: {
    zIndex: 1,
  },
  absoluteContainer: {
    position: 'absolute',
    // top: 500,
    bottom: 150,
    left: 0,
    right: 0,
  },
});
