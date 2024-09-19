import React, { useEffect } from 'react';
import {  Image,Text,Button} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'
export default function() {
    const [cropWidth, setCropWidth] = React.useState<number>(300)
    const [cropHeight, setCropHeight] = React.useState<number>(300)
    const [imageWidth, setImageWidth] = React.useState<number>(300) 
    const [imageHeight, setImageHeight] = React.useState<number>(300) 
    const [panToMove, setPanToMove] = React.useState<boolean>(true) 
    const [enableSwipeDown, setEnableSwipeDown] = React.useState<boolean>(false) 
    const [count, setCount] = React.useState<number>(0) 
    const [onSwipeDownData, setOnSwipeDownData] = React.useState<string>("onSwipeDown: Haven't onSwipeDowned yet") 
    const [swipeDownThreshold,setSwipeDownThreshold]=React.useState<number>(230) 

    const onSwipeDownFun=()=>{
        setCount(count+1)
       
    }

    useEffect(()=>{
        if(count!=0) setOnSwipeDownData(`onSwipeDown触发${count}次`)
    },[count])

    
    
    return (
        <>
       
               
        <Text>{`enableSwipeDown value: ${enableSwipeDown} `}</Text>
        <Text>{`swipeDownThreshold value: ${swipeDownThreshold===230?'default 230':swipeDownThreshold}`}</Text>
        <Text>{onSwipeDownData}</Text>
           <ImageZoom
                cropWidth={cropWidth}
                cropHeight={cropHeight}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                enableDoubleClickZoom={true}
                panToMove={panToMove}
                enableCenterFocus={true}
                pinchToZoom={false}
                enableSwipeDown={enableSwipeDown}
                onSwipeDown={onSwipeDownFun}
                swipeDownThreshold={swipeDownThreshold}
            >
                <Image
                    style =  {{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
            <Button title='change enableSwipeDown value' onPress={()=>setEnableSwipeDown(!enableSwipeDown)}/>
            <Button title='change swipeDownThreshold value' onPress={()=>setSwipeDownThreshold(swipeDownThreshold===230?150:230)}/>
         
         
        </>
    )

}