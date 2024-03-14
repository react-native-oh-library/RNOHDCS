import React,{useState} from "react";
import{View,ScrollView} from "react-native"
import { NavigationContainer,Page } from '../../components'
import {QrcodeDemoCreateUrl,QrcodeDemoCreateImg,QrcodeDemoCreateSvg,QrcodeDemoCreateTable,QrcodeDemoCreateAsc} from './QrcodeDemoCreateUrl'

function App() {
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
            <NavigationContainer>
                <Page name="生成url">
                    <ScrollView><QrcodeDemoCreateUrl /></ScrollView>
                </Page>
                <Page name="生成img标签">
                    <ScrollView><QrcodeDemoCreateImg /></ScrollView>
                </Page>
                <Page name="生成svg标签">
                    <ScrollView><QrcodeDemoCreateSvg /></ScrollView>
                </Page>
                <Page name="生table标签">
                    <ScrollView><QrcodeDemoCreateTable /></ScrollView>
                </Page>
                <Page name="生成ASC码">
                    <ScrollView><QrcodeDemoCreateAsc /></ScrollView>
                </Page>
            </NavigationContainer>
        </View>
    )
}

export default App;