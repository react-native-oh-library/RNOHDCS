import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native'
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
                    backgroundColor: "#f0f0f0",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>页面1</Text>
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
                    backgroundColor: "#f0f0f0",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>页面2</Text>
            </View>
        );
    }
}

export default class ScrollableTabviewExample3 extends React.Component {
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
                    return `--- ${tabLabel} ---`;
                };
                this.setState({
                    stacks,
                });
            }
        }, 5000);
    }

    render() {
        return (
            <Tester>
                <TestSuite name="TesterScrollableTabviewExample3" >
                    <TestCase
                        tags={['C_API']}
                        itShould="head可以下拉,模拟刷新.如果要使用Sceen1和Sceen2,使用前,请先点击Sceen1和Sceen2,加载对应页面.此处页面切换设置的是1s" >
                        <View style={{ width: '100%', height: 600 }}>
                            <ScrollableTabView
                                stacks={this.state.stacks}
                                firstIndex={this.state.firstIndex}
                                tabStyle={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    paddingHorizontal: 15,
                                    backgroundColor: "pink",
                                    width: 100,
                                }}
                                header={() => {
                                    return (
                                        <View
                                            style={{
                                                flex: 1,
                                                height: 180,
                                                backgroundColor: "pink",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text>模拟下拉</Text>
                                        </View>
                                    );
                                }}
                                //控制页面切换速度，这里是1S
                                screenScrollThrottle={1000}
                            >
                            </ScrollableTabView>
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        );
    }
}

console.disableYellowBox = true;