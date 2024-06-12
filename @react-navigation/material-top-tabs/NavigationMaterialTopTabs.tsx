import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
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
        <Tester style={{ flex: 1 }}>
            <TestSuite name='navigation material top tabs'>
                <TestCase itShould='render navigation' tags={['C_API']}>
                    <View style={{ height: 300 }}>
                        <NavigationContainer>
                            <Tab.Navigator >
                                <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
                                <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: '设置' }} />
                            </Tab.Navigator>
                        </NavigationContainer>
                    </View>
                </TestCase>
            </TestSuite>
        </Tester>
    );
}

export default NavigationMaterialTopTabs