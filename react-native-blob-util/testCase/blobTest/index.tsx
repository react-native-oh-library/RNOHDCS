import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer, Page } from './Navigation';
import { PortalHost, PortalProvider } from '@gorhom/portal';
import BlobTest from "./BlobTest"
import BlobFetch from "./BlobFetch"



function AppTest() {
    return (
        
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <PortalProvider>
                    <Page name='EXAMPLE: BlobTest'>
                        <BlobTest />
                    </Page>
                    <Page name='EXAMPLE: BlobFetch'>
                        <BlobFetch />
                    </Page>
                    
                </PortalProvider>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default AppTest;
