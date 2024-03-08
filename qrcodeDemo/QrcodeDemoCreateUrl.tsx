import React,{useState} from "react";
import{View,TextInput,Button} from "react-native"
import {CustomQrCode,CustomQrCodeImg,CustomQrCodeSvg,CustomQrCodeTable,CustomQrCodeAsc} from './qrcodeDemo'

export function QrcodeDemoCreateUrl() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const setCode = () => {
        setQrcode(ip)
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            <CustomQrCode text={qrcode} style={{width:200,height:200}}></CustomQrCode>
        </View>
    )
}

export function QrcodeDemoCreateImg() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const setCode = () => {
        setQrcode(ip)
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            <CustomQrCodeImg text={qrcode} style={{width:200,height:200}}></CustomQrCodeImg>
        </View>
    )
}

export function QrcodeDemoCreateSvg() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const setCode = () => {
        setQrcode(ip)
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            <CustomQrCodeSvg text={qrcode} style={{width:200,height:200}}></CustomQrCodeSvg>
        </View>
    )
}

export function QrcodeDemoCreateTable() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const setCode = () => {
        setQrcode(ip)
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            <CustomQrCodeTable text={qrcode} style={{width:200,height:200}}></CustomQrCodeTable>
        </View>
    )
}

export function QrcodeDemoCreateAsc() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const setCode = () => {
        setQrcode(ip)
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            <CustomQrCodeAsc text={qrcode} style={{width:200,height:200}}></CustomQrCodeAsc>
        </View>
    )
}