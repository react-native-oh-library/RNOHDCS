import React, { Component, useState } from 'react';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { Animated, Text, ScrollView, View, SafeAreaView } from 'react-native';
import { TextButton, RaisedTextButton, TextField } from 'react-native-material-buttons';
// import { TestCase } from '../components';

// let val = "abc"

interface Styles {
    scroll: object;
    container: object;
    safeContainer: object;
    column: object;
    row: object;
    card: object;
    card2: object;
    card3: object;
    button: object;
    display: object;
    text: object;
    content: object;
    bold: object;
    two: object;
    three: object;
}

let styles: Styles = {
    scroll: {
        padding: 4,
        paddingTop: 24,
        backgroundColor: '#E8EAF6',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 8,
        backgroundColor: 'rgba(0,0,0,.05)',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#E8EAF6',
    },
    column: {
        justifyContent: 'center',
        marginBottom: 8,
        backgroundColor: 'rgba(0,0,0,.05)',
    },
    row: {
        marginBottom: 8,
    },
    card: {
        borderRadius: 2,
        padding: 8,
        margin: 4,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        minHeight: 106,
        justifyContent: 'space-between',
        shadowOpacity: 0.54,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
    },
    card2: {
        borderRadius: 2,
        padding: 8,
        margin: 4,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        minHeight: 110,
        justifyContent: 'space-between',
        shadowOpacity: 0.54,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
    },
    card3: {
        borderRadius: 2,
        padding: 8,
        margin: 4,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        minHeight: 86,
        justifyContent: 'space-between',
        shadowOpacity: 0.54,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
    },
    button: {
        margin: 4,
    },
    display: {
        paddingHorizontal: 8,
        fontSize: 17,
        fontWeight: '500',
        color: 'rgba(0, 0, 0, .87)',
    },
    text: {
        padding: 8,
        paddingButtom: 0,
        fontSize: 15,
        color: 'rgba(0, 0, 0, .54)',
    },
    content: {
        flex: 1,
        paddingVertical: 16,
        paddingButtom: 0,
        paddingTop: 0
    },
    bold: {
        fontWeight: 'bold',
    },
    two: {
        flexDirection: 'row', justifyContent: 'flex-end'
    },
    three: {
        flexDirection: 'row', justifyContent: 'flex-end', paddingButtom: 20,
    },
};

/* eslint-disable react/prop-types */
let Strong: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
    <Text style={styles.bold} {...props}>
        {children}
    </Text>
);
/* eslint-enable */

