import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { compress, decompress, compressWithPsd, decompressWithPsd } from 'react-native-zip-archive';


export function ZipArchiveDemo() {

    return (
        <View style={styles.content}>
            <View style={styles.buttonSix}>
                <Button title='压缩' onPress={() => {
                    compress();
                }} />
            </View>

            <View style={styles.buttonSix}>
                <Button title='解压' onPress={() => {
                    decompress();
                }} />
            </View>

            <View style={styles.buttonSix}>
                <Button title='加密压缩' onPress={() => {
                    compressWithPsd();
                }} />
            </View>

            <View style={styles.buttonSix}>
                <Button title='加密解压' onPress={() => {
                    decompressWithPsd();
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    buttonSix: {
        width: '65%',
        marginBottom: 30
    }
})