import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer, Page } from './Navigation';
import { PortalHost, PortalProvider } from '@gorhom/portal';
import {AutoHeightWebViewwDemo} from "./AutoHeightTest"
import ScrollViewD from "./ScrollZoom"



function AppTest() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <PortalProvider>
                    <Page name='EXAMPLE: AutoHeightWebViewwDemo'>
                        <AutoHeightWebViewwDemo />
                    </Page>
                    <Page name='EXAMPLE: ScrollViewD'>
                        <ScrollViewD />
                    </Page>
                    
                </PortalProvider>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default AppTest;
