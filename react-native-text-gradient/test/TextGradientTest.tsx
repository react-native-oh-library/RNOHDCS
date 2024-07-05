import { TestSuite } from '@rnoh/testerino';
import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { TestCase } from '../components';
import { LinearTextGradient } from 'react-native-text-gradient';

export function TextGradientTest() {
    return (
        <TestSuite name="FileUpload">
            <TestCase.Example tags={['C_API']} itShould="LinearTextGradient">
                <View style={styles.container}>
                    <LinearTextGradient
                        style={styles.welcome}
                        locations={[0, 1]}
                        colors={['blue', 'red']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        Welcome to React Native!
                    </LinearTextGradient>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>
                        {'Double tap R on your keyboard to reload,\n' +
                            'Shake or press menu button for dev menu'}
                    </Text>
                </View>
            </TestCase.Example>
        </TestSuite>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: 100,
    },
    welcome: {
        fontSize: 20,
        width: 'auto',
        height: 'auto',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});