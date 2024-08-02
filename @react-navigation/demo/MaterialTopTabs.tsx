import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text,SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

const Tab = createMaterialTopTabNavigator();


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}


function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings Screen</Text>
        </View>
    );
}


export function NavigationMaterialTopTabs() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator >
                    <Tab.Screen name="Home" component={HomeScreen} options={{ title: '家' }} />
                    <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: '设置' }} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default {NavigationMaterialTopTabs}