import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    View,
    Text,
    Platform,
    StatusBar
} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Router } from "./reactNativeShared/components";
import { MainScreen } from "./reactNativeShared/screens";

const TEST_ANDROID_STATUSBAR_OFFSET = false;

if (Platform.OS === "android") {
    StatusBar.setTranslucent(!TEST_ANDROID_STATUSBAR_OFFSET);
    StatusBar.setBackgroundColor("transparent");
}

export default class ReactNavigationSharedElementDemo extends Component {

    render() {
        return (
            <View style={[styles.container]}>
                <SafeAreaProvider>
                    <View style={{ flex: 1, marginTop: 0, transform: [{ translateY: 0 }] }}>
                        <Router initialNode={<MainScreen />} />
                    </View>
                </SafeAreaProvider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#ffffff'
    }
});
