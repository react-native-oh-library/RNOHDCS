import React,{ useState } from 'react';
import {Buffer} from 'buffer';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

//import CryptoJS from "react-native-crypto-js";
import CryptoJS from "rn-crypto-js";
 

function encrypt_str(text:string){

 let ciphertext =  CryptoJS.AES.encrypt(text, 'secret key 123').toString();
  Alert.alert('加密后：', ciphertext,  [{text: 'OK'}]);
  return ciphertext;
}

function decrypt_str(text:string){
 let bytes  = CryptoJS.AES.decrypt(text, 'secret key 123');
 let originalText = bytes.toString(CryptoJS.enc.Utf8);
//  Clipboard.setString(originalText);
//  Alert.alert(originalText);
 Alert.alert('解密后：', originalText,  [{text: 'OK'}]);
 return originalText;
}



function encrypt_obj(text:string){

 let ciphertext =  CryptoJS.AES.encrypt(JSON.stringify(text), 'secret key 123').toString();
//  Clipboard.setString(ciphertext);
//  Alert.alert(ciphertext);
// let ciphertext =  CryptoJS.DES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(text)), CryptoJS.enc.Utf8.parse('secret key 123'), {
//   mode: CryptoJS.mode.ECB, // 使用 ECB 模式
//   padding: CryptoJS.pad.Pkcs7, // 使用 PKCS7 填充
// }).toString();
 Alert.alert('加密后：', ciphertext,  [{text: 'OK'}]);
 return ciphertext;
}

function decrypt_obj(text:string){
    let bytes  = CryptoJS.AES.decrypt(text, 'secret key 123');
    let originalText =JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // Clipboard.setString(originalText);
    // Alert.alert(originalText);
    Alert.alert('解密后：', originalText,  [{text: 'OK'}]);
    return originalText;
}

function MD5_encrypt_str(text:string){
  let ciphertext =  CryptoJS.MD5(text).toString();
  Alert.alert('加密后：', ciphertext,  [{text: 'OK'}]);
  return ciphertext;

}


function HMD5_encrypt_str(text:string){
  //let ciphertext =  CryptoJS.HmacMD5(text,'secret key 123').toString();
  let ciphertext = CryptoJS.HmacSHA256(text,'secret key 123').toString();
  Alert.alert('加密后：', ciphertext,  [{text: 'OK'}]);
  return ciphertext;

}

export const ReactNativeCryptoJsExample = () => {
  const [cryptText, setCryptText] = useState('test 123');
  const [cryptText1, setCryptText1] = useState('test123');
  const [cryptText2, setCryptText2] = useState('test123');
  const [decryptText, setDecryptText] = useState('');
  const [cryptObj, setCryptObj] = useState('[{id: 1}, {id: 2}]');
  const [decryptObj, setDecryptObj] = useState('');
  return (
    <ScrollView style={{backgroundColor: 'yellow'}} bounces>
      <Text> 测试使用AES算法加解密字符串</Text>
       <View style={{padding: 10}}>
            <TextInput  style={{height: 40}}  placeholder="请输入内容!" onChangeText={(cryptText: React.SetStateAction<string>) => setCryptText(cryptText)} defaultValue={cryptText} />
            </View>
            <Button onPress={() => { setDecryptText(encrypt_str(cryptText)) }} title="加密字符串"/>

            <View style={{padding: 10}}>
            <TextInput  style={{height: 40}}  placeholder="请输入内容!" onChangeText={(decryptText: React.SetStateAction<string>) => setDecryptText(decryptText)} defaultValue={decryptText} />
            </View>
            <Button onPress={() => {decrypt_str(decryptText)}} title="解密字符串"/>
        <Text> 测试使用AES算法加解密字符串</Text>
        <View style={{padding: 10}}>
            <TextInput  style={{height: 40}}  placeholder="请输入内容!" onChangeText={(cryptObj: React.SetStateAction<string>) => setCryptObj(cryptObj)} defaultValue={cryptObj} />
            </View>
            <Button onPress={() => { setDecryptObj(encrypt_obj(cryptObj)) }} title="加密对象"/>

            <View style={{padding: 10}}>
            <TextInput  style={{height: 40}}  placeholder="请输入内容!" onChangeText={(decryptObj: React.SetStateAction<string>) => setDecryptObj(decryptObj)} defaultValue={decryptObj} />
            </View>
            <Button onPress={() => {decrypt_obj(decryptObj)}} title="解密对象"/>
        <Text> 测试使用MD5算法加密字符串</Text>
        <View style={{padding: 10}}>
            <TextInput  style={{height: 40}}  placeholder="请输入内容!" onChangeText={(cryptText1: React.SetStateAction<string>) =>setCryptText1(cryptText1)} defaultValue={cryptText1} />
            </View>
            <Button onPress={() => { MD5_encrypt_str(cryptText1) }} title="加密"/>
        <Text> 测试使用HmacMD5算法加密字符串</Text>
        <View style={{padding: 10}}>
            <TextInput  style={{height: 40}}  placeholder="请输入内容!" onChangeText={(cryptText2: React.SetStateAction<string>) =>setCryptText2(cryptText2)} defaultValue={cryptText2} />
            </View>
            <Button onPress={() => { HMD5_encrypt_str(cryptText2) }} title="加密"/>
    </ScrollView>
  );
};