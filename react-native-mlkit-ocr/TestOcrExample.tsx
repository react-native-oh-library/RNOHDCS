/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
    StyleSheet,
    View,
    Button,
    SafeAreaView,
    ScrollView,
    Text,
    Dimensions,
    ActivityIndicator,
} from 'react-native';
import MlkitOcr, { MlkitOcrResult } from 'react-native-mlkit-ocr';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scroll: {
        flex: 1,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 2,
    },
});
export const OcrTest = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [result, setResult] = React.useState<MlkitOcrResult | undefined>();

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator />
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {Array.isArray(result) && result?.length && (
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'stretch',
                        padding: 20,
                        height: Dimensions.get('window').height,
                    }}
                    showsVerticalScrollIndicator
                    style={styles.scroll}
                >
                    {result?.map((block) => {
                        return block.lines.map((line) => {
                            return (
                                <View
                                    key={line.text}
                                    style={{
                                        backgroundColor: '#ccccccaf',
                                    }}
                                >
                                    <Text style={{ fontSize: 10 }}>{line.text}</Text>
                                </View>
                            );
                        });
                    })}
                </ScrollView>
            )}

            <Button
                title="识别网络照片"
                onPress={() => {
                    MlkitOcr.detectFromUri('https://res.vmallres.com//uomcdn/CN/pms/202407/E3B48F7290631FAF341FDB09CF907F03.jpg').then(res => {
                        setTimeout(() => {
                            setResult(res)
                            console.log("================uri=res", JSON.stringify(res))
                        }, 1000)
                    }).catch(err => {
                        console.log("=========err", err);
                    })
                }}
            />
            <Button
                title="识别本地照片"
                onPress={() => {
                    MlkitOcr.detectFromFile('file://docs/storage/Users/currentUser/test/1.jpg').then(res => {
                        setTimeout(() => {
                            setResult(res)
                            console.log("================file=res", JSON.stringify(res))
                        }, 1000)
                    }).catch(err => {
                        console.log("=========err", err);
                    })
                }}
            />
        </SafeAreaView>
    );
}

