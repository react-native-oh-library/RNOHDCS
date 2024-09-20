import React from 'react';
import {  Image,Text,Button } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'


export default function() {
    const defaultCenter = {
        x: 0,
        y: 0,
        scale: 1,
        duration: 300
    }

    const customIsCenterData={
        x: 100,
        y: 100,
        scale: 1,
        duration: 300
    }
    const [cropWidth, setCropWidth] = React.useState<number>(300)
    const [cropHeight, setCropHeight] = React.useState<number>(300)
    const [imageWidth, setImageWidth] = React.useState<number>(300) 
    const [imageHeight, setImageHeight] = React.useState<number>(300) 
    const [panToMove, setPanToMove] = React.useState<boolean>(true) 

    const [isCenterOn, setIsCenterOn] = React.useState<boolean>(false) 
    const [centerData, setCenterData] = React.useState(defaultCenter);
 

    
   const changeFun=()=>{
    setIsCenterOn(!isCenterOn)
    setCenterData(isCenterOn?defaultCenter:customIsCenterData)
   }

    return (
        <>
        <Text>{`useNativeDriver value: true(set)`}</Text>
        <Text>{`isCenterOn value: ${isCenterOn}`}</Text>
        <Text>{`centerData value: ${JSON.stringify(centerData)}`}</Text>
           <ImageZoom
                cropWidth={cropWidth}
                cropHeight={cropHeight}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                enableDoubleClickZoom={false}
                panToMove={panToMove}
                enableCenterFocus={false}
                pinchToZoom={true}
                centerOn={centerData}
               useNativeDriver={true}
            >
                <Image
                    style =  {{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
            <Button title='change isCenterOn value' onPress={()=>changeFun()}/>
        
        </>
    )

}