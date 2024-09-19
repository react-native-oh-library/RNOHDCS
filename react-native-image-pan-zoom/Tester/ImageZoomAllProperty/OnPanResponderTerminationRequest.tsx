import React, {PureComponent, Component, useState} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PanResponder,
    Image,
    Button
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'


export default function() {
    const [backgroundColor1,setBackgroundColor1]=React.useState<string>('grey')
    const [marginLeft1,setMarginLeft1]=React.useState<number>(0)
    const [terminationRequestVal,setTerminationRequestVal]=React.useState<boolean>(false)
    const [val,setVal]=React.useState<string>("Haven't OnPanResponderTerminationRequest yet")
    const [val1,setVal1]=React.useState<string>("Haven't OnPanResponderTerminationRequest yet")

    const _panResponder1=PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => {
            return true;
        },
        onMoveShouldSetPanResponder:  (evt, gestureState) => {
            return true;
        },
        onPanResponderTerminationRequest:(e, gestureState)=> {
            return true
        },
        onPanResponderGrant: (evt, gestureState) => {
            // this._highlight1();
        },
        onPanResponderMove: (evt, gestureState) => {
            setMarginLeft1(marginLeft1+gestureState.dx)
    
        },
        onPanResponderRelease: (evt, gestureState) => {
            //
        },
        onPanResponderTerminate: (evt, gestureState) => {
            //
        },
    })

    const terminationRequestHandler=()=>{
        console.log('11112222')
        setVal('触发OnPanResponderTerminationRequest')
        return false;
    }

    const terminationRequestHandler1=()=>{
        console.log('22223333')
        setVal1('触发OnPanResponderTerminationRequest')
        return true;
    }
   
        return (
            <View style={styles.container}>
                
                <View style={
                    [styles.greyView,
                    {
                        backgroundColor: backgroundColor1,
                        // marginTop: this.state.marginTop1,
                        marginLeft: marginLeft1,
                    }
                    ]}
                      {..._panResponder1.panHandlers}
                >
                   <Text>TerminationRequestVal value false</Text>
                   <Text>{val}</Text>
                    <ImageZoom
               style={styles.style}
                cropWidth={150}
                cropHeight={150}
                imageWidth={300}
                imageHeight={300}
                enableDoubleClickZoom={false}
                pinchToZoom={false}
                panToMove={true}
                onPanResponderTerminationRequest={terminationRequestHandler}
            >
                <Image
                    style =  {{
                        width: 300,
                        height: 300,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
            <Text>TerminationRequestVal value true</Text>
            <Text>{val1}</Text>
            <ImageZoom
               style={styles.style}
                cropWidth={150}
                cropHeight={150}
                imageWidth={300}
                imageHeight={300}
                enableDoubleClickZoom={false}
                pinchToZoom={false}
                panToMove={true}
                onPanResponderTerminationRequest={terminationRequestHandler1}
            >
                <Image
                    style =  {{
                        width: 300,
                        height: 300,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
                </View>
            </View>
        );
    
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greyView: {
        width: 300,
        height: 400,
    },

    style: {
        backgroundColor:'red',
      },
});
 