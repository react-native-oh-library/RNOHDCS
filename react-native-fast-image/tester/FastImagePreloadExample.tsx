import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SectionFlex from './utils/SectionFlex'
import FastImage from 'react-native-fast-image'
import Button from './utils/Button'
// @ts-ignore

const source = [ 
"https://gitee.com/kongchuiyu1/test/raw/master/1.jpg",
"https://gitee.com/kongchuiyu1/test/raw/master/1.jpg",
"https://gitee.com/kongchuiyu1/test/raw/master/2.jpg",
"https://gitee.com/kongchuiyu1/test/raw/master/3.jpg",
"https://gitee.com/kongchuiyu1/test/raw/master/4.jpg",
"https://gitee.com/kongchuiyu1/test/raw/master/5.jpg",
"https://gitee.com/kongchuiyu1/test/raw/master/6.jpg",
"https://gitee.com/kongchuiyu1/test/raw/master/7.jpg",
"https://gitee.com/kongchuiyu1/test/raw/master/8.jpg",
 ];

export const FastImagePreloadExample = () => {
    const [show, setShow] = useState(false)
    const [i, setI] = useState(0);
    const [ url, bust ] = useState('https://gitee.com/kongchuiyu1/test/raw/master/1724492090596.jpg')

    const preload = () => {
        FastImage.preload([{ uri: url }])
    }

    return (
        <View>
            <SectionFlex style={styles.section}>
                <Text>图片uri{url}</Text>
                {show ? (
                    <FastImage style={styles.image} source={{ uri: url }} />
                ) : (
                    <View style={styles.image} />
                )}
                <View style={styles.buttons}>
                    <View style={styles.buttonView}>
                        <Button text="Bust" onPress={()=>{
                            setShow(false);
                            FastImage.clearMemoryCache();
                            FastImage.clearDiskCache();
                            setI(i+1);
                            if(i>=source.length-1){
                                setI(0);
                            }
                            bust(source[i]);
                        }} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button text="Preload" onPress={preload} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            text={show ? 'Hide' : 'Show'}
                            onPress={() => {setShow((v) => !v)}}
                        />
                    </View>
                </View>
            </SectionFlex>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonView: { flex: 1 },
    section: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    image: {
        backgroundColor: '#ddd',
        margin: 20,
        marginBottom: 10,
        height: 100,
        width: 100,
    },
})