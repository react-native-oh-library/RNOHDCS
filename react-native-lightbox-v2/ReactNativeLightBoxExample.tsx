import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    Alert,
} from 'react-native';

import Lightbox from 'react-native-lightbox-v2';


const BASE_PADDING = 10;


export const ReactNativeLightBoxExample = () => {
    let [info, setInfo] = useState('')

    const callBack = (type: any) => {
        setInfo(type)
        Alert.alert(type)
    }

    let eventObject = {
        willClose: () => callBack('willClose'),
        onClose: () => callBack('onClose'),
        onOpen: () => callBack('onOpen'),
        didOpen: () => callBack('didOpen'),
        onLongPress: () => callBack('onLongPress'),
        onLayout: () => callBack('onLayout'),
        doubleTapCallback: () => callBack('doubleTapCallback'),
        longPressCallback: () => callBack('longPressCallback'),
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>eventCallBack {info}</Text>
            </View>
            <View style={styles.text}>
                <Text>eventCallBack </Text>
            </View>
            <Lightbox {...eventObject}>
                <View style={styles.customHeaderBox}>
                    <Text>I have eventCallBack</Text>
                </View>
            </Lightbox>

            <View style={styles.text}><Text>renderHeader </Text></View>
            <Lightbox
                renderHeader={close => (
                    <TouchableOpacity onPress={close}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                )}>
                <View style={styles.customHeaderBox}>
                    <Text>I have a custom header</Text>
                </View>
            </Lightbox>
            <View style={styles.text}><Text>renderContent </Text></View>
            <Lightbox
                renderContent={() =>
                    <View style={styles.customHeaderBox}>
                        <Text style={{ color: 'red' }}>renderContent</Text>
                    </View>}>
                <View style={styles.customHeaderBox}>
                    <Text>I have a custom renderContent</Text>
                </View>
            </Lightbox>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: BASE_PADDING,
        backgroundColor: 'white'
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
    customHeaderBox: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },

    row: {
        flexDirection: 'row',
        marginLeft: -BASE_PADDING,
        marginRight: -BASE_PADDING,
    },
    col: {
        flex: 1,
    },

    contain: {
        flex: 1,
        height: 150,
    },
    text: {
        marginVertical: BASE_PADDING * 2,
    }
});

