import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'galio-framework';

const ButtonExample = () => {
    return (
        <View style={{
            height: "auto",
            display: 'flex',
            backgroundColor: '#fff'
        }}>
            <Button opacity={0.8} uppercase={true} icon="tags" iconFamily="antdesign" iconSize={30} color="warning">uppercase</Button>
            <Button icon="air" iconFamily="Entypo" iconColor="blue">warning</Button>
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
        shadowRadius: 10
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
        height: '15%',
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    baseText: {
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    shadow: {
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default ButtonExample