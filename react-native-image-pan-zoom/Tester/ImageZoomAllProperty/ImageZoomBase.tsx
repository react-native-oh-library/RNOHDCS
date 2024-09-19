import React from 'react';
import {  Image, StyleSheet } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'

export default function() {
    const [cropWidth, setCropWidth] = React.useState<number>(300)
    const [cropHeight, setCropHeight] = React.useState<number>(300)
    const [imageWidth, setImageWidth] = React.useState<number>(200) 
    const [imageHeight, setImageHeight] = React.useState<number>(200) 


    return (
        <>
           <ImageZoom
               style={styles.style}
                cropWidth={cropWidth}
                cropHeight={cropHeight}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                enableDoubleClickZoom={false}
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
        </>
    )

}

const styles = StyleSheet.create({
    style: {
      backgroundColor:'red',
    },
  });
