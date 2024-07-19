import { TestSuite } from '@rnoh/testerino';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TestCase } from '../../components';
import DropShadow from 'react-native-drop-shadow';

export function DropShadowTest() {
    return (
        <TestSuite name="DropShadow">
            <TestCase.Example itShould="DropShadow View">
                <View style={styles.container}>
                    <DropShadow style={styles.shadow}>
                        <View style={styles.box} />
                    </DropShadow>
                </View>
            </TestCase.Example>
            <TestCase.Example itShould="render light blue shadow shifted towards bottom and right">
                <View
                    style={{
                        width: 64,
                        height: 64,
                        margin: 8,
                        backgroundColor: 'green',
                        shadowColor: 'blue',
                        shadowOffset: { width: 16, height: 16 },
                        shadowOpacity: 0.25,
                        shadowRadius: 16,
                    }}
                />
            </TestCase.Example>
        </TestSuite>
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
        shadowOpacity: 1,
        shadowRadius: 30,
    },
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});