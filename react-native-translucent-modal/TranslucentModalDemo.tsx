import React, { useState } from "react";
import { View, Image, Button, StyleSheet, Alert } from "react-native-harmony";
// @ts-expect-error
import Modal from "react-native-translucent-modal";

const STYLES = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    imageBackground: {
        width: 300,
        height: 200,
    }
});

export const E_ReactNativeTranslucentModal: React.FC = (): JSX.Element => {

    const [visible, setVisible] = useState(false)

    return <View style={STYLES.wrapper}>
        <Modal transparent={false} animationType='slide'
            visible={visible} onRequestClose={() => setVisible(!visible)}>
            <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4' }} style={STYLES.imageBackground} />
        </Modal>
        <Button title="显示Modal" onPress={() => setVisible(true)}></Button>
    </View>;
}

export default E_ReactNativeTranslucentModal