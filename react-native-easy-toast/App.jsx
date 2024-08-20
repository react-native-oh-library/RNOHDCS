import React, { Component } from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast'
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
export default class ToastTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'bottom',
            style: {},
            textStyle: { color: 'black' },
            opacity: 1,
            positionValue: 120,
            fadeInDuration: 500,
            fadeOutDuration: 500,
            backgroundColor: 'white'
        }
    }

    onClick({
        text, position, duration, withStyle, fadeInDuration, fadeOutDuration, opacity, textStyle, backgroundColor
    }) {
        this.toast.close()
        this.toastWithStyle.close()
        this.setState({
            position: position,
            fadeInDuration: fadeInDuration || 500,
            fadeOutDuration: fadeOutDuration || 500,
            opacity: opacity ?? 1,
            textStyle: {
                color: textStyle || '#ffffff'
            },
            backgroundColor: backgroundColor || 'red'
        }, () => {

            if (withStyle) {
                this.toastWithStyle.show(text, duration);
            } else {
                this.toast.show(text, duration);
            }
        })

    }

    getButton({
        text, position, duration, withStyle, fadeInDuration, fadeOutDuration, opacity, textStyle, backgroundColor
    }) {
        return (
            <Button
                style={{ padding: 10 }}
                size
                onPress={() => this.onClick({
                    text, position, duration, withStyle, fadeInDuration, fadeOutDuration, opacity, textStyle, backgroundColor
                })}
                title={text}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Tester>
                    <ScrollView>
                        <TestCase itShould="1、position=top">
                            {this.getButton({
                                text: 'position=top',
                                position: 'top',
                                duration: DURATION.LENGTH_SHORT
                            })}
                        </TestCase>
                        <TestCase itShould="2、position=bottom">
                            {this.getButton({
                                text: 'position=bottom',
                                position: 'bottom',
                                duration: DURATION.LENGTH_SHORT
                            })}
                        </TestCase>
                        <TestCase itShould="3、position=center, duration=2000">
                            {this.getButton({
                                text: 'position=center',
                                position: 'center',
                                duration: 2000
                            })}
                        </TestCase>
                        <TestCase itShould="4、position=bottom，duration=4000">
                            {this.getButton({
                                text: 'position=bottom, duration=4000',
                                position: 'bottom',
                                duration: 4000
                            })}
                        </TestCase>
                        <TestCase itShould="5、position=bottom,custom style, duration=2000">
                            {this.getButton({
                                text: 'backgroundColor=red',
                                position: 'bottom',
                                duration: 2000,
                                withStyle: true
                            })}
                        </TestCase>
                        <TestCase itShould="6、position=center，, duration=5000">
                            {this.getButton({
                                text: 'duration=5000',
                                position: 'center',
                                duration: 5000
                            })}
                        </TestCase>
                        <TestCase itShould="7、position=bottom, duration=3000，positionValue=500">
                            {this.getButton({
                                text: 'positionvalue=500',
                                position: 'bottom',
                                duration: 3000,
                                positionValue: 500
                            })}
                        </TestCase>
                        <TestCase itShould="8、position=bottom, duration=3000, fadeInDuration=2000">
                            {this.getButton({
                                text: 'fadeInDuration=2000',
                                position: 'bottom',
                                duration: 3000,
                                fadeInDuration: 2000,
                                withStyle: true,
                                backgroundColor: 'blue'
                            })}
                        </TestCase>
                        <TestCase itShould="9、position=bottom, duration=3000, fadeOutDuration=2000">
                            {this.getButton({
                                text: 'fadeOutDuration=2000',
                                position: 'bottom',
                                duration: 3000,
                                fadeOutDuration: 2000,
                                withStyle: true,
                                backgroundColor: 'blue'
                            })}
                        </TestCase>
                        <TestCase itShould="10、position=bottom, duration=3000，positionValue=500, opacity=0.7, fadeInDuration=1000">
                            {this.getButton({
                                text: 'opacity=0.7',
                                position: 'bottom',
                                duration: 3000,
                                opacity: 0.7,
                                fadeInDuration: 1000
                            })}
                        </TestCase>
                        <TestCase itShould="11、position=bottom, duration=3000，positionValue=500, opacity=0.3">
                            {this.getButton({
                                text: 'opacity=0.3，fadeOutDuration=1000',
                                position: 'bottom',
                                duration: 3000,
                                opacity: 0.7,
                                fadeOutDuration: 2000
                            })}
                        </TestCase>
                        <TestCase itShould="12、position=bottom，textStyle=blue', backgroundColor=green, duration=2000">
                            {this.getButton({
                                text: 'color=blue，backgroundColor=green',
                                position: 'bottom',
                                duration: 2000,
                                textStyle: 'blue',
                                backgroundColor: 'green',
                                withStyle: true
                            })}
                        </TestCase>

                    </ScrollView>
                </Tester>
                <Toast
                    ref={(toast) => this.toast = toast}
                    position={this.state.position}
                    fadeInDuration={this.state.fadeInDuration}
                    fadeOutDuration={this.state.fadeOutDuration}
                    opacity={this.state.opacity}
                    textStyle={this.state.textStyle}
                />
                <Toast ref={(toast) => this.toastWithStyle = toast}
                    style={{ backgroundColor: this.state.backgroundColor }}
                    position={this.state.position}
                    fadeInDuration={this.state.fadeInDuration}
                    fadeOutDuration={this.state.fadeOutDuration}
                    opacity={this.state.opacity}
                    textStyle={this.state.textStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    },
});

