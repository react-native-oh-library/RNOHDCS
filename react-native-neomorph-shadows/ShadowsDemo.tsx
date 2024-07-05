import React from 'react';
import { TestSuite } from '@rnoh/testerino';
import { View, StyleSheet, Text } from 'react-native';
import { Shadow } from 'react-native-neomorph-shadows';

export function ShadowsDemo() {
    return (
        <TestSuite name="ShadowsDemo">
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
                            // shadowColor: "#FFC0C0",
                            // shadowOffset: {
                            //     width: 0,
                            //     height: 20
                            // },
                            // shadowOpacity: 1,
                            // shadowRadius: 3.84,
                            // elevation: 5 // 添加阴影效果
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
        </TestSuite>
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
