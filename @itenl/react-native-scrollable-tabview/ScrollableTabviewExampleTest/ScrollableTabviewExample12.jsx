import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet, SectionList, StatusBar, Button } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from '@itenl/react-native-scrollable-tabview';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now(),
    };
  }

  onRefresh = (toggled) => {
    this.toggled = toggled;
    this.toggled && this.toggled();
    this.toggled && this.toggled();
  };

  render() {
    return (<View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>第一个页面</Text>
      <Text>到底了8</Text>
      <Text>到底了7</Text>
      <Text>到底了6</Text>
      <Text>到底了5</Text>
      <Text>到底了4</Text>
      <Text>到底了3</Text>
      <Text>到底了2</Text>
      <Text>到底了1</Text>
    </View>)
  }
}

export default class ScrollableTabviewExample9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootTime: Date.now(),
      stacks: [],
      firstIndex: 0,
      useScroll: false,
      scroll: "0",
      scroll2Horizontal: "0",
      errorText: '',
      num: 0,
      refesh: ''
    };
  }

  initStacks() {
    return [
      {
        screen: Screen1,
        tabLabel: "Screen1",
      }
    ];
  }

  componentDidMount() {
    this.setState({
      stacks: this.initStacks(),
    });
    setTimeout(() => {
      const stacks = this.state.stacks;
      if (stacks && stacks[1]) {
        stacks[1].tabLabelRender = (tabLabel) => {
          return `${tabLabel}`;
        };
        this.setState({
          stacks,
        });
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <Tester>
        <TestSuite name="TesterScrollableTabviewExample12">
          <TestCase
            tags={['C_API']}
            itShould="onEndReachedThreshold方法,需要配合onBeforeRefresh回调使用.'0'表示触底刷新，'1'表示非触底,使用前,请先点击Sceen1加载对应页面">
            <View style={{ width: '100%', height: 500 }}>
              <Button
                title='0'
                onPress={() => {
                  this.setState({
                    ...this.props,
                    num: 0,
                    refesh: ''
                  })
                }}
              />
              <Button
                title='1'
                onPress={() => {
                  this.setState({
                    ...this.props,
                    num: 1,
                    refesh: ''
                  })
                }}
              />
              <ScrollableTabView
                renderTabBar={() => <DefaultTabBar />}
                onEndReachedThreshold={this.state.num}
                onBeforeEndReached={() => {
                  console.log(this.state.num)
                  this.setState({
                    ...this.props,
                    refesh: '触发刷新成功！！！'
                  })
                }}
                stacks={this.state.stacks}
                firstIndex={this.state.firstIndex}
              >
              </ScrollableTabView>
              <Text>onEndReachedThreshold方法,需要配合onBeforeRefresh回调使用:{this.state.refesh}</Text>
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    );
  }
}

console.disableYellowBox = true;