import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { CommonActions } from '@react-navigation/routers';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function HomeScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.dispatch(CommonActions.navigate('Settings', {
                    id: Math.floor(Math.random() * 100)
                }))}
            />
        </View>
    );
}

function SettingsScreen({ navigation, route }) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Text>params: {JSON.stringify(route.params || {})} </Text>
            <Button title="Go Back" onPress={() => navigation.dispatch(CommonActions.goBack())} />
        </View>
    );
}

const Tab = createBottomTabNavigator()

export default function Routers() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export {Routers}