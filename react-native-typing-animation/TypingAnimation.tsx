import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ScrollView,Dimensions,Platform} from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import { TypingAnimation } from 'react-native-typing-animation';


const TypingAnimationDemo = () => {
    const typingAnimationProps = [
        {
            key: 'style:backgroundColor is pink',
            value: {
                style: styles.typingAnimation
            }
        },
        {
            key: 'style:backgroundColor is green',
            value: {
                style: styles.typingAnimations
            }
        },
        {
            key: 'dotColor:dotColor default is black',
            value: {
                dotColor: 'black'
            }
        },
        {
            key: 'dotColor:dotColor is red',
            value: {
                dotColor: 'red'
            }
        },
        {
            key: 'dotRadius:dotRadius default is 2.5',
            value: {
                dotRadius: 2.5
            }
        },
        {
            key: 'dotRadius:dotRadius is 10',
            value: {
                dotRadius: 10
            }
        },
        {
            key: 'dotMargin:dotMargin default is 3',
            value: {
                dotMargin: 3
            }
        },
        {
            key: 'dotMargin:dotMargin is 15',
            value: {
                dotMargin: 15
            }
        },
        {
            key: 'dotAmplitude:dotAmplitude default is 3',
            value: {
                dotAmplitude: 3
            }
        },
        {
            key: 'dotAmplitude: dotAmplitude is 20',
            value: {
                dotAmplitude: 20
            }
        },
        {
            key: 'dotSpeed:dotSpeed default is 0.15',
            value: {
                dotSpeed: 0.15
            }
        },
        {
            key: 'dotSpeed: dotSpeed is 10',
            value: {
                dotSpeed: 10
            }
        },
        {
            key: 'dotY:dotY default is 6',
            value: {
                dotY: 6
            }
        },
        {
            key: 'dotY: dotY is 20',
            value: {
                dotY: 20
            }
        },
        {
            key: 'dotX:dotX default is 12',
            value: {
                dotX: 12
            }
        },
        {
            key: 'dotX: dotX is 50',
            value: {
                dotX: 50
            },
        },
    ];
    return (
        <ScrollView>
            <Tester>
                {typingAnimationProps.map((item) => {
                    return (
                        <TestCase itShould={item.key} tags={['C_API']} key={item.key}>
                            <View
                                style={{
                                    height: 30,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}>
                                <TypingAnimation
                                    {...item.value}
                                ></TypingAnimation>
                            </View>
                        </TestCase>
                    );
                })}
            </Tester>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    animationContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    typingAnimation: {
        width:Dimensions.get('window').width,
        backgroundColor: 'pink',
    },
    typingAnimations: {
        width:Dimensions.get('window').width,
        backgroundColor: 'green',
    }
});

export default TypingAnimationDemo;
