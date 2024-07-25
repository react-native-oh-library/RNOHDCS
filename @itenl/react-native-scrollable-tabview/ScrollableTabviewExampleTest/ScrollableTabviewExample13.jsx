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

export default class ScrollableTabviewExample13 extends React.Component {
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
                <TestSuite name="TesterScrollableTabviewExample13">
                    <TestCase
                        tags={['C_API']}
                        itShould="左右滑动页面,下滑栏2s后切换">
                        <View style={{ width: '100%', height: 500 }}>
                            <ScrollableTabView
                                stacks={this.state.stacks}
                                firstIndex={this.state.firstIndex}
                                mappingProps={{}}
                                tabsStyle={{ backgroundColor: 'black', }}
                                tabWrapStyle={{ zIndex: 1 }}
                                tabInnerStyle={{ paddingLeft: 5 }}
                                tabActiveOpacity={0}
                                tabStyle={{ backgroundColor: 'orange', width: 100 }}
                                textStyle={{ textAlign: 'center', color: 'blue' }}
                                textActiveStyle={{ fontSize: 22 }}
                                tabUnderlineStyle={{ backgroundColor: 'white', height: 50 }}
                                syncToSticky={true}
                                onBeforeEndReached={next => {
                                    next();
                                }}
                                carouselProps={{}}
                                sectionListProps={{}}
                                toHeaderOnTab={false}
                                tabsShown={true}
                                onTabviewChanged={() => {
                                }}
                                screenScrollThrottle={1000}
                                stickyHeader={false}
                            ></ScrollableTabView>
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        );
    }
}

console.disableYellowBox = true;