import React from 'react';
import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, Text, ImageBackground, Alert }from 'react-native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { TestSuite, Tester, TestCase} from '@rnoh/testerino';

let flag:boolean = true;
export function BounceableTest () {
    const customStyle = {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      };


    const onPress = () => {
        if (flag) {
            Alert.alert(
                'Hint',
                'Click on the effect, which is true',
                [
                  {text: 'NO', style: 'cancel'},
                  {text: 'YES'},
                ],
                { cancelable: false }
            );
            flag = false;
        } else {
            Alert.alert(
                'Hint',
                'Click on the effect, which is false',
                [
                  {text: 'NO', style: 'cancel'},
                  {text: 'YES'},
                ],
                { cancelable: false }
            );
            flag = true;
        }
      };

    return <ScrollView style={styles.container}>
        <Tester>
        <TestSuite>
            <TestCase itShould="Test the default touch feedback">
                <RNBounceable>
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test the text custom style">
                <RNBounceable>
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test Custom Styles (Single styles)">
                <RNBounceable
                style={customStyle}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test custom styles (multiple styles)">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test a custom click function">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                onPress = {onPress}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test to zoom out the animation when the button is pressed">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test the enlarged animation effect when releasing the button">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectOut={1.5}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test the animation of the speed when the button is pressed">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bounceVelocityIn={60}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test the animation of the speed when the button is released">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bounceVelocityOut={70}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test the animation effect of the elasticity coefficient when the button is pressed">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bouncinessIn={50}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Test the animation effect of the elastic coefficient when the button is released">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bouncinessOut={50}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
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
    textStyle: {
      fontSize: 20,
      color: 'red',
    },
  });