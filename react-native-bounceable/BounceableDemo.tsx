import React from 'react';
import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert }from 'react-native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { Tester, TestCase } from '@rnoh/testerino';

let flag:boolean = true;
export function BounceableDemo () {
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
            <TestCase itShould="the default touch feedback demo">
                <RNBounceable>
                    <Text>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Custom Styles demo">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="a custom click function demo">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                onPress = {onPress}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Zoom out and zoom in when pressed and released demo">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bounceEffectOut={1.5}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="The speed at which it is pressed and released demo">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bounceVelocityIn={60}
                bounceVelocityOut={70}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>

            <TestCase itShould="Coefficient of elasticity when pressed and released demo">
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bouncinessIn={50}
                bouncinessOut={50}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
            </TestCase>
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