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

export default class ScrollableTabviewExample4 extends React.Component {

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
          <TestSuite name="TesterScrollableTabviewExample4">
            <TestCase
              tags={['C_API']}
              itShould="切换视图,并且视图可以上下滑动;切换title颜色修改.使用前,请先点击Sceen1,Sceen2和Sceen3,加载对应页面">
              <View style={{ width: '100%', height: 500 }}>
                <ScrollableTabView
                  stacks={this.state.stacks}
                  firstIndex={this.state.firstIndex}
                  tabsStyle={{ backgroundColor: 'black', }}
                  tabWrapStyle={{ zIndex: 1 }}
                  //table里面字体styles类型在这里，这里设置45，展示的就比较夸张，可以自行修改
                  tabInnerStyle={{ paddingLeft: 45 }}
                  //点击table时候的透明度，设置为0就是点击的时候全黑，这里是0.6，点击的时候可以看到Screen的字
                  tabActiveOpacity={0.6}
                  tabStyle={{
                    marginLeft: 10,
                    marginRight: 10,
                    paddingHorizontal: 15,
                    backgroundColor: "pink",
                    width: 100,
                }}                  
                 textStyle={{ textAlign: 'center', color: 'blue' }}
                  textActiveStyle={{ fontSize: 22 }}
                  tabUnderlineStyle={{ backgroundcolor: 'red', height: 10 }}

                  syncToSticky={true}
                  onEndReachedThreshold={0.4}
                  onBeforeEndReached={next => {
                    next();
                  }}
                  carouselProps={{}}
                  sectionListProps={{}}
                  toHeaderOnTab={false}
                  tabsShown={true}
                  onTabviewChanged={() => {
                  }}
                  screenScrollThrottle={100}
                ></ScrollableTabView>
              </View>
            </TestCase>
          </TestSuite>
      </Tester>
    );
  }
}

console.disableYellowBox = true;