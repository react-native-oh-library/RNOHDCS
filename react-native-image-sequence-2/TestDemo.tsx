import React, { useState } from "react"
import { SafeAreaView, StyleSheet } from "react-native-harmony";
import {View, Text, Switch, TextInput, Button} from 'react-native'
import TestDemo2 from "./TestDemo2";

const images = [
    {uri: 'https://octodex.github.com/images/stormtroopocat.jpg'},
    {uri: 'https://octodex.github.com/images/saint_nictocat.jpg'},
    require('./assets/2.jpg'),
    require('./assets/3.jpg'),
    require('./assets/4.jpg'),
    require('./assets/5.jpg'),
    require('./assets/6.jpg'),
]

export interface sequenceType {
    images: NodeRequire[],
    loop: boolean,
    startFrameIndex: number,
    framesPerSecond: number,
    downsampleWidth: number,
    downsampleHeight: number
}

const ImageSequenceDemo = (props: any) => {
    const [loopData, setLoopData] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [winWidth, setWinWidth] = useState(300);
    const [winHeight, setWinHeight] = useState(200);
    const [downsampleWidth, setDownSampleWidth] = useState(-1);
    const [downsampleHeight, setDownSampleHeight] = useState(-1);

    // 设置采样宽度
    const inputSampleWidth = (value: string) => {
        if (isNaN(Number(value))) {
            return;
        }
        setDownSampleWidth(Number(value))
    }

    // 设置采样高度
    const inputSampleHeight = (value: string) => {
        if (isNaN(Number(value))) {
            return;
        }
        setDownSampleHeight(Number(value))
    }

    // 设置起始位置
    const [startFrameIndex, setFrameIndex] = useState(0);
    const inputStartFrameIndex = (value: string) => {
        if (isNaN(Number(value))) {
            return
        }
        let _value = Number(value)
        if (Number(value) > images.length) {
            _value = 0
        }
        setFrameIndex(_value)
    }

    // 设置速率
    const [framesPerSecond, setFramesPerSecond] = useState(24);
    const inputFramesPerSecond = (value: string) => {
        if (isNaN(Number(value))) {
            return;
        }
        let _value = Number(value)
        if (Number(value) <= 0) {
            _value = 24
        }
        setFramesPerSecond(_value)
    }

    const buttonIsShow = () => {
        setIsShow(!isShow)
    }

    const inputSetWinWidth = (value:string) => {
        if (isNaN(Number(value))) {
            return;
        }
        setWinWidth(Number(value))
    }

    const inputSetWinHeight = (value: string) => {
        if (isNaN(Number(value))) {
            return;
        }
        setWinHeight(Number(value))
    }

    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text>Current view size:width: {winWidth}, height:{winHeight}</Text>
                    <Text>开启循环：<Switch value = {loopData} onValueChange = {setLoopData}></Switch></Text>
                    <View>
                        <Text>图片宽度/高度：</Text>
                        <View style={styles.box}>
                            <TextInput style={[styles.input, styles.input1]} onChangeText={value => inputSetWinWidth(value)} defaultValue='300' keyboardType='numeric' />
                            <TextInput style={[styles.input, styles.input1]} onChangeText={value => inputSetWinHeight(value)} defaultValue='200' keyboardType='numeric' />
                        </View>
                    </View>
                    <Text>开始位置：</Text><TextInput style={styles.input} onChangeText={value=>inputStartFrameIndex(value)} defaultValue="0" keyboardType="numeric"/>
                    <Text>播放速度：</Text><TextInput style={styles.input} onChangeText={value=>inputFramesPerSecond(value)} defaultValue="24" keyboardType="numeric"/>
                    <View>
                        <Text>采样宽度/高度：</Text>
                        <View style={styles.box}>
                            <TextInput style={[styles.input, styles.input1]} onChangeText={value => inputSampleWidth(value)} defaultValue='-1' keyboardType='default' />
                            <TextInput style={[styles.input, styles.input1]} onChangeText={value => inputSampleHeight(value)} defaultValue='-1' keyboardType='default' />
                        </View>
                    </View>
                </View>
                {
                    !isShow?<Button title='显示' onPress={()=>buttonIsShow()}/> : <Button title='返回' onPress={() => buttonIsShow()}/>
                }
                {
                    isShow? <TestDemo2 loop={loopData} images={images} width={winWidth} height={winHeight} startFrameIndex={startFrameIndex} framesPerSecond={framesPerSecond} downsampleWidth={downsampleWidth} downsampleHeight={downsampleHeight}/> : null
                }
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        width: 200
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    input1:{
        width: 100
    }
})

export default ImageSequenceDemo
