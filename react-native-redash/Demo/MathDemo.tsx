import React, { useState } from 'react';
import { StyleSheet, Text, Button, ScrollView, View } from 'react-native';
import {
    mix,
    round,
    bin,
    clamp,
    cubicBezier,
    avg,
    between,
    toRad,
    toDeg
} from 'react-native-redash/src/Math';

// 导出组件
export default function RadashDemo() {

    const [text, setText] = useState('');

    const onMix = () => {
        const mixre = mix(0, 10, 20);
        setText(mixre.toString())
    }

    const onRoundre = () => {
        const roundre = round(5.123, 0);
        setText(roundre.toString())
    }

    const onBinre = () => {
        const binre = bin(true);
        setText(binre.toString())
    }

    const onBetweenre = () => {
        const betweenre = between(-1, 0, 100);
        setText(betweenre.toString())
    }

    const onToRadre = () => {
        const toRadre = toRad(180);
        setText(toRadre.toString())
    }

    const onToDegre = () => {
        const toDegre = toDeg(Math.PI);
        setText(toDegre.toString())
    }

    const onClampre = () => {
        const clampre = clamp(-1, 0, 100)
        setText(clampre.toString())
    }

    const avgre = () => {
        const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const avgs = avg(values)
        setText(avgs.toString())
    }

    const cubicBezires = () => {
        const cubicBezire = cubicBezier(1, 0, 0.1, 0.1, 1)
        setText(cubicBezire.toString())
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Math</Text>
            </View>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {text}
                </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>mix(0, 10, 20)</Text>
                        <Button title='运行' color='#841584' onPress={onMix}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>round(5.123, 0)</Text>
                        <Button title='运行' color='#841584' onPress={onRoundre}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>bin(true)</Text>
                        <Button title='运行' color='#841584' onPress={onBinre}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>between(-1, 0, 100)</Text>
                        <Button title='运行' color='#841584' onPress={onBetweenre}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>toRad(180)</Text>
                        <Button title='运行' color='#841584' onPress={onToRadre}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>avg([1,2,3,4,5,6,7,8,9,10])</Text>
                        <Button title='运行' color='#841584' onPress={avgre}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>cubicBezier(1, 0, 0.1, 0.1, 1)</Text>
                        <Button title='运行' color='#841584' onPress={cubicBezires}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>toDeg(Math.PI)</Text>
                        <Button title='运行' color='#841584' onPress={onToDegre}></Button>
                    </View>
                    <View style={styles.baseArea}>
                        <Text style={{ flex: 1 }}>clamp(-1, 0, 100)</Text>
                        <Button title='运行' color='#841584' onPress={onClampre}></Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F1F3F5',
    },
    baseText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    titleArea: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        width: '90%',
        color: '#000000',
        textAlign: 'left',
        fontSize: 30,
    },
    scrollView: {
        width: '90%',
        marginHorizontal: 20,
    },
    inputArea: {
        width: '90%',
        height: 30,
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    baseArea: {
        width: '100%',
        height: 60,
        borderRadius: 4,
        borderColor: '#000000',
        marginTop: 8,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8
    }
});