/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StatusBar, SafeAreaView, Button } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { NavigationContainer, Page } from '../components/Navigation';

class SwipeGesturesFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myTextOnSwipe: 'I\'m ready to get swiped!',
            myTextUp: 'I\'m ready to get swiped!',
            myTextDown: 'I\'m ready to get swiped!',
            myTextLeft: 'I\'m ready to get swiped!',
            myTextRight: 'I\'m ready to get swiped!',

            backgroundColorOnSwipe: '#fff',
            backgroundColorUp: '#fff',
            backgroundColorDown: '#fff',
            backgroundColorLeft: '#fff',
            backgroundColorRight: '#fff',
        };
    }

    onSwipeUp(gestureState) {
        this.setState({ myTextUp: 'You swiped up!' });
        this.setState({ backgroundColorUp: 'red' });
    }

    onSwipeDown(gestureState) {
        this.setState({ myTextDown: 'You swiped down!' });
        this.setState({ backgroundColorDown: 'green' });
    }

    onSwipeLeft(gestureState) {
        this.setState({ myTextLeft: 'You swiped left!' });
        this.setState({ backgroundColorLeft: 'blue' });
    }

    onSwipeRight(gestureState) {
        this.setState({ myTextRight: 'You swiped right!' });
        this.setState({ backgroundColorRight: 'yellow' });
    }

    onSwipe(gestureName, gestureState) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({ myTextOnSwipe: 'You swiped up!' });
                this.setState({ backgroundColorOnSwipe: 'red' });
                break;
            case SWIPE_DOWN:
                this.setState({ myTextOnSwipe: 'You swiped down!' });
                this.setState({ backgroundColorOnSwipe: 'green' });
                break;
            case SWIPE_LEFT:
                this.setState({ myTextOnSwipe: 'You swiped left!' });
                this.setState({ backgroundColorOnSwipe: 'blue' });
                break;
            case SWIPE_RIGHT:
                this.setState({ myTextOnSwipe: 'You swiped right!' });
                this.setState({ backgroundColorOnSwipe: 'yellow' });
                break;
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.01,
            directionalOffsetThreshold: 80
        };

        return (
            <Tester>

                <TestSuite name='slip up/down/left/right'>
                    <TestCase itShould='test onSwipe function'>
                        <GestureRecognizer
                            onSwipe={(direction, state) => this.onSwipe(direction, state)}
                            config={config}
                            style={{
                                backgroundColor: this.state.backgroundColorOnSwipe,
                                height: 70
                            }}
                        >
                            <Text>{this.state.myTextOnSwipe}</Text>
                        </GestureRecognizer>
                    </TestCase>
                </TestSuite>

                <TestSuite name='slip up'>
                    <TestCase itShould='test onSwipeUp function'>
                        <GestureRecognizer
                            onSwipeUp={(state) => this.onSwipeUp(state)}
                            config={config}
                            style={{
                                backgroundColor: this.state.backgroundColorUp,
                                height: 70
                            }}
                        >
                            <Text>{this.state.myTextUp}</Text>
                        </GestureRecognizer>
                    </TestCase>
                </TestSuite>

                <TestSuite name='slip down'>
                    <TestCase itShould='test onSwipeDown function'>
                        <GestureRecognizer
                            onSwipeDown={(state) => this.onSwipeDown(state)}
                            config={config}
                            style={{
                                backgroundColor: this.state.backgroundColorDown,
                                height: 70
                            }}
                        >
                            <Text>{this.state.myTextDown}</Text>
                        </GestureRecognizer>
                    </TestCase>
                </TestSuite>

                <TestSuite name='slip left'>
                    <TestCase itShould='test onSwipeLeft function'>
                        <GestureRecognizer
                            onSwipeLeft={(state) => this.onSwipeLeft(state)}
                            config={config}
                            style={{
                                backgroundColor: this.state.backgroundColorLeft,
                                height: 70
                            }}
                        >
                            <Text>{this.state.myTextLeft}</Text>
                        </GestureRecognizer>
                    </TestCase>
                </TestSuite>

                <TestSuite name='slip right'>
                    <TestCase itShould='test onSwipeRight function'>
                        <GestureRecognizer
                            onSwipeRight={(state) => this.onSwipeRight(state)}
                            config={config}
                            style={{
                                backgroundColor: this.state.backgroundColorRight,
                                height: 70
                            }}
                        >
                            <Text>{this.state.myTextRight}</Text>
                        </GestureRecognizer>
                    </TestCase>
                </TestSuite>

            </Tester>
        );
    }
}

class SwipeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myText: 'I\'m ready to get swiped!',
            gestureName: 'none',
            backgroundColor: '#fff',
        };
    }

    onSwipeUp(gestureState) {
        this.setState({ myText: 'You swiped up!' });
    }

    onSwipeDown(gestureState) {
        this.setState({ myText: 'You swiped down!' });
    }

    onSwipeLeft(gestureState) {
        this.setState({ myText: 'You swiped left!' });
    }

    onSwipeRight(gestureState) {
        this.setState({ myText: 'You swiped right!' });
    }

    onSwipe(gestureName, gestureState) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        this.setState({ gestureName: gestureName });
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({ backgroundColor: 'red' });
                break;
            case SWIPE_DOWN:
                this.setState({ backgroundColor: 'green' });
                break;
            case SWIPE_LEFT:
                this.setState({ backgroundColor: 'blue' });
                break;
            case SWIPE_RIGHT:
                this.setState({ backgroundColor: 'yellow' });
                break;
        }
    }

    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeDown={(state) => this.onSwipeDown(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={this.props.config}
                style={{
                    height: 200,
                    backgroundColor: this.state.backgroundColor
                }}
            >
                <Text>You can slip up/down/left/right</Text>
                <Text></Text>
                <Text>{this.state.myText}</Text>
                <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
                <Text>velocityThreshold: {this.props.config.velocityThreshold}</Text>
                <Text>directionalOffsetThreshold: {this.props.config.directionalOffsetThreshold}</Text>
                <Text>gestureIsClickThreshold: {this.props.config.gestureIsClickThreshold}</Text>
            </GestureRecognizer>
        );
    }
}

class SwipeGesturesAttribute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80,
                gestureIsClickThreshold: 5
            }
        }
    }
    render() {
        return (
            <Tester>
                <SwipeComponent config={this.state.config} />
                <TestSuite name='Press the default button'>
                    <TestCase itShould='default'>
                        <Button onPress={() => {
                            this.setState({
                                config: {
                                    velocityThreshold: 0.3,
                                    directionalOffsetThreshold: 80,
                                    gestureIsClickThreshold: 5
                                }
                            })
                        }}
                            title="default"
                        >
                        </Button>
                    </TestCase>
                </TestSuite>

                <TestSuite name='Press the velocityThreshold_max button'>
                    <TestCase itShould='velocityThreshold_max'>
                        <Button onPress={() => {
                            this.setState({
                                config: {
                                    velocityThreshold: 30000000000000,
                                    directionalOffsetThreshold: 80,
                                    gestureIsClickThreshold: 5
                                }
                            })
                        }}
                            title="velocityThreshold_max"
                        >
                        </Button>
                    </TestCase>
                </TestSuite>

                <TestSuite name='Press the directionalOffsetThreshold_min button'>
                    <TestCase itShould='directionalOffsetThreshold_min'>
                        <Button onPress={() => {
                            this.setState({
                                config: {
                                    velocityThreshold: 0.3,
                                    directionalOffsetThreshold: 0,
                                    gestureIsClickThreshold: 5
                                }
                            })
                        }}
                            title="directionalOffsetThreshold_min"
                        >
                        </Button>
                    </TestCase>
                </TestSuite>

                <TestSuite name='Press the gestureIsClickThreshold_max button'>
                    <TestCase itShould=''>
                        <Button onPress={() => {
                            this.setState({
                                config: {
                                    velocityThreshold: 0.3,
                                    directionalOffsetThreshold: 80,
                                    gestureIsClickThreshold: 500000000000000
                                }
                            })
                        }}
                            title="gestureIsClickThreshold_max"
                        >
                        </Button>
                    </TestCase>
                </TestSuite>

            </Tester>
        );
    }
}

function SwipeGesturesTest() {
    return (
        <View style={{ backgroundColor: '#222' }}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <NavigationContainer>
                    <Page name='test function'>
                        <SwipeGesturesFunction></SwipeGesturesFunction>
                    </Page>

                    <Page name='tets attribute'>
                        <SwipeGesturesAttribute></SwipeGesturesAttribute>
                    </Page>

                </NavigationContainer>
            </SafeAreaView>
        </View>
    );
}

export default SwipeGesturesTest;