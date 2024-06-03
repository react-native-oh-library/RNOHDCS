import React,{useState} from "react";
import{View,TextInput,Button,Text} from "react-native"
import {CustomQrCode,CustomQrCodeImg,CustomQrCodeSvg,CustomQrCodeTable,CustomQrCodeAsc} from './qrcodeDemo'

export function QrcodeDemoCreateUrl() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const [msg,setMsg] = useState('请最多输入78个字符')
    const setCode = () => {
        if(ip.length > 78) {
            setMsg(`输入已达到最大限制，无法生成。目前长度：${ip.length}`)
        } else {
            setMsg(`目前长度：${ip.length}`)
            setQrcode(ip)
        }
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <View style={{padding:10}}><Text>{msg}</Text></View>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            {ip.length > 78 ? <></> : <CustomQrCode text={qrcode} style={{width:200,height:200}}></CustomQrCode>}
        </View>
    )
}

export function QrcodeDemoCreateImg() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const [msg,setMsg] = useState('请最多输入78个字符')
    const setCode = () => {
        if(ip.length > 78) {
            setMsg(`输入已达到最大限制，无法生成。目前长度：${ip.length}`)
        } else {
            setMsg(`目前长度：${ip.length}`)
            setQrcode(ip)
        }
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <View style={{padding:10}}><Text>{msg}</Text></View>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            {ip.length > 78 ? <></> : <CustomQrCodeImg text={qrcode} style={{width:200,height:200}}></CustomQrCodeImg>}
        </View>
    )
}

export function QrcodeDemoCreateSvg() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const [msg,setMsg] = useState('请最多输入78个字符')
    const setCode = () => {
        if(ip.length > 78) {
            setMsg(`输入已达到最大限制，无法生成。目前长度：${ip.length}`)
        } else {
            setMsg(`目前长度：${ip.length}`)
            setQrcode(ip)
        }
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <View style={{padding:10}}><Text>{msg}</Text></View>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            {ip.length > 78 ? <></> : <CustomQrCodeSvg text={qrcode} style={{width:200,height:200}}></CustomQrCodeSvg>}
        </View>
    )
}

export function QrcodeDemoCreateTable() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const [msg,setMsg] = useState('请最多输入78个字符')
    const setCode = () => {
        if(ip.length > 78) {
            setMsg(`输入已达到最大限制，无法生成。目前长度：${ip.length}`)
        } else {
            setMsg(`目前长度：${ip.length}`)
            setQrcode(ip)
        }
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <View style={{padding:10}}><Text>{msg}</Text></View>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            {ip.length > 78 ? <></> : <CustomQrCodeTable text={qrcode} style={{width:200,height:200}}></CustomQrCodeTable>}

        </View>
    )
}

export function QrcodeDemoCreateAsc() {
    const [qrcode,setQrcode] = useState('hello word')
    const [ip,setIp] = useState('hello word')
    const [msg,setMsg] = useState('请最多输入78个字符')
    const setCode = () => {
        if(ip.length > 78) {
            setMsg(`输入已达到最大限制，无法生成。目前长度：${ip.length}`)
        } else {
            setMsg(`目前长度：${ip.length}`)
            setQrcode(ip)
        }
    }
    const handLeOnChange = (value) => {
        setIp(value)
    }
    return(
        <View>
            <TextInput value={ip} onChangeText={(value) => {handLeOnChange(value)}}></TextInput>
            <View style={{padding:10}}><Text>{msg}</Text></View>
            <Button title="点击生成" onPress={() => {setCode()}}></Button>
            {ip.length > 78 ? <></> : <CustomQrCodeAsc text={qrcode} style={{width:200,height:200}}></CustomQrCodeAsc>}
        </View>
    )
}