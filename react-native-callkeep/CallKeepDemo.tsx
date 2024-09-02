import React, { useState, useEffect } from 'react';
import {
    Button,
    View,
    Alert,
    Text,
} from 'react-native';

import RNCallKeep from 'react-native-callkeep';

export function CallKeepExample() {
    const handleClick = (buttonId: number) => {
        switch (buttonId) {
            case 1:
                RNCallKeep.startCall("0x123456", "10086");
                break;
            case 2:
                RNCallKeep.isCallActive("0x123456").then(res => {
                    Alert.alert('获取isCallActive的值:' + res);
                });
                break;
            case 3:
                RNCallKeep.checkIfBusy().then(res => {
                    Alert.alert('获取checkIfBusy的值:' + res);
                });
                break;

            default:
                break;
        }
    };
    return (
        <>
            <Text style={{ color: "red" }}>RNCallKeep.startCall</Text>
            <Button title='startCall' onPress={() => handleClick(1)} ></Button>

            <Text style={{ color: "red" }}>RNCallKeep.isCallActive</Text>
            <Button title='isCallActive' onPress={() => handleClick(2)} ></Button>

            <Text style={{ color: "red" }}>RNCallKeep.checkIfBusy</Text>
            <Button title='checkIfBusy' onPress={() => handleClick(3)} ></Button>
        </>
    );
}