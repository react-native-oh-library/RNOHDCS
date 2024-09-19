import React from 'react';
import {  Image,Text,Button } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'
import type { IOnMove } from 'react-native-image-pan-zoom';

export default function() {
    const [cropWidth, setCropWidth] = React.useState<number>(300)
    const [cropHeight, setCropHeight] = React.useState<number>(300)
    const [imageWidth, setImageWidth] = React.useState<number>(600) 
    const [imageHeight, setImageHeight] = React.useState<number>(600) 
    const [panToMove, setPanToMove] = React.useState<boolean>(true) 
    const [onMoveData,setOnMoveData]=React.useState<string>("onMove: Haven't onMoved yet") 
    const [minScale, setMinScale] = React.useState<number>(0.6) 
    const [maxScale, setMaxScale] = React.useState<number>(10) 
  
   
    const moveHandler = (data: IOnMove) => {
        const { type, positionX, positionY, scale, zoomCurrentDistance } = data;
        setOnMoveData(`Move: type:${type} positionX:${positionX.toFixed(2)} positionY:${positionY.toFixed(2)} scale:${scale.toFixed(2)} zoomCurrentDistance:${zoomCurrentDistance}`);
    }

    const reset=()=>{
        this.ImageZoom.reset()
        setOnMoveData('reset move data')
    }

    return (
        <>
        <Text>{`minScale value: ${minScale===0.6?'default 0.6':minScale}`}</Text>
        <Text>{`maxScale value: ${maxScale===10?'default 10':maxScale}`}</Text>
        <Text>{onMoveData}</Text>
           <ImageZoom
                ref={(ref:any) => (this.ImageZoom = ref)}
                cropWidth={cropWidth}
                cropHeight={cropHeight}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                enableDoubleClickZoom={false}
                panToMove={panToMove}
                enableCenterFocus={false}
                pinchToZoom={true}
                onMove={moveHandler}
                minScale={minScale}
                maxScale={maxScale}
            >
                <Image
                    style =  {{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
            <Button title='reset' onPress={()=>reset()}/>
            <Button title='change minScale' onPress={()=>setMinScale(minScale===0.6?0.4:0.6)}/>
            <Button title='change maxScale' onPress={()=>setMaxScale(maxScale===10?8:10)}/>
        </>
    )

}