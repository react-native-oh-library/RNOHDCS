import { View, Button, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import BackgroundTimer from "react-native-background-timer";
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';

export function BackgroundTimerExample() {
    let [count, setCount] = useState(0);
    let [text, setText] = useState("");
    // BackgroundTimer延时
    let [delay, setDelay] = useState("1000");
    // setTimeout延时
    let [timeoutDelay, setTimeoutDelay] = useState("1000");
    // setInterval延时
    let [intervalDelay, setIntervalDelay] = useState("1000");
    let timeoutList: number[] = []
    let [intervalList, setIntervalList] = useState<number[]>([]);

    // runBackgroundTimer
    function onPressStart() {
        setText("开启定时器...")
        BackgroundTimer.runBackgroundTimer(() => {
            setCount(count += 1)
        }, parseInt(delay))
    }
    function onPressStop() {
        setText("结束定时器")
        BackgroundTimer.stopBackgroundTimer()
    }

    // setTimeout
    function setTimeoutStart() {
        setText("开启定时器...")
        let timeoutId = BackgroundTimer.setTimeout(() => {
            setCount(count += 1)
        }, parseInt(timeoutDelay))
        timeoutList.push(timeoutId)
    }
    function setTimeoutStop() {
        setText("结束定时器")
        if (timeoutList.length > 0) {
            BackgroundTimer.clearTimeout(timeoutList[0])
            timeoutList.shift()
        }
    }

    // setInterval
    function setIntervalStart() {
        setText("开启定时器...")
        let intervalId = BackgroundTimer.setInterval(() => {
            setCount(count += 1)
        }, parseInt(intervalDelay))
        setIntervalList([...intervalList, intervalId])
    }
    function setIntervalStop() {
        setText("结束定时器")
        if (intervalList.length > 0) {
            BackgroundTimer.clearInterval(intervalList[0])
            intervalList.shift()
        }
    }
    function resetNumber() {
        setCount(0)
        setText("")
    }
    return (
        <Tester>
            <TestSuite name="TesterFeatherExample">
                <TestCase.Example
                    tags={['C_API']}
                    itShould="TesterFeatherExample">
                 <ScrollView>
                    <View style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
                        <View style={styles.container}>
                            <View style={styles.viewStyle}>
                                <Button
                                    onPress={onPressStart}
                                    title="runBackgroundTimer"
                                />
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    placeholder="BackgroundTimer延时"
                                    onChangeText={(value) => { setDelay(value) }}
                                    value={delay}
                                />
                            </View>
                            <View style={[styles.viewStyle]}>
                                <Button
                                    onPress={onPressStop}
                                    title="stopBackgroundTimer"
                                />
                            </View>
                        </View>
                        {/* --------------------------------------------setTimeout-------------------------------------------------- */}
                        <View style={styles.container}>
                            <View style={styles.viewStyle}>
                                <Button
                                    onPress={setTimeoutStart}
                                    title="setTimeout"
                                />
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    placeholder="setTimeout延时"
                                    onChangeText={(value) => { setTimeoutDelay(value) }}
                                    value={timeoutDelay}
                                />
                            </View>
                            <View style={[styles.viewStyle]}>
                                <Button
                                    onPress={setTimeoutStop}
                                    title="clearTimeout"
                                />
                            </View>
                        </View>
                        {/* --------------------------------------------setInterval-------------------------------------------------- */}
                        <View style={styles.container}>
                            <View style={styles.viewStyle}>
                                <Button
                                    onPress={setIntervalStart}
                                    title="setInterval"
                                />
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    placeholder="setInterval延时"
                                    onChangeText={(value) => { setIntervalDelay(value) }}
                                    value={intervalDelay}
                                />
                            </View>
                            <View style={[styles.viewStyle]}>
                                <Button
                                    onPress={setIntervalStop}
                                    title="clearInterval"
                                />
                            </View>
                        </View>
                        {/* -----------------------------------------------Reset----------------------------------------------------- */}
                        <View style={[styles.viewStyle, styles.resetStyle]}>
                            <Button
                                onPress={resetNumber}
                                title="Reset"
                            />
                        </View>
                        <Text style={styles.textStyle}>{count}</Text>
                        <Text style={styles.textStyle}>{text}</Text>
                    </View>
                    </ScrollView>
                </TestCase.Example>
            </TestSuite>
        </Tester>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderTopWidth: 0,
        borderBottomWidth: 5,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        padding: 10,
    },
    resetStyle: {
        paddingTop: 10,
    },
    viewStyle: {
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 30,
    },
});