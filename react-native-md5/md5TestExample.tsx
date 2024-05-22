import {ScrollView, StyleSheet,View,Text,TextInput,TouchableHighlight} from 'react-native';
import React,{ useState } from 'react';
import md5 from "react-native-md5";


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5FCFF' },
    content: { paddingTop: 40, alignItems: 'center' },
    fieldContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    button: { borderRadius: 3, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: 'green', marginBottom: 10 },
    buttonText: { color: '#fff', textAlign: 'center' },
});
export function md5TestExample() {
    let data = '';
    const [hMd5Text, setHMd5Text] = useState("");
    const [bMd5Text, setBMd5Text] = useState("");
    const [sMd5Text, setSMd5Text] = useState("");
    const [hmatch, setHmatch] = useState("");
    const [bmatch, setBmatch] = useState("");
    const [smatch, setSmatch] = useState("");

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text>{}</Text>
            <View style={styles.fieldContainer}>
                <TextInput placeholder = "输入加密字符串" 
                        onChangeText={ value => { data = value; setHMd5Text(md5.hex_md5(value)); setBMd5Text(md5.b64_md5(value)); setSMd5Text(md5.str_md5(value)); }}>
                </TextInput>
            </View>
            <View style={styles.fieldContainer}>
                <Text>.........................</Text>
            </View>
            <View style={styles.fieldContainer}>
                <TextInput placeholder = "输入HMAC密匙"
                onChangeText={
                    value => { 
                        setHmatch(md5.hex_hmac_md5(data,value)); setBmatch(md5.b64_hmac_md5(data,value)); setSmatch(md5.str_hmac_md5(data,value)); 
                    }
                } 
                ></TextInput>
            </View>
            
            <View style={styles.fieldContainer}><Text>16位:{hMd5Text} </Text></View>
            <View style={styles.fieldContainer}><Text>base-64:{bMd5Text} </Text></View>
            <View style={styles.fieldContainer}> <Text>字符串:{sMd5Text} </Text></View>
            
            <View style={styles.fieldContainer}><Text>HMAC-MD5 16位:{hmatch} </Text></View>
            <View style={styles.fieldContainer}><Text>HMAC-MD5 base-64:{bmatch} </Text></View>
            <View style={styles.fieldContainer}> <Text>HMAC-MD5 字符串:{smatch} </Text></View>
        </ScrollView>
    );
}