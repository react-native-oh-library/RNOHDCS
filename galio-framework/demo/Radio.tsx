import COLORS, { Block, theme, Icon, Radio } from 'galio-framework';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

const RadioExample = () => {
    const [selectedValue, setSelectedValue] = useState('first');

    const handleRadioChange = (value: any) => {
        setSelectedValue(value);
    };
    return (
        <View>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {selectedValue}
                </Text>
            </View>
            <View style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor:'#fff',
                marginTop:10
            }}>
                <Radio
                    label="First Option"
                    value="first"
                    color="blue"
                    onChange={() => handleRadioChange('first')}
                />
                <Radio
                    label="Second Option"
                    value="second"
                    color="green"
                    onChange={() => handleRadioChange('second')}
                />
                <Radio
                    label="Third Option"
                    value="third"
                    color="red"
                    onChange={() => handleRadioChange('third')}
                />
            </View >
        </View>
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
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
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
export default RadioExample