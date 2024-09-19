import React from 'react';
import {  Image,Text,Button } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'
import type { IOnClick } from 'react-native-image-pan-zoom';
export default function() {
    const [cropWidth, setCropWidth] = React.useState<number>(300)
    const [cropHeight, setCropHeight] = React.useState<number>(300)
    const [imageWidth, setImageWidth] = React.useState<number>(300) 
    const [imageHeight, setImageHeight] = React.useState<number>(300) 
    const [onDoubleClickData, setOnDoubleClickData] = React.useState("onDoubleClick: Haven't onDoubleClicked yet");
    const [doubleClickInterval,setDoubleClickInterval]=React.useState<number>(175)
    const onDoubleClickFun=(evt: IOnClick)=>{
        setOnDoubleClickData(`onDoubleClick: x: ${evt.locationX.toFixed(2)} y: ${evt.locationY.toFixed(2)}`)
    }
    return (
        <>
        <Text>{`doubleClickInterval value: ${doubleClickInterval===175?'default 175ms':doubleClickInterval+'ms'}`}</Text>
        <Text>{onDoubleClickData}</Text>
           <ImageZoom
                cropWidth={cropWidth}
                cropHeight={cropHeight}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                onDoubleClick={onDoubleClickFun}
                enableDoubleClickZoom={false}
                pinchToZoom={false}
                doubleClickInterval={doubleClickInterval}
            >
                <Image
                    style =  {{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
            <Button title='change doubleClickInterval value' onPress={()=>setDoubleClickInterval(doubleClickInterval===175?1000:175)}/>
        </>
    )

}