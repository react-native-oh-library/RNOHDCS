import React from 'react';
import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, Text, ImageBackground, Alert }from 'react-native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { TestSuite, Tester, TestCase} from '@rnoh/testerino';

let flag:boolean = true;
export default function BounceableTest () {
    const customStyle = {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      };

    return <ScrollView style={styles.container}>
        <Tester>
        <TestSuite name='style'>
            <TestCase itShould="Test the default touch feedback, Style default">
                <RNBounceable>
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test the text custom style, with value fontSize: 50">
                <RNBounceable>
                    <Text style={styles.textStyle_fontSize}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test Custom Styles, with value font Color: 'red' ">
                <RNBounceable
                >
                    <Text style={styles.textStyle_fontColor}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test custom styles, with value backgroundColor: 'lightblue'">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                >
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test custom styles, with value backgroundColor: 'red'">
                <RNBounceable
                style={customStyle}
                >
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>
            </TestSuite>

            <TestSuite name='onPress'>
            <TestCase itShould="Test a custom click function"
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        initialState={false}
                        tags={['C_API']}
                        arrange={({ setState }) => {
                          return (
                      <RNBounceable
                      style={[customStyle, styles.bounceStyle]}
                      onPress ={()=>{
                        setState(true);
                        Alert.alert('onEnd event run success!');
                      }} 
                      >
                          <Text>Press Me</Text>
                      </RNBounceable>)
                        }}
            >
            </TestCase>
            </TestSuite>

            <TestSuite name='bounceEffectIn'>
            <TestCase itShould="Test to zoom out the animation when the button is pressed">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                >
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>
            </TestSuite>

            <TestSuite name='bounceEffectOut'>
            <TestCase itShould="Test the enlarged animation effect when releasing the button">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectOut={1.5}
                >
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>
            </TestSuite>

            <TestSuite name='bounceVelocityIn'>
            <TestCase itShould="Test the animation of the speed when the button is pressed">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bounceVelocityIn={60}
                >
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>
            </TestSuite>

            <TestSuite name='bounceVelocityOut'>
            <TestCase itShould="Test the animation of the speed when the button is released">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bounceVelocityOut={70}
                >
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>
            </TestSuite>

            <TestSuite name='bouncinessIn'>
            <TestCase itShould="Test the animation effect of the elasticity coefficient when the button is pressed">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bouncinessIn={50}
                >
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>
            </TestSuite>

            <TestSuite name='bouncinessOut'>
            <TestCase itShould="Test the animation effect of the elastic coefficient when the button is released">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bouncinessOut={50}
                >
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>
            </TestSuite>
        </Tester>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    bounceStyle: {
      backgroundColor: 'lightblue'
    },
    textStyle_fontSize: {
      fontSize: 50,
    },
    textStyle_fontColor: {
        color: 'red',
      },
  });