const MaterialButtonsExample = () => {

    const [val, setval] = useState('abc');

    const handleButtonPress = (event: any) => {
        // 处理按钮点击事件，使用传递的 payload
        console.log('Button clicked with payload:', event);
        setval(event.name)
        // 可以在这里执行任何逻辑，根据传递的 payload 进行不同的处理
    };
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="MaterialButtonsExample">
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons Example1">
                        <View style={styles.card}>
                            <View style={styles.content}>
                                <Text style={styles.display}>default</Text>
                            </View>
                            <RaisedTextButton style={{ marginVertical: 4 }} title="default button" />
                            <RaisedTextButton style={{ marginVertical: 4 }} disabledTitleColor="green" titleStyle={{ fontWeight: 'bold' }} title="disabled button" disabled />
                            <TextButton style={{ marginVertical: 4 }} title="default flat button" />
                            <TextButton style={{ marginVertical: 4 }} disabledTitleColor="red" title="disabled flat button" disabled />
                        </View>
                    </TestCase>


                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtonsExample">
                        <View style={styles.card2}>
                            <View style={styles.content}>
                                <Text style={styles.display}>raised</Text>
                                <Text style={styles.text}>
                                    Buttons with custom <Strong>color</Strong>, <Strong>titleColor</Strong>, increased{' '}
                                    <Strong>rippleDuration</Strong> and <Strong>rippleOpacity</Strong>
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <RaisedTextButton
                                    style={styles.button}
                                    rippleDuration={600}
                                    rippleOpacity={0.3}
                                    title="flat"
                                    color="#039BE5"
                                    titleColor="white"
                                />
                                <RaisedTextButton
                                    style={styles.button}
                                    rippleDuration={1000}
                                    rippleOpacity={0.75}
                                    title="is"
                                    color="#0288D1"
                                    titleColor="white"
                                />
                                <RaisedTextButton
                                    style={styles.button}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    rippleDuration={1500}
                                    rippleOpacity={1.2}
                                    title="boring"
                                    color="#0277BD"
                                    titleColor="white"
                                />
                            </View>
                        </View>
                    </TestCase>


                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons Example2">
                        <View style={styles.card3}>
                            <View style={styles.content}>
                                <Text style={styles.display}>flat</Text>
                                <Text style={styles.text}>Buttons with custom <Strong>titleColor</Strong> and <Strong>color</Strong></Text>
                            </View>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} color="blue" titleColor="black" title="decline" />
                                <TextButton style={{ margin: 4 }} titleStyle={{ fontWeight: 'bold' }} color="black" titleColor="pink" title="accept" />
                            </View>
                        </View>
                    </TestCase>


                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons disabledColor Example">
                        <View style={styles.card3}>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} disabled disabledColor='red' title="disabledColor" />
                                <TextButton style={{ margin: 4 }} disabled disabledColor='blue' title="disabledColor" />
                            </View>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons shadeColor Example">
                        <View style={styles.card3}>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} shadeColor="red" title="shadeColor" />
                                <TextButton style={{ margin: 4 }} shadeColor='blue' title="shadeColor" />
                            </View>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons shadeOpacity Example">
                        <View style={styles.card3}>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} shadeOpacity="0.7" title="shadeOpacity" />
                                <TextButton style={{ margin: 4 }} shadeOpacity='0.1' title="shadeOpacity" />
                            </View>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons shadeBorderRadius Example">
                        <View style={styles.card3}>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} shadeBorderRadius="20" title="shadeBorderRadius" />
                                <TextButton style={{ margin: 4 }} shadeBorderRadius='2' title="shadeBorderRadius" />
                            </View>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons focusAnimation Example">
                        <View style={styles.card3}>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} focusAnimation={new Animated.Value(0)} shadeOpacity="0.7" title="focusAnimation" />
                                <TextButton style={{ margin: 4 }} focusAnimation={new Animated.Value(1)} shadeOpacity='0.7' title="focusAnimation" />
                            </View>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons disableAnimation Example">
                        <View style={styles.card3}>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} disableAnimation={new Animated.Value(0)} disable shadeOpacity="0.7" title="disableAnimation" />
                                <TextButton style={{ margin: 4 }} disableAnimation={new Animated.Value(1)} disable shadeOpacity='0.7' title="disableAnimation" />
                            </View>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons focusAnimationDuration Example">
                        <View style={styles.card3}>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} focusAnimationDuration={100} focusAnimation={new Animated.Value(0)} shadeOpacity="0.7" title="focusAnimationDuration" />
                                <TextButton style={{ margin: 4 }} focusAnimationDuration={600} focusAnimation={new Animated.Value(1)} shadeOpacity='0.7' title="focusAnimationDuration" />
                            </View>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons disableAnimationDuration Example">
                        <View style={styles.card3}>
                            <View style={styles.two}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} disableAnimationDuration={100} disableAnimation={new Animated.Value(0)} disable shadeOpacity="0.7" title="disableAnimationDuration" />
                                <TextButton style={{ margin: 4 }} disableAnimationDuration={600} disableAnimation={new Animated.Value(1)} disable shadeOpacity='0.7' title="disableAnimationDuration" />
                            </View>
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Tester MaterialButtons onPress Payload Example">
                        <View style={styles.card3}>
                            <View style={styles.content}>
                                <Text style={styles.text}>{val}</Text>
                            </View>
                            <View style={styles.three}>
                                <TextButton style={{ margin: 4, marginLeft: 0 }} onPress={(event: any) => handleButtonPress(event)} payload={{ name: 'John', age: 30 }} title="Payload" />
                                <TextButton style={{ margin: 4 }} onPress={(event: any) => handleButtonPress(event)} payload={{ name: 'JACK', age: 25 }} title="Payload" />
                            </View>
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester >
        </ScrollView>
    );
}
export default MaterialButtonsExample   