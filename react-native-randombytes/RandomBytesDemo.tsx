import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import { randomBytes } from 'react-native-randombytes';

export default function(): JSX.Element {

    const [bytesString, setBytesString] = useState('');
    const [size, setSize] = useState('30');

    // 调用原生 randomBytes, 传入一个回调函数
    const nativeRandom = () => {
        randomBytes(Number(size), (err: any, bytes: any) => {
            setBytesString(JSON.stringify(bytes))
            console.log(err);       
        })
    }

    // 不传回调函数，调用js randomBytes 
    const jsRandom = () => {
        const bytes = randomBytes(Number(size))
        setBytesString(JSON.stringify(bytes))
    }

    return <View>
        <Text>
            {bytesString}
        </Text>

        <TextInput style={styles.TextInput} value={size} onChangeText={(s) => {
            setSize(s);
        }}></TextInput>
        <TouchableOpacity onPress={nativeRandom} style={styles.btn}>
        <Text
          style={styles.btnText}>
          Native RandomBytes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={jsRandom} style={styles.btn}>
        <Text
          style={styles.btnText}>
          RandomBytes
        </Text>
      </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
  TextInput: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '90%' },
  btn: { borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, margin: 10, backgroundColor: 'blue' },
  btnText: { fontWeight: 'bold', color: '#fff', fontSize: 20 }
});
