import { Checkbox } from 'galio-framework';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const CheckboxExample = () => {
    const [result, setReault] = useState('')
    const onChange = () => {
        setReault('success')
    }
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <View style={{
                height: "auto",
                display: 'flex',
                backgroundColor:'#fff',
                flex:1
            }}>
                <Checkbox color="info" initialValue={false} label="initialValue set to true"  iconFamily="antdesign" iconName="aliwangwang" onChange={onChange}/>
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
        height: 'auto',
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 20
    },
    baseText: {
        width: '100%',
        height: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    checkboxStyle: {
        borderColor: 'black',
        width: 50,
        height: 50,
        borderWidth: 5
    },
    checkboxStyle1: {
        borderColor: 'blue',
        width: 40,
        height: 40,
        borderWidth: 3
    },
    imageStyle: {
        backgroundColor: "red"
    },
    labelStyle: {
        color: 'red'
    },
});

export default CheckboxExample