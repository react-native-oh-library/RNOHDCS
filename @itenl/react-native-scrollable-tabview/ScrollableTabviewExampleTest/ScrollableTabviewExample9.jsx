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
                <TestSuite name="TesterScrollableTabviewExample9">
                    <TestCase
                        tags={['C_API']}
                        itShould="badges显示Three tips.若要使用Sceen的滑动功能,使用前,请先点击Sceen1,Sceen2和Sceen3,加载对应页面">
                        <View style={{ width: '100%', height: 500 }}>
                            <ScrollableTabView
                                badges={[
                                    null,
                                    [
                                        <View
                                            style={{
                                                position: 'absolute',
                                                zIndex: 200,
                                                top: 200,
                                                right: 0,
                                            }}
                                        >
                                            <Text>new</Text>
                                        </View>,
                                        <View
                                            style={{
                                                position: 'absolute',
                                                width: 150,
                                                height: 50,
                                                zIndex: 200,
                                                marginTop: 215,
                                                right: 0,
                                                opacity: 0.6,
                                                backgroundColor: 'pink',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Text>Three Tips</Text>
                                        </View>,
                                    ],
                                ]}
                                stacks={this.state.stacks}
                                firstIndex={this.state.firstIndex}
                                mappingProps={{}}
                                tabsStyle={{ backgroundColor: 'black', }}
                                tabWrapStyle={{ zIndex: 1 }}
                                tabInnerStyle={{ paddingLeft: 5 }}
                                tabActiveOpacity={0}
                                tabStyle={{ backgroundColor: 'white', width: 100 }}
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
                                stickyHeader={true}
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