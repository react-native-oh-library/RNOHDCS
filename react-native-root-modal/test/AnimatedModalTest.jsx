import { TestSuite, TestCase } from '@rnoh/testerino';
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Animated } from 'react-native';
import { AnimatedModal } from 'react-native-root-modal';

export default class AnimatedModalTest extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: false,
            scale: new Animated.Value(1),
            x: new Animated.Value(0)
        };
    }

    slideModal = () => {
        this.state.x.setValue(0);
        this.state.scale.setValue(1);
        Animated.spring(this.state.x, {
            toValue: 100,
            useNativeDriver: false
        }).start();
        this.setState({
            visible: true
        });
        this.slide = true;
    };

    scaleModal = () => {
        this.state.x.setValue(0);
        this.state.scale.setValue(1);
        Animated.spring(this.state.scale, {
            toValue: 1,
            useNativeDriver: false
        }).start();
        this.setState({
            visible: true
        });
        this.slide = false;
    };

    hideModal = () => {
        if (this.slide) {
            Animated.timing(this.state.x, {
                toValue: 10,
                useNativeDriver: false
            }).start(() => {
                this.setState({
                    visible: false
                });
            });
        } else {
            Animated.timing(this.state.scale, {
                toValue: 0,
                useNativeDriver: false
            }).start(() => {
                this.setState({
                    visible: false
                });
            });
        }
    };

    render() {
        return (
            <TestSuite name="AnimatedModal">
                <TestCase itShould="AnimatedModal">
                    <View style={styles.container}>
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="#aaa"
                            onPress={this.slideModal}
                        >
                            <Text>Slide</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="#aaa"
                            onPress={this.scaleModal}
                        >
                            <Text>Scale</Text>
                        </TouchableHighlight>
                        <AnimatedModal
                            visible={this.state.visible}
                            setValue={1}
                            style={[styles.modal, {
                                transform: [
                                    { scale: this.state.scale.__getValue() },
                                    { translateX: this.state.x.__getValue() }
                                ]
                            }]}
                        >
                            <TouchableHighlight
                                style={[styles.button, styles.close]}
                                underlayColor="#aaa"
                                onPress={this.hideModal}
                            >
                                <Text>Close</Text>
                            </TouchableHighlight>

                            <View style={styles.modalContainer}>
                                <Text style={styles.text}>You can set any animation on Modal element</Text>
                            </View>
                        </AnimatedModal>
                    </View>
                </TestCase>
            </TestSuite>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 400
    },
    modal: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        flex: 1,
        position: 'absolute'
    },
    button: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    close: {
        position: 'absolute',
        flex: 1,
        right: 20,
        top: 40,
        backgroundColor: 'red'
    },
    modalContainer: {
        height: 100,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    text: {
        color: '#fff'
    }
});