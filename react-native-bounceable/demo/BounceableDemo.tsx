import React from 'react';
import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert }from 'react-native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { Tester, TestCase } from '@rnoh/testerino';

let flag:boolean = true;
export default function BounceableDemo () {
    const customStyle = {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      };

    return <ScrollView style={styles.container}>
                <RNBounceable
                style={[customStyle, styles.bounceStyle]}
                bounceEffectIn={0.1}
                bounceVelocityIn={60}
                bouncinessOut={50}
                onPress ={()=>{
                    Alert.alert('onEnd event run success!');
                  }}
                >
                    <Text style={styles.textStyle}>Press Me</Text>
                </RNBounceable>
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