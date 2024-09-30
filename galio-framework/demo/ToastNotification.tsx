import COLORS, { Block, Toast, Button } from 'galio-framework';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const ToastExample = () => {
    const [isShow, setShow] = useState(true);
    return (
        <ScrollView>
            <View>
                <Block style={{
                    height: 200,
                    display: 'flex',
                    backgroundColor: '#fff',
                }}>
                    <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                    <Toast isShow={isShow} textStyle={{ color: 'skyblue', fontSize: 20 }}>This is a top positioned toast</Toast>
                </Block>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    accordion: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    listStyle: {
        borderTopWidth: 10,
        borderTopColor: 'red',
    },
    headerStyle: {
        backgroundColor: '#5E72E4',
        padding: 10,
    },
    contentStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    inputArea: {
        width: '100%',
        height: 100,
        borderWidth: 2,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 20
    },
    baseText: {
        width: '100%',
        height: "auto",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    checkboxStyle: {
        color: 'pink'
    },
    imageStyle: {
        backgroundColor: "red"
    },
    labelStyle: {
        color: 'red'
    },
    focusedCard: {
        transform: [{ scale: 0.5 }],
    },
    nextCard: {
        transform: [{ scale: 1.4 }],
    },
});

export default ToastExample