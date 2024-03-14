import React,{useState,useEffect} from "react";
import{View,Text,Image} from "react-native"
import QRCode from 'qrcode-generator'

export const CustomQrCode = ({text,style}) => {
    const [base64Img,setBase64Img] = useState('hello word')
    const [moduleCount,setModuleCount] = useState(0)
    const [dark,setDark] = useState(true)
    const [byte,setByte] = useState([1])
    useEffect(() => {
        const typeNumber = 4
        const errorCorrectionLevel = 'L'
        const qr = QRCode(typeNumber,errorCorrectionLevel)
        qr.addData(text)
        qr.make()
        setBase64Img(qr.createDataURL(4,10))
        setModuleCount(qr.getModuleCount)
        setDark(qr.isDark(2,2))
        setByte(QRCode.stringToBytes(text))
    },[text])

    return(
        <>
        {base64Img ? <Image source={{uri:base64Img}} style={style} resizeMode="contain"></Image> : null}
        <View>
            <Text>二维码每行的cell数{moduleCount}</Text>
        </View>
        <View>
            <Text>二维码row2和col2是否有信息{JSON.stringify(dark)}</Text>
        </View>
        <View>
            <Text>编译为字节序列{byte}</Text>
        </View>
        </>
    )
}

export const CustomQrCodeImg = ({text,style}) => {
    const [base64Img,setBase64Img] = useState('hello word')
    useEffect(() => {
        const typeNumber = 4
        const errorCorrectionLevel = 'L'
        const qr = QRCode(typeNumber,errorCorrectionLevel)
        qr.addData(text)
        qr.make()
        setBase64Img(qr.createImgTag(4,10))
    },[text])

    return(
        <>
        {base64Img ? <View><Text>{base64Img}</Text></View> : null}
        </>
    )
}

export const CustomQrCodeSvg = ({text,style}) => {
    const [base64Img,setBase64Img] = useState('hello word')
    useEffect(() => {
        const typeNumber = 4
        const errorCorrectionLevel = 'L'
        const qr = QRCode(typeNumber,errorCorrectionLevel)
        qr.addData(text)
        qr.make()
        setBase64Img(qr.createSvgTag(4,10))
    },[text])

    return(
        <>
        {base64Img ? <View><Text>{base64Img}</Text></View> : null}
        </>
    )
}

export const CustomQrCodeTable = ({text,style}) => {
    const [base64Img,setBase64Img] = useState('hello word')
    useEffect(() => {
        const typeNumber = 4
        const errorCorrectionLevel = 'L'
        const qr = QRCode(typeNumber,errorCorrectionLevel)
        qr.addData(text)
        qr.make()
        setBase64Img(qr.createTableTag(4,10))
    },[text])

    return(
        <>
        {base64Img ? <View><Text>{base64Img}</Text></View> : null}
        </>
    )
}

export const CustomQrCodeAsc = ({text,style}) => {
    const [base64Img,setBase64Img] = useState('hello word')
    useEffect(() => {
        const typeNumber = 4
        const errorCorrectionLevel = 'L'
        const qr = QRCode(typeNumber,errorCorrectionLevel)
        qr.addData(text)
        qr.make()
        setBase64Img(qr.createASCII(4,10))
    },[text])

    return(
        <>
        {base64Img ? <View><Text>{base64Img}</Text></View> : null}
        </>
    )
}