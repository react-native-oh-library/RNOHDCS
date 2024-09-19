import React from 'react';
import {  Image,Text,Button } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'
export default function() {
    const [cropWidth, setCropWidth] = React.useState<number>(300)
    const [cropHeight, setCropHeight] = React.useState<number>(300)
    const [imageWidth, setImageWidth] = React.useState<number>(600) 
    const [imageHeight, setImageHeight] = React.useState<number>(600) 
    const [panToMove, setPanToMove] = React.useState<boolean>(true) 
    const [enableCenterFocus, setEnableCenterFocus] = React.useState<boolean>(false) 
 
 

    return (
        <>
        <Text>{`enableCenterFocus value: ${enableCenterFocus} `}</Text>
           <ImageZoom
                cropWidth={cropWidth}
                cropHeight={cropHeight}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                enableDoubleClickZoom={false}
                panToMove={panToMove}
                enableCenterFocus={enableCenterFocus}
                pinchToZoom={false}
    
            >
                <Image
                    style =  {{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
            <Button title='change enableCenterFocus value' onPress={()=>setEnableCenterFocus(!enableCenterFocus)}/>
        </>
    )

}