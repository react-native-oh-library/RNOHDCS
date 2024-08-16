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

class SwipeGesturesDemo extends Component {
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

export default SwipeGesturesDemo;
