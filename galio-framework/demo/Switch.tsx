import COLORS, { Block, theme, Radio, Text, Switch } from 'galio-framework';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';

const SwitchExample = () => {
    const [result, setReault] = useState('')
    const [initialValue, setInitialValue] = useState(false)
    const [switchValue, setSwitchValue] = React.useState(initialValue);
    function onPressSwitch() {
        setSwitchValue(!switchValue);
        setReault('onChange is success')
        return null;
    }
    return (
        <View>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <Block style={{
                height: 'auto',
                display: 'flex',
                backgroundColor: '#fff'
            }}>
                <Switch
                    initialValue={true}
                    trackColor={{ false: 'pink', true: 'red' }}
                    onChange={onPressSwitch}
                ></Switch>
            </Block>
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
export default SwitchExample