import React from 'react';
import {  Image,Text,Button } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'
import type { IOnClick } from 'react-native-image-pan-zoom';
export default function() {
    const [cropWidth, setCropWidth] = React.useState<number>(300)
    const [cropHeight, setCropHeight] = React.useState<number>(300)
    const [imageWidth, setImageWidth] = React.useState<number>(600) 
    const [imageHeight, setImageHeight] = React.useState<number>(600) 
    const [onLongPressData, setOnLongPressData] = React.useState("onLongPress: Haven't onLongPressed yet");
    const [longPressTimeDelay,setLongPressTimeDelay]=React.useState<number>(800) 
    
    const onLongPressHandler=(evt: IOnClick)=>{
        setOnLongPressData(`onLongPress: x: ${evt.locationX.toFixed(2)} y: ${evt.locationY.toFixed(2)}`)
    }
    return (
        <>
        <Text>{`longPressTime value: ${longPressTimeDelay===800?'default 800ms':longPressTimeDelay+'ms'}`}</Text>
        <Text>{onLongPressData}</Text>
           <ImageZoom
                cropWidth={cropWidth}
                cropHeight={cropHeight}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                onLongPress={onLongPressHandler}
                enableDoubleClickZoom={false}
                pinchToZoom={false}
                longPressTime={longPressTimeDelay}
                enableCenterFocus={false}
            >
                <Image
                    style =  {{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
            <Button title='change longPressTime value' onPress={()=>setLongPressTimeDelay(longPressTimeDelay===800?2000:800)}/>
        </>
    )

}

