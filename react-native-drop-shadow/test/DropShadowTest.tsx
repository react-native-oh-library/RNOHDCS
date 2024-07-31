import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DropShadow from 'react-native-drop-shadow';

export function DropShadowTest() {
    return (
        <Tester>
            <TestSuite name="DropShadow">
                <TestCase itShould="DropShadow: shadowRadius、shadowColor、shadowOpacity">
                    <View style={styles.container}>
                        <DropShadow style={styles.shadow}>
                            <View style={styles.box} />
                        </DropShadow>
                    </View>
                </TestCase>
                <TestCase itShould="DropShadow: shadowColor、shadowRadius">
                    <View style={styles.container}>
                        <DropShadow
                            style={{
                                shadowColor: 'rgb(0 0 0)',
                                shadowOffset: {
                                    width: 0,
                                    height: 0,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 30,
                            }}>
                            <View style={styles.box} />
                        </DropShadow>
                    </View>
                </TestCase>
                <TestCase itShould="DropShadow: shadowOffset, shadowColor、shadowOpacity">
                    <View style={styles.container}>
                        <DropShadow
                            style={{
                                shadowColor: 'blue',
                                shadowOffset: {
                                    width: 10,
                                    height: 50,
                                },
                                shadowOpacity: 0.6,
                                shadowRadius: 120,
                            }}>
                            <View style={styles.box} />
                        </DropShadow>
                    </View>
                </TestCase>
            </TestSuite>
        </Tester>
    );
}

const styles = StyleSheet.create({
    box: { height: 50, width: 50, backgroundColor: 'red' },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 30,
    },
    container: { alignItems: 'center', justifyContent: 'center', height: 200 },
});