import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SectionFlex from './utils/SectionFlex'
import FastImage from 'react-native-fast-image'
import Button from './utils/Button'
// @ts-ignore

const source = [ 
"https://news.inewsweek.cn/society/2025-08-28/U695P972T2D26451F122DT20250828114111.jpeg",
"https://news.inewsweek.cn/society/2025-08-28/U695P972T2D26451F122DT20250828114111.jpeg",
"https://news.inewsweek.cn/cover/2025-08-27/U695P972T2D26443F122DT20250827095331.png",
"https://www.inewsweek.cn/society/2025-08-22/U695P972T2D26399F122DT20250822161905.png",
"https://www.inewsweek.cn/society/2025-08-21/U695P972T2D26388F122DT20250821164030.png",

 ];

 const FastImagePreloadExample = () => {
    const [show, setShow] = useState(false)
    const [i, setI] = useState(0);
    const [ url, bust ] = useState('https://www.inewsweek.cn/finance/2025-08-19/U695P972T2D26355F122DT20250819175954.png')

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


export default FastImagePreloadExample