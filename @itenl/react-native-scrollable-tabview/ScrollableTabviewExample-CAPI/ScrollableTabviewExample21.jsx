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

export default class ScrollableTabviewExample21 extends React.Component {
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

    handleButtonClick = (errorToThrow) => {
        try {
            if (errorToThrow) {
                this.setState({
                    ...this.props,
                    errorText: 'error!!!!!!!,通过errorToThrow抛出'

                })
            } else {
                this.setState({
                    ...this.props,
                    errorText: 'error!!!!!!!,通过抛出系统console.error抛出'

                })
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    render() {
        return (
            <Tester>
                <TestSuite name="TesterScrollableTabviewExample21">
                    <TestCase
                        tags={['C_API']}
                        itShould="errorToThrow为true,先点击按键,再点击screen,会打印对应日志">
                        <View style={{ width: '100%', height: 200 }}>
                            <Button
                                title='errorToThrow 为 true'
                                onPress={() => {
                                    const errorToThrow = true;
                                    this.handleButtonClick(errorToThrow)
                                }} />
                            <ScrollableTabView
                                stacks={[
                                    {
                                        screen: () => {
                                            return (<View style={{ flex: 1, backgroundColor: 'red' }}><Text>{this.state.errorText}</Text></View>)
                                        },
                                    },
                                ]}
                                errorToThrow={true}
                            ></ScrollableTabView>
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        );
    }
}

console.disableYellowBox = true;