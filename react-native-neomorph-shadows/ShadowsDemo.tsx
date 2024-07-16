import React from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Shadow } from 'react-native-neomorph-shadows';

const ShadowsDemo = () => {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="ShadowsDemo">
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester Shadows Example">
                        <View style={styles.container}>
                            <Shadow
                                style={{
                                    fillOpacity: 0.6,
                                    stopColor: "#f0f0f0",//渐变结束的颜色
                                    startColor: "#FF3A3A",//渐变开始的颜色
                                    width: 110,
                                    height: 110,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <View
                                    style={{
                                        borderRadius: 25,
                                        backgroundColor: "#FF3A3A",
                                        width: 110,
                                        height: 44,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Text
                                        style={{
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            fontSize: 16
                                        }}>
                                        登录/注册
                                    </Text>
                                </View>
                            </Shadow>
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="Tester Shadows Example(fillOpacity)">
                        <View style={styles.container}>
                            <Shadow
                                style={{
                                    fillOpacity: 0.2,
                                    stopColor: "#f0f0f0",//渐变结束的颜色
                                    startColor: "#FF3A3A",//渐变开始的颜色
                                    width: 110,
                                    height: 110,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <View
                                    style={{
                                        borderRadius: 25,
                                        backgroundColor: "#FF3A3A",
                                        width: 110,
                                        height: 44,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Text
                                        style={{
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            fontSize: 16
                                        }}>
                                        登录/注册
                                    </Text>
                                </View>
                            </Shadow>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester Shadows Example(startColor)">
                        <View style={styles.container}>
                            <Shadow
                                style={{
                                    fillOpacity: 0.6,
                                    stopColor: "#f0f0f0",//渐变结束的颜色
                                    startColor: "blue",//渐变开始的颜色
                                    width: 110,
                                    height: 110,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <View
                                    style={{
                                        borderRadius: 25,
                                        backgroundColor: "#FF3A3A",
                                        width: 110,
                                        height: 44,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Text
                                        style={{
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            fontSize: 16
                                        }}>
                                        登录/注册
                                    </Text>
                                </View>
                            </Shadow>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester Shadows Example(stopColor)">
                        <View style={styles.container}>
                            <Shadow
                                style={{
                                    fillOpacity: 0.6,
                                    stopColor: "blue",//渐变结束的颜色
                                    startColor: "#FF3A3A",//渐变开始的颜色
                                    width: 110,
                                    height: 110,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <View
                                    style={{
                                        borderRadius: 25,
                                        backgroundColor: "#FF3A3A",
                                        width: 110,
                                        height: 44,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Text
                                        style={{
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            fontSize: 16
                                        }}>
                                        登录/注册
                                    </Text>
                                </View>
                            </Shadow>
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
});

export default ShadowsDemo