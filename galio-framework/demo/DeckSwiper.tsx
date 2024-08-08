import { DeckSwiper } from 'galio-framework';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeckSwiperExample = () => {
    const [result, setReault] = useState('')
    const elements = [
        <View style={{ backgroundColor: '#B23AFC', height: 150, width: 150, alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <Text>You wanna see a cool component?</Text>
        </View>,
        <View style={{ backgroundColor: '#FE2472', height: 150, width: 150, alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <Text>What did you expect?</Text>
        </View>,
        <View style={{ backgroundColor: '#FF9C09', height: 150, width: 150, alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <Text>Maybe you want to build the next Tinder</Text>
        </View>,
        <View style={{ backgroundColor: '#45DF31', height: 150, width: 150, alignContent: 'center', alignSelf: 'center' }}>
            <Text>or maybe you just want a nice deck swiper component</Text>
        </View>
    ];

    const onSwipeRight = () => {
        setReault('onSwipeRight')
    }

    const onSwipeLeft = () => {
        setReault('onSwipeLeft')
    }
    return (
        <View>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <View style={{
                height: 150,
                display: 'flex',
                backgroundColor: '#fff'
            }}>
                <DeckSwiper components={elements} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}></DeckSwiper>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    DeckSwiper: {
        borderRadius: 20,
        backgroundColor: '#456598'
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
        height: 50,
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
        backgroundColor: 'blue'
    },
});
export default DeckSwiperExample