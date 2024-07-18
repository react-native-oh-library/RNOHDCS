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
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          height: 2000
        }}
      >
        <Text>
          第一个页面
        </Text>
      </View>
    );
  }
}

class Screen2 extends React.Component {
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
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'grey',
          height: 2000
        }}
      >
        <Text>
          第二个页面
        </Text>
      </View>
    );
  }
}

class Screen3 extends React.Component {
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
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          height: 2000
        }}
      >
        <Text>
          第三个页面
        </Text>
      </View>
    );
  }
}

export default class ScrollableTabviewExample2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rootTime: Date.now(),
      stacks: [],
      firstIndex: 0,
      useScroll: false,
      scroll: "0",
      scroll2Horizontal: "0",
      errorText: ''
    };
  }

  initStacks() {
    return [
      {
        screen: Screen1,
        tabLabel: "Screen1",
      },
      {
        screen: Screen2,
        tabLabel: "Screen2",
      },
      {
        screen: Screen3,
        tabLabel: "Screen3",
      },
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
        <TestSuite name="TesterScrollableTabviewExample2">
          <TestCase
            tags={['C_API']}
            itShould="整体效果2">
            <View style={{ width: '100%', height: 800 }}>
              <ScrollableTabView
                stacks={this.state.stacks}
                firstIndex={this.state.firstIndex}
                mappingProps={{}}
                tabsStyle={{ backgroundColor: 'yellow', }}
                tabWrapStyle={{ zIndex: 1 }}
                tabInnerStyle={{ paddingLeft: 5 }}
                tabActiveOpacity={0}
                tabStyle={{ backgroundColor: 'orange', width: 100 }}
                textStyle={{ textAlign: 'center', color: 'green' }}
                textActiveStyle={{ fontSize: 30 }}
                tabUnderlineStyle={{ backgroundcolor: 'red', height: 10 }}
                syncToSticky={true}
                onEndReachedThreshold={0.4}
                onTabviewChanged={() => {
                }}
                fixedHeader={false}
                fillScreen={true}
                screenScrollThrottle={100}
                header={() => {
                  return <View style={{ backgroundColor: 'pink', height: 80 }}><Text>header</Text></View>;
                }}
              ></ScrollableTabView>
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    );
  }
}

console.disableYellowBox = true;