import React, { Component, useCallback } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    StatusBar,
} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Router } from "./reactNativeShared/components";
import { Tests } from "./reactNativeShared/tests";
import { TestsScreen } from "./reactNativeShared/screens/TestsScreen";

const TEST_ANDROID_STATUSBAR_OFFSET = false;

if (Platform.OS === "android") {
    StatusBar.setTranslucent(!TEST_ANDROID_STATUSBAR_OFFSET);
    StatusBar.setBackgroundColor("transparent");
}
export default function ReactNavigationSharedElementDemo() {
    return (
        <View style={[styles.container]}>
            <SafeAreaProvider>
                <View style={{ flex: 1, marginTop: 0, transform: [{ translateY: 0 }] }}>
                    <Router initialNode={<TestsScreen tests={Tests} />} />
                </View>
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
    }
});

export {
    ReactNavigationSharedElementDemo
}