import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckboxDemo = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [value, setValue] = useState(true)
    const [msg, setMsg] = useState("init")
    const [msg2, setMsg2] = useState("init2")

    return (
        <View style={styles.checkStyle}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                style={{ width: 70, height: 70 }}
                tintColor={'red'}
                onCheckColor={'green'}
                onChange={(event) => {
                    console.log("" + event.nativeEvent.value)
                    setMsg2("onChange" + event.nativeEvent.target)
                    setValue(event.nativeEvent.value)
                }}
                markSize={70}
                strokeColor={'yellow'}
                strokeWidth={5}
                onValueChange={(newValue) => {
                    setToggleCheckBox(newValue)
                    setMsg("onValueChange----")
                }}
            />

            <CheckBox/>
            <CheckBox style={{ width: 70, height: 70 }}/>

            <CheckBox
                style={{ width: 70, height: 70 }}
                markSize={70}
                strokeWidth={5}
            />

            <CheckBox
                style={{ width: 70, height: 70 }}
                markSize={140}
                strokeWidth={5}
            />
            
            <Text style={styles.text}>{toggleCheckBox ? "1" : "0"}</Text>
            <Text style={styles.text}>{value ? "1" : "0"}</Text>
            <Text style={styles.text}>{msg}</Text>
            <Text style={styles.text}>{msg2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    maskedView: {
        width: '100%',
        height: '40%'
    },
    checkStyle: {
        backgroundColor: 'transparent',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },
    text: {
        width: '100%',
        height: 20,
        fontSize: 14,
    },
});

export default CheckboxDemo