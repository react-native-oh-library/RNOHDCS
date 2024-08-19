import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SectionFlex from './utils/SectionFlex'
import FastImage from 'react-native-fast-image'
import Button from './utils/Button'
// @ts-ignore
import { useCacheBust } from './utils/useCacheBust'

const IMAGE_URL =
'https://media.giphy.com/media/ZLOLugEJcNtJxu9rnw/giphy.gif'

export const FastImagePreloadExample = () => {
    const [show, setShow] = useState(false)
    const { url, bust } = useCacheBust(IMAGE_URL)

    const preload = () => {
        FastImage.preload([{ uri: url }])
    }

    return (
        <View>
            <SectionFlex style={styles.section}>
                {show ? (
                    <FastImage style={styles.image} source={{ uri: url }} />
                ) : (
                    <View style={styles.image} />
                )}
                <View style={styles.buttons}>
                    <View style={styles.buttonView}>
                        <Button text="Bust" onPress={bust} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button text="Preload" onPress={preload} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            text={show ? 'Hide' : 'Show'}
                            onPress={() => setShow((v) => !v)}
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
