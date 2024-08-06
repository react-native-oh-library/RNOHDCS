/* @flow */

import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';



export default class ContainPropTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            stopAutoRunAble: false,
            isInteractionAble: false,
            contentStylevisible: false,
            shimmerContainerProps: {
                inestVisible: false,
                thisVisible: false,
                outestVisible: false,
                clickTimes: 0
            },
            containerProps: {
                inestVisible: false,
                thisVisible: false,
                outestVisible: false,
                clickTimes: 0
            },
            childrenContainerProps: {
                inestVisible: false,
                thisVisible: false,
                outestVisible: false,
                clickTimes: 0
            },
            animatedObjectkeys: []

        }
        this.avatarRef = React.createRef();
    }
    render() {
        return (
            <ScrollView>
                <Tester>
                    <TestSuite name="shimmer-placeholder">
                        <TestCase
                            itShould="Test containerProps prop: style {backgroundColor:green，padding: 10}">
                            <View>
                                <View>
                                    <ShimmerPlaceholder
                                        LinearGradient={LinearGradient}
                                        visible={this.state.containerProps.outestVisible}
                                    >
                                        <View>
                                            <ShimmerPlaceholder
                                                containerProps={{ style: styles.container }}
                                                visible={this.state.containerProps.thisVisible}
                                                LinearGradient={LinearGradient}
                                            >
                                                <Text>ShimmerPlaceholder本层</Text>
                                            </ShimmerPlaceholder>
                                            <Text>ShimmerPlaceholder最外层View</Text>
                                            <Button
                                                title={'本层'}
                                                onPress={() => this.setState({
                                                    containerProps: {
                                                        ...this.state.containerProps,
                                                        thisVisible: !this.state.containerProps.thisVisible
                                                    }
                                                })}
                                            />
                                        </View>
                                    </ShimmerPlaceholder>

                                </View>
                                <Button
                                    title={'最外层visible'}
                                    onPress={() => this.setState({
                                        containerProps: {
                                            ...this.state.containerProps,
                                            outestVisible: !this.state.containerProps.outestVisible
                                        }
                                    })}
                                />
                            </View>
                        </TestCase>
                        <TestCase
                            itShould="Test shimmerContainerProps prop: onTouchStart">
                            <View style={styles.commonContainer}>
                                <Text>
                                    点击触发了：{this.state.shimmerContainerProps.clickTimes} 次
                                </Text>
                                <View>
                                    <ShimmerPlaceholder
                                        style={styles.commonContainer}
                                        LinearGradient={LinearGradient}
                                        visible={this.state.shimmerContainerProps.outestVisible}
                                    >
                                        <View>
                                            <ShimmerPlaceholder
                                                shimmerContainerProps={{
                                                    onTouchStart: () => {
                                                        this.setState({
                                                            shimmerContainerProps: {
                                                                ...this.state.shimmerContainerProps,
                                                                clickTimes: this.state.shimmerContainerProps.clickTimes + 1
                                                            }
                                                        })
                                                    }
                                                }}
                                                visible={this.state.shimmerContainerProps.thisVisible}
                                                LinearGradient={LinearGradient}
                                            >
                                                <ShimmerPlaceholder
                                                    style={styles.commonContainer}
                                                    visible={this.state.shimmerContainerProps.inestVisible}
                                                    LinearGradient={LinearGradient}
                                                >
                                                    <Text>我是内部的ShimmerPlaceholder</Text>
                                                </ShimmerPlaceholder>
                                                <Button
                                                    title={'最内层'}
                                                    onPress={() => this.setState({
                                                        shimmerContainerProps: {
                                                            ...this.state.shimmerContainerProps,
                                                            inestVisible: !this.state.shimmerContainerProps.inestVisible
                                                        }
                                                    })} />
                                                <Text>ShimmerPlaceholder本层</Text>
                                            </ShimmerPlaceholder>
                                            <Text>ShimmerPlaceholder最外层View</Text>
                                            <Button
                                                title={'本层'}
                                                onPress={() => this.setState({
                                                    shimmerContainerProps: {
                                                        ...this.state.shimmerContainerProps,
                                                        thisVisible: !this.state.shimmerContainerProps.thisVisible
                                                    }
                                                })} />
                                        </View>
                                    </ShimmerPlaceholder>

                                </View>
                                <Button
                                    title={'最外层visible'}
                                    onPress={() => this.setState({
                                        shimmerContainerProps: {
                                            ...this.state.shimmerContainerProps,
                                            outestVisible: !this.state.shimmerContainerProps.outestVisible
                                        }
                                    })} />
                            </View>
                        </TestCase>
                        <TestCase
                            itShould="Test childrenContainerProps prop: onTouchStart">
                            <View style={styles.commonContainer}>
                                <Text>
                                    点击触发了：{this.state.childrenContainerProps.clickTimes} 次
                                </Text>
                                <View>
                                    <ShimmerPlaceholder
                                        LinearGradient={LinearGradient}
                                        visible={this.state.childrenContainerProps.outestVisible}
                                        style={styles.commonContainer}
                                    >
                                        <View style={styles.commonContainer}>
                                            <ShimmerPlaceholder
                                                style={styles.commonContainer}
                                                childrenContainerProps={{
                                                    onTouchStart: () => {
                                                        this.setState({
                                                            childrenContainerProps: {
                                                                ...this.state.childrenContainerProps,
                                                                clickTimes: this.state.childrenContainerProps.clickTimes + 1
                                                            }
                                                        })
                                                    }
                                                }}
                                                visible={this.state.childrenContainerProps.thisVisible}
                                                LinearGradient={LinearGradient}
                                            >
                                                <ShimmerPlaceholder
                                                    style={styles.commonContainer}
                                                    visible={this.state.childrenContainerProps.inestVisible}
                                                    LinearGradient={LinearGradient}
                                                >
                                                    <Text>我是内部的ShimmerPlaceholder</Text>
                                                </ShimmerPlaceholder>
                                                <Button
                                                    title={'最内层'}
                                                    onPress={() => this.setState({
                                                        childrenContainerProps: {
                                                            ...this.state.childrenContainerProps,
                                                            inestVisible: !this.state.childrenContainerProps.inestVisible
                                                        }
                                                    })} />
                                                <Text>ShimmerPlaceholder本层</Text>
                                            </ShimmerPlaceholder>
                                            <Text>ShimmerPlaceholder最外层View，期望为绿色</Text>
                                            <Button
                                                title={'本层'}
                                                onPress={() => this.setState({
                                                    childrenContainerProps: {
                                                        ...this.state.childrenContainerProps,
                                                        thisVisible: !this.state.childrenContainerProps.thisVisible
                                                    }
                                                })} />
                                        </View>
                                    </ShimmerPlaceholder>

                                </View>
                                <Button
                                    title={'最外层visible'}
                                    onPress={() => this.setState({
                                        childrenContainerProps: {
                                            ...this.state.childrenContainerProps,
                                            outestVisible: !this.state.childrenContainerProps.outestVisible
                                        }
                                    })} />
                            </View>
                        </TestCase>
                    </TestSuite>

                </Tester>
            </ScrollView>
        )
    }
    changeIsInteraction = () => {
        console.log("changeIsInteraction");
        this.setState({ isInteractionAble: !this.state.isInteractionAble })
        console.log("this.state.isInteractionAble:" + this.state.isInteractionAble);

    }
    getAnimatedFun = () => {
        this.setState({ animatedObjectkeys: Object.keys(this.avatarRef.current.getAnimated()) })
    }
    sleep(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
}
const styles = StyleSheet.create({
    shimmer: {
        backgroundColor: "red",
        padding: 10
    },
    container: {
        backgroundColor: "green",
        padding: 10

    },
    children: {
        backgroundColor: "blue",
        padding: 10

    },
    commonContainer: {
        padding: 10
    }
});