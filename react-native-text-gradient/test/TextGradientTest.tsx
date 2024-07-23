import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';

export function TextGradientTest() {
    return (
        <Tester>
            <ScrollView>
                <TestSuite name="LinearTextGradient">
                    <TestCase tags={['C_API']} itShould="locations">
                        <View style={styles.container}>
                            <LinearTextGradient
                                style={styles.welcome}
                                locations={[0, 1]}
                                colors={['blue', 'red']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}>
                                Welcome to React Native!
                            </LinearTextGradient>
                        </View>
                    </TestCase>


                    <TestCase tags={['C_API']} itShould="colors">
                        <View style={styles.container}>
                            <LinearTextGradient
                                style={styles.welcome}
                                locations={[0, 1]}
                                colors={['#00FF00', 'red']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}>
                                Welcome to React Native!
                            </LinearTextGradient>
                        </View>
                    </TestCase>



                    <TestCase tags={['C_API']} itShould="start">
                        <View style={styles.container}>
                            <LinearTextGradient
                                style={styles.welcome}
                                locations={[0, 1]}
                                colors={['blue', 'red']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 1, y: 0 }}>
                                Welcome to React Native!
                            </LinearTextGradient>
                        </View>
                    </TestCase>

                    <TestCase tags={['C_API']} itShould="end">
                        <View style={styles.container}>
                            <LinearTextGradient
                                style={styles.welcome}
                                locations={[0, 1]}
                                colors={['blue', 'red']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}>
                                Welcome to React Native!
                            </LinearTextGradient>
                        </View>
                    </TestCase>


                    <TestCase tags={['C_API']} itShould="useViewFrame">
                        <View style={styles.container}>
                            <LinearTextGradient
                                style={styles.welcome}
                                locations={[0, 1]}
                                colors={['blue', 'red']}
                                useViewFrame={true}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}>
                                Welcome to React Native!
                            </LinearTextGradient>
                        </View>
                    </TestCase>
    
                    <TestCase tags={['C_API']} itShould="useGlobalCache">
                        <View style={styles.container}>
                            <LinearTextGradient
                                style={styles.welcome}
                                locations={[0, 1]}
                                colors={['blue', 'red']}
                                useGlobalCache={true}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}>
                                Welcome to React Native!
                            </LinearTextGradient>
                        </View>
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester>
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